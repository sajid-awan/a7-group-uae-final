"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

import { SectionHeader } from "@/features/home/ui/home/section-header"
import { PropertyCardHorizontal } from "@/features/property/ui/property-card"
import { Button } from "@/shared/ui/button"
import { HOME_OFFPLAN_SECTION_CLASS } from "@/shared/lib/constants/home.constants"
import { cn } from "@/shared/lib/cn"
import type { Property } from "@/features/property"

export type MostTrendingProjectsProps = {
  properties: Property[]
  viewAllHref?: string
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.1 as const }

function ViewAllButton({ href }: { href: string }) {
  return (
    <Link href={href} className="shrink-0">
      <Button
        type="button"
        variant="default"
        shape="pill"
        size="sm"
        label="View All"
        iconRight={<ArrowUpRight className="size-4 text-black" strokeWidth={2.25} />}
        className="px-6"
      />
    </Link>
  )
}

export function MostTrendingProjects({
  properties,
  viewAllHref = "/properties",
  className,
}: MostTrendingProjectsProps) {
  if (properties.length === 0) return null

  return (
    <section
      className={cn(HOME_OFFPLAN_SECTION_CLASS, className)}
      aria-label="Most trending projects in Dubai"
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Most Trending Projects in Dubai"
          className="mb-8 sm:mb-10 [&_h2]:text-white"
          action={
            <div className="hidden sm:block">
              <ViewAllButton href={viewAllHref} />
            </div>
          }
        />

        <div className="grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-2">
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.85, ease: EASE, delay: i * 0.12 }}
            >
              <PropertyCardHorizontal property={property} prominentBadges />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <ViewAllButton href={viewAllHref} />
        </div>
      </div>
    </section>
  )
}
