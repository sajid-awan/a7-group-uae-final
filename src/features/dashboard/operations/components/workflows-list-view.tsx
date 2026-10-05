"use client"

import type { WorkflowRecord } from "../content/operations-types"
import { WorkflowCard } from "./workflow-card"
import { cn } from "@/shared/lib/cn"

export type WorkflowsListViewProps = {
  workflows: WorkflowRecord[]
  onEdit?: (workflow: WorkflowRecord) => void
  onDelete?: (workflow: WorkflowRecord) => void
  className?: string
}

export function WorkflowsListView({ workflows, onEdit, onDelete, className }: WorkflowsListViewProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {workflows.map((workflow) => (
        <WorkflowCard
          key={workflow.id}
          workflow={workflow}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

WorkflowsListView.displayName = "WorkflowsListView"
