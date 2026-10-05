import { notFound } from "next/navigation"

import { AgentContactSection } from "@/features/agent/ui/agent-profile/agent-contact-section"
import { fetchAgentProfile } from "@/features/agent"

type AgentProfileContactPageProps = {
  params: Promise<{ id: string }>
}

export async function AgentProfileContactPage({ params }: AgentProfileContactPageProps) {
  const { id } = await params
  const agent = await fetchAgentProfile(id)

  if (!agent) {
    notFound()
  }

  return <AgentContactSection agent={agent} />
}
