"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { BreadcrumbList, type BreadcrumbItem } from "@/shared/ui/breadcrumb"
import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/cn"

export type MarketingImageTextSectionProps = {
  breadcrumbs?: readonly BreadcrumbItem[]
  title: string
  paragraphs: readonly string[]
  imageUrl: string
  imagePosition?: "left" | "right"
  cta?: {
    label: string
    href: string
  }
  headingId?: string
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.12 as const }

export function MarketingImageTextSection({
  breadcrumbs,
  title,
  paragraphs,
  imageUrl,
  imagePosition = "left",
  cta,
  headingId = "marketing-image-text-heading",
  className,
}: MarketingImageTextSectionProps) {
  const imageBlock = (
    <motion.div
      className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-md"
      initial={{ opacity: 0, x: imagePosition === "left" ? -36 : 36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.95, ease: EASE }}
    >
      <Image src={imageUrl} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
    </motion.div>
  )

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
    >
      <h2
        id={headingId}
        className="font-heading text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-tight tracking-tight text-a7-black"
      >
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-sm leading-relaxed text-a7-text-gray md:text-base">
        {paragraphs.map((paragraph) => (
          <p className="md:text-base text-sm" key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
      {cta ? (
        <Button
          asChild
          variant="default"
          shape="pill"
          size="sm"
          className="mt-8 h-11 px-8 text-sm font-semibold"
        >
          <Link href={cta.href}>{cta.label}</Link>
        </Button>
      ) : null}
    </motion.div>
  )

  return (
    <section
      className={cn("bg-white py-10 md:py-14", className)}
      aria-labelledby={headingId}
    >
      <div className="container mx-auto px-4">
        {breadcrumbs ? <BreadcrumbList items={breadcrumbs} size="sm" separator="chevron" className="mb-8" /> : null}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {imagePosition === "left" ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
