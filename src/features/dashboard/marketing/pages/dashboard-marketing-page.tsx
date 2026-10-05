"use client"

import { MarketingView } from "../components/marketing-view"
import { cn } from "@/shared/lib/cn"

export type DashboardMarketingPageProps = {
  className?: string
}

export function DashboardMarketingPage({ className }: DashboardMarketingPageProps) {
  return (
    <div className={cn("bg-[#FAFAFA] p-4 font-inter sm:p-6 md:p-10", className)}>
      <MarketingView />
    </div>
  )
}

DashboardMarketingPage.displayName = "DashboardMarketingPage"
