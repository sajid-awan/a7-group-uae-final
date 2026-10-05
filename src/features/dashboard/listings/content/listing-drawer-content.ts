import { dashboardAgentsContent } from "@/features/dashboard/agents/content/dashboard-agents-content"
import { DASHBOARD_AGENT_PLATFORM_LOGOS } from "@/features/dashboard/utils/dashboard-agent-platform-badges"
import { getListingAgentPhone } from "../utils/listings-list-view"
import type { DashboardListing } from "./listings-types"
import type { DashboardListingDrawerData } from "./listing-drawer-types"

const DRAWER_PORTAL_TEMPLATES = [
  { id: "fam-properties", label: "Fam Properties", imageSrc: DASHBOARD_AGENT_PLATFORM_LOGOS.logo1 },
  { id: "property-finder", label: "Property Finder", imageSrc: DASHBOARD_AGENT_PLATFORM_LOGOS.logo1 },
  { id: "bayut", label: "Bayut", imageSrc: DASHBOARD_AGENT_PLATFORM_LOGOS.logo2 },
  { id: "dubizzle", label: "Dubizzle", imageSrc: DASHBOARD_AGENT_PLATFORM_LOGOS.logo3 },
] as const

function hashListingId(id: string): number {
  let hash = 0
  for (let i = 0; i < id.length; i += 1) {
    hash = (hash * 31 + id.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

function buildUnitNo(listing: DashboardListing): string {
  const digits = listing.referenceId.replace(/\D/g, "")
  if (digits.length >= 3) return digits.slice(-4)
  return String(1800 + (hashListingId(listing.id) % 100))
}

function buildPortalStatuses(): DashboardListingDrawerData["portals"] {
  return DRAWER_PORTAL_TEMPLATES.map((portal) => ({
    ...portal,
    active: portal.id !== "property-finder",
  }))
}

function buildSubstituteAgentOptions(listing: DashboardListing) {
  return dashboardAgentsContent.agents
    .filter((agent) => agent.name !== listing.agentName)
    .map((agent) => ({
      value: agent.id,
      label: agent.name,
    }))
}

export function getDashboardListingDrawerData(listing: DashboardListing): DashboardListingDrawerData {
  return {
    imageUrl: listing.imageUrls[0] ?? "",
    permitNumber: getListingAgentPhone(listing.agentName),
    unitNo: buildUnitNo(listing),
    permitHref: "https://example.com/permit",
    portals: buildPortalStatuses(),
    substituteAgentOptions: buildSubstituteAgentOptions(listing),
  }
}
