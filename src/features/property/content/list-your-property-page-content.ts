import type { BreadcrumbItem } from "@/shared/ui/breadcrumb"
import type { MarketingFeatureItem } from "@/shared/ui/marketing/marketing-benefits-grid-section"
import { servicesPath } from "@/shared/lib/constants/routes"

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

export const LIST_YOUR_PROPERTY_PAGE_TITLE = "Sell or Rent Out Your Property in Dubai"

export const LIST_YOUR_PROPERTY_HERO_DESCRIPTION =
  "Reach qualified buyers and tenants with A7 Group's marketing reach, professional listings, and dedicated advisors who guide you from valuation to handover."

export const LIST_YOUR_PROPERTY_HERO_IMAGE =
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop"

export const LIST_YOUR_PROPERTY_BREADCRUMBS: BreadcrumbItem[] = [
  { kind: "home", href: "/" },
  { kind: "link", href: servicesPath(), label: "Services" },
  { kind: "current", label: "List Your Property" },
]

export const listYourPropertyHeroProps = {
  headingId: "list-your-property-hero-heading",
  title: LIST_YOUR_PROPERTY_PAGE_TITLE,
  description: LIST_YOUR_PROPERTY_HERO_DESCRIPTION,
  imageUrl: LIST_YOUR_PROPERTY_HERO_IMAGE,
  imageClassName: "object-cover object-[center_25%]",
  parallax: true,
  cta: {
    label: "List Your Property",
    href: "#list-your-property-contact",
  },
}

export const listYourPropertyWhySectionProps = {
  headingId: "list-your-property-why-heading",
  breadcrumbs: LIST_YOUR_PROPERTY_BREADCRUMBS,
  title: "Why list your property with A7 Group?",
  intro:
    "From accurate pricing to polished marketing and screened enquiries, we help owners list with confidence and close faster in Dubai's competitive market.",
  items: [
    "Maximum exposure to qualified buyers and tenants",
    "Professional photography, copy, and portal syndication",
    "Transparent fees with no hidden surprises",
    "Fast valuation visits and clear next steps",
    "Dedicated agent support from listing to handover",
  ],
  images: {
    primaryUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
    secondaryUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=700&auto=format&fit=crop",
  },
  cta: {
    label: "List Your Property",
    href: "#list-your-property-contact",
  },
  className: "border-t-0",
}

export const LIST_YOUR_PROPERTY_HOW_IT_WORKS_TITLE = "How does it work?"

export const LIST_YOUR_PROPERTY_HOW_IT_WORKS_SUBTITLE =
  "A straightforward process designed to get your property marketed quickly and professionally."

export const LIST_YOUR_PROPERTY_HOW_IT_WORKS_STEPS: readonly MarketingFeatureItem[] = [
  {
    id: "valuation",
    title: "Valuation Visit",
    description:
      "We assess your property, review comparable sales and rents, and recommend a competitive listing strategy.",
    icon: "home",
  },
  {
    id: "paperwork",
    title: "Paper Signing",
    description:
      "Our team prepares the listing agreement and coordinates documentation so you can go live without delays.",
    icon: "signature",
  },
  {
    id: "reach",
    title: "Global Reach",
    description:
      "Your listing is promoted across leading portals and our buyer network to maximise qualified enquiries.",
    icon: "globe",
  },
  {
    id: "roi",
    title: "Return on Investments",
    description:
      "We track performance, advise on offers, and support negotiations to help you achieve strong returns.",
    icon: "trending",
  },
]

export const LIST_YOUR_PROPERTY_FAQ_TITLE = "FAQs About Listing Your Property in Dubai"

export const listYourPropertyContactSectionProps = {
  sectionId: "list-your-property-contact",
  formIdPrefix: "list-your-property",
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

export const listYourPropertyTestimonialsSectionProps = {
  title: DEFAULT_MARKETING_TESTIMONIALS_TITLE,
  subtitle: DEFAULT_MARKETING_TESTIMONIALS_SUBTITLE,
  testimonials: DEFAULT_MARKETING_TESTIMONIALS,
} as const

export const listYourPropertyFaqSectionProps = {
  title: LIST_YOUR_PROPERTY_FAQ_TITLE,
  items: SERVICES_PAGE_FAQ_ITEMS,
  idPrefix: "list-your-property",
} as const
