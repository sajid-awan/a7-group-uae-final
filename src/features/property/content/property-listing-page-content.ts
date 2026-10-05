import type { ProjectFaqItem, ProjectOverviewBlock } from "@/features/property"

export const PROPERTY_LISTING_PAGE_TITLE = "Apartments for Sale in Dubai"


/** Blurred hero behind the listing search bar. */
export const PROPERTY_LISTING_SEARCH_HERO_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop"

export type PropertyListingLocationLink = {
  name: string
  count: number
}

export const PROPERTY_LISTING_LOCATION_LINKS: PropertyListingLocationLink[] = [
  { name: "Dubai", count: 88_821 },
  { name: "Ajman", count: 17_697 },
  { name: "Sharjah", count: 9_996 },
  { name: "Abu Dhabi", count: 6_057 },
  { name: "Ras Al Khaimah", count: 4_892 },
  { name: "Umm Al Quwain", count: 2_156 },
  { name: "Al Ain", count: 1_987 },
  { name: "Fujairah", count: 1_234 },
  { name: "Al Hamra Village", count: 987 },
  { name: "Jumeirah Village Circle", count: 12_450 },
]

export const PROPERTY_LISTING_AREA_PILLS = [
  "Downtown Dubai",
  "Business Bay",
  "Dubai Marina",
  "Dubai Creek Harbour",
  "Bluewaters Island",
  "Dubai Hills Estate",
  "Palm Jumeirah",
] as const

export const PROPERTY_LISTING_SEO_SECTIONS: ProjectOverviewBlock[] = [
  {
    title: "Discover Dubai apartment prices and communities",
    description:
      "Dubai offers a wide range of apartments across established and emerging communities — from waterfront towers in Dubai Marina to family-friendly mid-rise buildings in JVC. Browse verified listings with transparent pricing, floor plans, and agent contact options on A Seven Properties.",
  },
  {
    title: "Why buy an apartment in Dubai?",
    description:
      "Freehold ownership, strong rental yields, and world-class infrastructure make Dubai one of the most active apartment markets in the region. Whether you are an end-user or investor, our advisors help you compare communities, service charges, and handover timelines before you shortlist.",
  },
  {
    title: "How we help you find the right home",
    description:
      "Use the search bar to filter by location, price, beds, and property type. Save favourites, share listings with family, and connect directly with our brokers via call, email, or WhatsApp — all from a single listing card.",
  },
]

export const PROPERTY_LISTING_FAQ_ITEMS: ProjectFaqItem[] = [
  {
    title: "What documents do I need to buy an apartment in Dubai?",
    content:
      "Typically you need a valid passport, Emirates ID (if resident), proof of funds or mortgage pre-approval, and a signed Form F (MOU) with the seller. Our team guides you through DLD registration and trustee office steps.",
  },
  {
    title: "Can foreigners own apartments in Dubai?",
    content:
      "Yes — non-UAE nationals can own freehold property in designated areas. Leasehold options also exist in select zones. We confirm eligibility for each listing before you make an offer.",
  },
  {
    title: "What are typical service charges for apartments?",
    content:
      "Service charges vary by building and community, often ranging from roughly AED 12–25 per sqft annually. We provide estimated OPEX for shortlisted properties so you can compare total cost of ownership.",
  },
  {
    title: "How long does the buying process take?",
    content:
      "Cash purchases can complete in as little as two to four weeks after agreement. Mortgaged transactions may take longer depending on bank valuation and approval timelines.",
  },
  {
    title: "Do you list off-plan and ready apartments?",
    content:
      "Yes. This page focuses on ready and resale apartments; explore Off-plan and New Projects from the main navigation for launches and payment plans.",
  },
]
