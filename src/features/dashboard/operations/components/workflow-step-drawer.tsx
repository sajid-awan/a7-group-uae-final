"use client"

import { useEffect, useState } from "react"

import {
  OPERATIONS_APPROVER_DRAWER_COPY,
  OPERATIONS_APPROVER_OPTIONS,
} from "../content/operations-content"
import type { WorkflowStepDrawerMode } from "../content/workflow-edit-types"
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

export type WorkflowStepDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode: WorkflowStepDrawerMode
  approverId?: string
  title?: string
  onSave?: (approverId: string) => void
  className?: string
}

export function WorkflowStepDrawer({
  open,
  onOpenChange,
  mode,
  approverId = "",
  title,
  onSave,
  className,
}: WorkflowStepDrawerProps) {
  const [selectedApproverId, setSelectedApproverId] = useState(approverId)
  const copy = OPERATIONS_APPROVER_DRAWER_COPY

  useEffect(() => {
    if (open) {
      setSelectedApproverId(approverId)
    }
  }, [open, approverId])

  const handleClose = () => onOpenChange(false)

  const handleSave = () => {
    if (!selectedApproverId) return
    onSave?.(selectedApproverId)
    onOpenChange(false)
  }

  return (
    <SideDrawer open={open} onOpenChange={onOpenChange}>
      <SideDrawerContent size="sm" className={className}>
        <SideDrawerHeader
          title={title ?? copy.title}
          onClose={handleClose}
          closeLabel={`Close ${mode} workflow step drawer`}
        />

        <SideDrawerBody>
          <FormSelectField
            label={copy.selectLabel}
            value={selectedApproverId}
            onValueChange={setSelectedApproverId}
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

WorkflowStepDrawer.displayName = "WorkflowStepDrawer"
