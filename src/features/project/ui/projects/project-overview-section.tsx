"use client"

import { motion } from "framer-motion"

import type { ProjectOverviewBlock } from "@/features/property"
import { cn } from "@/shared/lib/cn"

type ProjectOverviewSectionProps = {
  sections: ProjectOverviewBlock[]
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function ProjectOverviewSection({ sections, className }: ProjectOverviewSectionProps) {
  return (
    <section className={cn("bg-white py-7.5", className)} aria-labelledby="project-overview-heading">
      <div className="container mx-auto px-4">
        <div className="space-y-10">
          {sections.map((block, index) => (
            <motion.article
              key={block.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.85, ease: EASE, delay: index === 0 ? 0 : 0.1 }}
            >
              <h2
                id={index === 0 ? "project-overview-heading" : undefined}
                className="font-heading text-2xl font-bold text-a7-black md:text-3xl"
              >
                {block.title}
              </h2>
              <p className="mt-3 max-w-none sm:text-base text-sm leading-relaxed text-muted-foreground">{block.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
