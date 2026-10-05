import type { BreadcrumbItem } from "@/shared/ui/breadcrumb"
import type { MarketingFeatureIconKey } from "@/shared/ui/marketing"
import type { MarketingFaqSectionProps } from "@/shared/ui/marketing"
import type { MarketingContactSectionProps } from "@/shared/ui/marketing/marketing-contact-section"
import type { HomeTestimonial } from "@/features/home/content/home-testimonials"
import {
  DEFAULT_MARKETING_CONTACT,
  DEFAULT_MARKETING_CONTACT_HEADING,
  DEFAULT_MARKETING_CONTACT_INTRO,
  DEFAULT_MARKETING_LANGUAGE_OPTIONS,
  DEFAULT_MARKETING_TESTIMONIALS,
  SERVICES_PAGE_FAQ_ITEMS,
} from "@/shared/content/marketing/shared-marketing-content"
import { agentProfilePath, eventDetailPath, servicesPath } from "@/shared/lib/constants/routes"
import { buildMapEmbedUrl } from "@/shared/lib/maps"

export type EventBannerCardItem = {
  id: string
  title: string
  subtitle: string
  date: string
  location: string
  imageUrl: string
  href: string
}

export const EVENTS_PAGE_TITLE = "Top Real Estate Events in Dubai"
export const EVENTS_PAGE_DESCRIPTION =
  "Explore upcoming real estate events, investment conferences, and market showcases in Dubai."

export const EVENTS_BREADCRUMBS: readonly BreadcrumbItem[] = [
  { kind: "home", href: "/" },
  { kind: "link", href: servicesPath(), label: "Services" },
  { kind: "current", label: "Events" },
]

export const EVENTS_PAGE_INTRO =
  "Explore the most anticipated real estate events in Dubai. From investment summits to property exhibitions, discover opportunities to connect with industry leaders and unlock actionable market insights."

export const EVENT_BANNERS: readonly EventBannerCardItem[] = [
  {
    id: "bayut-awards-2025",
    title: "Welcome to the Bayut Awards 2025",
    subtitle: "Reflections of Success",
    date: "27 February 2026",
    location: "Downtown Dubai",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop",
    href: eventDetailPath("bayut-awards-2025"),
  },
  {
    id: "cityscape-dubai-2026",
    title: "Cityscape Dubai 2026",
    subtitle: "Reflections of Success",
    date: "11 March 2026",
    location: "Dubai World Trade Centre",
    imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2000&auto=format&fit=crop",
    href: eventDetailPath("cityscape-dubai-2026"),
  },
  {
    id: "property-show-2026",
    title: "Dubai Property Show 2026",
    subtitle: "Reflections of Success",
    date: "08 April 2026",
    location: "Dubai Marina",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop",
    href: eventDetailPath("property-show-2026"),
  },
  {
    id: "arabian-hotel-investment",
    title: "Arabian Hotel Investment Conference",
    subtitle: "Reflections of Success",
    date: "16 May 2026",
    location: "Madinat Jumeirah",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2000&auto=format&fit=crop",
    href: eventDetailPath("arabian-hotel-investment"),
  },
  {
    id: "investment-show-2026",
    title: "The Real Estate Investment Show",
    subtitle: "Reflections of Success",
    date: "30 June 2026",
    location: "Business Bay",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
    href: eventDetailPath("investment-show-2026"),
  },
  {
    id: "future-living-summit-2026",
    title: "Future Living Summit 2026",
    subtitle: "Reflections of Success",
    date: "12 July 2026",
    location: "Dubai Design District",
    imageUrl: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=2000&auto=format&fit=crop",
    href: eventDetailPath("future-living-summit-2026"),
  },
  {
    id: "proptech-forum-2026",
    title: "Dubai PropTech Forum 2026",
    subtitle: "Reflections of Success",
    date: "05 August 2026",
    location: "DIFC",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
    href: eventDetailPath("proptech-forum-2026"),
  },
  {
    id: "offplan-investor-meet-2026",
    title: "Off-Plan Investor Meet 2026",
    subtitle: "Reflections of Success",
    date: "19 September 2026",
    location: "Palm Jumeirah",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2000&auto=format&fit=crop",
    href: eventDetailPath("offplan-investor-meet-2026"),
  },
  {
    id: "luxury-residences-showcase-2026",
    title: "Luxury Residences Showcase 2026",
    subtitle: "Reflections of Success",
    date: "27 October 2026",
    location: "Bluewaters Island",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    href: eventDetailPath("luxury-residences-showcase-2026"),
  },
]

export type EventDetailJuryMember = {
  id: string
  name: string
  role: string
  roleBadge?: string
  subtitle?: string
  nationality?: string
  languages?: string
  showRankMedal?: boolean
  whatsAppHref?: string
  profileHref?: string
  avatarUrl: string
}

