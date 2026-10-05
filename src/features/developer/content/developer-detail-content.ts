import { getMockPropertyDtos } from "@/features/property/core/data/mocks/properties"
import {
  DEVELOPERS_PAGE_FAQ_ITEMS,
  DEVELOPERS_PAGE_FAQ_TITLE,
  DEVELOPERS_PAGE_SEO_SECTIONS,
  DEVELOPERS_PAGE_TITLE,
  DUBAI_DEVELOPERS,
  type DubaiDeveloperProfile,
} from "@/features/developer/content/developers-page-content"
import { PROPERTY_LISTING_SEARCH_HERO_IMAGE } from "@/features/property/content/property-listing-page-content"
import { developersPath } from "@/shared/lib/constants/routes"
import type { BreadcrumbItem } from "@/shared/ui/breadcrumb"
import type { ProjectFaqItem, ProjectOverviewBlock } from "@/features/property"

export type DeveloperMapMarkerPosition = {
  /** Horizontal position on the map overlay (0–100). */
  left: number
  /** Vertical position on the map overlay (0–100). */
  top: number
}

export type DeveloperOffPlanProject = {
  id: string
  imageUrls: string[]
  propertyTypes: string
  title: string
  price: string
  location: string
  bedroomSummary: string
  description: string
  paymentPlan: string
  handover: string
  mapPosition?: DeveloperMapMarkerPosition
}

/** Scatter markers across the Dubai map overlay (percent-based). */
export const DEVELOPER_MAP_MARKER_POSITIONS: readonly DeveloperMapMarkerPosition[] = [
  { left: 44, top: 42 },
  { left: 62, top: 48 },
  { left: 36, top: 54 },
  { left: 52, top: 35 },
  { left: 28, top: 44 },
  { left: 70, top: 40 },
  { left: 48, top: 58 },
  { left: 38, top: 32 },
  { left: 58, top: 62 },
  { left: 45, top: 50 },
  { left: 33, top: 47 },
  { left: 55, top: 44 },
  { left: 64, top: 55 },
  { left: 41, top: 38 },
  { left: 50, top: 52 },
] as const

export type DeveloperDetail = DubaiDeveloperProfile & {
  pageTitle: string
  intro: readonly [string, string]
  heroBackgroundUrl: string
  searchPlaceholder: string
  seoSections: ProjectOverviewBlock[]
  faqTitle: string
  faq: ProjectFaqItem[]
}

const GALLERY = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1800&auto=format&fit=crop",
] as const

const DEFAULT_PROJECT_DESCRIPTION =
  "Premium off-plan residences with flexible payment plans, branded amenities, and strong end-user demand. Register your interest for launch allocations, floor plans, and developer incentives."

const DEVELOPER_PROJECT_TEMPLATES: Record<
  string,
  Partial<DeveloperOffPlanProject>[]
> = {
  emaar: [
    {
      title: "Golf Vedo at Emaar South",
      propertyTypes: "Villa, Apartment",
      price: "AED 25,000,000",
      location: "Emaar South",
      bedroomSummary: "1, 2, 3",
      paymentPlan: "20 / 80 / 70 Payment Plan",
      handover: "Handover 2026",
    },
    {
      title: "Rashid Yachts & Marina",
      propertyTypes: "Apartment, Townhouse",
      price: "AED 18,200,000",
      location: "Mina Rashid",
      bedroomSummary: "1, 2, 3, 4",
      paymentPlan: "10 / 70 / 20 Payment Plan",
      handover: "Handover 2028",
    },
    {
      title: "Dubai Hills Estate — Parkwood",
      propertyTypes: "Villa, Apartment",
      price: "AED 14,500,000",
      location: "Dubai Hills Estate",
      bedroomSummary: "2, 3, 4",
      paymentPlan: "20 / 40 / 40 Payment Plan",
      handover: "Handover 2027",
    },
  ],
  damac: [
    {
      title: "Damac Lagoons — Morocco",
      propertyTypes: "Villa",
      price: "AED 6,800,000",
      location: "Damac Lagoons",
      bedroomSummary: "4, 5, 6",
      paymentPlan: "20 / 60 / 20 Payment Plan",
      handover: "Handover 2027",
    },
    {
      title: "Cavalli Tower",
      propertyTypes: "Apartment",
      price: "AED 12,900,000",
      location: "Dubai Marina",
      bedroomSummary: "1, 2, 3",
      handover: "Handover 2026",
    },
  ],
}

