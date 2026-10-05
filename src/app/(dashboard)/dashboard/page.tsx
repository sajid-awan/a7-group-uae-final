import { getAuthSession } from "@/features/auth"
import { DashboardOverview, dashboardOverviewContent } from "@/features/dashboard"

export default async function DashboardPage() {
  const session = await getAuthSession()
  const userName = session.user?.name?.split(" ")[0] ?? "Olivia"

  return <DashboardOverview userName={userName} content={dashboardOverviewContent} />
}
