"use client"

import { cn } from "@/shared/lib/cn"
import { dashboardAgentDetailPath, dashboardAgentEditPath } from "@/shared/lib/constants/routes"
import { ListingPagination } from "@/shared/ui/listing-pagination"

import type { DashboardAgentRow } from "@/features/dashboard/agents/content/dashboard-agents-types"
import { getDashboardAgentPlatformBadges } from "@/features/dashboard/utils/dashboard-agent-platform-badges"
import { DashboardAgentGridCard } from "./dashboard-agent-grid-card"

export type DashboardAgentsGridViewProps = {
  agents: DashboardAgentRow[]
  page: number
  pageCount: number
  onPageChange: (page: number) => void
  className?: string
}

export function DashboardAgentsGridView({
  agents,
  page,
  pageCount,
  onPageChange,
  className,
}: DashboardAgentsGridViewProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {agents.length === 0 ? (
        <div className="rounded-2xl border border-border bg-white px-6 py-16 text-center text-sm text-muted-foreground shadow-sm">
          No agents found.
        </div>
      ) : (
        <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {agents.map((agent, index) => (
            <DashboardAgentGridCard
              key={agent.id}
              name={agent.name}
              imageSrc={agent.imageUrl}
              platformBadges={getDashboardAgentPlatformBadges(index)}
              isVerified={agent.isActive}
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
      )}

      {pageCount > 1 ? (
        <ListingPagination page={page} pageCount={pageCount} onPageChange={onPageChange} />
      ) : null}
    </div>
  )
}

DashboardAgentsGridView.displayName = "DashboardAgentsGridView"
