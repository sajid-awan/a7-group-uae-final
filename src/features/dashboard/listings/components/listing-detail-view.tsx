"use client"

import type { DashboardListingDetail } from "../content/listing-detail-types"
import { DashboardListingDetailAmenitiesSection } from "./listing-detail-amenities-section"
import { DashboardListingDetailGallery } from "./listing-detail-gallery"
import { DashboardListingDetailHeader } from "./listing-detail-header"
import { DashboardListingDetailInfoSection } from "./listing-detail-info-section"
import { DashboardListingDetailSidebar } from "./listing-detail-sidebar"
import { cn } from "@/shared/lib/cn"
import { Card, CardContent, CardHeader } from "@/shared/ui/card"

export type DashboardListingDetailViewProps = {
  listing: DashboardListingDetail
  backHref?: string
  backLabel?: string
  className?: string
}

export function DashboardListingDetailView({
  listing,
  backHref,
  backLabel,
  className,
}: DashboardListingDetailViewProps) {
  return (
    <div className={cn("space-y-6 p-4 sm:p-6 font-inter", className)}>
      <DashboardListingDetailHeader listing={listing} backHref={backHref} backLabel={backLabel} />
      <DashboardListingDetailGallery listing={listing} />

      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-6">
          <DashboardListingDetailInfoSection listing={listing} />
          <DashboardListingDetailAmenitiesSection listing={listing} />

          <Card className="rounded-3xl border-neutral-200 ">
            <CardHeader className="pb-4">
              <h2 className="font-inter text-lg font-semibold text-black">Location</h2>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200">
                <iframe
                  title="Property location map"
                  src={listing.locationMap.mapEmbedUrl}
                  className="h-80 w-full border-0 md:h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <DashboardListingDetailSidebar listing={listing} />
      </div>
    </div>
  )
}

DashboardListingDetailView.displayName = "DashboardListingDetailView"
