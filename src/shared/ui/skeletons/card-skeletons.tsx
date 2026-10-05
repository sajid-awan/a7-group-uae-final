import type { MediaCardLayout } from "@/shared/ui/media-feature-cards"
import type { FeatureCardVariant } from "@/shared/ui/feature-card"
import type { NewsPostCardVariant } from "@/features/home/ui/home/news-post-card"
import type { PropertyMarketingListingLayout } from "@/features/property/ui/property-card/property-marketing-listing-card"
import type { TestimonialCardVariant } from "@/features/property/ui/property-card/testimonial-card"
import { Card, CardContent } from "@/shared/ui/card"
import { Skeleton } from "@/shared/ui/skeleton"
import { cn } from "@/shared/lib/cn"

const skeletonCardLabel = "Loading card placeholder"

function SkeletonCardShell({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <Card
      aria-busy="true"
      aria-label={skeletonCardLabel}
      className={cn("w-full overflow-hidden rounded-lg border border-border bg-card shadow-none", className)}
    >
      {children}
    </Card>
  )
}

export function PropertyCardSkeleton({ className }: { className?: string }) {
  return (
    <SkeletonCardShell className={cn("rounded-[8px]", className)}>
      <Skeleton className="h-70 w-full rounded-tl-[8px] rounded-tr-[8px] rounded-b-none" />
      <CardContent className="space-y-3 p-4">
        <Skeleton className="h-6 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="mt-1 h-10 w-full rounded-md" />
      </CardContent>
    </SkeletonCardShell>
  )
}

export function PropertyCardHorizontalSkeleton({ className }: { className?: string }) {
  return (
    <SkeletonCardShell className={cn("rounded-lg p-1.5", className)}>
      <div className="grid grid-cols-1 gap-1.25 sm:grid-cols-[minmax(0,38%)_minmax(0,62%)]">
        <Skeleton className="min-h-50 w-full rounded-lg" />
        <CardContent className="flex flex-col gap-3 rounded-lg bg-a7-surface p-3 sm:p-4">
          <Skeleton className="h-7 w-4/5" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <div className="mt-auto flex gap-2">
            <Skeleton className="h-8 w-28 rounded-full" />
            <Skeleton className="h-8 w-28 rounded-full" />
          </div>
          <Skeleton className="h-10 w-full rounded-md" />
        </CardContent>
      </div>
    </SkeletonCardShell>
  )
}

export function PropertyCardListingSkeleton({ className }: { className?: string }) {
  return (
    <SkeletonCardShell className={cn("p-2 shadow-sm", className)}>
      <Skeleton className="h-[280px] w-full rounded-lg" />
      <CardContent className="space-y-3 p-2 pt-3">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-7 w-24 rounded-full" />
          <Skeleton className="h-7 w-24 rounded-full" />
          <Skeleton className="h-7 w-24 rounded-full" />
        </div>
        <Skeleton className="h-14 w-full rounded-2xl" />
        <Skeleton className="h-10 w-full rounded-md" />
      </CardContent>
    </SkeletonCardShell>
  )
}

export function PropertyCardListingHorizontalSkeleton({ className }: { className?: string }) {
  return (
    <SkeletonCardShell className={cn("p-2", className)}>
      <div className="grid gap-3 lg:grid-cols-[minmax(0,42%)_minmax(0,58%)]">
        <Skeleton className="min-h-[220px] w-full rounded-lg lg:min-h-[280px]" />
        <CardContent className="flex flex-col gap-3 p-2">
          <Skeleton className="h-7 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-7 w-20 rounded-full" />
            <Skeleton className="h-7 w-20 rounded-full" />
          </div>
          <Skeleton className="h-14 w-full rounded-2xl" />
          <Skeleton className="h-10 w-full rounded-md" />
        </CardContent>
      </div>
    </SkeletonCardShell>
  )
}

export function ProjectHighlightCardSkeleton({
  layout = "vertical",
  className,
}: {
  layout?: MediaCardLayout
  className?: string
}) {
  const horizontal = layout === "horizontal"
  return (
    <SkeletonCardShell
      className={cn(
        horizontal ? "flex flex-col md:min-h-[280px] md:flex-row" : "flex flex-col",
        className
      )}
    >
      <Skeleton
        className={cn(
          "w-full shrink-0",
          horizontal
            ? "aspect-[4/3] min-h-[200px] md:aspect-auto md:min-h-[280px] md:w-[42%] md:rounded-l-lg md:rounded-r-none"
            : "aspect-[4/3] min-h-[200px] rounded-t-lg"
        )}
      />
      <CardContent className={cn("flex flex-1 flex-col gap-3 p-4", horizontal && "md:justify-center")}>
        <Skeleton className="h-5 w-2/5 rounded-full" />
        <Skeleton className="h-6 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="mt-auto h-10 w-full rounded-md" />
      </CardContent>
    </SkeletonCardShell>
  )
}

