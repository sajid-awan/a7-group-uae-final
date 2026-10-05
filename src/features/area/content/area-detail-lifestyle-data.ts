const DEFAULT_COMMUNITY_TAGS = [
  "Alma",
  "Al Reem",
  "Aseel",
  "Alvorada",
  "Mirador",
  "Saheel",
  "Palmera",
  "Hattan",
]

export type AreaLifestyleAccordionItem = {
  id: string
  title: string
  description: string
  tags?: string[]
}

export type AreaLifestyleSectionData = {
  items: AreaLifestyleAccordionItem[]
  footerNote?: string
}

function buildAccordionItems(areaTitle: string): AreaLifestyleAccordionItem[] {
  return [
    {
      id: "lifestyle-overview",
      title: `Lifestyle in ${areaTitle}`,
      description: `${areaTitle} is designed around landscaped streets, community parks, and family-oriented amenities. Residents enjoy a suburban pace with quick access to retail, dining, and major highways for commuters.`,
      tags: DEFAULT_COMMUNITY_TAGS,
    },
    {
      id: "landmarks",
      title: `Landmarks and Things to Do in ${areaTitle}`,
      description: `From community clubhouses and sports courts to nearby golf courses and outdoor trails, ${areaTitle} offers year-round activities for families. Weekend markets, equestrian venues, and cultural destinations are within a short drive.`,
    },
    {
      id: "malls",
      title: `Malls in ${areaTitle}`,
      description: `Retail is concentrated in community centres and nearby regional malls, with supermarkets, boutiques, and service providers serving daily needs. Larger fashion and entertainment destinations are reachable within 15–25 minutes by car.`,
    },
    {
      id: "dining",
      title: `Restaurants and Cafes in ${areaTitle}, Dubai`,
      description: `Dining options span casual cafés, family restaurants, and delivery-friendly kitchens across the district. Popular cuisines include Arabic, Indian, and international brands clustered along main boulevards and retail plazas.`,
    },
    {
      id: "hotels",
      title: `Hotels in ${areaTitle}`,
      description: `While ${areaTitle} is primarily residential, business and leisure hotels are available in neighbouring districts for visiting guests. Serviced apartments and short-stay options support extended family visits.`,
    },
    {
      id: "fitness",
      title: "Fitness facilities & Outdoor Activities",
      description: `Community gyms, swimming pools, tennis courts, and jogging tracks are common across master-planned clusters. Cycling paths, football pitches, and children's play areas encourage active outdoor living.`,
    },
    {
      id: "beaches",
      title: `Beaches near ${areaTitle} Community`,
      description: `Coastal beaches and marina promenades are accessible by car, offering water sports, beach clubs, and sunset dining. Many residents plan weekend trips to JBR, Kite Beach, or La Mer within 25–35 minutes.`,
    },
  ]
}

function buildFooterNote(areaTitle: string): string {
  return `${areaTitle} sits within greater Dubai with convenient links to Sheikh Mohammed Bin Zayed Road, Al Khail Road, and other major corridors — connecting residents to business districts, airports, and leisure destinations across the emirate.`
}

export function buildAreaLifestyleSection(areaTitle: string): AreaLifestyleSectionData {
  return {
    items: buildAccordionItems(areaTitle),
    footerNote: buildFooterNote(areaTitle),
  }
}

export const ARABIAN_RANCHES_LIFESTYLE_SECTION: AreaLifestyleSectionData = {
  items: [
    {
      id: "lifestyle-overview",
      title: "Lifestyle in Arabian Ranches",
      description:
        "Arabian Ranches is a mature villa community built around landscaped boulevards, neighbourhood parks, and family amenities. Life here is calm and suburban, with schools, retail, and dining woven through the master plan.",
      tags: DEFAULT_COMMUNITY_TAGS,
    },
    {
      id: "landmarks",
      title: "Landmarks and Things to Do in Arabian Ranches",
      description:
        "Residents enjoy the Arabian Ranches Golf Club, community pools, tennis courts, and equestrian facilities. Seasonal events, outdoor markets, and children's activities are popular across the subcommunities.",
    },
    {
      id: "malls",
      title: "Malls in Arabian Ranches",
      description:
        "Arabian Ranches Retail Centre anchors daily shopping, with additional options at Motor City and City Centre Mirdif a short drive away for fashion, cinema, and larger brand outlets.",
    },
    {
      id: "dining",
      title: "Restaurants and Cafes in Arabian Ranches, Dubai",
      description:
        "Cafés, bakeries, and family restaurants line the retail centre and community plazas. Delivery services are widely available, with diverse cuisines reflecting the area's international resident base.",
    },
    {
      id: "hotels",
      title: "Hotels in Arabian Ranches",
      description:
        "The community is primarily residential; visitors typically stay in nearby Motor City, Studio City, or central Dubai hotels. Serviced apartments in adjacent districts suit longer family stays.",
    },
    {
      id: "fitness",
      title: "Fitness facilities & Outdoor Activities",
      description:
        "Community gyms, pools, and sports courts are common in subcommunities. Jogging tracks, cycling routes, and football pitches support active lifestyles for children and adults.",
    },
    {
      id: "beaches",
      title: "Beaches near Arabian Ranches Community",
      description:
        "JBR Beach, Kite Beach, and La Mer are reachable in roughly 25–35 minutes by car, offering waterfront dining, water sports, and weekend leisure for families.",
    },
  ],
  footerNote:
    "Arabian Ranches is located inland with strong connectivity via Sheikh Mohammed Bin Zayed Road and Umm Suqeim Road, placing Downtown Dubai, Marina, and DXB Airport within practical driving distance for residents.",
}
