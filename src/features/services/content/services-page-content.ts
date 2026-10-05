import type { BreadcrumbItem } from "@/shared/ui/breadcrumb"
import type { ProjectOverviewBlock } from "@/features/property"
import {
  DEFAULT_MARKETING_CONTACT,
  DEFAULT_MARKETING_CONTACT_HEADING,
  DEFAULT_MARKETING_CONTACT_INTRO,
  DEFAULT_MARKETING_LANGUAGE_OPTIONS,
  DEFAULT_MARKETING_TESTIMONIALS,
  DEFAULT_MARKETING_TESTIMONIALS_SUBTITLE,
  DEFAULT_MARKETING_TESTIMONIALS_TITLE,
  SERVICES_PAGE_FAQ_ITEMS,
  SERVICES_PAGE_FAQ_TITLE,
} from "@/shared/content/marketing/shared-marketing-content"
import {
  conveyancingPath,
  listYourPropertyPath,
  mortgagesPath,
  plotsPath,
  propertyManagementPath,
  propertySnaggingPath,
  shortTermRentalsPath,
} from "@/shared/lib/constants/routes"

export const SERVICES_PAGE_TITLE = "Top-Notch Property Services in Dubai"

export const SERVICES_PAGE_HERO_SUBTITLE =
  "We Provide Turnkey Solutions To Help You Reap The Best Returns On Your Investment."

export const SERVICES_HERO_IMAGE =
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop"

export const SERVICES_INTRO_TITLE =
  "A7 Group – The Most Trusted Property Services Agency"

export const SERVICES_INTRO_PARAGRAPHS: readonly string[] = [
  "Discover Dubai's diverse neighborhoods, from family-friendly communities to trendy hotspots, each conveniently spread across the city. This page provides an in-depth look at Dubai's top residential areas today, complete with insights on lifestyle options, amenities, and investment potential for each location.",
  "Explore the best places to live and invest in, whether you're looking for vibrant urban settings, serene suburban areas, or upscale living options. Dive into detailed information on each neighborhood and the various real estate projects available in Dubai.",
] as const

export const SERVICES_INTRO_IMAGE_PRIMARY =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"

export const SERVICES_INTRO_IMAGE_SECONDARY =
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=900&auto=format&fit=crop"

export type ServiceOffering = {
  id: string
  title: string
  imageUrl: string
  href: string
}

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: "property-management",
    title: "Property Management",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
    href: propertyManagementPath(),
  },
  {
    id: "list-your-property",
    title: "List Your Property",
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=900&auto=format&fit=crop",
    href: listYourPropertyPath(),
  },
  {
    id: "mortgages",
    title: "Mortgages",
    imageUrl:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=900&auto=format&fit=crop",
    href: mortgagesPath(),
  },
  {
    id: "conveyancing",
    title: "Conveyancing",
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=900&auto=format&fit=crop",
    href: conveyancingPath(),
  },
  {
    id: "short-term-rentals",
    title: "Short Term Rentals",
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=900&auto=format&fit=crop",
    href: shortTermRentalsPath(),
  },
  {
    id: "property-snagging",
    title: "Property Snagging",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=900&auto=format&fit=crop",
    href: propertySnaggingPath(),
  },
  {
    id: "plots",
    title: "Plots",
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=900&auto=format&fit=crop",
    href: plotsPath(),
  },
]

export const SERVICES_SEO_SECTIONS: ProjectOverviewBlock[] = [
  {
    title: "Dubai Real Estate Developers",
    description:
      "Dubai's developer landscape spans master-planned communities, waterfront towers, and branded residences. A7 Group helps buyers compare payment plans, handover timelines, and service-charge structures — then connects you with inventory that matches your budget and hold strategy.",
  },
  {
    title: "Prime Urban Location",
    description:
      "From Downtown and Business Bay to Dubai Marina and emerging districts along Sheikh Zayed Road, location drives rental yield and resale liquidity. Our team maps commute times, school catchments, and retail access so you invest with clarity, not guesswork.",
  },
]

export const SERVICES_PAGE_BREADCRUMBS: BreadcrumbItem[] = [
  { kind: "home", href: "/" },
  { kind: "current", label: "Services" },
]

/** Shared marketing blocks — pass through to reusable section components. */
export const servicesContactSectionProps = {
  sectionId: "services-contact",
  formIdPrefix: "services",
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
} as const

export const servicesTestimonialsSectionProps = {
  title: DEFAULT_MARKETING_TESTIMONIALS_TITLE,
  subtitle: DEFAULT_MARKETING_TESTIMONIALS_SUBTITLE,
  testimonials: DEFAULT_MARKETING_TESTIMONIALS,
} as const

export const servicesFaqSectionProps = {
  title: SERVICES_PAGE_FAQ_TITLE,
  items: SERVICES_PAGE_FAQ_ITEMS,
  idPrefix: "services",
} as const
