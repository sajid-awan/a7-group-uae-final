import { Card, CardContent } from "@/shared/ui/card"
import { cn } from "@/shared/lib/cn"

import { MARKETING_FEATURE_ICONS, type MarketingFeatureIconKey } from "./marketing-feature-icons"

export type MarketingFeatureCardProps = {
  title: string
  /** Optional two-line title (renders as stacked lines). */
  titleLines?: readonly [string, string]
  description: string
  icon: MarketingFeatureIconKey
  /** `brand` = gold icon on cream circle (default). `plain` = black icon, no background. */
  iconTone?: "brand" | "plain"
  className?: string
}

export function MarketingFeatureCard({
  title,
  titleLines,
  description,
  icon,
  iconTone = "brand",
  className,
}: MarketingFeatureCardProps) {
  const Icon = MARKETING_FEATURE_ICONS[icon]

  return (
    <Card className={cn("h-full border border-border/60 bg-white shadow-sm", className)}>
      <CardContent className="flex h-full flex-col items-center px-5 py-8 text-center sm:px-6 sm:py-9">
        {iconTone === "plain" ? (
          <Icon size={40} className="text-a7-black" strokeWidth={1.75} aria-hidden />
        ) : (
          <span className="flex size-24 items-center justify-center rounded-full bg-[#FFFBEB]">
            <Icon size={40} className="text-primary" strokeWidth={1.75} aria-hidden />
          </span>
        )}
        {titleLines ? (
          <h3 className="mt-5 text-base font-semibold leading-snug text-a7-black md:text-lg font-inter">
            <span className="block">{titleLines[0]}</span>
            <span className="block">{titleLines[1]}</span>
          </h3>
        ) : (
          <h3 className="mt-5 text-base font-semibold leading-snug text-a7-black md:text-lg font-inter">{title}</h3>
        )}
        <p className="mt-2 text-sm leading-relaxed text-a7-text-gray">{description}</p>
      </CardContent>
    </Card>
  )
}
