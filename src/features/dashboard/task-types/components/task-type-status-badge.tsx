import type { TaskTypeRecordStatus } from "../content/task-types-types"
import { TASK_TYPE_STATUS_LABELS } from "../content/task-types-content"
import { cn } from "@/shared/lib/cn"

const statusClassNames: Record<TaskTypeRecordStatus, string> = {
  active: "bg-emerald-50 text-emerald-700",
  pending: "bg-amber-50 text-amber-700",
  expired: "bg-red-50 text-red-700",
}

export type TaskTypeStatusBadgeProps = {
  status: TaskTypeRecordStatus
  className?: string
}

export function TaskTypeStatusBadge({ status, className }: TaskTypeStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        statusClassNames[status],
        className
      )}
    >
      {TASK_TYPE_STATUS_LABELS[status]}
    </span>
  )
}

TaskTypeStatusBadge.displayName = "TaskTypeStatusBadge"
