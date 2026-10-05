import type { IntegrationSettingsForm } from "./integrations-types"

export const INTEGRATIONS_DRAWER_COPY = {
  apiConfigurationLabel: "API Configuration",
  cancelLabel: "Cancel",
  saveLabel: "Save",
  testConnectionTitle: "Test Connection",
  testConnectionDescription: "Verify Bayut credentials are valid",
  testConnectionAction: "Test Connection",
  initialSyncTitle: "Initial Data Sync",
  initialSyncDescription: "Fetch leads from last 14 days",
  initialSyncAction: "Sync Now",
} as const

export const INTEGRATION_TOGGLE_OPTIONS = [
  { key: "autoSyncLeads" as const, label: "Auto-sync leads from both portals" },
  { key: "unifiedLeadManagement" as const, label: "Unified lead management" },
  { key: "shareOnFacebook" as const, label: "Share on Facebook" },
]

export function createInitialIntegrationSettings(): IntegrationSettingsForm {
  return {
    autoSyncLeads: true,
    unifiedLeadManagement: false,
    shareOnFacebook: false,
    apiKey: "sk_live_4eC39HqLyjWDarjtT1zdp7dc",
  }
}

export function getIntegrationStatusLabel(status: "installed" | "available" | "pending"): string {
  if (status === "installed") return "Installed"
  if (status === "pending") return "Pending"
  return "Available"
}
