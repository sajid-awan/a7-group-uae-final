import Link from "next/link"
import { MapPin } from "lucide-react"

import { AgentCard, type AgentCardTone } from "@/features/agent/ui/agent-list/agent-card"
import { propertyListingPath } from "@/shared/lib/constants/routes"
import { Badge } from "@/shared/ui/badge"
import { Card, CardContent } from "@/shared/ui/card"
import { PropertyCardActions } from "./property-card-actions"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel"
import {
  CARD_HOVER_GROUP,
  CARD_HOVER_IMAGE_BG,
  CARD_HOVER_SURFACE,
  PROPERTY_LISTING_CAROUSEL_NAV,
} from "@/shared/lib/card-hover"
import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"
import type { PropertyListing } from "@/features/property"
import {
  hasPricePerSqft,
  listingPricePerSqftBadgeClassName,
  listingSpecBadgeClassName,
  listingSpecIconProps,
  listingSpecs,
} from "./property-card-listing.shared"

export type PropertyCardListingProps = {
  listing: PropertyListing
  agentTone?: AgentCardTone
  agentCardClassName?: string
  className?: string
  detailHref?: string
  specBadgeClassName?: string
  pricePerSqftBadgeClassName?: string
}

export function PropertyCardListing({
  listing,
  agentTone = "amber",
  agentCardClassName,
  className,
  detailHref,
  specBadgeClassName = listingSpecBadgeClassName,
  pricePerSqftBadgeClassName = listingPricePerSqftBadgeClassName,
}: PropertyCardListingProps) {
  const showPricePerSqft = hasPricePerSqft(listing.pricePerSqft)
  const href = detailHref ?? propertyListingPath(listing.id)

  return (
    <Card
      className={cn(
        CARD_HOVER_GROUP,
        "w-full rounded-lg bg-card p-2 text-a7-text-gray shadow-sm",
        CARD_HOVER_SURFACE,
        className
      )}
    >
      <Carousel opts={{ loop: true }} className="relative">
        <CarouselContent className="ml-0">
          {listing.imageUrls.map((src, index) => (
            <CarouselItem key={`${src}-${index}`} className="pl-0">
              <Link
                href={href}
                className="block"
                aria-label={`View ${listing.title} — image ${index + 1} of ${listing.imageUrls.length}`}
              >
                <div
                  className={cn(
                    "h-[280px] w-full overflow-hidden rounded-lg bg-cover bg-center",
                    CARD_HOVER_IMAGE_BG
                  )}
                  style={{ backgroundImage: `url(${src})` }}
                  role="img"
                  aria-hidden
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={PROPERTY_LISTING_CAROUSEL_NAV} />
        <CarouselNext className={PROPERTY_LISTING_CAROUSEL_NAV} />
      </Carousel>

      <CardContent className="space-y-1.5 px-3 pt-3 pb-3 md:space-y-2 md:px-4 md:pt-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{listing.propertyType}</span>
          <PropertyCardActions />
        </div>

        <Link href={href} className="block space-y-1.5 md:space-y-2">

        <h3 className="font-inter text-lg font-bold leading-none tracking-tight text-a7-black sm:text-xl">
          <AedText text={listing.price} />
        </h3>

        <div className={cn("flex items-start gap-2 sm:gap-2.5", showPricePerSqft && "justify-between")}>
          <p className="text-xs font-medium line-clamp-1 leading-snug text-a7-text-gray sm:text-sm">{listing.title}</p>
          {showPricePerSqft ? (
            <Badge variant="muted" size="xs" shape="pill" className={`${pricePerSqftBadgeClassName} border-none`}>
              <AedText text={listing.pricePerSqft} />
            </Badge>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
          {listingSpecs.map(({ key, Icon, format }) => (
            <Badge key={key} variant="muted" size="xs" shape="pill" className={`${specBadgeClassName} border-none`}>
              <Icon {...listingSpecIconProps} />
              {format(listing)}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
          <span className="inline-flex size-4 items-center justify-center rounded-full bg-muted/70 text-a7-black sm:size-5">
            <MapPin className="size-2.5 sm:size-3" />
          </span>
          <span className="line-clamp-1 text-a7-black">{listing.location}</span>
        </div>
        </Link>

        <AgentCard
          name={listing.agentName}
          avatarUrl={listing.agentAvatarUrl}
          tone={agentTone}
          iconOnlyActions
          className={cn(
            "[&_span]:text-[11px] sm:[&_span]:text-xs",
            agentCardClassName
          )}
          actionClassName="bg-white text-a7-text-gray hover:bg-white/90 shadow-xs"
        />
      </CardContent>
    </Card>
  )
}
