import { notFound } from "next/navigation"

import { AgentListingsSection } from "@/features/agent/ui/agent-profile/agent-listings-section"
import { fetchAgentProfile, getAgentListings } from "@/features/agent"

type AgentProfileListingsPageProps = {
  params: Promise<{ id: string }>
}

export async function AgentProfileListingsPage({ params }: AgentProfileListingsPageProps) {
  const { id } = await params
  const agent = await fetchAgentProfile(id)

  if (!agent) {
    notFound()
  }

  const listings = getAgentListings(agent.id)

  return <AgentListingsSection agent={agent} listings={listings} />
}
