import type { ProjectExpert, ProjectFaqItem, PropertyListing } from "@/features/property/core/domain/entity/property.entity"

export type Area = {
  id: string
  title: string
  slug: string
  location: string
  imageUrl: string
  category: string
  propertyCount?: string
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

export type AreaAmenityAccordionItem = {
  id: string
  title: string
  description: string
}

export type AreaAmenitiesSection = {
  featureTags: string[]
  accordionItems: AreaAmenityAccordionItem[]
}

export type AreaLifestyleItem = {
  id: string
  title: string
  description: string
  tags?: string[]
}

export type AreaLifestyleSection = {
  items: AreaLifestyleItem[]
  footerNote?: string
}

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

export type AreaPropertiesSection = {
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

export type AreaDetail = {
  id: string
  title: string
  searchPlaceholder: string
  heroBackgroundUrl: string
  galleryImages: string[]
  aboutParagraphs: string[]
  highlights: string[]
  location: AreaDetailLocation
  amenitiesSection: AreaAmenitiesSection
  communities: AreaCommunityCard[]
  specialists: ProjectExpert[]
  propertyTrends: AreaPropertyTrendRow[]
  serviceCharges: AreaServiceChargeRow[]
  propertiesSection: AreaPropertiesSection
  faq: ProjectFaqItem[]
  schools: AreaSchool[]
  lifestyleSection: AreaLifestyleSection
  galleryPhotoCount: number
}
