import { toPropertyDetail } from "@/features/property"
import { HOME_REAL_ESTATE_EXPERTS } from "@/features/home/content/home-real-estate-experts"
import type {
  ProjectFaqItem,
  ProjectHighlight,
  ProjectLocation,
  ProjectOverviewBlock,
  ProjectPaymentPlan,
  ProjectExpert,
  ProjectTimelineItem,
  PropertyDetail,
  PropertyDetailDto,
  PropertyDto,
} from "@/features/property"

import { MOCK_PROPERTY_DTOS } from "@/features/property/core/data/mocks/properties"

const DUBAI_MAP_LAT = 25.1972
const DUBAI_MAP_LNG = 55.2719

function buildMapEmbedUrl(lat: number, lng: number) {
  return `https://www.google.com/maps?q=${lat},${lng}&hl=en&z=14&output=embed`
}

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop",
] as const

const BURJ_AZIZI_OVERVIEW: ProjectOverviewBlock[] = [
  {
    title: "Burj Azizi Overview",
    description:
      "Burj Azizi is set to become the world's second-tallest tower and a defining landmark on Sheikh Zayed Road. This ultra-luxury development by Azizi Developments will offer premium residences, world-class amenities, and panoramic views across Dubai's skyline — crafted for discerning buyers seeking iconic living.",
  },
  {
    title: "A Vision of Unparalleled Grandeur",
    description:
      "Rising above the city, Burj Azizi embodies architectural excellence with refined interiors, private elevators, and bespoke finishes. Every residence is designed to deliver an elevated standard of comfort, privacy, and sophistication at the heart of Dubai.",
  },
  {
    title: "A Lifestyle Above the Clouds",
    description:
      "Residents enjoy exclusive access to sky lounges, infinity pools, wellness facilities, and curated concierge services. From fine dining to landscaped retreats, the tower offers a complete lifestyle ecosystem within one address.",
  },
  {
    title: "Lifestyle & Community Experience",
    description:
      "Beyond the residences, Burj Azizi fosters a vibrant community with retail, hospitality, and leisure destinations at its base — connecting residents to Dubai's most dynamic districts while preserving a sense of sanctuary above the clouds.",
  },
]

const BURJ_AZIZI_HIGHLIGHTS: ProjectHighlight[] = [
  { label: "Developer", value: "Azizi" },
  { label: "Status", value: "Off Plan" },
  { label: "Title type", value: "Freehold" },
  { label: "Lifestyle", value: "Luxury Living" },
  { label: "Launch", value: "Q1 2026" },
  { label: "Completion", value: "Q4 2030" },
  { label: "Type", value: "Residential" },
]

const BURJ_AZIZI_PAYMENT_PLANS: ProjectPaymentPlan[] = [
  { icon: "installment", percentage: "20%", label: "First Installment" },
  { icon: "construction", percentage: "55%", label: "Under Construction" },
  { icon: "handover", percentage: "25%", label: "On Handover" },
  { icon: "downPayment", percentage: "10%", label: "Down payment" },
]

const BURJ_AZIZI_EXPERTS: ProjectExpert[] = HOME_REAL_ESTATE_EXPERTS.slice(0, 4).map((expert) => ({
  id: expert.id,
  name: expert.name,
  role: expert.role,
  imageUrl: expert.imageUrl,
  whatsAppHref: expert.whatsAppHref,
}))

const BURJ_AZIZI_LOCATION: ProjectLocation = {
  mapEmbedUrl: buildMapEmbedUrl(DUBAI_MAP_LAT, DUBAI_MAP_LNG),
  latitude: DUBAI_MAP_LAT,
  longitude: DUBAI_MAP_LNG,
  nearby: [
    { label: "11min Burj Khalifa View" },
    { label: "10min Burj Khalifa View" },
    { label: "8min Dubai Mall" },
    { label: "12min DIFC" },
    { label: "15min Palm Jumeirah" },
  ],
}

const BURJ_AZIZI_AMENITIES = [
  "Luxury Finishing",
  "Gym",
  "Central A/C",
  "CCTV Cameras",
  "Shared Pool",
  "Covered Parking",
  "Landmark View",
  "Play Area",
]

