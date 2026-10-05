"use client"

import Link from "next/link"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"

import { PropertyCard } from "@/features/property/ui/property-card"
import { SwiperNavButtons } from "@/shared/ui/swiper-nav-buttons"
import { useSwiperNav } from "@/shared/hooks/use-swiper-nav"
import { HOME_OFFPLAN_SECTION_CLASS } from "@/shared/lib/constants/home.constants"
import { offPlanProjectPath } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"
import type { Property } from "@/features/property"

import "swiper/css"

export type OffPlanLatestLaunchesProps = {
  properties: Property[]
  browseAllHref?: string
  sectionId?: string
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function OffPlanLatestLaunches({
  properties,
  browseAllHref = "/properties",
  sectionId,
  className,
}: OffPlanLatestLaunchesProps) {
  const { prevClass, nextClass, swiperNavConfig } = useSwiperNav("off-plan")

  if (properties.length === 0) return null

  return (
    <section
      id={sectionId}
      className={cn(HOME_OFFPLAN_SECTION_CLASS, sectionId && "scroll-mt-28", className)}
      aria-label="Off plan latest launches"
    >
      <div className="container mx-auto grid grid-cols-1 gap-6 px-4 sm:grid-cols-[1fr_auto] sm:gap-x-6 sm:gap-y-10">
        <motion.h2
          className="min-w-0 font-heading text-[clamp(1.5rem,5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-white sm:col-start-1 sm:row-start-1 md:text-[48px] md:leading-[1.08]"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.85, ease: EASE }}
        >
          Off Plan Latest Launches
        </motion.h2>

        <motion.div
          className="-mx-4 overflow-hidden px-4 sm:col-span-2 sm:mx-0 sm:row-start-2 sm:px-0"
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.0, ease: EASE, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            {...swiperNavConfig}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={700}
            spaceBetween={20}
            slidesPerView={1.12}
            breakpoints={{
              480: { slidesPerView: 1.35, spaceBetween: 16 },
              640: { slidesPerView: 2.15, spaceBetween: 16 },
              1024: { slidesPerView: 3.15, spaceBetween: 16 },
              1280: { slidesPerView: 3.5, spaceBetween: 16 },
            }}
          >
            {properties.map((property) => (
              <SwiperSlide key={property.id} className="h-auto! pl-4.25">
                <PropertyCard property={property} detailHref={offPlanProjectPath(property.id)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          className="flex items-center justify-between gap-4 sm:col-start-2 sm:row-start-1 sm:justify-end sm:gap-6 sm:self-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.75, ease: EASE, delay: 0.35 }}
        >
          <Link
            href={browseAllHref}
            className="text-sm font-medium text-white underline-offset-4 transition-colors hover:text-white/85 hover:underline md:text-[15px]"
          >
            Browse all
          </Link>
          <SwiperNavButtons
            prevClass={prevClass}
            nextClass={nextClass}
            prevLabel="Previous properties"
            nextLabel="Next properties"
            theme="dark"
          />
        </motion.div>
      </div>
    </section>
  )
}
