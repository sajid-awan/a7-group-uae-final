const AREA_IMAGES = {
  marina: [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  ],
  jbr: [
    "https://images.unsplash.com/photo-1546412414-803781a63b92?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526498460522-9c6c756fa3b1?q=80&w=1200&auto=format&fit=crop",
  ],
  sportsCity: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  ],
  bluewaters: [
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  ],
  lagoons: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
  ],
} as const

export type AgentAreaCommunity = {
  id: string
  title: string
  description: string
  imageUrls: string[]
  stats: { value: string; label: string }[]
}

export type AgentExpertiseArea = {
  id: string
  label: string
  /** Route slug for `/areas/[id]` — defaults to `id` when omitted. */
  detailAreaId?: string
  communities: AgentAreaCommunity[]
}

const MARINA_DESCRIPTION =
  "Dubai Marina is one of the most sought-after waterfront communities in Dubai, offering a vibrant lifestyle with stunning marina views, world-class dining, and excellent connectivity to the rest of the city. The area features a mix of high-rise apartments and penthouses with premium amenities."

function padStat(n: number): string {
  return String(n).padStart(2, "0")
}

function buildMarinaCommunities(areaId: string): AgentAreaCommunity[] {
  const baseStats = [
    { value: padStat(5), label: "For Sale" },
    { value: padStat(8), label: "For Rent" },
    { value: padStat(3), label: "Closed Deals" },
  ]

  return [1, 2, 3].map((n) => ({
    id: `${areaId}-card-${n}`,
    title: "Dubai Marina",
    description: MARINA_DESCRIPTION,
    imageUrls: [...AREA_IMAGES.marina],
    stats: baseStats.map((s) => ({ ...s, value: padStat(Number.parseInt(s.value, 10) + n - 1) })),
  }))
}

function buildCommunity(
  areaId: string,
  title: string,
  description: string,
  imageKey: keyof typeof AREA_IMAGES,
  forSale: number,
  forRent: number,
  closed: number,
  count = 2
): AgentAreaCommunity[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${areaId}-card-${i + 1}`,
    title,
    description,
    imageUrls: [...AREA_IMAGES[imageKey]],
    stats: [
      { value: padStat(forSale + i), label: "For Sale" },
      { value: padStat(forRent + i), label: "For Rent" },
      { value: padStat(closed + i), label: "Closed Deals" },
    ],
  }))
}

const EXPERTISE_AREAS: AgentExpertiseArea[] = [
  {
    id: "dubai-marina",
    label: "Dubai Marina",
    communities: buildMarinaCommunities("dubai-marina"),
  },
  {
    id: "jbr",
    label: "Jumeirah Beach Residence",
    communities: buildCommunity(
      "jbr",
      "Jumeirah Beach Residence",
      "JBR offers beachfront living with direct access to The Walk, premium retail, and a relaxed coastal atmosphere. Popular with end-users and holiday-home investors seeking strong short-term rental demand.",
      "jbr",
      4,
      11,
      6
    ),
  },
  {
    id: "dubai-sports-city",
    detailAreaId: "motor-city",
    label: "Dubai Sports City",
    communities: buildCommunity(
      "dubai-sports-city",
      "Dubai Sports City",
      "A family-friendly community built around sports facilities and academies, with competitive entry prices and steady rental demand from young professionals and sports enthusiasts.",
      "sportsCity",
      7,
      14,
      4
    ),
  },
  {
    id: "bluewaters",
    label: "Bluewaters",
    communities: buildCommunity(
      "bluewaters",
      "Bluewaters",
      "Home to Ain Dubai and curated dining destinations, Bluewaters combines island living with luxury apartments and townhouses, appealing to buyers seeking exclusivity near the coast.",
      "bluewaters",
      3,
      6,
      2
    ),
  },
  {
    id: "damac-lagoons",
    detailAreaId: "damac-hills",
    label: "Damac Lagoons",
    communities: buildCommunity(
      "damac-lagoons",
      "Damac Lagoons",
      "A master-planned villa community inspired by Mediterranean destinations, offering larger plots, lagoon views, and attractive payment plans for families upgrading from apartments.",
      "lagoons",
      9,
      5,
      7,
      3
    ),
  },
]

export function getAgentAreaExpertise(agentId: string): AgentExpertiseArea[] {
  void agentId
  return EXPERTISE_AREAS.map((area) => ({
    ...area,
    communities: area.communities.map((c) => ({ ...c, imageUrls: [...c.imageUrls] })),
  }))
}
