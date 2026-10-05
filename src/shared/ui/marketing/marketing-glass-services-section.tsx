"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/shared/lib/cn"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export type MarketingGlassServiceItem = {
  id: string
  title: string
}

export type MarketingGlassServicesSectionProps = {
  title: string
  subtitle?: string
  services: readonly MarketingGlassServiceItem[]
  backgroundImageUrl: string
  headingId?: string
  className?: string
}

function MarketingGlassCheckCard({ title }: { title: string }) {
  return (
    <article className="flex h-full min-h-35 flex-col items-center justify-center rounded-xl border border-white/25 bg-white/10 px-4 py-6 text-center shadow-sm backdrop-blur-md sm:min-h-38 sm:px-5 sm:py-7">
      <span
        className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/15"
        aria-hidden
      >
        <Check className="size-4 text-white" strokeWidth={2.5} />
      </span>
      <h3 className="mt-4 text-sm font-semibold leading-snug text-white sm:text-base">{title}</h3>
    </article>
  )
}

export function MarketingGlassServicesSection({
  title,
  subtitle,
  services,
  backgroundImageUrl,
  headingId = "marketing-glass-services-heading",
  className,
}: MarketingGlassServicesSectionProps) {
  const primaryRow = services.slice(0, 5)
  const secondaryRow = services.slice(5)

  return (
    <section
      className={cn("relative isolate overflow-hidden py-12 md:py-16", className)}
      aria-labelledby={headingId}
    >
      <Image
        src={backgroundImageUrl}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority={false}
      />
      <div className="absolute inset-0 bg-black/50 z-1" aria-hidden />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <h2
            id={headingId}
            className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-tight tracking-tight text-white"
          >
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">{subtitle}</p>
          ) : null}
        </motion.div>

        <div className="mt-8 space-y-4 lg:mt-10 lg:space-y-5">
          {primaryRow.length > 0 ? (
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
              {primaryRow.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.75, ease: EASE, delay: 0.05 + index * 0.07 }}
                >
                  <MarketingGlassCheckCard title={item.title} />
                </motion.li>
              ))}
            </ul>
          ) : null}
          {secondaryRow.length > 0 ? (
            <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {secondaryRow.map((item, index) => (
                <motion.li
                  key={item.id}
                  className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(20%-1rem)] lg:max-w-55"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.75, ease: EASE, delay: 0.05 + index * 0.07 }}
                >
                  <MarketingGlassCheckCard title={item.title} />
                </motion.li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  )
}
