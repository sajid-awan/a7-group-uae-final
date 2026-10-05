"use client"

import type { IntegrationRecord } from "../content/integrations-types"
import { IntegrationCard } from "./integration-card"
import { cn } from "@/shared/lib/cn"

export type IntegrationsGridProps = {
  integrations: IntegrationRecord[]
  className?: string
  onConfigure?: (integration: IntegrationRecord) => void
  onInstall?: (integration: IntegrationRecord) => void
}

export function IntegrationsGrid({
  integrations,
  className,
  onConfigure,
  onInstall,
}: IntegrationsGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3", className)}>
      {integrations.map((integration) => (
        <IntegrationCard
          key={integration.id}
          integration={integration}
          onConfigure={onConfigure}
          onInstall={onInstall}
        />
      ))}
    </div>
  )
}

IntegrationsGrid.displayName = "IntegrationsGrid"
