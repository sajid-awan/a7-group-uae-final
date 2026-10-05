"use client"

import { cn } from "@/shared/lib/cn"
import { Badge, type BadgeProps } from "@/shared/ui/badge"
import type { TaskPriority, TaskStatus, TaskType } from "@/features/dashboard/tasks/content/tasks-types"
import { TASK_TYPE_LABELS } from "@/features/dashboard/tasks/content/tasks-content"

const TASK_PRIORITY_BADGE_CLASSNAME: Record<TaskPriority, string> = {
  low: "border-emerald-200 bg-emerald-50 text-emerald-700",
  medium: "border-sky-200 bg-sky-50 text-sky-700",
  high: "border-rose-200 bg-rose-50 text-rose-700",
}

const TASK_STATUS_BADGE_CLASSNAME: Record<TaskStatus, string> = {
  pending: "border-amber-200 bg-amber-50 text-amber-700",
  "on-hold": "border-orange-200 bg-orange-50 text-orange-700",
  scheduled: "border-violet-200 bg-violet-50 text-violet-700",
  completed: "border-emerald-200 bg-emerald-50 text-emerald-700",
  canceled: "border-orange-200 bg-orange-50 text-orange-700",
  success: "border-emerald-200 bg-emerald-50 text-emerald-700",
  "in-progress": "border-sky-200 bg-sky-50 text-sky-700",
  delayed: "border-sky-200 bg-sky-50 text-sky-800",
  failed: "border-emerald-200 bg-emerald-50 text-emerald-700",
}

const TASK_PRIORITY_LABEL: Record<TaskPriority, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
}

const TASK_STATUS_LABEL: Record<TaskStatus, string> = {
  pending: "Pending",
  "on-hold": "On Hold",
  scheduled: "Scheduled",
  completed: "Completed",
  canceled: "Canceled",
  success: "Success",
  "in-progress": "In Progress",
  delayed: "Delayed",
  failed: "Failed",
}

export type TaskPriorityBadgeProps = {
  priority: TaskPriority
  className?: string
  size?: BadgeProps["size"]
}

export function TaskPriorityBadge({ priority, className, size = "sm" }: TaskPriorityBadgeProps) {
  return (
    <Badge
      variant="outline"
      size={size}
      shape="pill"
      className={cn(
        "font-medium normal-case tracking-normal",
        TASK_PRIORITY_BADGE_CLASSNAME[priority],
        className
      )}
    >
      {TASK_PRIORITY_LABEL[priority]}
    </Badge>
  )
}

export type TaskStatusBadgeProps = {
  status: TaskStatus
  className?: string
  size?: BadgeProps["size"]
}

export function TaskStatusBadge({ status, className, size = "sm" }: TaskStatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      size={size}
      shape="pill"
      className={cn(
        "font-medium normal-case tracking-normal",
        TASK_STATUS_BADGE_CLASSNAME[status],
        className
      )}
    >
      {TASK_STATUS_LABEL[status]}
    </Badge>
  )
}

export type TaskTypeBadgeProps = {
  taskType: TaskType
  className?: string
  size?: BadgeProps["size"]
}

export function TaskTypeBadge({ taskType, className, size = "sm" }: TaskTypeBadgeProps) {
  return (
    <Badge
      variant="outline"
      size={size}
      shape="pill"
      className={cn(
        "border-neutral-200 bg-neutral-100 font-medium text-neutral-700 normal-case tracking-normal",
        className
      )}
    >
      {TASK_TYPE_LABELS[taskType]}
    </Badge>
  )
}

TaskPriorityBadge.displayName = "TaskPriorityBadge"
TaskStatusBadge.displayName = "TaskStatusBadge"
TaskTypeBadge.displayName = "TaskTypeBadge"
