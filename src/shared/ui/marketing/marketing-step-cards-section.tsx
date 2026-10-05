"use client"

import { motion } from "framer-motion"

import { cn } from "@/shared/lib/cn"

import { MarketingStepCard } from "./marketing-step-card"
import type { MarketingFeatureIconKey } from "./marketing-feature-icons"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export type MarketingStepItem = {
  id: string
  stepLabel: string
  title: string
  description: string
  icon?: MarketingFeatureIconKey
}

export type MarketingStepCardsSectionProps = {
  title: string
  subtitle?: string
  steps: readonly MarketingStepItem[]
  columns?: 3 | 4
  /** Section background. Defaults to muted panel gray. */
  surface?: "white" | "muted"
  /** Show icon above step label on each card. Defaults to true. */
  showStepIcons?: boolean
  headingId?: string
  className?: string
}

const stepColumnClasses: Record<3 | 4, string> = {
  3: "lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
}

export function MarketingStepCardsSection({
  title,
  subtitle,
  steps,
  columns = 3,
  surface = "muted",
  showStepIcons = true,
  headingId = "marketing-step-cards-heading",
  className,
}: MarketingStepCardsSectionProps) {
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

        <ul
          className={cn(
            "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:gap-5",
            stepColumnClasses[columns]
          )}
        >
          {steps.map((step, index) => (
            <motion.li
              key={step.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, ease: EASE, delay: 0.05 + index * 0.08 }}
            >
              <MarketingStepCard
                stepLabel={step.stepLabel}
                title={step.title}
                description={step.description}
                icon={step.icon}
                showIcon={showStepIcons}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
