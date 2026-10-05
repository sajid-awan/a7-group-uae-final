import { DUBAI_AREA_LISTINGS, type DubaiAreaListing } from "@/features/area/content/areas-page-content"
import { REAL_ESTATE_AGENTS } from "@/features/agent/content/agents-page-content"
import { HOME_REAL_ESTATE_EXPERTS } from "@/features/home/content/home-real-estate-experts"
import {
  ARABIAN_RANCHES_AMENITIES_SECTION,
  buildAreaAmenitiesSection,
  type AreaAmenitiesSectionData,
} from "@/features/area/content/area-detail-amenities-data"
import {
  ARABIAN_RANCHES_LIFESTYLE_SECTION,
  buildAreaLifestyleSection,
  type AreaLifestyleSectionData,
} from "@/features/area/content/area-detail-lifestyle-data"
import {
  ARABIAN_RANCHES_PROPERTIES_SECTION,
  buildAreaPropertiesSection,
  type AreaPropertiesSectionData,
} from "@/features/area/content/area-detail-properties-data"
import type { ProjectExpert, ProjectFaqItem } from "@/features/property"

const GALLERY = [
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop",
] as const

export type AreaCommunityCard = {
  id: string
  title: string
  description: string
  imageUrl: string
  propertyCount: string
}

export type AreaPropertyTrendRow = {
  label: string
  rentValue: string
  saleValue: string
}

export type AreaServiceChargeRow = {
  type: string
  charge: string
}

export type AreaSchool = {
  id: string
  name: string
  rating: number
  distance: string
}

export type AreaNearbyPlace = {
  name: string
  minutes: string
}

export type AreaDetailLocation = {
  mapEmbedUrl: string
  latitude?: number
  longitude?: number
  description: string
  nearbyAreas: AreaNearbyPlace[]
  nearbyAttractions: AreaNearbyPlace[]
}

export type AreaDetailContent = {
  id: string
  title: string
  searchPlaceholder: string
  heroBackgroundUrl: string
  galleryImages: string[]
  aboutParagraphs: string[]
  highlights: string[]
  location: AreaDetailLocation
  amenitiesSection: AreaAmenitiesSectionData
  communities: AreaCommunityCard[]
  specialists: ProjectExpert[]
  propertyTrends: AreaPropertyTrendRow[]
  serviceCharges: AreaServiceChargeRow[]
  propertiesSection: AreaPropertiesSectionData
  faq: ProjectFaqItem[]
  schools: AreaSchool[]
  lifestyleSection: AreaLifestyleSectionData
  galleryPhotoCount: number
}

function buildMapEmbedUrl(lat: number, lng: number) {
  return `https://www.google.com/maps?q=${lat},${lng}&hl=en&z=14&output=embed`
}

function buildDefaultSpecialists(): ProjectExpert[] {
  return REAL_ESTATE_AGENTS.slice(0, 3).map((agent) => ({
    id: agent.id,
    name: agent.name,
    role: agent.subtitle,
    imageUrl: agent.imageUrl,
    whatsAppHref: agent.whatsAppHref,
  }))
}

function buildDefaultFaq(areaTitle: string): ProjectFaqItem[] {
  return [
    {
      title: `Is ${areaTitle} expensive?`,
      content: `${areaTitle} spans a wide price range depending on property type, sub-community, and view. Villas and premium clusters command higher values, while apartments and townhouses offer more accessible entry points compared to central Dubai districts.`,
    },
    {
      title: `Is ${areaTitle} a good place to live?`,
      content: `${areaTitle} is popular with families and professionals seeking community amenities, schools, and connectivity. Parks, retail, and leisure options are typically within the district or a short drive away.`,
    },
    {
      title: `How many subcommunities are in ${areaTitle}?`,
      content: `${areaTitle} comprises multiple themed subcommunities and clusters, each with its own character, amenities, and housing stock. Our area specialists can guide you through the differences when shortlisting.`,
    },
    {
      title: `Can you walk around ${areaTitle}?`,
      content: `Many parts of ${areaTitle} are pedestrian-friendly along boulevards, parks, and retail promenades, though a car is still recommended for daily commuting across the wider district.`,
    },
  ]
}

