import Image from "next/image"
import Link from "next/link"
import { CalendarDays, MapPin } from "lucide-react"

import { cn } from "@/shared/lib/cn"

export type EventBannerCardItem = {
  id: string
  title: string
  subtitle: string
  date: string
  location: string
  imageUrl: string
  href: string
}

export type EventBannerCardVariant = "default" | "compact"

export type EventBannerCardProps = {
  event: EventBannerCardItem
  variant?: EventBannerCardVariant
  className?: string
}

const variantStyles: Record<EventBannerCardVariant, string> = {
  default: "h-[320px] md:h-[563px]",
  compact: "min-h-[120px] md:min-h-[138px]",
}

export function EventBannerCard({ event, variant = "default", className }: EventBannerCardProps) {
  const compact = variant === "compact"

  return (
    <article className={cn("group relative isolate overflow-hidden rounded-xl", variantStyles[variant], className)}>
      <Image
        src={event.imageUrl}
        alt=""
        fill
        className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02] group-focus-within:scale-[1.02]"
        sizes="(max-width: 1024px) 100vw, 70vw"
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-linear-to-r from-black/80 via-black/45 to-black/30"
        aria-hidden
      />

      <div
        className={cn(
          "pointer-events-none absolute inset-0 bottom-0 z-10 flex flex-col justify-center p-4 text-white md:p-6",
          compact && "p-4"
        )}
      >
        <p className={cn("font-heading font-semibold leading-tight", compact ? "text-2xl" : "text-3xl md:text-4xl")}>
          {event.title}
        </p>
        <p className={cn("mt-1 text-a7-bridge-yellow", compact ? "text-xs" : "text-sm")}>{event.subtitle}</p>

        <div className={cn("mt-3 flex flex-wrap items-center gap-4 text-a7-bridge-yellow", compact ? "text-[11px]" : "text-xs")}>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" aria-hidden />
            {event.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" aria-hidden />
            {event.location}
          </span>
        </div>
      </div>

      <Link
        href={event.href}
        className="absolute inset-0 z-20 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label={`${event.title}, ${event.date}, ${event.location}`}
      >
        <span className="sr-only">{event.title}</span>
      </Link>
    </article>
  )
}
