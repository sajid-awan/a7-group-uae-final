import { notFound } from "next/navigation"

import { AgentTransactionsSection } from "@/features/agent/ui/agent-profile/agent-transactions-section"
import { fetchAgentProfile, getAgentTransactions } from "@/features/agent"

type AgentProfileTransactionsPageProps = {
  params: Promise<{ id: string }>
}

export async function AgentProfileTransactionsPage({ params }: AgentProfileTransactionsPageProps) {
  const { id } = await params
  const agent = await fetchAgentProfile(id)

  if (!agent) {
    notFound()
  }

  const transactions = getAgentTransactions(agent.id)

  return <AgentTransactionsSection agent={agent} transactions={transactions} />
}
