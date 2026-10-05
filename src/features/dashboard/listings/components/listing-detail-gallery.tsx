"use client"

import { PropertyGalleryStrip } from "@/features/property/ui/property-detail/property-gallery-strip"
import type { DashboardListingDetail } from "../content/listing-detail-types"

export type DashboardListingDetailGalleryProps = {
  listing: DashboardListingDetail
  className?: string
}

export function DashboardListingDetailGallery({ listing, className }: DashboardListingDetailGalleryProps) {
  const images =
    listing.galleryImageUrls.length > 0 ? listing.galleryImageUrls : listing.imageUrls

  return (
    <PropertyGalleryStrip
      images={images}
      propertyTitle={listing.title}
      totalPhotos={listing.totalPhotos ?? images.length}
      overlapsHero={false}
      className={className}
    />
  )
}

DashboardListingDetailGallery.displayName = "DashboardListingDetailGallery"
