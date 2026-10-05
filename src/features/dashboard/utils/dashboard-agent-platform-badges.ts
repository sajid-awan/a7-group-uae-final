import type { DashboardAgentPlatformBadge } from "@/features/dashboard/components/dashboard-agent-grid-card"

export const DASHBOARD_AGENT_PLATFORM_LOGOS = {
  logo1: "/assets/logo/logo1.png",
  logo2: "/assets/logo/logo2.png",
  logo3: "/assets/logo/logo3.png",
} as const

const PLATFORM_BADGE_POOL: DashboardAgentPlatformBadge[] = [
  { id: "platform-1", label: "Property Finder", imageSrc: DASHBOARD_AGENT_PLATFORM_LOGOS.logo1 },
  { id: "platform-2", label: "Bayut", imageSrc: DASHBOARD_AGENT_PLATFORM_LOGOS.logo2 },
  { id: "platform-3", label: "Platform", imageSrc: DASHBOARD_AGENT_PLATFORM_LOGOS.logo3 },
]

/** Portal logos used in dashboard listings stat cards (matches listing card portals). */
export const DASHBOARD_LISTINGS_STAT_PORTALS = [
  { portal: PLATFORM_BADGE_POOL[0], iconShape: "circle" as const },
  { portal: PLATFORM_BADGE_POOL[0], iconShape: "circle" as const },
  { portal: PLATFORM_BADGE_POOL[1], iconShape: "circle" as const },
  { portal: PLATFORM_BADGE_POOL[2], iconShape: "plain" as const },
] as const

export const DASHBOARD_LISTINGS_STAT_LABELS = ["Live", "Takedown", "Count", "Count"] as const

export function getDashboardAgentPlatformBadges(index: number): DashboardAgentPlatformBadge[] {
  if (index % 3 === 0) {
    return [PLATFORM_BADGE_POOL[0], PLATFORM_BADGE_POOL[1], PLATFORM_BADGE_POOL[2]]
  }
  if (index % 2 === 0) {
    return [PLATFORM_BADGE_POOL[0], PLATFORM_BADGE_POOL[2]]
  }
  return [PLATFORM_BADGE_POOL[1]]
}
