"use client"

import { Eye, Pencil, Trash2 } from "lucide-react"

import type { DashboardListing } from "../content/listings-types"
import { DashboardPropertyListingCard } from "@/features/dashboard/components/dashboard-property-listing-card"
import { getDashboardAgentPlatformBadges } from "@/features/dashboard/utils/dashboard-agent-platform-badges"
import { dashboardListingDetailPath } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"

export type DashboardListingsGridProps = {
  listings: DashboardListing[]
  onListingClick?: (listing: DashboardListing) => void
  onEditListing?: (listing: DashboardListing) => void
  onDeleteListing?: (listing: DashboardListing) => void
  className?: string
}

function listingToWhatsAppHref(agentName: string): string {
  return `https://wa.me/?text=${encodeURIComponent(`Hi ${agentName}, regarding listing`)}`
}

function buildMenuOptions(
  listing: DashboardListing,
  onEditListing?: (listing: DashboardListing) => void,
  onDeleteListing?: (listing: DashboardListing) => void
) {
  return [
    {
      id: "view",
      label: "View",
      icon: Eye,
      href: dashboardListingDetailPath(listing.id),
    },
    {
      id: "edit",
      label: "Edit",
      icon: Pencil,
      onClick: onEditListing ? () => onEditListing(listing) : undefined,
    },
    {
      id: "delete",
      label: "Delete",
      icon: Trash2,
      onClick: onDeleteListing ? () => onDeleteListing(listing) : undefined,
    },
  ]
}

export function DashboardListingsGrid({
  listings,
  onListingClick,
  onEditListing,
  onDeleteListing,
  className,
}: DashboardListingsGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", className)}>
      {listings.map((listing, index) => (
        <DashboardPropertyListingCard
          key={listing.id}
          size="compact"
          imageUrl={listing.imageUrls[0] ?? ""}
          transaction={listing.transaction === "rent" ? "rent" : "sale"}
          propertyType={listing.propertyType}
          referenceId={listing.referenceId}
          price={listing.price}
          portals={getDashboardAgentPlatformBadges(index)}
          areaSqft={listing.areaSqft}
          bedrooms={listing.bedrooms}
          parking={listing.parking}
          location={listing.location}
          detailHref={dashboardListingDetailPath(listing.id)}
          onCardClick={onListingClick ? () => onListingClick(listing) : undefined}
          menuOptions={buildMenuOptions(listing, onEditListing, onDeleteListing)}
          agent={{
            name: listing.agentName,
            avatarUrl: listing.agentAvatarUrl,
            whatsAppHref: listingToWhatsAppHref(listing.agentName),
          }}
        />
      ))}
    </div>
  )
}

DashboardListingsGrid.displayName = "DashboardListingsGrid"
