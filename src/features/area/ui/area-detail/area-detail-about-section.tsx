"use client"

import Image from "next/image"
import { Camera, Check } from "lucide-react"
import { motion } from "framer-motion"

import type { AreaDetailContent } from "@/features/area/services/content"
import { getAreaDetailAboutTitle, getAreaDetailSectionId } from "@/features/area"
import { cn } from "@/shared/lib/cn"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const VIEWPORT = { once: true, amount: 0.08 as const }

type AreaDetailAboutSectionProps = {
  area: AreaDetailContent
}

export function AreaDetailAboutSection({ area }: AreaDetailAboutSectionProps) {
  const [heroImage, ...gridImages] = area.galleryImages
  const sectionId = getAreaDetailSectionId("about")
  const title = getAreaDetailAboutTitle(area.title)

  return (
    <section id={sectionId} className="scroll-mt-28" aria-labelledby={`${sectionId}-heading`}>
      <motion.article
        className="rounded-2xl border border-border bg-white px-5 py-6 sm:px-7 sm:py-8 md:px-8 md:py-9"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <h2
          id={`${sectionId}-heading`}
          className="font-heading text-2xl font-bold text-a7-black md:text-3xl lg:text-[2rem]"
        >
          {title}
        </h2>

        <div className="mt-5 space-y-5 md:mt-6 md:space-y-6">
          <div className="space-y-4 text-sm leading-relaxed text-a7-text-gray md:text-base">
            {area.aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {area.highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-[#F3F4F6] px-4 py-3.5 text-sm text-a7-black md:text-[15px]"
              >
                <span
                  className="flex size-5 shrink-0 items-center justify-center rounded-sm border border-black bg-white"
                  aria-hidden
                >
                  <Check className="size-3 stroke-3 text-a7-black" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {heroImage ? (
            <div className="grid gap-3 md:grid-cols-2 md:gap-4">
              <div className="relative min-h-72 overflow-hidden rounded-2xl bg-muted md:min-h-[22rem]">
                <Image
                  src={heroImage}
                  alt={`${area.title} gallery`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </div>

              <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4">
                {gridImages.slice(0, 4).map((src, index) => {
                  const isLast = index === 3

                  return (
                    <div
                      key={`${src}-${index}`}
                      className="relative aspect-square overflow-hidden rounded-2xl bg-muted"
                    >
                      <Image
                        src={src}
                        alt={`${area.title} gallery ${index + 2}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 767px) 45vw, 25vw"
                      />
                      {isLast ? (
                        <div
                          className={cn(
                            "absolute bottom-2.5 right-2.5 flex items-center gap-1.5 rounded-full",
                            "bg-black/65 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm"
                          )}
                        >
                          <Camera className="size-3.5" aria-hidden />
                          <span>{area.galleryPhotoCount}</span>
                        </div>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </div>
          ) : null}
        </div>
      </motion.article>
    </section>
  )
}
