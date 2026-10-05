import type { WorkflowStatus } from "../content/operations-types"
import { WORKFLOW_STATUS_LABELS } from "../content/operations-content"
import { cn } from "@/shared/lib/cn"

const statusClassNames: Record<WorkflowStatus, string> = {
  progress: "bg-amber-50 text-amber-700",
  error: "bg-red-50 text-red-700",
  finished: "bg-emerald-50 text-emerald-700",
}

export type WorkflowStatusBadgeProps = {
  status: WorkflowStatus
  className?: string
}

export function WorkflowStatusBadge({ status, className }: WorkflowStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        statusClassNames[status],
        className
      )}
    >
      {WORKFLOW_STATUS_LABELS[status]}
    </span>
  )
}

WorkflowStatusBadge.displayName = "WorkflowStatusBadge"
