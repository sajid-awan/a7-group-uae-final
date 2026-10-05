"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { PropertyCardListingHorizontal } from "@/features/property/ui/property-card"
import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/cn"
import type { PropertyListing } from "@/features/property"

export type TrendingLuxuryVillasProps = {
  listings: PropertyListing[]
  viewAllHref?: string
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.1 as const }

export function TrendingLuxuryVillas({
  listings,
  viewAllHref = "/properties",
  className,
}: TrendingLuxuryVillasProps) {
  if (listings.length === 0) return null

  return (
    <section
      className={cn("bg-black py-12 text-white md:py-16 lg:py-20", className)}
      aria-label="Dubai's most trending luxury villas"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,400px)_1fr] xl:gap-16">
          <motion.div
            className="lg:sticky lg:top-24 lg:self-start"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.95, ease: EASE }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/60">Most Trending</p>
            <h2 className="mt-3 font-heading text-[clamp(2rem,4.2vw,3rem)] font-semibold leading-[1.08] tracking-tight text-white md:text-[48px]">
              Dubai&apos;s Most Trending Luxury Villas
            </h2>
            <Link href={viewAllHref} className="mt-8 inline-block">
              <Button
                type="button"
                variant="default"
                shape="pill"
                size="sm"
                label="All Trending Properties"
                className="px-7"
              />
            </Link>
          </motion.div>

          <div className="flex flex-col gap-5 md:gap-6">
            {listings.map((listing, i) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.85, ease: EASE, delay: i * 0.14 }}
              >
                <PropertyCardListingHorizontal
                  listing={listing}
                  agentTone="neutral"
                  agentCardClassName="!bg-[#F3F4F6]"
             
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
