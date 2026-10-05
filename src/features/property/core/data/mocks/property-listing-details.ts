import { toPropertyListingDetail } from "@/features/property"
import type {
  PropertyDetailRow,
  PropertyListingDetail,
  PropertyListingDetailDto,
  PropertyTransaction,
} from "@/features/property"

import {
  MOCK_PROPERTY_LISTING_DTOS,
  MOCK_TRENDING_LUXURY_VILLA_DTOS,
  getMockPropertyListingDtos,
} from "./properties"

/** Luxury interior + skyline — hero background band. */
const HERO_BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop"

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop",
] as const

const BUSINESS_BAY_LAT = 25.1868
const BUSINESS_BAY_LNG = 55.2667

function buildMapEmbedUrl(lat: number, lng: number) {
  return `https://www.google.com/maps?q=${lat},${lng}&hl=en&z=14&output=embed`
}

const DEFAULT_AMENITIES = [
  "High floor",
  "Gym",
  "Central A/C",
  "CCTV Cameras",
  "Shared Pool",
  "Covered Parking",
  "Landmark View",
  "Play Area",
] as const

const DEFAULT_SOLD_TRANSACTIONS: PropertyTransaction[] = [
  {
    id: "sold-1",
    kind: "sold",
    price: "AED 26,000,000",
    areaSqft: 2088,
    pricePerSqft: "3,250",
    date: "20 May 2024",
  },
  {
    id: "sold-2",
    kind: "sold",
    price: "AED 24,500,000",
    areaSqft: 1980,
    pricePerSqft: "3,180",
    date: "14 Feb 2024",
  },
  {
    id: "sold-3",
    kind: "sold",
    price: "AED 22,800,000",
    areaSqft: 1850,
    pricePerSqft: "3,090",
    date: "08 Nov 2023",
  },
]

const DEFAULT_RENTED_TRANSACTIONS: PropertyTransaction[] = [
  {
    id: "rent-1",
    kind: "rented",
    price: "AED 650,000 / year",
    areaSqft: 2088,
    pricePerSqft: "311",
    date: "12 Apr 2024",
  },
  {
    id: "rent-2",
    kind: "rented",
    price: "AED 620,000 / year",
    areaSqft: 1980,
    pricePerSqft: "313",
    date: "03 Jan 2024",
  },
  {
    id: "rent-3",
    kind: "rented",
    price: "AED 590,000 / year",
    areaSqft: 1850,
    pricePerSqft: "319",
    date: "19 Sep 2023",
  },
]

const DEFAULT_TRANSACTIONS = [...DEFAULT_SOLD_TRANSACTIONS, ...DEFAULT_RENTED_TRANSACTIONS]

const DEFAULT_REGULATORY_INFO: PropertyDetailRow[] = [
  { label: "Reference", value: "A7-BB-48291" },
  { label: "Listed", value: "12 May 2026" },
  { label: "Broker License", value: "46127" },
  { label: "Agency name", value: "A Seven Properties" },
  { label: "Zone name", value: "Business Bay" },
  { label: "Agent License", value: "7121371695" },
]

function sqmFromSqft(sqft: number) {
  return Math.round(sqft * 0.092903)
}

function propertyDetailsFromListing(
  dto: Pick<PropertyListingDetailDto, "propertyType" | "areaSqft" | "bedrooms" | "bathrooms">,
): PropertyDetailRow[] {
  const sqm = sqmFromSqft(dto.areaSqft)
  return [
    { label: "Property Type", value: dto.propertyType },
    {
      label: "Property Size",
      value: `${dto.areaSqft.toLocaleString()} sqft / ${sqm.toLocaleString()} sqm`,
    },
    { label: "Bedrooms", value: String(dto.bedrooms) },
    { label: "Bathrooms", value: String(dto.bathrooms).padStart(2, "0") },
    { label: "Available from", value: "7 Jan 2026" },
  ]
}

function regulatoryInfoFromListing(
  dto: Pick<PropertyListingDetailDto, "id" | "location">,
): PropertyDetailRow[] {
  return [
    { label: "Reference", value: `A7-${dto.id.slice(0, 8).toUpperCase()}` },
    { label: "Listed", value: "12 May 2026" },
    { label: "Broker License", value: "46127" },
    { label: "Agency name", value: "A Seven Properties" },
    { label: "Zone name", value: dto.location.split(",")[0]?.trim() ?? "Dubai" },
    { label: "Agent License", value: "7121371695" },
  ]
}

