"use client"

import { useEffect, useState } from "react"

import { ROLES_DRAWER_COPY } from "../content/roles-content"
import type { RoleRecord } from "../content/roles-types"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import {
  SideDrawer,
  SideDrawerBody,
  SideDrawerContent,
  SideDrawerFooter,
  SideDrawerHeader,
} from "@/shared/ui/drawer"
import { FormInputField } from "@/shared/ui/form-field"

const drawerFooterButtonClassName = "h-11 rounded-xl shadow-none"

export type RoleFormValues = {
  name: string
}

export type RoleDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  role?: RoleRecord | null
  onSave?: (values: RoleFormValues, role?: RoleRecord | null) => void
  className?: string
}

function createEmptyForm(): RoleFormValues {
  return { name: "" }
}

export function RoleDrawer({ open, onOpenChange, role = null, onSave, className }: RoleDrawerProps) {
  const [form, setForm] = useState<RoleFormValues>(createEmptyForm)
  const copy = ROLES_DRAWER_COPY
  const isEdit = role != null

  useEffect(() => {
    if (open) {
      setForm({ name: role?.name ?? "" })
    }
  }, [open, role])

  const handleClose = () => onOpenChange(false)

  const handleSave = () => {
    onSave?.(form, role)
    onOpenChange(false)
  }

  return (
    <SideDrawer open={open} onOpenChange={onOpenChange}>
      <SideDrawerContent size="md" className={className}>
        <SideDrawerHeader
          title={isEdit ? copy.editTitle : copy.createTitle}
          onClose={handleClose}
          closeLabel={isEdit ? "Close edit role drawer" : "Close create role drawer"}
        />

        <SideDrawerBody>
          <FormInputField
            label={copy.roleNameLabel}
            value={form.name}
            placeholder={copy.roleNamePlaceholder}
            onValueChange={(name) => setForm({ name })}
            required
          />
        </SideDrawerBody>

        <SideDrawerFooter>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className={cn(drawerFooterButtonClassName, "border-neutral-200 bg-white hover:bg-neutral-50")}
            onClick={handleClose}
          >
            {copy.cancelLabel}
          </Button>
          <Button type="button" size="sm" className={drawerFooterButtonClassName} onClick={handleSave}>
            {copy.saveLabel}
          </Button>
        </SideDrawerFooter>
      </SideDrawerContent>
    </SideDrawer>
  )
}

RoleDrawer.displayName = "RoleDrawer"
