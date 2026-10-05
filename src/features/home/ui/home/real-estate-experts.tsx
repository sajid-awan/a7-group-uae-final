"use client"

import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"

import { AgentPortraitCardSimple } from "@/shared/ui/media-feature-cards"
import { SwiperNavButtons } from "@/shared/ui/swiper-nav-buttons"
import { useSwiperNav } from "@/shared/hooks/use-swiper-nav"
import { agentProfilePath } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"
import type { RealEstateExpert } from "@/features/home/services/content"

import "swiper/css"

export type RealEstateExpertsProps = {
  experts: readonly RealEstateExpert[]
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function RealEstateExperts({ experts, className }: RealEstateExpertsProps) {
  const { prevClass, nextClass, swiperNavConfig } = useSwiperNav("experts")

  if (experts.length === 0) return null

  return (
    <section
      className={cn("bg-white py-12 md:py-16 lg:py-16", className)}
      aria-label="Real estate experts"
    >
      <div className="container mx-auto grid grid-cols-1 gap-6 px-4 sm:grid-cols-[1fr_auto] sm:gap-x-6 sm:gap-y-10">
        <motion.header
          className="sm:col-start-1 sm:row-start-1"
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:text-sm">
            Seamless and friendly service
          </p>
          <h2 className="mt-2 font-heading text-[clamp(1.5rem,5vw,3rem)] font-semibold leading-[1.12] tracking-tight text-black md:text-[48px] md:leading-[1.08]">
            Real estate experts
          </h2>
        </motion.header>

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
            spaceBetween={16}
            slidesPerView={1.12}
            breakpoints={{
              480: { slidesPerView: 1.35, spaceBetween: 18 },
              640: { slidesPerView: 2.15, spaceBetween: 20 },
              1024: { slidesPerView: 3.15, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
          >
            {experts.map((expert) => (
              <SwiperSlide key={expert.id} className="h-auto!">
                <AgentPortraitCardSimple
                  layout="vertical"
                  imageUrl={expert.imageUrl}
                  name={expert.name}
                  role={expert.role}
                  href={agentProfilePath(expert.id)}
                  whatsAppHref={expert.whatsAppHref}
                  nameClassName="md:text-[16px] md:leading-snug"
                  roleClassName="md:text-[14px]"
                  className="h-full border-0 shadow-none [&_[data-slot=button]]:!size-8 [&_[data-slot=button]]:!min-h-8 [&_[data-slot=button]]:!min-w-8 [&_svg]:!size-4"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          className="flex justify-end sm:col-start-2 sm:row-start-1 sm:self-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.75, ease: EASE, delay: 0.3 }}
        >
          <SwiperNavButtons
            prevClass={prevClass}
            nextClass={nextClass}
            prevLabel="Previous experts"
            nextLabel="Next experts"
            theme="light"
          />
        </motion.div>
      </div>
    </section>
  )
}
