"use client"

import Link from "next/link"
import { MapPin } from "lucide-react"

import {
  getDashboardListingDetailTitle,
} from "../content/listing-detail-content"
import type { DashboardListingDetail } from "../content/listing-detail-types"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"
import { AedText } from "@/shared/ui/aed-text"
import { Badge } from "@/shared/ui/badge"

export type DashboardListingDetailHeaderProps = {
  listing: DashboardListingDetail
  backHref?: string
  backLabel?: string
  className?: string
}

export function DashboardListingDetailHeader({
  listing,
  backHref = PAGE_ROUTES.dashboardListings,
  backLabel = "Back to listings",
  className,
}: DashboardListingDetailHeaderProps) {
  const isRent = listing.meta.purpose === "Rent"

  return (
    <header className={cn("space-y-4", className)}>
      <Link
        href={backHref}
        className="inline-flex text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        ← {backLabel}
      </Link>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 space-y-2">
          <h1 className="font-inter text-2xl font-semibold text-black md:text-3xl">
            {getDashboardListingDetailTitle(listing)}
          </h1>
          <div className="flex items-start gap-1.5 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
            <span>{listing.location}</span>
          </div>
          <Badge
            variant="outline"
            size="default"
            shape="pill"
            className={cn(
              "font-semibold normal-case tracking-normal",
              isRent
                ? "border-sky-200 bg-sky-50 text-sky-700"
                : "border-emerald-200 bg-emerald-50 text-emerald-700"
            )}
          >
            For {isRent ? "Rent" : "Sale"}
          </Badge>
        </div>

        <div className="shrink-0 text-left lg:text-right">
          <p className="font-inter text-2xl font-semibold text-black md:text-3xl">
            <AedText text={listing.price} />
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Last Updated: {listing.meta.lastUpdatedLabel}
          </p>
        </div>
      </div>
    </header>
  )
}

DashboardListingDetailHeader.displayName = "DashboardListingDetailHeader"