const BUGATTI_ABOUT =
  "Introducing Bugatti Residences by Binghatti — an iconic waterfront address in Business Bay pairing sculptural architecture with bespoke interiors. Floor-to-ceiling glazing frames panoramic views of the Dubai skyline, while residents enjoy curated hospitality services, private amenities, and direct access to dining, retail, and the city's business core."

const BUGATTI_DETAIL: PropertyListingDetailDto = {
  id: "bugatti-residences-business-bay",
  propertyType: "Apartment",
  price: "AED 19,000,000",
  title: "Bugatti Residences in Business Bay, Dubai",
  pricePerSqft: "AED 2,111 /sqft",
  areaSqft: 9000,
  bedrooms: 5,
  bathrooms: 6,
  parking: 2,
  location: "Business Bay, Dubai",
  description: BUGATTI_ABOUT,
  imageUrls: [...GALLERY_IMAGES],
  agentName: "Felix McLaughlin",
  agentAvatarUrl: "https://i.pravatar.cc/120?img=12",
  developer: "Binghatti",
  status: "Ready",
  aboutDescription: `${BUGATTI_ABOUT} The residence spans generous living and entertainment zones with premium finishes, smart home integration, and private elevator access. Ideal for discerning buyers seeking a branded trophy asset in the heart of Dubai.`,
  galleryImageUrls: [...GALLERY_IMAGES],
  heroBackgroundImageUrl: HERO_BACKGROUND_IMAGE,
  totalPhotos: 35,
  aboutHighlights: [
    { label: "Developer", value: "Azizi" },
    { label: "Status", value: "Off Plan" },
    { label: "Launch Date", value: "Q4 2025" },
    { label: "Community", value: "Business Bay" },
    { label: "Furnishing", value: "Unfurnished" },
    { label: "Ownership", value: "Freehold" },
    { label: "Usage", value: "Residential" },
    { label: "Delivery Date", value: "Q4 2028" },
  ],
  stats: [
    { label: "Bedrooms", value: "5" },
    { label: "Bathrooms", value: "6" },
    { label: "Area", value: "9,000 sqft" },
    { label: "Parking", value: "2" },
    { label: "Price", value: "AED 19M" },
    { label: "Price / sqft", value: "AED 2,111" },
    { label: "Type", value: "Apartment" },
    { label: "Status", value: "Ready" },
  ],
  amenities: [...DEFAULT_AMENITIES],
  transactions: DEFAULT_TRANSACTIONS,
  transactionsSubtitle: "3 Beds Apartment in Bulgari Resort & Residences 3",
  locationMap: {
    mapEmbedUrl: buildMapEmbedUrl(BUSINESS_BAY_LAT, BUSINESS_BAY_LNG),
    latitude: BUSINESS_BAY_LAT,
    longitude: BUSINESS_BAY_LNG,
    nearby: [
      { label: "5min Dubai Mall" },
      { label: "8min Burj Khalifa" },
      { label: "10min DIFC" },
      { label: "15min Dubai Marina" },
    ],
  },
  propertyInfo: [
    { label: "Property Type", value: "Apartment" },
    { label: "Property Size", value: "9,000 sqft / 836 sqm" },
    { label: "Bedrooms", value: "5 + Maid" },
    { label: "Bathrooms", value: "06" },
    { label: "Available from", value: "7 Jan 2026" },
  ],
  regulatoryInfo: DEFAULT_REGULATORY_INFO,
  qrImage: {
    src: "/assets/projects/project-qr.png",
    alt: "DLD permit QR code",
  },
  dldPermitNumber: "7121371695",
  agentRole: "Villa Specialist",
  dealerCardHeaderImageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
  agentSocialLinks: [
    { platform: "facebook", href: "#" },
    { platform: "linkedin", href: "#" },
    { platform: "instagram", href: "#" },
    { platform: "youtube", href: "#" },
    { platform: "x", href: "#" },
  ],
  agentWhatsAppHref: "https://wa.me/971500000000",
  agentPhoneHref: "tel:+971500000000",
  agentEmailHref: "mailto:andrey@example.com",
  inquiryAgencyName: "Dubai Metropolitan properties",
  similarListings: similarListings("bugatti-residences-business-bay"),
}

const PROPERTY_LISTING_DETAIL_BY_ID: Record<string, Partial<PropertyListingDetailDto>> = {
  "bugatti-residences-business-bay": BUGATTI_DETAIL,
}

