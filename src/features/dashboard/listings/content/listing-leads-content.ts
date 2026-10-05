import { DASHBOARD_AGENT_PLATFORM_LOGOS } from "@/features/dashboard/utils/dashboard-agent-platform-badges"

import type { DashboardListing } from "./listings-types"
import type { DashboardListingLead } from "./listing-leads-types"

const LISTING_LEAD_NAMES = [
  "Mercedes Huels",
  "Mrs. Hope Conn",
  "Dr. Autumn Senger",
  "Mr. Cassius Anderson Jr.",
  "Mr. Kia McClure",
  "Glenda Lebsack",
  "Mr. Leslie Lehner",
  "Ms. Rebekah Cremin",
] as const

const LISTING_LEAD_PORTALS = [
  { label: "Bayut", logo: DASHBOARD_AGENT_PLATFORM_LOGOS.logo2 },
  { label: "Fam Properties", logo: DASHBOARD_AGENT_PLATFORM_LOGOS.logo1 },
  { label: "Property Finder", logo: DASHBOARD_AGENT_PLATFORM_LOGOS.logo1 },
  { label: "Dubizzle", logo: DASHBOARD_AGENT_PLATFORM_LOGOS.logo3 },
] as const

const UPDATED_AGO_LABELS = ["2h ago", "3h ago", "5h ago", "8h ago", "12h ago", "1d ago"] as const

function hashListingId(id: string): number {
  let hash = 0
  for (let i = 0; i < id.length; i += 1) {
    hash = (hash * 31 + id.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

function buildLeadPhone(index: number, hash: number): string {
  const suffix = String(564043138 + ((index + hash) * 97) % 9000000).slice(-9)
  return `+971${suffix}`
}

function buildContactHref(channel: DashboardListingLead["contactChannel"], phone: string, name: string) {
  if (channel === "gmail") {
    return `https://mail.google.com/mail/?view=cm&su=${encodeURIComponent(`Lead: ${name}`)}&body=${encodeURIComponent(`Hi ${name},`)}`
  }

  const digits = phone.replace(/\D/g, "")
  return `https://wa.me/${digits}?text=${encodeURIComponent(`Hi ${name}, regarding your inquiry`)}`
}

export function getDashboardListingLeads(listing: DashboardListing): DashboardListingLead[] {
  const hash = hashListingId(listing.id)

  return LISTING_LEAD_NAMES.map((name, index) => {
    const portal = LISTING_LEAD_PORTALS[(index + hash) % LISTING_LEAD_PORTALS.length]!
    const phone = buildLeadPhone(index, hash)
    const contactChannel: DashboardListingLead["contactChannel"] =
      (index + hash) % 4 === 0 ? "gmail" : "whatsapp"

    return {
      id: `${listing.id}-lead-${index + 1}`,
      name,
      phone,
      portalLabel: portal.label,
      portalLogo: portal.logo,
      contactChannel,
      updatedAgo: UPDATED_AGO_LABELS[(index + hash) % UPDATED_AGO_LABELS.length]!,
      contactHref: buildContactHref(contactChannel, phone, name),
    }
  })
}
