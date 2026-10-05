import type { DashboardAgentRow } from "../content/dashboard-agents-types"
import { DashboardAgentLeadsTab } from "../components/dashboard-agent-leads-tab"

export type DashboardAgentLeadsPageProps = {
  agent: DashboardAgentRow
}

export function DashboardAgentLeadsPage({ agent }: DashboardAgentLeadsPageProps) {
  return <DashboardAgentLeadsTab agent={agent} />
}

DashboardAgentLeadsPage.displayName = "DashboardAgentLeadsPage"
