import type { AgentProfileDetail, AgentProfileStat } from "@/features/agent/core/domain/entity/agent.entity"
import { dashboardAgentDetailPath } from "@/shared/lib/constants/routes"
import type { DashboardAgentRow } from "../content/dashboard-agents-types"

const DEFAULT_HERO_BACKGROUND =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop"

const DEFAULT_SOCIAL_LINKS = [
  { platform: "facebook" as const, href: "https://facebook.com" },
  { platform: "linkedin" as const, href: "https://linkedin.com" },
  { platform: "instagram" as const, href: "https://instagram.com" },
  { platform: "youtube" as const, href: "https://youtube.com" },
  { platform: "x" as const, href: "https://x.com" },
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

function formatTransactionsValue(agent: DashboardAgentRow): string {
  const h = hashAgentId(agent.id)
  const millions = 12 + (h % 38) + agent.listings / 10
  const rounded = Math.round(millions * 10) / 10
  return `${rounded}M AED`
}

function buildDashboardAgentStats(agent: DashboardAgentRow): AgentProfileStat[] {
  return [
    { value: padStat(agent.calls), label: "Call Leads", icon: "compass" },
    { value: padStat(agent.leads), label: "Total Leads", icon: "key" },
    { value: String(agent.listings), label: "Total Listings", icon: "thumbs" },
    { value: formatTransactionsValue(agent), label: "Total Transactions", icon: "diamond" },
  ]
}

function buildRating(agent: DashboardAgentRow): number {
  const h = hashAgentId(agent.id)
  return Math.round((4.2 + (h % 8) / 10) * 10) / 10
}

function buildResponseTimeLabel(agent: DashboardAgentRow): string {
  const firstName = agent.name.split(/\s+/)[0] ?? agent.name
  const minutes = 3 + (hashAgentId(agent.id) % 13)
  return `${firstName} usually responds within ${minutes} minutes`
}

function toWhatsAppHref(phone: string): string {
  const digits = phone.replace(/\D/g, "")
  return digits ? `https://wa.me/${digits}` : "https://wa.me/971500000000"
}

function toPhoneHref(phone: string): string {
  const digits = phone.replace(/\D/g, "")
  return digits ? `tel:+${digits}` : "tel:+971500000000"
}

export function dashboardAgentToProfileDetail(agent: DashboardAgentRow): AgentProfileDetail {
  const stats = buildDashboardAgentStats(agent)
  const firstName = agent.name.split(/\s+/)[0] ?? agent.name

  return {
    id: agent.id,
    name: agent.name,
    subtitle: "Sales Director",
    languages: "English, Arabic",
    expertiseAreas: ["Downtown Dubai", "Dubai Marina", "Business Bay"],
    imageUrl: agent.imageUrl,
    roleBadge: "Sales Director",
    showRankMedal: hashAgentId(agent.id) % 5 === 0,
    whatsAppHref: toWhatsAppHref(agent.whatsappPhone),
    profileHref: dashboardAgentDetailPath(agent.id),
    rating: buildRating(agent),
    activeProperties: agent.listings,
    responseTimeLabel: buildResponseTimeLabel(agent),
    phoneHref: toPhoneHref(agent.mobile),
    emailHref: `mailto:${agent.email}`,
    heroBackgroundUrl: agent.imageUrl.includes("pravatar.cc") ? DEFAULT_HERO_BACKGROUND : agent.imageUrl,
    stats,
    aboutParagraphs: [
      agent.about,
      `${firstName} supports buyers, renters, and investors across Dubai's premium communities with transparent guidance from first viewing through handover.`,
    ],
    policiesParagraphs: [
      "All viewings and offers are handled in line with RERA regulations and agency compliance standards.",
      "Commission structures follow the listing agreement and are disclosed before any formal offer.",
    ],
    socialLinks: DEFAULT_SOCIAL_LINKS,
  }
}
