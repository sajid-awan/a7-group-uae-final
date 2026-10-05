"use client"

import { Filter, LayoutGrid, List, RefreshCw, Search } from "lucide-react"

import { DashboardToolbarIconButton } from "@/features/dashboard/components/dashboard-toolbar-icon-button"
import { dashboardAllListingsPageCopy } from "../content/listings-mock-data"
import type { DashboardListingFilters } from "../content/listings-types"
import { DashboardListingsFiltersMenu } from "./listings-filters-menu"
import type { DashboardViewMode } from "@/features/dashboard/content/dashboard-view-mode"
import { DASHBOARD_TOOLBAR_ICON_BUTTON_CLASSNAME } from "@/features/dashboard/content/dashboard-view-mode"
import { cn } from "@/shared/lib/cn"
import { Input } from "@/shared/ui/input"

export type DashboardListingsToolbarProps = {
  searchValue: string
  onSearchChange: (value: string) => void
  viewMode: DashboardViewMode
  onViewModeChange: (mode: DashboardViewMode) => void
  filters: DashboardListingFilters
  onFiltersChange: (filters: DashboardListingFilters) => void
  onRefresh?: () => void
  className?: string
}

export function DashboardListingsToolbar({
  searchValue,
  onSearchChange,
  viewMode,
  onViewModeChange,
  filters,
  onFiltersChange,
  onRefresh,
  className,
}: DashboardListingsToolbarProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
    >
      <div className="relative w-full max-w-md">
        <Search
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={dashboardAllListingsPageCopy.searchPlaceholder}
          inputSize="sm"
          radius="lg"
          className="h-10 border-border bg-white pl-9 shadow-none"
          aria-label="Search listings"
        />
      </div>

      <div className="flex shrink-0 items-center gap-2">
        {viewMode === "table" ? (
          <DashboardToolbarIconButton label="Grid view" onClick={() => onViewModeChange("grid")}>
            <LayoutGrid className="size-3.5" />
          </DashboardToolbarIconButton>
        ) : (
          <DashboardToolbarIconButton label="List view" onClick={() => onViewModeChange("table")}>
            <List className="size-3.5" />
          </DashboardToolbarIconButton>
        )}

        <DashboardToolbarIconButton label="Refresh" onClick={onRefresh}>
          <RefreshCw className="size-3.5" />
        </DashboardToolbarIconButton>

        <DashboardListingsFiltersMenu
          filters={filters}
          onFiltersChange={onFiltersChange}
          className={cn(DASHBOARD_TOOLBAR_ICON_BUTTON_CLASSNAME, "h-8 min-h-8 w-auto gap-1.5 px-2.5")}
        />
      </div>
    </div>
  )
}

DashboardListingsToolbar.displayName = "DashboardListingsToolbar"
