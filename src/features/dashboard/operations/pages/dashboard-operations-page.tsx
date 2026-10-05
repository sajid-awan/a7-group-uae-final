"use client"

import { useMemo } from "react"

import { OperationsView } from "../components/operations-view"
import { getWorkflowsMockData } from "../content/operations-content"
import { cn } from "@/shared/lib/cn"

export type DashboardOperationsPageProps = {
  className?: string
}

export function DashboardOperationsPage({ className }: DashboardOperationsPageProps) {
  const workflows = useMemo(() => getWorkflowsMockData(10), [])

  return (
    <div className={cn("p-4 sm:p-6 font-inter", className)}>
      <OperationsView workflows={workflows} />
    </div>
  )
}

DashboardOperationsPage.displayName = "DashboardOperationsPage"
