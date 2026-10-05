"use client"

import Image from "next/image"
import Link from "next/link"
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion"
import { useRef } from "react"

import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/cn"

export type MarketingHeroSectionProps = {
  title: string
  description: string
  imageUrl: string
  cta: {
    label: string
    href: string
  }
  /** Used for `aria-labelledby` and heading `id`. */
  headingId?: string
  imageClassName?: string
  /** Center-align hero copy (e.g. plots landing). */
  align?: "left" | "center"
  /** Scroll parallax on background + copy (e.g. services landing). */
  parallax?: boolean
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export function MarketingHeroSection({
  title,
  description,
  imageUrl,
  cta,
  headingId = "marketing-hero-heading",
  imageClassName = "object-cover object-center",
  align = "left",
  parallax = false,
  className,
}: MarketingHeroSectionProps) {
  const centered = align === "center"
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"])
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.1, 1.06])
  const textY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"])
  const parallaxEnabled = parallax && !prefersReducedMotion

  const overlayClassName = centered
    ? "bg-black/65"
    : "bg-linear-to-r from-black/85 via-black/55 to-black/25"

  return (
    <section
      ref={sectionRef}
      className={cn("relative isolate min-h-[min(28rem,72svh)] overflow-hidden bg-a7-black", className)}
      aria-labelledby={headingId}
    >
      {parallaxEnabled ? (
        <motion.div
          className="absolute inset-0 overflow-hidden will-change-transform"
          style={{ y: backgroundY, scale: backgroundScale }}
        >
          <motion.div
            className="absolute inset-[-12%]"
            animate={{
              scale: [1, 1.07],
              x: ["0%", "2%"],
              y: ["0%", "-1.5%"],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <Image src={imageUrl} alt="" fill priority className={imageClassName} sizes="100vw" />
            <div className={cn("absolute inset-0", overlayClassName)} aria-hidden />
          </motion.div>
        </motion.div>
      ) : (
        <>
          <Image src={imageUrl} alt="" fill priority className={imageClassName} sizes="100vw" />
          <div className={cn("absolute inset-0", overlayClassName)} aria-hidden />
        </>
      )}

      <div
        className={cn(
          "container relative z-10 mx-auto flex min-h-[min(28rem,72svh)] items-center px-4 py-16 sm:py-20",
          centered && "justify-center"
        )}
      >
        <motion.div
          className={cn("max-w-xl", centered && "mx-auto text-center")}
          style={parallaxEnabled ? { y: textY } : undefined}
        >
          <motion.h1
            id={headingId}
            className="font-heading text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-white"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-4 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.15 }}
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.28 }}
          >
            <Button
              asChild
              variant="default"
              shape="pill"
              size="sm"
              className="mt-8 h-11 px-8 text-sm font-semibold"
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
