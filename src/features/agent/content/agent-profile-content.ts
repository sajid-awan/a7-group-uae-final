import { REAL_ESTATE_AGENTS, type RealEstateAgentProfile } from "@/features/agent/content/agents-page-content"
import { agentProfilePath } from "@/shared/lib/constants/routes"
import {
  HOME_REAL_ESTATE_EXPERTS,
  type RealEstateExpert,
} from "@/features/home/content/home-real-estate-experts"
import type { PropertyAgentSocialLink } from "@/features/property"

const DEFAULT_HERO_BACKGROUND =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop"

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

const DEFAULT_SOCIAL_LINKS: PropertyAgentSocialLink[] = [
  { platform: "facebook", href: "https://facebook.com" },
  { platform: "linkedin", href: "https://linkedin.com" },
  { platform: "instagram", href: "https://instagram.com" },
  { platform: "youtube", href: "https://youtube.com" },
  { platform: "x", href: "https://x.com" },
]

function hashAgentId(id: string): number {
  let hash = 0
  for (let i = 0; i < id.length; i += 1) {
    hash = (hash * 31 + id.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

function padStat(value: number, width = 3): string {
  return String(value).padStart(width, "0")
}

function formatDealsValue(millions: number): string {
  const rounded = Math.round(millions * 10) / 10
  return `${rounded}M AED`
}

function buildAgentStats(agent: RealEstateAgentProfile): AgentProfileStat[] {
  const h = hashAgentId(agent.id)
  const featuredBoost = agent.showRankMedal ? 8 : 0

  const propertiesForSale = 14 + (h % 22) + featuredBoost
  const propertiesForRent = 9 + ((h >> 4) % 16) + Math.floor(featuredBoost / 2)
  const closedDeals = 52 + ((h >> 8) % 95) + featuredBoost * 3
  const totalDealsValueM = 18 + ((h >> 12) % 48) + featuredBoost * 1.5 + (h % 10) / 10

  return [
    { value: padStat(propertiesForSale), label: "Properties for Sale", icon: "compass" },
    { value: padStat(propertiesForRent), label: "Properties for Rent", icon: "key" },
    { value: String(closedDeals), label: "Closed Deals", icon: "thumbs" },
    { value: formatDealsValue(totalDealsValueM), label: "Total Deals Value", icon: "diamond" },
  ]
}

function parseWhatsAppPhone(whatsAppHref: string): string | undefined {
  const match = whatsAppHref.match(/wa\.me\/(\d+)/)
  return match?.[1]
}

function buildPhoneHref(agent: RealEstateAgentProfile): string {
  const fromWhatsApp = parseWhatsAppPhone(agent.whatsAppHref)
  if (fromWhatsApp) return `tel:+${fromWhatsApp}`
  return `tel:+971500000000`
}

function buildEmailHref(agent: RealEstateAgentProfile): string {
  const local = agent.id.replace(/-/g, ".")
  return `mailto:${local}@a7even.com`
}

function buildRating(agent: RealEstateAgentProfile): number {
  const h = hashAgentId(agent.id)
  const base = 4.3 + (h % 7) / 10
  return agent.showRankMedal ? Math.min(5, Math.round((base + 0.2) * 10) / 10) : Math.round(base * 10) / 10
}

function buildActiveProperties(stats: AgentProfileStat[]): number {
  const sale = Number.parseInt(stats[0]?.value ?? "0", 10)
  const rent = Number.parseInt(stats[1]?.value ?? "0", 10)
  return sale + rent
}

function buildResponseTimeLabel(agent: RealEstateAgentProfile): string {
  const firstName = agent.name.split(/\s+/)[0] ?? agent.name
  const minutes = 3 + (hashAgentId(agent.id) % 13)
  return `${firstName} usually responds within ${minutes} minutes`
}

function buildAboutParagraphs(agent: RealEstateAgentProfile): string[] {
  return [
    `${agent.name} is a licensed Dubai real estate professional specializing in ${agent.subtitle.toLowerCase()}. With deep knowledge of community-level pricing, service charges, and rental yields, ${agent.name.split(" ")[0]} helps buyers, renters, and investors compare areas before shortlisting properties.`,
    `Fluent in ${agent.languages}, ${agent.name} covers Downtown Dubai, Dubai Marina, Business Bay, Palm Jumeirah, and emerging corridors. Clients value clear communication, fast follow-up, and transparent guidance from first viewing through handover.`,
    `Whether you are exploring off-plan launches or ready inventory, ${agent.name} provides tailored market insights, negotiation support, and end-to-end coordination with developers and conveyancers.`,
  ]
}

const DEFAULT_POLICIES: string[] = [
  "All viewings and offers are handled in line with RERA regulations and agency compliance standards. Personal data shared for inquiries is used only to respond to your request and arrange property visits.",
  "Commission structures follow the listing agreement and are disclosed before any formal offer. Third-party fees, service charges, and transfer costs are quoted separately so you can plan your total investment accurately.",
  "Marketing materials and floor plans are provided for guidance; final specifications are confirmed in the sale or lease contract issued by the developer or landlord.",
]

function resolveHeroBackground(agent: RealEstateAgentProfile): string {
  if (!agent.imageUrl || agent.imageUrl.includes("pravatar.cc")) {
    return DEFAULT_HERO_BACKGROUND
  }
  return agent.imageUrl
}

function enrichAgent(agent: RealEstateAgentProfile): AgentProfileDetail {
  const stats = buildAgentStats(agent)
  const rating = buildRating(agent)

  return {
    ...agent,
    rating,
    activeProperties: buildActiveProperties(stats),
    responseTimeLabel: buildResponseTimeLabel(agent),
    phoneHref: buildPhoneHref(agent),
    emailHref: buildEmailHref(agent),
    heroBackgroundUrl: resolveHeroBackground(agent),
    stats,
    aboutParagraphs: buildAboutParagraphs(agent),
    policiesParagraphs: DEFAULT_POLICIES,
    socialLinks: DEFAULT_SOCIAL_LINKS,
  }
}

const DEFAULT_HOME_EXPERT_LANGUAGES = "English, Arabic"
const DEFAULT_HOME_EXPERTISE_AREAS = ["Downtown Dubai", "Dubai Marina"]

function homeExpertToAgentProfile(expert: RealEstateExpert): RealEstateAgentProfile {
  return {
    id: expert.id,
    name: expert.name,
    subtitle: expert.role,
    languages: DEFAULT_HOME_EXPERT_LANGUAGES,
    expertiseAreas: [...DEFAULT_HOME_EXPERTISE_AREAS],
    imageUrl: expert.imageUrl,
    roleBadge: "Active Broker",
    showRankMedal: false,
    whatsAppHref: expert.whatsAppHref ?? "https://wa.me/971500000000",
    profileHref: agentProfilePath(expert.id),
  }
}

/** Resolves agents from the directory and home “Real estate experts” carousel. */
export function findRealEstateAgentById(id: string): RealEstateAgentProfile | undefined {
  const fromDirectory = REAL_ESTATE_AGENTS.find((a) => a.id === id)
  if (fromDirectory) return fromDirectory

  const homeExpert = HOME_REAL_ESTATE_EXPERTS.find((e) => e.id === id)
  if (homeExpert) return homeExpertToAgentProfile(homeExpert)

  return undefined
}

export function getAgentProfileDetail(id: string): AgentProfileDetail | undefined {
  const agent = findRealEstateAgentById(id)
  if (!agent) return undefined
  return enrichAgent(agent)
}

export function getAllAgentProfileIds(): string[] {
  return [
    ...new Set([
      ...REAL_ESTATE_AGENTS.map((a) => a.id),
      ...HOME_REAL_ESTATE_EXPERTS.map((e) => e.id),
    ]),
  ]
}
