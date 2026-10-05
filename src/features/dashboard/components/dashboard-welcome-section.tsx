"use client"

import { format, isToday, isValid, parse } from "date-fns"
import { CalendarDays } from "lucide-react"

import { DASHBOARD_HEADER_OUTLINE_BUTTON_CLASSNAME } from "@/features/dashboard/content/dashboard-view-mode"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"

const DATE_STORAGE_FORMAT = "yyyy-MM-dd"

function parseDateValue(value: string | undefined) {
  if (!value) return undefined
  const parsed = parse(value, DATE_STORAGE_FORMAT, new Date())
  return isValid(parsed) ? parsed : undefined
}

function formatWelcomeDateLabel(date: Date) {
  if (isToday(date)) return "Today"
  return format(date, "MMM d, yyyy")
}

export type DashboardWelcomeSectionProps = {
  userName: string
  subtitle?: string
  selectedDate?: string
  className?: string
}

export function DashboardWelcomeSection({
  userName,
  subtitle = "Track, manage your customers and properties.",
  selectedDate,
  className,
}: DashboardWelcomeSectionProps) {
  const dateLabel = formatWelcomeDateLabel(parseDateValue(selectedDate) ?? new Date())

  return (
    <section
      data-slot="dashboard-welcome-section"
      className={cn("flex flex-wrap items-start justify-between gap-4", className)}
      aria-labelledby="dashboard-welcome-heading"
    >
      <div>
        <h1
          id="dashboard-welcome-heading"
          className="font-inter text-2xl font-semibold text-black"
        >
          Welcome back, {userName}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>

      <Button
        type="button"
        variant="outline"
        size="sm"
        className={DASHBOARD_HEADER_OUTLINE_BUTTON_CLASSNAME}
        aria-label={`Selected date: ${dateLabel}`}
      >
        <CalendarDays className="size-4 text-muted-foreground" aria-hidden />
        {dateLabel}
      </Button>
    </section>
  )
}

DashboardWelcomeSection.displayName = "DashboardWelcomeSection"
