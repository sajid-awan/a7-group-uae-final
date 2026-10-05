import { dashboardAgentsMockData } from "./dashboard-agents-mock-data"
import type { DashboardAgentsContent } from "./dashboard-agents-types"

export const dashboardAgentsContent: DashboardAgentsContent = {
  agents: dashboardAgentsMockData,
}

export function getDashboardAgentById(agentId: string) {
  return dashboardAgentsContent.agents.find((agent) => agent.id === agentId)
}

export function getDashboardAgentBySlug(slug: string) {
  return getDashboardAgentById(slug)
}
