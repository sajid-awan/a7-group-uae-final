// ─── Value types ─────────────────────────────────────────────────────────────

export type ProjectOverviewBlock = {
  title: string
  description: string
}

export type ProjectStoryAsideImage = {
  src: string
  alt: string
}

export type ProjectHighlight = {
  label: string
  value: string
}

export type ProjectTimelineStatus = "completed" | "upcoming"

export type ProjectTimelineItem = {
  date: string
  label: string
  status: ProjectTimelineStatus
}

export type ProjectPaymentPlanIcon = "installment" | "construction" | "handover" | "downPayment"

export type ProjectPaymentPlan = {
  icon: ProjectPaymentPlanIcon
  percentage: string
  label: string
}

export type ProjectExpert = {
  id: string
  name: string
  role: string
  imageUrl: string
  whatsAppHref?: string
}

export type ProjectNearbyPlace = {
  label: string
}

export type ProjectLocation = {
  mapEmbedUrl: string
  latitude?: number
  longitude?: number
  nearby: ProjectNearbyPlace[]
}

export type ProjectFaqItem = {
  title: string
  content: string
}

export type FloorPlanSubType = {
  label: string
  description?: string
  details?: string[]
  imageUrl?: string
}

export type FloorPlanUnit = {
  id: string
  unitType: string
  label: string
  price: string
  subTypes: FloorPlanSubType[]
  description: string
  details: string[]
  imageUrl: string
}

export type ProjectFloorPlans = {
  unitTypes: string[]
  units: FloorPlanUnit[]
}

export type PropertyListingStatus = "Ready" | "Off Plan" | "Under Construction"

export type PropertyDetailRow = {
  label: string
  value: string
}

export type PropertyTransactionKind = "sold" | "rented"

export type PropertyTransaction = {
  id: string
  kind: PropertyTransactionKind
  price: string
  areaSqft?: number
  pricePerSqft?: string
  date: string
}

export type PropertyAgentSocialLink = {
  platform: "facebook" | "linkedin" | "instagram" | "youtube" | "x"
  href: string
}

// ─── Domain entities ──────────────────────────────────────────────────────────

/** Normalized off-plan project card model. */
export type Property = {
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

/** Full off-plan project detail model. */
export type PropertyDetail = Property & {
  overviewSections: ProjectOverviewBlock[]
  highlights: ProjectHighlight[]
  timeline: ProjectTimelineItem[]
  galleryImageUrls: string[]
  floorPlans: ProjectFloorPlans
  paymentPlans: ProjectPaymentPlan[]
  experts: ProjectExpert[]
  locationMap: ProjectLocation
  amenities: string[]
  propertiesForSale: Property[]
  faq: ProjectFaqItem[]
  storySections: ProjectOverviewBlock[]
  storyAsideImage?: ProjectStoryAsideImage
  similarProjects: Property[]
}

/** Normalized resale listing card model. */
export type PropertyListing = {
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

/** Full resale property detail model. */
export type PropertyListingDetail = PropertyListing & {
  developer: string
  status: PropertyListingStatus
  aboutDescription: string
  galleryImageUrls: string[]
  heroBackgroundImageUrl?: string
  totalPhotos: number
  stats: ProjectHighlight[]
  aboutHighlights: ProjectHighlight[]
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
  agentSocialLinks: PropertyAgentSocialLink[]
  agentWhatsAppHref?: string
  agentPhoneHref?: string
  agentEmailHref?: string
  similarListings: PropertyListing[]
  inquiryAgencyName: string
}
