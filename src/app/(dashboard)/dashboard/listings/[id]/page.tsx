import { notFound } from "next/navigation"

import { DashboardListingDetailPage, getDashboardListingDetail } from "@/features/dashboard"

type DashboardListingDetailRoutePageProps = {
  params: Promise<{ id: string }>
}

export default async function DashboardListingDetailRoutePage({
  params,
}: DashboardListingDetailRoutePageProps) {
  const { id } = await params
  const listing = getDashboardListingDetail(id)

  if (!listing) {
    notFound()
  }

  return <DashboardListingDetailPage listing={listing} />
}
