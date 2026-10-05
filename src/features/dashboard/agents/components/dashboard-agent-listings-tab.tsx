"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Eye, Filter, Pencil, RefreshCw } from "lucide-react"

import type { AgentListing } from "@/features/agent"
import type { DashboardAgentRow } from "../content/dashboard-agents-types"
import { getDashboardAgentListings } from "../utils/dashboard-agent-listings"
import {
  agentListingToDashboardPropertyCardProps,
  filterAgentListingsByQuery,
} from "../utils/dashboard-agent-listing-card"
import type { DashboardViewMode } from "@/features/dashboard/content/dashboard-view-mode"
import {
  DASHBOARD_TABLE_ROW_CLASSNAME,
  DASHBOARD_TABLE_WRAPPER_CLASSNAME,
} from "@/features/dashboard/content/dashboard-view-mode"
import { DashboardPropertyListingCard } from "@/features/dashboard/components/dashboard-property-listing-card"
import { DashboardToolbarIconButton } from "@/features/dashboard/components/dashboard-toolbar-icon-button"
import { DashboardViewModeToolbar } from "@/features/dashboard/components/dashboard-view-mode-toolbar"
import { dashboardAgentListingDetailPath } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"
import { AedText } from "@/shared/ui/aed-text"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { ListingPagination } from "@/shared/ui/listing-pagination"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"

const GRID_PAGE_SIZE = 9
const TABLE_PAGE_SIZE = 11

const transactionBadgeClassName = {
  buy: "border-emerald-200 bg-emerald-50 text-emerald-700",
  rent: "border-sky-200 bg-sky-50 text-sky-700",
} as const

export type DashboardAgentListingsTabProps = {
  agent: DashboardAgentRow
  className?: string
}

