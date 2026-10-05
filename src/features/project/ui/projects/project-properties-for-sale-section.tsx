"use client"

import { motion } from "framer-motion"

import { PropertyCardHorizontal } from "@/features/property/ui/property-card"
import type { Property } from "@/features/property"
import { cn } from "@/shared/lib/cn"

type ProjectPropertiesForSaleSectionProps = {
  projectTitle: string
  properties: Property[]
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function ProjectPropertiesForSaleSection({
  projectTitle,
  properties,
  className,
}: ProjectPropertiesForSaleSectionProps) {
  if (properties.length === 0) return null

  return (
    <section
      className={cn("mx-auto container bg-white px-6 py-7.5 md:px-10", className)}
      aria-labelledby="project-properties-for-sale-heading"
    >
      <motion.h2
        id="project-properties-for-sale-heading"
        className="font-heading text-2xl font-bold text-a7-black md:text-3xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        Properties for Sale in {projectTitle}
      </motion.h2>

      <motion.div
        className="mt-8 flex flex-col gap-5 sm:gap-6 lg:grid lg:grid-cols-2 lg:gap-6"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
      >
        {properties.map((property) => (
          <div key={property.id} className="w-full min-w-0 lg:w-auto">
            <PropertyCardHorizontal property={property} />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
