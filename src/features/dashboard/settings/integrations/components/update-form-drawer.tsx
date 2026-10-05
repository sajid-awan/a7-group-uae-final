"use client"

import Image from "next/image"
import { BedDouble, Car, Copy, ExternalLink, Eye, MapPin, Pencil, X } from "lucide-react"
import { useEffect, useState } from "react"

import {
  createFormUpdateValuesFromRecord,
  FORM_UPDATE_AGENT_OPTIONS,
  FORM_UPDATE_DEFAULT_LINKED_PROPERTY,
  FORM_UPDATE_FORM_DRAWER_COPY,
  FORM_UPDATE_LEAD_SOURCE_OPTIONS,
  FORM_UPDATE_NAME_OPTIONS,
  FORM_UPDATE_PURPOSE_OPTIONS,
  type FormConfigurationRecord,
  type FormLinkedProperty,
  type FormUpdateFormValues,
} from "../content/form-configurations-content"
import { cn } from "@/shared/lib/cn"
import { AedText } from "@/shared/ui/aed-text"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import {
  SideDrawer,
  SideDrawerBody,
  SideDrawerContent,
  SideDrawerFooter,
  SideDrawerHeader,
} from "@/shared/ui/drawer"
import { Field, FieldContent, FieldLabel } from "@/shared/ui/field"
import { FormSelectField } from "@/shared/ui/form-field"
import { Input } from "@/shared/ui/input"
import { SpacingWidth01Icon } from "@/shared/icons"

const formConfigControlHeightClassName = "h-11 min-h-11"
const drawerFooterButtonClassName = cn(formConfigControlHeightClassName, "rounded-xl shadow-none")

const transactionBadgeClassName = {
  sale: "border-emerald-200 bg-emerald-50 text-emerald-700",
  rent: "border-sky-200 bg-sky-50 text-sky-700",
} as const

const transactionLabel = {
  sale: "Sale",
  rent: "Rent",
} as const

function CopyableReadonlyField({
  id,
  value,
  copyLabel,
  leadingIcon,
}: {
  id?: string
  value: string
  copyLabel: string
  leadingIcon?: React.ReactNode
}) {
  return (
    <div className="relative">
      {leadingIcon ? (
        <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400">
          {leadingIcon}
        </span>
      ) : null}
      <Input
        id={id}
        readOnly
        value={value}
        className={cn(
          formConfigControlHeightClassName,
          "rounded-xl border-neutral-200 bg-[#FAFAFA] pr-11 text-sm shadow-none",
          leadingIcon ? "pl-10" : undefined
        )}
      />
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        className="absolute top-1/2 right-1 -translate-y-1/2 text-neutral-500"
        aria-label={copyLabel}
        onClick={() => {
          void navigator.clipboard?.writeText(value)
        }}
      >
        <Copy className="size-4" aria-hidden />
      </Button>
    </div>
  )
}

