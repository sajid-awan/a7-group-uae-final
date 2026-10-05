"use client"

import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion"
import { useRef, type ReactNode } from "react"

import { Button } from "@/shared/ui/button"
import { HOME_BRAND_STORY_IMAGE } from "@/shared/lib/constants/home.constants"
import { cn } from "@/shared/lib/cn"

export type RealEstatingSinceBannerProps = {
  imageUrl?: string
  imageAlt?: string
  title?: string
  videoHref?: string
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.2 as const }

const PLAY_BUTTON_CLASS =
  "border-white/35 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 size-12 min-h-12 min-w-12 [&_svg]:size-5 sm:size-[72px] sm:min-h-[72px] sm:min-w-[72px] sm:[&_svg]:size-8"

const PULSE_RING_CLASS =
  "absolute size-12 animate-ping rounded-full will-change-transform sm:size-[72px]"

function ParallaxText({
  children,
  y,
  className,
}: {
  children: ReactNode
  y?: MotionValue<string>
  className?: string
}) {
  return (
    <motion.div style={y ? { y } : undefined}>
      <motion.h2
        className={className}
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1.4, ease: EASE }}
      >
        {children}
      </motion.h2>
    </motion.div>
  )
}

export function RealEstatingSinceBanner({
  imageUrl = HOME_BRAND_STORY_IMAGE,
  imageAlt = "Luxury waterfront villas and skyline at golden hour",
  title = "Real Estating Since 2004",
  videoHref,
  className,
}: RealEstatingSinceBannerProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"])
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.1, 1.06])
  const textY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"])

  const parallaxEnabled = !prefersReducedMotion

  return (
    <section
      ref={sectionRef}
      className={cn("relative isolate w-full overflow-hidden", className)}
      aria-label="Brand story"
    >
      <motion.div
        className="absolute inset-0 overflow-hidden will-change-transform"
        style={
          parallaxEnabled
            ? { y: backgroundY, scale: backgroundScale }
            : undefined
        }
        initial={parallaxEnabled ? undefined : { scale: 1.08 }}
        whileInView={parallaxEnabled ? undefined : { scale: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1.8, ease: EASE }}
      >
        <motion.div
          className="absolute inset-[-12%]"
          animate={
            parallaxEnabled
              ? {
                  scale: [1, 1.07],
                  x: ["0%", "2%"],
                  y: ["0%", "-1.5%"],
                }
              : undefined
          }
          transition={{
            duration: 24,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            priority={false}
            className="object-cover object-center"
            sizes="100vw"
          />
          <motion.div
            className="absolute inset-0 bg-linear-to-t from-black/60 via-[#3d2c1a]/55 to-black/40"
            initial={parallaxEnabled ? false : { opacity: 0 }}
            whileInView={parallaxEnabled ? undefined : { opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 1.2, ease: "easeOut" }}
            aria-hidden
          />
        </motion.div>
      </motion.div>

      <div className="relative flex min-h-[min(60vw,28rem)] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[min(52vw,32rem)] sm:py-20 lg:min-h-[36rem] lg:py-24">
        <ParallaxText
          y={parallaxEnabled ? textY : undefined}
          className="max-w-3xl font-heading text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[1.08] tracking-tight text-white md:text-[56px]"
        >
          {title}
        </ParallaxText>

        <motion.div
          className="relative mt-8 inline-flex items-center justify-center sm:mt-10"
          style={parallaxEnabled ? { y: textY } : undefined}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1, ease: EASE, delay: 0.35 }}
        >
          <span
            className={cn(PULSE_RING_CLASS, "bg-white/20")}
            aria-hidden
          />
          <span
            className={cn(
              PULSE_RING_CLASS,
              "bg-white/10 [animation-delay:0.6s] [animation-duration:1.5s]"
            )}
            aria-hidden
          />
          {videoHref ? (
            <Button
              asChild
              variant="outline"
              size="icon-lg"
              shape="pill"
              className={PLAY_BUTTON_CLASS}
            >
              <Link href={videoHref} target="_blank" rel="noreferrer" aria-label="Play brand video">
                <Play className="ml-0.5 fill-current sm:ml-1" strokeWidth={1.5} aria-hidden />
              </Link>
            </Button>
          ) : (
            <Button
              type="button"
              variant="outline"
              size="icon-lg"
              shape="pill"
              className={PLAY_BUTTON_CLASS}
              aria-label="Play brand video"
            >
              <Play className="ml-0.5 fill-current sm:ml-1" strokeWidth={1.5} aria-hidden />
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
