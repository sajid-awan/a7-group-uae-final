"use client"

import Image from "next/image"
import { TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"

import { MARKETING_FEATURE_ICONS, type MarketingFeatureIconKey } from "./marketing-feature-icons"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export type MarketingMarketInsightStat = {
  id: string
  primaryValue: string
  primaryLabel: string
  secondaryValue: string
  secondaryLabel: string
  yoyChange: string
}

export type MarketingMarketInsightColumn = {
  id: string
  title: string
  description: string
  icon: MarketingFeatureIconKey
}

export type MarketingMarketInsightsSectionProps = {
  title: string
  subtitle?: string
  stats: readonly MarketingMarketInsightStat[]
  insights: readonly MarketingMarketInsightColumn[]
  backgroundImageUrl: string
  headingId?: string
  className?: string
}

const glassCardClassName =
  "rounded-xl border border-white/25 bg-white/12 shadow-sm backdrop-blur-lg"

function MarketInsightStatCard({
  primaryValue,
  primaryLabel,
  secondaryValue,
  secondaryLabel,
  yoyChange,
}: Omit<MarketingMarketInsightStat, "id">) {
  return (
    <article className={cn(glassCardClassName, "flex h-full min-h-[146px] flex-col px-4 py-4 sm:px-5 sm:py-5")}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-heading text-[1.9rem] font-semibold leading-none text-white sm:text-[2.05rem]">
            {primaryValue}
          </p>
          <p className="mt-1 text-xs text-white/75">{primaryLabel}</p>
        </div>
        <div className="shrink-0 text-right">
          <span
            className="inline-flex size-9 items-center justify-center rounded-md bg-primary text-a7-black shadow-sm"
            aria-hidden
          >
            <TrendingUp className="size-4" strokeWidth={2.25} />
          </span>
          <p className="mt-1.5 text-[10px] leading-tight text-white/65">{yoyChange}</p>
        </div>
      </div>
      <div className="my-3 h-px w-full bg-white/20" aria-hidden />
      <div>
        <p className="text-xl font-bold leading-none text-white sm:text-2xl">
          <AedText text={secondaryValue} />
        </p>
        <p className="mt-1 text-xs text-white/75">{secondaryLabel}</p>
      </div>
    </article>
  )
}

function MarketInsightFeatureCard({
  title,
  description,
  icon,
}: Omit<MarketingMarketInsightColumn, "id">) {
  const Icon = MARKETING_FEATURE_ICONS[icon]

  return (
    <article className={cn(glassCardClassName, "h-full px-4 py-5 sm:px-5 sm:py-6")}>
      <div className="flex items-start gap-3">
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-a7-black shadow-sm"
          aria-hidden
        >
          <Icon className="size-5" strokeWidth={1.75} />
        </span>
        <h3 className="pt-1.5 text-base font-semibold leading-snug text-white sm:text-lg">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/80">{description}</p>
    </article>
  )
}

export function MarketingMarketInsightsSection({
  title,
  subtitle,
  stats,
  insights,
  backgroundImageUrl,
  headingId = "marketing-market-insights-heading",
  className,
}: MarketingMarketInsightsSectionProps) {
  return (
    <section
      className={cn("relative isolate overflow-hidden bg-[#0a2832] py-8 text-white md:py-10", className)}
      aria-labelledby={headingId}
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <Image
          src={backgroundImageUrl}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-[#0a2832]/38" />
        <div className="absolute inset-0 bg-linear-to-b from-[#055B72]/72 via-[#05485A]/58 to-[#02323D]/68" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <h2
            id={headingId}
            className="font-heading text-[clamp(1.55rem,3.6vw,2.4rem)] font-semibold leading-tight tracking-tight"
          >
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 text-xs leading-relaxed text-white/85 md:text-sm">{subtitle}</p>
          ) : null}
        </motion.div>

        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.li
              key={stat.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, ease: EASE, delay: 0.05 + index * 0.08 }}
            >
              <MarketInsightStatCard
                primaryValue={stat.primaryValue}
                primaryLabel={stat.primaryLabel}
                secondaryValue={stat.secondaryValue}
                secondaryLabel={stat.secondaryLabel}
                yoyChange={stat.yoyChange}
              />
            </motion.li>
          ))}
        </ul>

        <ul className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {insights.map((insight, index) => (
            <motion.li
              key={insight.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.75, ease: EASE, delay: 0.1 + index * 0.08 }}
            >
              <MarketInsightFeatureCard
                title={insight.title}
                description={insight.description}
                icon={insight.icon}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
