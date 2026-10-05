export type DashboardListingVisibility = "all" | "draft" | "private" | "public" | "broadcast"

export type DashboardListingFilters = {
  propertyTitle: string
  referenceNo: string
  propertyType: string
  bedrooms: string
  furnishing: string
  completionStatus: string
  dateFrom: string
  dateTo: string
  minPrice: string
  maxPrice: string
  minSize: string
  maxSize: string
  portals: string
  visibility: DashboardListingVisibility
}

export type DashboardListingFilterOption = {
  value: string
  label: string
}
