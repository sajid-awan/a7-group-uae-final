"use client"

import { useEffect, useState } from "react"

import {
  OPERATIONS_APPROVER_DRAWER_COPY,
  OPERATIONS_APPROVER_OPTIONS,
} from "../content/operations-content"
import type { WorkflowRecord } from "../content/operations-types"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import {
  SideDrawer,
  SideDrawerBody,
  SideDrawerContent,
  SideDrawerFooter,
  SideDrawerHeader,
} from "@/shared/ui/drawer"
import { FormSelectField } from "@/shared/ui/form-field"

const drawerFooterButtonClassName = "h-11 rounded-xl shadow-none"

export type ApproverSettingsDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  workflow: WorkflowRecord | null
  onSave?: (workflow: WorkflowRecord, approverId: string) => void
  className?: string
}

export function ApproverSettingsDrawer({
  open,
  onOpenChange,
  workflow,
  onSave,
  className,
}: ApproverSettingsDrawerProps) {
  const [approverId, setApproverId] = useState("")
  const copy = OPERATIONS_APPROVER_DRAWER_COPY

  useEffect(() => {
    if (open && workflow) {
      setApproverId(workflow.approverId)
    }
  }, [open, workflow])

  const handleClose = () => onOpenChange(false)

  const handleSave = () => {
    if (!workflow) return
    onSave?.(workflow, approverId)
    onOpenChange(false)
  }

  if (!workflow) return null

  return (
    <SideDrawer open={open} onOpenChange={onOpenChange}>
      <SideDrawerContent size="sm" className={className}>
        <SideDrawerHeader
          title={copy.title}
          onClose={handleClose}
          closeLabel="Close approver settings drawer"
        />

        <SideDrawerBody>
          <FormSelectField
            label={copy.selectLabel}
            value={approverId}
            onValueChange={setApproverId}
            options={[...OPERATIONS_APPROVER_OPTIONS]}
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
            {copy.confirmLabel}
          </Button>
        </SideDrawerFooter>
      </SideDrawerContent>
    </SideDrawer>
  )
}

ApproverSettingsDrawer.displayName = "ApproverSettingsDrawer"
