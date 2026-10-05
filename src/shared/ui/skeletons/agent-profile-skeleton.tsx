import { AGENT_PROFILE_NAV_ITEMS } from "@/features/agent"
import { cn } from "@/shared/lib/cn"
import { Skeleton } from "@/shared/ui/skeleton"

function AgentProfileStatCardSkeleton() {
  return (
    <div className="flex h-full min-h-[5.5rem] items-center justify-between gap-3 rounded-2xl bg-white px-5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:min-h-0">
      <div className="min-w-0 flex-1 space-y-2">
        <Skeleton className="h-8 w-16 sm:h-9" />
        <Skeleton className="h-4 w-28 max-w-full" />
      </div>
      <Skeleton className="size-11 shrink-0 rounded-xl" />
    </div>
  )
}

export function AgentProfileHeroSkeleton({ className }: { className?: string }) {
  return (
    <section className={cn("relative overflow-hidden bg-muted/80", className)} aria-hidden>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative container mx-auto px-4 py-8 sm:px-6 md:py-10">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-stretch lg:gap-6">
          <div className="relative flex flex-col space-y-3 rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:p-6">
            <div className="absolute right-4 top-4 flex items-center gap-1">
              <Skeleton className="size-9 rounded-full" />
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex w-full shrink-0 flex-col items-center gap-3 sm:w-auto sm:items-start">
                <Skeleton className="size-28 rounded-2xl sm:size-32" />
              </div>

              <div className="min-w-0 flex-1 space-y-3 sm:pr-10">
                <Skeleton className="mx-auto h-8 w-48 sm:mx-0" />
                <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <Skeleton className="mx-auto h-6 w-36 rounded-full sm:mx-0" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <Skeleton className="size-2 rounded-full" />
              <Skeleton className="h-4 w-52 max-w-full" />
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1">
              <Skeleton className="h-9 rounded-full" />
              <Skeleton className="h-9 rounded-full" />
              <Skeleton className="h-9 rounded-full" />
            </div>
          </div>

          <div className="grid h-full min-h-[11rem] grid-cols-1 gap-3 sm:min-h-0 sm:grid-cols-2 sm:grid-rows-2 sm:gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-full min-h-0">
                <AgentProfileStatCardSkeleton />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function AgentProfilePanelSkeleton({ className }: { className?: string }) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-border bg-white px-5 py-6 sm:px-7 sm:py-8 md:px-8 md:py-9",
        className
      )}
      aria-hidden
    >
      <div className="flex flex-col gap-4 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <Skeleton className="h-9 w-40" />
        <div className="flex gap-2">
          <Skeleton className="size-9 rounded-full" />
          <Skeleton className="size-9 rounded-full" />
          <Skeleton className="size-9 rounded-full" />
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-10/12" />
      </div>
      <div className="mt-8 space-y-4">
        <Skeleton className="h-8 w-28" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </article>
  )
}

export function AgentProfileBodySkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("container mx-auto px-4 py-6 sm:px-6 md:py-8", className)}>
      <div className="flex flex-wrap items-center gap-2">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-32" />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
        <nav
          className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden -mx-4 px-4 lg:mx-0 lg:px-0"
          aria-hidden
        >
          {AGENT_PROFILE_NAV_ITEMS.map((item) => (
            <Skeleton key={item.slug} className="h-12 w-36 shrink-0 rounded-xl lg:w-full" />
          ))}
        </nav>

        <AgentProfilePanelSkeleton />
      </div>
    </div>
  )
}

export function AgentProfileFullPageSkeleton() {
  return (
    <>
      <AgentProfileHeroSkeleton />
      <AgentProfileBodySkeleton />
      <div className="border-t border-border bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto space-y-4 px-4">
          <Skeleton className="mx-auto h-8 w-64 max-w-full" />
          <Skeleton className="mx-auto h-10 w-full max-w-md rounded-full" />
        </div>
      </div>
    </>
  )
}
