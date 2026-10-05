"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/shared/lib/cn"

type ProjectAmenitiesSectionProps = {
  amenities: string[]
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function ProjectAmenitiesSection({ amenities, className }: ProjectAmenitiesSectionProps) {
  if (amenities.length === 0) return null

  return (
    <section
      className={cn("mx-auto container bg-white px-6 py-7.5 md:px-10", className)}
      aria-labelledby="project-amenities-heading"
    >
      <motion.h2
        id="project-amenities-heading"
        className="font-heading text-2xl font-bold text-a7-black md:text-3xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        Amenities
      </motion.h2>

      <motion.div
        className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
      >
        {amenities.map((name) => (
          <div
            key={name}
            className="flex items-center gap-3 rounded-lg border border-border bg-white px-4 py-3.5"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Check className="size-4 stroke-[2.5]" aria-hidden />
            </span>
            <span className="text-sm font-medium text-a7-black">{name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
