"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { Badge } from "@/shared/ui/badge"
import type { PropertyDetailRow, ProjectStoryAsideImage } from "@/features/property"
import { cn } from "@/shared/lib/cn"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.1 as const }

const SECTION_BACKGROUND = "/assets/backgrounds/planning-bg.png"
const DLD_QR_IMAGE = "/assets/projects/project-qr.png"

type PropertyDetailRowsProps = {
  title: string
  rows: PropertyDetailRow[]
  className?: string
}

/** Label | divider | value rows — reusable across property detail panels. */
export function PropertyDetailRows({ title, rows, className }: PropertyDetailRowsProps) {
  return (
    <div className={cn("min-w-0", className)}>
      <h3 className="font-heading text-xl font-bold text-a7-black md:text-2xl">{title}</h3>
      <dl className="mt-6">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex min-h-11 items-center border-b border-border/70 py-3 last:border-b-0"
          >
            <dt className="w-[42%] shrink-0 pr-4 text-sm font-semibold text-a7-black">{row.label}</dt>
            <span className="mx-1 h-5 w-px shrink-0 bg-border" aria-hidden />
            <dd className="min-w-0 flex-1 pl-4 text-sm text-a7-black">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

type PropertyInfoPanelSectionProps = {
  propertyInfo: PropertyDetailRow[]
  regulatoryInfo: PropertyDetailRow[]
  qrImage?: ProjectStoryAsideImage
  dldPermitNumber?: string
  className?: string
}

export function PropertyInfoPanelSection({
  propertyInfo,
  regulatoryInfo,
  qrImage = { src: DLD_QR_IMAGE, alt: "DLD permit QR code" },
  dldPermitNumber,
  className,
}: PropertyInfoPanelSectionProps) {
  return (
    <section
      className={cn("mx-auto container px-6 py-10 md:px-10 md:py-12", className)}
      aria-label="Property details"
    >
      <motion.div
        className="overflow-hidden rounded-2xl  bg-white shadow-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <div className="relative grid gap-10 overflow-hidden p-6 md:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_min(200px,22%)] lg:gap-0 lg:divide-x lg:divide-border">
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.45]"
            aria-hidden
            style={{ backgroundImage: `url(${SECTION_BACKGROUND})` }}
          />
     
          <PropertyDetailRows title="Property details" rows={propertyInfo} className="relative z-10 lg:pr-10" />

          <PropertyDetailRows title="Regulatory information" rows={regulatoryInfo} className="relative z-10 lg:px-10" />

          <aside className="relative z-10 flex flex-col items-center justify-start text-center lg:pl-10">
            <div className="relative aspect-square w-full max-w-[180px]">
              <Image
                src={qrImage.src}
                alt={qrImage.alt}
                fill
                sizes="180px"
                className="object-contain object-center"
              />
            </div>
            <p className="mt-5 text-sm font-medium text-a7-black">DLD Permit Number</p>
            {dldPermitNumber ? (
              <Badge
                variant="muted"
                shape="pill"
                size="lg"
                className="mt-2 border border-border bg-a7-panel-surface px-4 py-1.5 text-sm font-semibold text-a7-text-gray"
              >
                {dldPermitNumber}
              </Badge>
            ) : null}
          </aside>
        </div>
      </motion.div>
    </section>
  )
}
