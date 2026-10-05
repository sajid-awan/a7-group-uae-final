"use client"

import type { KanbanTask } from "@/features/dashboard/tasks/content/tasks-types"
import { TaskPriorityBadge, TaskStatusBadge, TaskTypeBadge } from "@/shared/ui/dashboard/task-badges"
import { getInitials } from "@/shared/lib/get-initials"
import { cn } from "@/shared/lib/cn"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"

export type TaskCardData = KanbanTask

export type TaskCardProps = {
  task: TaskCardData
  className?: string
  onView?: (task: TaskCardData) => void
}

export function TaskCard({ task, className, onView }: TaskCardProps) {
  const isInteractive = Boolean(onView)

  return (
    <article
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-label={isInteractive ? `Open task ${task.title}` : undefined}
      onClick={isInteractive ? () => onView?.(task) : undefined}
      onKeyDown={
        isInteractive
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault()
                onView?.(task)
              }
            }
          : undefined
      }
      className={cn(
        "flex flex-col rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]",
        isInteractive &&
          "cursor-pointer transition-colors hover:border-primary/30 hover:bg-neutral-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
        className
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <TaskStatusBadge status={task.status} />
        <TaskPriorityBadge priority={task.priority} />
      </div>

      <h3 className="mt-3 font-inter text-sm font-semibold text-neutral-900">{task.title}</h3>

      <div className="mt-2 flex items-center justify-between gap-2">
        <p className="text-xs text-muted-foreground">{task.dueDateLabel.split(" ").slice(0, 4).join(" ")}</p>
        <TaskTypeBadge taskType={task.taskType} />
      </div>

      <div className="my-3 border-t border-dashed border-neutral-200" />

      <div className="flex items-end justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">Assigned to</p>
          <p className="truncate text-sm font-medium text-neutral-900">{task.assigneeName}</p>
        </div>
        <Avatar size="md" shape="circle" className="size-9 shrink-0">
          <AvatarImage src={task.assigneeAvatarUrl} alt={task.assigneeName} />
          <AvatarFallback className="text-xs">{getInitials(task.assigneeName)}</AvatarFallback>
        </Avatar>
      </div>

      <p className="mt-3 text-right text-xs text-muted-foreground">{task.updatedDays}d ago</p>
    </article>
  )
}

TaskCard.displayName = "TaskCard"
