"use client"

import { useRouter } from "next/navigation"

import type { ListingFormValues } from "../content/listing-form-types"
import { ListingForm } from "../components/listing-form"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"

export type DashboardCreateListingPageProps = {
  className?: string
}

export function DashboardCreateListingPage({ className }: DashboardCreateListingPageProps) {
  const router = useRouter()

  const handleCancel = () => {
    router.push(PAGE_ROUTES.dashboardListings)
  }

  const handleSubmit = (_values: ListingFormValues) => {
    router.push(PAGE_ROUTES.dashboardListings)
  }

  return (
    <div className={cn("p-4 sm:p-6 font-inter", className)}>
      <ListingForm onCancel={handleCancel} onSubmit={handleSubmit} />
    </div>
  )
}

DashboardCreateListingPage.displayName = "DashboardCreateListingPage"
