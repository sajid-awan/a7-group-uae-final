import type { BreadcrumbItem } from "@/shared/ui/breadcrumb"
import type { MarketingFeatureItem } from "@/shared/ui/marketing/marketing-benefits-grid-section"

import {
  DEFAULT_MARKETING_CONTACT,
  DEFAULT_MARKETING_CONTACT_HEADING,
  DEFAULT_MARKETING_CONTACT_INTRO,
  DEFAULT_MARKETING_LANGUAGE_OPTIONS,
  DEFAULT_MARKETING_TESTIMONIALS,
  DEFAULT_MARKETING_TESTIMONIALS_SUBTITLE,
  DEFAULT_MARKETING_TESTIMONIALS_TITLE,
  SERVICES_PAGE_FAQ_ITEMS,
} from "@/shared/content/marketing/shared-marketing-content"
import { servicesPath } from "@/shared/lib/constants/routes"

export const CONVEYANCING_PAGE_TITLE = "Your property transactions simplified"

export const CONVEYANCING_HERO_DESCRIPTION =
  "Expert conveyancing support for buyers and sellers across Dubai — from contract review to transfer registration with clear timelines at every step."

export const CONVEYANCING_HERO_IMAGE =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop"

export const CONVEYANCING_BREADCRUMBS: BreadcrumbItem[] = [
  { kind: "home", href: "/" },
  { kind: "link", href: servicesPath(), label: "Services" },
  { kind: "current", label: "Conveyancing" },
]

export const conveyancingHeroProps = {
  headingId: "conveyancing-hero-heading",
  title: CONVEYANCING_PAGE_TITLE,
  description: CONVEYANCING_HERO_DESCRIPTION,
  imageUrl: CONVEYANCING_HERO_IMAGE,
  imageClassName: "object-cover object-center",
  parallax: true,
  cta: {
    label: "Get Expert Assistance",
    href: "#conveyancing-contact",
  },
}

export const conveyancingAboutSectionProps = {
  breadcrumbs: CONVEYANCING_BREADCRUMBS,
  title: "About Conveyance with A7 Group!",
  paragraphs: [
    "Discover Dubai's diverse neighborhoods, from family-friendly communities to trendy hotspots, each conveniently spread across the city. This page provides an in-depth look at Dubai's top residential areas today, complete with insights on lifestyle options, amenities, and investment potential for each location.",
    "Explore the best places to live and invest in, whether you're looking for vibrant urban settings, serene suburban areas, or upscale living options. Dive into detailed information on each neighborhood and the various real estate projects available in Dubai.",
  ] as const,
  imageUrl:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
  imagePosition: "left" as const,
  cta: {
    label: "Enquire Now",
    href: "#conveyancing-contact",
  },
  headingId: "conveyancing-about-heading",
  className: "border-t-0",
}

export const CONVEYANCING_PRISM_TITLE = "Discover the PRISM Advantage for Dubai Property Conveyancing"

export const CONVEYANCING_PRISM_SUBTITLE =
  "Start The Effortless Journey Of Listing Your Property With Us, Step By Step."

const CONVEYANCING_PRISM_DESC =
  "Property valuation within 24 hours, backed by data-driven analysis."

export const CONVEYANCING_PRISM_BENEFITS: readonly MarketingFeatureItem[] = [
  {
    id: "leader",
    title: "Established Leader Since 2008",
    titleLines: ["Established Leader", "Since 2008"],
    description: CONVEYANCING_PRISM_DESC,
    icon: "building",
  },
  {
    id: "team",
    title: "Team of Conveyancing Specialists",
    description: CONVEYANCING_PRISM_DESC,
    icon: "users",
  },
  {
    id: "bespoke",
    title: "Bespoke Conveyancing Solutions",
    description: CONVEYANCING_PRISM_DESC,
    icon: "file",
  },
  {
    id: "speed",
    title: "Unmatched Efficiency and Speed",
    description: CONVEYANCING_PRISM_DESC,
    icon: "zap",
  },
]

export const CONVEYANCING_SOLUTIONS_HEADLINE = "We don't just create transactions, we build relationships."

export const CONVEYANCING_SOLUTIONS_EYEBROW = "Our Solutions"

export const CONVEYANCING_SOLUTIONS_ITEMS: readonly string[] = [
  "Gifting",
  "Legal Documents Translation",
  "Legal Eviction Notice",
  "Document Attestation MOFA",
  "Power of Attorney",
  "Will (Property Investment)",
  "Online POA Cancellation",
  "General Consulting for property transfer",
] as const

export const CONVEYANCING_SOLUTIONS_IMAGE =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop"

export const conveyancingSolutionsSectionProps = {
  headline: CONVEYANCING_SOLUTIONS_HEADLINE,
  eyebrow: CONVEYANCING_SOLUTIONS_EYEBROW,
  items: CONVEYANCING_SOLUTIONS_ITEMS,
  imageUrl: CONVEYANCING_SOLUTIONS_IMAGE,
  cta: {
    label: "Get a Free Consultation!",
    href: "#conveyancing-contact",
  },
  headingId: "conveyancing-solutions-heading",
}

export const CONVEYANCING_FAQ_TITLE = "FAQs About Conveyancing in Dubai"

export const conveyancingContactSectionProps = {
  sectionId: "conveyancing-contact",
  formIdPrefix: "conveyancing",
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

export const conveyancingTestimonialsSectionProps = {
  title: DEFAULT_MARKETING_TESTIMONIALS_TITLE,
  subtitle: DEFAULT_MARKETING_TESTIMONIALS_SUBTITLE,
  testimonials: DEFAULT_MARKETING_TESTIMONIALS,
} as const

export const conveyancingFaqSectionProps = {
  title: CONVEYANCING_FAQ_TITLE,
  items: SERVICES_PAGE_FAQ_ITEMS,
  idPrefix: "conveyancing",
} as const
