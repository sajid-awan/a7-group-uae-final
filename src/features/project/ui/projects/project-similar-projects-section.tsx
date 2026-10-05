"use client"

import { useCallback, useEffect, useRef } from "react"
import type { Swiper as SwiperInstance } from "swiper"
import { motion } from "framer-motion"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { PropertyCard } from "@/features/property/ui/property-card"
import { SwiperNavButtons } from "@/shared/ui/swiper-nav-buttons"
import { useSwiperNav } from "@/shared/hooks/use-swiper-nav"
import type { Property } from "@/features/property"

import { cn } from "@/shared/lib/cn"

import "swiper/css"

export type ProjectSimilarDetailRoute = "marketing" | "off-plan"

function similarProjectHref(id: string, route: ProjectSimilarDetailRoute) {
  return route === "off-plan" ? `/off-plan/${id}` : `/projects/${id}`
}

type ProjectSimilarProjectsSectionProps = {
  properties: Property[]
  className?: string
  title?: string
  /** Serializable route target — do not pass functions from Server Components. */
  detailRoute?: ProjectSimilarDetailRoute
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

function startAutoplay(swiper: SwiperInstance) {
  swiper.update()
  if (swiper.autoplay) {
    swiper.autoplay.stop()
    swiper.autoplay.start()
  }
}

export function ProjectSimilarProjectsSection({
  properties,
  className,
  title = "Similar Top Projects",
  detailRoute = "marketing",
}: ProjectSimilarProjectsSectionProps) {
  const { prevClass, nextClass, swiperNavConfig } = useSwiperNav("similar-projects")
  const swiperRef = useRef<SwiperInstance | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const onSwiperReady = useCallback((swiper: SwiperInstance) => {
    swiperRef.current = swiper
    startAutoplay(swiper)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && swiperRef.current) {
          startAutoplay(swiperRef.current)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  if (properties.length === 0) return null

  return (
    <section
      className={cn("mx-auto container bg-white px-6 py-7.5 md:px-10", className)}
      aria-labelledby="project-similar-heading"
    >
      <motion.div
        className="mb-8 flex items-center justify-between gap-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <h2 id="project-similar-heading" className="font-heading text-2xl font-bold text-a7-black md:text-3xl">
          {title}
        </h2>
        <SwiperNavButtons
          prevClass={prevClass}
          nextClass={nextClass}
          theme="light"
          prevLabel="Previous projects"
          nextLabel="Next projects"
        />
      </motion.div>

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
        onAnimationComplete={() => {
          if (swiperRef.current) startAutoplay(swiperRef.current)
        }}
      >
      <Swiper
        modules={[Navigation, Autoplay]}
        {...swiperNavConfig}
        onBeforeInit={swiperNavConfig.onBeforeInit}
        onInit={(swiper) => {
          swiperNavConfig.onInit?.(swiper)
          onSwiperReady(swiper)
        }}
        onResize={onSwiperReady}
        observer
        observeParents
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: true,
        }}
        speed={700}
        spaceBetween={16}
        slidesPerView={1.15}
        breakpoints={{
          480: { slidesPerView: 1.35, spaceBetween: 18 },
          640: { slidesPerView: 2.15, spaceBetween: 20 },
          1024: { slidesPerView: 3.15, spaceBetween: 24 },
          1280: { slidesPerView: 3.5, spaceBetween: 24 },
        }}
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id} className="!h-auto pl-4.25">
            <PropertyCard property={property} detailHref={similarProjectHref(property.id, detailRoute)} />
          </SwiperSlide>
        ))}
      </Swiper>
      </motion.div>
    </section>
  )
}
