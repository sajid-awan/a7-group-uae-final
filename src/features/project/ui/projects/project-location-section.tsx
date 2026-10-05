"use client"

import { MapPin } from "lucide-react"
import { motion } from "framer-motion"

import { ProjectChip } from "@/features/project/ui/projects/project-chip"
import type { ProjectLocation } from "@/features/property"
import { cn } from "@/shared/lib/cn"

type ProjectLocationSectionProps = {
  location: ProjectLocation
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function ProjectLocationSection({ location, className }: ProjectLocationSectionProps) {
  return (
    <section
      className={cn("mx-auto container bg-white px-6 py-7.5 md:px-10", className)}
      aria-labelledby="project-location-heading"
    >
      <motion.h2
        id="project-location-heading"
        className="font-heading text-2xl font-bold text-a7-black md:text-3xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        Location
      </motion.h2>

      <motion.div
        className="relative mt-8 overflow-hidden rounded-xl border border-border"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
      >
        <iframe
          title="Project location map"
          src={location.mapEmbedUrl}
          className="h-162.25 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-full"
          aria-hidden
        >
          <MapPin className="size-11 fill-[#EA4335] text-[#C5221F] drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]" strokeWidth={1.5} />
        </div>
      </motion.div>

      {location.nearby.length > 0 ? (
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        >
          <h3 className="font-heading text-lg font-semibold text-a7-black md:text-xl">Nearby</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {location.nearby.map((place) => (
              <ProjectChip key={place.label} variant="nearby" icon={MapPin} iconPosition="right">
                {place.label}
              </ProjectChip>
            ))}
          </div>
        </motion.div>
      ) : null}
    </section>
  )
}
