"use client"

import { useCallback, useEffect, useRef } from "react"
import Image from "next/image"
import type { Swiper as SwiperInstance } from "swiper"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"

import { cn } from "@/shared/lib/cn"

import "swiper/css"

const DEVELOPERS = [
  { name: "Emaar", logo: "/assets/developers/emaar.png" },
  { name: "Binghatti", logo: "/assets/developers/binghatti.png" },
  { name: "Dubai Properties", logo: "/assets/developers/dubai-properties.png" },
  { name: "DAMAC", logo: "/assets/developers/damac.png" },
  { name: "Meraas", logo: "/assets/developers/meraas.png" },
  { name: "Azizi", logo: "/assets/developers/azizi.png" },
] as const

/** Duplicated so loop + autoplay work when fewer logos than viewport slots. */
const SLIDES = [...DEVELOPERS, ...DEVELOPERS]

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.3 as const }

function startAutoplay(swiper: SwiperInstance) {
  swiper.update()
  if (swiper.autoplay) {
    swiper.autoplay.stop()
    swiper.autoplay.start()
  }
}

export function TrustedDeveloperPartners({ className }: { className?: string }) {
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

  return (
    <section
      className={cn("bg-white py-10 md:py-14", className)}
      aria-label="Trusted developer partners"
    >
      <div className="container mx-auto px-4">
        <motion.p
          className="mb-8 text-center text-sm font-medium tracking-wide text-gray-500 md:mb-10 md:text-base"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
        >
          Trusted Partner of the Most Prominent Developers
        </motion.p>

        <motion.div
          ref={containerRef}
          className="-mx-4 overflow-hidden px-4 md:mx-0 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.85, ease: EASE, delay: 0.12 }}
          onAnimationComplete={() => {
            if (swiperRef.current) startAutoplay(swiperRef.current)
          }}
        >
          <Swiper
            modules={[Autoplay]}
            className="trusted-developer-partners-swiper"
            aria-label="Developer partner logos"
            loop
            loopAdditionalSlides={DEVELOPERS.length}
            grabCursor
            observer
            observeParents
            speed={700}
            spaceBetween={24}
            slidesPerView={2}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            breakpoints={{
              480: { slidesPerView: 2.5, spaceBetween: 28 },
              640: { slidesPerView: 3, spaceBetween: 32 },
              768: { slidesPerView: 3.5, spaceBetween: 36 },
              1024: { slidesPerView: 6, spaceBetween: 40 },
            }}
            onSwiper={onSwiperReady}
            onResize={onSwiperReady}
          >
            {SLIDES.map((dev, index) => (
              <SwiperSlide
                key={`${dev.name}-${index}`}
                className="flex! items-center! justify-center!"
              >
                <div className="flex  w-full items-center justify-center">
                  <Image
                    src={dev.logo}
                    alt={dev.name}
                    width={203}
                    height={108}
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                    className="h-full w-full object-contain grayscale transition-all duration-200 hover:grayscale-0"
                    draggable={false}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
