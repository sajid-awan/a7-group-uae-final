"use client"

import { KANBAN_COLUMNS } from "../content/tasks-content"
import { Skeleton } from "@/shared/ui/skeleton"
import { cn } from "@/shared/lib/cn"

export type TasksLoadingSkeletonProps = {
  columnCount?: number
  cardsPerColumn?: number
  className?: string
}

export function TasksLoadingSkeleton({
  columnCount = KANBAN_COLUMNS.length,
  cardsPerColumn = 2,
  className,
}: TasksLoadingSkeletonProps) {
  return (
    <div
      aria-busy="true"
      aria-label="Loading tasks kanban board"
      className={cn("overflow-x-auto pb-2", className)}
    >
      <div className="flex min-w-full gap-3">
        {Array.from({ length: columnCount }).map((_, columnIndex) => (
          <div
            key={`tasks-column-skeleton-${columnIndex}`}
            className="flex min-w-[317px] flex-1 flex-col rounded-2xl border border-neutral-200 bg-white pb-3"
          >
            <Skeleton className="mx-3 mt-3 h-11 rounded-full" />
            <div className="flex flex-col gap-3 p-3">
              {Array.from({ length: cardsPerColumn }).map((__, cardIndex) => (
                <div
                  key={`tasks-card-skeleton-${columnIndex}-${cardIndex}`}
                  className="w-full space-y-3 rounded-[1.25rem] border border-neutral-200 bg-white p-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <Skeleton className="h-5 w-16 rounded-full" />
                    <Skeleton className="h-5 w-16 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                  <Skeleton className="h-px w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

TasksLoadingSkeleton.displayName = "TasksLoadingSkeleton"
