import { MARKETING_PORTRAIT_PLACEHOLDER } from "@/shared/content/marketing/marketing-media"
import { agentProfilePath, agentsPath } from "@/shared/lib/constants/routes"
import type { ProjectOverviewBlock } from "@/features/property"
import type { RealEstateAgentProfile } from "@/features/agent/core/domain/entity/agent.entity"

export type { RealEstateAgentProfile }

export const AGENTS_PAGE_TITLE = "Top Real Estate Agents in Dubai"

const PORTRAITS = {
  a: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  b: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  c: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  d: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  e: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  f: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
} as const

const AGENT_EXPERTISE_AREA_POOL = [
  "Dubai Marina",
  "Downtown Dubai",
  "Business Bay",
  "Palm Jumeirah",
  "Jumeirah Village Circle",
  "Dubai Creek Harbour",
  "Mohammed Bin Rashid City",
  "Dubai Hills Estate",
  "Arabian Ranches",
  "Damac Lagoons",
] as const

function expertiseAreasForAgentIndex(index: number): string[] {
  return [
    AGENT_EXPERTISE_AREA_POOL[index % AGENT_EXPERTISE_AREA_POOL.length],
    AGENT_EXPERTISE_AREA_POOL[(index + 4) % AGENT_EXPERTISE_AREA_POOL.length],
  ]
}

