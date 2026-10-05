import { Skeleton } from "@/shared/ui/skeleton"
import { cn } from "@/shared/lib/cn"

type SidebarNavSkeletonProps = {
  /** Number of component doc links to mimic. Defaults to a typical sidebar length. */
  count?: number
  className?: string
}

export function SidebarNavSkeleton({ count = 22, className }: SidebarNavSkeletonProps) {
  return (
    <div className={cn("space-y-0.5", className)} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-8 w-full rounded-md"
          style={{ width: `${58 + (i % 5) * 7}%` }}
        />
      ))}
    </div>
  )
}
