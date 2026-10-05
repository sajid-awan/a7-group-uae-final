import { notFound } from "next/navigation"

import {
  DashboardAgentListingDetailPage,
  getDashboardAgentBySlug,
  getDashboardAgentListingDetail,
} from "@/features/dashboard"

type DashboardAgentListingDetailRoutePageProps = {
  params: Promise<{ id: string; listingId: string }>
}

export default async function DashboardAgentListingDetailRoutePage({
  params,
}: DashboardAgentListingDetailRoutePageProps) {
  const { id: slug, listingId } = await params
  const agent = getDashboardAgentBySlug(slug)

  if (!agent) {
    notFound()
  }

  const listing = getDashboardAgentListingDetail(slug, listingId)

  if (!listing) {
    notFound()
  }

  return <DashboardAgentListingDetailPage agent={agent} listing={listing} />
}
