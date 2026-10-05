"use client"

import { useEffect, useState } from "react"

import {
  DASHBOARD_LISTING_BEDROOM_OPTIONS,
  DASHBOARD_LISTING_COMPLETION_STATUS_OPTIONS,
  DASHBOARD_LISTING_FURNISHING_OPTIONS,
  DASHBOARD_LISTING_PORTAL_OPTIONS,
  DASHBOARD_LISTING_PROPERTY_TITLE_OPTIONS,
  DASHBOARD_LISTING_PROPERTY_TYPE_OPTIONS,
  DASHBOARD_LISTING_SIZE_OPTIONS,
  DASHBOARD_LISTING_VISIBILITY_OPTIONS,
  createDefaultDashboardListingFilters,
  dashboardListingsFiltersCopy,
} from "../content/listings-filter-content"
import type { DashboardListingFilters, DashboardListingVisibility } from "../content/listings-filter-types"
import { FilterFormGrid } from "./listings-filter-fields"
import { resetDashboardListingFilters } from "../utils/listings-filter-form"
import { Button } from "@/shared/ui/button"
import {
  SideDrawer,
  SideDrawerBody,
  SideDrawerContent,
  SideDrawerFooter,
  SideDrawerHeader,
} from "@/shared/ui/drawer"
import {
  FormDateField,
  FormInputField,
  FormPriceField,
  FormSelectField,
} from "@/shared/ui/form-field"
import { SegmentedControl } from "@/shared/ui/segmented-control"

export type DashboardListingsFiltersDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  filters: DashboardListingFilters
  onApply: (filters: DashboardListingFilters) => void
  className?: string
}

const LISTING_VISIBILITY_SEGMENT_OPTIONS = DASHBOARD_LISTING_VISIBILITY_OPTIONS.map((option) => ({
  value: option.value,
  label: option.label,
}))

export function DashboardListingsFiltersDrawer({
  open,
  onOpenChange,
  filters,
  onApply,
  className,
}: DashboardListingsFiltersDrawerProps) {
  const [draft, setDraft] = useState<DashboardListingFilters>(filters)

  useEffect(() => {
    if (open) {
      setDraft(filters)
    }
  }, [open, filters])

  const updateDraft = (patch: Partial<DashboardListingFilters>) => {
    setDraft((current) => ({ ...current, ...patch }))
  }

  const handleReset = () => {
    setDraft(resetDashboardListingFilters())
  }

  const handleCancel = () => {
    setDraft(filters)
    onOpenChange(false)
  }

  const handleApply = () => {
    onApply(draft)
    onOpenChange(false)
  }

  return (
    <SideDrawer open={open} onOpenChange={onOpenChange}>
      <SideDrawerContent className={className}>
        <SideDrawerHeader
          title={dashboardListingsFiltersCopy.title}
          description={dashboardListingsFiltersCopy.description}
          headerAction={
            <button
              type="button"
              className="shrink-0 text-sm font-medium text-destructive"
              onClick={handleReset}
            >
              {dashboardListingsFiltersCopy.resetLabel}
            </button>
          }
          onClose={handleCancel}
          closeLabel="Close filters drawer"
        />

        <SideDrawerBody>
          <div className="space-y-4">
            <FormSelectField
              label="Property Title (Enter atleast 2 characters)"
              value={draft.propertyTitle}
              options={DASHBOARD_LISTING_PROPERTY_TITLE_OPTIONS}
              onValueChange={(propertyTitle) => updateDraft({ propertyTitle })}
            />

            <FormInputField
              label="Ref No."
              value={draft.referenceNo}
              placeholder="Enter"
              onValueChange={(referenceNo) => updateDraft({ referenceNo })}
            />

            <FilterFormGrid>
              <FormSelectField
                label="Property Type"
                value={draft.propertyType}
                options={DASHBOARD_LISTING_PROPERTY_TYPE_OPTIONS}
                onValueChange={(propertyType) => updateDraft({ propertyType })}
              />
              <FormSelectField
                label="BedRooms"
                value={draft.bedrooms}
                options={DASHBOARD_LISTING_BEDROOM_OPTIONS}
                onValueChange={(bedrooms) => updateDraft({ bedrooms })}
              />
            </FilterFormGrid>

            <FilterFormGrid>
              <FormSelectField
                label="Furnishing"
                value={draft.furnishing}
                options={DASHBOARD_LISTING_FURNISHING_OPTIONS}
                onValueChange={(furnishing) => updateDraft({ furnishing })}
              />
              <FormSelectField
                label="Completion Status"
                value={draft.completionStatus}
                options={DASHBOARD_LISTING_COMPLETION_STATUS_OPTIONS}
                onValueChange={(completionStatus) => updateDraft({ completionStatus })}
              />
            </FilterFormGrid>

            <FilterFormGrid>
              <FormDateField
                label="Date From"
                value={draft.dateFrom}
                onValueChange={(dateFrom) => updateDraft({ dateFrom })}
              />
              <FormDateField
                label="Date To"
                value={draft.dateTo}
                onValueChange={(dateTo) => updateDraft({ dateTo })}
              />
            </FilterFormGrid>

            <FilterFormGrid>
              <FormPriceField
                label="Min Price"
                value={draft.minPrice}
                onValueChange={(minPrice) => updateDraft({ minPrice })}
              />
              <FormPriceField
                label="Max Price"
                value={draft.maxPrice}
                onValueChange={(maxPrice) => updateDraft({ maxPrice })}
              />
            </FilterFormGrid>

            <FilterFormGrid>
              <FormSelectField
                label="Min Size (sq ft)"
                value={draft.minSize}
                options={DASHBOARD_LISTING_SIZE_OPTIONS}
                onValueChange={(minSize) => updateDraft({ minSize })}
              />
              <FormSelectField
                label="Max Size (sq ft)"
                value={draft.maxSize}
                options={DASHBOARD_LISTING_SIZE_OPTIONS}
                onValueChange={(maxSize) => updateDraft({ maxSize })}
              />
            </FilterFormGrid>

            <FormSelectField
              label="Select Portals"
              value={draft.portals}
              options={DASHBOARD_LISTING_PORTAL_OPTIONS}
              onValueChange={(portals) => updateDraft({ portals })}
            />

            <SegmentedControl
              label="Select Visibility"
              value={draft.visibility as DashboardListingVisibility}
              onValueChange={(visibility) => updateDraft({ visibility })}
              options={LISTING_VISIBILITY_SEGMENT_OPTIONS}
              tone="neutral"
              columns={4}
            />
          </div>
        </SideDrawerBody>

        <SideDrawerFooter>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="rounded-xl border-neutral-200 bg-white shadow-none"
            onClick={handleCancel}
          >
            {dashboardListingsFiltersCopy.cancelLabel}
          </Button>
          <Button type="button" size="sm" className="rounded-xl" onClick={handleApply}>
            {dashboardListingsFiltersCopy.applyLabel}
          </Button>
        </SideDrawerFooter>
      </SideDrawerContent>
    </SideDrawer>
  )
}

DashboardListingsFiltersDrawer.displayName = "DashboardListingsFiltersDrawer"

export { createDefaultDashboardListingFilters }
