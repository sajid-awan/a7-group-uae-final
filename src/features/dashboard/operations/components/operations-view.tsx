"use client"

import { LayoutGrid, RefreshCw } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

import { OPERATIONS_PAGE_COPY } from "../content/operations-content"
import type { WorkflowRecord } from "../content/operations-types"
import { WorkflowsListView } from "./workflows-list-view"
import { filterWorkflowsBySearch, paginateWorkflows } from "../utils/operations-filters"
import { DashboardToolbarIconButton } from "@/features/dashboard/components/dashboard-toolbar-icon-button"
import { DashboardViewModeToolbar } from "@/features/dashboard/components/dashboard-view-mode-toolbar"
import { cn } from "@/shared/lib/cn"
import { dashboardOperationsWorkflowEditPath } from "@/shared/lib/constants/routes"
import { DashboardEmptyState } from "@/shared/ui/dashboard/dashboard-empty-state"
import { DashboardPageHeader } from "@/shared/ui/dashboard/dashboard-page-header"
import { ListingPagination } from "@/shared/ui/listing-pagination"

const PAGE_SIZE = 5

export type OperationsViewProps = {
  workflows: WorkflowRecord[]
  onEditWorkflow?: (workflow: WorkflowRecord) => void
  onDeleteWorkflow?: (workflow: WorkflowRecord) => void
  onRefresh?: () => void
  className?: string
}

export function OperationsView({
  workflows,
  onEditWorkflow,
  onDeleteWorkflow,
  onRefresh,
  className,
}: OperationsViewProps) {
  const router = useRouter()
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
  }, [search])

  const filteredWorkflows = useMemo(
    () => filterWorkflowsBySearch(workflows, search),
    [search, workflows]
  )

  const { items: visibleWorkflows, pageCount, safePage } = useMemo(
    () => paginateWorkflows(filteredWorkflows, page, PAGE_SIZE),
    [filteredWorkflows, page]
  )

  const openWorkflowEdit = (workflow: WorkflowRecord) => {
    onEditWorkflow?.(workflow)
    router.push(dashboardOperationsWorkflowEditPath(workflow.id))
  }

  return (
    <div className={cn("space-y-6", className)}>
      <DashboardPageHeader
        title={OPERATIONS_PAGE_COPY.title}
        subtitle={OPERATIONS_PAGE_COPY.subtitle}
      />

      <DashboardViewModeToolbar
        searchValue={search}
        onSearchChange={setSearch}
        searchPlaceholder={OPERATIONS_PAGE_COPY.searchPlaceholder}
        searchAriaLabel="Search workflows"
        trailingActions={
          <DashboardToolbarIconButton label="Refresh" onClick={onRefresh}>
            <RefreshCw className="size-3.5" />
          </DashboardToolbarIconButton>
        }
      />

      {filteredWorkflows.length === 0 ? (
        <DashboardEmptyState
          icon={LayoutGrid}
          title={OPERATIONS_PAGE_COPY.emptyTitle}
          description={OPERATIONS_PAGE_COPY.emptyDescription}
        />
      ) : (
        <WorkflowsListView
          workflows={visibleWorkflows}
          onEdit={openWorkflowEdit}
          onDelete={onDeleteWorkflow}
        />
      )}

      {filteredWorkflows.length > PAGE_SIZE ? (
        <ListingPagination page={safePage} pageCount={pageCount} onPageChange={setPage} />
      ) : null}
    </div>
  )
}

OperationsView.displayName = "OperationsView"
