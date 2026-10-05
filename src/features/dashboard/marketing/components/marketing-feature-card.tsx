"use client"

import type { MarketingFeatureCard as MarketingFeatureCardType } from "../content/marketing-types"
import { cn } from "@/shared/lib/cn"

export type MarketingFeatureCardProps = {
  feature: MarketingFeatureCardType
  className?: string
  onClick?: (feature: MarketingFeatureCardType) => void
}

export function MarketingFeatureCard({ feature, className, onClick }: MarketingFeatureCardProps) {
  const Icon = feature.icon

  return (
    <button
      type="button"
      onClick={() => onClick?.(feature)}
      disabled={feature.disabled}
      className={cn(
        "flex h-full w-full items-start gap-4 rounded-3xl p-6 text-left shadow-[0px_1px_2px_0px_rgba(0,0,0,0.04)] transition-colors hover:brightness-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        feature.cardClassName,
        feature.disabled ? "cursor-not-allowed opacity-60 hover:brightness-[1]" : null,
        className
      )}
    >
      <span
        className={cn(
          "flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/80",
          feature.iconClassName
        )}
      >
        <Icon className="size-5" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-inter text-lg font-semibold text-neutral-900">{feature.title}</span>
        <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
          {feature.description}
        </span>
      </span>
    </button>
  )
}

MarketingFeatureCard.displayName = "MarketingFeatureCard"
