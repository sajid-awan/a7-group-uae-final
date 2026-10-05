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

export const SHORT_TERM_RENTALS_PAGE_TITLE = "From Finding Your Perfect Holiday Home"

export const SHORT_TERM_RENTALS_HERO_DESCRIPTION =
  "Discover luxury holiday homes across Dubai with professional hosting, guest care, and marketing that keeps your calendar full."

export const SHORT_TERM_RENTALS_HERO_IMAGE =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop"

export const SHORT_TERM_RENTALS_BREADCRUMBS: BreadcrumbItem[] = [
  { kind: "home", href: "/" },
  { kind: "link", href: servicesPath(), label: "Services" },
  { kind: "current", label: "Short Term Rentals" },
]

export const shortTermRentalsHeroProps = {
  headingId: "short-term-rentals-hero-heading",
  title: SHORT_TERM_RENTALS_PAGE_TITLE,
  description: SHORT_TERM_RENTALS_HERO_DESCRIPTION,
  imageUrl: SHORT_TERM_RENTALS_HERO_IMAGE,
  imageClassName: "object-cover object-center",
  parallax: true,
  cta: {
    label: "Enquire Now",
    href: "#short-term-rentals-contact",
  },
}

export const SHORT_TERM_RENTALS_GUEST_TITLE =
  "For Guests: Discover Unparalleled Holiday Homes. Luxury, Comfort, and Convenience"

export const SHORT_TERM_RENTALS_GUEST_PARAGRAPHS: readonly string[] = [
  "Discover Dubai's diverse neighborhoods, from family-friendly communities to trendy hotspots, each conveniently spread across the city. This page provides an in-depth look at Dubai's top residential areas today, complete with insights on lifestyle options, amenities, and investment potential for each location.",
  "Explore the best places to live and invest in, whether you're looking for vibrant urban settings, serene suburban areas, or upscale living options. Dive into detailed information on each neighborhood and the various real estate projects available in Dubai.",
] as const

export const SHORT_TERM_RENTALS_GUEST_IMAGES: readonly string[] = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
]

export const shortTermRentalsGuestSectionProps = {
  breadcrumbs: SHORT_TERM_RENTALS_BREADCRUMBS,
  title: SHORT_TERM_RENTALS_GUEST_TITLE,
  paragraphs: SHORT_TERM_RENTALS_GUEST_PARAGRAPHS,
  images: SHORT_TERM_RENTALS_GUEST_IMAGES,
  cta: {
    label: "Enquire Now",
    href: "#short-term-rentals-contact",
  },
  headingId: "short-term-rentals-guest-heading",
  className: "border-t-0",
}

export const SHORT_TERM_RENTALS_WHY_TITLE = "Why holiday homes in Dubai are a good option?"

const SHORT_TERM_DESC_A = "Property valuation within 24 hours, backed by data-driven analysis."

const SHORT_TERM_DESC_B =
  "Homeowner's consent to property listing; all essential papers are executed and submitted for listing."

export const SHORT_TERM_RENTALS_WHY_BENEFITS: readonly MarketingFeatureItem[] = [
  { id: "selection", title: "Diverse Selection", description: SHORT_TERM_DESC_A, icon: "building" },
  { id: "locations", title: "Strategic Locations", description: SHORT_TERM_DESC_B, icon: "file" },
  { id: "amenities", title: "Luxurious Amenities", description: SHORT_TERM_DESC_B, icon: "globe" },
  { id: "experience", title: "Seamless Experience", description: SHORT_TERM_DESC_A, icon: "building" },
  { id: "local", title: "Authentic Local Feel", description: SHORT_TERM_DESC_B, icon: "file" },
  { id: "management", title: "Professional Management", description: SHORT_TERM_DESC_B, icon: "globe" },
]

export const shortTermRentalsTransformSectionProps = {
  title: "Looking to transform your home into A short-term rental in Dubai?",
  paragraphs: SHORT_TERM_RENTALS_GUEST_PARAGRAPHS,
  imageUrl:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
  imagePosition: "left" as const,
  cta: {
    label: "Book Now!",
    href: "#short-term-rentals-contact",
  },
  headingId: "short-term-rentals-transform-heading",
}

export const SHORT_TERM_RENTALS_JOURNEY_BANNER = {
  title: "Begin Your Journey With Us!",
  imageUrl:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop",
  cta: {
    label: "Contact Broker",
    href: "#short-term-rentals-contact",
  },
  headingId: "short-term-rentals-journey-heading",
}

export const SHORT_TERM_RENTALS_SERVICES_HEADLINE = "Our Comprehensive Services For Homeowners Include:"

export const SHORT_TERM_RENTALS_SERVICES_ITEMS: readonly string[] = [
  "Custom interior design and furnishing",
  "Professional marketing and guest management",
  "Dynamic pricing and revenue optimisation",
  "Cleaning, maintenance, and owner reporting",
] as const

export const SHORT_TERM_RENTALS_SERVICES_IMAGE =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop"

export const shortTermRentalsServicesSectionProps = {
  headline: SHORT_TERM_RENTALS_SERVICES_HEADLINE,
  items: SHORT_TERM_RENTALS_SERVICES_ITEMS,
  imageUrl: SHORT_TERM_RENTALS_SERVICES_IMAGE,
  cta: {
    label: "Get a Free Consultation!",
    href: "#short-term-rentals-contact",
  },
  headingId: "short-term-rentals-services-heading",
}

export const SHORT_TERM_RENTALS_FAQ_TITLE = "FAQs About Short Term Rentals in Dubai"

export const shortTermRentalsContactSectionProps = {
  sectionId: "short-term-rentals-contact",
  formIdPrefix: "short-term-rentals",
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

export const shortTermRentalsTestimonialsSectionProps = {
  title: DEFAULT_MARKETING_TESTIMONIALS_TITLE,
  subtitle: DEFAULT_MARKETING_TESTIMONIALS_SUBTITLE,
  testimonials: DEFAULT_MARKETING_TESTIMONIALS,
} as const

export const shortTermRentalsFaqSectionProps = {
  title: SHORT_TERM_RENTALS_FAQ_TITLE,
  items: SERVICES_PAGE_FAQ_ITEMS,
  idPrefix: "short-term-rentals",
} as const
