"use client"

import { getDashboardListingLeads } from "../content/listing-leads-content"
import { dashboardListingLeadsCopy } from "../content/listing-leads-types"
import type { DashboardListing } from "../content/listings-types"
import { DashboardListingLeadCard } from "./listing-lead-card"
import {
  SideDrawer,
  SideDrawerBody,
  SideDrawerContent,
  SideDrawerHeader,
} from "@/shared/ui/drawer"

export type DashboardListingLeadsDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  listing: DashboardListing | null
  className?: string
}

export function DashboardListingLeadsDrawer({
  open,
  onOpenChange,
  listing,
  className,
}: DashboardListingLeadsDrawerProps) {
  const leads = listing ? getDashboardListingLeads(listing) : []

  return (
    <SideDrawer open={open} onOpenChange={onOpenChange}>
      <SideDrawerContent className={className}>
        <SideDrawerHeader
          title={dashboardListingLeadsCopy.title}
          description={dashboardListingLeadsCopy.description}
          onClose={() => onOpenChange(false)}
          closeLabel="Close all leads drawer"
        />

        <SideDrawerBody>
          <div className="space-y-3">
            {leads.map((lead) => (
              <DashboardListingLeadCard key={lead.id} lead={lead} />
            ))}
          </div>
        </SideDrawerBody>
      </SideDrawerContent>
    </SideDrawer>
  )
}

DashboardListingLeadsDrawer.displayName = "DashboardListingLeadsDrawer"