export function AgentPortraitCardSimpleSkeleton({
  layout = "vertical",
  className,
}: {
  layout?: MediaCardLayout
  className?: string
}) {
  const horizontal = layout === "horizontal"
  return (
    <SkeletonCardShell
      className={cn(
        horizontal ? "flex flex-col md:min-h-[280px] md:flex-row" : "overflow-hidden",
        className
      )}
    >
      <div className={cn("relative w-full", horizontal ? "md:w-[45%]" : "")}>
        <Skeleton
          className={cn(
            "w-full",
            horizontal
              ? "aspect-[3/4] min-h-[240px] md:aspect-auto md:min-h-[280px] md:h-full"
              : "aspect-[3/4] min-h-[220px]"
          )}
        />
        {!horizontal ? (
          <div className="absolute inset-x-0 bottom-0 space-y-2 p-3">
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ) : null}
      </div>
      {horizontal ? (
        <CardContent className="flex flex-1 flex-col justify-end gap-2 p-4">
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="size-11 rounded-full" />
        </CardContent>
      ) : null}
    </SkeletonCardShell>
  )
}

export function AgentPortraitCardDetailedSkeleton({
  layout = "vertical",
  className,
}: {
  layout?: MediaCardLayout
  className?: string
}) {
  const horizontal = layout === "horizontal"
  return (
    <SkeletonCardShell
      className={cn(horizontal ? "flex flex-col md:min-h-[280px] md:flex-row" : "", className)}
    >
      <Skeleton
        className={cn(
          "w-full",
          horizontal
            ? "aspect-[3/4] min-h-[240px] md:aspect-auto md:min-h-[280px] md:h-full md:w-[45%]"
            : "aspect-[3/4] min-h-[220px]"
        )}
      />
      <CardContent className="flex flex-1 flex-col gap-3 p-4">
        <Skeleton className="h-5 w-28 rounded-full" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="mt-auto flex gap-2">
          <Skeleton className="size-10 rounded-full" />
          <Skeleton className="h-10 flex-1 rounded-md" />
        </div>
      </CardContent>
    </SkeletonCardShell>
  )
}

export function PropertyDealerCardSkeleton({ className }: { className?: string }) {
  return (
    <SkeletonCardShell className={cn("relative rounded-2xl", className)}>
      <Skeleton className="h-28 w-full rounded-none md:h-32" />
      <CardContent className="relative flex flex-col items-center gap-3 px-4 pb-6 pt-12">
        <Skeleton className="-mt-16 size-20 shrink-0 rounded-full border-4 border-card" />
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex gap-2 pt-1">
          <Skeleton className="size-9 rounded-full" />
          <Skeleton className="size-9 rounded-full" />
          <Skeleton className="size-9 rounded-full" />
        </div>
        <Skeleton className="h-10 w-full rounded-md" />
        <Skeleton className="h-10 w-full rounded-md" />
      </CardContent>
    </SkeletonCardShell>
  )
}

export function AgentCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      aria-busy="true"
      aria-label={skeletonCardLabel}
      className={cn(
        "flex w-full min-w-0 flex-col gap-2 rounded-2xl bg-muted/60 px-2 py-2 sm:flex-row sm:items-center sm:rounded-full sm:px-3 sm:py-2",
        className
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <Skeleton className="size-10 shrink-0 rounded-full" />
        <Skeleton className="h-4 w-32" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-9 w-20 rounded-full" />
        <Skeleton className="h-9 w-20 rounded-full" />
        <Skeleton className="h-9 w-20 rounded-full" />
      </div>
    </div>
  )
}

