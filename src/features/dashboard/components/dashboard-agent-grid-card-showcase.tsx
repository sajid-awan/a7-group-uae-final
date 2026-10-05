"use client"

import { dashboardAgentsMockData } from "@/features/dashboard/agents/content/dashboard-agents-mock-data"
import { getDashboardAgentPlatformBadges } from "@/features/dashboard/utils/dashboard-agent-platform-badges"
import { dashboardAgentDetailPath, dashboardAgentEditPath } from "@/shared/lib/constants/routes"
import { DashboardAgentGridCard } from "./dashboard-agent-grid-card"

export function DashboardAgentGridCardShowcase() {
  const agents = dashboardAgentsMockData.slice(0, 4)

  return (
    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {agents.map((agent, index) => (
        <DashboardAgentGridCard
          key={agent.id}
          name={agent.name}
          imageSrc={agent.imageUrl}
          isVerified={agent.isActive}
          platformBadges={getDashboardAgentPlatformBadges(index)}
          editHref={dashboardAgentEditPath(agent.id)}
          detailHref={dashboardAgentDetailPath(agent.id)}
          stats={{
            listings: agent.listings,
            calls: agent.calls,
            leads: agent.leads,
            whatsapp: agent.whatsapp,
          }}
        />
      ))}
    </div>
  )
}

DashboardAgentGridCardShowcase.displayName = "DashboardAgentGridCardShowcase"
