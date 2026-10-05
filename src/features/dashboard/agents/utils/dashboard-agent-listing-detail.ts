import { getDashboardListingDetail } from "@/features/dashboard/listings/content/listing-detail-content"
import type { DashboardListingDetail } from "@/features/dashboard/listings/content/listing-detail-types"

import { getDashboardAgentBySlug } from "../content/dashboard-agents-content"
import { getDashboardAgentListings } from "./dashboard-agent-listings"

export function getDashboardAgentListingDetail(
  agentSlug: string,
  listingId: string
): DashboardListingDetail | null {
  const direct = getDashboardListingDetail(listingId)
  if (direct) return direct

  const agent = getDashboardAgentBySlug(agentSlug)
  if (!agent) return null

  const listing = getDashboardAgentListings(agent).find((item) => item.id === listingId)
  if (!listing) return null

  return getDashboardListingDetail(listingId, { fallbackListing: listing })
}
