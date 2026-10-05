"use client"

import { useCallback, useMemo, useState } from "react"

import { DataImportExportDrawer } from "../components/data-import-export-drawer"
import { FormConfigurationsDrawer } from "../components/form-configurations-drawer"
import { IntegrationDrawer } from "../components/integration-drawer"
import { IntegrationsView } from "../components/integrations-view"
import { getIntegrationsMockData } from "../content/integrations-content"
import type { IntegrationRecord, IntegrationSettingsForm } from "../content/integrations-types"
import { cn } from "@/shared/lib/cn"

export type DashboardIntegrationsPageProps = {
  className?: string
}

export function DashboardIntegrationsPage({ className }: DashboardIntegrationsPageProps) {
  const initialIntegrations = useMemo(() => getIntegrationsMockData(), [])
  const [integrations, setIntegrations] = useState<IntegrationRecord[]>(initialIntegrations)
  const [portalDrawerOpen, setPortalDrawerOpen] = useState(false)
  const [dataImportDrawerOpen, setDataImportDrawerOpen] = useState(false)
  const [formsDrawerOpen, setFormsDrawerOpen] = useState(false)
  const [activeIntegration, setActiveIntegration] = useState<IntegrationRecord | null>(null)

  const openPortalDrawer = useCallback((integration: IntegrationRecord) => {
    setActiveIntegration(integration)
    setPortalDrawerOpen(true)
  }, [])

  const openSpecialDrawer = useCallback((integration: IntegrationRecord) => {
    if (integration.drawerVariant === "data-import") {
      setDataImportDrawerOpen(true)
      return
    }

    if (integration.drawerVariant === "forms") {
      setFormsDrawerOpen(true)
    }
  }, [])

  const handleConfigure = useCallback(
    (integration: IntegrationRecord) => {
      if (integration.drawerVariant === "data-import" || integration.drawerVariant === "forms") {
        openSpecialDrawer(integration)
        return
      }

      openPortalDrawer(integration)
    },
    [openPortalDrawer, openSpecialDrawer]
  )

  const handleInstall = useCallback(
    (integration: IntegrationRecord) => {
      if (integration.drawerVariant === "data-import" || integration.drawerVariant === "forms") {
        openSpecialDrawer(integration)
        return
      }

      setIntegrations((current) =>
        current.map((item) =>
          item.id === integration.id ? { ...item, status: "pending" } : item
        )
      )
      openPortalDrawer({ ...integration, status: "pending" })
    },
    [openPortalDrawer, openSpecialDrawer]
  )

  const handleSave = useCallback(
    (integration: IntegrationRecord, values: IntegrationSettingsForm) => {
      void values
      setIntegrations((current) =>
        current.map((item) =>
          item.id === integration.id ? { ...item, status: "installed" } : item
        )
      )
    },
    []
  )

  return (
    <div className={cn("p-4 sm:p-6 font-inter", className)}>
      <IntegrationsView
        integrations={integrations}
        onConfigure={handleConfigure}
        onInstall={handleInstall}
      />
      <IntegrationDrawer
        open={portalDrawerOpen}
        onOpenChange={setPortalDrawerOpen}
        integration={activeIntegration}
        onSave={handleSave}
      />
      <DataImportExportDrawer open={dataImportDrawerOpen} onOpenChange={setDataImportDrawerOpen} />
      <FormConfigurationsDrawer open={formsDrawerOpen} onOpenChange={setFormsDrawerOpen} />
    </div>
  )
}

DashboardIntegrationsPage.displayName = "DashboardIntegrationsPage"