function ListingTableRow({
  listing,
  index,
  agentSlug,
}: {
  listing: AgentListing
  index: number
  agentSlug: string
}) {
  const cardProps = agentListingToDashboardPropertyCardProps(listing, index, agentSlug)

  return (
    <TableRow className={DASHBOARD_TABLE_ROW_CLASSNAME}>
      <TableCell>
        <div className="flex items-center gap-3">
          <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-muted">
            <Image src={cardProps.imageUrl} alt="" fill className="object-cover" sizes="56px" />
          </div>
          <div className="min-w-0">
            <p className="font-inter text-sm font-semibold text-primary">{cardProps.referenceId}</p>
            <p className="truncate text-xs text-muted-foreground">{listing.title}</p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <Badge
          variant="outline"
          size="default"
          shape="pill"
          className={cn(
            "font-semibold normal-case tracking-normal",
            transactionBadgeClassName[listing.transaction]
          )}
        >
          {listing.transaction === "rent" ? "Rent" : "Sale"}
        </Badge>
      </TableCell>
      <TableCell className="whitespace-nowrap font-inter text-sm font-semibold text-foreground">
        <AedText text={listing.price} />
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-1.5">
          {cardProps.portals?.map((portal) => (
            <span
              key={portal.id}
              className="relative flex size-6 overflow-hidden  bg-white"
              title={portal.label}
            >
              {/* istanbul ignore next */}
              {portal.imageSrc ? (
                <Image src={portal.imageSrc} alt={portal.label} fill className="object-contain p-0.5" sizes="24px" />
              ) : null}
            </span>
          ))}
        </div>
      </TableCell>
      <TableCell className="max-w-[220px] truncate text-sm text-muted-foreground">{listing.location}</TableCell>
      <TableCell>
        <div className="flex items-center justify-end gap-1">
          <Button
            asChild
            variant="ghost"
            size="xs"
            shape="pill"
            className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
          >
            <Link
              href={dashboardAgentListingDetailPath(agentSlug, listing.id)}
              aria-label={`View ${cardProps.referenceId}`}
            >
              <Eye className="size-4" />
            </Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="xs"
            shape="pill"
            className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
            aria-label={`Edit ${cardProps.referenceId}`}
          >
            <Pencil className="size-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}

export function DashboardAgentListingsTab({ agent, className }: DashboardAgentListingsTabProps) {
  const allListings = useMemo(() => getDashboardAgentListings(agent), [agent])
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [viewMode, setViewMode] = useState<DashboardViewMode>("grid")

  const pageSize = viewMode === "grid" ? GRID_PAGE_SIZE : TABLE_PAGE_SIZE

  const filteredListings = useMemo(
    () => filterAgentListingsByQuery(allListings, search),
    [allListings, search]
  )

  const pageCount = Math.max(1, Math.ceil(filteredListings.length / pageSize))
  const safePage = Math.min(page, pageCount)

  const visibleListings = useMemo(() => {
    const start = (safePage - 1) * pageSize
    return filteredListings.slice(start, start + pageSize)
  }, [filteredListings, pageSize, safePage])

  const handleSearchChange = (value: string) => {
    setSearch(value)
    setPage(1)
  }

  const handleViewModeChange = (mode: DashboardViewMode) => {
    setViewMode(mode)
    setPage(1)
  }

  return (
    <div className={cn("space-y-4", className)}>
      <DashboardViewModeToolbar
        searchValue={search}
        onSearchChange={handleSearchChange}
        searchPlaceholder="Search locations, agents"
        searchAriaLabel="Search listings"
        viewMode={viewMode}
        onViewModeChange={handleViewModeChange}
        trailingActions={
          <>
            <DashboardToolbarIconButton label="Refresh">
              <RefreshCw className="size-3.5" />
            </DashboardToolbarIconButton>
            <Button type="button" variant="outline" size="sm" className="gap-2">
              <Filter className="size-3.5" aria-hidden />
              Filters
            </Button>
          </>
        }
      />

      {viewMode === "grid" ? (
        <>
          {visibleListings.length === 0 ? (
            <div className="rounded-2xl border border-border bg-white px-6 py-16 text-center text-sm text-muted-foreground shadow-sm">
              No listings found.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visibleListings.map((listing, index) => {
                const globalIndex = (safePage - 1) * pageSize + index
                const cardProps = agentListingToDashboardPropertyCardProps(listing, globalIndex, agent.id)

                return (
                  <DashboardPropertyListingCard
                    key={listing.id}
                    {...cardProps}
                    menuOptions={[
                      {
                        id: "view",
                        label: "View",
                        icon: Eye,
                        href: dashboardAgentListingDetailPath(agent.id, listing.id),
                      },
                      {
                        id: "edit",
                        label: "Edit",
                        icon: Pencil,
                      },
                    ]}
                  />
                )
              })}
            </div>
          )}

          {filteredListings.length > pageSize ? (
            <ListingPagination page={safePage} pageCount={pageCount} onPageChange={setPage} />
          ) : null}
        </>
      ) : (
        <div className={DASHBOARD_TABLE_WRAPPER_CLASSNAME}>
          <Table>
            <TableHeader>
              <TableRow className={cn(DASHBOARD_TABLE_ROW_CLASSNAME, "hover:bg-transparent")}>
                <TableHead className="min-w-[220px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Property
                </TableHead>
                <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Status
                </TableHead>
                <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Price
                </TableHead>
                <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Portals
                </TableHead>
                <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Location
                </TableHead>
                <TableHead className="w-[100px] text-right">
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {visibleListings.length === 0 ? (
                <TableRow className={DASHBOARD_TABLE_ROW_CLASSNAME}>
                  <TableCell colSpan={6} className="py-10 text-center text-sm text-muted-foreground">
                    No listings found.
                  </TableCell>
                </TableRow>
              ) : (
                visibleListings.map((listing, index) => (
                  <ListingTableRow
                    key={listing.id}
                    listing={listing}
                    index={(safePage - 1) * pageSize + index}
                    agentSlug={agent.id}
                  />
                ))
              )}
            </TableBody>
          </Table>

          {filteredListings.length > pageSize ? (
            <div className="border-t border-neutral-200 px-4 py-4">
              <ListingPagination page={safePage} pageCount={pageCount} onPageChange={setPage} />
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}

DashboardAgentListingsTab.displayName = "DashboardAgentListingsTab"
