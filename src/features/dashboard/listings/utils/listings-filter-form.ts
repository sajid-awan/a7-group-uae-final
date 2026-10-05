import { createDefaultDashboardListingFilters } from "../content/listings-filter-content"
import type { DashboardListingFilters } from "../content/listings-filter-types"

export function resetDashboardListingFilters(): DashboardListingFilters {
  return {
    ...createDefaultDashboardListingFilters(),
    visibility: "draft",
  }
}

export function hasActiveDashboardListingFilters(filters: DashboardListingFilters): boolean {
  const defaults = createDefaultDashboardListingFilters()

  return (Object.keys(defaults) as Array<keyof DashboardListingFilters>).some(
    (key) => filters[key] !== defaults[key]
  )
}

export { createDefaultDashboardListingFilters }
