"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import type { ComponentType, ReactNode, SVGProps } from "react"
import {
  BedDouble,
  CircleDollarSign,
  CreditCard,
  Home,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react"

import { WhatsAppColorIcon, whatsAppActionToneClassName } from "@/shared/ui/iconify-icons"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { Card, CardContent } from "@/shared/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel"
import { CommunityStatTile } from "@/features/area/ui/areas/community-stat-tile"
import { CARD_HOVER_GROUP, CARD_HOVER_IMAGE, CARD_HOVER_SURFACE } from "@/shared/lib/card-hover"
import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"

type IconType = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>

function hasText(value?: string) {
  return Boolean(value?.trim())
}

export type PropertyMarketingListingLayout = "vertical" | "horizontal" | "hero"

export type PropertyMarketingStat = {
  icon: LucideIcon
  value: string
  label: string
}

export type PropertyMarketingAction = {
  key: string
  label: string
  icon: IconType
  href?: string
  /** Surface for the CTA chip (border + bg + text). */
  toneClassName?: string
}

export type PropertyMarketingListingCardProps = {
  layout: PropertyMarketingListingLayout
  /** Gallery shown in the carousel (or single hero slide). */
  imageUrls: string[]
  /** Grey subtitle above title, e.g. “Villa, Apartment”. */
  propertyTypes?: string
  title: string
  price: string
  /** Shown before price, e.g. “From:”. */
  pricePrefix?: string
  location: string
  /** Bedroom line next to location icon, e.g. “1, 2, 3”. */
  bedroomSummary?: string
  description?: string
  learnMoreLabel?: string
  paymentPlan?: string
  /** Handover ribbon (bridge yellow styling). */
  handover?: string
  /** Extra grey ribbons stacked under payment plan (hero / vertical top-left). */
  ribbonLabels?: string[]
  /** Horizontal layout stat row; defaults from `price` / `paymentPlan` / `handoverStat` when omitted. */
  statTiles?: PropertyMarketingStat[] | null
  /** Value for default horizontal “Handover” stat tile. */
  handoverStat?: string
  /** Footer CTAs; defaults to Call / Email / Whatsapp when omitted. */
  actions?: PropertyMarketingAction[] | null
  className?: string
}

const defaultActions: PropertyMarketingAction[] = [
  {
    key: "call",
    label: "Call",
    icon: Phone,
    href: "tel:",
    toneClassName: "border-sky-200/80 bg-sky-100 text-sky-950 hover:bg-sky-200/60",
  },
  {
    key: "email",
    label: "Email",
    icon: Mail,
    href: "mailto:",
    toneClassName: "border-rose-200/80 bg-rose-50 text-rose-950 hover:bg-rose-100/80",
  },
  {
    key: "whatsapp",
    label: "Whatsapp",
    icon: WhatsAppColorIcon,
    href: "https://wa.me/",
    toneClassName: whatsAppActionToneClassName,
  },
]

const horizontalHeroImageClip =
  "rounded-t-lg md:rounded-l-lg md:rounded-tr-none md:rounded-br-none md:rounded-bl-lg md:rounded-tl-lg md:rounded-r-none h-full"

function MarketingCarousel({
  imageUrls,
  className,
  imageClassName,
  fillHeight,
  slideOverlayClassName,
}: {
  imageUrls: string[]
  className?: string
  imageClassName?: string
  /** Stretch slides to parent height (hero); skips default min-heights on slides. */
  fillHeight?: boolean
  /** Gradient / tint on each slide only (under carousel arrows & outside-slide chrome). */
  slideOverlayClassName?: string
}) {
  const slides = imageUrls.length ? imageUrls : [""]
  const slideMin =
    fillHeight ? undefined : imageUrls.filter(Boolean).length ? "min-h-55 md:min-h-65" : "min-h-50"
  return (
    <Carousel opts={{ loop: slides.filter(Boolean).length > 1 }} className={cn("relative w-full", className)}>
      <CarouselContent className={cn("ml-0", fillHeight && "h-full [&>*]:h-full")}>
        {slides.map((src, index) => (
          <CarouselItem key={src ? `${src}-${index}` : `empty-${index}`} className={cn("pl-0", fillHeight && "h-full min-h-0")}>
            <div
              className={cn(
                "relative w-full overflow-hidden bg-muted",
                fillHeight ? "h-full min-h-0" : "h-full",
                slideMin,
                imageClassName
              )}
              role={src ? undefined : "img"}
              aria-label={src ? undefined : "Placeholder"}
            >
              {src ? (
                <>
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className={cn("object-cover object-top", CARD_HOVER_IMAGE, slideOverlayClassName && "z-0")}
                  />
                  {slideOverlayClassName ? (
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-0 z-[1]",
                        slideOverlayClassName
                      )}
                      aria-hidden
                    />
                  ) : null}
                </>
              ) : null}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {slides.filter(Boolean).length > 1 ? (
        <>
          <CarouselPrevious className="left-2 z-20 border-transparent bg-white/95 backdrop-blur" />
          <CarouselNext className="right-2 z-20 border-transparent bg-white/95 backdrop-blur" />
        </>
      ) : null}
    </Carousel>
  )
}

function HandoverRibbon({ children }: { children: ReactNode }) {
  return (
    <Badge
      variant="outline"
      shape="pill"
      size="default"
      className="border-[#E4C57E]/50 bg-[#FFF8EA] px-2 py-0.5 text-[10px] font-semibold text-a7-black"
    >
      {children}
    </Badge>
  )
}

/** Off-plan / marketing vertical card — dark glass pill on image (top-left). */
function MarketingImagePaymentPlanBadge({ children }: { children: ReactNode }) {
  return (
    <span className="pointer-events-auto inline-flex max-w-[min(100%,200px)] rounded-md bg-black/55 px-2 py-1 text-[10px] font-medium leading-snug tracking-normal text-white backdrop-blur-[2px]">
      {children}
    </span>
  )
}

/** Off-plan / marketing vertical card — cream pill on image (bottom-right). */
function MarketingImageHandoverBadge({ children }: { children: ReactNode }) {
  return (
    <span className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-[#F3E3A8] px-2 py-0.5 text-[10px] font-semibold text-a7-black shadow-sm">
      {children}
    </span>
  )
}

export function PropertyMarketingListingCard({
  layout,
  imageUrls,
  propertyTypes,
  title,
  price,
  pricePrefix = "From:",
  location,
  bedroomSummary,
  description,
  learnMoreLabel = "Learn more",
  paymentPlan,
  handover,
  ribbonLabels = [],
  statTiles,
  handoverStat = "3%",
  actions,
  className,
}: PropertyMarketingListingCardProps) {
  const safeUrls = imageUrls.filter(Boolean)
  const resolvedActions = actions === null ? [] : actions ?? defaultActions
  const showMeta = hasText(location) || hasText(bedroomSummary)
  const hasDescription = hasText(description)

  const defaultHorizontalStats: PropertyMarketingStat[] = [
    { icon: CircleDollarSign, value: price, label: "Launch Price" },
    { icon: CreditCard, value: hasText(paymentPlan) ? paymentPlan! : "70/30/15", label: "Payment Plan" },
    { icon: Home, value: handoverStat, label: "Handover" },
  ]
  const resolvedStats =
    statTiles === null ? [] : statTiles ?? (layout === "horizontal" ? defaultHorizontalStats : [])

  const router = useRouter()

  const metaTint = layout === "hero" ? "text-white" : "text-a7-black"
  const isImageOverlayLayout = layout === "vertical" || layout === "horizontal"

  const topLeftRibbonStack = isImageOverlayLayout ? (
    hasText(paymentPlan) || ribbonLabels.length > 0 ? (
      <div className="pointer-events-none absolute left-3 top-3 z-10 flex max-w-[calc(100%-1.5rem)] flex-col items-start gap-2">
        {hasText(paymentPlan) ? (
          <MarketingImagePaymentPlanBadge>{paymentPlan}</MarketingImagePaymentPlanBadge>
        ) : null}
        {ribbonLabels.map((label, i) => (
          <MarketingImagePaymentPlanBadge key={`${label}-${i}`}>{label}</MarketingImagePaymentPlanBadge>
        ))}
      </div>
    ) : null
  ) : (
    <div className="pointer-events-none absolute top-3 left-5 z-10 flex flex-col items-start gap-2">
      {hasText(paymentPlan) ? (
        <Badge
          variant="outline"
          size="sm"
          className="pointer-events-auto border-border/80 bg-white/90 text-[10px] font-semibold text-a7-black"
        >
          {paymentPlan}
        </Badge>
      ) : null}
      {ribbonLabels.map((label, i) => (
        <Badge
          key={`${label}-${i}`}
          variant="outline"
          size="sm"
          className="pointer-events-auto border-border/80 bg-white/90 text-[10px] font-semibold text-a7-black"
        >
          {label}
        </Badge>
      ))}
      {hasText(handover) ? (
        <span className="pointer-events-auto">
          <HandoverRibbon>{handover}</HandoverRibbon>
        </span>
      ) : null}
    </div>
  )

  const handoverBottomRight =
    layout !== "hero" && hasText(handover) ? (
      <div className="pointer-events-none absolute bottom-3 right-3 z-10">
        {isImageOverlayLayout ? (
          <MarketingImageHandoverBadge>{handover}</MarketingImageHandoverBadge>
        ) : (
          <HandoverRibbon>{handover}</HandoverRibbon>
        )}
      </div>
    ) : null

  /** Ribbons — positioned siblings of the carousel (not inside `CarouselItem`). */
  const mediaChrome = (
    <>
      {topLeftRibbonStack}
      {handoverBottomRight}
    </>
  )

  /** Carousel lives in a clipped inner shell; chrome is a sibling (never inside `CarouselItem`). */
  const renderMediaColumn = (opts: {
    clipClassName?: string
    carouselClassName?: string
    imageClassName?: string
    fillHeight?: boolean
    slideOverlayClassName?: string
  }) => (
    <div className="relative h-full min-h-0 w-full">
      <div className={cn(opts.clipClassName && "overflow-hidden", opts.clipClassName)}>
        <MarketingCarousel
          imageUrls={safeUrls}
          className={opts.carouselClassName}
          imageClassName={opts.imageClassName}
          fillHeight={opts.fillHeight}
          slideOverlayClassName={opts.slideOverlayClassName}
        />
      </div>
      {mediaChrome}
    </div>
  )
  const metaRow = showMeta ? (
    <div className={cn("flex flex-wrap items-center gap-x-3 gap-y-1 text-xs", metaTint)}>
      {hasText(location) ? (
        <span className={cn("inline-flex items-center gap-1", metaTint)}>
          <MapPin className={cn("size-3 shrink-0", metaTint)} aria-hidden />
          <span>{location}</span>
        </span>
      ) : null}
      {hasText(bedroomSummary) ? (
        <span className={cn("inline-flex items-center gap-1", metaTint)}>
          <BedDouble className={cn("size-3 shrink-0", metaTint)} aria-hidden />
          <span>{bedroomSummary}</span>
        </span>
      ) : null}
    </div>
  ) : null

  const titleBlock = (
    <div className="space-y-1">
      {hasText(propertyTypes) ? (
        <p className={cn("text-xs font-medium", layout === "hero" ? "text-white/80" : "text-muted-foreground")}>
          {propertyTypes}
        </p>
      ) : null}
      <h3
        className={cn(
          "font-inter text-lg font-bold leading-tight tracking-tight text-a7-black md:text-xl",
          layout === "hero" && "text-white drop-shadow-sm"
        )}
      >
        {title}
      </h3>
    </div>
  )

  const priceBlock = (
    <p className={cn("text-base font-bold text-a7-black md:text-lg", layout === "hero" && "text-white")}>
      {hasText(pricePrefix) ? (
        <span className={cn("font-normal", layout === "hero" ? "text-white/90" : "text-a7-black")}>
          {pricePrefix}
        </span>
      ) : null}{" "}
      <span className={layout === "hero" ? "text-white" : ""}>
        <AedText text={price} />
      </span>
    </p>
  )

  const descriptionBlock =
    hasDescription && hasText(description) ? (
      <p className={cn("text-xs leading-relaxed text-muted-foreground", layout === "hero" && "text-white/90")}>
        {description}{" "}
        <Button
          type="button"
          variant="link"
          size="sm"
          className={cn(
            "inline h-auto min-h-0 p-0 align-baseline text-xs font-semibold underline-offset-4",
            layout === "hero" ? "text-white hover:text-white/90" : "text-a7-black hover:text-a7-black"
          )}
        >
          {learnMoreLabel}
        </Button>
      </p>
    ) : null

  const statsBlock =
    layout === "horizontal" && resolvedStats.length > 0 ? (
      <div className="@container/community-card">
        <div className="grid min-w-0 grid-cols-1 gap-2 @sm/community-card:grid-cols-3">
          {resolvedStats.map((row, i) => (
            <CommunityStatTile
              key={`${row.label}-${row.value}-${i}`}
              icon={row.icon}
              value={row.value}
              label={row.label}
            />
          ))}
        </div>
      </div>
    ) : null

  const footer = resolvedActions.length ? (
    <div
      className={cn(
        "flex w-full gap-2",
        layout === "horizontal" ? "flex-wrap justify-end " : "flex-col sm:flex-row"
      )}
    >
      {resolvedActions.map(({ key, label, icon: Icon, href, toneClassName }) => {
        const btnClass = cn(
          "flex-1 gap-2 border font-semibold shadow-sm",
          toneClassName ?? "border-border bg-muted/50 text-a7-text-gray hover:bg-muted"
        )
        const inner = (
          <>
            <Icon className="size-3.5 shrink-0" aria-hidden />
            {label}
          </>
        )
        if (href) {
          const isInternal = href.startsWith("/")
          const handleClick = (e: React.MouseEvent) => {
            e.preventDefault()
            if (isInternal) {
              router.push(href)
            } else if (href.startsWith("mailto:") || href.startsWith("tel:")) {
              window.location.href = href
            } else {
              window.open(href, "_blank", "noopener,noreferrer")
            }
          }
          return (
            <Button key={key} variant="outline" size="sm" shape="default" className={btnClass} asChild>
              <button type="button" onClick={handleClick} className="inline-flex items-center justify-center">
                {inner}
              </button>
            </Button>
          )
        }
        return (
          <Button key={key} type="button" variant="outline" size="sm" shape="default" className={btnClass}>
            {inner}
          </Button>
        )
      })}
    </div>
  ) : null

  if (layout === "hero") {
    const heroMinH = "min-h-[min(560px,78svh)]"
    return (
      <Card className={cn(CARD_HOVER_GROUP, CARD_HOVER_SURFACE, "relative w-full rounded-lg bg-[#f2f2f2]", className)}>
        <div className={cn("relative w-full", heroMinH)}>
          <div className={cn("absolute inset-0 z-0 overflow-hidden", horizontalHeroImageClip)}>
            {renderMediaColumn({
              clipClassName: cn(heroMinH, "h-full", horizontalHeroImageClip),
              carouselClassName: cn("h-full", heroMinH),
              imageClassName: cn(heroMinH, "h-full"),
              fillHeight: true,
              slideOverlayClassName: "bg-linear-to-t from-black/85 via-black/45 to-transparent",
            })}
          </div>
          <CardContent className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 p-4 pb-5 pt-24 md:p-6 md:pt-28">
            <div className="pointer-events-auto flex flex-col gap-3">
              {titleBlock}
              {priceBlock}
              {metaRow}
              <div className="pt-1">{footer}</div>
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }

  if (layout === "horizontal") {
    return (
      <Card className={cn(CARD_HOVER_GROUP, CARD_HOVER_SURFACE, "w-full rounded-lg bg-[#f2f2f2]", className)}>
        <div className="flex flex-col md:flex-row md:items-stretch">
          <div className="relative w-full shrink-0 md:w-[44%] md:max-w-[min(100%,420px)]">
            {renderMediaColumn({
              clipClassName: horizontalHeroImageClip,
              carouselClassName: "h-full min-h-[220px] md:min-h-full",
              imageClassName: "min-h-[220px] h-full md:min-h-[280px]",
            })}
          </div>
          <CardContent className="flex flex-1 flex-col justify-between gap-4 p-4 md:p-5">
            <div className="space-y-3">
              {titleBlock}
              {metaRow}
              {descriptionBlock}
              {statsBlock}
            </div>
            {footer}
          </CardContent>
        </div>
      </Card>
    )
  }

  return (
    <Card className={cn(CARD_HOVER_GROUP, CARD_HOVER_SURFACE, "w-full rounded-lg bg-[#f2f2f2]", className)}>
      <div className="relative">
        {renderMediaColumn({
          clipClassName: "rounded-t-lg",
          imageClassName: "min-h-[260px]",
        })}
      </div>
      <CardContent className="space-y-3 p-4 md:p-5">
        {titleBlock}
        {priceBlock}
        {metaRow}
        {descriptionBlock}
        {footer}
      </CardContent>
    </Card>
  )
}

PropertyMarketingListingCard.displayName = "PropertyMarketingListingCard"
