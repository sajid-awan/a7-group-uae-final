import { DashboardListingDetailView } from "@/features/dashboard/listings/components/listing-detail-view"
import type { DashboardListingDetail } from "@/features/dashboard/listings/content/listing-detail-types"
import { dashboardAgentListingsPath } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"

import type { DashboardAgentRow } from "../content/dashboard-agents-types"

export type DashboardAgentListingDetailPageProps = {
  agent: DashboardAgentRow
  listing: DashboardListingDetail
  className?: string
}

export function DashboardAgentListingDetailPage({
  agent,
  listing,
  className,
}: DashboardAgentListingDetailPageProps) {
  return (
    <DashboardListingDetailView
      listing={listing}
      backHref={dashboardAgentListingsPath(agent.id)}
      backLabel="Back to listings"
      className={cn("px-0 pb-0 pt-2", className)}
    />
  )
}

DashboardAgentListingDetailPage.displayName = "DashboardAgentListingDetailPage"
