"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Phone } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/cn"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT_OVERLAY = { once: true, amount: 0.12 as const }
const VIEWPORT_EXPERT = { once: true, amount: 0.08 as const }

type MarketingCtaBannerBaseProps = {
  title: string
  imageUrl: string
  cta: {
    label: string
    href: string
  }
  headingId?: string
  className?: string
}

export type MarketingCtaBannerSectionProps =
  | (MarketingCtaBannerBaseProps & { variant?: "overlay" })
  | (MarketingCtaBannerBaseProps & {
      variant: "expert"
      subtitle: string
      phoneLabel: string
      phoneHref: string
    })

export function MarketingCtaBannerSection(props: MarketingCtaBannerSectionProps) {
  const {
    title,
    imageUrl,
    cta,
    headingId = "marketing-cta-banner-heading",
    className,
  } = props

  if (props.variant === "expert") {
    const { subtitle, phoneLabel, phoneHref } = props

    return (
      <section className={cn("bg-white py-6 md:py-8", className)} aria-labelledby={headingId}>
        <div className="container mx-auto px-4">
          <motion.div
            className="relative overflow-hidden rounded-xl border border-border"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_EXPERT}
            transition={{ duration: 0.85, ease: EASE }}
          >
            <div className="grid min-h-[116px] items-stretch md:grid-cols-[1.3fr_1.7fr]">
              <div className="bg-[#D7E4E9] px-6 py-6 md:px-10">
                <h2
                  id={headingId}
                  className="font-heading text-2xl font-semibold leading-tight text-a7-black md:text-4xl"
                >
                  {title}
                </h2>
                <p className="mt-1 text-sm text-a7-text-gray md:text-base">{subtitle}</p>
              </div>

              <div className="relative flex items-center justify-center px-6 py-6 md:justify-end md:px-8">
                <Image
                  src={imageUrl}
                  alt=""
                  fill
                  className="object-cover object-center opacity-35"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-white/40" aria-hidden />
                <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 md:justify-end">
                  <Button
                    asChild
                    variant="outline"
                    shape="pill"
                    size="sm"
                    className="h-10 border-black/30 bg-white/70 px-5 text-a7-black"
                  >
                    <Link href={cta.href} className="inline-flex items-center gap-1.5">
                      {cta.label}
                      <ArrowUpRight className="size-3.5" aria-hidden />
                    </Link>
                  </Button>
                  <Button asChild variant="default" shape="pill" size="sm" className="h-10 gap-1.5 px-5 text-sm">
                    <Link href={phoneHref} className="inline-flex items-center gap-1.5">
                      <Phone className="size-3.5" aria-hidden />
                      {phoneLabel}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className={cn("relative isolate overflow-hidden", className)} aria-labelledby={headingId}>
      <Image src={imageUrl} alt="" fill className="object-cover object-center" sizes="100vw" priority={false} />
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      <div className="container relative mx-auto flex min-h-[min(20rem,50svh)] flex-col items-center justify-center px-4 py-16 text-center text-white md:min-h-80 md:py-20">
        <motion.h2
          id={headingId}
          className="max-w-2xl font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight tracking-tight"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_OVERLAY}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_OVERLAY}
          transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}
        >
          <Button
            asChild
            variant="outline"
            shape="pill"
            size="sm"
            className="mt-8 border-white/40 bg-white/10 px-8 text-white hover:bg-white/20"
          >
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
