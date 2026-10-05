"use client"

import Image from "next/image"
import { BadgePercent } from "lucide-react"
import dynamic from "next/dynamic"
import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"
import { useScrollSpy } from "@/shared/hooks/use-scroll-spy"
import { cn } from "@/shared/lib/cn"
import { HeroMainStatCard } from "@/features/home/ui/home/hero-main-stat-card"
import { HeroPropertySearch } from "./hero-property-search"
import type { HeroMainProps } from "@/shared/types/home"
import { Tag02Icon, ArrowUpRightIcon } from "@/shared/icons"

const HeroBgSlider = dynamic(
  () => import("./hero-bg-slider").then((m) => m.HeroBgSlider),
  { ssr: false }
)


const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

function RotatingTypingText({
  words,
  startDelay = 0,
  typeSpeed = 55,
  deleteSpeed = 30,
  pauseAfterType = 2000,
  pauseAfterDelete = 400,
}: {
  words: string[]
  startDelay?: number
  typeSpeed?: number
  deleteSpeed?: number
  pauseAfterType?: number
  pauseAfterDelete?: number
}) {
  const [displayed, setDisplayed] = useState(() => words[0] ?? "")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [started, setStarted] = useState(startDelay <= 0)

  // Delay before the rotate cycle begins (first word is visible immediately)
  useEffect(() => {
    if (startDelay <= 0) return
    const t = setTimeout(() => setStarted(true), startDelay * 1000)
    return () => clearTimeout(t)
  }, [startDelay])

  useEffect(() => {
    if (!started) return
    const current = words[wordIndex % words.length]

    if (!isDeleting && displayed === current) {
      // fully typed — pause then start deleting
      const t = setTimeout(() => setIsDeleting(true), pauseAfterType)
      return () => clearTimeout(t)
    }

    if (isDeleting && displayed === "") {
      // fully deleted — pause then move to next word
      const t = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      }, pauseAfterDelete)
      return () => clearTimeout(t)
    }

    const delay = isDeleting ? deleteSpeed : typeSpeed
    const t = setTimeout(() => {
      setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1))
    }, delay)
    return () => clearTimeout(t)
  }, [displayed, isDeleting, wordIndex, started, words, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete])

  const isTypingDone = started && !isDeleting && displayed === words[wordIndex % words.length]

  return (
    <>
      {displayed}
      <span
        className={cn(
          "ml-0.5 inline-block w-[2px] translate-y-[2px] bg-current align-middle h-[0.85em]",
          isTypingDone ? "animate-[blink_1s_step-end_infinite]" : "opacity-100"
        )}
        aria-hidden
      />
    </>
  )
}

/** Stagger for hero text/blocks only (search is static — no entrance animation). */
const HERO_STAGGER = [0, 0.09, 0.18, 0.27, 0.36] as const

function heroVariant(delay: number, reducedMotion: boolean | null) {
  if (reducedMotion) return { initial: false as const }
  return {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.32, ease: EASE, delay } },
  }
}

const DEFAULT_CITY_NAMES = [
  "Binghatti City",
  "Downtown Dubai",
  "Palm Jumeirah",
  "Dubai Marina",
  "Business Bay",
]

