import type { DashboardAgentRow } from "./dashboard-agents-types"
import { DASHBOARD_AGENT_PLATFORM_LOGOS } from "@/features/dashboard/utils/dashboard-agent-platform-badges"
import { formatLeadUpdatedOn } from "@/features/dashboard/content/dashboard-lead-ui"

export type DashboardLeadChannel = "Whatsapp" | "Call"

export type DashboardLeadPipelineStage =
  | "New Lead"
  | "Not Reach"
  | "Lost Deal"
  | "Not Respond"
  | "Qualified"
  | "Closed"

export type DashboardAgentLeadRow = {
  id: string
  name: string
  phone: string
  avatarUrl: string
  channel: DashboardLeadChannel
  source: string
  sourceLogo?: string
  budget: string
  leadType: string
  pipelineStage: DashboardLeadPipelineStage
  updatedDays: number
  /** @deprecated Use `updatedDays` with `formatLeadUpdatedOn` */
  updatedAgo: string
}

const AVATARS = [
  "https://i.pravatar.cc/96?img=12",
  "https://i.pravatar.cc/96?img=32",
  "https://i.pravatar.cc/96?img=47",
  "https://i.pravatar.cc/96?img=68",
  "https://i.pravatar.cc/96?img=15",
  "https://i.pravatar.cc/96?img=25",
] as const

const SOURCES = [
  { name: "Bayut", logo: DASHBOARD_AGENT_PLATFORM_LOGOS.logo2 },
  { name: "Propertyfinder", logo: DASHBOARD_AGENT_PLATFORM_LOGOS.logo1 },
  { name: "Dubizzle", logo: DASHBOARD_AGENT_PLATFORM_LOGOS.logo3 },
  { name: "Instagram", logo: undefined },
  { name: "Facebook", logo: undefined },
] as const

const LEAD_TYPES = [
  "Start",
  "Rentals",
  "Buyer Secondary",
  "Seller Secondary",
  "Off-Plan",
  "Company Pool",
] as const

const PIPELINE_STAGES: DashboardLeadPipelineStage[] = [
  "New Lead",
  "Not Reach",
  "Lost Deal",
  "Not Respond",
  "Qualified",
  "Closed",
]

const LEAD_NAMES = [
  "Elvira Abernathy MD",
  "Angela Anderson",
  "Ahmed Al Mansoori",
  "Sarah Johnson",
  "Mohammed Khan",
  "Emily Chen",
  "Omar Hassan",
  "Priya Patel",
  "Lucas Berger",
  "Fatima Al Noor",
  "David Okonkwo",
  "Nina Volkov",
  "Zara Rossi",
  "Tom Bradley",
  "Maya Patel",
  "James Wilson",
  "Layla Hassan",
  "Noah Malik",
  "Alice Chen",
  "Marco Rossi",
  "Rahul Mehta",
] as const

function hashAgentId(id: string): number {
  let hash = 0
  for (let i = 0; i < id.length; i += 1) {
    hash = (hash * 31 + id.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

function buildPhone(index: number, h: number): string {
  const suffix = String(5000000 + ((index + h) * 173) % 10000000).slice(-7)
  return `+971${suffix}`
}

function buildBudget(index: number, h: number): string {
  const value = 25 + ((index + h) % 180)
  return `${value}k`
}

function buildUpdatedDays(index: number, h: number): number {
  return 1 + ((index + h) % 45)
}

export function getDashboardAgentLeads(agent: DashboardAgentRow): DashboardAgentLeadRow[] {
  const h = hashAgentId(agent.id)
  const count = Math.max(agent.leads, 24)

  return Array.from({ length: count }, (_, index) => {
    const source = SOURCES[(index + h) % SOURCES.length]
    const updatedDays = buildUpdatedDays(index, h)

    return {
      id: `${agent.id}-lead-${index + 1}`,
      name: LEAD_NAMES[(index + h) % LEAD_NAMES.length],
      phone: buildPhone(index, h),
      avatarUrl: AVATARS[(index + h) % AVATARS.length],
      channel: (index + h) % 3 === 0 ? "Call" : "Whatsapp",
      source: source.name,
      sourceLogo: source.logo,
      budget: buildBudget(index, h),
      leadType: LEAD_TYPES[(index + h) % LEAD_TYPES.length],
      pipelineStage: PIPELINE_STAGES[(index + h) % PIPELINE_STAGES.length],
      updatedDays,
      updatedAgo: formatLeadUpdatedOn(updatedDays),
    }
  })
}

export function filterDashboardAgentLeads(leads: DashboardAgentLeadRow[], query: string): DashboardAgentLeadRow[] {
  const normalizedQuery = query.trim().toLowerCase()
  if (!normalizedQuery) return leads

  return leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(normalizedQuery) ||
      lead.phone.includes(normalizedQuery) ||
      lead.source.toLowerCase().includes(normalizedQuery) ||
      lead.pipelineStage.toLowerCase().includes(normalizedQuery)
  )
}

export function filterDashboardAgentLeadsByStage(
  leads: DashboardAgentLeadRow[],
  leadStage: string
): DashboardAgentLeadRow[] {
  if (!leadStage || leadStage === "all") return leads
  return leads.filter((lead) => lead.leadType === leadStage)
}

export function filterDashboardAgentLeadsByPipeline(
  leads: DashboardAgentLeadRow[],
  pipelineStage: string
): DashboardAgentLeadRow[] {
  if (!pipelineStage || pipelineStage === "all") return leads
  return leads.filter((lead) => lead.pipelineStage === pipelineStage)
}

export const dashboardLeadPipelineStageClassName: Record<DashboardLeadPipelineStage, string> = {
  "New Lead": "border-sky-200 bg-sky-50 text-sky-700",
  "Not Reach": "border-rose-200 bg-rose-50 text-rose-700",
  "Lost Deal": "border-amber-200 bg-amber-50 text-amber-700",
  "Not Respond": "border-neutral-200 bg-neutral-100 text-neutral-600",
  Qualified: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Closed: "border-emerald-200 bg-emerald-50 text-emerald-800",
}

export const dashboardLeadChannelClassName: Record<DashboardLeadChannel, string> = {
  Whatsapp: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Call: "border-sky-200 bg-sky-50 text-sky-700",
}
