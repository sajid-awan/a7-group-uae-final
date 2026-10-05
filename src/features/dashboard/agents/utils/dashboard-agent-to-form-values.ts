import type { DashboardAgentFormValues, DashboardAgentRow } from "../content/dashboard-agents-types"

export function dashboardAgentToFormValues(agent: DashboardAgentRow): DashboardAgentFormValues {
  return {
    fullName: agent.name,
    email: agent.email,
    mobile: agent.mobile,
    whatsapp: agent.whatsappPhone,
    brn: agent.brn,
    password: "",
    about: agent.about,
  }
}
