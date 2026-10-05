export type ListingPurpose = "rent" | "sale"
export type ListingCategory = "residential" | "commercial"
export type ListingVisibility = "draft" | "private" | "public"

export type ListingPortalId = "propmatch" | "propertyfinder" | "bayut" | "dubizzle"

export type ListingPortalPublishState = {
  enabled: boolean
}

export type ListingFormValues = {
  purpose: ListingPurpose
  category: ListingCategory
  searchLocation: string
  price: string
  unitNumber: string
  listingAgent: string
  assignedAgent: string
  location: string
  yearlyPrice: string
  numberOfCheques: string
  unitNo: string
  propertyType: string
  sizeSqft: string
  bathrooms: string
  furnitureStatus: string
  projectStatus: string
  referenceNumber: string
  availableFrom: string
  tags: string[]
  title: string
  description: string
  amenities: string[]
  permitNumber: string
  permitUrl: string
  ownerId: string
  visibility: ListingVisibility
  portals: Record<ListingPortalId, ListingPortalPublishState>
}
