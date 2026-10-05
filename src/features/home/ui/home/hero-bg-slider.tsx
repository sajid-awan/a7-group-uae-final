"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"

type HeroBgSliderProps = {
  slides: string[]
  imageAlt?: string
  onReady?: () => void
}

export function HeroBgSlider({ slides, imageAlt = "", onReady }: HeroBgSliderProps) {
  const canAutoplay = slides.length > 1

  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      autoplay={
        canAutoplay
          ? { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: false }
          : false
      }
      loop={canAutoplay}
      speed={1200}
      className="absolute inset-0 h-full w-full"
      allowTouchMove={false}
      onSwiper={(swiper) => {
        onReady?.()
        if (canAutoplay) swiper.autoplay.start()
      }}
    >
      {slides.map((src, i) => (
        <SwiperSlide key={src + i} className="relative h-full">
          <Image
            src={src}
            alt={i === 0 ? imageAlt : ""}
            fill
            priority={i === 0}
            className="scale-[1.04] object-cover transition-transform duration-6000 ease-out in-[.swiper-slide-active]:scale-100"
            sizes="100vw"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