function LinkedPropertyCard({ property }: { property: FormLinkedProperty }) {
  const copy = FORM_UPDATE_FORM_DRAWER_COPY

  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-neutral-900 font-inter">{copy.linkedPropertyLabel}</h3>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="size-8 text-neutral-500"
          aria-label={copy.editLinkedPropertyLabel}
        >
          <Pencil className="size-4" aria-hidden />
        </Button>
      </div>

      <div className="mt-4 flex gap-3">
        <div className="relative aspect-[4/3] w-[108px] shrink-0 overflow-hidden rounded-xl bg-muted">
          <Image src={property.imageUrl} alt="" fill className="object-cover" sizes="108px" />
          <Badge
            variant="outline"
            size="default"
            shape="pill"
            className={cn(
              "absolute top-2 left-2 border px-2 py-0.5 text-[10px] font-semibold normal-case tracking-normal",
              transactionBadgeClassName[property.transaction]
            )}
          >
            {transactionLabel[property.transaction]}
          </Badge>
        </div>

        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex min-w-0 items-center gap-1.5 text-xs text-muted-foreground">
            <span>{property.propertyType}</span>
            <span className="h-3 w-px bg-border" aria-hidden />
            <span className="font-semibold text-primary">{property.referenceId}</span>
          </div>

          <p className="line-clamp-2 text-sm font-semibold leading-snug text-neutral-900">{property.title}</p>

          <p className="text-sm font-bold text-neutral-900">
            <AedText text={property.price} />
          </p>

          <div className="flex flex-wrap items-center gap-1.5">
            <Badge variant="muted" size="xs" shape="pill" className="gap-1 px-2 py-1 text-[10px] font-normal">
              <SpacingWidth01Icon className="size-3" aria-hidden />
              {property.areaSqft.toLocaleString()} sqft
            </Badge>
            <Badge variant="muted" size="xs" shape="pill" className="gap-1 px-2 py-1 text-[10px] font-normal">
              <BedDouble className="size-3" aria-hidden />
              {property.bedrooms} Bed
            </Badge>
            <Badge variant="muted" size="xs" shape="pill" className="gap-1 px-2 py-1 text-[10px] font-normal">
              <Car className="size-3" aria-hidden />
              {property.parking} Parking
            </Badge>
          </div>

          <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
            <MapPin className="mt-0.5 size-3.5 shrink-0" aria-hidden />
            <span className="line-clamp-2">{property.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function SearchPropertyField({
  label,
  value,
  onValueChange,
}: {
  label: string
  value: string
  onValueChange: (value: string) => void
}) {
  const copy = FORM_UPDATE_FORM_DRAWER_COPY
  const fieldId = "search-property"

  return (
    <Field orientation="vertical">
      <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>
      <FieldContent>
        <div className="relative">
          <Input
            id={fieldId}
            value={value}
            onChange={(event) => onValueChange(event.target.value)}
            className={cn(
              formConfigControlHeightClassName,
              "rounded-xl border-neutral-200 bg-white pr-10 text-sm shadow-none"
            )}
          />
          {value ? (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="absolute top-1/2 right-1 -translate-y-1/2 text-neutral-400"
              aria-label={copy.clearSearchPropertyLabel}
              onClick={() => onValueChange("")}
            >
              <X className="size-4" aria-hidden />
            </Button>
          ) : null}
        </div>
      </FieldContent>
    </Field>
  )
}

export type UpdateFormDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  form: FormConfigurationRecord | null
  onSave?: (values: FormUpdateFormValues) => void
  className?: string
}

export function UpdateFormDrawer({ open, onOpenChange, form, onSave, className }: UpdateFormDrawerProps) {
  const copy = FORM_UPDATE_FORM_DRAWER_COPY
  const [values, setValues] = useState<FormUpdateFormValues | null>(null)

  useEffect(() => {
    if (open && form) {
      setValues(createFormUpdateValuesFromRecord(form))
    }
  }, [open, form])

  if (!form || !values) return null

  const updateValues = (patch: Partial<FormUpdateFormValues>) => {
    setValues((current) => (current ? { ...current, ...patch } : current))
  }

  const handleClose = () => onOpenChange(false)

  const handleSave = () => {
    onSave?.(values)
    onOpenChange(false)
  }

  return (
    <SideDrawer open={open} onOpenChange={onOpenChange} dismissible={false}>
      <SideDrawerContent size="lg" className={className}>
        <SideDrawerHeader
          title={copy.title}
          description={copy.description}
          onClose={handleClose}
          closeLabel="Close update form drawer"
        />

        <SideDrawerBody>
          <div className="space-y-5">
            <LinkedPropertyCard property={FORM_UPDATE_DEFAULT_LINKED_PROPERTY} />

            <Field orientation="vertical">
              <FieldLabel htmlFor="form-token">{copy.formTokenLabel}</FieldLabel>
              <FieldContent>
                <CopyableReadonlyField
                  id="form-token"
                  value={values.token}
                  copyLabel={copy.copyTokenLabel}
                />
              </FieldContent>
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormSelectField
                label={copy.fields.name}
                value={values.name}
                options={FORM_UPDATE_NAME_OPTIONS}
                required
                onValueChange={(name) => updateValues({ name })}
              />
              <FormSelectField
                label={copy.fields.leadSource}
                value={values.leadSource}
                options={FORM_UPDATE_LEAD_SOURCE_OPTIONS}
                required
                onValueChange={(leadSource) => updateValues({ leadSource })}
              />
            </div>

            <FormSelectField
              label={copy.fields.agent}
              value={values.agent}
              options={FORM_UPDATE_AGENT_OPTIONS}
              onValueChange={(agent) => updateValues({ agent })}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormSelectField
                label={copy.fields.searchByPurpose}
                value={values.searchByPurpose}
                options={FORM_UPDATE_PURPOSE_OPTIONS}
                onValueChange={(searchByPurpose) => updateValues({ searchByPurpose })}
              />
              <SearchPropertyField
                label={copy.fields.searchProperty}
                value={values.searchProperty}
                onValueChange={(searchProperty) => updateValues({ searchProperty })}
              />
            </div>

            <section className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-neutral-900 font-inter">{copy.apiEndpointLabel}</h3>
                <a
                  href={copy.viewApiDocumentationHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#8B6E4E] transition-colors hover:text-[#7A6044]"
                >
                  <Eye className="size-4" aria-hidden />
                  {copy.viewApiDocumentationLabel}
                </a>
              </div>
              <CopyableReadonlyField
                value={values.apiEndpointUrl}
                copyLabel={copy.copyApiEndpointLabel}
                leadingIcon={<ExternalLink className="size-4" aria-hidden />}
              />
            </section>
          </div>
        </SideDrawerBody>

        <SideDrawerFooter>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className={cn(drawerFooterButtonClassName, "border-neutral-200 bg-white hover:bg-neutral-50")}
            onClick={handleClose}
          >
            {copy.cancelLabel}
          </Button>
          <Button
            type="button"
            size="sm"
            className={cn(drawerFooterButtonClassName, "bg-[#8B6E4E] text-white hover:bg-[#7A6044]")}
            onClick={handleSave}
          >
            {copy.saveLabel}
          </Button>
        </SideDrawerFooter>
      </SideDrawerContent>
    </SideDrawer>
  )
}

UpdateFormDrawer.displayName = "UpdateFormDrawer"
