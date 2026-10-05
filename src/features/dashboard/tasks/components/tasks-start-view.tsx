"use client"

import { Clock, ListTodo, Plus } from "lucide-react"
import { useMemo, useRef, useState } from "react"

import { createDefaultTasksFilters } from "../content/tasks-content"
import type {
  KanbanTask,
  TaskKanbanColumnId,
  TasksFilters,
  TasksViewMode,
} from "../content/tasks-types"
import { TasksKanbanBoard } from "./tasks-kanban-board"
import { TasksListView } from "./tasks-list-view"
import { TasksLoadingSkeleton } from "./tasks-loading-skeleton"
import { TasksToolbar } from "./tasks-toolbar"
import { TasksViewActions, TASKS_HEADER_TEXT_BUTTON_CLASSNAME } from "./tasks-view-actions"
import { TASKS_PAGE_COPY } from "../content/tasks-content"
import {
  filterKanbanTasksByFilters,
  moveKanbanTaskToColumn,
} from "../utils/tasks-kanban"
import { paginateTasksList } from "../utils/tasks-list"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import { DashboardEmptyState } from "@/shared/ui/dashboard/dashboard-empty-state"
import { DashboardErrorState } from "@/shared/ui/dashboard/dashboard-error-state"
import { DashboardPageHeader } from "@/shared/ui/dashboard/dashboard-page-header"
import { ListingPagination } from "@/shared/ui/listing-pagination"

const LIST_PAGE_SIZE = 11

export type TasksStartViewStatus = "loading" | "error" | "success"

export type TasksStartViewProps = {
  tasks: KanbanTask[]
  status?: TasksStartViewStatus
  errorMessage?: string
  onRetry?: () => void
  onAddTask?: (columnId?: TaskKanbanColumnId) => void
  onEditTask?: (task: KanbanTask) => void
  defaultViewMode?: TasksViewMode
  className?: string
}

export function TasksStartView({
  tasks: initialTasks,
  status = "success",
  errorMessage,
  onRetry,
  onAddTask,
  onEditTask,
  defaultViewMode = "table",
  className,
}: TasksStartViewProps) {
  const [viewMode, setViewMode] = useState<TasksViewMode>(defaultViewMode)
  const [tasks, setTasks] = useState(initialTasks)
  const [draftFilters, setDraftFilters] = useState<TasksFilters>(createDefaultTasksFilters())
  const [appliedFilters, setAppliedFilters] = useState<TasksFilters>(createDefaultTasksFilters())
  const [listPage, setListPage] = useState(1)
  const draftFiltersRef = useRef(draftFilters)
  draftFiltersRef.current = draftFilters

  const filteredTasks = useMemo(
    () => filterKanbanTasksByFilters(tasks, appliedFilters),
    [appliedFilters, tasks]
  )

  const { items: visibleListTasks, pageCount, safePage } = useMemo(
    () => paginateTasksList(filteredTasks, listPage, LIST_PAGE_SIZE),
    [filteredTasks, listPage]
  )

  const handleApplyFilters = () => {
    setAppliedFilters(draftFiltersRef.current)
    setListPage(1)
  }

  const handleRefresh = () => {
    setDraftFilters(createDefaultTasksFilters())
    setAppliedFilters(createDefaultTasksFilters())
    setListPage(1)
  }

  const handleTaskMove = (taskId: string, columnId: TaskKanbanColumnId) => {
    setTasks((current) => moveKanbanTaskToColumn(current, taskId, columnId))
  }

  const handleDeleteTask = (task: KanbanTask) => {
    setTasks((current) => current.filter((item) => item.id !== task.id))
  }

  const handleViewTask = (task: KanbanTask) => {
    onEditTask?.(task)
  }

  const handleAddTaskToColumn = (columnId: TaskKanbanColumnId) => {
    onAddTask?.(columnId)
  }

  const renderContent = () => {
    if (status === "loading") {
      return <TasksLoadingSkeleton />
    }

    if (status === "error") {
      return <DashboardErrorState message={errorMessage ?? TASKS_PAGE_COPY.errorMessage} onRetry={onRetry} />
    }

    if (viewMode === "kanban") {
      if (filteredTasks.length === 0) {
        return (
          <DashboardEmptyState
            icon={ListTodo}
            title={TASKS_PAGE_COPY.emptyTitle}
            description={TASKS_PAGE_COPY.emptyDescription}
          />
        )
      }

      return (
        <TasksKanbanBoard
          tasks={filteredTasks}
          onTaskMove={handleTaskMove}
          onAddTask={handleAddTaskToColumn}
          onViewTask={handleViewTask}
        />
      )
    }

    return (
      <div className="space-y-4">
        <TasksListView
          tasks={visibleListTasks}
          onEdit={onEditTask}
          onDelete={handleDeleteTask}
        />

        {filteredTasks.length > LIST_PAGE_SIZE ? (
          <ListingPagination page={safePage} pageCount={pageCount} onPageChange={setListPage} />
        ) : null}
      </div>
    )
  }

  return (
    <div className={cn("space-y-6", className)}>
      <DashboardPageHeader
        title={TASKS_PAGE_COPY.title}
        subtitle={TASKS_PAGE_COPY.subtitle}
        actions={
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <TasksViewActions viewMode={viewMode} onViewModeChange={setViewMode} />
            <Button
              type="button"
              variant="outline"
              size="xs"
              className={cn(
                TASKS_HEADER_TEXT_BUTTON_CLASSNAME,
                "border-neutral-200 bg-white font-normal text-neutral-900 shadow-none"
              )}
            >
              <Clock className="size-4 text-muted-foreground" aria-hidden />
              {TASKS_PAGE_COPY.fixTimesLabel}
            </Button>
            <Button
              type="button"
              size="xs"
              className={cn(TASKS_HEADER_TEXT_BUTTON_CLASSNAME, "px-4")}
              onClick={() => onAddTask?.()}
            >
              <Plus className="size-4" aria-hidden />
              {TASKS_PAGE_COPY.addButtonLabel}
            </Button>
          </div>
        }
      />

      <TasksToolbar
        draftFilters={draftFilters}
        onDraftFiltersChange={setDraftFilters}
        onApply={handleApplyFilters}
        onRefresh={handleRefresh}
      />

      <div>{renderContent()}</div>
    </div>
  )
}

TasksStartView.displayName = "TasksStartView"
