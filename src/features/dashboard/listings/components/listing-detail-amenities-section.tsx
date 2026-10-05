"use client"

import { Check } from "lucide-react"

import type { DashboardListingDetail } from "../content/listing-detail-types"
import { cn } from "@/shared/lib/cn"
import { Card, CardContent, CardHeader } from "@/shared/ui/card"

export type DashboardListingDetailAmenitiesSectionProps = {
  listing: DashboardListingDetail
  className?: string
}

export function DashboardListingDetailAmenitiesSection({
  listing,
  className,
}: DashboardListingDetailAmenitiesSectionProps) {
  if (listing.amenities.length === 0) return null

  return (
    <Card className={cn("rounded-3xl border-neutral-200", className)}>
      <CardHeader className="pb-0">
        <h2 className="font-inter text-lg font-semibold text-black">Features / Amenities</h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {listing.amenities.map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-4 py-3"
            >
              <Check className="size-4 shrink-0 text-black" strokeWidth={2} aria-hidden />
              <span className="text-sm text-neutral-700">{name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

DashboardListingDetailAmenitiesSection.displayName = "DashboardListingDetailAmenitiesSection"
