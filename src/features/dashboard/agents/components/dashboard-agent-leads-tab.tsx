"use client"

import { useMemo } from "react"

import type { DashboardAgentRow } from "../content/dashboard-agents-types"
import { getDashboardAgentLeads } from "../content/dashboard-agent-leads-mock-data"
import { DashboardLeadsView } from "../../components/dashboard-leads-view"

export type DashboardAgentLeadsTabProps = {
  agent: DashboardAgentRow
  className?: string
}

export function DashboardAgentLeadsTab({ agent, className }: DashboardAgentLeadsTabProps) {
  const leads = useMemo(() => getDashboardAgentLeads(agent), [agent])

  return <DashboardLeadsView leads={leads} className={className} />
}

DashboardAgentLeadsTab.displayName = "DashboardAgentLeadsTab"
