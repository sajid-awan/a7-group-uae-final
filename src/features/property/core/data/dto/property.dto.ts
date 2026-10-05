import type {
  ProjectFaqItem,
  ProjectFloorPlans,
  ProjectHighlight,
  ProjectLocation,
  ProjectOverviewBlock,
  ProjectPaymentPlan,
  ProjectExpert,
  ProjectStoryAsideImage,
  PropertyAgentSocialLink,
  PropertyDetailRow,
  PropertyListingStatus,
  PropertyTransaction,
  ProjectTimelineItem,
} from "../../domain/entity/property.entity"

/** Raw API payload shape for an off-plan project card. */
export type PropertyDto = {
  id: string
  title: string
  description: string
  location: string
  handover: string
  developer: string
  paymentPlan: string
  priceFrom: string
  imageUrl: string
  projectLogoUrl?: string
  primaryColor?: string
  primaryColorHover?: string
  primaryColorSoft?: string
}

/** Extended DTO for the off-plan project detail page. */
export type PropertyDetailDto = PropertyDto & {
  overviewSections?: ProjectOverviewBlock[]
  highlights?: ProjectHighlight[]
  timeline?: ProjectTimelineItem[]
  galleryImageUrls?: string[]
  floorPlans?: ProjectFloorPlans
  paymentPlans?: ProjectPaymentPlan[]
  experts?: ProjectExpert[]
  locationMap?: ProjectLocation
  amenities?: string[]
  propertiesForSale?: PropertyDto[]
  faq?: ProjectFaqItem[]
  storySections?: ProjectOverviewBlock[]
  storyAsideImage?: ProjectStoryAsideImage
  similarProjects?: PropertyDto[]
}

/** Raw API payload shape for a resale listing card. */
export type PropertyListingDto = {
  id: string
  propertyType: string
  price: string
  title: string
  pricePerSqft?: string
  areaSqft: number
  bedrooms: number
  bathrooms: number
  parking: number
  location: string
  description?: string
  imageUrls: string[]
  agentName: string
  agentAvatarUrl?: string
}

/** Extended DTO for the resale / ready property detail page. */
export type PropertyListingDetailDto = PropertyListingDto & {
  developer: string
  status: PropertyListingStatus
  aboutDescription: string
  galleryImageUrls: string[]
  heroBackgroundImageUrl?: string
  totalPhotos?: number
  stats: ProjectHighlight[]
  aboutHighlights?: ProjectHighlight[]
  amenities: string[]
  transactions: PropertyTransaction[]
  transactionsSubtitle?: string
  locationMap: ProjectLocation
  propertyInfo: PropertyDetailRow[]
  regulatoryInfo: PropertyDetailRow[]
  qrImage?: ProjectStoryAsideImage
  dldPermitNumber?: string
  agentRole: string
  dealerCardHeaderImageUrl?: string
  agentSocialLinks?: PropertyAgentSocialLink[]
  agentWhatsAppHref?: string
  agentPhoneHref?: string
  agentEmailHref?: string
  similarListings?: PropertyListingDto[]
  inquiryAgencyName?: string
}
