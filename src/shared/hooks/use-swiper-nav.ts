"use client"

import { useId } from "react"
import type { Swiper as SwiperInstance } from "swiper"
import type { SwiperProps } from "swiper/react"

export type SwiperNavConfig = Pick<SwiperProps, "onBeforeInit" | "onInit" | "navigation">

/**
 * Returns stable CSS class names and Swiper navigation props for a
 * custom prev/next button pair. Spread `swiperNavConfig` onto `<Swiper>`.
 */
export function useSwiperNav(prefix: string): {
  prevClass: string
  nextClass: string
  swiperNavConfig: SwiperNavConfig
} {
  const uid = useId().replace(/:/g, "")
  const prevClass = `${prefix}-prev-${uid}`
  const nextClass = `${prefix}-next-${uid}`

  const swiperNavConfig: SwiperNavConfig = {
    onBeforeInit(swiper: SwiperInstance) {
      const nav = swiper.params.navigation
      if (nav && typeof nav === "object") {
        nav.prevEl = `.${prevClass}`
        nav.nextEl = `.${nextClass}`
      }
    },
    onInit(swiper: SwiperInstance) {
      swiper.navigation.init()
      swiper.navigation.update()
    },
    navigation: {
      prevEl: `.${prevClass}`,
      nextEl: `.${nextClass}`,
      disabledClass: "pointer-events-none opacity-40",
    },
  }

  return { prevClass, nextClass, swiperNavConfig }
}
