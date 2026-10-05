"use client"

import { motion } from "framer-motion"

import { cn } from "@/shared/lib/cn"

import { MarketingFeatureCard } from "./marketing-feature-card"
import type { MarketingFeatureIconKey } from "./marketing-feature-icons"

export type MarketingFeatureItem = {
  id: string
  title: string
  titleLines?: readonly [string, string]
  description: string
  icon: MarketingFeatureIconKey
}

/** @deprecated Use MarketingFeatureItem */
export type MarketingBenefitCard = MarketingFeatureItem

export type MarketingBenefitsGridSectionProps = {
  title: string
  subtitle?: string
  benefits: readonly MarketingFeatureItem[]
  /** Number of columns on large screens. Defaults to 3. */
  columns?: 3 | 4
  /** Section background. Defaults to muted panel gray. */
  surface?: "muted" | "white"
  /** Card icon style. Defaults to gold-on-cream circle. */
  iconTone?: "brand" | "plain"
  headingId?: string
  className?: string
}

const columnClasses: Record<3 | 4, string> = {
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function MarketingBenefitsGridSection({
  title,
  subtitle,
  benefits,
  columns = 3,
  surface = "muted",
  iconTone = "brand",
  headingId = "marketing-benefits-heading",
  className,
}: MarketingBenefitsGridSectionProps) {
  return (
    <section
      className={cn(
        "py-10 md:py-14",
        surface === "white" ? "bg-white" : "bg-a7-panel-surface",
        className
      )}
      aria-labelledby={headingId}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <h2
            id={headingId}
            className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-tight tracking-tight text-a7-black"
          >
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-sm leading-relaxed text-a7-text-gray md:text-base">{subtitle}</p>
          ) : null}
        </motion.div>

        <ul className={cn("mt-8 grid grid-cols-1 gap-4 lg:mt-10 lg:gap-5", columnClasses[columns])}>
          {benefits.map((item, index) => (
            <li key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.8, ease: EASE, delay: 0.05 + index * 0.07 }}
              >
                <MarketingFeatureCard
                  title={item.title}
                  titleLines={item.titleLines}
                  description={item.description}
                  icon={item.icon}
                  iconTone={iconTone}
                />
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
