import type { PropertyListing, PropertyListingDetail } from "@/features/property"
import { getPropertyListingDetail } from "@/features/property/core/data/mocks/property-listing-details"
import {
  getMockPropertyListingDtos,
  getMockTrendingLuxuryVillaListingDtos,
} from "@/features/property/core/data/mocks/properties"
import { listingReferenceId } from "../utils/listings-filters"
import { getDashboardAllListingsMockData } from "./listings-mock-data"
import type {
  DashboardListingDetail,
  DashboardListingDetailRow,
  DashboardListingPortalSetting,
} from "./listing-detail-types"

const DETAIL_TEMPLATE_ID = "furnished-1br-marina"

const DEFAULT_PORTAL_SETTINGS: DashboardListingPortalSetting[] = [
  { id: "generic", label: "Generic", enabled: true },
  { id: "property-finder", label: "PropertyFinder", enabled: false },
  { id: "bayut", label: "Bayut", enabled: true },
  { id: "dubizzle", label: "Dubizzle", enabled: true },
]

function padCount(value: number): string {
  return String(value).padStart(2, "0")
}

export function getDashboardListingDetailRows(listing: DashboardListingDetail): DashboardListingDetailRow[] {
  return [
    { label: "Type", value: listing.propertyType, icon: "type" },
    { label: "Furnishing", value: listing.meta.furnishing, icon: "furnishing" },
    {
      label: "Purpose",
      value: listing.meta.purpose,
      icon: "purpose",
    },
    { label: "Added On", value: listing.meta.addedOn, icon: "calendar" },
    { label: "Reference No", value: listing.meta.referenceId, icon: "reference" },
    { label: "Tag", value: listing.meta.tag, icon: "tag" },
  ]
}

export function getDashboardListingDetailTitle(listing: DashboardListingDetail): string {
  const purpose = listing.meta.purpose === "Rent" ? "Rent" : "Sale"
  return `${listing.propertyType} for ${purpose}`
}

function allBaseListingIds(): string[] {
  return [...getMockPropertyListingDtos(), ...getMockTrendingLuxuryVillaListingDtos()].map(
    (dto) => dto.id
  )
}

function resolveBasePropertyId(id: string): string | null {
  const baseIds = allBaseListingIds().sort((a, b) => b.length - a.length)

  for (const baseId of baseIds) {
    if (id === baseId || id.startsWith(`${baseId}-`)) {
      return baseId
    }
  }

  return null
}

function buildDashboardAboutDescription(property: PropertyListingDetail): string {
  const intro = (property.aboutDescription ?? property.description ?? "").trim()
  if (!intro) {
    const community = property.location.split(",")[0]?.trim() ?? "Dubai"
    return `Located within ${community}, this residence offers direct access to one of Dubai's most dynamic and future-oriented neighborhoods.`
  }
  if (intro.includes("\n\n")) return intro

  const community = property.location.split(",")[0]?.trim() ?? "Dubai"
  const extended = `Located within ${community}, this residence offers direct access to one of Dubai's most dynamic and future-oriented neighborhoods. Home to international design studios, creative workspaces, and premium retail destinations, the area continues to attract professionals and investors seeking a connected urban lifestyle with world-class amenities at their doorstep.`

  return `${intro}\n\n${extended}`
}

function overlayDashboardListing(
  detail: PropertyListingDetail,
  listing: PropertyListing
): PropertyListingDetail {
  const description =
    listing.description ??
    `${listing.title} is a ${listing.propertyType.toLowerCase()} in ${listing.location}, offered at ${listing.price}.`

  return {
    ...detail,
    id: listing.id,
    propertyType: listing.propertyType,
    price: listing.price,
    title: listing.title,
    pricePerSqft: listing.pricePerSqft,
    areaSqft: listing.areaSqft,
    bedrooms: listing.bedrooms,
    bathrooms: listing.bathrooms,
    parking: listing.parking,
    location: listing.location,
    description: listing.description,
    imageUrls: listing.imageUrls,
    agentName: listing.agentName,
    agentAvatarUrl: listing.agentAvatarUrl,
    aboutDescription: description,
    galleryImageUrls:
      listing.imageUrls.length >= 5 ? [...listing.imageUrls] : detail.galleryImageUrls,
    transactionsSubtitle: `${listing.bedrooms} Beds ${listing.propertyType} in ${listing.location}`,
  }
}

function resolvePropertyDetailForDashboard(id: string): PropertyListingDetail | null {
  const direct = getPropertyListingDetail(id)
  if (direct) return direct

  const dashboardListing = getDashboardAllListingsMockData().find((listing) => listing.id === id)
  if (!dashboardListing) return null

  const baseId = resolveBasePropertyId(id)
  const baseDetail = baseId ? getPropertyListingDetail(baseId) : null
  if (baseDetail) {
    return overlayDashboardListing(baseDetail, dashboardListing)
  }

  const template = getPropertyListingDetail(DETAIL_TEMPLATE_ID)
  if (!template) return null

  return overlayDashboardListing(template, dashboardListing)
}

export function getDashboardListingDetail(
  id: string,
  options?: { fallbackListing?: PropertyListing }
): DashboardListingDetail | null {
  let property = resolvePropertyDetailForDashboard(id)

  if (!property && options?.fallbackListing) {
    const baseId = resolveBasePropertyId(id)
    const baseDetail = baseId
      ? getPropertyListingDetail(baseId)
      : getPropertyListingDetail(DETAIL_TEMPLATE_ID)
    if (baseDetail) {
      property = overlayDashboardListing(baseDetail, options.fallbackListing)
    }
  }

  if (!property) return null

  const furnishing =
    property.aboutHighlights.find((item) => item.label === "Furnishing")?.value ?? "Unfurnished"
  const listedDate =
    property.regulatoryInfo.find((item) => item.label === "Listed")?.value ?? "12 May 2026"

  return {
    ...property,
    aboutDescription: buildDashboardAboutDescription(property),
    meta: {
      lastUpdatedLabel: "2h ago",
      referenceId: listingReferenceId(property.id),
      furnishing,
      purpose: property.price.toLowerCase().includes("year") ? "Rent" : "Sale",
      addedOn: listedDate,
      tag: property.status ?? "Premium",
    },
    analytics: {
      totalLeads: 115,
      totalViews: 115,
    },
    hideListing: false,
    portalSettings: DEFAULT_PORTAL_SETTINGS.map((portal) => ({ ...portal })),
  }
}

export function getDashboardListingStatValues(listing: DashboardListingDetail) {
  return {
    beds: padCount(listing.bedrooms),
    bathrooms: padCount(listing.bathrooms),
    sqft: listing.areaSqft.toLocaleString(),
  }
}
