"use client"

import { LayoutGrid, Plus, RefreshCw } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

import { TASK_TYPES_PAGE_COPY } from "../content/task-types-content"
import type { TaskTypeRecord } from "../content/task-types-types"
import { TaskTypesGrid } from "./task-types-grid"
import { TaskTypesListView } from "./task-types-list-view"
import { filterTaskTypesBySearch, paginateTaskTypes } from "../utils/task-types-filters"
import { DashboardToolbarIconButton } from "@/features/dashboard/components/dashboard-toolbar-icon-button"
import { DashboardViewModeToolbar } from "@/features/dashboard/components/dashboard-view-mode-toolbar"
import type { DashboardViewMode } from "@/features/dashboard/content/dashboard-view-mode"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import { DashboardEmptyState } from "@/shared/ui/dashboard/dashboard-empty-state"
import { DashboardPageHeader } from "@/shared/ui/dashboard/dashboard-page-header"
import { ListingPagination } from "@/shared/ui/listing-pagination"

const LIST_PAGE_SIZE = 10
const GRID_PAGE_SIZE = 6

export type TaskTypesViewProps = {
  taskTypes: TaskTypeRecord[]
  onAddTaskType?: () => void
  onRefresh?: () => void
  className?: string
}

export function TaskTypesView({
  taskTypes,
  onAddTaskType,
  onRefresh,
  className,
}: TaskTypesViewProps) {
  const [viewMode, setViewMode] = useState<DashboardViewMode>("table")
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)

  const pageSize = viewMode === "table" ? LIST_PAGE_SIZE : GRID_PAGE_SIZE

  useEffect(() => {
    setPage(1)
  }, [search, viewMode])

  const filteredTaskTypes = useMemo(
    () => filterTaskTypesBySearch(taskTypes, search),
    [search, taskTypes]
  )

  const { items: visibleTaskTypes, pageCount, safePage } = useMemo(
    () => paginateTaskTypes(filteredTaskTypes, page, pageSize),
    [filteredTaskTypes, page, pageSize]
  )

  return (
    <div className={cn("space-y-6", className)}>
      <DashboardPageHeader
        title={TASK_TYPES_PAGE_COPY.title}
        subtitle={TASK_TYPES_PAGE_COPY.subtitle}
        actions={
          <Button type="button" size="sm" className="shrink-0 gap-2 rounded-lg px-4" onClick={onAddTaskType}>
            <Plus className="size-4" aria-hidden />
            {TASK_TYPES_PAGE_COPY.addButtonLabel}
          </Button>
        }
      />

      <DashboardViewModeToolbar
        searchValue={search}
        onSearchChange={setSearch}
        searchPlaceholder={TASK_TYPES_PAGE_COPY.searchPlaceholder}
        searchAriaLabel="Search task types"
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        trailingActions={
          <DashboardToolbarIconButton label="Refresh" onClick={onRefresh}>
            <RefreshCw className="size-3.5" />
          </DashboardToolbarIconButton>
        }
      />

      {filteredTaskTypes.length === 0 ? (
        <DashboardEmptyState
          icon={LayoutGrid}
          title={TASK_TYPES_PAGE_COPY.emptyTitle}
          description={TASK_TYPES_PAGE_COPY.emptyDescription}
        />
      ) : viewMode === "table" ? (
        <TaskTypesListView taskTypes={visibleTaskTypes} />
      ) : (
        <TaskTypesGrid taskTypes={visibleTaskTypes} />
      )}

      {filteredTaskTypes.length > pageSize ? (
        <ListingPagination page={safePage} pageCount={pageCount} onPageChange={setPage} />
      ) : null}
    </div>
  )
}

TaskTypesView.displayName = "TaskTypesView"
