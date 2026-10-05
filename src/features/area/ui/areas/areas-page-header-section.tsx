"use client"

import { motion } from "framer-motion"

import { BreadcrumbList, type BreadcrumbItem } from "@/shared/ui/breadcrumb"
import {
  AREAS_PAGE_DESCRIPTION,
  AREAS_PAGE_TITLE,
} from "@/features/area/services/content"
import { cn } from "@/shared/lib/cn"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export type AreasPageHeaderSectionProps = {
  breadcrumbs: BreadcrumbItem[]
  title?: string
  description?: string
  className?: string
}

export function AreasPageHeaderSection({
  breadcrumbs,
  title = AREAS_PAGE_TITLE,
  description = AREAS_PAGE_DESCRIPTION,
  className,
}: AreasPageHeaderSectionProps) {
  return (
    <section className={cn("bg-white", className)} aria-labelledby="areas-page-heading">
      <div className="container mx-auto px-4 py-5 sm:py-6">
        <BreadcrumbList items={breadcrumbs} size="sm" separator="chevron" />

        <motion.h1
          id="areas-page-heading"
          className="mt-5 font-heading text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight tracking-tight text-a7-black md:mt-6 md:text-[40px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {title}
        </motion.h1>

        {description ? (
          <motion.p
            className="mt-3 max-w-4xl text-sm leading-relaxed text-a7-text-gray md:mt-4 md:text-base"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.12 }}
          >
            {description}
          </motion.p>
        ) : null}
      </div>
    </section>
  )
}
