import type {
  DashboardListingFilterOption,
  DashboardListingFilters,
  DashboardListingVisibility,
} from "./listings-filter-types"

export const dashboardListingsFiltersCopy = {
  title: "Filters",
  description: "Team members will be able to edit this post and republish changes.",
  resetLabel: "Reset",
  cancelLabel: "Cancel",
  applyLabel: "Apply",
} as const

export const DASHBOARD_LISTING_PROPERTY_TITLE_OPTIONS: DashboardListingFilterOption[] = [
  { value: "all", label: "All titles" },
  { value: "golf-view", label: "Golf Course View | Private Pool" },
  { value: "marina-view", label: "Full Marina View | High Floor" },
  { value: "luxury-living", label: "Luxury Living | Marina View | Furnished" },
]

export const DASHBOARD_LISTING_PROPERTY_TYPE_OPTIONS: DashboardListingFilterOption[] = [
  { value: "all", label: "All types" },
  { value: "Villa", label: "Villa" },
  { value: "Apartment", label: "Apartment" },
  { value: "Townhouse", label: "Townhouse" },
  { value: "Penthouse", label: "Penthouse" },
]

export const DASHBOARD_LISTING_BEDROOM_OPTIONS: DashboardListingFilterOption[] = [
  { value: "all", label: "All bedrooms" },
  { value: "0", label: "Studio" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4+" },
]

export const DASHBOARD_LISTING_FURNISHING_OPTIONS: DashboardListingFilterOption[] = [
  { value: "all", label: "All furnishing" },
  { value: "furnished", label: "Furnished" },
  { value: "unfurnished", label: "Unfurnished" },
  { value: "partly-furnished", label: "Partly Furnished" },
]

export const DASHBOARD_LISTING_COMPLETION_STATUS_OPTIONS: DashboardListingFilterOption[] = [
  { value: "all", label: "All statuses" },
  { value: "ready", label: "Ready" },
  { value: "off-plan", label: "Off Plan" },
  { value: "under-construction", label: "Under Construction" },
]

export const DASHBOARD_LISTING_SIZE_OPTIONS: DashboardListingFilterOption[] = [
  { value: "all", label: "Any size" },
  { value: "500", label: "500+" },
  { value: "1000", label: "1,000+" },
  { value: "2000", label: "2,000+" },
  { value: "5000", label: "5,000+" },
]

export const DASHBOARD_LISTING_PORTAL_OPTIONS: DashboardListingFilterOption[] = [
  { value: "all", label: "All portals" },
  { value: "fam-properties", label: "Fam Properties" },
  { value: "property-finder", label: "Property Finder" },
  { value: "bayut", label: "Bayut" },
  { value: "dubizzle", label: "Dubizzle" },
]

export const DASHBOARD_LISTING_VISIBILITY_OPTIONS: Array<{
  value: DashboardListingVisibility
  label: string
}> = [
  { value: "draft", label: "Draft" },
  { value: "private", label: "Private" },
  { value: "public", label: "Public" },
  { value: "broadcast", label: "Broadcast" },
]

export function createDefaultDashboardListingFilters(): DashboardListingFilters {
  return {
    propertyTitle: "all",
    referenceNo: "",
    propertyType: "all",
    bedrooms: "all",
    furnishing: "all",
    completionStatus: "all",
    dateFrom: "",
    dateTo: "",
    minPrice: "0",
    maxPrice: "0",
    minSize: "all",
    maxSize: "all",
    portals: "all",
    visibility: "all",
  }
}
