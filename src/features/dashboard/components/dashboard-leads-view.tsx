"use client"

import { useMemo, useState } from "react"

import type { DashboardAgentLeadRow } from "../agents/content/dashboard-agent-leads-mock-data"
import {
  filterDashboardAgentLeads,
  filterDashboardAgentLeadsByPipeline,
  filterDashboardAgentLeadsByStage,
} from "../agents/content/dashboard-agent-leads-mock-data"
import type { DashboardViewMode } from "@/features/dashboard/content/dashboard-view-mode"
import { DashboardLeadsGridView } from "./dashboard-leads-grid-view"
import { DashboardLeadsListView } from "./dashboard-leads-list-view"
import { DashboardLeadsToolbar } from "./dashboard-leads-toolbar"
import { cn } from "@/shared/lib/cn"
import { ListingPagination } from "@/shared/ui/listing-pagination"

const GRID_PAGE_SIZE = 10
const TABLE_PAGE_SIZE = 11

export type DashboardLeadsViewProps = {
  leads: DashboardAgentLeadRow[]
  className?: string
  defaultViewMode?: DashboardViewMode
}

export function DashboardLeadsView({
  leads,
  className,
  defaultViewMode = "table",
}: DashboardLeadsViewProps) {
  const [search, setSearch] = useState("")
  const [leadStageFilter, setLeadStageFilter] = useState("all")
  const [pipelineStageFilter, setPipelineStageFilter] = useState("all")
  const [page, setPage] = useState(1)
  const [viewMode, setViewMode] = useState<DashboardViewMode>(defaultViewMode)

  const pageSize = viewMode === "grid" ? GRID_PAGE_SIZE : TABLE_PAGE_SIZE

  const filteredLeads = useMemo(() => {
    let results = filterDashboardAgentLeads(leads, search)
    results = filterDashboardAgentLeadsByStage(results, leadStageFilter)
    results = filterDashboardAgentLeadsByPipeline(results, pipelineStageFilter)
    return results
  }, [leads, search, leadStageFilter, pipelineStageFilter])

  const pageCount = Math.max(1, Math.ceil(filteredLeads.length / pageSize))
  const safePage = Math.min(page, pageCount)

  const visibleLeads = useMemo(() => {
    const start = (safePage - 1) * pageSize
    return filteredLeads.slice(start, start + pageSize)
  }, [filteredLeads, pageSize, safePage])

  const resetPage = () => setPage(1)

  return (
    <div className={cn("space-y-4", className)}>
      <DashboardLeadsToolbar
        searchValue={search}
        onSearchChange={(value) => {
          setSearch(value)
          resetPage()
        }}
        viewMode={viewMode}
        onViewModeChange={(mode) => {
          setViewMode(mode)
          resetPage()
        }}
        leadStageFilter={leadStageFilter}
        onLeadStageFilterChange={(value) => {
          setLeadStageFilter(value)
          resetPage()
        }}
        pipelineStageFilter={pipelineStageFilter}
        onPipelineStageFilterChange={(value) => {
          setPipelineStageFilter(value)
          resetPage()
        }}
      />

      {viewMode === "grid" ? (
        <DashboardLeadsGridView
          leads={visibleLeads}
          page={safePage}
          pageCount={pageCount}
          onPageChange={setPage}
        />
      ) : (
        <>
          <DashboardLeadsListView leads={visibleLeads} />

          {filteredLeads.length > pageSize ? (
            <ListingPagination page={safePage} pageCount={pageCount} onPageChange={setPage} />
          ) : null}
        </>
      )}
    </div>
  )
}

DashboardLeadsView.displayName = "DashboardLeadsView"
