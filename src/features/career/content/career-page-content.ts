import type { MarketingBenefitsGridSectionProps } from "@/shared/ui/marketing"
import type { MarketingImageTextSectionProps } from "@/shared/ui/marketing/marketing-image-text-section"
import { homeDeveloperCtaContent } from "@/features/developer/content/developer-cta-content"
import { careerDetailPath, careerPath } from "@/shared/lib/constants/routes"

export const CAREER_PAGE_TITLE = "Career"
export const CAREER_PAGE_DESCRIPTION =
  "Build your career with A7 Group and join a high-performing real estate team in Dubai."

export const careerHeroProps = {
  title: "Take the next step in your career",
  description:
    "Join a passionate team where growth, ownership, and mentorship are part of everyday work.",
  imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2200&auto=format&fit=crop",
  cta: {
    label: "See Open Roles",
    href: "#open-roles",
  },
  headingId: "career-hero-heading",
} as const

export const careerIntroSectionProps: MarketingImageTextSectionProps = {
  title: "A7 Group is a dynamic real estate company with client-first values.",
  paragraphs: [
    "At A7 Group, we are committed to connecting people with opportunities that improve lives. Our teams are built around trust, collaboration, and a deep understanding of Dubai's evolving property market.",
    "From advisory and sales to operations and marketing, every role contributes to a culture that values excellence and measurable impact.",
  ],
  imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
  imagePosition: "right",
  className: "bg-white pt-10 md:pt-14",
  headingId: "career-intro-heading",
}

export const CAREER_GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=900&auto=format&fit=crop",
] as const

export const careerWhyChooseSectionProps: MarketingBenefitsGridSectionProps = {
  title: "Why Choose A7 Group for Your Career?",
  benefits: [
    {
      id: "market-exposure",
      title: "Market Exposure",
      description: "Work directly with high-intent clients and premium inventory across Dubai communities.",
      icon: "globe",
    },
    {
      id: "mentorship",
      title: "Trusted Mentorship",
      description: "Learn from experienced leaders with clear coaching and practical, on-ground support.",
      icon: "users",
    },
    {
      id: "incentives",
      title: "Performance Incentives",
      description: "Get rewarded for consistent results with transparent targets and growth pathways.",
      icon: "trending",
    },
    {
      id: "growth",
      title: "Full Transparency",
      description: "Operate in a culture of accountability with clear systems, feedback, and progression.",
      icon: "award",
    },
  ],
  columns: 4,
  className: "bg-white pb-10 md:pb-14",
  headingId: "career-why-choose-heading",
}

export const careerTeamSectionProps: MarketingImageTextSectionProps = {
  title: "At A7 Group, we are a close-knit team that grows together.",
  paragraphs: [
    "You will collaborate with specialists across sales, marketing, operations, and advisory functions who are invested in helping each other perform at a high level.",
    "We believe long-term success comes from continuous learning, cross-team support, and building meaningful client relationships.",
  ],
  imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1400&auto=format&fit=crop",
  cta: {
    label: "Join A7 Group",
    href: "#open-roles",
  },
  className: "bg-white pb-10 md:pb-14",
  headingId: "career-team-heading",
}

export const careerMidCtaBannerProps = {
  variant: "expert" as const,
  title: "Need help? Talk to our expert.",
  subtitle: "Talk to our experts or browse through more properties.",
  imageUrl: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1800&auto=format&fit=crop",
  cta: {
    label: "Contact Us",
    href: "#career-contact",
  },
  phoneLabel: "+971 50 392 8461",
  phoneHref: "tel:+971503928461",
  headingId: "career-mid-cta-heading",
} as const

export const careerGrowthSectionProps: MarketingImageTextSectionProps = {
  title: "Join a team where you are rewarded for fulfilling your potential and growth.",
  paragraphs: [
    "From onboarding to advanced coaching, our environment is designed to help talented professionals progress faster while delivering consistent value to clients.",
  ],
  imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
  imagePosition: "right",
  className: "bg-white py-10 md:py-14",
  headingId: "career-growth-heading",
}

export type CareerOpening = {
  id: string
  title: string
  location: string
  href: string
}

