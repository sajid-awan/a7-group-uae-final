"use client"

import { Pencil, Trash2 } from "lucide-react"

import type { KanbanTask } from "../content/tasks-types"
import { DASHBOARD_TABLE_ROW_CLASSNAME, DASHBOARD_TABLE_WRAPPER_CLASSNAME } from "@/features/dashboard/content/dashboard-view-mode"
import { TaskPriorityBadge, TaskStatusBadge, TaskTypeBadge } from "@/shared/ui/dashboard/task-badges"
import { getInitials } from "@/shared/lib/get-initials"
import { cn } from "@/shared/lib/cn"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"

export type TasksListViewProps = {
  tasks: KanbanTask[]
  className?: string
  onEdit?: (task: KanbanTask) => void
  onDelete?: (task: KanbanTask) => void
}

function formatUpdatedOn(days: number): string {
  return days === 1 ? "1 day ago" : `${days} days ago`
}

export function TasksListView({ tasks, className, onEdit, onDelete }: TasksListViewProps) {
  return (
    <div className={cn(DASHBOARD_TABLE_WRAPPER_CLASSNAME, "overflow-x-auto", className)}>
      <Table>
        <TableHeader>
          <TableRow className={cn(DASHBOARD_TABLE_ROW_CLASSNAME, "hover:bg-transparent")}>
            <TableHead className="min-w-[180px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Task
            </TableHead>
            <TableHead className="min-w-[200px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Due Date
            </TableHead>
            <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Priority
            </TableHead>
            <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Status
            </TableHead>
            <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Task Type
            </TableHead>
            <TableHead className="min-w-[160px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Assigned to
            </TableHead>
            <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Update on
            </TableHead>
            <TableHead className="w-[88px] text-right">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.length === 0 ? (
            <TableRow className={DASHBOARD_TABLE_ROW_CLASSNAME}>
              <TableCell colSpan={8} className="py-10 text-center text-sm text-muted-foreground">
                No tasks found.
              </TableCell>
            </TableRow>
          ) : (
            tasks.map((task) => (
              <TableRow key={task.id} className={DASHBOARD_TABLE_ROW_CLASSNAME}>
                <TableCell>
                  <p className="truncate font-inter text-sm font-semibold text-foreground">{task.title}</p>
                </TableCell>
                <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                  {task.dueDateLabel}
                </TableCell>
                <TableCell>
                  <TaskPriorityBadge priority={task.priority} />
                </TableCell>
                <TableCell>
                  <TaskStatusBadge status={task.status} />
                </TableCell>
                <TableCell>
                  <TaskTypeBadge taskType={task.taskType} />
                </TableCell>
                <TableCell>
                  <div className="flex min-w-0 items-center gap-2">
                    <Avatar size="md" shape="circle" className="size-9 shrink-0">
                      <AvatarImage src={task.assigneeAvatarUrl} alt={task.assigneeName} />
                      <AvatarFallback className="text-xs">{getInitials(task.assigneeName)}</AvatarFallback>
                    </Avatar>
                    <span className="truncate text-sm font-medium text-foreground">{task.assigneeName}</span>
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                  {formatUpdatedOn(task.updatedDays)}
                </TableCell>
                <TableCell>
                  <div className="flex justify-end gap-1">
                    <Button
                      type="button"
                      variant="ghost"
                      size="xs"
                      shape="pill"
                      className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                      aria-label={`Delete ${task.title}`}
                      onClick={() => onDelete?.(task)}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="xs"
                      shape="pill"
                      className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                      aria-label={`Edit ${task.title}`}
                      onClick={() => onEdit?.(task)}
                    >
                      <Pencil className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

TasksListView.displayName = "TasksListView"
