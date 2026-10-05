"use client"

import { useEffect, useMemo, useState } from "react"

import {
  createEmptyTeamForm,
  getTeamHeadOptions,
  getTeamSelectableUsers,
  TEAM_DRAWER_COPY,
  TEAM_PERMISSION_OPTIONS,
  TEAM_ROLE_OPTIONS,
  TEAM_STATUS_OPTIONS,
} from "../content/team-drawer-content"
import type { TeamFormValues } from "../content/team-drawer-types"
import { TeamUserPicker } from "./team-user-picker"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import {
  SideDrawer,
  SideDrawerBody,
  SideDrawerContent,
  SideDrawerFooter,
  SideDrawerHeader,
} from "@/shared/ui/drawer"
import { FormInputField, FormSelectField } from "@/shared/ui/form-field"

const drawerFooterButtonClassName = "h-11 rounded-xl shadow-none"

export type TeamDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave?: (values: TeamFormValues) => void
  className?: string
}

export function TeamDrawer({ open, onOpenChange, onSave, className }: TeamDrawerProps) {
  const [form, setForm] = useState<TeamFormValues>(createEmptyTeamForm)
  const copy = TEAM_DRAWER_COPY
  const selectableUsers = useMemo(() => getTeamSelectableUsers(), [])
  const teamHeadOptions = useMemo(() => getTeamHeadOptions(), [])

  useEffect(() => {
    if (open) {
      setForm(createEmptyTeamForm())
    }
  }, [open])

  const handleClose = () => onOpenChange(false)

  const handleSave = () => {
    onSave?.(form)
    onOpenChange(false)
  }

  const updateForm = (patch: Partial<TeamFormValues>) => {
    setForm((current) => ({ ...current, ...patch }))
  }

  return (
    <SideDrawer open={open} onOpenChange={onOpenChange}>
      <SideDrawerContent size="lg" className={className}>
        <SideDrawerHeader
          title={copy.createTitle}
          description={copy.description}
          onClose={handleClose}
          closeLabel="Close create team drawer"
        />

        <SideDrawerBody className="space-y-5">
          <FormInputField
            label={copy.teamNameLabel}
            value={form.teamName}
            placeholder={copy.placeholder}
            onValueChange={(teamName) => updateForm({ teamName })}
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

          <FormSelectField
            label={copy.teamHeadLabel}
            value={form.teamHeadId}
            placeholder={copy.selectPlaceholder}
            options={[...teamHeadOptions]}
            onValueChange={(teamHeadId) => updateForm({ teamHeadId })}
          />

          <TeamUserPicker
            label={copy.addUsersLabel}
            users={selectableUsers}
            selectedUserIds={form.userIds}
            onSelectedUserIdsChange={(userIds) => updateForm({ userIds })}
          />

          <FormSelectField
            label={copy.roleLabel}
            value={form.role}
            placeholder={copy.selectPlaceholder}
            options={[...TEAM_ROLE_OPTIONS]}
            onValueChange={(role) => updateForm({ role })}
          />

          <FormSelectField
            label={copy.permissionLabel}
            value={form.permission}
            placeholder={copy.selectPlaceholder}
            options={[...TEAM_PERMISSION_OPTIONS]}
            onValueChange={(permission) => updateForm({ permission })}
          />

          <FormSelectField
            label={copy.statusLabel}
            value={form.status}
            placeholder={copy.selectPlaceholder}
            options={[...TEAM_STATUS_OPTIONS]}
            onValueChange={(status) => updateForm({ status })}
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

TeamDrawer.displayName = "TeamDrawer"
