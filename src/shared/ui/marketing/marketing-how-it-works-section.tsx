import { MarketingBenefitsGridSection, type MarketingFeatureItem } from "./marketing-benefits-grid-section"

export type MarketingHowItWorksStep = MarketingFeatureItem

export type MarketingHowItWorksSectionProps = {
  title: string
  subtitle?: string
  steps: readonly MarketingFeatureItem[]
  headingId?: string
  className?: string
}

/** Same card grid as mortgages “Why Work With Us”, with four columns. */
export function MarketingHowItWorksSection({
  title,
  subtitle,
  steps,
  headingId = "marketing-how-it-works-heading",
  className,
}: MarketingHowItWorksSectionProps) {
  return (
    <MarketingBenefitsGridSection
      title={title}
      subtitle={subtitle}
      benefits={steps}
      columns={4}
      headingId={headingId}
      className={className}
    />
  )
}
