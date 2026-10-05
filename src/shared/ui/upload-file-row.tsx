import type { LucideIcon } from "lucide-react"
import { X } from "lucide-react"

import { cn } from "@/shared/lib/cn"

export type UploadFileRowProps = {
  name: string
  sizeLabel: string
  icon: LucideIcon
  iconClassName?: string
  progress?: number
  previewLabel?: string
  onRemove?: () => void
  isRemoving?: boolean
  isUploaded?: boolean
  className?: string
}

function getProgressWidthClass(progress?: number) {
  if (progress == null) return "w-upload-progress-0"

  const clamped = Math.max(0, Math.min(100, progress))
  const rounded = Math.round(clamped / 10) * 10
  return `w-upload-progress-${rounded}`
}

export function UploadFileRow({
  name,
  sizeLabel,
  icon: Icon,
  iconClassName = "text-a7-upload-row-icon",
  progress,
  previewLabel,
  onRemove,
  isRemoving = false,
  isUploaded = false,
  className,
}: UploadFileRowProps) {
  return (
    <div
      data-slot="upload-file-row"
      className={cn(
        "bg-a7-upload-row-surface rounded-xl border border-black/4 px-3 py-2.5 transition-colors hover:border-black/8",
        className
      )}
    >
      <div className="flex flex-wrap items-start gap-2 sm:flex-nowrap sm:items-center sm:gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <span
            className={cn(
              "inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-white ",
              isUploaded && "ring-a7-upload-row-accent/20"
            )}
          >
            <Icon
              className={cn(
                "size-4.5",
                isUploaded ? "text-a7-upload-row-accent" : iconClassName
              )}
              aria-hidden
            />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-a7-upload-row-name">
              {name}
            </p>
            {previewLabel && isUploaded ? (
              <p className="mt-0.5 truncate text-xs text-a7-upload-row-accent">
                {previewLabel}
              </p>
            ) : null}
          </div>
        </div>
        <div className="ml-auto flex shrink-0 items-center gap-3">
          <p className="text-xs font-medium tabular-nums text-a7-upload-row-size whitespace-nowrap">
            {sizeLabel}
          </p>
          <div className="flex items-center">
            {isRemoving ? (
              <span className="inline-flex size-6 items-center justify-center">
                <svg
                  className="size-4 animate-spin text-a7-upload-row-remove"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              </span>
            ) : (
              <button
                type="button"
                onClick={onRemove}
                className="inline-flex size-6 items-center justify-center rounded-md text-a7-upload-row-remove transition-colors hover:bg-black/5 hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-a7-upload-row-accent/30"
                aria-label={`Remove ${name}`}
              >
                <X className="size-4" />
              </button>
            )}
          </div>
        </div>
      </div>
      {progress !== undefined ? (
        <div className="bg-a7-upload-row-track mt-2 h-1 w-full overflow-hidden rounded-full">
          <div
            className={cn(
              "bg-a7-upload-row-accent h-full rounded-full transition-[width] duration-300",
              getProgressWidthClass(progress)
            )}
          />
        </div>
      ) : null}
    </div>
  )
}

UploadFileRow.displayName = "UploadFileRow"
