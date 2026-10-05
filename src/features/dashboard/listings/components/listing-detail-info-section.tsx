"use client"

import { useState } from "react"
import { ChevronDown, Layers } from "lucide-react"

import {
  getDashboardListingDetailRows,
  getDashboardListingStatValues,
} from "../content/listing-detail-content"
import type { DashboardListingDetail } from "../content/listing-detail-types"
import {
  getVisibleListingDescriptionParagraphs,
  listingDescriptionHasMore,
} from "../utils/listing-detail-description"
import { cn } from "@/shared/lib/cn"
import { Card, CardContent, CardHeader } from "@/shared/ui/card"

function InfoField({
  label,
  value,
  className,
}: {
  label: string
  value: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex min-h-11 items-center justify-between gap-3 rounded-lg border border-neutral-200 bg-white px-3 py-2.5",
        className
      )}
    >
      <div className="flex min-w-0 items-center gap-2">
        <Layers className="size-4 shrink-0 text-neutral-400" aria-hidden />
        <span className="truncate text-sm font-medium text-neutral-700">{label}</span>
      </div>
      <span className="shrink-0 rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-800">
        {value}
      </span>
    </div>
  )
}

function ListingDescription({ description }: { description: string }) {
  const [expanded, setExpanded] = useState(false)
  const safeDescription = description ?? ""
  const hasMore = listingDescriptionHasMore(safeDescription)
  const visibleParagraphs = getVisibleListingDescriptionParagraphs(safeDescription, expanded)

  if (visibleParagraphs.length === 0) return null

  return (
    <div className="space-y-4 pt-2">
      {visibleParagraphs.map((paragraph, index) => (
        <p key={index} className="text-sm leading-relaxed text-neutral-600">
          {paragraph}
        </p>
      ))}
      {hasMore ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="inline-flex items-center gap-1 text-sm font-semibold text-black"
        >
          {expanded ? "Show less" : "Show More"}
          <ChevronDown
            className={cn("size-4 transition-transform", expanded && "rotate-180")}
            aria-hidden
          />
        </button>
      ) : null}
    </div>
  )
}

export type DashboardListingDetailInfoSectionProps = {
  listing: DashboardListingDetail
  className?: string
}

export function DashboardListingDetailInfoSection({
  listing,
  className,
}: DashboardListingDetailInfoSectionProps) {
  const stats = getDashboardListingStatValues(listing)
  const rows = getDashboardListingDetailRows(listing)

  const topFields = [
    { label: "Beds", value: stats.beds },
    { label: "Bathrooms", value: stats.bathrooms },
    { label: "Sq.Ft", value: stats.sqft },
  ] as const

  return (
    <Card className={cn("rounded-3xl border-neutral-200", className)}>
      <CardHeader className="pb-0">
        <h2 className="font-inter text-lg font-semibold text-black">Property Information</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          {topFields.map((field) => (
            <InfoField key={field.label} className="bg-white" label={field.label} value={field.value} />
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {rows.map((row) => (
            <InfoField key={row.label} className="bg-neutral-100" label={row.label} value={row.value} />
          ))}
        </div>

        <ListingDescription description={listing.aboutDescription ?? ""} />
      </CardContent>
    </Card>
  )
}

DashboardListingDetailInfoSection.displayName = "DashboardListingDetailInfoSection"
