"use client"

import { MapPin } from "lucide-react"
import { motion } from "framer-motion"

import type { ProjectLocation } from "@/features/property"
import { cn } from "@/shared/lib/cn"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.1 as const }

type PropertyLocationSectionProps = {
  location: ProjectLocation
  className?: string
}

export function PropertyLocationSection({ location, className }: PropertyLocationSectionProps) {
  return (
    <section className={cn(className)} aria-labelledby="property-location-heading">
      <motion.h2
        id="property-location-heading"
        className="font-heading text-2xl font-bold text-a7-black md:text-3xl"
        initial={{ opacity: 0, y: 32 }}
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
          title="Property location map"
          src={location.mapEmbedUrl}
          className="h-105 w-full border-0 md:h-130"
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
    </section>
  )
}
