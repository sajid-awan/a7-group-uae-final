import type { BreadcrumbItem } from "@/shared/ui/breadcrumb"
import type { MarketingAudienceCard } from "@/shared/ui/marketing/marketing-audience-checklist-section"
import type { MarketingFeatureItem } from "@/shared/ui/marketing/marketing-benefits-grid-section"
import type {
  MarketingMarketInsightColumn,
  MarketingMarketInsightStat,
} from "@/shared/ui/marketing/marketing-market-insights-section"
import type { PlotListingItem } from "@/shared/ui/marketing/marketing-plots-listings-section"
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
import { propertiesListPath, sellPropertyPath, servicesPath } from "@/shared/lib/constants/routes"

export const PLOTS_PAGE_TITLE = "Your Trusted Gateway to Land Ownership in Dubai"

export const PLOTS_HERO_DESCRIPTION =
  "Discover prime residential and investment plots across Dubai with verified titles, transparent pricing, and end-to-end support from search to transfer."

export const PLOTS_HERO_IMAGE =
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop"

export const PLOTS_BREADCRUMBS: BreadcrumbItem[] = [
  { kind: "home", href: "/" },
  { kind: "link", href: servicesPath(), label: "Services" },
  { kind: "current", label: "Plots" },
]

export const plotsHeroProps = {
  headingId: "plots-hero-heading",
  title: PLOTS_PAGE_TITLE,
  description: PLOTS_HERO_DESCRIPTION,
  imageUrl: PLOTS_HERO_IMAGE,
  imageClassName: "object-cover object-center",
  align: "left" as const,
  parallax: true,
  cta: {
    label: "Explore Plots",
    href: "#plots-listings",
  },
}

const PLOT_BENEFIT_DESC =
  "Direct access to verified landowners and full compliance with DLD and RERA ensure safe, risk-free transactions."

export const PLOTS_WHY_CHOOSE_TITLE = "Why Choose A7 Group for Plots?"

export const PLOTS_WHY_CHOOSE_BENEFITS: readonly MarketingFeatureItem[] = [
  {
    id: "expertise",
    title: "Market Expertise",
    description: PLOT_BENEFIT_DESC,
    icon: "search",
  },
  {
    id: "network",
    title: "Trusted Network",
    description: PLOT_BENEFIT_DESC,
    icon: "shieldTick",
  },
  {
    id: "compliance",
    title: "Regulatory Compliance",
    description: PLOT_BENEFIT_DESC,
    icon: "barChart",
  },
  {
    id: "visibility",
    title: "Plot Visibility",
    description: PLOT_BENEFIT_DESC,
    icon: "eye",
  },
]

export const plotsWhyChooseSectionProps = {
  title: PLOTS_WHY_CHOOSE_TITLE,
  benefits: PLOTS_WHY_CHOOSE_BENEFITS,
  columns: 4 as const,
  surface: "white" as const,
  iconTone: "plain" as const,
  headingId: "plots-why-choose-heading",
  className: "border-t-0",
}

export const PLOTS_WHO_BUYS_TITLE = "Who Buys Plots With A7 Group"

export const PLOTS_WHO_BUYS_SUBTITLE =
  "Start The Effortless Journey Of Listing Your Property With Us, Step By Step."

export const PLOTS_AUDIENCE_CARDS: readonly MarketingAudienceCard[] = [
  {
    id: "developers",
    title: "For Developers",
    lead: PLOT_BENEFIT_DESC,
    checklistItems: [
      "Bulk plot sourcing and due diligence",
      "Joint-venture and land-swap structuring",
      "Municipality and master-developer liaison",
      "Phased acquisition strategies",
    ],
    icon: "search",
  },
  {
    id: "investors",
    title: "For Investors",
    lead: PLOT_BENEFIT_DESC,
    checklistItems: [
      "Off-plan and ready plot comparisons",
      "Title and escrow verification",
      "Capital appreciation modelling",
      "Resale and handover support",
    ],
    icon: "shieldTick",
  },
  {
    id: "homebuyers",
    title: "For Homebuyers",
    lead: PLOT_BENEFIT_DESC,
    checklistItems: [
      "Community and school catchment guidance",
      "Plot size and orientation advice",
      "Mortgage and payment-plan options",
      "Snagging and transfer coordination",
    ],
    icon: "barChart",
  },
]

export const plotsAudienceSectionProps = {
  title: PLOTS_WHO_BUYS_TITLE,
  subtitle: PLOTS_WHO_BUYS_SUBTITLE,
  audiences: PLOTS_AUDIENCE_CARDS,
  surface: "muted" as const,
  showStepLabel: false,
  headingId: "plots-who-buys-heading",
}

