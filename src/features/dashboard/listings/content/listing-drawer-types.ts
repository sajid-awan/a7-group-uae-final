export type DashboardListingDrawerPortal = {
  id: string
  label: string
  imageSrc?: string
  active: boolean
}

export type DashboardListingDrawerSubstituteAgentOption = {
  value: string
  label: string
}

export type DashboardListingDrawerData = {
  imageUrl: string
  permitNumber: string
  unitNo: string
  permitHref: string
  portals: DashboardListingDrawerPortal[]
  substituteAgentOptions: DashboardListingDrawerSubstituteAgentOption[]
}
