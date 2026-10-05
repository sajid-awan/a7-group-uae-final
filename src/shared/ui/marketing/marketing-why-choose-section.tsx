"use client"

import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

import { BreadcrumbList, type BreadcrumbItem } from "@/shared/ui/breadcrumb"
import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/cn"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export type MarketingWhyChooseSectionProps = {
  breadcrumbs?: readonly BreadcrumbItem[]
  title: string
  intro: string
  items: readonly string[]
  images: {
    primaryUrl: string
    secondaryUrl: string
    primaryAlt?: string
    secondaryAlt?: string
  }
  cta: {
    label: string
    href: string
  }
  headingId?: string
  className?: string
}

export function MarketingWhyChooseSection({
  breadcrumbs,
  title,
  intro,
  items,
  images,
  cta,
  headingId = "marketing-why-heading",
  className,
}: MarketingWhyChooseSectionProps) {
  return (
    <section
      className={cn("bg-white  py-10 md:py-14", className)}
      aria-labelledby={headingId}
    >
      <div className="container mx-auto px-4">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {breadcrumbs ? <BreadcrumbList items={breadcrumbs} size="sm" separator="chevron" className="mb-6" /> : null}
            <h2
              id={headingId}
              className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-tight tracking-tight text-a7-black"
            >
              {title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-a7-text-gray md:text-base">{intro}</p>
            <ul className="mt-6 flex flex-col gap-3" role="list">
              {items.map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-[#F3F4F6] px-4 py-3.5 text-sm text-a7-black md:text-[15px]"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.1 + index * 0.05 }}
                >
                  <span
                    className="flex size-5 shrink-0 items-center justify-center rounded-sm border border-black bg-white"
                    aria-hidden
                  >
                    <Check className="size-3 stroke-3 text-a7-black" />
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <Button
              asChild
              variant="default"
              shape="pill"
              size="sm"
              className="mt-8 h-11 w-fit px-8 text-sm font-semibold"
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </motion.div>

          <div className="grid min-h-[min(22rem,70vw)] grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-3 sm:min-h-96 sm:gap-4">
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-md"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.95, ease: EASE, delay: 0.1 }}
            >
              <Image
                src={images.primaryUrl}
                alt={images.primaryAlt ?? ""}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 55vw, 30vw"
              />
            </motion.div>
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-md"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.9, ease: EASE, delay: 0.22 }}
            >
              <Image
                src={images.secondaryUrl}
                alt={images.secondaryAlt ?? ""}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 40vw, 22vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
