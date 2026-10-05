import { agentProfilePath } from "@/shared/lib/constants/routes"

export const AGENT_PROFILE_NAV_ITEMS = [
  { slug: "about", label: "About me", segment: "" },
  { slug: "listings", label: "All Listings", segment: "listings" },
  { slug: "transactions", label: "Transactions", segment: "transactions" },
  { slug: "area-expertise", label: "Area Expertise", segment: "area-expertise" },
  { slug: "off-plan", label: "Off-Plan Projects", segment: "off-plan" },
  { slug: "contact", label: "Get in Touch", segment: "contact" },
] as const

export type AgentProfileNavSlug = (typeof AGENT_PROFILE_NAV_ITEMS)[number]["slug"]

export function agentProfileSectionPath(agentId: string, segment: string) {
  if (!segment) return agentProfilePath(agentId)
  return `${agentProfilePath(agentId)}/${segment}`
}

export function getAgentProfileNavHref(agentId: string, segment: string) {
  return agentProfileSectionPath(agentId, segment)
}

/** Returns nav slug for the current pathname under `/agents/[id]`. */
export function getActiveAgentProfileNavSlug(pathname: string, agentId: string): AgentProfileNavSlug {
  const base = agentProfilePath(agentId)
  if (pathname === base || pathname === `${base}/`) return "about"

  for (const item of AGENT_PROFILE_NAV_ITEMS) {
    if (!item.segment) continue
    if (pathname === `${base}/${item.segment}` || pathname.startsWith(`${base}/${item.segment}/`)) {
      return item.slug
    }
  }

  return "about"
}
