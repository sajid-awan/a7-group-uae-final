import type { PropertyListingDetail } from "@/features/property"

export type DashboardListingPortalSetting = {
  id: string
  label: string
  enabled: boolean
}

export type DashboardListingDetailAnalytics = {
  totalLeads: number
  totalViews: number
}

export type DashboardListingDetailMeta = {
  lastUpdatedLabel: string
  referenceId: string
  furnishing: string
  purpose: string
  addedOn: string
  tag: string
}

export type DashboardListingDetail = PropertyListingDetail & {
  meta: DashboardListingDetailMeta
  analytics: DashboardListingDetailAnalytics
  hideListing: boolean
  portalSettings: DashboardListingPortalSetting[]
}

export type DashboardListingDetailRow = {
  label: string
  value: string
  icon?: "type" | "furnishing" | "purpose" | "calendar" | "reference" | "tag"
}
