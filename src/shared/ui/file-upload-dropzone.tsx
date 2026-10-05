"use client"

import * as React from "react"
import type { LucideIcon } from "lucide-react"
import { ImagePlus } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/cn"

const fileUploadDropzoneVariants = cva(
  "rounded-xl border border-dashed text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-[#C8CDD8] bg-white px-6 py-12",
        compact: "border-[#D6D8DF] bg-[#FAFAFB] p-6",
        minimal: "border-border bg-muted/30 px-4 py-8",
        emphasized: "border-primary/40 bg-primary/5 px-6 py-10",
        career: "rounded-lg border-[#CFCFD4] bg-transparent px-4 py-6",
        document: "rounded-2xl border border-neutral-200 border-solid bg-white px-4 py-6",
      },
      interactive: {
        true: "cursor-pointer hover:border-primary/50",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      interactive: true,
    },
  }
)

const dropzoneIconBoxVariants = cva("mx-auto flex items-center justify-center", {
  variants: {
    variant: {
      default: "mb-2 size-14 rounded-xl text-a7-text-gray",
      compact: "mb-3 size-11 rounded-full bg-[#EEEFF2] text-[#7F8794]",
      minimal: "mb-3 size-10 rounded-lg bg-muted text-muted-foreground",
      emphasized: "mb-4 size-12 rounded-xl bg-primary/10 text-primary",
      career: "hidden",
      document: "mb-3 text-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const dropzoneTitleVariants = cva("font-medium", {
  variants: {
    variant: {
      default: "text-lg text-[#313947]",
      compact: "text-sm text-a7-text-gray",
      minimal: "text-sm text-a7-text-gray",
      emphasized: "text-lg text-a7-text-gray",
      career: "text-xs leading-tight text-[#5F6368]",
      document: "text-sm font-medium text-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const dropzoneDescriptionVariants = cva("mt-1", {
  variants: {
    variant: {
      default: "text-sm text-[#7B8391]",
      compact: "text-xs text-[#7B8391]",
      minimal: "text-xs text-muted-foreground",
      emphasized: "text-sm text-muted-foreground",
      document: "text-xs text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const dropzoneIconSize: Record<NonNullable<VariantProps<typeof fileUploadDropzoneVariants>["variant"]>, string> = {
  default: "size-7",
  compact: "size-5",
  minimal: "size-4",
  emphasized: "size-6",
  career: "size-0",
  document: "size-8",
}

type NativeFileInputProps = Pick<
  React.ComponentProps<"input">,
  "accept" | "multiple" | "disabled" | "name" | "required" | "capture"
>

export type FileUploadDropzoneProps = VariantProps<typeof fileUploadDropzoneVariants> &
  NativeFileInputProps & {
    title?: React.ReactNode
    description?: string
    actionLabel?: string
    /** Called when user picks or drops files. */
    onFilesSelected?: (files: File[]) => void
    /** Optional extra handler after the built-in file dialog opens (button click). */
    onActionClick?: () => void
    showAction?: boolean
    icon?: LucideIcon
    className?: string
    /** Allow click + drag on the whole zone (default true). */
    enableDrop?: boolean
  }

export function FileUploadDropzone({
  title,
  description,
  actionLabel = "Select Files",
  onFilesSelected,
  onActionClick,
  showAction,
  icon: Icon = ImagePlus,
  className,
  variant = "default",
  enableDrop = true,
  accept,
  multiple = true,
  disabled,
  name,
  required,
  capture,
}: FileUploadDropzoneProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const resolvedVariant = variant ?? "default"
  const showActionButton = showAction ?? (resolvedVariant === "compact" || resolvedVariant === "document")
  const isInteractive = enableDrop && !disabled

  const emitFiles = React.useCallback(
    (fileList: FileList | null) => {
      if (!fileList?.length) return
      onFilesSelected?.(Array.from(fileList))
    },
    [onFilesSelected]
  )

  const openFileDialog = React.useCallback(() => {
    if (disabled) return
    inputRef.current?.click()
  }, [disabled])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    emitFiles(event.target.files)
    event.target.value = ""
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    event.stopPropagation()
    if (disabled) return
    emitFiles(event.dataTransfer.files)
  }

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
    event.stopPropagation()
  }

  return (
    <div
      data-slot="file-upload-dropzone"
      data-variant={resolvedVariant}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-disabled={disabled || undefined}
      className={cn(
        fileUploadDropzoneVariants({ variant: resolvedVariant, interactive: isInteractive }),
        className
      )}
      onClick={isInteractive ? openFileDialog : undefined}
      onKeyDown={
        isInteractive
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault()
                openFileDialog()
              }
            }
          : undefined
      }
      onDrop={isInteractive ? handleDrop : undefined}
      onDragOver={isInteractive ? handleDragOver : undefined}
    >
      <input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        required={required}
        capture={capture}
        className="sr-only"
        tabIndex={-1}
        aria-hidden
        aria-label="File input"
        onChange={handleInputChange}
      />

      <div className={dropzoneIconBoxVariants({ variant: resolvedVariant })}>
        <Icon className={dropzoneIconSize[resolvedVariant]} aria-hidden />
      </div>
      {title ? (
        <div className={dropzoneTitleVariants({ variant: resolvedVariant })}>
          {resolvedVariant === "career" ? (
            <>
              <span className="text-[#B07B2C]">{title}</span>{" "}
              {description ? <span>{description}</span> : null}
            </>
          ) : (
            title
          )}
        </div>
      ) : null}
      {description && resolvedVariant !== "career" ? (
        <p className={dropzoneDescriptionVariants({ variant: resolvedVariant })}>{description}</p>
      ) : null}
      {showActionButton && actionLabel ? (
        <Button
          type="button"
          variant={resolvedVariant === "emphasized" ? "default" : "outline"}
          size="sm"
          className={cn(
            "mt-4",
            resolvedVariant === "compact" && "rounded-full",
            resolvedVariant === "document" &&
              "h-11 min-h-11 rounded-xl border border-dashed border-neutral-200 bg-white px-4 text-sm font-medium text-a7-text-gray shadow-none hover:bg-white hover:text-a7-text-gray"
          )}
          disabled={disabled}
          onClick={(event) => {
            event.stopPropagation()
            openFileDialog()
            onActionClick?.()
          }}
        >
          {actionLabel}
        </Button>
      ) : null}
    </div>
  )
}

FileUploadDropzone.displayName = "FileUploadDropzone"

export {
  fileUploadDropzoneVariants,
  dropzoneIconBoxVariants,
  dropzoneTitleVariants,
  dropzoneDescriptionVariants,
}
