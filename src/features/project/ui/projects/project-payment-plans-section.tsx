"use client"

import { CreditCard, HandCoins, Hexagon, Power } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

import type { ProjectPaymentPlan, ProjectPaymentPlanIcon } from "@/features/property"
import { cn } from "@/shared/lib/cn"

const ICON_MAP: Record<ProjectPaymentPlanIcon, LucideIcon> = {
  installment: Power,
  construction: Hexagon,
  handover: HandCoins,
  downPayment: CreditCard,
}

type ProjectPaymentPlansSectionProps = {
  plans: ProjectPaymentPlan[]
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function ProjectPaymentPlansSection({ plans, className }: ProjectPaymentPlansSectionProps) {
  if (plans.length === 0) return null

  return (
    <section
      className={cn("mx-auto container bg-white px-6 py-7.5 md:px-10", className)}
      aria-labelledby="project-payment-plans-heading"
    >
      <motion.h2
        id="project-payment-plans-heading"
        className="font-heading text-2xl font-bold text-a7-black md:text-3xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        Payment plans
      </motion.h2>

      <div className="mt-8 flex gap-4 overflow-x-auto pb-1 scrollbar-none md:grid md:grid-cols-4 md:overflow-visible">
        {plans.map((plan, index) => {
          const Icon = ICON_MAP[plan.icon]
          return (
            <motion.div
              key={`${plan.icon}-${plan.label}`}
              className="bg-a7-brand-gray-surface flex min-h-[120px] min-w-[240px] shrink-0 items-center gap-5 rounded-xl px-6 py-6 md:min-w-0"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 + index * 0.08 }}
            >
              <Icon className="text-a7-brand-gold size-7 shrink-0" strokeWidth={1.25} aria-hidden />
              <div className="min-w-0 text-left">
                <p className="text-a7-brand-gold font-heading text-[2.25rem] font-bold leading-none md:text-[2.5rem]">
                  {plan.percentage}
                </p>
                <p className="text-a7-brand-text-muted mt-2 text-[15px] leading-snug">{plan.label}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