const PLOT_GALLERY = [
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
] as const

const PLOT_DESCRIPTION =
  "Premium land parcel with flexible payment terms, strong connectivity, and growing demand from end users and developers."

export const PLOTS_LISTINGS_TITLE = "Explore Land Across Dubai"

export const PLOTS_LISTINGS: readonly PlotListingItem[] = [
  {
    id: "emaar-south",
    category: "off-plan",
    imageUrls: PLOT_GALLERY,
    propertyTypes: "Residential Plot",
    title: "Golf Ville at Emaar South",
    price: "AED 25,000,000",
    location: "Emaar South, Dubai",
    description: PLOT_DESCRIPTION,
    handover: "Handover: 2026",
    ribbonLabels: ["Off-Plan Plot"],
    href: propertiesListPath(),
  },
  {
    id: "dubailand-villas",
    category: "sale",
    imageUrls: PLOT_GALLERY,
    propertyTypes: "Villa Plot",
    title: "Dubailand Villa Plots",
    price: "AED 8,500,000",
    location: "Dubailand, Dubai",
    description: PLOT_DESCRIPTION,
    handover: "Handover: 2025",
    ribbonLabels: ["Ready Plot"],
    href: propertiesListPath(),
  },
  {
    id: "meydan-horizon",
    category: "sale",
    imageUrls: PLOT_GALLERY,
    propertyTypes: "Commercial Plot",
    title: "Meydan Horizon Plot",
    price: "AED 14,200,000",
    location: "Meydan, Dubai",
    description: PLOT_DESCRIPTION,
    handover: "Handover: 2024",
    ribbonLabels: ["Ready Plot"],
    href: propertiesListPath(),
  },
  {
    id: "arabian-ranches",
    category: "off-plan",
    imageUrls: PLOT_GALLERY,
    propertyTypes: "Townhouse Plot",
    title: "Arabian Ranches 3 Plot",
    price: "AED 12,750,000",
    location: "Arabian Ranches, Dubai",
    description: PLOT_DESCRIPTION,
    handover: "Handover: 2027",
    ribbonLabels: ["Off-Plan Plot"],
    href: propertiesListPath(),
  },
  {
    id: "jvc-residential",
    category: "sale",
    imageUrls: PLOT_GALLERY,
    propertyTypes: "Residential Plot",
    title: "JVC Corner Plot",
    price: "AED 6,200,000",
    location: "Jumeirah Village Circle",
    description: PLOT_DESCRIPTION,
    handover: "Handover: 2025",
    ribbonLabels: ["Completed Plot"],
    href: propertiesListPath(),
  },
  {
    id: "damac-hills",
    category: "off-plan",
    imageUrls: PLOT_GALLERY,
    propertyTypes: "Villa Plot",
    title: "Damac Hills Plot",
    price: "AED 9,950,000",
    location: "Damac Hills, Dubai",
    description: PLOT_DESCRIPTION,
    handover: "Handover: 2026",
    ribbonLabels: ["Off-Plan Plot"],
    href: propertiesListPath(),
  },
]

export const plotsListingsSectionProps = {
  title: PLOTS_LISTINGS_TITLE,
  listings: PLOTS_LISTINGS,
  headingId: "plots-listings-heading",
  sectionId: "plots-listings",
  className: "scroll-mt-24",
}

export const PLOTS_HOW_IT_WORKS_TITLE = "How It Works"

const PLOT_STEP_DESC = "Direct access to verified landowners and full compliance."

export const PLOTS_HOW_IT_WORKS_SUBTITLE =
  "Start The Effortless Journey Of Listing Your Property With Us, Step By Step."

export const PLOTS_HOW_IT_WORKS_STEPS: readonly MarketingStepItem[] = [
  {
    id: "requirements",
    stepLabel: "Step 1",
    title: "Share Your Requirements",
    description: PLOT_STEP_DESC,
  },
  {
    id: "options",
    stepLabel: "Step 2",
    title: "Get Verified Options",
    description: PLOT_STEP_DESC,
  },
  {
    id: "paperwork",
    stepLabel: "Step 3",
    title: "We Handle Paperwork",
    description: PLOT_STEP_DESC,
  },
  {
    id: "secure",
    stepLabel: "Step 4",
    title: "Secure Your Plot",
    description: PLOT_STEP_DESC,
  },
]