const BURJ_AZIZI_FAQ: ProjectFaqItem[] = [
  {
    title: "Where is the location of The Edit At D3?",
    content:
      "The Edit At D3 is located in Dubai Design District (d3), one of Dubai's most vibrant creative communities. It offers easy access to major city attractions, retail, dining, and business hubs.",
  },
  {
    title: "What is the starting price for properties in The Edit At D3?",
    content:
      "Properties at The Edit At D3 start from AED 1.8M, with a range of apartment types available including studios, one, two, and three-bedroom units.",
  },
  {
    title: "What are the property types offered in The Edit At D3?",
    content:
      "The Edit At D3 offers a curated selection of studio, 1-bedroom, 2-bedroom, and 3-bedroom apartments, all featuring premium finishes and modern open-plan designs.",
  },
]

const BURJ_AZIZI_TIMELINE: ProjectTimelineItem[] = [
  { date: "March 15, 2022", label: "Project announcement", status: "completed" },
  { date: "June 10, 2024", label: "Construction Started", status: "completed" },
  { date: "Q1 2026", label: "Public Launch", status: "completed" },
  { date: "Q4 2030", label: "Expected Completion", status: "upcoming" },
]

/** Detail-only fields keyed by property id. */
const PROJECT_DETAIL_BY_ID: Record<
  string,
  Partial<PropertyDetailDto>
> = {
  "damac-district": {
    overviewSections: BURJ_AZIZI_OVERVIEW,
    highlights: BURJ_AZIZI_HIGHLIGHTS,
    timeline: BURJ_AZIZI_TIMELINE,
    galleryImageUrls: [...GALLERY_IMAGES],
    paymentPlans: BURJ_AZIZI_PAYMENT_PLANS,
    experts: BURJ_AZIZI_EXPERTS,
    locationMap: BURJ_AZIZI_LOCATION,
    amenities: BURJ_AZIZI_AMENITIES,
    faq: BURJ_AZIZI_FAQ,
    propertiesForSale: MOCK_PROPERTY_DTOS.filter((p) => p.id !== "damac-district").slice(0, 4),
    similarProjects: MOCK_PROPERTY_DTOS.filter((p) => p.id !== "damac-district").slice(0, 6),
  },
}

function defaultOverview(title: string, description: string): ProjectOverviewBlock[] {
  return [
    { title: `${title} Overview`, description },
    {
      title: "Prime Location & Connectivity",
      description: `Situated in a sought-after Dubai address, ${title} offers excellent connectivity to business districts, retail, dining, and leisure destinations — making it ideal for investors and end-users alike.`,
    },
    {
      title: "Investment & Lifestyle",
      description:
        "Designed with premium finishes and flexible payment plans, the development appeals to buyers seeking long-term value, rental yield potential, and a refined urban lifestyle.",
    },
  ]
}

function defaultHighlights(dto: PropertyDto): ProjectHighlight[] {
  return [
    { label: "Developer", value: dto.developer },
    { label: "Status", value: "Off Plan" },
    { label: "Title type", value: "Freehold" },
    { label: "Payment Plan", value: dto.paymentPlan },
    { label: "Handover", value: dto.handover.replace(/^Handover\s*/i, "") },
    { label: "Starting Price", value: dto.priceFrom },
    { label: "Type", value: "Residential" },
  ]
}

function defaultTimeline(dto: PropertyDto): ProjectTimelineItem[] {
  return [
    { date: "2022", label: "Project announced", status: "completed" },
    { date: "2024", label: "Construction commenced", status: "completed" },
    { date: "2026", label: "Sales launch", status: "completed" },
    { date: dto.handover.replace(/^Handover\s*/i, ""), label: "Expected handover", status: "upcoming" },
  ]
}

/** Returns a full property DTO with detail fields for the project detail page. */
export function getMockPropertyDetailDto(id: string): PropertyDetailDto | null {
  const base = MOCK_PROPERTY_DTOS.find((p) => p.id === id)
  if (!base) return null

  const detail = PROJECT_DETAIL_BY_ID[id]
  return {
    ...base,
    ...detail,
    overviewSections: detail?.overviewSections ?? defaultOverview(base.title, base.description),
    highlights: detail?.highlights ?? defaultHighlights(base),
    timeline: detail?.timeline ?? defaultTimeline(base),
    galleryImageUrls: detail?.galleryImageUrls ?? [base.imageUrl, ...GALLERY_IMAGES],
  }
}

export function getMockPropertyDetailDtos(): PropertyDetailDto[] {
  return MOCK_PROPERTY_DTOS.map((p) => getMockPropertyDetailDto(p.id)!)
}

/** Frontend mock — project detail page data keyed by route id. */
export function getProjectDetail(id: string): PropertyDetail | null {
  const dto = getMockPropertyDetailDto(id)
  return dto ? toPropertyDetail(dto) : null
}