const REAL_ESTATE_AGENTS_BASE = [
  {
    id: "samantha-smith",
    name: "Samantha Smith",
    subtitle: "Senior Property Consultant",
    languages: "English, Arabic, Russian",
    imageUrl: MARKETING_PORTRAIT_PLACEHOLDER,
    roleBadge: "Active Broker",
    showRankMedal: true,
    whatsAppHref: "https://wa.me/971500000101",
    profileHref: agentProfilePath("samantha-smith"),
  },
  {
    id: "james-chen",
    name: "James Chen",
    subtitle: "Luxury Sales Director",
    languages: "English, Mandarin",
    imageUrl: PORTRAITS.a,
    roleBadge: "Active Broker",
    showRankMedal: true,
    whatsAppHref: "https://wa.me/971500000102",
    profileHref: agentProfilePath("james-chen"),
  },
  {
    id: "fatima-al-hassan",
    name: "Fatima Al Hassan",
    subtitle: "Off-plan Specialist",
    languages: "English, Arabic, French",
    imageUrl: PORTRAITS.c,
    roleBadge: "Active Broker",
    showRankMedal: true,
    whatsAppHref: "https://wa.me/971500000103",
    profileHref: agentProfilePath("fatima-al-hassan"),
  },
  {
    id: "marcus-weber",
    name: "Marcus Weber",
    subtitle: "Investment Advisor",
    languages: "English, German",
    imageUrl: PORTRAITS.b,
    roleBadge: "Active Broker",
    showRankMedal: true,
    whatsAppHref: "https://wa.me/971500000104",
    profileHref: agentProfilePath("marcus-weber"),
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    subtitle: "Residential Leasing Lead",
    languages: "English, Hindi, Urdu",
    imageUrl: PORTRAITS.d,
    roleBadge: "Active Broker",
    whatsAppHref: "https://wa.me/971500000105",
    profileHref: agentProfilePath("priya-sharma"),
  },
  {
    id: "omar-khalil",
    name: "Omar Khalil",
    subtitle: "Commercial Broker",
    languages: "English, Arabic",
    imageUrl: PORTRAITS.e,
    roleBadge: "Active Broker",
    whatsAppHref: "https://wa.me/971500000106",
    profileHref: agentProfilePath("omar-khalil"),
  },
  {
    id: "elena-volkova",
    name: "Elena Volkova",
    subtitle: "Waterfront Specialist",
    languages: "English, Russian",
    imageUrl: PORTRAITS.f,
    roleBadge: "Active Broker",
    whatsAppHref: "https://wa.me/971500000107",
    profileHref: agentProfilePath("elena-volkova"),
  },
  {
    id: "david-oconnor",
    name: "David O'Connor",
    subtitle: "Villa & Estate Advisor",
    languages: "English, Irish",
    imageUrl: "https://i.pravatar.cc/400?img=12",
    roleBadge: "Active Broker",
    whatsAppHref: "https://wa.me/971500000108",
    profileHref: agentProfilePath("david-oconnor"),
  },
  {
    id: "laurie-lowe",
    name: "Laurie Lowe",
    subtitle: "Luxury Villa Specialist",
    languages: "English, Arabic",
    imageUrl: PORTRAITS.c,
    roleBadge: "Active Broker",
    whatsAppHref: "https://wa.me/971500000005",
    profileHref: agentProfilePath("laurie-lowe"),
  },
  {
    id: "megan-fox",
    name: "Megan Fox",
    subtitle: "Off-plan Consultant",
    languages: "English, Spanish",
    imageUrl: PORTRAITS.d,
    roleBadge: "Active Broker",
    whatsAppHref: "https://wa.me/971500000006",
    profileHref: agentProfilePath("megan-fox"),
  },
  {
    id: "raul-fisher",
    name: "Raul Fisher",
    subtitle: "Investment Advisor",
    languages: "English, Portuguese",
    imageUrl: "https://i.pravatar.cc/400?img=12",
    roleBadge: "Active Broker",
    whatsAppHref: "https://wa.me/971500000007",
    profileHref: agentProfilePath("raul-fisher"),
  },
  {
    id: "darlene-gerhold",
    name: "Darlene Gerhold",
    subtitle: "Furnished Rentals Expert",
    languages: "English, German",
    imageUrl: "https://i.pravatar.cc/400?img=32",
    roleBadge: "Active Broker",
    whatsAppHref: "https://wa.me/971500000008",
    profileHref: agentProfilePath("darlene-gerhold"),
  },
  {
    id: "abduil-qais",
    name: "Abduil Qais",
    subtitle: "Senior Property Advisor",
    languages: "English, Arabic, Hindi",
    imageUrl: "https://i.pravatar.cc/400?img=47",
    roleBadge: "Active Broker",
    whatsAppHref: "https://wa.me/971500000009",
    profileHref: agentProfilePath("abduil-qais"),
  },
  {
    id: "jessica-mercedes",
    name: "Jessica Mercedes",
    subtitle: "Commercial Leasing",
    languages: "English, French",
    imageUrl: PORTRAITS.f,
    roleBadge: "Active Broker",
    whatsAppHref: "https://wa.me/971500000010",
    profileHref: agentProfilePath("jessica-mercedes"),
  },
  {
    id: "ronnie-volkman",
    name: "Ronnie Volkman",
    subtitle: "Senior Property Advisor",
    languages: "English, Arabic",
    imageUrl: PORTRAITS.a,
    roleBadge: "Active Broker",
    whatsAppHref: "https://wa.me/971500000001",
    profileHref: agentProfilePath("ronnie-volkman"),
  },
  {
    id: "siddharth-shahi",
    name: "Siddharth Shahi",
    subtitle: "Senior Property Consultant",
    languages: "English, Hindi, Punjabi",
    imageUrl: PORTRAITS.b,
    roleBadge: "Active Broker",
    whatsAppHref: "https://wa.me/971500000116",
    profileHref: agentProfilePath("siddharth-shahi"),
  },
  {
    id: "renee-williams",
    name: "Renee Williams",
    subtitle: "Sales Director",
    languages: "Arabic, English, Hindi",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    roleBadge: "Sales Director",
    showRankMedal: true,
    whatsAppHref: "https://wa.me/971503928461",
    profileHref: agentProfilePath("renee-williams"),
  },
  {
    id: "jasmine-coleman",
    name: "Jasmine Coleman",
    subtitle: "Sales Director",
    languages: "Arabic, English, Hindi",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    roleBadge: "Sales Director",
    showRankMedal: true,
    whatsAppHref: "https://wa.me/971503928461",
    profileHref: agentProfilePath("jasmine-coleman"),
  },
  {
    id: "michael-clarkson",
    name: "Michael Clarkson",
    subtitle: "Sales Director",
    languages: "Arabic, English, Hindi",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    roleBadge: "Sales Director",
    showRankMedal: true,
    whatsAppHref: "https://wa.me/971503928461",
    profileHref: agentProfilePath("michael-clarkson"),
  },
  {
    id: "naomi-williams",
    name: "Naomi Williams",
    subtitle: "Sales Director",
    languages: "Arabic, English, Hindi",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    roleBadge: "Sales Director",
    showRankMedal: true,
    whatsAppHref: "https://wa.me/971503928461",
    profileHref: agentProfilePath("naomi-williams"),
  },
] as const

export const REAL_ESTATE_AGENTS: RealEstateAgentProfile[] = REAL_ESTATE_AGENTS_BASE.map(
  (agent, index) => ({
    ...agent,
    expertiseAreas: expertiseAreasForAgentIndex(index),
  })
)

export const AGENTS_PAGE_SEO_SECTIONS: ProjectOverviewBlock[] = [
  {
    title: "Discover Dubai apartments prices in top performing areas",
    description:
      "Work with licensed brokers who know community-level pricing, service charges, and rental yields. Our top agents cover Downtown Dubai, Dubai Marina, Business Bay, Palm Jumeirah, and emerging corridors — so you can compare areas before you shortlist properties.",
  },
  {
    title: "Prime Urban Location",
    description:
      "Whether you are buying, renting, or investing off-plan, the right advisor saves time on viewings, negotiations, and paperwork. Filter by language, specialization, and availability, then connect instantly via WhatsApp or view a full profile.",
  },
]

/** Short trail — full page title lives in the `<h1>` below. */
export const AGENTS_PAGE_BREADCRUMBS = [
  { kind: "home" as const, href: "/" },
  { kind: "link" as const, href: agentsPath(), label: "Real Estate Agents" },
  { kind: "current" as const, label: "Dubai" },
]
