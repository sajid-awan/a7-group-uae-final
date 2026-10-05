"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion"
import type { AreaDetailContent } from "@/features/area/services/content"
import { getAreaDetailSectionId } from "@/features/area"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.08 as const }

type AreaDetailLifestyleSectionProps = {
  area: AreaDetailContent
}

function LifestyleTags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 pt-3">
      {tags.map((tag) => (
        <li
          key={tag}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-2 text-sm text-a7-black"
        >
          <span
            className="flex size-4 shrink-0 items-center justify-center rounded-[3px] border border-black  bg-white"
            aria-hidden
          >
            <Check className="size-2.5 stroke-[3] text-a7-black" />
          </span>
          {tag}
        </li>
      ))}
    </ul>
  )
}

export function AreaDetailLifestyleSection({ area }: AreaDetailLifestyleSectionProps) {
  const section = area.lifestyleSection
  const sectionId = getAreaDetailSectionId("lifestyle")

  return (
    <section id={sectionId} className="scroll-mt-28" aria-labelledby={`${sectionId}-heading`}>
      <motion.article
        className="rounded-2xl border border-border bg-white px-5 py-6 sm:px-7 sm:py-8 md:px-8 md:py-9"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <h2
          id={`${sectionId}-heading`}
          className="font-heading text-2xl font-bold text-a7-black md:text-3xl lg:text-[2rem]"
        >
          Lifestyle
        </h2>

        <div className="mt-5 space-y-5 md:mt-6">
          <Accordion
            type="single"
            collapsible
            defaultValue="lifestyle-overview"
            className="flex w-full flex-col gap-3"
          >
            {section.items.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="overflow-hidden rounded-2xl border-0 bg-[#F3F4F6] px-1"
              >
                <AccordionTrigger className="px-4 py-4 text-left text-sm font-semibold text-a7-black hover:no-underline md:text-base [&>svg]:text-a7-black">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0 text-sm leading-relaxed text-a7-text-gray md:text-base">
                  <p>{item.description}</p>
                  {item.tags?.length ? <LifestyleTags tags={item.tags} /> : null}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {section.footerNote ? (
            <p className="text-sm leading-relaxed text-a7-text-gray md:text-base">{section.footerNote}</p>
          ) : null}
        </div>
      </motion.article>
    </section>
  )
}
