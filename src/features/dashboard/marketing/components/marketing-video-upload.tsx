"use client"

import { Upload } from "lucide-react"

import {
  MARKETING_UPLOAD_COPY,
  MARKETING_VIDEO_ACCEPT,
} from "../content/marketing-upload-content"
import { cn } from "@/shared/lib/cn"
import { FileUploadDropzone } from "@/shared/ui/file-upload-dropzone"

export type MarketingVideoUploadProps = {
  className?: string
  onFilesSelected?: (files: File[]) => void
}

export function MarketingVideoUpload({ className, onFilesSelected }: MarketingVideoUploadProps) {
  const copy = MARKETING_UPLOAD_COPY

  return (
    <div
      className={cn(
        "w-full min-w-0 rounded-3xl border border-neutral-200 bg-white p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] sm:p-5",
        className
      )}
    >
      <FileUploadDropzone
        variant="compact"
        icon={Upload}
        accept={MARKETING_VIDEO_ACCEPT}
        multiple
        onFilesSelected={onFilesSelected}
        title={copy.dropTitle}
        description={copy.dropSubtitle}
        actionLabel={copy.browseLabel}
        className="w-full min-w-0 border-neutral-200 bg-[#FAFAFB] px-4 py-8"
      />
      <p className="mt-3 text-center text-xs text-muted-foreground">{copy.supportedFormats}</p>
    </div>
  )
}

MarketingVideoUpload.displayName = "MarketingVideoUpload"