export const CAREER_OPENINGS: readonly CareerOpening[] = [
  {
    id: "real-estate-consultant",
    title: "Real Estate Consultant (Arabic Speaker)",
    location: "Dubai, UAE",
    href: careerDetailPath("real-estate-consultant"),
  },
  {
    id: "property-management-specialist",
    title: "Property Management Specialist (Arabic Speaker)",
    location: "Dubai, UAE",
    href: careerDetailPath("property-management-specialist"),
  },
  {
    id: "legal-advisor",
    title: "Legal Advisor for Real Estate (Arabic Speaker)",
    location: "Dubai, UAE",
    href: careerDetailPath("legal-advisor"),
  },
  {
    id: "title-insurance-officer",
    title: "Title Insurance Officer (Arabic Speaker)",
    location: "Dubai, UAE",
    href: careerDetailPath("title-insurance-officer"),
  },
  {
    id: "transactions-coordinator",
    title: "Real Estate Transactions Coordinator (Arabic Speaker)",
    location: "Dubai, UAE",
    href: careerDetailPath("transactions-coordinator"),
  },
  {
    id: "land-registration-officer",
    title: "Land Registration Officer (Arabic Speaker)",
    location: "Dubai, UAE",
    href: careerDetailPath("land-registration-officer"),
  },
  {
    id: "compliance-officer",
    title: "Real Estate Compliance Officer (Arabic Speaker)",
    location: "Dubai, UAE",
    href: careerDetailPath("compliance-officer"),
  },
  {
    id: "acquisition-manager",
    title: "Property Acquisition Manager (Arabic Speaker)",
    location: "Dubai, UAE",
    href: careerDetailPath("acquisition-manager"),
  },
  {
    id: "development-officer",
    title: "Real Estate Development Officer (Arabic Speaker)",
    location: "Dubai, UAE",
    href: careerDetailPath("development-officer"),
  },
  {
    id: "negotiation-specialist",
    title: "Real Estate Negotiation Specialist (Arabic Speaker)",
    location: "Dubai, UAE",
    href: careerDetailPath("negotiation-specialist"),
  },
] as const

export const careerNewsletterProps = {
  ...homeDeveloperCtaContent,
  contactHref: careerPath(),
} as const

export type CareerJobSection = {
  id: string
  title: string
  items: readonly string[]
}

export type CareerJobDetail = {
  id: string
  title: string
  location: string
  breadcrumbsLabel: string
  introParagraphs: readonly string[]
  summaryParagraphs: readonly string[]
  sections: readonly CareerJobSection[]
  manager: {
    name: string
    title: string
    avatarUrl: string
  }
}

const DEFAULT_JOB_INTRO = [
  "At A7 Group, our mission is rooted in delivering seamless, personalized real estate solutions for both investors and families. With a client-first mindset, we simplify every step of the property journey.",
  "Founded with a vision to serve investors and homeowners, A7 Group has grown into a trusted name in Dubai real estate through disciplined execution and strong market knowledge.",
] as const

const DEFAULT_JOB_SUMMARY = [
  "At A7 Group, our mission is rooted in delivering seamless, personalized real estate solutions for both investors and families. We build long-term value through transparent communication and service quality.",
  "We take pride in our diverse and dynamic team, bringing together local expertise with global perspectives to serve our international clientele.",
] as const

const DEFAULT_JOB_SECTIONS: readonly CareerJobSection[] = [
  {
    id: "responsibilities",
    title: "Key Responsibilities",
    items: [
      "Lead client consultations, identify needs, and present tailored property solutions.",
      "Manage listing pipelines and coordinate with legal, finance, and operations teams.",
      "Support negotiation, documentation, and handover workflows with strong attention to detail.",
      "Track market trends and provide advisory input that supports client outcomes.",
      "Collaborate across departments to improve service standards and response times.",
    ] as const,
  },
  {
    id: "desired-qualifications",
    title: "Desired Qualifications",
    items: [
      "3+ years of professional experience in real estate, advisory, or related client-facing roles.",
      "Excellent communication skills in Arabic and English.",
      "Strong coordination skills with the ability to manage multiple priorities.",
      "Proactive, accountable, and quality-driven work approach.",
    ] as const,
  },
  {
    id: "technical",
    title: "Other Capabilities",
    items: [
      "Comfort with CRM tools and digital documentation workflows.",
      "Understanding of UAE property processes and compliance expectations.",
      "Ability to prepare structured reports and maintain accurate records.",
    ] as const,
  },
] as const

export const CAREER_JOB_DETAILS = Object.fromEntries(
  CAREER_OPENINGS.map((opening) => [
    opening.id,
    {
      id: opening.id,
      title: opening.title,
      location: opening.location,
      breadcrumbsLabel: opening.title,
      introParagraphs: DEFAULT_JOB_INTRO,
      summaryParagraphs: DEFAULT_JOB_SUMMARY,
      sections: DEFAULT_JOB_SECTIONS,
      manager: {
        name: "Angelo Vella",
        title: "Engagement Manager",
        avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
      },
    } satisfies CareerJobDetail,
  ])
) as Record<string, CareerJobDetail>

export function getAllCareerJobIds() {
  return CAREER_OPENINGS.map((opening) => opening.id)
}

export function getCareerJobById(id: string) {
  return CAREER_JOB_DETAILS[id]
}
