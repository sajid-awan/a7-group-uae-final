import type { LucideIcon } from "lucide-react"
import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import type { ReactNode } from "react"

import { CARD_HOVER_GROUP, CARD_HOVER_IMAGE, CARD_HOVER_SURFACE } from "@/shared/lib/card-hover"
import { cn } from "@/shared/lib/cn"

function hasText(value?: string) {
  return Boolean(value?.trim())
}

export type AwardsBannerMetaItem = {
  /** When omitted, a small dot is shown before the text. */
  icon?: LucideIcon
  text: string
}

export type AwardsBannerCardProps = {
  imageUrl?: string
  imageAlt?: string
  title?: string
  subtitle?: string
  /** Used when `metaItems` is not passed — calendar-style row. */
  date?: string
  /** Used when `metaItems` is not passed — location row. */
  location?: string
  /**
   * Structured metadata rows. When provided (including `[]`), it replaces `date` / `location`.
   * Omit the prop entirely to keep the legacy date + location behaviour.
   */
  metaItems?: AwardsBannerMetaItem[]
  /** Optional slot below the title, subtitle, and metadata (e.g. CTAs, badges). */
  children?: ReactNode
  /** Override the default left-to-right overlay gradient. */
  overlayClassName?: string
  /** Classes for the inner text column (padding, alignment). */
  contentClassName?: string
  /** Hero minimum height and aspect tweaks. */
  mediaClassName?: string
  className?: string
}

export function AwardsBannerCard({
  imageUrl,
  imageAlt,
  title,
  subtitle,
  date,
  location,
  metaItems,
  children,
  overlayClassName,
  contentClassName,
  mediaClassName,
  className,
}: AwardsBannerCardProps) {
  const useCustomMeta = metaItems !== undefined
  const metaRows = useCustomMeta ? metaItems.filter((m) => hasText(m.text)) : []
  const showLegacyMeta = !useCustomMeta && (hasText(date) || hasText(location))
  const showMetaRow = (useCustomMeta && metaRows.length > 0) || showLegacyMeta

  return (
    <div className={cn(CARD_HOVER_GROUP, CARD_HOVER_SURFACE, "relative w-full overflow-hidden rounded-xl", className)}>
      <div
        className={cn(
          "relative aspect-[16/5] min-h-[210px] w-full overflow-hidden bg-muted",
          mediaClassName
        )}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt ?? title ?? "Banner"}
            fill
            className={cn("object-cover", CARD_HOVER_IMAGE)}
            sizes="(max-width: 768px) 100vw, min(1200px, 100vw)"
            priority={false}
          />
        ) : null}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent",
            overlayClassName
          )}
        />
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-center gap-3 px-6 py-6 text-white sm:px-8",
            contentClassName
          )}
        >
          {hasText(title) ? <h3 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">{title}</h3> : null}
          {hasText(subtitle) ? (
            <p className="text-xl font-medium text-a7-bridge-yellow md:text-2xl">{subtitle}</p>
          ) : null}
          {showMetaRow ? (
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-a7-bridge-yellow">
              {useCustomMeta
                ? metaRows.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <span key={`${item.text}-${index}`} className="inline-flex items-center gap-2">
                        {Icon ? (
                          <Icon className="size-4 shrink-0 text-a7-bridge-yellow" aria-hidden />
                        ) : (
                          <span className="size-1.5 shrink-0 rounded-full bg-a7-bridge-yellow" aria-hidden />
                        )}
                        {item.text}
                      </span>
                    )
                  })
                : (
                    <>
                      {hasText(date) ? (
                        <span className="inline-flex items-center gap-2">
                          <Calendar className="size-4 shrink-0 text-a7-bridge-yellow" aria-hidden /> {date}
                        </span>
                      ) : null}
                      {hasText(location) ? (
                        <span className="inline-flex items-center gap-2">
                          <MapPin className="size-4 shrink-0 text-a7-bridge-yellow" aria-hidden /> {location}
                        </span>
                      ) : null}
                    </>
                  )}
            </div>
          ) : null}
          {children ? <div className="flex flex-wrap items-center gap-2 pt-1">{children}</div> : null}
        </div>
      </div>
    </div>
  )
}

AwardsBannerCard.displayName = "AwardsBannerCard"
