import type { ReactNode } from "react"

import { MarketingSplitLayout } from "@/shared/ui/marketing"
import { SellPropertyHeroPanel } from "@/features/services/ui/sell-property/hero-panel"

export type QuickPagesLayoutProps = {
  children: ReactNode
  className?: string
  contentClassName?: string
}

/** Split layout with side hero panel — used for sell-property and similar quick-flow pages. */
export function QuickPagesLayout({ children, className, contentClassName }: QuickPagesLayoutProps) {
  return (
    <MarketingSplitLayout
      sidePanel={<SellPropertyHeroPanel />}
      className={className}
      contentClassName={contentClassName}
    >
      {children}
    </MarketingSplitLayout>
  )
}
