"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion"
import { useRef } from "react"

import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { cn } from "@/shared/lib/cn"

export type HomeDeveloperCtaNewsletterProps = {
  imageUrl: string
  heroTitle: string
  newsletterTitle: string
  contactHref?: string
  heroEyebrow?: string
  heroEyebrowPercent?: string
  heroEyebrowLabel?: string
  contactLabel?: string
  subscribeLabel?: string
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.15 as const }

export function HomeDeveloperCtaNewsletter({
  imageUrl,
  heroTitle,
  newsletterTitle,
  contactHref = "#contact",
  heroEyebrow,
  heroEyebrowPercent,
  heroEyebrowLabel,
  contactLabel = "Contact Broker",
  subscribeLabel = "Subscribe",
  className,
}: HomeDeveloperCtaNewsletterProps) {
  const showSplitEyebrow = Boolean(heroEyebrowPercent && heroEyebrowLabel)
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
      className={cn(className, "relative isolate overflow-hidden bg-black")}
      aria-label="Developer prices and newsletter"
    >
      <div className="relative min-h-[min(72vw,28rem)] overflow-hidden md:min-h-130 lg:min-h-140">
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
              alt=""
              fill
              className="object-cover object-[center_35%]"
              sizes="100vw"
              priority={false}
            />
            <motion.div
              className="absolute inset-0 bg-black/55"
              initial={parallaxEnabled ? false : { opacity: 0 }}
              whileInView={parallaxEnabled ? undefined : { opacity: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: 1.2, ease: "easeOut" }}
              aria-hidden
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex min-h-[min(72vw,28rem)] flex-col items-center justify-center px-4 pt-14 pb-32 text-center text-white sm:pb-36 md:min-h-130 md:pt-20 md:pb-44 lg:min-h-140 lg:pb-48"
          style={parallaxEnabled ? { y: textY } : undefined}
        >
          {showSplitEyebrow ? (
            <motion.div
              className="flex flex-col items-center gap-1 text-white md:gap-1.5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.85, ease: EASE }}
            >
              <p className="font-inter text-[clamp(3rem,12vw,4.5rem)] font-bold leading-none tracking-tight md:text-[72px]">
                {heroEyebrowPercent}
              </p>
              <p className="font-inter text-[11px] font-bold uppercase tracking-[0.32em] md:text-[13px]">
                {heroEyebrowLabel}
              </p>
            </motion.div>
          ) : heroEyebrow ? (
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, ease: EASE }}
            >
              {heroEyebrow}
            </motion.p>
          ) : null}

          <motion.h2
            className={cn(
              "max-w-xl font-heading text-[clamp(1.75rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-tight md:text-[48px]",
              showSplitEyebrow ? "mt-8 md:mt-10" : "mt-4"
            )}
            initial={{ opacity: 0, y: 52 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.95, ease: EASE, delay: 0.15 }}
          >
            {heroTitle}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE, delay: 0.32 }}
          >
            <Button
              asChild
              variant="outline"
              shape="pill"
              size="sm"
              className="mt-8 border-white/40 bg-white/10 px-6 text-white hover:bg-white md:mt-10"
            >
              <Link href={contactHref}>
                {contactLabel}
                <ArrowUpRight className="ml-1 size-4" aria-hidden />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-4 pb-14 md:-mt-20 md:pb-20 lg:-mt-24 lg:pb-20">
        <motion.div
          className="rounded-2xl bg-white px-6 py-10 text-center shadow-xl sm:px-10 sm:py-12 md:px-12 md:py-14"
          initial={{ opacity: 0, y: 52 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.0, ease: EASE, delay: 0.15 }}
        >
          <div className="mx-auto w-full max-w-[780px]">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary">
              <Mail className="size-6 text-white" aria-hidden />
            </div>
            <h3 className="mt-8 font-heading text-[clamp(1.35rem,3vw,2rem)] font-semibold leading-snug tracking-tight text-a7-black">
              {newsletterTitle}
            </h3>
            <form
              className="mt-10 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-2 sm:rounded-full sm:bg-a7-panel-surface sm:p-1.5"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                autoComplete="email"
                radius="full"
                className="h-12 border-0 bg-a7-panel-surface text-a7-black shadow-none focus-visible:ring-primary/30 sm:h-11 sm:flex-1 sm:bg-transparent"
              />
              <Button
                type="submit"
                variant="default"
                shape="pill"
                size="sm"
                label={subscribeLabel}
                iconRight={<ArrowUpRight className="size-4 text-black" strokeWidth={2.25} />}
                className="h-12 shrink-0 px-8 sm:h-11"
              />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
