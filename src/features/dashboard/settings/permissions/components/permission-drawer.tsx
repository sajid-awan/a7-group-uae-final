"use client"

import { useEffect, useState } from "react"

import { PERMISSIONS_DRAWER_COPY } from "../content/permissions-content"
import {
  createInitialPermissionScopesForm,
  type PermissionScopesFormValues,
} from "../content/permissions-scopes-content"
import type { PermissionRecord } from "../content/permissions-types"
import { PermissionScopesPanel } from "./permission-scopes-form"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import {
  SideDrawer,
  SideDrawerBody,
  SideDrawerContent,
  SideDrawerFooter,
  SideDrawerHeader,
} from "@/shared/ui/drawer"

const drawerFooterButtonClassName = "h-11 rounded-xl shadow-none"

export type PermissionFormValues = PermissionScopesFormValues

export type PermissionDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  permission?: PermissionRecord | null
  onSave?: (values: PermissionFormValues, permission?: PermissionRecord | null) => void
  className?: string
}

export function PermissionDrawer({
  open,
  onOpenChange,
  permission = null,
  onSave,
  className,
}: PermissionDrawerProps) {
  const [form, setForm] = useState<PermissionScopesFormValues>(createInitialPermissionScopesForm)
  const copy = PERMISSIONS_DRAWER_COPY
  const isEdit = permission != null

  useEffect(() => {
    if (open) {
      setForm(createInitialPermissionScopesForm())
    }
  }, [open, permission])

  const handleClose = () => onOpenChange(false)

  const handleSave = () => {
    onSave?.(form, permission)
    onOpenChange(false)
  }

  return (
    <SideDrawer open={open} onOpenChange={onOpenChange}>
      <SideDrawerContent size="permissions" className={className}>
        <SideDrawerHeader
          title={isEdit ? copy.editTitle : copy.createTitle}
          onClose={handleClose}
          closeLabel={
            isEdit ? "Close edit permission drawer" : "Close create permission drawer"
          }
        />

        <SideDrawerBody className="bg-neutral-50 px-4 py-4">
          <PermissionScopesPanel value={form} onChange={setForm} />
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

PermissionDrawer.displayName = "PermissionDrawer"
