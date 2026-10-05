import type { AgentListing } from "@/features/agent"
import type { DashboardAgentPlatformBadge } from "@/features/dashboard/components/dashboard-agent-grid-card"

export type { DashboardListingFilters, DashboardListingVisibility } from "./listings-filter-types"
export type { DashboardListingFilterOption } from "./listings-filter-types"
export {
  DASHBOARD_LISTING_BEDROOM_OPTIONS,
  DASHBOARD_LISTING_COMPLETION_STATUS_OPTIONS,
  DASHBOARD_LISTING_FURNISHING_OPTIONS,
  DASHBOARD_LISTING_PORTAL_OPTIONS,
  DASHBOARD_LISTING_PROPERTY_TITLE_OPTIONS,
  DASHBOARD_LISTING_PROPERTY_TYPE_OPTIONS,
  DASHBOARD_LISTING_SIZE_OPTIONS,
  DASHBOARD_LISTING_VISIBILITY_OPTIONS,
  createDefaultDashboardListingFilters,
  dashboardListingsFiltersCopy,
} from "./listings-filter-content"

export type DashboardListingStatus = "live" | "takedown"

export type DashboardListingTab = "sell" | "rental"

export type DashboardListing = AgentListing & {
  status: DashboardListingStatus
  referenceId: string
}

export type DashboardListingStatIconShape = "circle" | "plain"

export type DashboardListingStat = {
  label: string
  value: number
  portal: DashboardAgentPlatformBadge
  iconShape: DashboardListingStatIconShape
}
