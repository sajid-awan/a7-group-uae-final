import type { ReactNode } from "react"

import { cn } from "@/shared/lib/cn"

export type AreasListingShellProps = {
  sidebar: ReactNode
  results: ReactNode
  className?: string
}

export function AreasListingShell({ sidebar, results, className }: AreasListingShellProps) {
  return (
    <section className={cn("bg-white", className)} aria-label="Dubai areas">
      <div className="container mx-auto px-4 py-6 sm:px-6 md:py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
          <aside className="w-full shrink-0 lg:sticky lg:top-24 lg:w-64 xl:w-72">{sidebar}</aside>
          <div className="min-w-0 flex-1">{results}</div>
        </div>
      </div>
    </section>
  )
}
