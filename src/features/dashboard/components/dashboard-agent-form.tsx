"use client"

import { useEffect, useState } from "react"
import { FileImage, Upload } from "lucide-react"

import type { DashboardAgentFormValues } from "@/features/dashboard/agents/content/dashboard-agents-types"
import { getInitials } from "@/shared/lib/get-initials"
import { cn } from "@/shared/lib/cn"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"
import {
  FormInputField,
  FormPasswordField,
  FormTextareaField,
} from "@/shared/ui/form-field"
import { FileUploadDropzone } from "@/shared/ui/file-upload-dropzone"
import { PhoneField } from "@/shared/ui/phone-input"
import { UploadFileRow } from "@/shared/ui/upload-file-row"

export const emptyDashboardAgentFormValues: DashboardAgentFormValues = {
  fullName: "",
  email: "",
  mobile: "",
  whatsapp: "",
  brn: "",
  password: "",
  about: "",
}

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`
}

export type DashboardAgentFormMode = "create" | "edit"
export type DashboardAgentFormLayout = "page" | "embedded"

export type DashboardAgentFormProps = {
  mode: DashboardAgentFormMode
  layout?: DashboardAgentFormLayout
  initialValues?: Partial<DashboardAgentFormValues>
  initialPhotoUrl?: string | null
  className?: string
  onCancel: () => void
  onSubmit: (values: DashboardAgentFormValues) => void
  onDelete?: () => void
}

export function DashboardAgentForm({
  mode,
  layout = "page",
  initialValues,
  initialPhotoUrl = null,
  className,
  onCancel,
  onSubmit,
  onDelete,
}: DashboardAgentFormProps) {
  const [fullName, setFullName] = useState(initialValues?.fullName ?? "")
  const [email, setEmail] = useState(initialValues?.email ?? "")
  const [mobile, setMobile] = useState(initialValues?.mobile ?? "")
  const [whatsapp, setWhatsapp] = useState(initialValues?.whatsapp ?? "")
  const [brn, setBrn] = useState(initialValues?.brn ?? "")
  const [password, setPassword] = useState(initialValues?.password ?? "")
  const [about, setAbout] = useState(initialValues?.about ?? "")
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState<string | null>(initialPhotoUrl)

  useEffect(() => {
    return () => {
      if (photoPreviewUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(photoPreviewUrl)
      }
    }
  }, [photoPreviewUrl])

  const handlePhotoSelect = (files: File[]) => {
    const file = files[0]
    /* istanbul ignore next */
    if (!file) return

    if (photoPreviewUrl?.startsWith("blob:")) {
      URL.revokeObjectURL(photoPreviewUrl)
    }

    setPhotoFile(file)
    setPhotoPreviewUrl(URL.createObjectURL(file))
  }

  const handlePhotoRemove = () => {
    /* istanbul ignore else */
    if (photoPreviewUrl?.startsWith("blob:")) {
      URL.revokeObjectURL(photoPreviewUrl)
    }

    setPhotoFile(null)
    setPhotoPreviewUrl(initialPhotoUrl ?? null)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit({
      fullName,
      email,
      mobile,
      whatsapp,
      brn,
      password,
      about,
    })
  }

  const isEditMode = mode === "edit"
  const isPageLayout = layout === "page"
  const submitLabel = isEditMode ? "Save Changes" : "Add Agent"

  return (
    <>
      {isPageLayout ? (
        <div className="mb-5">
          <h1 className="font-inter text-2xl font-semibold text-black">
            {isEditMode ? "Edit Agent" : "Create New Agent"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">Lorem Ipsum is simply dummy text industry.</p>
        </div>
      ) : null}

      <div className={cn("overflow-hidden rounded-2xl border border-neutral-200 bg-white", className)}>
        <form onSubmit={handleSubmit}>
          {isPageLayout ? (
            <div className="space-y-1 border-b border-neutral-200 px-6 py-6">
              <h2 className="font-inter text-base font-semibold text-black">
                Basic Information &amp; Security Information
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Update your photo and personal details here.
              </p>
            </div>
          ) : null}

          <div className="space-y-6 px-6 py-6">
            <div className="grid gap-4 md:grid-cols-2">
              <FormInputField
                id="agent-full-name"
                label="Fullname"
                value={fullName}
                onValueChange={setFullName}
                placeholder="Oliva"
              />
              <FormInputField
                id="agent-email"
                label="Your Business Email"
                type="email"
                value={email}
                onValueChange={setEmail}
                placeholder="olivia@a7groupui.com"
              />
              <PhoneField
                id="agent-mobile"
                label="Mobile"
                value={mobile}
                onChange={setMobile}
                inputSize="sm"
                radius="lg"
                defaultCountry="AE"
              />
              <PhoneField
                id="agent-whatsapp"
                label="Whatsapp"
                value={whatsapp}
                onChange={setWhatsapp}
                inputSize="sm"
                radius="lg"
                defaultCountry="AE"
              />
              <FormInputField
                id="agent-brn"
                label="BRN"
                value={brn}
                onValueChange={setBrn}
                placeholder="Enter BRN"
              />
              <FormPasswordField
                id="agent-password"
                label="Password"
                value={password}
                onValueChange={setPassword}
                placeholder={isEditMode ? "Leave blank to keep current password" : "••••••••"}
              />
            </div>

            <FormTextareaField
              id="agent-about"
              label="About us"
              value={about}
              onValueChange={setAbout}
              placeholder="Enter a description..."
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <Avatar size="xl" className="size-16 shrink-0">
                {photoPreviewUrl ? <AvatarImage src={photoPreviewUrl} alt="Agent profile preview" /> : null}
                <AvatarFallback className="text-base">{getInitials(fullName || "Agent")}</AvatarFallback>
              </Avatar>

              <div className="w-full flex-1 space-y-3">
                <FileUploadDropzone
                  variant="compact"
                  icon={Upload}
                  multiple={false}
                  accept="image/*,.svg"
                  title="Click to upload or drag and drop"
                  description="SVG, PNG, JPG or GIF (max. 800x400px)"
                  onFilesSelected={handlePhotoSelect}
                />

                {photoFile ? (
                  <UploadFileRow
                    name={photoFile.name}
                    sizeLabel={formatFileSize(photoFile.size)}
                    icon={FileImage}
                    iconClassName="text-[#B68E45]"
                    previewLabel="Preview"
                    isUploaded
                    onRemove={handlePhotoRemove}
                  />
                ) : null}
              </div>
            </div>
          </div>

          <div
            className={cn(
              "flex flex-wrap gap-3 border-t border-border px-6 py-6",
              onDelete ? "items-center justify-between" : "justify-end"
            )}
          >
            {onDelete ? (
              <Button type="button" variant="destructive" size="sm" onClick={onDelete}>
                Delete
              </Button>
            ) : null}

            <div className="flex flex-wrap gap-3">
              <Button type="button" variant="outline" size="sm" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit" size="sm">
                {submitLabel}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

DashboardAgentForm.displayName = "DashboardAgentForm"

/** @deprecated Use `emptyDashboardAgentFormValues` */
export const emptyFormValues = emptyDashboardAgentFormValues
