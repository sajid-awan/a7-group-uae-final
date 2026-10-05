import type { ReactNode } from "react"

import { cn } from "@/shared/lib/cn"

export type MarketingSplitLayoutProps = {
  children: ReactNode
  /** Optional sticky side panel (e.g. hero). Omit on full-width pages like Services. */
  sidePanel?: ReactNode
  className?: string
  contentClassName?: string
}

/**
 * Split layout: optional sticky left panel + main content.
 * Without `sidePanel`, renders children full-width (standard marketing pages).
 */
export function MarketingSplitLayout({
  children,
  sidePanel,
  className,
  contentClassName,
}: MarketingSplitLayoutProps) {
  if (!sidePanel) {
    return <main className={cn("min-h-svh bg-white", className)}>{children}</main>
  }

  return (
    <main className={cn("min-h-svh bg-white lg:p-2.5", className)}>
      <div className="flex sm:flex-col flex-col-reverse lg:grid lg:grid-cols-[1.08fr_1fr] lg:items-start">
        {sidePanel}
        <section className={cn("w-full min-w-0 lg:px-8 lg:py-10", contentClassName)}>{children}</section>
      </div>
    </main>
  )
}
