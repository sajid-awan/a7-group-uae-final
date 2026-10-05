"use client"

import { useMemo } from "react"
import { useRouter } from "next/navigation"

import { DashboardAgentForm } from "@/features/dashboard/components/dashboard-agent-form"
import type { DashboardAgentRow } from "../content/dashboard-agents-types"
import { dashboardAgentToFormValues } from "../utils/dashboard-agent-to-form-values"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"

export type DashboardAgentProfileTabProps = {
  agent: DashboardAgentRow
}

export function DashboardAgentProfileTab({ agent }: DashboardAgentProfileTabProps) {
  const router = useRouter()

  const initialValues = useMemo(() => dashboardAgentToFormValues(agent), [agent])

  return (
    <DashboardAgentForm
      key={agent.id}
      mode="edit"
      layout="embedded"
      initialValues={initialValues}
      initialPhotoUrl={agent.imageUrl}
      onCancel={() => router.push(PAGE_ROUTES.dashboardAgents)}
      onSubmit={() => undefined}
      onDelete={() => router.push(PAGE_ROUTES.dashboardAgents)}
    />
  )
}

DashboardAgentProfileTab.displayName = "DashboardAgentProfileTab"
