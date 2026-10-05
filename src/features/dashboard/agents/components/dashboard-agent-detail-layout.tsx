import type { ReactNode } from "react"

import { AgentProfileHero } from "@/features/agent/ui/agent-profile"
import type { DashboardAgentRow } from "../content/dashboard-agents-types"
import { dashboardAgentToProfileDetail } from "../utils/dashboard-agent-to-profile"
import { DashboardAgentDetailTabs } from "./dashboard-agent-detail-tabs"
import { cn } from "@/shared/lib/cn"

export type DashboardAgentDetailLayoutProps = {
  agent: DashboardAgentRow
  children: ReactNode
  className?: string
}

export function DashboardAgentDetailLayout({ agent, children, className }: DashboardAgentDetailLayoutProps) {
  const profile = dashboardAgentToProfileDetail(agent)

  return (
    <div className={cn("font-inter [&_h1]:font-inter [&_h2]:font-inter [&_h3]:font-inter [&_h4]:font-inter", className)}>
      <AgentProfileHero agent={profile} />
      <DashboardAgentDetailTabs agentSlug={agent.id} />
      <div className="p-6">{children}</div>
    </div>
  )
}

DashboardAgentDetailLayout.displayName = "DashboardAgentDetailLayout"
