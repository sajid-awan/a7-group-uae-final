"use client"

import type { ReactNode } from "react"

export { dashboardListingsFiltersCopy } from "../content/listings-filter-content"
export type { DashboardListingFilters } from "../content/listings-filter-types"

export function FilterFormGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>
}
