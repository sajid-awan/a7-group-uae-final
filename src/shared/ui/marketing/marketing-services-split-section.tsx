"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { BreadcrumbList, type BreadcrumbItem } from "@/shared/ui/breadcrumb"
import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/cn"

import { MARKETING_SERVICE_ICONS, type MarketingServiceIconKey } from "./marketing-service-icons"

export type MarketingServiceItem = {
  id: string
  label: string
  icon: MarketingServiceIconKey
}

export type MarketingServicesSplitSectionProps = {
  breadcrumbs?: readonly BreadcrumbItem[]
  title: string
  intro: string
  services: readonly MarketingServiceItem[]
  imageUrl: string
  cta: {
    label: string
    href: string
  }
  headingId?: string
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function MarketingServicesSplitSection({
  breadcrumbs,
  title,
  intro,
  services,
  imageUrl,
  cta,
  headingId = "marketing-services-split-heading",
  className,
}: MarketingServicesSplitSectionProps) {
  return (
    <section
      className={cn("bg-white py-10 md:py-14", className)}
      aria-labelledby={headingId}
    >
      <div className="container mx-auto px-4">
        {breadcrumbs ? <BreadcrumbList items={breadcrumbs} size="sm" separator="chevron" /> : null}

        <div className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-14", breadcrumbs && "mt-8")}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <h2
              id={headingId}
              className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-tight tracking-tight text-a7-black"
            >
              {title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-a7-text-gray md:text-base">{intro}</p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
              {services.map((service, index) => {
                const Icon = MARKETING_SERVICE_ICONS[service.icon]
                return (
                  <motion.li
                    key={service.id}
                    className="flex items-center gap-3 rounded-2xl bg-[#F3F4F6] px-4 py-3.5 text-sm font-medium text-a7-black"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.1 + index * 0.05 }}
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    {service.label}
                  </motion.li>
                )
              })}
            </ul>
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

          <motion.div
            className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-md"
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.95, ease: EASE, delay: 0.1 }}
          >
            <Image src={imageUrl} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
