"use client"

import { motion } from "framer-motion"
import { AccordionList } from "@/shared/ui/accordion"
import { cn } from "@/shared/lib/cn"
import { HOME_PAGE_FAQ_ITEMS } from "@/features/home/content/home-page-demos"
import type { ProjectFaqItem } from "@/features/property"

export type HomeFaqSectionProps = {
  className?: string
  title?: string
  items?: readonly ProjectFaqItem[]
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.15 as const }

export function HomeFaqSection({
  className,
  title = "Frequently asked questions",
  items = HOME_PAGE_FAQ_ITEMS,
}: HomeFaqSectionProps) {
  const faqAccordionItems = items.map((item, index) => ({
    title: item.title,
    content: item.content,
    value: `faq-${index + 1}`,
  }))

  return (
    <section className={cn("bg-white py-12 md:py-16 lg:py-16", className)} aria-label="Frequently asked questions">
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-3 lg:items-start lg:gap-16">
        <motion.h2
          className="font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight tracking-tight text-a7-black md:text-[40px] max-w-sm"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE, delay: 0.22 }}
          className="lg:col-span-2"
        >
          <AccordionList
            items={faqAccordionItems}
            className={cn(
              "**:data-[slot=accordion-trigger]:py-5",
              "**:data-[slot=accordion-trigger]:text-base **:data-[slot=accordion-trigger]:font-bold **:data-[slot=accordion-trigger]:text-a7-black",
              "md:**:data-[slot=accordion-trigger]:text-lg",
              "**:data-[slot=accordion-content]:text-sm **:data-[slot=accordion-content]:text-a7-text-gray md:**:data-[slot=accordion-content]:text-base"
            )}
          />
        </motion.div>
      </div>
    </section>
  )
}
