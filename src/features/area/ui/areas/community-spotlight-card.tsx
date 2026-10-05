"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { Building2, ChevronLeft, ChevronRight, Home, Hexagon, Star } from "lucide-react"
import Slider from "react-slick"
import type { CustomArrowProps } from "react-slick"

import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { CommunityStatTile } from "@/features/area/ui/areas/community-stat-tile"
import {
  CARD_HOVER_GROUP,
  CARD_HOVER_SURFACE,
  CAROUSEL_NAV_SHELL_NEXT_CENTERED,
  CAROUSEL_NAV_SHELL_PREV_CENTERED,
} from "@/shared/lib/card-hover"
import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"

function hasText(value?: string) {
  return Boolean(value?.trim())
}

function trimForSummary(value?: string, maxChars = 350) {
  if (!value) return ""
  if (value.length <= maxChars) return value

  const sliced = value.slice(0, maxChars)
  const lastSpace = sliced.lastIndexOf(" ")
  const safe = lastSpace > 0 ? sliced.slice(0, lastSpace) : sliced
  return `${safe}...`
}

function pickCommunityThumbSlideColumns(width: number) {
  if (width < 340) return 2
  if (width < 480) return 3
  return 4
}

function SlickPrevArrow({ className, onClick }: CustomArrowProps) {
  const disabled = className?.includes("slick-disabled")

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-xs"
      shape="pill"
      className={cn(
        "absolute left-3 top-1/2 z-10 size-9 min-h-9 min-w-9 -translate-y-1/2 border-transparent bg-white/95 text-a7-text-gray backdrop-blur hover:bg-white/95 [&_svg]:size-4",
        CAROUSEL_NAV_SHELL_PREV_CENTERED
      )}
      onClick={onClick}
      disabled={disabled}
      aria-label="Previous image"
    >
      <ChevronLeft className="size-4" />
    </Button>
  )
}

function SlickNextArrow({ className, onClick }: CustomArrowProps) {
  const disabled = className?.includes("slick-disabled")

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-xs"
      shape="pill"
      className={cn(
        "absolute right-3 top-1/2 z-10 size-9 min-h-9 min-w-9 -translate-y-1/2 border-transparent bg-white/95 text-a7-text-gray backdrop-blur hover:bg-white/95 [&_svg]:size-4",
        CAROUSEL_NAV_SHELL_NEXT_CENTERED
      )}
      onClick={onClick}
      disabled={disabled}
      aria-label="Next image"
    >
      <ChevronRight className="size-4" />
    </Button>
  )
}

type SpotlightStat = {
  value: string
  label: string
}

const defaultSpotlightStatIcons = [Building2, Home, Hexagon] as const

const defaultSpotlightStats: SpotlightStat[] = [
  { value: "75%", label: "Apartment" },
  { value: "15%", label: "Villa" },
  { value: "3%", label: "Penthouse" },
]

export type CommunitySpotlightCardProps = {
  imageUrl?: string
  imageUrls?: string[]
  imageTags?: string[]
  title?: string
  description?: string
  pricePerSqft?: string
  thumbnails?: string[]
  /** Defaults to 75%/15%/3% with building/home/hexagon icons. */
  propertyTypeStats?: SpotlightStat[]
  rentAmount?: string
  saleAmount?: string
  /** Hide thumbnail strip; main carousel only. Default true when sources exist. */
  showThumbnails?: boolean
  /** Hide AED / sqft badge even if `pricePerSqft` is set. Default true. */
  showPricePerSqftBadge?: boolean
  /** Hide property-type stat tiles and the distribution footnote. Default true. */
  showPropertyTypeStats?: boolean
  /** Footer: outline “Learn more about …”. Default true. */
  showLearnMoreButton?: boolean
  /** Footer: primary “Discover …”. Default true. */
  showDiscoverButton?: boolean
  learnMoreHref?: string
  discoverHref?: string
  className?: string
}