export const plotsHowItWorksSectionProps = {
  title: PLOTS_HOW_IT_WORKS_TITLE,
  subtitle: PLOTS_HOW_IT_WORKS_SUBTITLE,
  steps: PLOTS_HOW_IT_WORKS_STEPS,
  columns: 4 as const,
  surface: "white" as const,
  showStepIcons: false,
  headingId: "plots-how-it-works-heading",
}

export const PLOTS_MARKET_INSIGHTS_TITLE = "Dubai Market Insights 2025"

export const PLOTS_MARKET_INSIGHTS_SUBTITLE =
  "Start The Effortless Journey Of Listing Your Property With Us, Step By Step."

export const PLOTS_MARKET_INSIGHTS_BACKGROUND =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop"

export const PLOTS_MARKET_STATS: readonly MarketingMarketInsightStat[] = [
  {
    id: "plots-count",
    primaryValue: "2,833",
    primaryLabel: "Plots",
    secondaryValue: "25.2B AED",
    secondaryLabel: "Sales Value",
    yoyChange: "+63% YoY 2024",
  },
  {
    id: "transactions",
    primaryValue: "1,240",
    primaryLabel: "Transactions",
    secondaryValue: "18.4B AED",
    secondaryLabel: "Sales Value",
    yoyChange: "+63% YoY 2023",
  },
  {
    id: "communities",
    primaryValue: "48+",
    primaryLabel: "Communities",
    secondaryValue: "12.1B AED",
    secondaryLabel: "Sales Value",
    yoyChange: "+63% YoY 2022",
  },
  {
    id: "launches",
    primaryValue: "120+",
    primaryLabel: "New Launches",
    secondaryValue: "9.6B AED",
    secondaryLabel: "Sales Value",
    yoyChange: "+63% YoY 2021",
  },
]

export const PLOTS_MARKET_INSIGHTS: readonly MarketingMarketInsightColumn[] = [
  {
    id: "hotspots",
    title: "Hotspot Communities",
    description: "Strong demand in Dubai Hills, Palm Jebel Ali, and JVC.",
    icon: "trending",
  },
  {
    id: "investors",
    title: "New Investors",
    description:
      "First-time land buyers and regional investors entering Dubai through structured off-plan and ready plot opportunities.",
    icon: "users",
  },
  {
    id: "off-plan",
    title: "Off-Plan Growth",
    description:
      "Off-plan plot sales continue to outperform as buyers target appreciation ahead of handover and custom-build potential.",
    icon: "globe",
  },
]

export const plotsMarketInsightsSectionProps = {
  title: PLOTS_MARKET_INSIGHTS_TITLE,
  subtitle: PLOTS_MARKET_INSIGHTS_SUBTITLE,
  stats: PLOTS_MARKET_STATS,
  insights: PLOTS_MARKET_INSIGHTS,
  backgroundImageUrl: PLOTS_MARKET_INSIGHTS_BACKGROUND,
  headingId: "plots-market-insights-heading",
}

export const PLOTS_LEGACY_TITLE = "A7 Group: From Land to Legacy"

export const PLOTS_LEGACY_PARAGRAPHS: readonly string[] = [
  "Whether you are securing a single residential plot or assembling land for a master development, A7 Group combines market intelligence, legal diligence, and negotiation support so every transaction is structured for long-term value.",
  "Our advisors work with DLD-approved processes, trusted survey partners, and financing specialists to move you from discovery to transfer with confidence.",
] as const

export const PLOTS_LEGACY_IMAGE =
  "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1200&auto=format&fit=crop"

export const plotsLegacySectionProps = {
  title: PLOTS_LEGACY_TITLE,
  paragraphs: PLOTS_LEGACY_PARAGRAPHS,
  imageUrl: PLOTS_LEGACY_IMAGE,
  imagePosition: "left" as const,
  primaryCta: {
    label: "List My Plot",
    href: sellPropertyPath(),
  },
  secondaryCta: {
    label: "Buy Plot",
    href: "#plots-contact",
  },
  headingId: "plots-legacy-heading",
}

export const PLOTS_FAQ_TITLE = "FAQs About Plots in Dubai"

export const plotsContactSectionProps = {
  sectionId: "plots-contact",
  formIdPrefix: "plots",
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

export const plotsTestimonialsSectionProps = {
  title: DEFAULT_MARKETING_TESTIMONIALS_TITLE,
  subtitle: DEFAULT_MARKETING_TESTIMONIALS_SUBTITLE,
  testimonials: DEFAULT_MARKETING_TESTIMONIALS,
} as const

export const plotsFaqSectionProps = {
  title: PLOTS_FAQ_TITLE,
  items: SERVICES_PAGE_FAQ_ITEMS,
  idPrefix: "plots",
} as const
