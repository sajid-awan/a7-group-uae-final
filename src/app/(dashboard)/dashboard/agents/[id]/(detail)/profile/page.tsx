import { notFound } from "next/navigation"

import { DashboardAgentProfilePage, getDashboardAgentBySlug } from "@/features/dashboard"

type DashboardAgentProfileRoutePageProps = {
  params: Promise<{ id: string }>
}

export default async function DashboardAgentProfileRoutePage({ params }: DashboardAgentProfileRoutePageProps) {
  const { id: slug } = await params
  const agent = getDashboardAgentBySlug(slug)

  if (!agent) {
    notFound()
  }

  return <DashboardAgentProfilePage agent={agent} />
}
