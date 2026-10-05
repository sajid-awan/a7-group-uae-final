import { notFound } from "next/navigation"

import { DashboardEditAgentPage, getDashboardAgentBySlug } from "@/features/dashboard"

type DashboardEditAgentRoutePageProps = {
  params: Promise<{ id: string }>
}

export default async function DashboardEditAgentRoutePage({ params }: DashboardEditAgentRoutePageProps) {
  const { id: slug } = await params
  const agent = getDashboardAgentBySlug(slug)

  if (!agent) {
    notFound()
  }

  return <DashboardEditAgentPage agent={agent} />
}
