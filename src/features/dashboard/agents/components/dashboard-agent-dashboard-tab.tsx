import { dashboardOverviewContent } from "@/features/dashboard/overview/content/dashboard-overview-content"
import { DashboardAnalyticsSections } from "@/features/dashboard/components/dashboard-analytics-sections"

export function DashboardAgentDashboardTab() {
  return <DashboardAnalyticsSections content={dashboardOverviewContent} />
}

DashboardAgentDashboardTab.displayName = "DashboardAgentDashboardTab"
