"use client"

import Image from "next/image"
import Link from "next/link"
import { Eye, FileText, MoreVertical, Pencil, Trash2 } from "lucide-react"

import type { DashboardListing } from "../content/listings-types"
import {
  formatListingBedroomType,
  formatListingDetailsLine,
  getListingAgentPhone,
  getListingAreaName,
  getListingBuildingName,
} from "../utils/listings-list-view"
import { getDashboardAgentPlatformBadges } from "@/features/dashboard/utils/dashboard-agent-platform-badges"
import { dashboardListingDetailPath } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"
import { ActionTooltip } from "@/shared/ui/action-tooltip"
import { AedText } from "@/shared/ui/aed-text"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"
import {
  DASHBOARD_TABLE_ROW_CLASSNAME,
  DASHBOARD_TABLE_WRAPPER_CLASSNAME,
} from "@/features/dashboard/content/dashboard-view-mode"

const transactionLabelClassName = {
  buy: "text-emerald-600",
  rent: "text-sky-600",
} as const

export type DashboardListingsListViewProps = {
  listings: DashboardListing[]
  onListingClick?: (listing: DashboardListing) => void
  onEditListing?: (listing: DashboardListing) => void
  onDeleteListing?: (listing: DashboardListing) => void
  onViewLeads?: (listing: DashboardListing) => void
  className?: string
}

export function DashboardListingsListView({
  listings,
  onListingClick,
  onEditListing,
  onDeleteListing,
  onViewLeads,
  className,
}: DashboardListingsListViewProps) {
  return (
    <div className={cn(DASHBOARD_TABLE_WRAPPER_CLASSNAME, "overflow-x-auto", className)}>
      <Table>
        <TableHeader>
          <TableRow className={cn(DASHBOARD_TABLE_ROW_CLASSNAME, "hover:bg-transparent")}>
            <TableHead className="min-w-[180px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Location
            </TableHead>
            <TableHead className="min-w-[160px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Details
            </TableHead>
            <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Ref#
            </TableHead>
            <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Type
            </TableHead>
            <TableHead className="font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Price
            </TableHead>
            <TableHead className="min-w-[160px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Agent
            </TableHead>
            <TableHead className="min-w-[140px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Portals
            </TableHead>
            <TableHead className="min-w-[130px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Leads
            </TableHead>
            <TableHead className="w-[52px]">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listings.map((listing, index) => {
            const portals = getDashboardAgentPlatformBadges(index)
            const agentPhone = getListingAgentPhone(listing.agentName)

            return (
              <TableRow
                key={listing.id}
                className={cn(DASHBOARD_TABLE_ROW_CLASSNAME, onListingClick && "cursor-pointer")}
                onClick={onListingClick ? () => onListingClick(listing) : undefined}
              >
                <TableCell>
                  <div className="flex min-w-0 items-center gap-3">
                    <Avatar size="md" shape="circle" className="shrink-0">
                      {listing.imageUrls[0] ? (
                        <AvatarImage
                          src={listing.imageUrls[0]}
                          alt={getListingBuildingName(listing)}
                        />
                      ) : null}
                      <AvatarFallback>{getListingBuildingName(listing).slice(0, 1)}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="truncate font-inter text-sm font-semibold text-foreground">
                        {getListingBuildingName(listing)}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">{getListingAreaName(listing)}</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="min-w-0">
                    <p className="font-inter text-sm font-semibold text-foreground">
                      {formatListingBedroomType(listing)}
                    </p>
                    <p className="text-xs text-muted-foreground">{formatListingDetailsLine(listing)}</p>
                  </div>
                </TableCell>

                <TableCell className="whitespace-nowrap font-inter text-sm font-semibold text-primary">
                  {listing.referenceId}
                </TableCell>

                <TableCell>
                  <div>
                    <p
                      className={cn(
                        "text-sm font-semibold",
                        transactionLabelClassName[listing.transaction]
                      )}
                    >
                      {listing.transaction === "rent" ? "Rent" : "Sale"}
                    </p>
                    <p className="text-xs text-muted-foreground">{listing.propertyType}</p>
                  </div>
                </TableCell>

                <TableCell className="whitespace-nowrap font-inter text-sm font-semibold text-foreground">
                  <AedText text={listing.price} />
                </TableCell>

                <TableCell>
                  <div className="flex min-w-0 items-center gap-2.5">
                    <Avatar className="size-9 shrink-0">
                      {listing.agentAvatarUrl ? (
                        <AvatarImage src={listing.agentAvatarUrl} alt={listing.agentName} />
                      ) : null}
                      <AvatarFallback>{listing.agentName.slice(0, 1)}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="truncate font-inter text-sm font-semibold text-foreground">
                        {listing.agentName}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">{agentPhone}</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="space-y-1.5">
                    <p className="text-xs text-muted-foreground">Public</p>
                    <div className="flex items-center gap-1.5">
                      {portals.map((portal) => (
                        <span
                          key={portal.id}
                          className="relative flex size-6 shrink-0 overflow-hidden rounded-md bg-white"
                          title={portal.label}
                        >
                          {portal.imageSrc ? (
                            <Image
                              src={portal.imageSrc}
                              alt={portal.label}
                              fill
                              className="object-contain p-0.5"
                              sizes="24px"
                            />
                          ) : null}
                        </span>
                      ))}
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  <ActionTooltip label="View Leads">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-auto gap-2 px-0 py-1 text-sm font-medium text-foreground hover:bg-transparent hover:text-primary"
                      onClick={(event) => {
                        event.stopPropagation()
                        onViewLeads?.(listing)
                      }}
                      onPointerDown={(event) => event.stopPropagation()}
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                        <FileText className="size-4" aria-hidden />
                      </span>
                      View Leads
                    </Button>
                  </ActionTooltip>
                </TableCell>

                <TableCell>
                  <DropdownMenu>
                    <ActionTooltip label="Actions">
                      <DropdownMenuTrigger asChild>
                        <Button
                          type="button"
                          variant="ghost"
                          size="xs"
                          shape="pill"
                          className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                          aria-label={`Open actions for ${listing.referenceId}`}
                          onClick={(event) => event.stopPropagation()}
                          onPointerDown={(event) => event.stopPropagation()}
                        >
                          <MoreVertical className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                    </ActionTooltip>
                    <DropdownMenuContent
                      align="end"
                      className="w-40 rounded-xl p-1.5"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <DropdownMenuItem asChild className="rounded-lg px-3 py-2">
                        <Link href={dashboardListingDetailPath(listing.id)} onClick={(event) => event.stopPropagation()}>
                          <Eye className="size-4" />
                          View
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="rounded-lg px-3 py-2"
                        onSelect={(event) => {
                          event.stopPropagation()
                          onEditListing?.(listing)
                        }}
                      >
                        <Pencil className="size-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="rounded-lg px-3 py-2 text-destructive focus:text-destructive"
                        onSelect={(event) => {
                          event.stopPropagation()
                          onDeleteListing?.(listing)
                        }}
                      >
                        <Trash2 className="size-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

DashboardListingsListView.displayName = "DashboardListingsListView"
