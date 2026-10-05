"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/shared/lib/cn"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.1 as const }

type PropertyAmenitiesSectionProps = {
  amenities: string[]
  className?: string
}

export function PropertyAmenitiesSection({ amenities, className }: PropertyAmenitiesSectionProps) {
  if (amenities.length === 0) return null

  return (
    <section className={cn(className)} aria-labelledby="property-amenities-heading">
      <motion.h2
        id="property-amenities-heading"
        className="font-heading text-2xl font-bold text-a7-black md:text-3xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        Amenities
      </motion.h2>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {amenities.map((name, i) => (
          <motion.div
            key={name}
            className="flex items-center gap-3 rounded-lg border border-border bg-white px-4 py-3.5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.65, ease: EASE, delay: i * 0.06 }}
          >
            <span className="bg-a7-brand-gold flex size-6 shrink-0 items-center justify-center rounded-md text-white">
              <Check className="size-3 stroke-[2.5]" aria-hidden />
            </span>
            <span className="text-sm font-medium text-a7-black">{name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