export type EventDetailCategory = {
  id: string
  title: string
  description: string
  icon: MarketingFeatureIconKey
}

export type EventDetailWinner = {
  id: string
  agency: string
  winner: string
  showRankMedal?: boolean
  imageUrl: string
}

export type EventDetail = {
  id: string
  heroTitle: string
  heroSubtitle: string
  heroDate: string
  heroLocation: string
  heroImageUrl: string
  aboutTitle: string
  aboutDescriptionParagraphs: readonly string[]
  featureImageUrl: string
  storyTitle: string
  storyParagraphs: readonly string[]
  storyCtaLabel: string
  juryTitle: string
  juryMembers: readonly EventDetailJuryMember[]
  categoriesTitle: string
  categoriesSubtitle: string
  categories: readonly EventDetailCategory[]
  winnersTitle: string
  winners: readonly EventDetailWinner[]
  mapEmbedUrl: string
  clientsTitle: string
  clientsSubtitle: string
  clientsTestimonials: readonly HomeTestimonial[]
  contactSectionProps: MarketingContactSectionProps
}

const DEFAULT_JURY_MEMBERS: readonly EventDetailJuryMember[] = [
  {
    id: "renee-williams",
    name: "Renee Williams",
    role: "Jury Member",
    roleBadge: "Sales Director",
    nationality: "British",
    languages: "Arabic, English, Hindi",
    showRankMedal: true,
    whatsAppHref: "https://wa.me/971503928461",
    profileHref: agentProfilePath("renee-williams"),
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "jasmine-coleman",
    name: "Jasmine Coleman",
    role: "Jury Member",
    roleBadge: "Sales Director",
    nationality: "British",
    languages: "Arabic, English, Hindi",
    showRankMedal: true,
    whatsAppHref: "https://wa.me/971503928461",
    profileHref: agentProfilePath("jasmine-coleman"),
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "michael-clarkson",
    name: "Michael Clarkson",
    role: "Jury Member",
    roleBadge: "Sales Director",
    nationality: "British",
    languages: "Arabic, English, Hindi",
    showRankMedal: true,
    whatsAppHref: "https://wa.me/971503928461",
    profileHref: agentProfilePath("michael-clarkson"),
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "naomi-williams",
    name: "Naomi Williams",
    role: "Jury Member",
    roleBadge: "Sales Director",
    nationality: "British",
    languages: "Arabic, English, Hindi",
    showRankMedal: true,
    whatsAppHref: "https://wa.me/971503928461",
    profileHref: agentProfilePath("naomi-williams"),
    avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=300&auto=format&fit=crop",
  },
]

const DEFAULT_CATEGORIES: readonly EventDetailCategory[] = [
  {
    id: "clients",
    title: "Empowering Clients",
    description: "Providing expert guidance so buyers make confident, strategic decisions.",
    icon: "globe",
  },
  {
    id: "experience",
    title: "Enhancing Experiences",
    description: "Delivering seamless transactions and world-class service at every step.",
    icon: "award",
  },
  {
    id: "diversity",
    title: "Fostering Diversity",
    description: "Building an inclusive environment that celebrates every perspective.",
    icon: "building",
  },
]

function eventMapEmbedUrl(location: string) {
  const normalized = location.toLowerCase()
  if (normalized.includes("bluewaters")) {
    return buildMapEmbedUrl(25.0803, 55.1207, 14)
  }
  return buildMapEmbedUrl(25.1972, 55.2719, 13)
}

const DEFAULT_WINNERS: readonly EventDetailWinner[] = [
  {
    id: "fam-properties",
    agency: "Agency of the Year",
    winner: "FAM Properties",
    showRankMedal: true,
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "whiteco",
    agency: "Agency of the Year",
    winner: "White & Co",
    showRankMedal: true,
    imageUrl: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "remax",
    agency: "Agency of the Year",
    winner: "RE/MAX Collection",
    showRankMedal: true,
    imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=900&auto=format&fit=crop",
  },
]

