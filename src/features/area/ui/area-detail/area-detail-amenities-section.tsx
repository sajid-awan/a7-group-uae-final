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

type AreaDetailAmenitiesSectionProps = {
  area: AreaDetailContent
}

function AmenityFeatureTag({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-border bg-white px-3.5 py-3">
      <span
        className="flex size-8 shrink-0 items-center justify-center rounded-md bg-a7-brand-gold-soft"
        aria-hidden
      >
        <Check className="size-4 stroke-[2.5] text-a7-black" />
      </span>
      <span className="text-sm text-a7-black md:text-[15px]">{label}</span>
    </li>
  )
}

export function AreaDetailAmenitiesSection({ area }: AreaDetailAmenitiesSectionProps) {
  const section = area.amenitiesSection
  const sectionId = getAreaDetailSectionId("amenities")

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
          Amenities
        </h2>

        <div className="mt-5 space-y-6 md:mt-6 md:space-y-8">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {section.featureTags.map((tag, index) => (
              <AmenityFeatureTag key={`${tag}-${index}`} label={tag} />
            ))}
          </ul>

          <Accordion type="single" collapsible className="flex w-full flex-col gap-3">
            {section.accordionItems.map((item) => (
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
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.article>
    </section>
  )
}