function allListingDtos() {
  return [...getMockPropertyListingDtos(), ...MOCK_TRENDING_LUXURY_VILLA_DTOS]
}

function similarListings(currentId: string) {
  return allListingDtos()
    .filter((l) => l.id !== currentId)
    .slice(0, 4)
}

function listingStatsFromDto(dto: PropertyListingDetailDto): PropertyListingDetailDto["stats"] {
  return [
    { label: "Bedrooms", value: String(dto.bedrooms) },
    { label: "Bathrooms", value: String(dto.bathrooms) },
    { label: "Area", value: `${dto.areaSqft.toLocaleString()} sqft` },
    { label: "Parking", value: String(dto.parking) },
    { label: "Price", value: dto.price.replace(/\s*AED\s*/i, "AED ").trim() },
    ...(dto.pricePerSqft ? [{ label: "Price / sqft", value: dto.pricePerSqft.replace(/\s*\/sqft/i, "").trim() }] : []),
    { label: "Type", value: dto.propertyType },
    { label: "Status", value: "Ready" },
  ]
}

export function getPropertyListingDetailDto(id: string): PropertyListingDetailDto | null {
  const override = PROPERTY_LISTING_DETAIL_BY_ID[id]
  if (override && "id" in override && override.id) {
    return override as PropertyListingDetailDto
  }

  const base = allListingDtos().find((l) => l.id === id)
  if (!base) return null

  const about =
    base.description ??
    `${base.title} is a ${base.propertyType.toLowerCase()} in ${base.location}, offered at ${base.price}. Contact our consultant for a private viewing and full documentation.`

  const mergedGalleryImages =
    base.imageUrls.length >= 5 ? [...base.imageUrls] : [...GALLERY_IMAGES]

  const merged: PropertyListingDetailDto = {
    ...base,
    developer: "Binghatti",
    status: "Ready",
    aboutDescription: about,
    galleryImageUrls: mergedGalleryImages,
    heroBackgroundImageUrl: HERO_BACKGROUND_IMAGE,
    totalPhotos: mergedGalleryImages.length,
    stats: [],
    aboutHighlights: [
      { label: "Developer", value: "Binghatti" },
      { label: "Status", value: "Ready" },
      { label: "Type", value: base.propertyType },
      { label: "Community", value: base.location.split(",")[0]?.trim() ?? "Dubai" },
    ],
    amenities: [...DEFAULT_AMENITIES],
    transactions: DEFAULT_TRANSACTIONS,
    transactionsSubtitle: `${base.bedrooms} Beds ${base.propertyType} in ${base.location}`,
    locationMap: {
      mapEmbedUrl: buildMapEmbedUrl(BUSINESS_BAY_LAT, BUSINESS_BAY_LNG),
      latitude: BUSINESS_BAY_LAT,
      longitude: BUSINESS_BAY_LNG,
      nearby: [{ label: "8min Dubai Mall" }, { label: "12min Burj Khalifa" }],
    },
    propertyInfo: propertyDetailsFromListing(base),
    regulatoryInfo: regulatoryInfoFromListing({ id: base.id, location: base.location }),
    qrImage: {
      src: "/assets/projects/project-qr.png",
      alt: "DLD permit QR code",
    },
    dldPermitNumber: "7121371695",
    agentRole: "Property Consultant",
    dealerCardHeaderImageUrl: HERO_BACKGROUND_IMAGE,
    agentSocialLinks: [
      { platform: "facebook", href: "#" },
      { platform: "linkedin", href: "#" },
      { platform: "instagram", href: "#" },
      { platform: "youtube", href: "#" },
      { platform: "x", href: "#" },
    ],
    agentWhatsAppHref: "https://wa.me/971500000000",
    agentPhoneHref: "tel:+971500000000",
    agentEmailHref: "mailto:agent@example.com",
    similarListings: similarListings(id),
    inquiryAgencyName: "A Seven Properties",
    ...override,
  }

  merged.stats = listingStatsFromDto(merged)
  merged.aboutHighlights = merged.aboutHighlights ?? merged.stats.slice(0, 8)
  merged.similarListings = merged.similarListings ?? similarListings(id)

  return merged
}

export function getPropertyListingDetail(id: string): PropertyListingDetail | null {
  const dto = getPropertyListingDetailDto(id)
  return dto ? toPropertyListingDetail(dto) : null
}

export { BUGATTI_DETAIL, MOCK_PROPERTY_LISTING_DTOS }
