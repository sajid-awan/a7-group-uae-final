export type IntegrationStatus = "installed" | "available" | "pending"

export type IntegrationDrawerVariant = "portal" | "data-import" | "forms"

export type IntegrationRecord = {
  id: string
  name: string
  description: string
  logoLabel: string
  logoClassName: string
  status: IntegrationStatus
  drawerVariant?: IntegrationDrawerVariant
}

export type IntegrationSettingsForm = {
  autoSyncLeads: boolean
  unifiedLeadManagement: boolean
  shareOnFacebook: boolean
  apiKey: string
}
