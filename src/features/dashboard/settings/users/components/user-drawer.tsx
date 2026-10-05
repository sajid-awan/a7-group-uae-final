"use client"

import { useEffect, useState } from "react"

import {
  createEmptyUserForm,
  getUserOptionValue,
  USER_PERMISSION_OPTIONS,
  USER_ROLE_OPTIONS,
  USER_TEAM_OPTIONS,
  USERS_DRAWER_COPY,
} from "../content/users-drawer-content"
import type { UserFormValues } from "../content/users-drawer-types"
import type { UserRecord } from "../content/users-types"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import {
  SideDrawer,
  SideDrawerBody,
  SideDrawerContent,
  SideDrawerFooter,
  SideDrawerHeader,
} from "@/shared/ui/drawer"
import { FormInputField, FormPasswordField, FormSelectField } from "@/shared/ui/form-field"

const drawerFooterButtonClassName = "h-11 rounded-xl shadow-none"

export type UserDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  user?: UserRecord | null
  onSave?: (values: UserFormValues, user?: UserRecord | null) => void
  className?: string
}

export function UserDrawer({
  open,
  onOpenChange,
  user = null,
  onSave,
  className,
}: UserDrawerProps) {
  const [form, setForm] = useState<UserFormValues>(createEmptyUserForm)
  const copy = USERS_DRAWER_COPY
  const isEdit = user != null

  useEffect(() => {
    if (open) {
      setForm({
        fullName: user?.name ?? "",
        email: user?.email ?? "",
        password: "",
        role: user ? getUserOptionValue(USER_ROLE_OPTIONS, user.role) : "",
        permission: user ? getUserOptionValue(USER_PERMISSION_OPTIONS, user.permission) : "",
        team: user ? getUserOptionValue(USER_TEAM_OPTIONS, user.teamName) : "",
      })
    }
  }, [open, user])

  const handleClose = () => onOpenChange(false)

  const handleSave = () => {
    onSave?.(form, user)
    onOpenChange(false)
  }

  const updateForm = (patch: Partial<UserFormValues>) => {
    setForm((current) => ({ ...current, ...patch }))
  }

  return (
    <SideDrawer open={open} onOpenChange={onOpenChange}>
      <SideDrawerContent size="md" className={className}>
        <SideDrawerHeader
          title={isEdit ? copy.editTitle : copy.createTitle}
          description={copy.description}
          onClose={handleClose}
          closeLabel={isEdit ? "Close edit user drawer" : "Close create user drawer"}
        />

        <SideDrawerBody className="space-y-5">
          <FormInputField
            label={copy.fullNameLabel}
            value={form.fullName}
            placeholder={copy.placeholder}
            onValueChange={(fullName) => updateForm({ fullName })}
            required
          />

          <FormInputField
            label={copy.emailLabel}
            value={form.email}
            placeholder={copy.placeholder}
            type="email"
            onValueChange={(email) => updateForm({ email })}
            required
          />

          <FormPasswordField
            label={copy.passwordLabel}
            value={form.password}
            onValueChange={(password) => updateForm({ password })}
            required={!isEdit}
          />

          <FormSelectField
            label={copy.roleLabel}
            value={form.role}
            placeholder={copy.selectPlaceholder}
            options={[...USER_ROLE_OPTIONS]}
            onValueChange={(role) => updateForm({ role })}
          />

          <FormSelectField
            label={copy.permissionLabel}
            value={form.permission}
            placeholder={copy.selectPlaceholder}
            options={[...USER_PERMISSION_OPTIONS]}
            onValueChange={(permission) => updateForm({ permission })}
          />

          <FormSelectField
            label={copy.teamLabel}
            value={form.team}
            placeholder={copy.selectPlaceholder}
            options={[...USER_TEAM_OPTIONS]}
            onValueChange={(team) => updateForm({ team })}
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

UserDrawer.displayName = "UserDrawer"
