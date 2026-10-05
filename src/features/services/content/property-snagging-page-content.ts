import type { BreadcrumbItem } from "@/shared/ui/breadcrumb"
import type { MarketingGlassServiceItem } from "@/shared/ui/marketing/marketing-glass-services-section"
import type { MarketingStepItem } from "@/shared/ui/marketing/marketing-step-cards-section"

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

export const PROPERTY_SNAGGING_PAGE_TITLE = "Will your property be handed over in the near future?"

export const PROPERTY_SNAGGING_HERO_DESCRIPTION =
  "Professional snagging and inspection before handover — detailed reports, defect tracking, and support through developer sign-off."

export const PROPERTY_SNAGGING_HERO_IMAGE =
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2000&auto=format&fit=crop"

export const PROPERTY_SNAGGING_BREADCRUMBS: BreadcrumbItem[] = [
  { kind: "home", href: "/" },
  { kind: "link", href: servicesPath(), label: "Services" },
  { kind: "current", label: "Property Snagging" },
]

export const propertySnaggingHeroProps = {
  headingId: "property-snagging-hero-heading",
  title: PROPERTY_SNAGGING_PAGE_TITLE,
  description: PROPERTY_SNAGGING_HERO_DESCRIPTION,
  imageUrl: PROPERTY_SNAGGING_HERO_IMAGE,
  imageClassName: "object-cover object-center",
  parallax: true,
  cta: {
    label: "Book a Consultation",
    href: "#property-snagging-contact",
  },
}

export const propertySnaggingIntroSectionProps = {
  breadcrumbs: PROPERTY_SNAGGING_BREADCRUMBS,
  title: "Why Snagging & Inspection with A7 Group?",
  paragraphs: [
    "Handover is when small defects become costly disputes. Our snagging specialists inspect new and resale homes room by room, photograph issues, and produce structured reports your developer or seller can act on.",
    "From pre-purchase visits to post-handover follow-ups, we help you secure fixes within warranty windows and document everything for DLD and RERA compliance where required.",
  ] as const,
  imageUrl:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
  imagePosition: "left" as const,
  cta: {
    label: "Enquire Now",
    href: "#property-snagging-contact",
  },
  headingId: "property-snagging-intro-heading",
  className: "border-t-0",
}

export const PROPERTY_SNAGGING_OUR_SERVICES_TITLE = "Our Services"

export const PROPERTY_SNAGGING_OUR_SERVICES_SUBTITLE =
  "Comprehensive inspection packages for buyers, investors, and homeowners across Dubai."

export const PROPERTY_SNAGGING_SERVICES_BACKGROUND =
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop"

export const PROPERTY_SNAGGING_GLASS_SERVICES: readonly MarketingGlassServiceItem[] = [
  { id: "pre-purchase", title: "Pre-purchase inspection" },
  { id: "resale", title: "Resale inspection" },
  { id: "handover", title: "Handover inspection" },
  { id: "snagging-report", title: "Defect snagging report" },
  { id: "warranty", title: "Warranty follow-up" },
  { id: "post-purchase", title: "Post-purchase support" },
  { id: "developer", title: "Developer liaison" },
  { id: "re-inspection", title: "Re-inspection visit" },
]

export const propertySnaggingGlassServicesSectionProps = {
  title: PROPERTY_SNAGGING_OUR_SERVICES_TITLE,
  subtitle: PROPERTY_SNAGGING_OUR_SERVICES_SUBTITLE,
  services: PROPERTY_SNAGGING_GLASS_SERVICES,
  backgroundImageUrl: PROPERTY_SNAGGING_SERVICES_BACKGROUND,
  headingId: "property-snagging-services-heading",
}

const SNAGGING_STEP_DESC =
  "Direct access to verified landowners and full compliance with DLD and RERA ensure safe, risk-free transactions."

export const PROPERTY_SNAGGING_WHY_WORK_TITLE = "Why Work With Us"

export const PROPERTY_SNAGGING_WHY_WORK_SUBTITLE =
  "Expert inspectors, clear reporting, and hands-on support until defects are resolved."

export const PROPERTY_SNAGGING_WHY_WORK_STEPS: readonly MarketingStepItem[] = [
  {
    id: "expertise",
    stepLabel: "Step 1",
    title: "Professional Expertise",
    description: SNAGGING_STEP_DESC,
    icon: "award",
  },
  {
    id: "reporting",
    stepLabel: "Step 2",
    title: "Cutting Edge Reporting",
    description: SNAGGING_STEP_DESC,
    icon: "file",
  },
  {
    id: "solving",
    stepLabel: "Step 3",
    title: "Proactive Problem Solving",
    description: SNAGGING_STEP_DESC,
    icon: "zap",
  },
]

export const propertySnaggingStepCardsSectionProps = {
  title: PROPERTY_SNAGGING_WHY_WORK_TITLE,
  subtitle: PROPERTY_SNAGGING_WHY_WORK_SUBTITLE,
  steps: PROPERTY_SNAGGING_WHY_WORK_STEPS,
  headingId: "property-snagging-why-work-heading",
}

export const PROPERTY_SNAGGING_FAQ_TITLE = "FAQs About Property Snagging in Dubai"

export const propertySnaggingContactSectionProps = {
  sectionId: "property-snagging-contact",
  formIdPrefix: "property-snagging",
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

export const propertySnaggingTestimonialsSectionProps = {
  title: DEFAULT_MARKETING_TESTIMONIALS_TITLE,
  subtitle: DEFAULT_MARKETING_TESTIMONIALS_SUBTITLE,
  testimonials: DEFAULT_MARKETING_TESTIMONIALS,
} as const

export const propertySnaggingFaqSectionProps = {
  title: PROPERTY_SNAGGING_FAQ_TITLE,
  items: SERVICES_PAGE_FAQ_ITEMS,
  idPrefix: "property-snagging",
} as const
