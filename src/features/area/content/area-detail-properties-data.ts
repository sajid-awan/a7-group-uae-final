import { REAL_ESTATE_AGENTS } from "@/features/agent/content/agents-page-content"
import { HOME_REAL_ESTATE_EXPERTS } from "@/features/home/content/home-real-estate-experts"
import { getMockPropertyListingDtos } from "@/features/property/core/data/mocks/properties"
import { toPropertyListing } from "@/features/property"
import type { ProjectExpert } from "@/features/property"
import type { PropertyListing } from "@/features/property"

const GALLERY = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
] as const

export type AreaVillaLocation = {
  id: string
  label: string
  imageUrl: string
}

export type AreaAveragePriceRow = {
  bedrooms: string
  salePrice: string
  rentPrice: string
}

export type AreaRecentTransaction = {
  id: string
  location: string
  locationSubtitle: string
  soldFor: string
  pricePerSqft: string
  type: string
  status: string
  bedrooms: number
  soldDate: string
  areaSqft: number
}

export type AreaPropertiesSectionData = {
  propertyTypesDescription: string
  propertyTypeTags: string[]
  subcommunitiesDescription: string
  rentSaleDescription: string
  experts: ProjectExpert[]
  popularVillaLocations: AreaVillaLocation[]
  averagePrices: AreaAveragePriceRow[]
  transactions: AreaRecentTransaction[]
  listings: PropertyListing[]
}

const DEFAULT_TRANSACTIONS: Omit<AreaRecentTransaction, "id">[] = [
  {
    location: "Arabian Ranches",
    locationSubtitle: "Al Reem 2 - Type 3E",
    soldFor: "4,200,000 AED",
    pricePerSqft: "AED 1,050 /sqft",
    type: "Villa",
    status: "Ready",
    bedrooms: 3,
    soldDate: "12 Nov 2025",
    areaSqft: 4000,
  },
  {
    location: "Arabian Ranches",
    locationSubtitle: "Saheel - Type 7",
    soldFor: "6,850,000 AED",
    pricePerSqft: "AED 1,120 /sqft",
    type: "Villa",
    status: "Ready",
    bedrooms: 4,
    soldDate: "08 Nov 2025",
    areaSqft: 6116,
  },
  {
    location: "Arabian Ranches",
    locationSubtitle: "Mirador - Type 2",
    soldFor: "5,100,000 AED",
    pricePerSqft: "AED 980 /sqft",
    type: "Villa",
    status: "Ready",
    bedrooms: 4,
    soldDate: "02 Nov 2025",
    areaSqft: 5204,
  },
  {
    location: "Arabian Ranches",
    locationSubtitle: "Alma - Type 1",
    soldFor: "3,450,000 AED",
    pricePerSqft: "AED 890 /sqft",
    type: "Villa",
    status: "Ready",
    bedrooms: 3,
    soldDate: "28 Oct 2025",
    areaSqft: 3876,
  },
  {
    location: "Arabian Ranches",
    locationSubtitle: "Alvorada - Type 4",
    soldFor: "7,200,000 AED",
    pricePerSqft: "AED 1,180 /sqft",
    type: "Villa",
    status: "Ready",
    bedrooms: 5,
    soldDate: "22 Oct 2025",
    areaSqft: 6102,
  },
]

const DEFAULT_VILLA_LOCATIONS: Omit<AreaVillaLocation, "id">[] = [
  { label: "Reem 1", imageUrl: GALLERY[0] },
  { label: "Al Reem 2", imageUrl: GALLERY[1] },
  { label: "Saheel", imageUrl: GALLERY[2] },
  { label: "Mirador", imageUrl: GALLERY[3] },
]

const DEFAULT_AVERAGE_PRICES: AreaAveragePriceRow[] = [
  { bedrooms: "2", salePrice: "3,850,000", rentPrice: "185,000" },
  { bedrooms: "3", salePrice: "4,650,000", rentPrice: "220,000" },
  { bedrooms: "4", salePrice: "5,900,000", rentPrice: "275,000" },
  { bedrooms: "5", salePrice: "7,400,000", rentPrice: "340,000" },
  { bedrooms: "6", salePrice: "9,200,000", rentPrice: "410,000" },
]

