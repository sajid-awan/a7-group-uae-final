export type DashboardListingLeadContact = "whatsapp" | "gmail"

export type DashboardListingLead = {
  id: string
  name: string
  phone: string
  portalLabel: string
  portalLogo: string
  contactChannel: DashboardListingLeadContact
  updatedAgo: string
  contactHref: string
}

export const dashboardListingLeadsCopy = {
  title: "All Leads",
  description: "Team members will be able to edit this post and republish changes.",
} as const
