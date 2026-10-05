"use client"

import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"

import { SectionHeader } from "@/features/home/ui/home/section-header"
import { TestimonialCard } from "@/features/property/ui/property-card"
import { SwiperNavButtons } from "@/shared/ui/swiper-nav-buttons"
import { useSwiperNav } from "@/shared/hooks/use-swiper-nav"
import { cn } from "@/shared/lib/cn"
import type { HomeTestimonial } from "@/features/home/services/content"

import "swiper/css"

export type HappyHomeOwnersProps = {
  testimonials: readonly HomeTestimonial[]
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function HappyHomeOwners({ testimonials, className }: HappyHomeOwnersProps) {
  const { prevClass, nextClass, swiperNavConfig } = useSwiperNav("testimonials")

  if (testimonials.length === 0) return null

  const sliderNav = (
    <SwiperNavButtons
      prevClass={prevClass}
      nextClass={nextClass}
      prevLabel="Previous testimonials"
      nextLabel="Next testimonials"
      theme="dark"
    />
  )

  return (
    <section
      className={cn("bg-black py-12 text-white md:py-16 lg:py-20", className)}
      aria-label="Happy new home owners"
    >
      <div className="relative container mx-auto px-4">
        <SectionHeader
          title="Happy new home owners"
          className="mb-8 sm:mb-10 sm:pr-28 [&_h2]:text-white"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.0, ease: EASE, delay: 0.15 }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            {...swiperNavConfig}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={700}
            spaceBetween={16}
            slidesPerView={1.08}
            breakpoints={{
              480: { slidesPerView: 1.2, spaceBetween: 12 },
              640: { slidesPerView: 2.1, spaceBetween: 16 },
              1024: { slidesPerView: 3.15, spaceBetween: 16 },
              1280: { slidesPerView: 3.35, spaceBetween: 18 },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto!">
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  quote={testimonial.quote}
                  avatarUrl={testimonial.avatarUrl}
                  variant="outlined"
                  className="!bg-[#F6F6F2]"
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
