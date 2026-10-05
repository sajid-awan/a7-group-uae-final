import type { AgentListing } from "@/features/agent"
import {
  dashboardAgentListingDetailPath,
  dashboardListingDetailPath,
} from "@/shared/lib/constants/routes"
import type { DashboardPropertyListingCardProps } from "@/features/dashboard/components/dashboard-property-listing-card"
import { getDashboardAgentPlatformBadges } from "@/features/dashboard/utils/dashboard-agent-platform-badges"

function listingReferenceId(listingId: string): string {
  const digits = listingId.replace(/\D/g, "").slice(-6).padStart(6, "0")
  return `PL-${digits}`
}

export function agentListingToDashboardPropertyCardProps(
  listing: AgentListing,
  index: number,
  agentSlug?: string
): DashboardPropertyListingCardProps {
  const detailHref = agentSlug
    ? dashboardAgentListingDetailPath(agentSlug, listing.id)
    : dashboardListingDetailPath(listing.id)

  return {
    imageUrl: listing.imageUrls[0] ?? "",
    transaction: listing.transaction === "rent" ? "rent" : "sale",
    propertyType: listing.propertyType,
    referenceId: listingReferenceId(listing.id),
    price: listing.price,
    portals: getDashboardAgentPlatformBadges(index),
    areaSqft: listing.areaSqft,
    bedrooms: listing.bedrooms,
    parking: listing.parking,
    location: listing.location,
    detailHref,
  }
}

export function filterAgentListingsByQuery(listings: AgentListing[], query: string): AgentListing[] {
  const normalizedQuery = query.trim().toLowerCase()
  if (!normalizedQuery) return listings

  return listings.filter((listing) => {
    const referenceId = listingReferenceId(listing.id).toLowerCase()
    return (
      listing.title.toLowerCase().includes(normalizedQuery) ||
      listing.location.toLowerCase().includes(normalizedQuery) ||
      listing.propertyType.toLowerCase().includes(normalizedQuery) ||
      listing.price.toLowerCase().includes(normalizedQuery) ||
      referenceId.includes(normalizedQuery)
    )
  })
}