const ARABIAN_RANCHES_FAQ: ProjectFaqItem[] = [
  {
    title: "Is Arabian Ranches expensive?",
    content:
      "Arabian Ranches sits in the mid-to-upper segment of Dubai's villa market. Prices vary by sub-community, plot size, and upgrades, with townhouses offering a lower entry point than larger detached villas.",
  },
  {
    title: "Is Arabian Ranches a good place to live?",
    content:
      "Arabian Ranches is widely regarded as family-friendly, with schools, parks, golf, and retail within the community. It suits residents who prefer a suburban pace while remaining connected to major highways.",
  },
  {
    title: "How many Arabian Ranches are there?",
    content:
      "Arabian Ranches is a single master-planned community with multiple phases and subcommunities (such as Alma, Al Reem, and Saheel), rather than separate 'Ranches' locations.",
  },
  {
    title: "Can you walk around Arabian Ranches?",
    content:
      "Yes — landscaped streets, parks, and the retail centre are walkable within clusters, though most residents use a car for school runs and trips outside the community.",
  },
]

function buildFromListing(listing: DubaiAreaListing): AreaDetailContent {
  const lat = 25.08 + (listing.id.length % 10) * 0.01
  const lng = 55.12 + (listing.id.length % 8) * 0.01

  return {
    id: listing.id,
    title: listing.title,
    searchPlaceholder: listing.title,
    heroBackgroundUrl: listing.imageUrls[0] ?? GALLERY[0],
    galleryImages: listing.imageUrls.length >= 5 ? listing.imageUrls.slice(0, 5) : [...GALLERY],
    aboutParagraphs: [listing.description, DEFAULT_ABOUT_EXTRA(listing.title)],
    highlights: DEFAULT_HIGHLIGHTS(listing.title),
    location: buildDefaultLocation(listing.title, lat, lng),
    amenitiesSection:
      listing.id === "arabian-ranches"
        ? ARABIAN_RANCHES_AMENITIES_SECTION
        : buildAreaAmenitiesSection(listing.title),
    communities: DEFAULT_COMMUNITIES(listing.title),
    specialists: buildDefaultSpecialists(),
    propertyTrends: DEFAULT_TRENDS,
    serviceCharges: DEFAULT_SERVICE_CHARGES,
    propertiesSection:
      listing.id === "arabian-ranches"
        ? ARABIAN_RANCHES_PROPERTIES_SECTION
        : buildAreaPropertiesSection(listing.title),
    faq:
      listing.id === "arabian-ranches" ? ARABIAN_RANCHES_FAQ : buildDefaultFaq(listing.title),
    schools: DEFAULT_SCHOOLS,
    lifestyleSection:
      listing.id === "arabian-ranches"
        ? ARABIAN_RANCHES_LIFESTYLE_SECTION
        : buildAreaLifestyleSection(listing.title),
    galleryPhotoCount: 150,
  }
}

function buildDefaultLocation(areaTitle: string, lat: number, lng: number): AreaDetailLocation {
  return {
    mapEmbedUrl: buildMapEmbedUrl(lat, lng),
    latitude: lat,
    longitude: lng,
    description: `${areaTitle} is well connected via Sheikh Mohammed Bin Zayed Road, Al Khail Road, and other major Dubai corridors — placing Downtown, business districts, beaches, and leisure destinations within easy reach by car.`,
    nearbyAreas: DEFAULT_NEARBY_AREAS,
    nearbyAttractions: DEFAULT_NEARBY_ATTRACTIONS,
  }
}

const DEFAULT_NEARBY_AREAS: AreaNearbyPlace[] = [
  { name: "Wadi Al Safa 3", minutes: "5 minutes away" },
  { name: "Nad Al Sheba", minutes: "10 minutes away" },
  { name: "Arabian Ranches", minutes: "15 minutes away" },
  { name: "Dubai Hills Estate", minutes: "12 minutes away" },
  { name: "Motor City", minutes: "14 minutes away" },
  { name: "Jumeirah Village Circle", minutes: "18 minutes away" },
]

