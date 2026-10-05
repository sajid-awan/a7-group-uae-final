import type { PropertyAgentSocialLink } from "@/features/property"

import type { RealEstateAgentProfile } from "./agent.entity"

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
