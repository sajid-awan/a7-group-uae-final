"use client"

import { Building2, Plus } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

import type {
  DashboardListing,
  DashboardListingFilters,
  DashboardListingStat,
  DashboardListingTab,
} from "../content/listings-types"
import {
  filterDashboardListings,
  paginateDashboardListings,
} from "../utils/listings-filters"
import { createDefaultDashboardListingFilters } from "../content/listings-filter-content"
import { dashboardAllListingsPageCopy, getDashboardListingsStats } from "../content/listings-mock-data"
import { DashboardListingDrawer } from "./listing-drawer"
import { DashboardListingLeadsDrawer } from "./listing-leads-drawer"
import { DashboardListingsGrid } from "./listings-grid"
import { DashboardListingsListView } from "./listings-list-view"
import { DashboardListingsLoadingSkeleton } from "./listings-loading-skeleton"
import { DashboardListingsStatsRow } from "./listings-stats-row"
import { DashboardListingsToolbar } from "./listings-toolbar"
import type { DashboardViewMode } from "@/features/dashboard/content/dashboard-view-mode"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import { DashboardEmptyState } from "@/shared/ui/dashboard/dashboard-empty-state"
import { DashboardErrorState } from "@/shared/ui/dashboard/dashboard-error-state"
import { DashboardPageHeader } from "@/shared/ui/dashboard/dashboard-page-header"
import { ListingPagination } from "@/shared/ui/listing-pagination"
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs"

const LISTINGS_PAGE_SIZE = 12

const DEFAULT_FILTERS = createDefaultDashboardListingFilters()

export type DashboardListingsViewProps = {
  listings: DashboardListing[]
  stats?: DashboardListingStat[]
  isLoading?: boolean
  error?: string | null
  onRetry?: () => void
  onAddListing?: () => void
  onEditListing?: (listing: DashboardListing) => void
  onDeleteListing?: (listing: DashboardListing) => void
  onViewLeads?: (listing: DashboardListing) => void
  onRefresh?: () => void
  className?: string
}

