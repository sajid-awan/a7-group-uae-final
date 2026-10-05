import type { BreadcrumbItem } from "@/shared/ui/breadcrumb"
import type { MarketingFeatureIconKey } from "@/shared/ui/marketing/marketing-feature-icons"

type AboutGoalItem = {
  id: string
  title: string
  description: string
  icon: MarketingFeatureIconKey
}

type AboutShowcaseStat = {
  label: string
  value: string
}

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
import { aboutPath, servicesPath } from "@/shared/lib/constants/routes"

export const ABOUT_PAGE_TITLE = "About A7 Group"

export const ABOUT_PAGE_DESCRIPTION =
  "A client-first real estate company in Dubai delivering transparent advisory, market expertise, and long-term value for buyers, sellers, and investors."

export const aboutHeroProps = {
  headingId: "about-hero-heading",
  title: "Your trusted real estate partner in Dubai",
  description:
    "From first consultation to final handover, A7 Group helps you make better property decisions with clear guidance and measurable outcomes.",
  imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
  cta: {
    label: "Get in touch",
    href: "#about-contact",
  },
}

export const ABOUT_BREADCRUMBS: readonly BreadcrumbItem[] = [
  { kind: "home", href: "/" },
  { kind: "link", href: servicesPath(), label: "Services" },
  { kind: "current", label: "About us" },
]

const ABOUT_TRUST_POINT_DESC =
  "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor."

export const aboutTrustSectionProps = {
  breadcrumbs: ABOUT_BREADCRUMBS,
  title: "Every real estate decision. One trusted partner.",
  intro:
    "Providing expert guidance to help clients make confident, informed property decisions.",
  points: [
    {
      id: "tech-data",
      title: "Tech and Data",
      description: ABOUT_TRUST_POINT_DESC,
    },
    {
      id: "scale",
      title: "Scale and size, as a knowledge hub",
      description: ABOUT_TRUST_POINT_DESC,
    },
    {
      id: "ecosystem",
      title: "Ecosystem knowledge across all services",
      description: ABOUT_TRUST_POINT_DESC,
    },
    {
      id: "client-centricity",
      title: "Client Centricity",
      description: ABOUT_TRUST_POINT_DESC,
    },
  ] as const,
}

export const aboutStoryGoalsSectionProps = {
  eyebrow: "A VISION FROM OUR CEO",
  title: "A passionate and dynamic real estate company helping clients thrive in Dubai.",
  paragraphs: [
    "A7 Group strives to exceed expectations through exceptional service, transparency, and meaningful client relationships.",
    "We combine in-depth market knowledge with practical execution to support every stage of your real estate journey.",
  ] as const,
  goalsTitle: "Our Goals:",
  goals: [
    {
      id: "empowering-clients",
      title: "Empowering Clients",
      description:
        "Providing expert guidance to help clients make confident, informed property decisions.",
      icon: "search",
    },
    {
      id: "enhancing-experiences",
      title: "Enhancing Experiences",
      description:
        "Direct access to verified landowners and full compliance with DLD and RERA ensure safe, risk-free transactions.",
      icon: "shieldTick",
    },
    {
      id: "fostering-diversity",
      title: "Fostering Diversity",
      description:
        "Direct access to verified landowners and full compliance with DLD and RERA ensure safe, risk-free transactions.",
      icon: "barChart",
    },
    {
      id: "innovating-solutions",
      title: "Innovating Solutions",
      description:
        "Direct access to verified landowners and full compliance with DLD and RERA ensure safe, risk-free transactions.",
      icon: "eye",
    },
    {
      id: "innovating-solutions-2",
      title: "Innovating Solutions",
      description:
        "Direct access to verified landowners and full compliance with DLD and RERA ensure safe, risk-free transactions.",
      icon: "eye",
    },
  ] as const satisfies readonly AboutGoalItem[],
  commitmentTitle: "Our Commitment:",
  commitmentBody:
    "At A7 Group, we foster trust through communication and quality execution. We are committed to delivering measurable value in every client interaction.",
}

export const aboutCtaBannerProps = {
  variant: "expert" as const,
  title: "Need help? Talk to our expert.",
  subtitle: "Talk to our experts or Browse through more properties.",
  imageUrl: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1800&auto=format&fit=crop",
  cta: {
    label: "Contact Us",
    href: "#about-contact",
  },
  phoneLabel: DEFAULT_MARKETING_CONTACT.phone,
  phoneHref: DEFAULT_MARKETING_CONTACT.phoneHref,
  headingId: "about-cta-heading",
} as const

export const aboutStatsShowcaseSectionProps = {
  primaryImageUrl:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
  secondaryImageUrl:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=900&auto=format&fit=crop",
  titleLines: ["With Us Help You Find", "Your Dream Home"] as const,
  intro: "As the complexity of buildings to increase, the field of architecture.",
  stats: [
    { label: "Award Winning", value: "400" },
    { label: "Agents", value: "950+" },
    { label: "Property Ready", value: "200+" },
    { label: "of Experience", value: "17Y" },
    { label: "Happy Customer", value: "1K+" },
    { label: "across Dubai", value: "240" },
  ] as const satisfies readonly AboutShowcaseStat[],
  featuredProperty: {
    title: "Light And Modern Apartment",
    location: "California City, CA, USA",
    beds: 3,
    baths: 4,
    areaSqft: 1200,
    href: "#about-contact",
  },
  videoLabel: "Watch Video",
  cta: {
    label: "Contact Us",
    href: "#about-contact",
  },
}

export const ABOUT_FAQ_TITLE = "FAQs About A7 Group"

export const aboutTestimonialsSectionProps = {
  title: DEFAULT_MARKETING_TESTIMONIALS_TITLE,
  subtitle: DEFAULT_MARKETING_TESTIMONIALS_SUBTITLE,
  testimonials: DEFAULT_MARKETING_TESTIMONIALS,
} as const

export const aboutFaqSectionProps = {
  title: ABOUT_FAQ_TITLE,
  items: SERVICES_PAGE_FAQ_ITEMS,
  idPrefix: "about",
} as const

export const aboutContactSectionProps = {
  sectionId: "about-contact",
  formIdPrefix: "about",
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

export const ABOUT_PRIMARY_HREF = aboutPath()