const DEFAULT_PROPERTY_TAGS = [
  "Alma",
  "Al Reem",
  "Azeem",
  "Alvorada",
  "Mirador",
  "Saheel",
  "Palmera",
  "Hattan",
]

function buildListings(areaTitle: string): PropertyListing[] {
  return getMockPropertyListingDtos().slice(0, 3).map((dto, index) =>
    toPropertyListing({
      ...dto,
      id: `${dto.id}-area-${index}`,
      title: `${dto.title} | ${areaTitle}`,
      location: `${areaTitle}, Dubai`,
      price: index === 0 ? "25,000,000 AED" : dto.price,
    })
  )
}

function buildExperts(): ProjectExpert[] {
  return HOME_REAL_ESTATE_EXPERTS.slice(0, 3).map((expert) => ({
    id: expert.id,
    name: expert.name,
    role: expert.role,
    imageUrl: expert.imageUrl,
    whatsAppHref: expert.whatsAppHref,
  }))
}

export function buildAreaPropertiesSection(areaTitle: string): AreaPropertiesSectionData {
  return {
    propertyTypesDescription: `${areaTitle} offers a diverse mix of villas, townhouses, and select apartment clusters across established subcommunities. Properties range from compact family homes to expansive estate villas with private gardens, pools, and golf-course views.`,
    propertyTypeTags: DEFAULT_PROPERTY_TAGS,
    subcommunitiesDescription: `Within ${areaTitle}, buyers can choose from gated clusters with shared amenities, park-front villas, and premium custom-built homes. Many subcommunities include community centres, schools, and retail within a short drive.`,
    rentSaleDescription: `Both rental and resale markets remain active in ${areaTitle}, with strong demand from families and long-term tenants. Our advisors track live listings, recent transactions, and average yields across bedroom types.`,
    experts: buildExperts(),
    popularVillaLocations: DEFAULT_VILLA_LOCATIONS.map((item, index) => ({
      id: `villa-loc-${index}`,
      ...item,
    })),
    averagePrices: DEFAULT_AVERAGE_PRICES,
    transactions: DEFAULT_TRANSACTIONS.map((tx, index) => ({
      id: `area-tx-${index}`,
      ...tx,
      location: areaTitle,
    })),
    listings: buildListings(areaTitle),
  }
}

export const ARABIAN_RANCHES_PROPERTIES_SECTION: AreaPropertiesSectionData = {
  propertyTypesDescription:
    "Arabian Ranches is one of Dubai's most established villa communities, offering townhouses and standalone villas across themed subcommunities such as Alma, Al Reem, Saheel, and Mirador. Homes typically feature private gardens, community pools, and access to schools and retail.",
  propertyTypeTags: DEFAULT_PROPERTY_TAGS,
  subcommunitiesDescription:
    "Subcommunities range from park-facing townhouses to larger custom villas on golf-side plots. Many streets are landscaped and pedestrian-friendly, with clubhouses, tennis courts, and dining clusters woven through the master plan.",
  rentSaleDescription:
    "Resale villas and townhouses transact year-round, while rental demand is driven by families seeking school proximity and community amenities. Seasonal peaks often align with school-term move dates.",
  experts: REAL_ESTATE_AGENTS.slice(0, 3).map((agent) => ({
    id: agent.id,
    name: agent.name,
    role: agent.subtitle,
    imageUrl: agent.imageUrl,
    whatsAppHref: agent.whatsAppHref,
  })),
  popularVillaLocations: DEFAULT_VILLA_LOCATIONS.map((item, index) => ({
    id: `villa-loc-${index}`,
    ...item,
  })),
  averagePrices: DEFAULT_AVERAGE_PRICES,
  transactions: DEFAULT_TRANSACTIONS.map((tx, index) => ({ id: `ar-tx-${index}`, ...tx })),
  listings: buildListings("Arabian Ranches"),
}
