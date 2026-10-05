"use client"

import { useMemo } from "react"
import { useRouter } from "next/navigation"

import { DatabaseView } from "../components/database-view"
import { getDatabaseLocationsMockData } from "../content/database-content"
import type { DatabaseLocation } from "../content/database-types"
import { dashboardDatabaseLocationPath } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"

export type DashboardDatabasePageProps = {
  className?: string
}

export function DashboardDatabasePage({ className }: DashboardDatabasePageProps) {
  const router = useRouter()
  const locations = useMemo(() => getDatabaseLocationsMockData(), [])

  const handleLocationClick = (location: DatabaseLocation) => {
    router.push(dashboardDatabaseLocationPath(location.slug))
  }

  return (
    <div className={cn("p-4 sm:p-6 font-inter", className)}>
      <DatabaseView locations={locations} onLocationClick={handleLocationClick} />
    </div>
  )
}

DashboardDatabasePage.displayName = "DashboardDatabasePage"
