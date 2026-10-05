import Image from "next/image"
import Link from "next/link"
import { Map } from "react-feather"

import { LayoutGrid06Icon, Tool02Icon } from "@/shared/icons"

import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { Card, CardContent } from "@/shared/ui/card"

import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"
import type { Property } from "@/features/property"

type PropertyCardProps = {
  property: Property
  detailHref?: string
}

export function PropertyCard({ property, detailHref }: PropertyCardProps) {
  const priceCta = (
    <>
      <span className="text-xs font-normal text-primary group-hover:text-white">From</span>
      <span className="ml-1 font-bold text-white">
        <AedText text={property.priceFrom} />
      </span>
    </>
  )

  const card = (
    <Card
      className={cn(
        "w-full overflow-visible rounded-[8px] bg-card text-a7-text-gray shadow-none",
        "transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "group-hover:-translate-y-1 group-hover:shadow-lg"
      )}
    >
      <div className="relative h-70 w-full overflow-visible rounded-tl-[8px] rounded-tr-[8px]" role="img" aria-label={property.title}>
        <div className="relative h-full w-full overflow-hidden rounded-tl-[8px] rounded-tr-[8px]">
          <Image
            src={property.imageUrl}
            alt={property.title}
            fill
            className={cn(
              "object-cover object-center",
              "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            )}
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
        </div>
        <div className="absolute top-3 -left-4.25 z-10">
          <Badge variant="paymentPlan" size="lg">
            {property.paymentPlan}
          </Badge>
        </div>
      </div>
      <CardContent className="space-y-2 p-4">
        <h3 className="line-clamp-1 font-inter text-base font-bold leading-none text-a7-black">{property.title}</h3>
        <div className="space-y-1.5 text-xs text-a7-text-gray">
          <div className="flex items-center gap-1.5">
            <Map className="size-3.5 text-a7-black" aria-hidden />
            <span className="line-clamp-1">{property.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <LayoutGrid06Icon className="shrink-0 text-a7-black" aria-hidden />
            <span className="line-clamp-1">{property.handover}</span>
            <span className="mx-1 text-border">|</span>
            <Tool02Icon size={14} className="size-3.5 shrink-0 text-a7-text-gray" aria-hidden />
            <span className="line-clamp-1">{property.developer}</span>
          </div>
        </div>
        {detailHref ? (
          <Button
            variant="property"
            size="sm"
            shape="default"
            tabIndex={-1}
            aria-hidden
            className="pointer-events-none w-full px-5 text-base font-bold leading-none tracking-tight"
          >
            {priceCta}
          </Button>
        ) : (
          <Button variant="property" size="sm" shape="default" className="w-full px-5 text-base font-bold leading-none tracking-tight">
            {priceCta}
          </Button>
        )}
      </CardContent>
    </Card>
  )

  const wrapperClass = cn("group", "block h-full rounded-[8px]")

  if (detailHref) {
    return (
      <Link
        href={detailHref}
        className={cn(
          wrapperClass,
          "outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        )}
        aria-label={`View ${property.title} — from ${property.priceFrom}`}
      >
        {card}
      </Link>
    )
  }

  return <div className={wrapperClass}>{card}</div>
}

export { PropertyCardHorizontal } from "./property-card-horizontal"
export type { PropertyCardHorizontalProps } from "./property-card-horizontal"
