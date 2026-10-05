import type { LucideIcon } from "lucide-react"
import {
  Building2,
  Database,
  Handshake,
  LayoutDashboard,
  ListTodo,
  Settings,
  Target,
  UserRound,
  Users,
  Wrench,
} from "lucide-react"

import { PAGE_ROUTES } from "@/shared/lib/constants/routes"

export type DashboardNavItem = {
  label: string
  href: string
  icon: LucideIcon
  badge?: string
  children?: readonly { label: string; href: string }[]
}

export const dashboardNavItems: readonly DashboardNavItem[] = [
  { label: "Dashboard", href: PAGE_ROUTES.dashboard, icon: LayoutDashboard },
  { label: "Agents", href: PAGE_ROUTES.dashboardAgents, icon: Users },
  { label: "Leads", href: PAGE_ROUTES.dashboardLeads, icon: UserRound },
  { label: "Listings", href: PAGE_ROUTES.dashboardListings, icon: Building2 },
  {
    label: "Deals & Transactions",
    href: "/dashboard/deals",
    icon: Handshake,
    children: [{ label: "Transactions List", href: PAGE_ROUTES.dashboardTransactions }],
  },
  { label: "Tasks & Activity", href: PAGE_ROUTES.dashboardTasks, icon: ListTodo,
    children: [
      { label: "All Tasks", href: PAGE_ROUTES.dashboardTasks },
      { label: "Task Types", href: PAGE_ROUTES.dashboardTaskTypes },
    ],
  },
  { label: "Database", href: PAGE_ROUTES.dashboardDatabase, icon: Database },
  {
    label: "Operations",
    href: PAGE_ROUTES.dashboardOperations,
    icon: Wrench,
    children: [{ label: "Overview", href: PAGE_ROUTES.dashboardOperations }],
  },
  { label: "Marketing", href: PAGE_ROUTES.dashboardMarketing, icon: Target, badge: "NEW" },
] as const

export const dashboardFooterNavItems: readonly DashboardNavItem[] = [
  { label: "Support", href: "/dashboard/support", icon: Wrench },
  {
    label: "Settings",
    href: PAGE_ROUTES.dashboardSettings,
    icon: Settings,
    children: [
      { label: "Roles", href: PAGE_ROUTES.dashboardSettingsRoles },
      { label: "Permissions", href: PAGE_ROUTES.dashboardSettingsPermissions },
      { label: "Team", href: PAGE_ROUTES.dashboardSettingsTeam },
      { label: "Users", href: PAGE_ROUTES.dashboardSettingsUsers },
      { label: "Integrations", href: PAGE_ROUTES.dashboardSettingsIntegrations },
      { label: "Company Profile", href: PAGE_ROUTES.dashboardSettingsCompanyProfile },
    ],
  },
] as const
