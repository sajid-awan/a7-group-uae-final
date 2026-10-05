"use client"

import { motion } from "framer-motion"

import { AgentPortraitCardSimple } from "@/shared/ui/media-feature-cards"
import type { ProjectExpert } from "@/features/property"
import { cn } from "@/shared/lib/cn"

type ProjectExpertsSectionProps = {
  projectTitle: string
  experts: ProjectExpert[]
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function ProjectExpertsSection({ projectTitle, experts, className }: ProjectExpertsSectionProps) {
  if (experts.length === 0) return null

  return (
    <section
      className={cn("mx-auto container bg-white px-6 py-[30px] md:px-10", className)}
      aria-labelledby="project-experts-heading"
    >
      <motion.h2
        id="project-experts-heading"
        className="font-heading text-2xl font-bold text-a7-black md:text-3xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        {projectTitle} Experts
      </motion.h2>

      <motion.div
        className="mt-8 flex gap-4 overflow-x-auto pb-2 scrollbar-none"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
      >
        {experts.map((expert) => (
          <div key={expert.id} className="w-[342px] shrink-0">
            <AgentPortraitCardSimple
              layout="vertical"
              imageUrl={expert.imageUrl}
              name={expert.name}
              role={expert.role}
              whatsAppHref={expert.whatsAppHref}
              className="h-full w-full border-0 shadow-none"
            />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
