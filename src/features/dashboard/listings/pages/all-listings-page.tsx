"use client"

import { useMemo } from "react"
import { useRouter } from "next/navigation"

import {
  getDashboardAllListingsMockData,
} from "../content/listings-mock-data"
import { DashboardListingsView } from "../components/listings-view"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"

export type DashboardAllListingsPageProps = {
  className?: string
}

export function DashboardAllListingsPage({ className }: DashboardAllListingsPageProps) {
  const router = useRouter()
  const listings = useMemo(() => getDashboardAllListingsMockData(), [])

  return (
    <DashboardListingsView
      listings={listings}
      className={cn(className)}
      onAddListing={() => router.push(PAGE_ROUTES.dashboardListingsNew)}
    />
  )
}

DashboardAllListingsPage.displayName = "DashboardAllListingsPage"
