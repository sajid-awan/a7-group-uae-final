"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

import type { ProjectHighlight } from "@/features/property"
import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.1 as const }

type PropertyAboutSectionProps = {
  description: string
  highlights: ProjectHighlight[]
  className?: string
}

const READ_MORE_THRESHOLD = 380

function DetailHighlightCard({ label, value }: ProjectHighlight) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-a7-panel-surface px-3 py-5 text-center">
      <span className="text-a7-brand-gold flex size-6 items-center justify-center rounded-full">
        <Check className="size-4 stroke-[2.5]" aria-hidden />
      </span>
      <p className="mt-3 text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-bold text-a7-black">
        <AedText text={value} />
      </p>
    </div>
  )
}

export function PropertyAboutSection({ description, highlights, className }: PropertyAboutSectionProps) {
  const [expanded, setExpanded] = useState(false)
  const isLong = description.length > READ_MORE_THRESHOLD
  const visibleText = expanded || !isLong ? description : `${description.slice(0, READ_MORE_THRESHOLD).trim()}…`

  return (
    <section className={cn(className)} aria-labelledby="property-about-heading">
      <motion.h2
        id="property-about-heading"
        className="font-heading text-2xl font-bold text-a7-black md:text-3xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        About this property
      </motion.h2>
      <motion.p
        className="mt-4 sm:text-base text-xs leading-relaxed text-muted-foreground"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
      >
        {visibleText}
      </motion.p>
      {isLong ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-a7-black hover:underline"
        >
          {expanded ? "Show less" : "Show More"}
          <ChevronDown className={cn("size-4 transition-transform", expanded && "rotate-180")} aria-hidden />
        </button>
      ) : null}

      {highlights.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
            >
              <DetailHighlightCard {...item} />
            </motion.div>
          ))}
        </div>
      ) : null}
    </section>
  )
}
