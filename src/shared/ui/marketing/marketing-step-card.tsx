import { Card, CardContent } from "@/shared/ui/card"
import { cn } from "@/shared/lib/cn"

import { MARKETING_FEATURE_ICONS, type MarketingFeatureIconKey } from "./marketing-feature-icons"

export type MarketingStepCardProps = {
  stepLabel: string
  title: string
  description: string
  icon?: MarketingFeatureIconKey
  /** When false, renders step label → title → description only (plots-style). */
  showIcon?: boolean
  className?: string
}

/** Centered step card — optional icon, step label, title, and body (no CTA). */
export function MarketingStepCard({
  stepLabel,
  title,
  description,
  icon,
  showIcon = true,
  className,
}: MarketingStepCardProps) {
  const Icon = icon ? MARKETING_FEATURE_ICONS[icon] : null

  return (
    <Card className={cn("h-full border border-border bg-white shadow-none", className)}>
      <CardContent className="flex h-full flex-col items-center px-5 py-8 text-center sm:px-6 sm:py-9">
        {showIcon && Icon ? (
          <Icon className="size-10 shrink-0 text-a7-black" strokeWidth={1.5} aria-hidden />
        ) : null}
        <p
          className={cn(
            "text-xs font-medium text-a7-text-gray",
            showIcon && Icon ? "mt-4" : undefined
          )}
        >
          {stepLabel}
        </p>
        <h3 className="mt-2 font-inter text-base font-bold leading-snug text-a7-black md:text-lg">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-a7-text-gray">{description}</p>
      </CardContent>
    </Card>
  )
}