export const EVENT_DETAILS: Record<string, EventDetail> = Object.fromEntries(
  EVENT_BANNERS.map((event) => [
    event.id,
    {
      id: event.id,
      heroTitle: event.title,
      heroSubtitle: event.subtitle,
      heroDate: event.date,
      heroLocation: event.location,
      heroImageUrl: event.imageUrl,
      aboutTitle: "Top Real Estate Event in Dubai",
      aboutDescriptionParagraphs: [
        "Discover Dubai's diverse neighborhoods, from family-friendly communities to trendy hotspots, each conveniently spread across the city. This page provides an in-depth look at Dubai's top residential areas today, complete with insights on lifestyle options, amenities, and investment potential for each location.",
        "Explore the best places to live and invest in, whether you're looking for vibrant urban settings, serene suburban areas, or upscale living options. Dive into detailed information on each neighborhood and the various real estate projects available in Dubai.",
      ] as const,
      featureImageUrl: event.imageUrl,
      storyTitle: "Reflections of Success",
      storyParagraphs: [
        "At Bayut, we know that success is never a solo journey. It is built through collaboration, innovation, and the relentless drive of our partners who continue to raise the bar for excellence. Over the years, these professionals have embraced Bayut's tools to strengthen relationships, elevate performance, and grow their businesses with confidence.",
        "The Bayut Awards 2025 will celebrate these outstanding achievements, a true Reflection of Success across the UAE real estate industry. As we look back on the milestones of this year, we also look ahead with pride, honouring not just numbers and performance, but the passion, perseverance, and progress that continue to shape the future of our industry.",
      ] as const,
      storyCtaLabel: "Enquire Now",
      juryTitle: "A7 Agency & Agent Awards 2025 - Jury",
      juryMembers: DEFAULT_JURY_MEMBERS,
      categoriesTitle: "Award Categories",
      categoriesSubtitle: "Spot true winners across every stage of the property journey.",
      categories: DEFAULT_CATEGORIES,
      winnersTitle: "Agency of the Year 2025 (Enterprise)",
      winners: DEFAULT_WINNERS,
      mapEmbedUrl: eventMapEmbedUrl(event.location),
      clientsTitle: "Why Our Clients Trust Us",
      clientsSubtitle: "Discover What Our Customers Are Saying About Their Experiences.",
      clientsTestimonials: DEFAULT_MARKETING_TESTIMONIALS,
      contactSectionProps: {
        sectionId: "event-contact",
        formIdPrefix: "event",
        heading: DEFAULT_MARKETING_CONTACT_HEADING,
        intro: DEFAULT_MARKETING_CONTACT_INTRO,
        whatsApp: {
          label: "WhatsApp",
          value: DEFAULT_MARKETING_CONTACT.whatsApp,
          href: DEFAULT_MARKETING_CONTACT.whatsAppHref,
        },
        phone: {
          label: "Phone",
          value: DEFAULT_MARKETING_CONTACT.phone,
          href: DEFAULT_MARKETING_CONTACT.phoneHref,
        },
        email: {
          label: "Email",
          value: DEFAULT_MARKETING_CONTACT.email,
          href: DEFAULT_MARKETING_CONTACT.emailHref,
        },
        languageOptions: DEFAULT_MARKETING_LANGUAGE_OPTIONS,
      },
    } satisfies EventDetail,
  ])
) as Record<string, EventDetail>

export function getAllEventIds() {
  return EVENT_BANNERS.map((event) => event.id)
}

export function getEventDetailById(id: string) {
  return EVENT_DETAILS[id]
}

export const eventsListSectionProps = {
  breadcrumbs: EVENTS_BREADCRUMBS,
  title: EVENTS_PAGE_TITLE,
  intro: EVENTS_PAGE_INTRO,
  events: EVENT_BANNERS,
  headingId: "events-page-heading",
}

export const EVENTS_TOP_AREAS_TITLE = "Discover Top Performing Areas."

export const EVENTS_TOP_AREAS_SECTIONS = [
  {
    id: "prime-ultra-lux",
    title: "Prime Ultra Location",
    body: "From waterfront addresses to prime urban districts, Dubai continues to attract high-net-worth buyers seeking long-term value and superior connectivity.",
  },
  {
    id: "contemporary-design",
    title: "Contemporary Residences & Design",
    body: "Modern inventory with premium amenities and lifestyle-focused design remains central to market demand and off-plan launch performance.",
  },
  {
    id: "lifestyle-community",
    title: "Lifestyle & Community Experience",
    body: "Master-planned communities with schools, retail, wellness, and green spaces continue to outperform in buyer preference and absorption rates.",
  },
  {
    id: "strategic-investment",
    title: "Strategic, Versatile & Investment Potential",
    body: "Dubai offers versatile opportunities across villas, apartments, and land parcels, supported by investor-friendly regulations and resilient demand.",
  },
] as const

export const eventsFaqSectionProps: MarketingFaqSectionProps = {
  title: "FAQs",
  items: SERVICES_PAGE_FAQ_ITEMS,
  idPrefix: "events",
}

export type EventsPageProps = {
  listSectionProps: typeof eventsListSectionProps
  topAreasTitle: string
  topAreasSections: typeof EVENTS_TOP_AREAS_SECTIONS
  faqSectionProps: MarketingFaqSectionProps
}

export const eventsPageProps: EventsPageProps = {
  listSectionProps: eventsListSectionProps,
  topAreasTitle: EVENTS_TOP_AREAS_TITLE,
  topAreasSections: EVENTS_TOP_AREAS_SECTIONS,
  faqSectionProps: eventsFaqSectionProps,
}
