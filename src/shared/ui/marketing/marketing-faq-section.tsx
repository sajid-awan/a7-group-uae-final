"use client"

import { motion } from "framer-motion"

import { AccordionList } from "@/shared/ui/accordion"
import type { ProjectFaqItem } from "@/features/property"
import { cn } from "@/shared/lib/cn"

export type MarketingFaqSectionProps = {
  title: string
  items: readonly ProjectFaqItem[]
  idPrefix?: string
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function MarketingFaqSection({
  title,
  items,
  idPrefix = "marketing",
  className,
}: MarketingFaqSectionProps) {
  const accordionItems = items.map((item, index) => ({
    title: item.title,
    content: item.content,
    value: `${idPrefix}-faq-${index + 1}`,
  }))

  return (
    <section
      className={cn("border-t border-border bg-white", className)}
      aria-labelledby={`${idPrefix}-faq-heading`}
    >
      <div className="container mx-auto px-4 py-10 sm:px-6 md:py-14">
        <motion.h2
          id={`${idPrefix}-faq-heading`}
          className="font-heading text-2xl font-bold text-a7-black md:text-3xl lg:text-[2rem]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
        >
          <AccordionList
            items={accordionItems}
            className={cn(
              "mt-6 md:mt-8",
              "[&_[data-slot=accordion-item]]:border-border/70",
              "[&_[data-slot=accordion-trigger]]:py-5",
              "[&_[data-slot=accordion-trigger]]:text-base [&_[data-slot=accordion-trigger]]:font-medium [&_[data-slot=accordion-trigger]]:text-a7-black",
              "md:[&_[data-slot=accordion-trigger]]:text-lg",
              "[&_[data-slot=accordion-content]]:pb-5 [&_[data-slot=accordion-content]]:text-sm [&_[data-slot=accordion-content]]:leading-relaxed [&_[data-slot=accordion-content]]:text-a7-text-gray",
              "md:[&_[data-slot=accordion-content]]:text-base"
            )}
          />
        </motion.div>
      </div>
    </section>
  )
}
