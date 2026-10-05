"use client"

import { motion } from "framer-motion"

import { BreadcrumbList, type BreadcrumbItem } from "@/shared/ui/breadcrumb"
import {
  DEVELOPERS_PAGE_INTRO,
  DEVELOPERS_PAGE_TITLE,
} from "@/features/developer/services/content"
import { cn } from "@/shared/lib/cn"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export type DevelopersPageHeaderSectionProps = {
  breadcrumbs: BreadcrumbItem[]
  title?: string
  intro?: readonly string[]
  className?: string
}

export function DevelopersPageHeaderSection({
  breadcrumbs,
  title = DEVELOPERS_PAGE_TITLE,
  intro = DEVELOPERS_PAGE_INTRO,
  className,
}: DevelopersPageHeaderSectionProps) {
  return (
    <section className={cn("bg-white", className)} aria-labelledby="developers-page-heading">
      <div className="container mx-auto px-4 py-5 sm:py-6">
        <BreadcrumbList items={breadcrumbs} size="sm" separator="chevron" />

        <motion.h1
          id="developers-page-heading"
          className="mt-5 font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight tracking-tight text-a7-black md:mt-6 md:text-[40px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {title}
        </motion.h1>

        <motion.div
          className="mt-4 max-w-4xl space-y-3 text-sm leading-relaxed text-a7-text-gray md:mt-5 md:text-base"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.12 }}
        >
          {intro.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
