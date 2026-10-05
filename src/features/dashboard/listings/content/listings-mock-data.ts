import { getAgentListings } from "@/features/agent"
import {
  DASHBOARD_LISTINGS_STAT_LABELS,
  DASHBOARD_LISTINGS_STAT_PORTALS,
} from "@/features/dashboard/utils/dashboard-agent-platform-badges"
import type {
  DashboardListing,
  DashboardListingStat,
} from "./listings-types"
import { listingReferenceId } from "../utils/listings-filters"

const BASE_AGENT_ID = "samantha-smith"

function withListingMeta(
  listing: ReturnType<typeof getAgentListings>[number],
  index: number
): DashboardListing {
  return {
    ...listing,
    referenceId: listingReferenceId(listing.id),
    status: index % 5 === 0 ? "takedown" : "live",
  }
}

function buildExtraSellListings(): DashboardListing[] {
  const templates = [
    {
      propertyType: "Villa",
      price: "AED 18,500,000",
      title: "Golf Course View | Private Pool",
      areaSqft: 8200,
      bedrooms: 5,
      location: "Emirates Hills, Dubai",
      agentName: "Abduil Qais",
    },
    {
      propertyType: "Apartment",
      price: "AED 4,200,000",
      title: "Full Marina View | High Floor",
      areaSqft: 1850,
      bedrooms: 2,
      location: "Dubai Marina, Dubai",
      agentName: "Samantha Smith",
    },
    {
      propertyType: "Townhouse",
      price: "AED 6,750,000",
      title: "Corner Unit | Upgraded Kitchen",
      areaSqft: 3100,
      bedrooms: 4,
      location: "Arabian Ranches 2, Dubai",
      agentName: "Felix McLaughlin",
    },
    {
      propertyType: "Penthouse",
      price: "AED 32,000,000",
      title: "Sky Collection | Private Terrace",
      areaSqft: 9200,
      bedrooms: 4,
      location: "One Za'abeel, Dubai",
      agentName: "Abduil Qais",
    },
    {
      propertyType: "Villa",
      price: "AED 25,000,000",
      title: "Signature Villa | Fairway Living",
      areaSqft: 7535,
      bedrooms: 2,
      location: "The Sundials, Jumeirah Golf Estates, Dubai",
      agentName: "Abduil Qais",
    },
  ] as const

  const sampleImages = getAgentListings(BASE_AGENT_ID)[0]?.imageUrls ?? []

  return templates.flatMap((template, templateIndex) =>
    Array.from({ length: 4 }, (_, copyIndex) => {
      const index = templateIndex * 4 + copyIndex
      const id = `dashboard-extra-sell-${templateIndex}-${copyIndex}`

      return withListingMeta(
        {
          id,
          propertyType: template.propertyType,
          price: template.price,
          title: template.title,
          areaSqft: template.areaSqft,
          bedrooms: template.bedrooms,
          bathrooms: Math.max(1, template.bedrooms - 1),
          parking: 1 + (index % 2),
          location: template.location,
          description: `${template.title} in ${template.location}.`,
          imageUrls: sampleImages,
          agentName: template.agentName,
          agentAvatarUrl: `https://i.pravatar.cc/120?img=${12 + (index % 10)}`,
          transaction: "buy",
          popularity: 80 - index,
        },
        index + 20
      )
    })
  )
}

export function getDashboardAllListingsMockData(): DashboardListing[] {
  const baseListings = getAgentListings(BASE_AGENT_ID).map(withListingMeta)
  const extraSellListings = buildExtraSellListings()

  const merged = [...baseListings, ...extraSellListings].filter(
    (listing, index, arr) => arr.findIndex((item) => item.id === listing.id) === index
  )

  return merged
}

export function getDashboardListingsStats(listings: DashboardListing[]): DashboardListingStat[] {
  const values = [
    listings.filter((listing) => listing.status === "live").length,
    listings.filter((listing) => listing.status === "takedown").length,
    listings.filter((listing) => listing.transaction === "buy").length,
    listings.filter((listing) => listing.popularity >= 90).length,
  ]

  return DASHBOARD_LISTINGS_STAT_PORTALS.map((config, index) => ({
    label: DASHBOARD_LISTINGS_STAT_LABELS[index] ?? "Count",
    value: values[index] ?? 0,
    portal: config.portal,
    iconShape: config.iconShape,
  }))
}

export const dashboardAllListingsPageCopy = {
  title: "All Listings",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  addButtonLabel: "Add New List",
  searchPlaceholder: "Search locations, agents",
} as const
