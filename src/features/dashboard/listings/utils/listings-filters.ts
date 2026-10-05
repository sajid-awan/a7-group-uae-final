import type {
  DashboardListing,
  DashboardListingTab,
} from "../content/listings-types"
import type { DashboardListingFilters } from "../content/listings-filter-types"

export function listingReferenceId(listingId: string): string {
  const digits = listingId.replace(/\D/g, "").slice(-6).padStart(6, "0")
  return `PL-${digits}`
}

export function filterDashboardListingsByTab(
  listings: DashboardListing[],
  tab: DashboardListingTab
): DashboardListing[] {
  if (tab === "sell") {
    return listings.filter((listing) => listing.transaction === "buy")
  }
  return listings.filter((listing) => listing.transaction === "rent")
}

export function filterDashboardListingsBySearch(
  listings: DashboardListing[],
  query: string
): DashboardListing[] {
  const normalizedQuery = query.trim().toLowerCase()
  if (!normalizedQuery) return listings

  return listings.filter((listing) => {
    const haystack = [
      listing.title,
      listing.location,
      listing.propertyType,
      listing.price,
      listing.agentName,
      listing.referenceId,
    ]
      .join(" ")
      .toLowerCase()

    return haystack.includes(normalizedQuery)
  })
}

function parseNumericFilterValue(value: string): number | null {
  const normalized = value.trim()
  if (!normalized || normalized === "0" || normalized === "all") return null
  const digits = normalized.replace(/,/g, "").match(/([\d.]+)/)
  return digits ? Number.parseFloat(digits[1]!) : null
}

function listingPriceValue(listing: DashboardListing): number {
  const normalized = listing.price.replace(/,/g, "").toLowerCase()
  const match = normalized.match(/([\d.]+)/)
  if (!match) return 0

  const amount = Number.parseFloat(match[1]!)
  if (normalized.includes("m")) return amount * 1_000_000
  return amount
}

function matchesPropertyTitle(listing: DashboardListing, propertyTitle: string): boolean {
  if (propertyTitle === "all") return true

  const normalizedTitle = listing.title.toLowerCase()
  if (propertyTitle === "golf-view") return normalizedTitle.includes("golf")
  if (propertyTitle === "marina-view") return normalizedTitle.includes("marina")
  if (propertyTitle === "luxury-living") return normalizedTitle.includes("luxury")
  return true
}

function matchesVisibility(listing: DashboardListing, visibility: DashboardListingFilters["visibility"]): boolean {
  if (visibility === "all") return true
  if (visibility === "draft") return listing.status === "takedown"
  if (visibility === "private") return listing.status === "live" && listing.popularity < 90
  if (visibility === "public") return listing.status === "live" && listing.popularity >= 90
  if (visibility === "broadcast") return listing.status === "live"
  return true
}

export function filterDashboardListingsByFilters(
  listings: DashboardListing[],
  filters: DashboardListingFilters
): DashboardListing[] {
  let results = listings

  if (filters.propertyTitle !== "all") {
    results = results.filter((listing) => matchesPropertyTitle(listing, filters.propertyTitle))
  }

  if (filters.referenceNo.trim()) {
    const query = filters.referenceNo.trim().toLowerCase()
    results = results.filter((listing) => listing.referenceId.toLowerCase().includes(query))
  }

  if (filters.propertyType !== "all") {
    results = results.filter((listing) => listing.propertyType === filters.propertyType)
  }

  if (filters.bedrooms !== "all") {
    const bedrooms = Number.parseInt(filters.bedrooms, 10)
    results = results.filter((listing) =>
      filters.bedrooms === "4" ? listing.bedrooms >= 4 : listing.bedrooms === bedrooms
    )
  }

  const minPrice = parseNumericFilterValue(filters.minPrice)
  const maxPrice = parseNumericFilterValue(filters.maxPrice)
  if (minPrice !== null) {
    results = results.filter((listing) => listingPriceValue(listing) >= minPrice)
  }
  if (maxPrice !== null) {
    results = results.filter((listing) => listingPriceValue(listing) <= maxPrice)
  }

  const minSize = parseNumericFilterValue(filters.minSize)
  const maxSize = parseNumericFilterValue(filters.maxSize)
  if (minSize !== null) {
    results = results.filter((listing) => listing.areaSqft >= minSize)
  }
  if (maxSize !== null) {
    results = results.filter((listing) => listing.areaSqft <= maxSize)
  }

  results = results.filter((listing) => matchesVisibility(listing, filters.visibility))

  return results
}

export function filterDashboardListings(
  listings: DashboardListing[],
  options: {
    tab: DashboardListingTab
    search: string
    filters: DashboardListingFilters
  }
): DashboardListing[] {
  const byTab = filterDashboardListingsByTab(listings, options.tab)
  const bySearch = filterDashboardListingsBySearch(byTab, options.search)
  return filterDashboardListingsByFilters(bySearch, options.filters)
}

export function paginateDashboardListings<T>(
  items: T[],
  page: number,
  pageSize: number
): { items: T[]; pageCount: number; safePage: number } {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize))
  const safePage = Math.min(Math.max(1, page), pageCount)
  const start = (safePage - 1) * pageSize

  return {
    items: items.slice(start, start + pageSize),
    pageCount,
    safePage,
  }
}