export function CommunitySpotlightCard({
  imageUrl,
  imageUrls = [],
  imageTags = [],
  title,
  description,
  pricePerSqft,
  thumbnails = [],
  propertyTypeStats = defaultSpotlightStats,
  rentAmount = "80,000 AED/year",
  saleAmount = "690,000 AED",
  showThumbnails = true,
  showPricePerSqftBadge = true,
  showPropertyTypeStats = true,
  showLearnMoreButton = true,
  showDiscoverButton = true,
  learnMoreHref,
  discoverHref,
  className,
}: CommunitySpotlightCardProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [mainSlider, setMainSlider] = useState<Slider | null>(null)
  const [thumbSlider, setThumbSlider] = useState<Slider | null>(null)
  const mainSliderRef = useRef<Slider | null>(null)
  const thumbSliderRef = useRef<Slider | null>(null)
  const layoutRootRef = useRef<HTMLDivElement>(null)
  const [thumbSlidesToShow, setThumbSlidesToShow] = useState(4)

  const gallery = useMemo(
    () => (imageUrls.length ? imageUrls : imageUrl ? [imageUrl] : []),
    [imageUrl, imageUrls]
  )
  const slides = gallery.length > 0 ? gallery : [null]
  const canLoopMain = gallery.length > 1
  const thumbSources = thumbnails.length ? thumbnails : gallery
  const safeThumbSources = thumbSources.filter(Boolean) as string[]
  const canLoopThumb = safeThumbSources.length > 4
  const safeImageTags = imageTags.map((t) => t.trim()).filter(Boolean).slice(0, 3)
  const stats = propertyTypeStats.slice(0, 3)
  const summaryText = trimForSummary(description, 350)

  useLayoutEffect(() => {
    const w = layoutRootRef.current?.offsetWidth ?? 0
    if (w) setThumbSlidesToShow(pickCommunityThumbSlideColumns(w))
  }, [])

  useEffect(() => {
    const el = layoutRootRef.current
    if (!el || typeof ResizeObserver === "undefined") return

    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? 0
      setThumbSlidesToShow((prev) => {
        const next = pickCommunityThumbSlideColumns(w)
        return next === prev ? prev : next
      })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const mainSettings = {
    arrows: true,
    dots: false,
    infinite: canLoopMain,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    prevArrow: <SlickPrevArrow />,
    nextArrow: <SlickNextArrow />,
    beforeChange: (_old: number, next: number) => setActiveIndex(next),
  }

  const thumbSlides = Math.min(thumbSlidesToShow, Math.max(safeThumbSources.length, 1))

  useEffect(() => {
    setMainSlider(mainSliderRef.current)
    setThumbSlider(thumbSliderRef.current)
  }, [gallery.length, safeThumbSources.length, thumbSlides])

  const thumbSettings = useMemo(
    () => ({
      arrows: false,
      dots: false,
      infinite: canLoopThumb,
      speed: 300,
      slidesToShow: thumbSlides,
      slidesToScroll: 1,
      swipeToSlide: true,
      focusOnSelect: true,
      beforeChange: (_old: number, next: number) => setActiveIndex(next),
    }),
    [canLoopThumb, thumbSlides]
  )

  const learnMoreTitle = hasText(title) ? title : "this community"

  /** ~45% / 55% split to match design; same template for media row + button row. */
  const spotlightMainGrid =
    "grid min-w-0 grid-cols-1 gap-x-0 gap-y-3 @md/community-card:grid-cols-[minmax(0,9fr)_minmax(0,11fr)] @md/community-card:items-stretch @md/community-card:gap-x-4"

  return (
    <div
      ref={layoutRootRef}
      className={cn(
        CARD_HOVER_GROUP,
        CARD_HOVER_SURFACE,
        "@container/community-card rounded-lg border border-border bg-[#f2f2f2] p-3 sm:p-4",
        className
      )}
    >
      <div className={spotlightMainGrid}>
        <div className="flex h-full min-h-0 min-w-0 flex-col gap-2 self-stretch">
          <div className="relative flex min-h-50 w-full flex-1 flex-col overflow-hidden rounded-lg bg-muted @md/community-card:min-h-0">
            <Slider
              ref={(instance) => {
                mainSliderRef.current = instance
              }}
              asNavFor={showThumbnails && safeThumbSources.length > 0 ? thumbSlider ?? undefined : undefined}
              {...mainSettings}
              className="community-main-slider flex h-full min-h-0 w-full flex-1 flex-col [&_.slick-list]:min-h-0 [&_.slick-list]:flex-1"
            >
              {slides.map((src, idx) => (
                <div key={src ? `${src}-${idx}` : `main-${idx}`} className="h-full">
                  <div className="relative aspect-16/10 h-full min-h-50 w-full @md/community-card:aspect-auto @md/community-card:min-h-full">
                    {src ? (
                      <>
                        <Image
                          src={src}
                          alt={`${title || "Spotlight image"} ${idx + 1}`}
                          fill
                          sizes="(max-width: 767px) 100vw, 45vw"
                          className="object-cover"
                          priority={idx === 0}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
                        No image
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
            {safeImageTags.length ? (
              <div className="pointer-events-none absolute -left-[17px] top-3 z-[2] flex flex-col gap-2">
                {safeImageTags.map((tag, i) => (
                  <Badge key={`${tag}-${i}`} variant="paymentPlan" size="sm" className="pointer-events-auto shadow-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>

          {showThumbnails && safeThumbSources.length > 0 ? (
            <div className="w-full">
              <Slider
                key={`thumbs-${thumbSlides}`}
                ref={(instance) => {
                  thumbSliderRef.current = instance
                }}
                asNavFor={mainSlider ?? undefined}
                {...thumbSettings}
                className="community-thumb-slider"
              >
                {safeThumbSources.map((thumb, idx) => {
                  const isActive = activeIndex === idx
                  return (
                    <div key={`${thumb}-${idx}`} className="px-1">
                      <button
                        type="button"
                        onClick={() => mainSlider?.slickGoTo(idx)}
                        className={cn(
                          "group/thumb relative h-28 w-full overflow-hidden rounded-md border-2 bg-muted transition-[opacity,transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          isActive
                            ? "border-primary opacity-100 shadow-md"
                            : "border-transparent opacity-45 hover:border-border/70 hover:opacity-70 hover:shadow-sm"
                        )}
                        aria-label={`Go to image ${idx + 1}`}
                        aria-current={isActive ? "true" : undefined}
                      >
                        <Image
                          src={thumb}
                          alt={`${title || "Community"} thumbnail ${idx + 1}`}
                          fill
                          sizes="(max-width: 767px) 24vw, 96px"
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/thumb:scale-105"
                        />
                      </button>
                    </div>
                  )
                })}
              </Slider>
            </div>
          ) : null}
        </div>

        <div className="flex h-full min-h-0 min-w-0 flex-col gap-2 self-stretch">
          <div className="flex flex-wrap items-start justify-between gap-2">
            {hasText(title) ? (
              <h3 className="font-inter text-xl font-bold @md/community-card:text-2xl text-a7-black">{title}</h3>
            ) : null}
            {showPricePerSqftBadge && hasText(pricePerSqft) ? (
              <Badge
                variant="outline"
                size="sm"
                className="shrink-0 border-[#E4C57E] bg-[#FFF8EA] text-[10px] font-semibold text-a7-black"
              >
                <AedText text={pricePerSqft} />
              </Badge>
            ) : null}
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Star className="size-3.5 fill-[#F7B500] text-[#F7B500]" />
            <Star className="size-3.5 fill-[#F7B500] text-[#F7B500]" />
            <Star className="size-3.5 fill-[#F7B500] text-[#F7B500]" />
            <Star className="size-3.5 fill-[#F7B500] text-[#F7B500]" />
            <Star className="size-3.5" />
            <span className="text-base text-a7-text-gray">48 Ratings</span>
          </div>

          {hasText(description) ? (
            <p className="text-sm leading-relaxed text-a7-text-gray">
              {summaryText}{" "}
              <Button
                type="button"
                variant="link"
                size="sm"
                className="inline h-auto min-h-0 p-0 align-baseline text-sm font-semibold text-a7-black underline-offset-4 hover:text-a7-black"
              >
                Learn more
              </Button>
            </p>
          ) : null}

          {showPropertyTypeStats && stats.length ? (
            <>
              <div className="grid min-w-0 grid-cols-1 gap-2 @sm/community-card:grid-cols-3">
                {stats.map((item, index) => {
                  const Icon = defaultSpotlightStatIcons[index] ?? Building2
                  return (
                    <CommunityStatTile key={item.label} icon={Icon} value={item.value} label={item.label} />
                  )
                })}
              </div>
              <p className="text-xs text-muted-foreground">* Distribution of property types in this community.</p>
            </>
          ) : null}
          <p className="text-xl font-bold text-a7-black @md/community-card:text-2xl">Apartment prices starting from</p>
          {hasText(rentAmount) ? (
            <p className="text-xl text-a7-black">
              <span className="font-semibold">For rent :</span>{" "}
              <span className="font-normal">
                <AedText text={rentAmount} />
              </span>
            </p>
          ) : null}
          {hasText(saleAmount) ? (
            <p className="text-xl text-a7-black">
              <span className="font-semibold">For sale :</span>{" "}
              <span className="font-normal">
                <AedText text={saleAmount} />
              </span>
            </p>
          ) : null}
          <p className="text-xs text-muted-foreground">* Based on listing prices in last 3 months.</p>
        </div>
      </div>

      {showLearnMoreButton || showDiscoverButton ? (
        showLearnMoreButton && showDiscoverButton ? (
          <div className={cn(spotlightMainGrid, "mt-3 @md/community-card:mt-4")}>
            {showLearnMoreButton ? (
              learnMoreHref ? (
                <Button asChild variant="outline" shape="pill" size="sm" className="w-full text-sm font-medium">
                  <Link href={learnMoreHref}>Learn more about {learnMoreTitle}</Link>
                </Button>
              ) : (
                <Button variant="outline" shape="pill" size="sm" className="w-full text-sm font-medium">
                  Learn more about {learnMoreTitle}
                </Button>
              )
            ) : null}
            {showDiscoverButton ? (
              discoverHref ? (
                <Button asChild variant="default" shape="pill" size="sm" className="w-full text-base font-semibold">
                  <Link href={discoverHref}>Discover the available properties</Link>
                </Button>
              ) : (
                <Button variant="default" shape="pill" size="sm" className="w-full text-base font-semibold">
                  Discover the available properties
                </Button>
              )
            ) : null}
          </div>
        ) : (
          <div className="mt-3 flex w-full flex-col gap-3 @md/community-card:mt-4">
            {showLearnMoreButton ? (
              learnMoreHref ? (
                <Button asChild variant="outline" shape="pill" size="sm" className="w-full text-sm font-medium">
                  <Link href={learnMoreHref}>Learn more about {learnMoreTitle}</Link>
                </Button>
              ) : (
                <Button variant="outline" shape="pill" size="sm" className="w-full text-sm font-medium">
                  Learn more about {learnMoreTitle}
                </Button>
              )
            ) : null}
            {showDiscoverButton ? (
              discoverHref ? (
                <Button asChild variant="default" shape="pill" size="sm" className="w-full text-base font-semibold">
                  <Link href={discoverHref}>Discover the available properties</Link>
                </Button>
              ) : (
                <Button variant="default" shape="pill" size="sm" className="w-full text-base font-semibold">
                  Discover the available properties
                </Button>
              )
            ) : null}
          </div>
        )
      ) : null}
    </div>
  )
}

CommunitySpotlightCard.displayName = "CommunitySpotlightCard"
