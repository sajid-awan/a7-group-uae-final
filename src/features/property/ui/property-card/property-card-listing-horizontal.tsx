import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { propertyListingPath } from "@/shared/lib/constants/routes"

import { AgentCard, defaultAgentActions, type AgentCardTone } from "@/features/agent/ui/agent-list/agent-card"
import { Badge } from "@/shared/ui/badge"
import { Card } from "@/shared/ui/card"
import { PropertyCardActions } from "./property-card-actions"
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
import type { PropertyListing } from "@/features/property"
import {
  agentCardToneForListingId,
  hasPricePerSqft,
  listingCardDescription,
  listingSpecBadgeClassName,
  listingSpecIconProps,
  listingSpecs,
  listingVariantIndex,
} from "./property-card-listing.shared"

export type PropertyCardListingHorizontalProps = {
  listing: PropertyListing
  agentTone?: AgentCardTone
  agentCardClassName?: string
  agentPhoneHref?: string
  agentEmailHref?: string
  agentWhatsAppHref?: string
  showDescription?: boolean
}

export function PropertyCardListingHorizontal({
  listing,
  agentTone,
  agentCardClassName,
  agentPhoneHref,
  agentEmailHref,
  agentWhatsAppHref,
  showDescription = true,
}: PropertyCardListingHorizontalProps) {
  const tone = agentTone ?? agentCardToneForListingId(listing.id)
  const agentActions =
    agentPhoneHref || agentEmailHref || agentWhatsAppHref
      ? defaultAgentActions.map((action) => {
          if (action.key === "call" && agentPhoneHref) return { ...action, href: agentPhoneHref }
          if (action.key === "email" && agentEmailHref) return { ...action, href: agentEmailHref }
          if (action.key === "whatsapp" && agentWhatsAppHref) return { ...action, href: agentWhatsAppHref }
          return action
        })
      : undefined
  const carouselStartIndex =
    listing.imageUrls.length > 1 ? listingVariantIndex(listing.id, listing.imageUrls.length) : 0
  const showPricePerSqft = hasPricePerSqft(listing.pricePerSqft)
  const href = propertyListingPath(listing.id)

  return (
    <Card
      className={cn(
        CARD_HOVER_GROUP,
        "w-full overflow-hidden rounded-lg border border-border bg-card p-2 text-a7-text-gray",
        CARD_HOVER_SURFACE
      )}
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,9fr)_minmax(0,11fr)] md:items-stretch md:gap-3 md:min-h-75">
        <Carousel opts={{ loop: true, startIndex: carouselStartIndex }} className="relative min-h-50 md:min-h-0">
          <CarouselContent className="ml-0 h-full">
            {listing.imageUrls.map((src, index) => (
              <CarouselItem key={`${src}-${index}`} className="pl-0">
                <Link
                  href={href}
                  className="relative block h-55 overflow-hidden rounded-lg md:h-full md:min-h-40"
                  aria-label={`View ${listing.title} — image ${index + 1} of ${listing.imageUrls.length}`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className={cn("object-cover", CARD_HOVER_IMAGE)}
                    aria-hidden
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="z-10 border-transparent bg-white/95 backdrop-blur" />
          <CarouselNext className="z-10 border-transparent bg-white/95 backdrop-blur" />
          {/* {listing.imageUrls.length > 1 ? (
            <div className="absolute bottom-2 right-2 z-10 flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
              <Camera className="size-3" aria-hidden />
              <span>{listing.imageUrls.length}</span>
            </div>
          ) : null} */}
        </Carousel>

        <div className="flex min-h-0 flex-col">
        <div className="flex items-center justify-between gap-2 px-2 pt-1 md:px-3 md:pt-2">
          <span className="text-xs text-muted-foreground">{listing.propertyType}</span>
          <PropertyCardActions />
        </div>

        <Link href={href} className="flex flex-col px-2 pb-2 md:px-3 md:pb-0">

          <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-inter text-xl font-bold leading-tight tracking-tight text-a7-black md:text-2xl">
              <AedText text={listing.price} />
            </h3>
            {showPricePerSqft ? (
              <span className="text-xs font-medium text-a7-text-gray">
                <AedText text={listing.pricePerSqft} />
              </span>
            ) : null}
          </div>

          <p className="mt-2 text-sm font-medium leading-snug text-a7-text-gray">{listing.title}</p>

          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {listingSpecs.map(({ key, Icon, format }) => (
              <Badge key={key} variant="muted" size="xs" shape="pill" className={`${listingSpecBadgeClassName} border-none`}>
                <Icon {...listingSpecIconProps} />
                {format(listing)}
              </Badge>
            ))}
          </div>

          <div className="mt-2 flex items-center gap-1.5 text-xs">
            <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-muted/70 text-a7-black">
              <MapPin className="size-3" />
            </span>
            <span className="line-clamp-2 text-a7-black">{listing.location}</span>
          </div>

          {showDescription ? (
            <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-a7-text-gray">
              {listingCardDescription(listing)}{" "}
              <span className="font-semibold text-a7-text-gray underline-offset-4 hover:underline">
                Learn more
              </span>
            </p>
          ) : null}
        </Link>

          <div className="mt-auto px-2 pb-2 pt-2 md:px-3 md:pb-3">
            <AgentCard
              name={listing.agentName}
              avatarUrl={listing.agentAvatarUrl}
              tone={tone}
              actions={agentActions}
              iconOnlyActions
              className={agentCardClassName}
              actionClassName="bg-white text-a7-text-gray hover:bg-white/90 shadow-xs"
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

PropertyCardListingHorizontal.displayName = "PropertyCardListingHorizontal"
