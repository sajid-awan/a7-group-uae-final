"use client"

import { useMemo } from "react"
import { useRouter } from "next/navigation"

import type { DashboardAgentRow } from "../content/dashboard-agents-types"
import { DashboardAgentForm } from "../../components/dashboard-agent-form"
import { dashboardAgentToFormValues } from "../utils/dashboard-agent-to-form-values"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"

export type DashboardEditAgentPageProps = {
  agent: DashboardAgentRow
  className?: string
}

export function DashboardEditAgentPage({ agent, className }: DashboardEditAgentPageProps) {
  const router = useRouter()

  const initialValues = useMemo(() => dashboardAgentToFormValues(agent), [agent])

  return (
    <div className={cn("space-y-6 p-4 sm:p-6 font-inter", className)}>
      <DashboardAgentForm
        key={agent.id}
        mode="edit"
        layout="page"
        initialValues={initialValues}
        initialPhotoUrl={agent.imageUrl}
        onCancel={() => router.push(PAGE_ROUTES.dashboardAgents)}
        onSubmit={() => router.push(PAGE_ROUTES.dashboardAgents)}
      />
    </div>
  )
}

DashboardEditAgentPage.displayName = "DashboardEditAgentPage"
