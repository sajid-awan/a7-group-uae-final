"use client"

import { motion } from "framer-motion"

import { FeatureCard } from "@/shared/ui/feature-card"
import { cn } from "@/shared/lib/cn"

import { MARKETING_FEATURE_ICONS, type MarketingFeatureIconKey } from "./marketing-feature-icons"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export type MarketingAudienceCard = {
  id: string
  title: string
  lead: string
  checklistItems: readonly string[]
  icon: MarketingFeatureIconKey
}

export type MarketingAudienceChecklistSectionProps = {
  title: string
  subtitle?: string
  audiences: readonly MarketingAudienceCard[]
  /** Section background. Defaults to white. */
  surface?: "white" | "muted"
  /** Hide "Step 1" on audience cards. Defaults to false (hidden). */
  showStepLabel?: boolean
  headingId?: string
  className?: string
}

export function MarketingAudienceChecklistSection({
  title,
  subtitle,
  audiences,
  surface = "white",
  showStepLabel = false,
  headingId = "marketing-audience-heading",
  className,
}: MarketingAudienceChecklistSectionProps) {
  return (
    <section
      className={cn(
        "py-10 md:py-14",
        surface === "muted" ? "bg-a7-panel-surface" : "bg-white",
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

        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-5">
          {audiences.map((audience, index) => {
            const Icon = MARKETING_FEATURE_ICONS[audience.icon]
            return (
              <motion.li
                key={audience.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.8, ease: EASE, delay: 0.05 + index * 0.08 }}
              >
                <FeatureCard
                  variant="checklist"
                  showStepLabel={showStepLabel}
                  title={audience.title}
                  lead={audience.lead}
                  checklistItems={[...audience.checklistItems]}
                  icon={Icon}
                  action={null}
                  className="h-full"
                />
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
