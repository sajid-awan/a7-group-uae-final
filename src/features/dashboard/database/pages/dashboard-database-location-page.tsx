"use client"

import { notFound } from "next/navigation"
import { useMemo } from "react"

import { DatabaseDetailView } from "../components/database-detail-view"
import {
  getDatabaseLocationBySlug,
  getDatabaseRecordsByLocationId,
} from "../content/database-content"
import { cn } from "@/shared/lib/cn"

export type DashboardDatabaseLocationPageProps = {
  locationSlug: string
  className?: string
}

export function DashboardDatabaseLocationPage({
  locationSlug,
  className,
}: DashboardDatabaseLocationPageProps) {
  const location = useMemo(() => getDatabaseLocationBySlug(locationSlug), [locationSlug])
  const records = useMemo(
    () => (location ? getDatabaseRecordsByLocationId(location.id) : []),
    [location]
  )

  if (!location) {
    notFound()
  }

  return (
    <div className={cn("p-4 sm:p-6 font-inter", className)}>
      <DatabaseDetailView location={location} records={records} />
    </div>
  )
}

DashboardDatabaseLocationPage.displayName = "DashboardDatabaseLocationPage"
