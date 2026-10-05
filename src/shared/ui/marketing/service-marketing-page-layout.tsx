import type { ReactNode } from "react"

import { HomeDeveloperCtaNewsletter } from "@/shared/ui/marketing/home-developer-cta-newsletter"
import { ProjectOverviewSection } from "@/features/project/ui/projects/project-overview-section"
import { homeDeveloperCtaContent } from "@/features/developer/content/developer-cta-content"
import type { ProjectOverviewBlock } from "@/features/property"

import {
  MarketingContactSection,
  type MarketingContactSectionProps,
} from "./marketing-contact-section"
import { MarketingFaqSection, type MarketingFaqSectionProps } from "./marketing-faq-section"
import {
  MarketingTestimonialsSection,
  type MarketingTestimonialsSectionProps,
} from "./marketing-testimonials-section"

export type ServiceMarketingPageLayoutProps = {
  hero: ReactNode
  intro?: ReactNode
  grid: ReactNode
  /** Rendered after the grid and before the overview section. */
  afterGrid?: ReactNode
  overviewSections?: readonly ProjectOverviewBlock[]
  testimonialsSectionProps: MarketingTestimonialsSectionProps
  faqSectionProps: MarketingFaqSectionProps
  contactSectionProps: MarketingContactSectionProps
}

/** Shared full-width marketing page shell used by Services and service detail pages. */
export function ServiceMarketingPageLayout({
  hero,
  intro,
  grid,
  afterGrid,
  overviewSections,
  testimonialsSectionProps,
  faqSectionProps,
  contactSectionProps,
}: ServiceMarketingPageLayoutProps) {
  return (
    <>
      {hero}
      {intro ?? null}
      {grid}
      {afterGrid}
      {overviewSections && overviewSections.length > 0 ? (
        <ProjectOverviewSection sections={[...overviewSections]} className="border-t border-border" />
      ) : null}
      <MarketingTestimonialsSection {...testimonialsSectionProps} />
      <MarketingFaqSection {...faqSectionProps} />
      <MarketingContactSection {...contactSectionProps} />
      <HomeDeveloperCtaNewsletter {...homeDeveloperCtaContent} />
    </>
  )
}