export function CommunitySummaryCardSkeleton({ className }: { className?: string }) {
  return (
    <SkeletonCardShell className={cn("overflow-hidden rounded-2xl", className)}>
      <div className="grid gap-0 lg:grid-cols-[minmax(0,48%)_minmax(0,52%)]">
        <Skeleton className="aspect-[16/10] min-h-[200px] w-full lg:aspect-auto lg:min-h-[280px]" />
        <CardContent className="space-y-4 p-5 md:p-6">
          <Skeleton className="h-7 w-2/5" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-8 w-40 rounded-full" />
          <div className="grid grid-cols-3 gap-3 pt-2">
            <Skeleton className="h-16 rounded-xl" />
            <Skeleton className="h-16 rounded-xl" />
            <Skeleton className="h-16 rounded-xl" />
          </div>
        </CardContent>
      </div>
    </SkeletonCardShell>
  )
}

export function CommunityCompactCardSkeleton({ className }: { className?: string }) {
  return (
    <SkeletonCardShell className={cn("rounded-2xl", className)}>
      <Skeleton className="aspect-[4/3] w-full rounded-t-2xl" />
      <CardContent className="space-y-2 p-4">
        <Skeleton className="h-6 w-3/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-5 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
      </CardContent>
    </SkeletonCardShell>
  )
}

export function CommunitySpotlightCardSkeleton({ className }: { className?: string }) {
  return (
    <SkeletonCardShell className={cn("rounded-2xl", className)}>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,280px)]">
        <Skeleton className="aspect-[16/10] min-h-[220px] w-full rounded-xl lg:min-h-[320px]" />
        <div className="hidden flex-col gap-2 lg:flex">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="aspect-[16/10] w-full rounded-lg" />
          ))}
        </div>
      </div>
      <CardContent className="space-y-4 p-4 md:p-6">
        <Skeleton className="h-8 w-2/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-8 w-44 rounded-full" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-14 rounded-xl" />
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Skeleton className="h-10 w-36 rounded-md" />
          <Skeleton className="h-10 w-36 rounded-md" />
        </div>
      </CardContent>
    </SkeletonCardShell>
  )
}

export function AwardsBannerCardSkeleton({ className }: { className?: string }) {
  return (
    <div aria-busy="true" aria-label={skeletonCardLabel} className={cn("relative w-full overflow-hidden rounded-2xl", className)}>
      <Skeleton className="aspect-[21/9] min-h-[180px] w-full rounded-2xl md:min-h-[220px]" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <Skeleton className="mb-2 h-4 w-32 bg-muted-foreground/30" />
        <Skeleton className="h-8 w-3/5 max-w-md bg-muted-foreground/30" />
        <Skeleton className="mt-3 h-4 w-48 bg-muted-foreground/30" />
      </div>
    </div>
  )
}

export function FeatureCardSkeleton({
  variant = "center",
  className,
}: {
  variant?: FeatureCardVariant
  className?: string
}) {
  if (variant === "header") {
    return (
      <SkeletonCardShell className={cn("border-white/10 bg-zinc-800", className)}>
        <CardContent className="flex flex-col gap-4 p-6 md:p-7">
          <div className="flex items-center gap-3">
            <Skeleton className="size-11 shrink-0 rounded-lg bg-muted-foreground/30" />
            <Skeleton className="h-6 w-2/5 bg-muted-foreground/30" />
          </div>
          <Skeleton className="h-3 w-16 bg-muted-foreground/30" />
          <Skeleton className="h-4 w-full bg-muted-foreground/30" />
          <Skeleton className="h-10 w-28 rounded-full bg-muted-foreground/30" />
        </CardContent>
      </SkeletonCardShell>
    )
  }

  if (variant === "checklist") {
    return (
      <SkeletonCardShell className={className}>
        <CardContent className="space-y-4 p-6">
          <Skeleton className="h-6 w-2/5" />
          <Skeleton className="h-4 w-full" />
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-11/12" />
          ))}
          <Skeleton className="h-10 w-28 rounded-full" />
        </CardContent>
      </SkeletonCardShell>
    )
  }

  const align = variant === "left" ? "items-start" : "items-center"
  return (
    <SkeletonCardShell className={className}>
      <CardContent className={cn("flex flex-col gap-3 p-6", align)}>
        <Skeleton className="size-12 rounded-xl" />
        <Skeleton className="h-3 w-14" />
        <Skeleton className={cn("h-6 w-3/5", variant === "center" && "mx-auto")} />
        <Skeleton className={cn("h-4 w-full", variant === "center" && "mx-auto max-w-sm")} />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="mt-2 h-10 w-28 rounded-full" />
      </CardContent>
    </SkeletonCardShell>
  )
}

