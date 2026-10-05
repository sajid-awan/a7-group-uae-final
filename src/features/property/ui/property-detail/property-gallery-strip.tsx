"use client"

import Image from "next/image"
import { Camera } from "lucide-react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"

import { cn } from "@/shared/lib/cn"

import "swiper/css"

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

type PropertyGalleryStripProps = {
  images: string[]
  propertyTitle: string
  totalPhotos?: number
  /** When true (default), negative margin overlaps a hero band above. Disable for inline layouts. */
  overlapsHero?: boolean
  className?: string
}

/** 5-image gallery grid overlapping the property hero: 1 large left + 2×2 right. */
export function PropertyGalleryStrip({
  images,
  propertyTitle,
  totalPhotos,
  overlapsHero = true,
  className,
}: PropertyGalleryStripProps) {
  const [main, ...rest] = images
  const photoCount = totalPhotos ?? images.length
  const slides = images.length > 0 ? images : []

  const MAX_GRID_THUMBS = 4
  const gridThumbs = rest.slice(0, MAX_GRID_THUMBS)
  const gridCells: string[] = [...gridThumbs]
  while (gridCells.length < MAX_GRID_THUMBS && gridCells.length > 0) {
    gridCells.push(gridThumbs[gridThumbs.length - 1] ?? main)
  }

  const showPhotoBadge = photoCount > 0 && slides.length > 0
  const badgeGridIndex = MAX_GRID_THUMBS - 1
  const badgeMobileIndex = Math.min(4, slides.length - 1)

  const gridPositions = [
    "col-start-2 row-start-1",
    "col-start-3 row-start-1",
    "col-start-2 row-start-2",
    "col-start-3 row-start-2",
  ] as const

  if (!main) return null

  return (
    <motion.section
      className={cn(
        "relative w-full overflow-hidden",
        overlapsHero ? "z-20 -mt-24 md:-mt-32" : "z-0",
        className
      )}
      aria-label="Property gallery"
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: EASE, delay: 0.3 }}
    >
      <div className="mx-auto container px-6 md:px-10">
        {/* Mobile: swiper 1.3 slides */}
        <div className="md:hidden">
          <Swiper
            slidesPerView={1.3}
            spaceBetween={12}
            className="overflow-visible!"
          >
            {[main, ...gridThumbs].map((src, i) => (
              <SwiperSlide key={`${src}-${i}`}>
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={src}
                    alt={`${propertyTitle} — photo ${i + 1}`}
                    fill
                    sizes="80vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                  {showPhotoBadge && i === badgeMobileIndex ? <PhotoCountOverlay count={photoCount} /> : null}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: 1 large left + 2×2 grid right */}
        <div className="hidden h-112 grid-cols-[1.6fr_1fr_1fr] grid-rows-2 gap-3 md:grid md:h-120 lg:h-144">
          <div className="relative row-span-2 h-full min-h-0 w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={main}
              alt={`${propertyTitle} — main photo`}
              fill
              sizes="(max-width: 1280px) 45vw, 600px"
              className="object-cover"
              priority
            />
          </div>

          {gridCells.map((src, i) => {
            const photoIndex = Math.min(i + 1, slides.length - 1)

            return (
              <div
                key={`${src}-${i}`}
                className={cn(
                  "relative h-full min-h-0 w-full overflow-hidden rounded-2xl shadow-lg",
                  gridPositions[i]
                )}
              >
                <Image
                  src={src}
                  alt={`${propertyTitle} — photo ${photoIndex + 1}`}
                  fill
                  sizes="(max-width: 1280px) 27vw, 360px"
                  className="object-cover"
                />
                {showPhotoBadge && i === badgeGridIndex ? (
                  <PhotoCountOverlay count={photoCount} />
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

function PhotoCountOverlay({ count }: { count: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 bg-black/25"
      aria-hidden
    >
      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />
      <PhotoCountBadge count={count} className="absolute bottom-3 right-3" />
    </div>
  )
}

function PhotoCountBadge({ count, className }: { count: number; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-sm",
        className
      )}
    >
      <Camera className="size-3.5 shrink-0" strokeWidth={2.25} aria-hidden />
      <span>{count.toLocaleString()}</span>
    </span>
  )
}