export function DashboardListingsView({
  listings,
  stats: statsProp,
  isLoading = false,
  error = null,
  onRetry,
  onAddListing,
  onEditListing,
  onDeleteListing,
  onViewLeads,
  onRefresh,
  className,
}: DashboardListingsViewProps) {
  const [items, setItems] = useState(listings)
  const [activeTab, setActiveTab] = useState<DashboardListingTab>("sell")
  const [search, setSearch] = useState("")
  const [filters, setFilters] = useState<DashboardListingFilters>(DEFAULT_FILTERS)
  const [page, setPage] = useState(1)
  const [viewMode, setViewMode] = useState<DashboardViewMode>("grid")
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedListing, setSelectedListing] = useState<DashboardListing | null>(null)
  const [leadsDrawerOpen, setLeadsDrawerOpen] = useState(false)
  const [leadsListing, setLeadsListing] = useState<DashboardListing | null>(null)

  useEffect(() => {
    setItems(listings)
  }, [listings])

  const stats = useMemo(
    () => statsProp ?? getDashboardListingsStats(items),
    [items, statsProp]
  )

  const pageSize = LISTINGS_PAGE_SIZE

  const filteredListings = useMemo(
    () =>
      filterDashboardListings(items, {
        tab: activeTab,
        search,
        filters,
      }),
    [items, activeTab, search, filters]
  )

  const { items: visibleListings, pageCount, safePage } = useMemo(
    () => paginateDashboardListings(filteredListings, page, pageSize),
    [filteredListings, page, pageSize]
  )

  const resetPage = () => setPage(1)

  const handleTabChange = (value: string) => {
    setActiveTab(value as DashboardListingTab)
    resetPage()
  }

  const handleSearchChange = (value: string) => {
    setSearch(value)
    resetPage()
  }

  const handleFiltersChange = (nextFilters: DashboardListingFilters) => {
    setFilters(nextFilters)
    resetPage()
  }

  const handleViewModeChange = (mode: DashboardViewMode) => {
    setViewMode(mode)
    resetPage()
  }

  const handleListingClick = (listing: DashboardListing) => {
    setSelectedListing(listing)
    setDrawerOpen(true)
  }

  const handleViewLeads = (listing: DashboardListing) => {
    setLeadsListing(listing)
    setLeadsDrawerOpen(true)
    onViewLeads?.(listing)
  }

  const handleDeleteListing = (listing: DashboardListing) => {
    setItems((current) => current.filter((item) => item.id !== listing.id))

    if (selectedListing?.id === listing.id) {
      setDrawerOpen(false)
      setSelectedListing(null)
    }

    if (leadsListing?.id === listing.id) {
      setLeadsDrawerOpen(false)
      setLeadsListing(null)
    }

    onDeleteListing?.(listing)
  }

  const pageHeader = (
    <DashboardPageHeader
      title={dashboardAllListingsPageCopy.title}
      subtitle={dashboardAllListingsPageCopy.subtitle}
      actions={
        <Button
          type="button"
          size="sm"
          className="shrink-0 gap-2 rounded-lg px-4"
          onClick={onAddListing}
        >
          <Plus className="size-4" aria-hidden />
          {dashboardAllListingsPageCopy.addButtonLabel}
        </Button>
      }
    />
  )

  if (isLoading) {
    return (
      <div className={cn("space-y-6 p-4 sm:p-6 font-inter", className)}>
        {pageHeader}
        <DashboardListingsLoadingSkeleton />
      </div>
    )
  }

  if (error) {
    return (
      <div className={cn("space-y-6 p-4 sm:p-6 font-inter", className)}>
        {pageHeader}
        <DashboardErrorState
          message={error ?? "Unable to load listings. Please try again."}
          onRetry={onRetry}
        />
      </div>
    )
  }

  return (
    <div className={cn("space-y-6 p-4 sm:p-6 font-inter", className)}>
      {pageHeader}
      <DashboardListingsStatsRow stats={stats} />

      <Tabs value={activeTab} onValueChange={handleTabChange} className="gap-0">
        <TabsList
          variant="line"
          className="h-auto w-full justify-start gap-8 border-b border-border bg-transparent p-0"
        >
          <TabsTrigger
            variant="line"
            value="sell"
            className="px-0 pb-3 text-sm font-medium data-[state=active]:text-primary"
          >
            Sell Listings
          </TabsTrigger>
          <TabsTrigger
            variant="line"
            value="rental"
            className="px-0 pb-3 text-sm font-medium data-[state=active]:text-primary"
          >
            Rental Listings
          </TabsTrigger>
        </TabsList>

        <DashboardListingsToolbar
          searchValue={search}
          onSearchChange={handleSearchChange}
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
          filters={filters}
          onFiltersChange={handleFiltersChange}
          onRefresh={onRefresh}
        />
      </Tabs>

      <div className="space-y-4">
        {visibleListings.length === 0 ? (
          <DashboardEmptyState
            icon={Building2}
            title="No listings found"
            description="Try adjusting your search or filters to find matching listings."
          />
        ) : viewMode === "grid" ? (
          <DashboardListingsGrid
            listings={visibleListings}
            onListingClick={handleListingClick}
            onEditListing={onEditListing}
            onDeleteListing={handleDeleteListing}
          />
        ) : (
          <DashboardListingsListView
            listings={visibleListings}
            onListingClick={handleListingClick}
            onEditListing={onEditListing}
            onDeleteListing={handleDeleteListing}
            onViewLeads={handleViewLeads}
          />
        )}

        {filteredListings.length > pageSize ? (
          <ListingPagination page={safePage} pageCount={pageCount} onPageChange={setPage} />
        ) : null}
      </div>

      <DashboardListingDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        listing={selectedListing}
      />

      <DashboardListingLeadsDrawer
        open={leadsDrawerOpen}
        onOpenChange={setLeadsDrawerOpen}
        listing={leadsListing}
      />
    </div>
  )
}

DashboardListingsView.displayName = "DashboardListingsView"