export function PropertyMarketingListingCardSkeleton({
  layout = "vertical",
  className,
}: {
  layout?: PropertyMarketingListingLayout
  className?: string
}) {
  if (layout === "hero") {
    return (
      <div aria-busy="true" aria-label={skeletonCardLabel} className={cn("relative w-full overflow-hidden rounded-2xl", className)}>
        <Skeleton className="aspect-[16/9] min-h-[280px] w-full" />
        <div className="absolute inset-0 flex flex-col justify-end gap-2 p-6 md:p-8">
          <Skeleton className="h-5 w-32 bg-muted-foreground/30" />
          <Skeleton className="h-5 w-40 bg-muted-foreground/30" />
          <Skeleton className="h-8 w-3/5 max-w-lg bg-muted-foreground/30" />
          <Skeleton className="h-4 w-2/3 max-w-md bg-muted-foreground/30" />
          <Skeleton className="h-10 w-48 rounded-md bg-muted-foreground/30" />
        </div>
      </div>
    )
  }

  if (layout === "horizontal") {
    return (
      <SkeletonCardShell className={className}>
        <div className="grid gap-4 lg:grid-cols-[minmax(0,42%)_minmax(0,58%)]">
          <Skeleton className="min-h-[240px] w-full rounded-lg" />
          <CardContent className="space-y-3 p-4">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-7 w-4/5" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="grid grid-cols-3 gap-2">
              <Skeleton className="h-14 rounded-xl" />
              <Skeleton className="h-14 rounded-xl" />
              <Skeleton className="h-14 rounded-xl" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-9 flex-1 rounded-full" />
              <Skeleton className="h-9 flex-1 rounded-full" />
              <Skeleton className="h-9 flex-1 rounded-full" />
            </div>
          </CardContent>
        </div>
      </SkeletonCardShell>
    )
  }

  return (
    <SkeletonCardShell className={className}>
      <Skeleton className="h-[280px] w-full rounded-lg" />
      <CardContent className="space-y-3 p-4">
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-7 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="flex gap-2 pt-1">
          <Skeleton className="h-9 flex-1 rounded-full" />
          <Skeleton className="h-9 flex-1 rounded-full" />
          <Skeleton className="h-9 flex-1 rounded-full" />
        </div>
      </CardContent>
    </SkeletonCardShell>
  )
}

const testimonialSkeletonBg: Record<TestimonialCardVariant, string> = {
  default: "bg-[#F5F5F0]",
  dark: "bg-zinc-900",
  outlined: "bg-white border border-border",
  featured: "bg-primary/90",
  centered: "bg-[#F5F5F0]",
}

export function TestimonialCardSkeleton({
  variant = "default",
  className,
}: {
  variant?: TestimonialCardVariant
  className?: string
}) {
  const dark = variant === "dark" || variant === "featured"
  return (
    <div
      aria-busy="true"
      aria-label={skeletonCardLabel}
      className={cn(
        "flex flex-col gap-4 rounded-2xl p-5 md:p-6",
        testimonialSkeletonBg[variant],
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Skeleton className={cn("size-12 rounded-full", dark && "bg-white/20")} />
        <div className="flex-1 space-y-2">
          <Skeleton className={cn("h-4 w-28", dark && "bg-white/20")} />
          <Skeleton className={cn("h-3 w-20", dark && "bg-white/20")} />
        </div>
      </div>
      <Skeleton className={cn("h-3 w-full", dark && "bg-white/20")} />
      <Skeleton className={cn("h-3 w-full", dark && "bg-white/20")} />
      <Skeleton className={cn("h-3 w-4/5", dark && "bg-white/20")} />
    </div>
  )
}

export function NewsPostCardSkeleton({
  variant = "dark",
  className,
}: {
  variant?: NewsPostCardVariant
  className?: string
}) {
  const isCard = variant === "card"
  return (
    <article
      aria-busy="true"
      aria-label={skeletonCardLabel}
      className={cn(
        "flex flex-col gap-3",
        isCard && "rounded-2xl border border-border bg-card p-4 shadow-sm",
        className
      )}
    >
      <Skeleton className="aspect-[16/10] w-full rounded-xl" />
      <div className="flex gap-4">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-3 w-16" />
      </div>
      <Skeleton className="h-5 w-4/5" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-11/12" />
    </article>
  )
}
