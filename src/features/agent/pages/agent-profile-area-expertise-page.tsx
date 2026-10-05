import { notFound } from "next/navigation"

import { AgentAreaExpertiseSection } from "@/features/agent/ui/agent-profile/agent-area-expertise-section"
import { fetchAgentProfile, getAgentAreaExpertise } from "@/features/agent"

type AgentProfileAreaExpertisePageProps = {
  params: Promise<{ id: string }>
}

export async function AgentProfileAreaExpertisePage({ params }: AgentProfileAreaExpertisePageProps) {
  const { id } = await params
  const agent = await fetchAgentProfile(id)

  if (!agent) {
    notFound()
  }

  const areas = getAgentAreaExpertise(agent.id)

  return <AgentAreaExpertiseSection agent={agent} areas={areas} />
}