export function HeroSection({
  imageUrl,
  imageUrls,
  imageAlt = "",
  titleLine1 = "Luxury Living In",
  titleLine2 = "Binghatti City",
  titleLine2Options = DEFAULT_CITY_NAMES,
  subtitle = "We're A Real Estate Agency Dedicated To Helping You Find Your Dream Home. Ready To Talk About Your Ideal Residence?",
  startingFromValue = "AED 2.5M",
  startingFromLabel = "Starting From",
  paymentPlanValue = "30% - 70%",
  paymentPlanLabel = "Payment Plan",
  discoverMoreHref = "#discover-main",
  searchProps,
  className,
}: HeroMainProps) {
  const reducedMotion = useReducedMotion()
  const discoverSectionId = useMemo(
    () => (discoverMoreHref.startsWith("#") ? discoverMoreHref.slice(1) : discoverMoreHref),
    [discoverMoreHref]
  )
  const { scrollToSection } = useScrollSpy([discoverSectionId])
  const slides = imageUrls && imageUrls.length > 0 ? imageUrls : [imageUrl]
  const [heroSliderReady, setHeroSliderReady] = useState(false)

  return (
    <section
      className={cn("relative isolate min-h-[min(100svh,56rem)] w-full overflow-hidden text-white", className)}
      aria-label="Featured development"
    >
      {/* ── Background Swiper (client-only to avoid hydration ID mismatch) ── */}
      <div className="absolute inset-0 z-0" aria-hidden>
        {/* Static fallback for SSR; fades out once the autoplay slider mounts */}
        <Image
          src={slides[0]}
          alt=""
          fill
          priority
          className={cn(
            "object-cover transition-opacity duration-300",
            heroSliderReady && "opacity-0"
          )}
          sizes="100vw"
        />
        <HeroBgSlider
          slides={slides}
          imageAlt={imageAlt}
          onReady={() => setHeroSliderReady(true)}
        />
      </div>

      {imageAlt ? <span className="sr-only">{imageAlt}</span> : null}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-1 bg-linear-to-b from-black/50 via-black/35 to-black"
        aria-hidden
      />

      {/* ── Content ── */}
      <div className="relative mx-auto flex min-h-[min(100svh,56rem)] w-full max-w-300 flex-col items-stretch px-4 pb-16 pt-28 text-center sm:items-center md:pb-20 md:pt-36 z-50">
        {/* Search bar — visible immediately, no entrance animation */}
        <div className="mx-auto mb-10 w-full md:mb-14">
          <HeroPropertySearch className="w-full" {...searchProps} />
        </div>

        {/* Title */}
        <h1 className="max-w-4xl overflow-hidden font-heading text-[clamp(2rem,6vw,3.75rem)] font-semibold leading-[1.08] tracking-tight">
          <motion.span className="block" {...heroVariant(HERO_STAGGER[0], reducedMotion)}>
            {titleLine1}
          </motion.span>
          <motion.span className="block" {...heroVariant(HERO_STAGGER[1], reducedMotion)}>
            <RotatingTypingText
              words={titleLine2Options && titleLine2Options.length > 0 ? titleLine2Options : [titleLine2]}
              startDelay={0}
            />
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base"
          {...heroVariant(HERO_STAGGER[2], reducedMotion)}
        >
          {subtitle}
        </motion.p>

        {/* Stat cards */}
        <motion.div
          className="mt-10 flex w-full max-w-xl gap-3 sm:mt-12 sm:flex-row sm:gap-4"
          {...heroVariant(HERO_STAGGER[3], reducedMotion)}
        >
          <HeroMainStatCard icon={Tag02Icon} value={startingFromValue} label={startingFromLabel} />
          <HeroMainStatCard icon={BadgePercent} value={paymentPlanValue} label={paymentPlanLabel} />
        </motion.div>

        {/* Discover CTA */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-3 md:mt-16"
          {...heroVariant(HERO_STAGGER[4], reducedMotion)}
        >
          <button
            type="button"
            onClick={() => scrollToSection(discoverSectionId)}
            className={cn(
              "group/discover flex flex-col items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            )}
          >
            <span
              className={cn(
                "relative overflow-hidden",
                "flex size-11 items-center justify-center rounded-full bg-a7-brand-gold text-zinc-950 shadow-lg",
                "transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                "before:pointer-events-none before:absolute before:inset-0 before:z-0 before:bg-zinc-950",
                "before:translate-x-full before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.22,1,0.36,1)]",
                "group-hover/discover:before:translate-x-0 group-hover/discover:text-white",
                "[&_svg]:relative [&_svg]:z-1 [&_svg]:origin-center [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-[cubic-bezier(0.22,1,0.36,1)]",
                "group-hover/discover:[&_svg]:rotate-135"
              )}
            >
              <ArrowUpRightIcon size={24} aria-hidden />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
              Discover More
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
