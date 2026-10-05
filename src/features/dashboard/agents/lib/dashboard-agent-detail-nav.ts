import { dashboardAgentDetailPath } from "@/shared/lib/constants/routes"

export const DASHBOARD_AGENT_DETAIL_NAV_ITEMS = [
  { slug: "dashboard", label: "Dashboard", segment: "" },
  { slug: "profile", label: "Profile", segment: "profile" },
  { slug: "listings", label: "Listings", segment: "listings" },
  { slug: "leads", label: "Leads", segment: "leads" },
] as const

export type DashboardAgentDetailNavSlug = (typeof DASHBOARD_AGENT_DETAIL_NAV_ITEMS)[number]["slug"]

export function dashboardAgentDetailSectionPath(agentSlug: string, segment: string) {
  if (!segment) return dashboardAgentDetailPath(agentSlug)
  return `${dashboardAgentDetailPath(agentSlug)}/${segment}`
}

export function getDashboardAgentDetailNavHref(agentSlug: string, segment: string) {
  return dashboardAgentDetailSectionPath(agentSlug, segment)
}

export function getActiveDashboardAgentDetailNavSlug(
  pathname: string,
  agentSlug: string
): DashboardAgentDetailNavSlug {
  const base = dashboardAgentDetailPath(agentSlug)
  if (pathname === base || pathname === `${base}/`) return "dashboard"

  for (const item of DASHBOARD_AGENT_DETAIL_NAV_ITEMS) {
    if (!item.segment) continue
    if (pathname === `${base}/${item.segment}` || pathname.startsWith(`${base}/${item.segment}/`)) {
      return item.slug
    }
  }

  return "dashboard"
}
