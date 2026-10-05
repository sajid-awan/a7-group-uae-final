"use client"

import { cn } from "@/shared/lib/cn"
import type { DashboardOverviewContent } from "@/features/dashboard/content/dashboard-content-types"
import { dashboardOverviewContent } from "../content/dashboard-overview-content"
import { DashboardAnalyticsSections } from "../../components/dashboard-analytics-sections"
import { DashboardStatsSection } from "../../components/dashboard-stats-section"
import { DashboardWelcomeSection } from "../../components/dashboard-welcome-section"

export type DashboardOverviewProps = {
  userName?: string
  content?: DashboardOverviewContent
  className?: string
}

export function DashboardOverview({
  userName = "Olivia",
  content = dashboardOverviewContent,
  className,
}: DashboardOverviewProps) {
  return (
    <div className={cn("space-y-6 p-4 sm:p-6 font-inter [&_h1]:font-inter [&_h2]:font-inter [&_h3]:font-inter [&_h4]:font-inter", className)}>
      <DashboardWelcomeSection userName={userName} />

      <DashboardStatsSection stats={content.stats} />

      <DashboardAnalyticsSections content={content} />
    </div>
  )
}

DashboardOverview.displayName = "DashboardOverview"
