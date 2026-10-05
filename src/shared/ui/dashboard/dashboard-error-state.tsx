"use client"

import { AlertCircle } from "lucide-react"

import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"

const DEFAULT_ERROR_TITLE = "Something went wrong"
const DEFAULT_ERROR_MESSAGE = "Unable to load data. Please try again."
const DEFAULT_RETRY_LABEL = "Try again"

export type DashboardErrorStateProps = {
  title?: string
  message?: string
  retryLabel?: string
  onRetry?: () => void
  className?: string
}

export function DashboardErrorState({
  title = DEFAULT_ERROR_TITLE,
  message = DEFAULT_ERROR_MESSAGE,
  retryLabel = DEFAULT_RETRY_LABEL,
  onRetry,
  className,
}: DashboardErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-red-200 bg-red-50 px-6 py-16 text-center",
        className
      )}
    >
      <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-red-100 text-red-600">
        <AlertCircle className="size-7" aria-hidden />
      </div>
      <h2 className="font-inter text-lg font-semibold text-red-900">{title}</h2>
      <p className="mt-2 max-w-md text-sm text-red-800">{message}</p>
      {onRetry ? (
        <Button type="button" variant="outline" size="sm" className="mt-4" onClick={onRetry}>
          {retryLabel}
        </Button>
      ) : null}
    </div>
  )
}

DashboardErrorState.displayName = "DashboardErrorState"
