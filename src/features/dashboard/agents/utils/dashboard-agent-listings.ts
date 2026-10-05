import { findRealEstateAgentById } from "@/features/agent/content/agent-profile-content"
import { getAgentListings, type AgentListing } from "@/features/agent"
import type { DashboardAgentRow } from "../content/dashboard-agents-types"

const FALLBACK_LISTINGS_AGENT_ID = "samantha-smith"

export function getDashboardAgentListings(agent: DashboardAgentRow): AgentListing[] {
  if (findRealEstateAgentById(agent.id)) {
    return getAgentListings(agent.id)
  }

  return getAgentListings(FALLBACK_LISTINGS_AGENT_ID).map((listing) => ({
    ...listing,
    id: listing.id.replace(FALLBACK_LISTINGS_AGENT_ID, agent.id),
    agentName: agent.name,
    agentAvatarUrl: agent.imageUrl,
  }))
}
