"use client"

import { Skeleton } from "@/shared/ui/skeleton"
import { cn } from "@/shared/lib/cn"

export type DashboardListingsLoadingSkeletonProps = {
  cardCount?: number
  className?: string
}

export function DashboardListingsLoadingSkeleton({
  cardCount = 9,
  className,
}: DashboardListingsLoadingSkeletonProps) {
  return (
    <div
      aria-busy="true"
      aria-label="Loading listings"
      className={cn("space-y-6", className)}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={`stat-skeleton-${index}`}
            className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm"
          >
            <Skeleton className="h-4 w-20" />
            <div className="mt-3 flex items-end justify-between">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="size-10 rounded-full" />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-4">
        <div className="flex gap-8 border-b border-border pb-3">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-5 w-32" />
        </div>
        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
          <Skeleton className="h-10 w-full max-w-md rounded-lg" />
          <div className="flex gap-2">
            <Skeleton className="size-8 rounded-md" />
            <Skeleton className="size-8 rounded-md" />
            <Skeleton className="h-8 w-20 rounded-md" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: cardCount }).map((_, index) => (
          <div
            key={`listing-skeleton-${index}`}
            className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
          >
            <Skeleton className="aspect-[4/3] w-full rounded-none" />
            <div className="space-y-3 p-4">
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-7 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <div className="flex gap-2">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
              <Skeleton className="h-4 w-full" />
              <div className="flex items-center justify-between border-t border-neutral-200 py-3">
                <div className="flex items-center gap-2">
                  <Skeleton className="size-9 rounded-full" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="size-9 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

DashboardListingsLoadingSkeleton.displayName = "DashboardListingsLoadingSkeleton"
