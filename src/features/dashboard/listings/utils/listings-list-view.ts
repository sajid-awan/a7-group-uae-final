import type { DashboardListing } from "../content/listings-types"

export function getListingBuildingName(listing: DashboardListing): string {
  const fromTitle = listing.title.split("|")[0]?.trim()
  if (fromTitle) return fromTitle

  const [firstPart] = listing.location.split(",")
  return firstPart?.trim() ?? listing.location
}

export function getListingAreaName(listing: DashboardListing): string {
  const parts = listing.location.split(",").map((part) => part.trim()).filter(Boolean)
  if (parts.length >= 2) return parts[0] ?? listing.location
  return parts[0] ?? listing.location
}

export function getListingAgentPhone(agentName: string): string {
  const digits = agentName
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0)

  const suffix = String(1000000 + (digits % 8999999)).slice(-7)
  return `+971 50 ${suffix.slice(0, 3)} ${suffix.slice(3)}`
}

export function formatListingDetailsLine(listing: DashboardListing): string {
  return `${listing.bathrooms} Bath • ${listing.areaSqft.toLocaleString()} sqft`
}

export function formatListingBedroomType(listing: DashboardListing): string {
  const bedLabel = listing.bedrooms === 0 ? "Studio" : `${listing.bedrooms} Bed`
  return `${bedLabel} ${listing.propertyType}`
}
