"use client"

import { MapPin } from "lucide-react"
import { motion } from "framer-motion"

import { BreadcrumbList, type BreadcrumbItem } from "@/shared/ui/breadcrumb"
import { StatusBadge, statusList } from "@/shared/ui/status-badge"
import type { PropertyListingDetail } from "@/features/property"
import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

function heroVariant(delay: number) {
  return {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE, delay } },
  }
}

type PropertyDetailHeroProps = {
  property: PropertyListingDetail
  className?: string
}

/** Hero copy layer — background image is rendered by `PropertyHeroSection`. */
export function PropertyDetailHero({ property, className }: PropertyDetailHeroProps) {
  const locationArea = property.location.split(",")[0]?.trim() ?? "Dubai"
  const statusKind = statusList(property.status)

  return (
    <section
      className={cn(
        "relative flex h-120 w-full flex-col justify-end text-white md:h-144",
        className
      )}
      aria-label="Property overview"
    >
          <div className="pointer-events-none absolute inset-0 z-0 h-full" aria-hidden>

        {/* Light overlays — image stays visible; text remains readable */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-black/55 to-transparent md:h-56" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-t from-black/65 via-black/25 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto container w-full px-4 pb-28 pt-16 md:px-10 md:pb-44 md:pt-28">
        <motion.div {...heroVariant(0.1)} className="hidden md:block">
          <BreadcrumbList
            variant="inverted"
            size="sm"
            className="mb-5"
            items={
              [
                { kind: "home", href: "/" },
                { kind: "link", href: "/properties", label: "Properties" },
                { kind: "link", href: "#", label: locationArea },
                { kind: "current", label: property.title },
              ] satisfies BreadcrumbItem[]
            }
          />
        </motion.div>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-8">
          <div className="min-w-0 max-w-3xl flex-1">
            <motion.h1
              className="font-heading text-2xl font-bold leading-[1.15] text-white drop-shadow-sm sm:text-2xl md:text-3xl lg:text-5xl"
              {...heroVariant(0.25)}
            >
              {property.title}
            </motion.h1>
            <motion.p
              className="mt-2.5 flex items-center gap-1.5 text-sm text-white/90 md:text-base"
              {...heroVariant(0.38)}
            >
              <MapPin className="size-4 shrink-0" aria-hidden />
              {property.location}
            </motion.p>
            <motion.div {...heroVariant(0.5)} className="mt-4 flex flex-wrap items-center gap-2 md:hidden">
              <StatusBadge kind={statusKind} size="sm" className="py-1.5" />
              <StatusBadge kind="closingCost" size="sm" className="py-1.5" />
            </motion.div>
            <motion.div {...heroVariant(0.5)} className="mt-4 hidden md:block">
              <StatusBadge kind={statusKind} className="py-1.5" />
            </motion.div>
          </div>

          <motion.div
            className="flex shrink-0 flex-col items-start gap-2 sm:items-end sm:text-right"
            {...heroVariant(0.45)}
          >
            <StatusBadge kind="closingCost" className="hidden py-1.5 md:inline-flex" />
            <p className="text-2xl font-bold  text-white drop-shadow-sm sm:text-3xl md:text-4xl">
              <AedText text={property.price} />
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
