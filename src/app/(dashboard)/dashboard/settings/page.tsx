import { redirect } from "next/navigation"

import { PAGE_ROUTES } from "@/shared/lib/constants/routes"

export default function DashboardSettingsPage() {
  redirect(PAGE_ROUTES.dashboardSettingsRoles)
}
