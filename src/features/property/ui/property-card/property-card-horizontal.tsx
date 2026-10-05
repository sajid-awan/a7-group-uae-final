import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Map } from "react-feather"

import { LayoutGrid06Icon } from "@/shared/icons"

import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { Card, CardContent } from "@/shared/ui/card"
import { propertyMetaBadgeClassName } from "./property-card-listing.shared"
import { CARD_HOVER_GROUP, CARD_HOVER_IMAGE, CARD_HOVER_SURFACE } from "@/shared/lib/card-hover"
import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"
import type { Property } from "@/features/property"

export type PropertyCardHorizontalProps = {
  property: Property
  /** Slightly larger payment-plan and meta badges (e.g. home “Most Trending” section). */
  prominentBadges?: boolean
  showDescription?: boolean
}

export function PropertyCardHorizontal({
  property,
  prominentBadges = false,
  showDescription = true,
}: PropertyCardHorizontalProps) {
  const badgeSize = prominentBadges ? "default" : "sm"
  const metaBadgeClassName = prominentBadges
    ? cn(propertyMetaBadgeClassName, "gap-1.5 px-2.5 py-1 text-xs [&_svg]:size-3.5")
    : propertyMetaBadgeClassName
  const priceCta = (
    <>
      <span
        className={cn(
          "font-normal text-primary group-hover:text-white",
          prominentBadges ? "text-sm" : "text-xs"
        )}
      >
        From
      </span>
      <span className="ml-1 font-bold text-white">
        <AedText text={property.priceFrom} />
      </span>
    </>
  )

  const priceButtonClassName = cn(
    "pointer-events-none mt-3 w-full font-bold leading-none tracking-tight",
    prominentBadges ? "px-6 text-base" : "px-5 text-sm"
  )

  return (
    <Link
      href={`/projects/${property.id}`}
      className={cn(CARD_HOVER_GROUP, "block w-full rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2")}
      aria-label={`View ${property.title}`}
    >
    <Card className={cn("w-full rounded-lg border-border bg-card p-1.5 text-a7-text-gray shadow-none", CARD_HOVER_SURFACE)}>
      <div className="grid grid-cols-1 gap-1.25 sm:grid-cols-[minmax(0,38%)_minmax(0,62%)]">
        <div className="relative h-full min-h-50 w-full overflow-hidden rounded-lg bg-muted">
          <Image
            src={property.imageUrl}
            alt={property.title}
            fill
            sizes="(max-width: 640px) 100vw, 38vw"
            className={cn("object-cover", CARD_HOVER_IMAGE)}
          />
          <div className="absolute top-3 left-0">
            <Badge variant="default" size={badgeSize} shape="square">
              {property.paymentPlan}
            </Badge>
          </div>
        </div>

        <CardContent
          className={cn(
            "flex h-full min-w-0 flex-col rounded-lg p-3 sm:p-4",
            prominentBadges ? "bg-[#F3F4F6]" : "bg-a7-surface"
          )}
        >
          <h3 className="line-clamp-2 font-inter text-lg font-bold text-a7-black sm:text-xl">{property.title}</h3>

          {showDescription ? (
            <p className="mt-2 line-clamp-2 text-sm text-a7-text-gray">{property.description}</p>
          ) : null}

          <div className={cn("flex flex-wrap gap-1.5", showDescription ? "mt-3" : "mt-2")}>
            <Badge variant="meta" size={badgeSize} className={metaBadgeClassName}>
              <LayoutGrid06Icon
                {...(prominentBadges ? { width: 14, height: 12 } : {})}
                className="shrink-0 text-a7-black"
                aria-hidden
              />
              <span className="line-clamp-1">{property.handover}</span>
            </Badge>
            <Badge variant="meta" size={badgeSize} className={metaBadgeClassName}>
              <Map aria-hidden />
              <span className="line-clamp-1">{property.location}</span>
            </Badge>
          </div>

          <Button
            variant="property"
            size={prominentBadges ? "default" : "sm"}
            shape="pill"
            tabIndex={-1}
            aria-hidden
            iconRight={<ArrowUpRight className="size-4 text-zinc-950" strokeWidth={2.25} />}
            className={priceButtonClassName}
          >
            {priceCta}
          </Button>
        </CardContent>
      </div>
    </Card>
    </Link>
  )
}
