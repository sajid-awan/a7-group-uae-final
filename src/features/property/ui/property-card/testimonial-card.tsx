import Image from "next/image"
import { Star } from "lucide-react"

import { CARD_HOVER_AVATAR, CARD_HOVER_GROUP, CARD_HOVER_SURFACE } from "@/shared/lib/card-hover"
import { cn } from "@/shared/lib/cn"

export type TestimonialCardVariant = "default" | "dark" | "outlined" | "featured" | "centered"

export type TestimonialCardProps = {
  name: string
  role: string
  quote: string
  avatarUrl?: string
  /** 1–5 star rating. Omit to hide stars. */
  rating?: number
  variant?: TestimonialCardVariant
  className?: string
}

type VariantTokens = {
  card: string
  quote: string
  name: string
  role: string
  avatar: string
  starFilled: string
  starEmpty: string
}

const variantTokens: Record<TestimonialCardVariant, VariantTokens> = {
  default: {
    card: "bg-[#F5F5F0]",
    quote: "text-a7-text-gray",
    name: "text-a7-black",
    role: "text-a7-text-gray",
    avatar: "bg-muted",
    starFilled: "fill-amber-400 text-amber-400",
    starEmpty: "fill-none text-gray-300",
  },
  dark: {
    card: "bg-zinc-900",
    quote: "text-white/85",
    name: "text-white",
    role: "text-white/55",
    avatar: "bg-white/10",
    starFilled: "fill-amber-300 text-amber-300",
    starEmpty: "fill-none text-white/30",
  },
  outlined: {
    card: "bg-white border border-border shadow-sm",
    quote: "text-muted-foreground",
    name: "text-a7-black",
    role: "text-muted-foreground",
    avatar: "bg-muted",
    starFilled: "fill-amber-400 text-amber-400",
    starEmpty: "fill-none text-gray-300",
  },
  featured: {
    card: "bg-primary",
    quote: "text-white/90",
    name: "text-white",
    role: "text-white/70",
    avatar: "bg-white/20",
    starFilled: "fill-white text-white",
    starEmpty: "fill-none text-white/40",
  },
  centered: {
    card: "bg-white border border-border",
    quote: "text-a7-text-gray",
    name: "text-a7-black",
    role: "text-a7-black",
    avatar: "bg-[#d6e8f5]",
    starFilled: "fill-amber-400 text-amber-400",
    starEmpty: "fill-none text-gray-300",
  },
}

function StarRating({
  rating,
  filledClass,
  emptyClass,
  className,
}: {
  rating: number
  filledClass: string
  emptyClass: string
  className?: string
}) {
  return (
    <div
      className={cn("flex items-center justify-center gap-0.5", className)}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("size-3.5", i < rating ? filledClass : emptyClass)}
          fill={i < rating ? "currentColor" : "none"}
          strokeWidth={1.5}
          aria-hidden
        />
      ))}
    </div>
  )
}

function CenteredTestimonialCard({
  name,
  role,
  quote,
  avatarUrl,
  rating,
  t,
  className,
}: TestimonialCardProps & { t: VariantTokens }) {
  return (
    <figure
      className={cn(
        CARD_HOVER_GROUP,
        CARD_HOVER_SURFACE,
        "flex h-full flex-col items-center rounded-xl px-6 py-8 text-center md:px-8 md:py-10",
        t.card,
        className
      )}
    >
      <div className={cn("relative size-20 shrink-0 overflow-hidden rounded-full md:size-[5.25rem]", t.avatar)}>
        {avatarUrl ? (
          <Image src={avatarUrl} alt="" fill className={cn("object-cover", CARD_HOVER_AVATAR)} sizes="84px" />
        ) : (
          <span className={cn("flex size-full items-center justify-center text-xl font-bold", t.name)}>
            {name.charAt(0)}
          </span>
        )}
      </div>

      {rating !== undefined ? (
        <StarRating
          rating={rating}
          filledClass={t.starFilled}
          emptyClass={t.starEmpty}
          className="mt-4"
        />
      ) : null}

      <figcaption className="mt-4 w-full">
        <p className={cn("font-inter text-sm font-bold leading-snug md:text-base", t.name)}>{name}</p>
        <p className={cn("mt-1 text-xs leading-snug", t.role)}>{role}</p>
      </figcaption>

      <blockquote className={cn("mt-4 w-full text-xs leading-relaxed md:text-sm", t.quote)}>{quote}</blockquote>
    </figure>
  )
}

export function TestimonialCard({
  name,
  role,
  quote,
  avatarUrl,
  rating,
  variant = "default",
  className,
}: TestimonialCardProps) {
  const t = variantTokens[variant]

  if (variant === "centered") {
    return (
      <CenteredTestimonialCard
        name={name}
        role={role}
        quote={quote}
        avatarUrl={avatarUrl}
        rating={rating}
        t={t}
        className={className}
      />
    )
  }

  return (
    <figure className={cn(CARD_HOVER_GROUP, CARD_HOVER_SURFACE, "flex h-full flex-col rounded-2xl p-6 md:p-7", t.card, className)}>
      {rating !== undefined ? (
        <StarRating rating={rating} filledClass={t.starFilled} emptyClass={t.starEmpty} className="mb-4" />
      ) : null}

      <blockquote className={cn("flex-1 text-sm leading-relaxed md:text-[15px]", t.quote)}>
        &ldquo;{quote}&rdquo;
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-2.5">
        <div className={cn("relative size-10 shrink-0 overflow-hidden rounded-full", t.avatar)}>
          {avatarUrl ? (
            <Image src={avatarUrl} alt="" fill className={cn("object-cover", CARD_HOVER_AVATAR)} sizes="44px" />
          ) : (
            <span className={cn("flex size-full items-center justify-center text-sm font-bold", t.name)}>
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <p className={cn("truncate font-inter text-xs font-bold sm:text-sm", t.name)}>{name}</p>
          <p className={cn("truncate text-xs sm:text-sm", t.role)}>{role}</p>
        </div>
      </figcaption>
    </figure>
  )
}
