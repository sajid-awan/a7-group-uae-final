import type { BreadcrumbItem } from "@/shared/ui/breadcrumb"
import type { MarketingBenefitCard } from "@/shared/ui/marketing/marketing-benefits-grid-section"
import type { MarketingServiceItem } from "@/shared/ui/marketing/marketing-services-split-section"

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

export const MORTGAGES_PAGE_TITLE = "Find The Best Mortgage and Home Loans in Dubai"

export const MORTGAGES_HERO_DESCRIPTION =
  "Get the best mortgage deals and expert advice for your property journey."

export const MORTGAGES_HERO_IMAGE =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop"

export const MORTGAGES_BREADCRUMBS: BreadcrumbItem[] = [
  { kind: "home", href: "/" },
  { kind: "link", href: servicesPath(), label: "Services" },
  { kind: "current", label: "Mortgages" },
]

export const mortgagesHeroProps = {
  headingId: "mortgages-hero-heading",
  title: MORTGAGES_PAGE_TITLE,
  description: MORTGAGES_HERO_DESCRIPTION,
  imageUrl: MORTGAGES_HERO_IMAGE,
  imageClassName: "object-cover object-center",
  parallax: true,
  cta: {
    label: "Get Pre-approved Now",
    href: "#mortgages-contact",
  },
}

export const MORTGAGES_OUR_SERVICES_TITLE = "Our Services"

export const MORTGAGES_OUR_SERVICES_INTRO =
  "Whether you are buying your first home, refinancing, or investing in commercial property, our mortgage specialists compare lenders and structure finance that fits your goals."

export const MORTGAGES_OUR_SERVICES_IMAGE =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop"

export const MORTGAGES_SERVICE_ITEMS: readonly MarketingServiceItem[] = [
  { id: "residential", label: "Residential Mortgage", icon: "home" },
  { id: "commercial", label: "Commercial Finance", icon: "building" },
  { id: "non-resident", label: "Non-Resident Mortgage", icon: "globe" },
  { id: "equity", label: "Equity Release / Buyout", icon: "handcoins" },
]

export const mortgagesOurServicesSectionProps = {
  breadcrumbs: MORTGAGES_BREADCRUMBS,
  title: MORTGAGES_OUR_SERVICES_TITLE,
  intro: MORTGAGES_OUR_SERVICES_INTRO,
  services: MORTGAGES_SERVICE_ITEMS,
  imageUrl: MORTGAGES_OUR_SERVICES_IMAGE,
  cta: {
    label: "Get a Free Consultation",
    href: "#mortgages-contact",
  },
  headingId: "mortgages-our-services-heading",
  className: "border-t-0",
}

export const MORTGAGES_WHY_WORK_TITLE = "Why Work With Us"

export const MORTGAGES_WHY_WORK_SUBTITLE =
  "Start The Effortless Journey Of Listing Your Property With Us, Step By Step."

const MORTGAGES_BENEFIT_DESC_VALUATION =
  "Property valuation within 24 hours, backed by data-driven analysis."

const MORTGAGES_BENEFIT_DESC_DOCUMENTATION =
  "Homeowner's consent to property listing; all essential papers are executed and submitted for listing."

export const MORTGAGES_WHY_WORK_BENEFITS: readonly MarketingBenefitCard[] = [
  {
    id: "process",
    title: "Smooth Process and Support",
    description: MORTGAGES_BENEFIT_DESC_VALUATION,
    icon: "building",
  },
  {
    id: "tailored",
    title: "Tailored Financial Solutions",
    description: MORTGAGES_BENEFIT_DESC_DOCUMENTATION,
    icon: "file",
  },
  {
    id: "experience",
    title: "Decade of Experience",
    description: MORTGAGES_BENEFIT_DESC_DOCUMENTATION,
    icon: "globe",
  },
  {
    id: "advice",
    title: "Unbiased Financial Advice",
    description: MORTGAGES_BENEFIT_DESC_VALUATION,
    icon: "building",
  },
  {
    id: "rates",
    title: "Access to Competitive Rates",
    description: MORTGAGES_BENEFIT_DESC_DOCUMENTATION,
    icon: "file",
  },
  {
    id: "programs",
    title: "Diverse Home Loan Programs",
    description: MORTGAGES_BENEFIT_DESC_DOCUMENTATION,
    icon: "globe",
  },
]

export const MORTGAGES_WHY_A7_TITLE = "Why Mortgages With A7 Group?"

export const MORTGAGES_WHY_A7_PARAGRAPHS: readonly string[] = [
  "Discover Dubai's diverse neighborhoods, from family-friendly communities to trendy hotspots, each conveniently spread across the city. This page provides an in-depth look at Dubai's top residential areas today, complete with insights on lifestyle options, amenities, and investment potential for each location.",
  "Explore the best places to live and invest in, whether you're looking for vibrant urban settings, serene suburban areas, or upscale living options. Dive into detailed information on each neighborhood and the various real estate projects available in Dubai.",
] as const

export const MORTGAGES_WHY_A7_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"

export const mortgagesWhyA7SectionProps = {
  title: MORTGAGES_WHY_A7_TITLE,
  paragraphs: MORTGAGES_WHY_A7_PARAGRAPHS,
  imageUrl: MORTGAGES_WHY_A7_IMAGE,
  imagePosition: "left" as const,
  cta: {
    label: "Learn More",
    href: "#mortgages-contact",
  },
  headingId: "mortgages-why-a7-heading",
}

export const MORTGAGES_FAQ_TITLE = "FAQs About Mortgages in Dubai"

export const mortgagesContactSectionProps = {
  sectionId: "mortgages-contact",
  formIdPrefix: "mortgages",
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

export const mortgagesTestimonialsSectionProps = {
  title: DEFAULT_MARKETING_TESTIMONIALS_TITLE,
  subtitle: DEFAULT_MARKETING_TESTIMONIALS_SUBTITLE,
  testimonials: DEFAULT_MARKETING_TESTIMONIALS,
} as const

export const mortgagesFaqSectionProps = {
  title: MORTGAGES_FAQ_TITLE,
  items: SERVICES_PAGE_FAQ_ITEMS,
  idPrefix: "mortgages",
} as const
