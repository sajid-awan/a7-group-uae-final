import type { DashboardAgentRow } from "../content/dashboard-agents-types"
import { DashboardAgentListingsTab } from "../components/dashboard-agent-listings-tab"

export type DashboardAgentListingsPageProps = {
  agent: DashboardAgentRow
}

export function DashboardAgentListingsPage({ agent }: DashboardAgentListingsPageProps) {
  return <DashboardAgentListingsTab agent={agent} />
}

DashboardAgentListingsPage.displayName = "DashboardAgentListingsPage"
