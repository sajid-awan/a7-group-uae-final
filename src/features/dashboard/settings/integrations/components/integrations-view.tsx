"use client"

import { Plug } from "lucide-react"

import { INTEGRATIONS_PAGE_COPY } from "../content/integrations-content"
import type { IntegrationRecord } from "../content/integrations-types"
import { IntegrationsGrid } from "./integrations-grid"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"
import { DashboardEmptyState } from "@/shared/ui/dashboard/dashboard-empty-state"
import { DashboardPageHeader } from "@/shared/ui/dashboard/dashboard-page-header"

export type IntegrationsViewProps = {
  integrations: IntegrationRecord[]
  onConfigure?: (integration: IntegrationRecord) => void
  onInstall?: (integration: IntegrationRecord) => void
  className?: string
}

export function IntegrationsView({
  integrations,
  onConfigure,
  onInstall,
  className,
}: IntegrationsViewProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <DashboardPageHeader
        backHref={PAGE_ROUTES.dashboardSettings}
        backLabel="Back to settings"
        title={INTEGRATIONS_PAGE_COPY.title}
        subtitle={INTEGRATIONS_PAGE_COPY.subtitle}
      />

      {integrations.length === 0 ? (
        <DashboardEmptyState
          icon={Plug}
          title={INTEGRATIONS_PAGE_COPY.emptyTitle}
          description={INTEGRATIONS_PAGE_COPY.emptyDescription}
        />
      ) : (
        <IntegrationsGrid
          integrations={integrations}
          onConfigure={onConfigure}
          onInstall={onInstall}
        />
      )}
    </div>
  )
}

IntegrationsView.displayName = "IntegrationsView"