const DEFAULT_NEARBY_ATTRACTIONS: AreaNearbyPlace[] = [
  { name: "Global Village", minutes: "11 minutes away" },
  { name: "Dubai Butterfly Garden", minutes: "12 minutes away" },
  { name: "IMG Worlds of Adventure", minutes: "11 minutes away" },
  { name: "Dubai Autodrome", minutes: "8 minutes away" },
  { name: "Mall of the Emirates", minutes: "20 minutes away" },
  { name: "Dubai Marina", minutes: "22 minutes away" },
]

const DEFAULT_TRENDS: AreaPropertyTrendRow[] = [
  { label: "Studio", rentValue: "AED 65,000 /yr", saleValue: "AED 720,000" },
  { label: "1 Bedroom", rentValue: "AED 95,000 /yr", saleValue: "AED 980,000" },
  { label: "2 Bedroom", rentValue: "AED 140,000 /yr", saleValue: "AED 1,450,000" },
  { label: "3 Bedroom", rentValue: "AED 195,000 /yr", saleValue: "AED 2,100,000" },
]

const DEFAULT_SERVICE_CHARGES: AreaServiceChargeRow[] = [
  { type: "Studio", charge: "AED 14 / sqft" },
  { type: "1 Bedroom", charge: "AED 16 / sqft" },
  { type: "2 Bedroom", charge: "AED 18 / sqft" },
  { type: "3 Bedroom", charge: "AED 20 / sqft" },
]

const DEFAULT_SCHOOLS: AreaSchool[] = [
  { id: "gems", name: "GEMS Wellington Academy", rating: 4.5, distance: "12 min drive" },
  { id: "jebel-ali", name: "Jebel Ali School", rating: 4.3, distance: "18 min drive" },
  { id: "kings", name: "Kings' School Dubai", rating: 4.6, distance: "22 min drive" },
  { id: "repton", name: "Repton School Dubai", rating: 4.7, distance: "25 min drive" },
]

function DEFAULT_ABOUT_EXTRA(title: string) {
  return `${title} continues to attract end users and investors seeking a well-connected Dubai address with established infrastructure, retail, and community facilities. Our team tracks live listings, rental renewals, and off-plan launches across the district.`
}

function DEFAULT_HIGHLIGHTS(title: string) {
  return [
    `Luxurious villa and apartment options in ${title}`,
    "Wide range of recreational activities",
    "Eco-friendly and sustainable community",
    "Excellent connectivity to major Dubai districts",
    "Premium retail, dining, and leisure destinations",
    "Family-oriented parks and landscaped green spaces",
    "Strong rental demand and investment potential",
    "Established schools and healthcare nearby",
  ]
}

function DEFAULT_COMMUNITIES(title: string): AreaCommunityCard[] {
  return [
    {
      id: "marina-gate",
      title: `${title} Towers`,
      description: "High-rise apartments with marina and skyline views.",
      imageUrl: GALLERY[0],
      propertyCount: "120+ properties",
    },
    {
      id: "marina-promenade",
      title: `${title} Promenade`,
      description: "Low-rise blocks steps from the waterfront walk.",
      imageUrl: GALLERY[1],
      propertyCount: "85+ properties",
    },
    {
      id: "marina-heights",
      title: `${title} Heights`,
      description: "Premium finishes and larger layouts for families.",
      imageUrl: GALLERY[2],
      propertyCount: "64+ properties",
    },
    {
      id: "marina-wharf",
      title: `${title} Wharf`,
      description: "Boutique buildings with strong holiday-home appeal.",
      imageUrl: GALLERY[3],
      propertyCount: "42+ properties",
    },
  ]
}

