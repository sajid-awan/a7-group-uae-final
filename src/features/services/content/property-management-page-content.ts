import type { BreadcrumbItem } from "@/shared/ui/breadcrumb"
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

export const PROPERTY_MANAGEMENT_PAGE_TITLE = "Property Management with a Personal Touch"

export const PROPERTY_MANAGEMENT_HERO_DESCRIPTION =
  "Let Our Years Of Experience Work For You! If You'd Like To See How Much You Can Make On Your Property, Get Started With A FREE Rental Analysis Today!"

export const PROPERTY_MANAGEMENT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"

export const propertyManagementHeroProps = {
  headingId: "property-management-hero-heading",
  title: PROPERTY_MANAGEMENT_PAGE_TITLE,
  description: PROPERTY_MANAGEMENT_HERO_DESCRIPTION,
  imageUrl: PROPERTY_MANAGEMENT_HERO_IMAGE,
  parallax: true,
  cta: {
    label: "Free Rental Analysis",
    href: "#property-management-contact",
  },
}

export const PROPERTY_MANAGEMENT_BREADCRUMBS: BreadcrumbItem[] = [
  { kind: "home", href: "/" },
  { kind: "link", href: servicesPath(), label: "Services" },
  { kind: "current", label: "Property Management" },
]

export const PROPERTY_MANAGEMENT_INTRO_TITLE = "Do you need Property Management Services?"

export const PROPERTY_MANAGEMENT_INTRO_PARAGRAPHS: readonly string[] = [
  "Discover Dubai's diverse neighborhoods, from family-friendly communities to trendy hotspots, each conveniently spread across the city. This page provides an in-depth look at Dubai's top residential areas today, complete with insights on lifestyle options, amenities, and investment potential for each location.",
  "Explore the best places to live and invest in, whether you're looking for vibrant urban settings, serene suburban areas, or upscale living options. Dive into detailed information on each neighborhood and the various real estate projects available in Dubai.",
] as const

export const PROPERTY_MANAGEMENT_INTRO_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"

export const PROPERTY_MANAGEMENT_FEATURE_DESCRIPTION =
  "Our dedicated account manager service provides a single point of contact for all your property needs."

export type PropertyManagementFeature = {
  id: string
  title: string
  imageUrl: string
}

export const PROPERTY_MANAGEMENT_FEATURES: PropertyManagementFeature[] = [
  {
    id: "account-manager",
    title: "Dedicated Account Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "tenant-management",
    title: "Tenant Management",
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "legal-guidance",
    title: "Legal Guidance",
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "smart-portal",
    title: "Smart Portal Integration",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "maintenance",
    title: "Maintenance and Complaints Resolution",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "inspection",
    title: "Regular Inspection",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=900&auto=format&fit=crop",
  },
]

export const PROPERTY_MANAGEMENT_WHY_TITLE = "Why Choose Us?"

export const PROPERTY_MANAGEMENT_WHY_INTRO =
  "We combine local expertise with transparent processes so owners, investors, and tenants enjoy hassle-free property management across Dubai."

export const propertyManagementWhySectionProps = {
  headingId: "property-management-why-heading",
  title: PROPERTY_MANAGEMENT_WHY_TITLE,
  intro: PROPERTY_MANAGEMENT_WHY_INTRO,
  items: [
    "Have tailored solutions for property management requirements",
    "Ensure the property maintains high standards & well maintained",
    "Ease the process of finding suitable tenants faster",
    "Provide clear and transparent financial reporting",
  ],
  images: {
    primaryUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    secondaryUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=700&auto=format&fit=crop",
  },
  cta: {
    label: "Learn more",
    href: "#property-management-contact",
  },
}

export const PROPERTY_MANAGEMENT_FAQ_TITLE = "FAQs About Property Management in Dubai"

export const propertyManagementContactSectionProps = {
  sectionId: "property-management-contact",
  formIdPrefix: "property-management",
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

export const propertyManagementTestimonialsSectionProps = {
  title: DEFAULT_MARKETING_TESTIMONIALS_TITLE,
  subtitle: DEFAULT_MARKETING_TESTIMONIALS_SUBTITLE,
  testimonials: DEFAULT_MARKETING_TESTIMONIALS,
} as const

export const propertyManagementFaqSectionProps = {
  title: PROPERTY_MANAGEMENT_FAQ_TITLE,
  items: SERVICES_PAGE_FAQ_ITEMS,
  idPrefix: "property-management",
} as const
