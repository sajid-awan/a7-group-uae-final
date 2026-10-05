"use client"

import Image from "next/image"
import Link from "next/link"
import { BadgeCheck, KeyRound, Star, ThumbsUp } from "lucide-react"

import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { CommunityStatTile } from "@/features/area/ui/areas/community-stat-tile"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel"
import { CARD_HOVER_GROUP, CARD_HOVER_IMAGE, CARD_HOVER_SURFACE } from "@/shared/lib/card-hover"
import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"

function hasText(value?: string) {
  return Boolean(value?.trim())
}

function trimForSummary(value?: string, maxChars = 220) {
  if (!value) return ""
  if (value.length <= maxChars) return value

  const sliced = value.slice(0, maxChars)
  const lastSpace = sliced.lastIndexOf(" ")
  const safe = lastSpace > 0 ? sliced.slice(0, lastSpace) : sliced
  return `${safe}...`
}

type StatItem = {
  value: string
  label: string
}

const defaultStatIcons = [BadgeCheck, KeyRound, ThumbsUp] as const

export type CommunitySummaryCardProps = {
  imageUrl?: string
  imageUrls?: string[]
  /** Optional ribbon tags on the hero (e.g. payment plan). Omitted when empty. */
  imageTags?: string[]
  title?: string
  description?: string
  pricePerSqft?: string
  stats?: StatItem[]
  learnMoreHref?: string
  className?: string
}

export function CommunitySummaryCard({
  imageUrl,
  imageUrls = [],
  imageTags = [],
  title,
  description,
  pricePerSqft,
  stats = [],
  learnMoreHref,
  className,
}: CommunitySummaryCardProps) {
  const safeStats = stats.slice(0, 3)
  const safeImageTags = imageTags.map((t) => t.trim()).filter(Boolean).slice(0, 3)
  const gallery = imageUrls.length ? imageUrls : imageUrl ? [imageUrl] : []
  const summaryText = trimForSummary(description, 350)
  const slides = gallery.length > 0 ? gallery : [null]
  const canLoop = gallery.length > 1

  return (
    <div
      className={cn(
        CARD_HOVER_GROUP,
        CARD_HOVER_SURFACE,
        "@container/community-card rounded-lg bg-a7-community-summary-surface p-3 sm:p-4",
        className
      )}
    >
      <div className="grid min-w-0 grid-cols-1 gap-3 @md/community-card:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="relative min-h-0 min-w-0 h-full">
          <Carousel opts={{ loop: canLoop }} className="relative h-full w-full bg-muted">
            <CarouselContent className="ml-0 h-full">
              {slides.map((src, idx) => (
                <CarouselItem key={src ? `${src}-${idx}` : `slide-${idx}`} className="h-full basis-full pl-0">
                  <div className="bg-muted aspect-a7-community-summary-image min-h-a7-community-summary-image relative h-full w-full overflow-hidden rounded-lg">
                    {src ? (
                      <>
                        <Image
                          src={src}
                          alt={`${title || "Community image"} ${idx + 1}`}
                          fill
                          sizes="(max-width: 767px) 100vw, min(560px, 40vw)"
                          className={cn("object-cover", CARD_HOVER_IMAGE)}
                          priority={idx === 0}
                        />
                        <div className="bg-a7-community-summary-overlay pointer-events-none absolute inset-0" />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
                        No image
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {gallery.length > 1 ? (
              <>
                <CarouselPrevious className="left-2 border-transparent bg-white/95 backdrop-blur" />
                <CarouselNext className="right-2 border-transparent bg-white/95 backdrop-blur" />
              </>
            ) : null}
          </Carousel>
          {safeImageTags.length ? (
            <div className="left-a7-community-summary-tags z-a7-community-summary-tags pointer-events-none absolute top-3 flex flex-col gap-2">
              {safeImageTags.map((tag, i) => (
                <Badge key={`${tag}-${i}`} variant="paymentPlan" size="sm" className="pointer-events-auto shadow-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          {hasText(title) ? (
            <h3 className="font-inter text-xl font-bold @md/community-card:text-2xl text-a7-black">{title}</h3>
          ) : null}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Star className="text-a7-rating-star size-3.5 fill-current" />
            <Star className="text-a7-rating-star size-3.5 fill-current" />
            <Star className="text-a7-rating-star size-3.5 fill-current" />
            <Star className="text-a7-rating-star size-3.5 fill-current" />
            <Star className="size-3.5" />
            <span className="text-base text-a7-text-gray">48 Ratings</span>
          </div>
          <div className="flex flex-wrap items-start gap-1">
            {hasText(description) ? (
              <p className="min-w-0 flex-1 text-sm leading-relaxed text-a7-text-gray">
                {summaryText}{" "}
                {learnMoreHref ? (
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="text-a7-black inline h-auto min-h-0 p-0 align-baseline text-sm font-semibold underline-offset-4 hover:text-a7-black"
                  >
                    <Link href={learnMoreHref}>Learn more</Link>
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="link"
                    size="sm"
                    className="text-a7-black inline h-auto min-h-0 p-0 align-baseline text-sm font-semibold underline-offset-4 hover:text-a7-black"
                  >
                    Learn more
                  </Button>
                )}
              </p>
            ) : null}
            {hasText(pricePerSqft) ? (
              <Badge
                variant="outline"
                size="sm"
                className="border-a7-price-badge bg-a7-price-badge-surface ml-auto shrink-0 text-[10px] font-semibold text-a7-black"
              >
                <AedText text={pricePerSqft} />
              </Badge>
            ) : null}
          </div>
          {safeStats.length ? (
            <div className="grid min-w-0 grid-cols-1 gap-2 @sm/community-card:grid-cols-3">
              {safeStats.map((item, index) => {
                const Icon = defaultStatIcons[index] ?? BadgeCheck
                return <CommunityStatTile key={item.label} icon={Icon} value={item.value} label={item.label} />
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

CommunitySummaryCard.displayName = "CommunitySummaryCard"
