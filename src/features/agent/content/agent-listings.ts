import { findRealEstateAgentById } from "@/features/agent/content/agent-profile-content"
import {
  getMockPropertyListingDtos,
  getMockTrendingLuxuryVillaListingDtos,
} from "@/features/property/core/data/mocks/properties"
import { toPropertyListing } from "@/features/property"
import type { PropertyListing } from "@/features/property"

export type AgentListingTransaction = "buy" | "rent"

export type AgentListing = PropertyListing & {
  transaction: AgentListingTransaction
  /** Higher = shown first when sorting by popular. */
  popularity: number
}

const RENT_LISTING_OVERRIDES: Array<{
  idSuffix: string
  propertyType: string
  price: string
  title: string
  pricePerSqft?: string
  areaSqft: number
  bedrooms: number
  bathrooms: number
  parking: number
  location: string
  description: string
}> = [
  {
    idSuffix: "marina-rent",
    propertyType: "Apartment",
    price: "185,000 AED /year",
    title: "Marina View | Furnished | Chiller Free",
    pricePerSqft: "AED 198 /sqft",
    areaSqft: 934,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    location: "Dubai Marina, Dubai",
    description:
      "Annual lease in a well-maintained tower with marina outlook, fitted kitchen, and covered parking. Available for immediate move-in.",
  },
  {
    idSuffix: "downtown-rent",
    propertyType: "Apartment",
    price: "240,000 AED /year",
    title: "Burj Khalifa View | 1 Bed | High Floor",
    pricePerSqft: "AED 265 /sqft",
    areaSqft: 905,
    bedrooms: 1,
    bathrooms: 2,
    parking: 1,
    location: "Downtown Dubai, Dubai",
    description:
      "Bright one-bedroom with fountain views, hotel-style lobby, and gym access. Ideal for professionals seeking a central Dubai base.",
  },
  {
    idSuffix: "jvc-rent",
    propertyType: "Apartment",
    price: "62,000 AED /year",
    title: "Studio | Community Pool | Vacant",
    areaSqft: 412,
    bedrooms: 0,
    bathrooms: 1,
    parking: 1,
    location: "Jumeirah Village Circle, Dubai",
    description:
      "Affordable studio in JVC with balcony, built-in wardrobes, and family-friendly amenities. Quick access to Al Khail Road.",
  },
]

function parsePriceAed(price: string): number {
  const normalized = price.replace(/,/g, "").toLowerCase()
  const match = normalized.match(/([\d.]+)\s*m/)
  if (match) return Number.parseFloat(match[1]!) * 1_000_000
  const digits = normalized.match(/([\d.]+)/)
  return digits ? Number.parseFloat(digits[1]!) : 0
}

function inferTransaction(price: string, index: number): AgentListingTransaction {
  const lower = price.toLowerCase()
  if (lower.includes("/year") || lower.includes("/month") || lower.includes("annual")) {
    return "rent"
  }
  if (parsePriceAed(price) < 2_000_000 && index % 3 === 2) {
    return "rent"
  }
  return "buy"
}

function hashAgentId(id: string): number {
  let hash = 0
  for (let i = 0; i < id.length; i += 1) {
    hash = (hash * 31 + id.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

function buildRentListingsForAgent(
  agentName: string,
  agentAvatarUrl: string | undefined,
  agentId: string,
  imageUrls: string[]
): AgentListing[] {
  return RENT_LISTING_OVERRIDES.map((template, index) => ({
    id: `${agentId}-${template.idSuffix}`,
    propertyType: template.propertyType,
    price: template.price,
    title: template.title,
    pricePerSqft: template.pricePerSqft,
    areaSqft: template.areaSqft,
    bedrooms: template.bedrooms,
    bathrooms: template.bathrooms,
    parking: template.parking,
    location: template.location,
    description: template.description,
    imageUrls,
    agentName,
    agentAvatarUrl,
    transaction: "rent" as const,
    popularity: 90 - index * 7,
  }))
}

function enrichListing(
  listing: PropertyListing,
  agentName: string,
  agentAvatarUrl: string | undefined,
  index: number,
  agentId: string
): AgentListing {
  return {
    ...listing,
    id: listing.id.includes(agentId) ? listing.id : `${listing.id}-${agentId}`,
    agentName,
    agentAvatarUrl: agentAvatarUrl ?? listing.agentAvatarUrl,
    transaction: inferTransaction(listing.price, index),
    popularity: 100 - index * 3 - (hashAgentId(listing.id) % 12),
  }
}

/**
 * Listings shown on `/agents/[id]/listings` — matches agent by name, pads with shared
 * inventory, and adds rent templates so Both / Buy / Rent filters have data.
 */
export function getAgentListings(agentId: string): AgentListing[] {
  const agent = findRealEstateAgentById(agentId)
  if (!agent) return []

  const allDtos = [...getMockPropertyListingDtos(), ...getMockTrendingLuxuryVillaListingDtos()]
  const normalizedName = agent.name.toLowerCase()

  const directMatches = allDtos
    .filter((dto) => dto.agentName.toLowerCase() === normalizedName)
    .map((dto) => toPropertyListing(dto))

  const pool = allDtos.map((dto) => toPropertyListing(dto))
  const h = hashAgentId(agentId)
  const padStart = h % Math.max(1, pool.length - 3)
  const padded = pool.slice(padStart, padStart + 6).map((listing, index) => enrichListing(listing, agent.name, agent.imageUrl, index + 10, agentId))

  const buyListings = [...directMatches, ...padded]
    .filter((listing, index, arr) => arr.findIndex((l) => l.id === listing.id) === index)
    .map((listing, index) => enrichListing(listing, agent.name, agent.imageUrl, index, agentId))
    .filter((l) => l.transaction === "buy")

  const sampleImages = buyListings[0]?.imageUrls ?? pool[0]?.imageUrls ?? []
  const rentListings = buildRentListingsForAgent(agent.name, agent.imageUrl, agentId, sampleImages)

  const flagshipBuy: AgentListing = {
    id: `${agentId}-palm-signature`,
    propertyType: "Apartment",
    price: "30,000,000 AED",
    title: "Luxury Living | Palm Jumeirah | Beachfront",
    pricePerSqft: "AED 2,635 /sqft",
    areaSqft: 7535,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    location: "The Sundials, Jumeirah Golf Estates, Dubai",
    description:
      "Spacious open-plan living with premium finishes, floor-to-ceiling glazing, and smart climate and lighting throughout. Private terraces overlook landscaped fairways — ideal for relaxed entertaining.",
    imageUrls: sampleImages,
    agentName: agent.name,
    agentAvatarUrl: agent.imageUrl,
    transaction: "buy",
    popularity: 120,
  }

  return [flagshipBuy, ...buyListings, ...rentListings]
}

export function sortAgentListings(
  listings: AgentListing[],
  sort: "popular" | "price-asc" | "price-desc"
): AgentListing[] {
  const copy = [...listings]
  if (sort === "price-asc") {
    return copy.sort((a, b) => parsePriceAed(a.price) - parsePriceAed(b.price))
  }
  if (sort === "price-desc") {
    return copy.sort((a, b) => parsePriceAed(b.price) - parsePriceAed(a.price))
  }
  return copy.sort((a, b) => b.popularity - a.popularity)
}

export function filterAgentListingsByTransaction(
  listings: AgentListing[],
  filter: "both" | "buy" | "rent"
): AgentListing[] {
  if (filter === "both") return listings
  return listings.filter((l) => l.transaction === filter)
}
