import type { DashboardAgentRow } from "./dashboard-agents-types"
import { slugifyDashboardAgentName } from "@/features/dashboard/utils/dashboard-agent-slug"

function slugEmail(name: string, index: number) {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ".")
    .replace(/^\.+|\.+$/g, "")
  return `${slug || `agent.${index}`}@example.com`
}

const AGENT_NAMES = [
  "AAPL HOLD",
  "Elena Rivers",
  "James Chen",
  "Samantha Smith",
  "Omar Khalil",
  "Layla Hassan",
  "Noah Malik",
  "Maya Patel",
  "Rahul Mehta",
  "Zara Rossi",
  "Alice Chen",
  "Marco Rossi",
  "Phoebe Cormier",
  "Muhammad Talal Khan",
  "Olivia Rhye",
  "Mahmoud Hassan",
  "Sara Hassan",
  "Dr. Arch Toy",
  "Melba Kshlerin Jr.",
  "Aisha Khan",
  "David Okonkwo",
  "Fatima Al Noor",
  "Lucas Berger",
  "Nina Volkov",
  "Tom Bradley",
] as const

const AVATARS = [
  "https://i.pravatar.cc/128?img=12",
  "https://i.pravatar.cc/128?img=32",
  "https://i.pravatar.cc/128?img=47",
  "https://i.pravatar.cc/128?img=68",
  "https://i.pravatar.cc/128?img=15",
  "https://i.pravatar.cc/128?img=25",
  "https://i.pravatar.cc/128?img=36",
  "https://i.pravatar.cc/128?img=44",
] as const

function buildAgent(index: number): DashboardAgentRow {
  const name = AGENT_NAMES[index % AGENT_NAMES.length]
  const listings = 12 + ((index * 7) % 48)
  const leads = 8 + ((index * 5) % 36)
  const calls = 4 + ((index * 3) % 22)
  const whatsapp = 6 + ((index * 4) % 28)
  const isArchived = index % 9 === 0 || index % 11 === 0

  const mobileSuffix = String(4000 + index * 17).slice(-4)
  const mobileMiddle = String(100 + index).padStart(3, "0")

  return {
    id: slugifyDashboardAgentName(name, index),
    name,
    email: slugEmail(name, index),
    mobile: `+97155${mobileMiddle}${mobileSuffix}`,
    whatsappPhone: `+97150${mobileMiddle}${mobileSuffix}`,
    brn: `BRN-${String(100000 + index).slice(-6)}`,
    about: `${name} is a dedicated real estate professional focused on delivering exceptional client service across Dubai's premium communities.`,
    imageUrl: AVATARS[index % AVATARS.length],
    listings,
    leads,
    calls,
    whatsapp,
    isActive: !isArchived && index % 5 !== 0,
    status: isArchived ? "archived" : "active",
  }
}

export const dashboardAgentsMockData: DashboardAgentRow[] = Array.from({ length: 25 }, (_, index) =>
  buildAgent(index)
)
