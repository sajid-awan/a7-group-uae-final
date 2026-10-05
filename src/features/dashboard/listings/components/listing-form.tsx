"use client"

import { useState } from "react"
import {
  Check,
  FileText,
  Hash,
  ImagePlus,
  QrCode,
} from "lucide-react"

import type { ListingFormValues, ListingPortalId } from "../content/listing-form-types"
import {
  LISTING_AGENT_OPTIONS,
  LISTING_AMENITY_OPTIONS,
  LISTING_BATHROOM_OPTIONS,
  LISTING_CHEQUE_OPTIONS,
  LISTING_DOCUMENT_SLOTS,
  LISTING_FORM_PROPERTY_TYPE_OPTIONS,
  LISTING_FURNITURE_OPTIONS,
  LISTING_LOCATION_OPTIONS,
  LISTING_OWNER_OPTIONS,
  LISTING_PORTAL_OPTIONS,
  LISTING_PROJECT_STATUS_OPTIONS,
  LISTING_TAG_OPTIONS,
  LISTING_YEARLY_OPTIONS,
  createEmptyListingFormValues,
  listingFormCopy,
} from "../content/listing-form-content"
import { ListingFormGrid, ListingFormSection, listingFormControlClassName } from "./listing-form-fields"
import {
  LISTING_CATEGORY_SEGMENT_OPTIONS,
  LISTING_PURPOSE_SEGMENT_OPTIONS,
  LISTING_VISIBILITY_SEGMENT_OPTIONS,
  ListingTagIcon,
} from "./listing-form-segments"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import { DashboardPageHeader } from "@/shared/ui/dashboard/dashboard-page-header"
import { DatePicker } from "@/shared/ui/date-picker"
import { FileUploadDropzone } from "@/shared/ui/file-upload-dropzone"
import {
  FormInputActionField,
  FormInputField,
  FormPriceField,
  FormSelectField,
  FormTextareaField,
} from "@/shared/ui/form-field"
import { PortalStatusCard } from "@/shared/ui/portal-status-card"
import { SegmentedControl } from "@/shared/ui/segmented-control"
import { ToggleChip } from "@/shared/ui/toggle-chip"

export type ListingFormProps = {
  className?: string
  onCancel: () => void
  onSubmit: (values: ListingFormValues) => void
}

function toggleArrayValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value]
}

