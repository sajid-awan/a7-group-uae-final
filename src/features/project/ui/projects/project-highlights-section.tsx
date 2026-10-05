"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

import type { ProjectHighlight } from "@/features/property"
import { cn } from "@/shared/lib/cn"

type ProjectHighlightsSectionProps = {
  projectTitle: string
  highlights: ProjectHighlight[]
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function ProjectHighlightsSection({ projectTitle, highlights, className }: ProjectHighlightsSectionProps) {
  return (
    <section
      className={cn("mx-auto container bg-white px-6 py-7.5 md:px-10", className)}
      aria-labelledby="project-highlights-heading"
    >
      <motion.h2
        id="project-highlights-heading"
        className="font-heading text-2xl font-bold text-a7-black md:text-3xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        {projectTitle} Highlights
      </motion.h2>

      <motion.div
        className="mt-8 flex gap-4 overflow-x-auto pb-2 scrollbar-none"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
      >
        {highlights.map((item) => (
          <div
            key={item.label}
            className="flex min-w-[140px] shrink-0 flex-col items-center rounded-xl border border-border bg-white px-5 py-6 text-center sm:min-w-[150px]"
          >
            <Check className="size-5 stroke-[2.5] text-a7-brand-gold" aria-hidden />
            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">{item.label}</p>
            <p className="mt-1 text-sm font-bold text-a7-black">{item.value}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
