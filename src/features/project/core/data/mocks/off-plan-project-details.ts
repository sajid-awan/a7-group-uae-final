import { toPropertyDetail } from "@/features/property"
import { HOME_REAL_ESTATE_EXPERTS } from "@/features/home/content/home-real-estate-experts"
import type {
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

const DAMAC_DISTRICT_OVERVIEW: ProjectOverviewBlock[] = [
  {
    title: "Damac District Overview",
    description:
      "Damac District is a contemporary residential destination on Sheikh Zayed Road, pairing bold architecture with curated amenities and skyline views. The development is designed for buyers seeking a connected urban lifestyle with flexible off-plan payment structures.",
  },
  {
    title: "Design & Residences",
    description:
      "Residences feature open-plan layouts, floor-to-ceiling glazing, and refined material palettes. A mix of apartment typologies caters to end-users and investors looking for long-term value in one of Dubai's most visible corridors.",
  },
  {
    title: "Lifestyle & Community",
    description:
      "Residents benefit from wellness facilities, landscaped common areas, and proximity to retail, dining, and business districts — all within minutes of Dubai's landmark destinations.",
  },
]

const THE_HILLGATE_OVERVIEW: ProjectOverviewBlock[] = [
  {
    title: "The Hillgate Overview",
    description:
      "Rising Majestically Along Sheikh Zayed Road, The Hillgate Is Set To Become One Of The Tallest Skyscrapers In The World, Redefining Luxury, Innovation, And Architectural Brilliance. Developed By Azizi Developments, This 725-Meter Masterpiece Is Envisioned As A Symbol Of Dubai's Ever-Evolving Skyline, Blending Opulent Living, World-Class Hospitality, And Premier Commercial Spaces Into One Breathtaking Structure.",
  },
]

const THE_HILLGATE_STORY_SECTIONS: ProjectOverviewBlock[] = [
  {
    title: "A Vision of Unparalleled Grandeur",
    description:
      "Located Along Sheikh Zayed Road, The Hillgate Offers Residents Direct Access To One Of Dubai's Most Dynamic And Future-Oriented Corridors. Home To International Design Studios, Galleries, Cafés, Boutiques, And Creative Spaces, The Surrounding District Presents A Unique Blend Of Lifestyle, Business, And Culture. Its Central Positioning Also Ensures Excellent Connectivity To Downtown Dubai, Business Bay, City Walk, And Dubai International Airport, Making It Ideal For Professionals, Creatives, And Trendsetters Alike.",
  },
  {
    title: "A Lifestyle Above the Clouds",
    description:
      "The Hillgate Features A Striking Architectural Aesthetic That Reflects Its Creative Surroundings. The Development Offers Thoughtfully Designed Residences With Open-Plan Layouts, Contemporary Interiors, And Expansive Windows That Bring In Natural Light And Frame Lively Urban Views. Each Unit Is Crafted To Enhance Comfort And Flexibility, Catering To Modern Lifestyles Whether For Work, Leisure, Or Entertaining.",
  },
  {
    title: "Lifestyle & Community Experience",
    description:
      "True To The Spirit Of Its Sheikh Zayed Road Address, The Hillgate Emphasizes Community And Experience. Residents Can Immerse Themselves In The Neighborhood's Cafés, Gourmet Dining Options, Art Galleries, And Fashion Outlets, All Just Steps Away. The Surrounding Public Spaces, Walkways, And Cultural Venues Foster A Connected, Social Environment Where Work And Lifestyle Blend Effortlessly.",
  },
]

const BAYSTAR_OVERVIEW: ProjectOverviewBlock[] = [
  {
    title: "Baystar by Vida Overview",
    description:
      "Baystar by Vida blends hospitality-inspired interiors with marina-influenced design cues, delivering residences that feel both contemporary and resort-like. The project targets buyers who value brand-led quality and strong location fundamentals.",
  },
  {
    title: "Marina-Inspired Design",
    description:
      "Interiors emphasize light, texture, and efficient planning — with layouts suited to young professionals, couples, and small families seeking a premium urban address.",
  },
  {
    title: "Why Baystar",
    description:
      "Competitive starting prices, structured payment plans, and a clear construction roadmap provide transparency for purchasers comparing waterfront-style communities across Dubai.",
  },
]

const DEFAULT_HIGHLIGHTS: ProjectHighlight[] = [
  { label: "Developer", value: "Azizi" },
  { label: "Status", value: "Off Plan" },
  { label: "Title type", value: "Freehold" },
  { label: "Lifestyle", value: "Luxury Living" },
  { label: "Launch", value: "Q1 2026" },
  { label: "Completion", value: "Q4 2030" },
  { label: "Type", value: "Residential" },
]

const DEFAULT_PAYMENT_PLANS: ProjectPaymentPlan[] = [
  { icon: "installment", percentage: "20%", label: "First Installment" },
  { icon: "construction", percentage: "55%", label: "Under Construction" },
  { icon: "handover", percentage: "25%", label: "On Handover" },
  { icon: "downPayment", percentage: "10%", label: "Down payment" },
]

const DEFAULT_EXPERTS: ProjectExpert[] = HOME_REAL_ESTATE_EXPERTS.slice(0, 4).map((expert) => ({
  id: expert.id,
  name: expert.name,
  role: expert.role,
  imageUrl: expert.imageUrl,
  whatsAppHref: expert.whatsAppHref,
}))

const DEFAULT_LOCATION: ProjectLocation = {
  mapEmbedUrl: buildMapEmbedUrl(DUBAI_MAP_LAT, DUBAI_MAP_LNG),
  latitude: DUBAI_MAP_LAT,
  longitude: DUBAI_MAP_LNG,
  nearby: [
    { label: "11min Burj Khalifa View" },
    { label: "10min Dubai Mall" },
    { label: "8min DIFC" },
    { label: "15min Palm Jumeirah" },
  ],
}

const DEFAULT_AMENITIES = [
  "Luxury Finishing",
  "Gym",
  "Central A/C",
  "CCTV Cameras",
  "Shared Pool",
  "Covered Parking",
  "Landmark View",
  "Play Area",
]

const DEFAULT_TIMELINE: ProjectTimelineItem[] = [
  { date: "March 15, 2022", label: "Project announcement", status: "completed" },
  { date: "June 10, 2024", label: "Construction Started", status: "completed" },
  { date: "Q1 2026", label: "Public Launch", status: "completed" },
  { date: "Q4 2030", label: "Expected Completion", status: "upcoming" },
]

/** Off-plan launch detail overrides — keyed by home carousel property id. */
const OFF_PLAN_DETAIL_BY_ID: Record<string, Partial<PropertyDetailDto>> = {
  "damac-district": {
    overviewSections: DAMAC_DISTRICT_OVERVIEW,
    highlights: DEFAULT_HIGHLIGHTS,
    timeline: DEFAULT_TIMELINE,
    galleryImageUrls: [...GALLERY_IMAGES],
    paymentPlans: DEFAULT_PAYMENT_PLANS,
    experts: DEFAULT_EXPERTS,
    locationMap: DEFAULT_LOCATION,
    amenities: DEFAULT_AMENITIES,
    faq: [
      {
        title: "What is the payment plan for Damac District?",
        content: "Damac District offers a 20 / 40 / 70 payment plan structured across construction milestones through handover in Q3 2030.",
      },
      {
        title: "Where is Damac District located?",
        content: "The development is on Sheikh Zayed Road with direct access to Dubai's business, retail, and leisure districts.",
      },
    ],
  },
  "the-hillgate": {
    overviewSections: THE_HILLGATE_OVERVIEW,
    highlights: DEFAULT_HIGHLIGHTS,
    timeline: DEFAULT_TIMELINE,
    galleryImageUrls: [...GALLERY_IMAGES],
    paymentPlans: DEFAULT_PAYMENT_PLANS,
    experts: DEFAULT_EXPERTS,
    locationMap: DEFAULT_LOCATION,
    amenities: DEFAULT_AMENITIES,
    storySections: THE_HILLGATE_STORY_SECTIONS,
    storyAsideImage: {
      src: "/assets/off-plan/the-hillgate-qr.png",
      alt: "Scan QR code for The Hillgate brochure",
    },
    faq: [],
  },
  "baystar-by-vida": {
    overviewSections: BAYSTAR_OVERVIEW,
    galleryImageUrls: [...GALLERY_IMAGES],
    faq: [
      {
        title: "What makes Baystar by Vida unique?",
        content:
          "Baystar combines Vida-inspired interiors with a prime corridor location, targeting buyers who want design-led off-plan homes.",
      },
      {
        title: "When is handover expected?",
        content: "Handover is scheduled for Q3 2030, subject to construction milestones outlined in the sale agreement.",
      },
    ],
  },
}

function defaultOverview(title: string, description: string): ProjectOverviewBlock[] {
  return [
    { title: `${title} Overview`, description },
    {
      title: "Prime Location & Connectivity",
      description: `Situated in a sought-after Dubai address, ${title} offers excellent connectivity to business districts, retail, dining, and leisure destinations.`,
    },
    {
      title: "Investment & Lifestyle",
      description:
        "Designed with premium finishes and flexible payment plans, the development appeals to buyers seeking long-term value and a refined urban lifestyle.",
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

function offPlanSimilarProjects(currentId: string): PropertyDto[] {
  return MOCK_PROPERTY_DTOS.filter((p) => p.id !== currentId).slice(0, 6)
}

export function getOffPlanProjectDetailDto(id: string): PropertyDetailDto | null {
  const base = MOCK_PROPERTY_DTOS.find((p) => p.id === id)
  if (!base) return null

  const detail = OFF_PLAN_DETAIL_BY_ID[id]
  return {
    ...base,
    ...detail,
    overviewSections: detail?.overviewSections ?? defaultOverview(base.title, base.description),
    highlights: detail?.highlights ?? defaultHighlights(base),
    timeline: detail?.timeline ?? defaultTimeline(base),
    galleryImageUrls: detail?.galleryImageUrls ?? [base.imageUrl, ...GALLERY_IMAGES],
    propertiesForSale: detail?.propertiesForSale ?? MOCK_PROPERTY_DTOS.filter((p) => p.id !== id).slice(0, 4),
    similarProjects: detail?.similarProjects ?? offPlanSimilarProjects(id),
  }
}

/** Off-plan launch detail page (`/off-plan/[id]`) — separate from `/projects/[id]`. */
export function getOffPlanProjectDetail(id: string): PropertyDetail | null {
  const dto = getOffPlanProjectDetailDto(id)
  return dto ? toPropertyDetail(dto) : null
}
