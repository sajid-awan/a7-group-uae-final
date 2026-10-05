import { notFound } from "next/navigation"

import { AgentProfileAbout } from "@/features/agent/ui/agent-profile"
import { fetchAgentProfile } from "@/features/agent"

type AgentProfileAboutPageProps = {
  params: Promise<{ id: string }>
}

export async function AgentProfileAboutPage({ params }: AgentProfileAboutPageProps) {
  const { id } = await params
  const agent = await fetchAgentProfile(id)

  if (!agent) {
    notFound()
  }

  return <AgentProfileAbout agent={agent} />
}
