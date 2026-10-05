"use client"

import { Database } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

import { DATABASE_PAGE_COPY } from "../content/database-content"
import type { DatabaseLocation } from "../content/database-types"
import { DatabaseHeaderActions, DatabaseToolbarActions } from "./database-toolbar"
import { DatabaseLocationsGrid } from "./database-locations-grid"
import { DatabaseLocationsListView } from "./database-locations-list-view"
import {
  filterDatabaseLocationsBySearch,
  paginateDatabaseItems,
} from "../utils/database-filters"
import { DashboardViewModeToolbar } from "@/features/dashboard/components/dashboard-view-mode-toolbar"
import type { DashboardViewMode } from "@/features/dashboard/content/dashboard-view-mode"
import { cn } from "@/shared/lib/cn"
import { DashboardEmptyState } from "@/shared/ui/dashboard/dashboard-empty-state"
import { DashboardPageHeader } from "@/shared/ui/dashboard/dashboard-page-header"
import { ListingPagination } from "@/shared/ui/listing-pagination"

const LIST_PAGE_SIZE = 10
const GRID_PAGE_SIZE = 12

export type DatabaseViewProps = {
  locations: DatabaseLocation[]
  onLocationClick?: (location: DatabaseLocation) => void
  onUpload?: () => void
  onExport?: () => void
  className?: string
}

export function DatabaseView({
  locations,
  onLocationClick,
  onUpload,
  onExport,
  className,
}: DatabaseViewProps) {
  const [viewMode, setViewMode] = useState<DashboardViewMode>("grid")
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)

  const pageSize = viewMode === "table" ? LIST_PAGE_SIZE : GRID_PAGE_SIZE

  useEffect(() => {
    setPage(1)
  }, [search, viewMode])

  const filteredLocations = useMemo(
    () => filterDatabaseLocationsBySearch(locations, search),
    [locations, search]
  )

  const { items: visibleLocations, pageCount, safePage } = useMemo(
    () => paginateDatabaseItems(filteredLocations, page, pageSize),
    [filteredLocations, page, pageSize]
  )

  return (
    <div className={cn("space-y-6", className)}>
      <DashboardPageHeader
        title={DATABASE_PAGE_COPY.title}
        subtitle={DATABASE_PAGE_COPY.subtitle}
        actions={<DatabaseHeaderActions onUpload={onUpload} />}
      />

      <DashboardViewModeToolbar
        searchValue={search}
        onSearchChange={setSearch}
        searchPlaceholder={DATABASE_PAGE_COPY.searchPlaceholder}
        searchAriaLabel={DATABASE_PAGE_COPY.searchPlaceholder}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        trailingActions={<DatabaseToolbarActions onExport={onExport} />}
      />

      {filteredLocations.length === 0 ? (
        <DashboardEmptyState
          icon={Database}
          title={DATABASE_PAGE_COPY.emptyTitle}
          description={DATABASE_PAGE_COPY.emptyDescription}
        />
      ) : viewMode === "table" ? (
        <DatabaseLocationsListView
          locations={visibleLocations}
          onLocationClick={onLocationClick}
        />
      ) : (
        <DatabaseLocationsGrid
          locations={visibleLocations}
          onLocationClick={onLocationClick}
        />
      )}

      {filteredLocations.length > pageSize ? (
        <ListingPagination page={safePage} pageCount={pageCount} onPageChange={setPage} />
      ) : null}
    </div>
  )
}

DatabaseView.displayName = "DatabaseView"
