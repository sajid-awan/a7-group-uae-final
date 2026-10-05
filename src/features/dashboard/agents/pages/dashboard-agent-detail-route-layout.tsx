import { notFound } from "next/navigation"
import type { ReactNode } from "react"

import { getDashboardAgentBySlug } from "../content/dashboard-agents-content"
import { DashboardAgentDetailLayout } from "../components/dashboard-agent-detail-layout"

type DashboardAgentDetailRouteLayoutProps = {
  children: ReactNode
  params: Promise<{ id: string }>
}

export async function DashboardAgentDetailRouteLayout({
  children,
  params,
}: DashboardAgentDetailRouteLayoutProps) {
  const { id: slug } = await params
  const agent = getDashboardAgentBySlug(slug)

  if (!agent) {
    notFound()
  }

  return <DashboardAgentDetailLayout agent={agent}>{children}</DashboardAgentDetailLayout>
}
