import { notFound } from "next/navigation"

import { DashboardAgentListingsPage, getDashboardAgentBySlug } from "@/features/dashboard"

type DashboardAgentListingsRoutePageProps = {
  params: Promise<{ id: string }>
}

export default async function DashboardAgentListingsRoutePage({ params }: DashboardAgentListingsRoutePageProps) {
  const { id: slug } = await params
  const agent = getDashboardAgentBySlug(slug)

  if (!agent) {
    notFound()
  }

  return <DashboardAgentListingsPage agent={agent} />
}
