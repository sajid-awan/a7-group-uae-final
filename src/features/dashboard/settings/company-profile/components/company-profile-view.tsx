"use client"

import { Building2, Globe, Upload } from "lucide-react"
import { useEffect, useState } from "react"

import {
  COMPANY_PROFILE_PAGE_COPY,
  createCompanyProfileForm,
} from "../content/company-profile-content"
import type { CompanyProfileFormValues } from "../content/company-profile-types"
import { CompanyProfileSection } from "./company-profile-section"
import { cn } from "@/shared/lib/cn"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"
import {
  FormDateField,
  FormInputField,
  FormTextareaField,
} from "@/shared/ui/form-field"
import { FileUploadDropzone } from "@/shared/ui/file-upload-dropzone"

export type CompanyProfileViewProps = {
  initialValues?: Partial<CompanyProfileFormValues>
  className?: string
  onSave?: (values: CompanyProfileFormValues) => void
}

export function CompanyProfileView({
  initialValues,
  className,
  onSave,
}: CompanyProfileViewProps) {
  const [form, setForm] = useState<CompanyProfileFormValues>(() => createCompanyProfileForm(initialValues))
  const [savedForm, setSavedForm] = useState<CompanyProfileFormValues>(() => createCompanyProfileForm(initialValues))
  const [logoPreviewUrl, setLogoPreviewUrl] = useState<string | null>(null)
  const copy = COMPANY_PROFILE_PAGE_COPY

  useEffect(() => {
    return () => {
      if (logoPreviewUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(logoPreviewUrl)
      }
    }
  }, [logoPreviewUrl])

  const updateForm = (patch: Partial<CompanyProfileFormValues>) => {
    setForm((current) => ({ ...current, ...patch }))
  }

  const handleLogoSelect = (files: File[]) => {
    const file = files[0]
    if (!file) return

    if (logoPreviewUrl?.startsWith("blob:")) {
      URL.revokeObjectURL(logoPreviewUrl)
    }

    setLogoPreviewUrl(URL.createObjectURL(file))
  }

  const handleCancel = () => {
    setForm(savedForm)
    if (logoPreviewUrl?.startsWith("blob:")) {
      URL.revokeObjectURL(logoPreviewUrl)
    }
    setLogoPreviewUrl(null)
  }

  const handleSave = () => {
    setSavedForm(form)
    onSave?.(form)
  }

  return (
    <div className={cn("space-y-6", className)}>
      <CompanyProfileSection title={copy.companyDetailsTitle} subtitle={copy.companyDetailsSubtitle}>
        <div className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <Avatar size="xl" className="size-16 shrink-0 rounded-full bg-[#2563EB]">
              {logoPreviewUrl ? <AvatarImage src={logoPreviewUrl} alt="Company logo preview" /> : null}
              <AvatarFallback className="rounded-full bg-[#2563EB] text-white">
                <Building2 className="size-7" aria-hidden />
              </AvatarFallback>
            </Avatar>

            <div className="w-full flex-1">
              <FileUploadDropzone
                variant="compact"
                icon={Upload}
                multiple={false}
                accept="image/*,.svg"
                title={
                  <>
                    <span className="text-primary">{copy.uploadTitle}</span> or drag and drop
                  </>
                }
                description={copy.uploadDescription}
                onFilesSelected={handleLogoSelect}
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FormInputField
              label="Name"
              value={form.name}
              onValueChange={(name) => updateForm({ name })}
              placeholder="Enter"
            />
            <FormInputField
              label="Mobile"
              value={form.mobile}
              onValueChange={(mobile) => updateForm({ mobile })}
              placeholder="Enter"
            />
          </div>

          <FormInputField
            label="Website"
            value={form.website}
            onValueChange={(website) => updateForm({ website })}
            placeholder="Enter"
            icon={<Globe className="size-4" aria-hidden />}
            iconPosition="start"
          />

          <FormInputField
            label="Address"
            value={form.address}
            onValueChange={(address) => updateForm({ address })}
            placeholder="Enter"
          />

          <FormTextareaField
            label="Description"
            value={form.description}
            onValueChange={(description) => updateForm({ description })}
            placeholder="Enter a description..."
          />
        </div>
      </CompanyProfileSection>

      <CompanyProfileSection
        title={copy.companyProfileTitle}
        subtitle={copy.companyProfileSubtitle}
        footer={
          <>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="rounded-xl border-neutral-200 bg-white px-5 shadow-none hover:bg-neutral-50"
              onClick={handleCancel}
            >
              {copy.cancelLabel}
            </Button>
            <Button type="button" size="sm" className="rounded-xl px-5 shadow-none" onClick={handleSave}>
              {copy.saveLabel}
            </Button>
          </>
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FormInputField
            label="Email"
            type="email"
            value={form.email}
            onValueChange={(email) => updateForm({ email })}
            placeholder="Enter"
          />
          <FormInputField
            label="Secondary Contact No"
            value={form.secondaryContact}
            onValueChange={(secondaryContact) => updateForm({ secondaryContact })}
            placeholder="Enter"
          />
          <FormInputField
            label="ORN"
            value={form.orn}
            onValueChange={(orn) => updateForm({ orn })}
            placeholder="Enter"
          />
          <FormDateField
            label="RERA Expiry"
            value={form.reraExpiry}
            onValueChange={(reraExpiry) => updateForm({ reraExpiry })}
            placeholder="dd/mm/yyyy"
          />
          <FormInputField
            label="Trade License No"
            value={form.tradeLicenseNo}
            onValueChange={(tradeLicenseNo) => updateForm({ tradeLicenseNo })}
            placeholder="Enter"
          />
          <FormDateField
            label="Trade License Expiry"
            value={form.tradeLicenseExpiry}
            onValueChange={(tradeLicenseExpiry) => updateForm({ tradeLicenseExpiry })}
            placeholder="dd/mm/yyyy"
          />
        </div>
      </CompanyProfileSection>
    </div>
  )
}

CompanyProfileView.displayName = "CompanyProfileView"
