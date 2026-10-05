import type { PropertyAgentSocialLink } from "@/features/property"

export type RealEstateAgentProfile = {
  id: string
  name: string
  subtitle: string
  languages: string
  expertiseAreas: string[]
  imageUrl: string
  roleBadge?: string
  showRankMedal?: boolean
  whatsAppHref: string
  profileHref: string
}

export type AgentProfileStatIcon = "compass" | "key" | "thumbs" | "diamond"

export type AgentProfileStat = {
  value: string
  label: string
  icon: AgentProfileStatIcon
}

export type AgentProfileDetail = RealEstateAgentProfile & {
  rating: number
  activeProperties: number
  responseTimeLabel: string
  phoneHref: string
  emailHref: string
  heroBackgroundUrl: string
  stats: AgentProfileStat[]
  aboutParagraphs: string[]
  policiesParagraphs: string[]
  socialLinks: PropertyAgentSocialLink[]
}
