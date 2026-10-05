import { notFound } from "next/navigation"

import { AgentOffPlanSection } from "@/features/agent/ui/agent-profile/agent-off-plan-section"
import { fetchAgentProfile, getAgentOffPlanProjects } from "@/features/agent"

type AgentProfileOffPlanPageProps = {
  params: Promise<{ id: string }>
}

export async function AgentProfileOffPlanPage({ params }: AgentProfileOffPlanPageProps) {
  const { id } = await params
  const agent = await fetchAgentProfile(id)

  if (!agent) {
    notFound()
  }

  const projects = getAgentOffPlanProjects(agent.id)

  return <AgentOffPlanSection agent={agent} projects={projects} />
}