export function ListingForm({ className, onCancel, onSubmit }: ListingFormProps) {
  const [form, setForm] = useState<ListingFormValues>(createEmptyListingFormValues())

  const updateForm = (patch: Partial<ListingFormValues>) => {
    setForm((current) => ({ ...current, ...patch }))
  }

  const updatePortal = (portalId: ListingPortalId, enabled: boolean) => {
    setForm((current) => ({
      ...current,
      portals: {
        ...current.portals,
        [portalId]: { enabled },
      },
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(form)
  }

  return (
    <form className={cn("space-y-5", className)} onSubmit={handleSubmit} noValidate>
      <DashboardPageHeader
        backHref={PAGE_ROUTES.dashboardListings}
        backLabel="Back to listings"
        title={listingFormCopy.pageTitle}
        subtitle={listingFormCopy.pageSubtitle}
      />

      <ListingFormSection title={listingFormCopy.sections.basicInformation}>
        <ListingFormGrid columns={2}>
          <SegmentedControl
            label="Purpose"
            value={form.purpose}
            onValueChange={(purpose) => updateForm({ purpose })}
            options={LISTING_PURPOSE_SEGMENT_OPTIONS}
            tone="primaryLight"
          />
          <SegmentedControl
            label="Property Type"
            value={form.category}
            onValueChange={(category) => updateForm({ category })}
            options={LISTING_CATEGORY_SEGMENT_OPTIONS}
            tone="primaryLight"
          />
          <FormSelectField
            label="Search Location"
            value={form.searchLocation}
            onValueChange={(searchLocation) => updateForm({ searchLocation })}
            options={LISTING_LOCATION_OPTIONS}
            required
          />
          <FormInputField
            label="Price (AED)"
            value={form.price}
            onValueChange={(price) => updateForm({ price })}
            type="number"
          />
          <FormInputField
            label="Unit Number"
            value={form.unitNumber}
            onValueChange={(unitNumber) => updateForm({ unitNumber })}
            icon={<Hash className="size-4" aria-hidden />}
          />
          <FormSelectField
            label="Listing Agent(With RERA)"
            value={form.listingAgent}
            onValueChange={(listingAgent) => updateForm({ listingAgent })}
            options={LISTING_AGENT_OPTIONS}
            placeholder="Select agent"
            required
          />
          <FormSelectField
            label="Assigned Agent"
            value={form.assignedAgent}
            onValueChange={(assignedAgent) => updateForm({ assignedAgent })}
            options={LISTING_AGENT_OPTIONS}
            placeholder="Select agent"
            className="md:col-span-2"
          />
        </ListingFormGrid>
      </ListingFormSection>

      <ListingFormSection title={listingFormCopy.sections.propertyDetails}>
        <ListingFormGrid columns={3}>
          <FormSelectField
            label="Location"
            value={form.location}
            onValueChange={(location) => updateForm({ location })}
            options={LISTING_LOCATION_OPTIONS}
          />
          <FormPriceField
            label="Price (AED)"
            value={form.price}
            onValueChange={(price) => updateForm({ price })}
            required
          />
          <FormSelectField
            label="Yearly"
            value={form.yearlyPrice}
            onValueChange={(yearlyPrice) => updateForm({ yearlyPrice })}
            options={LISTING_YEARLY_OPTIONS}
          />
          <FormSelectField
            label="Number of Cheques"
            value={form.numberOfCheques}
            onValueChange={(numberOfCheques) => updateForm({ numberOfCheques })}
            options={LISTING_CHEQUE_OPTIONS}
          />
          <FormInputField
            label="Unit No"
            value={form.unitNo}
            onValueChange={(unitNo) => updateForm({ unitNo })}
          />
          <FormSelectField
            label="Property Type"
            value={form.propertyType}
            onValueChange={(propertyType) => updateForm({ propertyType })}
            options={LISTING_FORM_PROPERTY_TYPE_OPTIONS}
          />
          <FormInputField
            label="Size (SQFT)"
            value={form.sizeSqft}
            onValueChange={(sizeSqft) => updateForm({ sizeSqft })}
            type="number"
          />
          <FormSelectField
            label="Bathrooms"
            value={form.bathrooms}
            onValueChange={(bathrooms) => updateForm({ bathrooms })}
            options={LISTING_BATHROOM_OPTIONS}
          />
          <FormSelectField
            label="Furniture Status"
            value={form.furnitureStatus}
            onValueChange={(furnitureStatus) => updateForm({ furnitureStatus })}
            options={LISTING_FURNITURE_OPTIONS}
          />
          <FormSelectField
            label="Project Status"
            value={form.projectStatus}
            onValueChange={(projectStatus) => updateForm({ projectStatus })}
            options={LISTING_PROJECT_STATUS_OPTIONS}
          />
          <FormInputField
            label="Reference Number"
            value={form.referenceNumber}
            onValueChange={(referenceNumber) => updateForm({ referenceNumber })}
          />
          <div className="space-y-2">
            <p className="text-sm font-medium text-a7-text-gray">Available From</p>
            <DatePicker
              value={form.availableFrom}
              onChange={(availableFrom) => updateForm({ availableFrom })}
              placeholder="YYYY-MM-DD"
            />
          </div>
        </ListingFormGrid>
      </ListingFormSection>

      <ListingFormSection title={listingFormCopy.sections.tags}>
        <div className="flex flex-wrap gap-2">
          {LISTING_TAG_OPTIONS.map((tag) => {
            const isActive = form.tags.includes(tag.id)
            return (
              <ToggleChip
                key={tag.id}
                label={tag.label}
                selected={isActive}
                icon={<ListingTagIcon />}
                onSelectedChange={() => updateForm({ tags: toggleArrayValue(form.tags, tag.id) })}
              />
            )
          })}
        </div>
      </ListingFormSection>

      <ListingFormSection title={listingFormCopy.sections.titleDescription}>
        <FormInputField
          label="Title"
          value={form.title}
          onValueChange={(title) => updateForm({ title })}
          required
        />
        <FormTextareaField
          label="Description"
          value={form.description}
          onValueChange={(description) => updateForm({ description })}
          placeholder="Enter a description..."
          required
        />
      </ListingFormSection>

      <ListingFormSection title={listingFormCopy.sections.amenities}>
        <div className="flex flex-wrap gap-2">
          {LISTING_AMENITY_OPTIONS.map((amenity) => {
            const isActive = form.amenities.includes(amenity.id)
            return (
              <ToggleChip
                key={amenity.id}
                label={amenity.label}
                selected={isActive}
                mode="checkbox"
                onSelectedChange={() =>
                  updateForm({ amenities: toggleArrayValue(form.amenities, amenity.id) })
                }
              />
            )
          })}
        </div>
      </ListingFormSection>

      <ListingFormSection title={listingFormCopy.sections.mediaGallery}>
        <FileUploadDropzone
          variant="document"
          icon={ImagePlus}
          title="Click to upload or drag and drop"
          description="SVG, PNG, JPG or GIF (max. 800x400px)"
          actionLabel="Upload File"
          accept="image/*"
          multiple
          enableDrop
          onFilesSelected={() => undefined}
        />
      </ListingFormSection>

      <ListingFormSection title={listingFormCopy.sections.permitDetails}>
        <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-end lg:gap-6">
          <FormInputActionField
            label="Permit Number"
            value={form.permitNumber}
            onValueChange={(permitNumber) => updateForm({ permitNumber })}
            actionLabel="Validate"
            actionIcon={<Check className="size-4" aria-hidden />}
            className="w-full lg:w-[min(100%,22rem)]"
          />
          <FormInputActionField
            label="Permit URL"
            value={form.permitUrl}
            onValueChange={(permitUrl) => updateForm({ permitUrl })}
            actionLabel="Scan QR"
            actionIcon={<QrCode className="size-4" aria-hidden />}
            className="w-full lg:w-[min(100%,30rem)]"
          />
        </div>
      </ListingFormSection>

      <ListingFormSection title={listingFormCopy.sections.propertyOwner}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="min-w-0 flex-1">
            <FormSelectField
              label="Select Owner"
              value={form.ownerId}
              onValueChange={(ownerId) => updateForm({ ownerId })}
              options={LISTING_OWNER_OPTIONS}
            />
          </div>
          <Button
            type="button"
            variant="outline"
            className={cn(listingFormControlClassName, "shrink-0 rounded-xl border-neutral-200 px-4 shadow-none")}
          >
            + Create New Owner
          </Button>
        </div>
      </ListingFormSection>

      <ListingFormSection title={listingFormCopy.sections.listingDocuments}>
        <ListingFormGrid columns={3}>
          {LISTING_DOCUMENT_SLOTS.map((slot) => (
            <FileUploadDropzone
              key={slot.id}
              variant="document"
              icon={FileText}
              title={slot.label}
              description={slot.description}
              actionLabel="Upload File"
              accept=".pdf,.png,.jpg,.jpeg"
              multiple={false}
              enableDrop={false}
              onFilesSelected={() => undefined}
            />
          ))}
        </ListingFormGrid>
      </ListingFormSection>

      <ListingFormSection title={listingFormCopy.sections.publish}>
        <ListingFormGrid columns={2}>
          {LISTING_PORTAL_OPTIONS.map((portal) => (
            <PortalStatusCard
              key={portal.id}
              label={portal.label}
              imageSrc={portal.imageSrc}
              active={form.portals[portal.id].enabled}
              onActiveChange={(enabled) => updatePortal(portal.id, enabled)}
            />
          ))}
        </ListingFormGrid>
      </ListingFormSection>

      <ListingFormSection title={listingFormCopy.sections.visibility}>
        <SegmentedControl
          value={form.visibility}
          onValueChange={(visibility) => updateForm({ visibility })}
          options={LISTING_VISIBILITY_SEGMENT_OPTIONS}
          tone="primaryLight"
          columns={3}
        />
      </ListingFormSection>

      <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
        <Button
          type="button"
          variant="outline"
          className={cn(
            listingFormControlClassName,
            "rounded-xl border-neutral-200 bg-white px-6 shadow-none"
          )}
          onClick={onCancel}
        >
          {listingFormCopy.cancelLabel}
        </Button>
        <Button
          type="submit"
          className={cn(listingFormControlClassName, "rounded-xl px-6")}
        >
          <Check className="mr-2 size-4" aria-hidden />
          {listingFormCopy.submitLabel}
        </Button>
      </div>
    </form>
  )
}

ListingForm.displayName = "ListingForm"
