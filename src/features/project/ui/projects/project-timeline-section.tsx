"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

import type { ProjectTimelineItem } from "@/features/property"
import { cn } from "@/shared/lib/cn"

type ProjectTimelineSectionProps = {
  timeline: ProjectTimelineItem[]
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function ProjectTimelineSection({ timeline, className }: ProjectTimelineSectionProps) {
  return (
    <section
      className={cn("mx-auto container bg-white px-6 py-[30px] md:px-10", className)}
      aria-labelledby="project-timeline-heading"
    >
      <motion.h2
        id="project-timeline-heading"
        className="font-heading text-2xl font-bold text-a7-black md:text-3xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        Project timeline
      </motion.h2>

      <motion.div
        className="mt-8 flex gap-4 overflow-x-auto pb-2 scrollbar-none md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
      >
        {timeline.map((item) => {
          const completed = item.status === "completed"
          return (
            <div
              key={`${item.date}-${item.label}`}
              className={cn(
                "flex min-w-[200px] shrink-0 items-start gap-3 rounded-2xl px-5 py-4 sm:min-w-[220px] md:min-w-0 md:shrink",
                completed ? "bg-emerald-50" : "bg-a7-panel-surface"
              )}
            >
              <span
                className={cn(
                  "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                  completed ? "bg-emerald-600 text-white" : "bg-white text-a7-brand-text-muted"
                )}
                aria-hidden
              >
                <Check className="size-3.5 stroke-[2.5]" />
              </span>
              <div>
                <p className="text-sm font-bold text-a7-black">{item.date}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{item.label}</p>
              </div>
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}
