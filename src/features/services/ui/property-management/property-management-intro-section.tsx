"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { BreadcrumbList } from "@/shared/ui/breadcrumb"
import type { PropertyManagementPageContent } from "@/features/services/services/content"
import { cn } from "@/shared/lib/cn"

type PropertyManagementIntroSectionProps = {
  intro: PropertyManagementPageContent["intro"]
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function PropertyManagementIntroSection({
  intro,
  className,
}: PropertyManagementIntroSectionProps) {
  return (
    <section className={cn("bg-white", className)} aria-labelledby="property-management-intro-heading">
      <div className="container mx-auto px-4 py-10 sm:py-12 md:py-14">
        <BreadcrumbList items={intro.breadcrumbs} size="sm" separator="chevron" />

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            className="relative aspect-4/5 w-full overflow-hidden rounded-2xl shadow-md"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.95, ease: EASE }}
          >
            <Image
              src={intro.imageUrl}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          >
            <h2
              id="property-management-intro-heading"
              className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-tight tracking-tight text-a7-black"
            >
              {intro.title}
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-a7-text-gray md:text-base">
              {intro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-justify md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
