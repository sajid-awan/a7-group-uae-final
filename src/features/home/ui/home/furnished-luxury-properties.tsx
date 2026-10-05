"use client"

import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"

import { SectionHeader } from "@/features/home/ui/home/section-header"
import { PropertyCardListing } from "@/features/property/ui/property-card"
import { SwiperNavButtons } from "@/shared/ui/swiper-nav-buttons"
import { useSwiperNav } from "@/shared/hooks/use-swiper-nav"
import { cn } from "@/shared/lib/cn"
import type { PropertyListing } from "@/features/property"

import "swiper/css"

export type FurnishedLuxuryPropertiesProps = {
  listings: PropertyListing[]
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function FurnishedLuxuryProperties({ listings, className }: FurnishedLuxuryPropertiesProps) {
  const { prevClass, nextClass, swiperNavConfig } = useSwiperNav("furnished")

  if (listings.length === 0) return null

  const sliderNav = (
    <SwiperNavButtons
      prevClass={prevClass}
      nextClass={nextClass}
      prevLabel="Previous listings"
      nextLabel="Next listings"
      theme="light"
    />
  )

  return (
    <section
      className={cn("bg-white pt-0 pb-12 md:pb-16 lg:pb-16", className)}
      aria-label="Furnished luxury properties"
    >
      <div className="relative container mx-auto px-4">
        <SectionHeader
          title="Furnished Luxury Properties"
          className="mb-8 sm:mb-10 sm:pr-28"
        />

        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.0, ease: EASE, delay: 0.15 }}
       
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            {...swiperNavConfig}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={700}
            spaceBetween={16}
            slidesPerView={1.08}
            breakpoints={{
              480: { slidesPerView: 1.2, spaceBetween: 10 },
              640: { slidesPerView: 2.1, spaceBetween: 10 },
              1024: { slidesPerView: 3.15, spaceBetween: 16 },
              1280: { slidesPerView: 3.35, spaceBetween: 16},
            }}
            className="listing-property"
          >
            {listings.map((listing) => (
              <SwiperSlide key={listing.id} className="h-auto!">
                <PropertyCardListing
                  listing={listing}
                  agentTone="neutral"
                  agentCardClassName="!bg-[#F3F4F6]"
                  className="border border-[#D1D5DB] shadow-none group-hover:shadow-none"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="mt-8 flex justify-center sm:absolute sm:top-0 sm:right-4 sm:mt-0">
          {sliderNav}
        </div>
      </div>
    </section>
  )
}
