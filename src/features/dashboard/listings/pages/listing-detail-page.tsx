import type { DashboardListingDetail } from "../content/listing-detail-types"
import { DashboardListingDetailView } from "../components/listing-detail-view"
import { cn } from "@/shared/lib/cn"

export type DashboardListingDetailPageProps = {
  listing: DashboardListingDetail
  className?: string
}

export function DashboardListingDetailPage({ listing, className }: DashboardListingDetailPageProps) {
  return <DashboardListingDetailView listing={listing} className={cn(className)} />
}

DashboardListingDetailPage.displayName = "DashboardListingDetailPage"
