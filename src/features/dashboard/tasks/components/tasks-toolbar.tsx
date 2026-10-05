"use client"

import { RefreshCw } from "lucide-react"

import {
  TASK_PRIORITY_OPTIONS,
  TASK_STATUS_OPTIONS,
  TASKS_PAGE_COPY,
} from "../content/tasks-content"
import type { TasksFilters } from "../content/tasks-types"
import { DashboardToolbarIconButton } from "@/features/dashboard/components/dashboard-toolbar-icon-button"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"

const filterTriggerClassName =
  "h-10 w-auto shrink-0 rounded-lg border-border bg-white px-3 text-sm text-muted-foreground shadow-none"

const tasksToolbarFieldHeightClassName = "!h-10 !min-h-10 !max-h-10"

const tasksToolbarButtonClassName = cn(
  tasksToolbarFieldHeightClassName,
  "shrink-0 rounded-lg px-4 text-sm shadow-none"
)

const tasksToolbarIconButtonClassName = cn(
  tasksToolbarFieldHeightClassName,
  "!w-10 !min-w-10 shrink-0 rounded-lg border border-border bg-white p-0 text-muted-foreground shadow-none hover:bg-muted/30"
)

export type TasksToolbarProps = {
  draftFilters: TasksFilters
  onDraftFiltersChange: React.Dispatch<React.SetStateAction<TasksFilters>>
  onApply?: () => void
  onRefresh?: () => void
  className?: string
}

export function TasksToolbar({
  draftFilters,
  onDraftFiltersChange,
  onApply,
  onRefresh,
  className,
}: TasksToolbarProps) {
  const updateDraft = (patch: Partial<TasksFilters>) => {
    onDraftFiltersChange((current) => ({ ...current, ...patch }))
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-center",
        className
      )}
    >
      <Select value={draftFilters.priority} onValueChange={(priority) => updateDraft({ priority })}>
        <SelectTrigger className={cn(filterTriggerClassName, "min-w-[9.5rem]")} inputSize="sm" radius="lg">
          <SelectValue placeholder="Priority" />
        </SelectTrigger>
        <SelectContent>
          {TASK_PRIORITY_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={draftFilters.status} onValueChange={(status) => updateDraft({ status })}>
        <SelectTrigger className={cn(filterTriggerClassName, "min-w-[9.5rem]")} inputSize="sm" radius="lg">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          {TASK_STATUS_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex shrink-0 items-center gap-2 sm:ml-auto">
        <Button type="button" size="xs" className={tasksToolbarButtonClassName} onClick={onApply}>
          {TASKS_PAGE_COPY.applyLabel}
        </Button>
        <DashboardToolbarIconButton
          label="Refresh"
          className={tasksToolbarIconButtonClassName}
          onClick={onRefresh}
        >
          <RefreshCw className="size-4" />
        </DashboardToolbarIconButton>
      </div>
    </div>
  )
}

TasksToolbar.displayName = "TasksToolbar"