const DUBAI_MARINA_DETAIL: AreaDetailContent = {
  id: "dubai-marina",
  title: "Dubai Marina",
  searchPlaceholder: "Dubai Marina",
  heroBackgroundUrl: GALLERY[0],
  galleryImages: [...GALLERY],
  aboutParagraphs: [
    "Dubai Marina is one of the city's most recognisable waterfront districts — a canal-side corridor of high-rise towers, marina walks, and beach access that draws professionals, families, and investors from around the world.",
    "Life here revolves around the promenade: cafés, gyms, supermarkets, and the Dubai Marina Mall are all within walking distance, while the tram and metro connect residents to JLT, Media City, and Downtown in minutes.",
    "Apartments dominate the stock, from compact studios to spacious penthouses with full marina views. Rental demand stays active year-round, supported by corporate tenants and short-stay operators.",
  ],
  highlights: [
    "Luxurious villa and apartment options",
    "Wide range of recreational activities",
    "Eco-friendly and sustainable community",
    "Excellent connectivity to Sheikh Mohammed Bin Zayed Road",
    "Premium retail and dining within the district",
    "Family-oriented parks and landscaped green spaces",
    "Strong holiday-home and long-term rental demand",
    "Established schools and healthcare nearby",
  ],
  location: {
    mapEmbedUrl: buildMapEmbedUrl(25.0805, 55.1403),
    latitude: 25.0805,
    longitude: 55.1403,
    description:
      "Dubai Marina sits along Sheikh Zayed Road with quick access to the tram, metro, and major highways — connecting residents to JLT, Media City, Downtown, and DXB Airport within a short drive.",
    nearbyAreas: [
      { name: "JBR Beach", minutes: "5 minutes away" },
      { name: "Jumeirah Lake Towers", minutes: "8 minutes away" },
      { name: "Dubai Media City", minutes: "10 minutes away" },
      { name: "Palm Jumeirah", minutes: "12 minutes away" },
      { name: "Dubai Mall", minutes: "20 minutes away" },
      { name: "DXB Airport", minutes: "28 minutes away" },
    ],
    nearbyAttractions: [
      { name: "The Walk at JBR", minutes: "6 minutes away" },
      { name: "Ain Dubai", minutes: "12 minutes away" },
      { name: "Dubai Marina Mall", minutes: "7 minutes away" },
      { name: "Skydive Dubai", minutes: "10 minutes away" },
      { name: "Bluewaters Island", minutes: "12 minutes away" },
      { name: "Museum of the Future", minutes: "18 minutes away" },
    ],
  },
  amenitiesSection: buildAreaAmenitiesSection("Dubai Marina"),
  communities: [
    {
      id: "marina-gate",
      title: "Marina Gate",
      description: "Twin towers with direct access to the marina walk and premium amenities.",
      imageUrl: GALLERY[0],
      propertyCount: "95+ properties",
    },
    {
      id: "marina-promenade",
      title: "Marina Promenade",
      description: "Six low-rise buildings with landscaped courtyards and pool decks.",
      imageUrl: GALLERY[1],
      propertyCount: "110+ properties",
    },
    {
      id: "silverene",
      title: "Silverene",
      description: "Emaar-developed towers with marina outlook and hotel-style lobby.",
      imageUrl: GALLERY[2],
      propertyCount: "78+ properties",
    },
    {
      id: "cayan-tower",
      title: "Cayan Tower",
      description: "Iconic twisted silhouette with rotating floor plates and skyline views.",
      imageUrl: GALLERY[3],
      propertyCount: "52+ properties",
    },
  ],
  specialists: HOME_REAL_ESTATE_EXPERTS.slice(0, 3).map((expert) => ({
    id: expert.id,
    name: expert.name,
    role: expert.role,
    imageUrl: expert.imageUrl,
    whatsAppHref: expert.whatsAppHref,
  })),
  propertyTrends: DEFAULT_TRENDS,
  serviceCharges: DEFAULT_SERVICE_CHARGES,
  propertiesSection: buildAreaPropertiesSection("Dubai Marina"),
  faq: buildDefaultFaq("Dubai Marina"),
  schools: DEFAULT_SCHOOLS,
  lifestyleSection: buildAreaLifestyleSection("Dubai Marina"),
  galleryPhotoCount: 150,
}

const AREA_DETAIL_OVERRIDES: Record<string, AreaDetailContent> = {
  "dubai-marina": DUBAI_MARINA_DETAIL,
}

export function getAreaDetail(id: string): AreaDetailContent | null {
  const override = AREA_DETAIL_OVERRIDES[id]
  if (override) return override

  const listing = DUBAI_AREA_LISTINGS.find((area) => area.id === id)
  if (!listing) return null

  return buildFromListing(listing)
}

export function getAllAreaDetailIds(): string[] {
  return DUBAI_AREA_LISTINGS.map((area) => area.id)
}
