"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel"
import { Badge } from "@/shared/ui/badge"
import { CARD_HOVER_GROUP, CARD_HOVER_IMAGE, CARD_HOVER_SURFACE } from "@/shared/lib/card-hover"
import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"

function hasText(value?: string) {
  return Boolean(value?.trim())
}

export type CommunityCompactCardProps = {
  imageUrl?: string
  imageUrls?: string[]
  title?: string
  location?: string
  price?: string
  projectsTag?: string
  description?: string
  className?: string
}

export function CommunityCompactCard({
  imageUrl,
  imageUrls = [],
  title,
  location,
  price,
  projectsTag,
  description,
  className,
}: CommunityCompactCardProps) {
  const gallery = imageUrls.length ? imageUrls : imageUrl ? [imageUrl] : []

  return (
    <div className={cn(CARD_HOVER_GROUP, CARD_HOVER_SURFACE, "w-full overflow-hidden rounded-xl bg-card", className)}>
      <Carousel opts={{ loop: gallery.length > 1 }} className="relative aspect-4/3 w-full overflow-hidden bg-muted">
        <CarouselContent className="ml-0 h-full">
          {gallery.map((src, idx) => (
            <CarouselItem key={`${src}-${idx}`} className="relative h-full basis-full overflow-hidden pl-0">
              <Image
                src={src}
                alt={`${title || "Community image"} ${idx + 1}`}
                fill
                className={cn("object-cover", CARD_HOVER_IMAGE)}
              />
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
      <div className="space-y-1 p-3">
        <div className="flex items-center gap-2">
        {hasText(title) ? <h4 className="font-inter flex-1 text-lg font-semibold tracking-tight">{title}</h4> : null}
        {hasText(projectsTag) ? (
            <Badge variant="success" size="xs" shape="pill" className="normal-case font-semibold text-a7-black [&_svg]:text-a7-black">
              {projectsTag}
            </Badge>
          ) : null}
          </div>
        <div className="flex items-center justify-between gap-2">
          {hasText(location) ? <p className="line-clamp-1 text-xs text-muted-foreground">{location}</p> : null}
        
        </div>
        {hasText(price) ? (
          <p className="text-sm font-medium text-a7-text-gray">
            From{" "}
            <span className="text-3xl font-bold leading-none tracking-tight text-a7-black">
              <AedText text={price} />
            </span>
          </p>
        ) : null}
        {hasText(description) ? (
          <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </div>
  )
}

