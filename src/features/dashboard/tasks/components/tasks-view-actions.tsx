"use client"

import { LayoutGrid, List } from "lucide-react"

import { DashboardToolbarIconButton } from "@/features/dashboard/components/dashboard-toolbar-icon-button"
import type { TasksViewMode } from "../content/tasks-types"
import { cn } from "@/shared/lib/cn"

const TASKS_HEADER_BUTTON_HEIGHT_CLASSNAME = "h-9 min-h-9 max-h-9"

export const TASKS_HEADER_ICON_BUTTON_CLASSNAME = cn(
  TASKS_HEADER_BUTTON_HEIGHT_CLASSNAME,
  "size-9 min-w-9 rounded-lg border border-border bg-white p-0 text-muted-foreground shadow-none hover:bg-muted/30"
)

export const TASKS_HEADER_TEXT_BUTTON_CLASSNAME = cn(
  TASKS_HEADER_BUTTON_HEIGHT_CLASSNAME,
  "gap-2 rounded-lg px-3 text-sm"
)

export type TasksViewActionsProps = {
  viewMode: TasksViewMode
  onViewModeChange: (mode: TasksViewMode) => void
  className?: string
}

export function TasksViewActions({ viewMode, onViewModeChange, className }: TasksViewActionsProps) {
  const isKanban = viewMode === "kanban"

  return (
    <div className={cn("flex shrink-0 items-center gap-2", className)}>
      {isKanban ? (
        <DashboardToolbarIconButton
          label="List view"
          className={TASKS_HEADER_ICON_BUTTON_CLASSNAME}
          onClick={() => onViewModeChange("table")}
        >
          <List className="size-3.5" aria-hidden />
        </DashboardToolbarIconButton>
      ) : (
        <DashboardToolbarIconButton
          label="Kanban view"
          className={TASKS_HEADER_ICON_BUTTON_CLASSNAME}
          onClick={() => onViewModeChange("kanban")}
        >
          <LayoutGrid className="size-3.5" aria-hidden />
        </DashboardToolbarIconButton>
      )}
    </div>
  )
}

TasksViewActions.displayName = "TasksViewActions"
