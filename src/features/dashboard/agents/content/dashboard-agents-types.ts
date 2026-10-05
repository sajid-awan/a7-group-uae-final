export type DashboardAgentStatus = "active" | "archived"

export type DashboardAgentFormValues = {
  fullName: string
  email: string
  mobile: string
  whatsapp: string
  brn: string
  password: string
  about: string
}

export type DashboardAgentRow = {
  id: string
  name: string
  email: string
  mobile: string
  whatsappPhone: string
  brn: string
  about: string
  imageUrl: string
  listings: number
  leads: number
  calls: number
  whatsapp: number
  isActive: boolean
  status: DashboardAgentStatus
}

export type DashboardAgentsContent = {
  agents: DashboardAgentRow[]
}
