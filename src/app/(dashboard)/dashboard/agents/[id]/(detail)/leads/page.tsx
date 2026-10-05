import { notFound } from "next/navigation"

import { DashboardAgentLeadsPage, getDashboardAgentBySlug } from "@/features/dashboard"

type DashboardAgentLeadsRoutePageProps = {
  params: Promise<{ id: string }>
}

export default async function DashboardAgentLeadsRoutePage({ params }: DashboardAgentLeadsRoutePageProps) {
  const { id: slug } = await params
  const agent = getDashboardAgentBySlug(slug)

  if (!agent) {
    notFound()
  }

  return <DashboardAgentLeadsPage agent={agent} />
}