const EMAAR_DETAIL_INTRO: readonly [string, string] = [
  "Emaar Properties is one of the world's most valuable and admired real estate developers. In Dubai, the group has shaped master communities such as Downtown Dubai, Dubai Marina, Arabian Ranches, and Dubai Hills Estate — blending residential, retail, hospitality, and leisure destinations.",
  "Explore current and upcoming Emaar launches below. Filter by property type and price, then connect with our advisors for payment-plan breakdowns, handover timelines, and availability across Emaar South, Creek Harbour, and flagship urban districts.",
]

const DEFAULT_DETAIL_INTRO = (name: string, description: string): readonly [string, string] => [
  description,
  `Browse off-plan and ready inventory from ${name} across Dubai. Use the search bar to narrow by area, property type, and budget — then register interest for floor plans, payment schedules, and launch allocations.`,
]

function uniqueImageUrls(urls: string[]): string[] {
  return [...new Set(urls.filter(Boolean))]
}

function buildDetail(profile: DubaiDeveloperProfile): DeveloperDetail {
  const pageTitle = `${profile.name} Properties`
  const intro =
    profile.id === "emaar"
      ? EMAAR_DETAIL_INTRO
      : DEFAULT_DETAIL_INTRO(profile.name, profile.description)

  return {
    ...profile,
    pageTitle,
    intro,
    heroBackgroundUrl: PROPERTY_LISTING_SEARCH_HERO_IMAGE,
    searchPlaceholder: "Area, Developer, Project",
    seoSections: [
      {
        title: "Dubai Real Estate Developers",
        description: `${profile.name} remains a core name in Dubai's development landscape — from landmark towers to family villa districts. Compare communities, service charges, and handover track records before you shortlist.`,
      },
      ...DEVELOPERS_PAGE_SEO_SECTIONS.slice(1, 3),
    ],
    faqTitle: DEVELOPERS_PAGE_FAQ_TITLE,
    faq: DEVELOPERS_PAGE_FAQ_ITEMS,
  }
}

export function getAllDeveloperIds(): string[] {
  return DUBAI_DEVELOPERS.map((d) => d.id)
}

export function getDeveloperById(id: string): DeveloperDetail | undefined {
  const profile = DUBAI_DEVELOPERS.find((d) => d.id === id)
  if (!profile) return undefined
  return buildDetail(profile)
}

export function getDeveloperDetailBreadcrumbs(developer: DeveloperDetail): BreadcrumbItem[] {
  return [
    { kind: "home", href: "/" },
    { kind: "link", href: developersPath(), label: DEVELOPERS_PAGE_TITLE },
    { kind: "current", label: developer.name },
  ]
}

export function getDeveloperOffPlanProjects(developerId: string): DeveloperOffPlanProject[] {
  const mocks = getMockPropertyDtos()
  const templates = DEVELOPER_PROJECT_TEMPLATES[developerId] ?? []

  return mocks.map((dto, index) => {
    const template = templates[index % Math.max(templates.length, 1)] ?? templates[0] ?? {}
    const handoverRaw = template.handover ?? dto.handover
    const handover = handoverRaw.includes("Handover") ? handoverRaw : `Handover ${handoverRaw}`

    return {
      id: dto.id,
      imageUrls: uniqueImageUrls([dto.imageUrl, ...GALLERY]),
      propertyTypes: template.propertyTypes ?? "Villa, Apartment",
      title: template.title ?? `${dto.title} — ${developerId}`,
      price: template.price ?? dto.priceFrom.replace(/^From:\s*/i, ""),
      location: template.location ?? dto.location,
      bedroomSummary: template.bedroomSummary ?? "1, 2, 3",
      description: dto.description || DEFAULT_PROJECT_DESCRIPTION,
      paymentPlan: template.paymentPlan ?? dto.paymentPlan,
      handover,
      mapPosition:
        DEVELOPER_MAP_MARKER_POSITIONS[index % DEVELOPER_MAP_MARKER_POSITIONS.length],
    }
  })
}
