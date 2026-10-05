export type AreaAmenitiesAccordionItem = {
  id: string
  title: string
  description: string
}

export type AreaAmenitiesSectionData = {
  featureTags: string[]
  accordionItems: AreaAmenitiesAccordionItem[]
}

const DEFAULT_FEATURE_TAGS = [
  "High floor",
  "Gym",
  "Central A/C",
  "CCTV Cameras",
  "Shared Pool",
  "Covered Parking",
  "Landmark View",
  "Play Area",
  "Pets Allowed",
  "Fitness Centre",
  "Furnished",
  "Open Kitchen",
  "Security",
  "Elevator",
  "Shared Pool",
  "Upgraded",
]

function buildAccordionItems(areaTitle: string): AreaAmenitiesAccordionItem[] {
  return [
    {
      id: "amenities-overview",
      title: `Amenities in ${areaTitle}`,
      description: `${areaTitle} offers community pools, landscaped parks, retail plazas, and sports facilities across its master plan. Many subcommunities include clubhouses, children's play areas, and 24-hour security.`,
    },
    {
      id: "schools",
      title: `Schools and Nurseries in ${areaTitle}`,
      description: `Families benefit from nurseries and K–12 schools within or near ${areaTitle}, including British and American curriculum options. School buses and after-school programmes are common across villa communities.`,
    },
    {
      id: "hospitals",
      title: `Hospitals and Clinics in ${areaTitle}`,
      description: `Clinics, pharmacies, and dental practices serve daily healthcare needs, with larger hospitals reachable within 15–25 minutes. Emergency services are accessible via major road corridors.`,
    },
    {
      id: "supermarkets",
      title: `Supermarkets in ${areaTitle}`,
      description: `Convenience stores and full-line supermarkets stock international groceries and household essentials. Many residents rely on delivery apps for weekly shopping and fresh produce.`,
    },
    {
      id: "worship",
      title: `Places of Worship in ${areaTitle}`,
      description: `Mosques are located within the community and neighbouring districts, with additional churches and temples available across greater Dubai for multi-faith residents.`,
    },
    {
      id: "salons",
      title: `Beauty Salons in ${areaTitle}`,
      description: `Salons, barbers, and wellness studios operate in community retail centres, offering grooming, spa, and personal-care services without leaving the neighbourhood.`,
    },
  ]
}

export function buildAreaAmenitiesSection(areaTitle: string): AreaAmenitiesSectionData {
  return {
    featureTags: DEFAULT_FEATURE_TAGS,
    accordionItems: buildAccordionItems(areaTitle),
  }
}

export const ARABIAN_RANCHES_AMENITIES_SECTION: AreaAmenitiesSectionData = {
  featureTags: DEFAULT_FEATURE_TAGS,
  accordionItems: [
    {
      id: "amenities-overview",
      title: "Amenities in Arabian Ranches",
      description:
        "Arabian Ranches features community pools, tennis courts, landscaped parks, and the Arabian Ranches Golf Club. Retail centres, cafés, and medical clinics are distributed across subcommunities for everyday convenience.",
    },
    {
      id: "schools",
      title: "Schools and Nurseries in Arabian Ranches",
      description:
        "JESS Arabian Ranches, Ranches Primary School, and several nurseries serve families in and around the community. School transport routes cover most villa clusters.",
    },
    {
      id: "hospitals",
      title: "Hospitals and Clinics in Arabian Ranches",
      description:
        "Mediclinic Parkview Hospital and community clinics in Motor City and Dubai Hills are within a short drive. Pharmacies and dental practices operate in the retail centre.",
    },
    {
      id: "supermarkets",
      title: "Supermarkets in Arabian Ranches",
      description:
        "Carrefour, Spinneys, and convenience stores in Arabian Ranches Retail Centre cover daily groceries. Additional hypermarkets in Motor City and Remal Mall expand choice.",
    },
    {
      id: "worship",
      title: "Places of Worship in Arabian Ranches",
      description:
        "Community mosques are located within Arabian Ranches and neighbouring districts. Churches and temples in greater Dubai are reachable by car for multi-faith families.",
    },
    {
      id: "salons",
      title: "Beauty Salons in Arabian Ranches",
      description:
        "Hair salons, nail studios, and spas operate in the retail centre and nearby Motor City, offering grooming and wellness services for residents.",
    },
  ],
}
