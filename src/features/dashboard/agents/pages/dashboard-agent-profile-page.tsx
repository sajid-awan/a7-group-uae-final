import type { DashboardAgentRow } from "../content/dashboard-agents-types"
import { DashboardAgentProfileTab } from "../components/dashboard-agent-profile-tab"

export type DashboardAgentProfilePageProps = {
  agent: DashboardAgentRow
}

export function DashboardAgentProfilePage({ agent }: DashboardAgentProfilePageProps) {
  return <DashboardAgentProfileTab agent={agent} />
}

DashboardAgentProfilePage.displayName = "DashboardAgentProfilePage"
