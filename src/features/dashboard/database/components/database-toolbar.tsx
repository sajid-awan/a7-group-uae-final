"use client"

import { useCallback, useRef, useState } from "react"
import { format, isToday, isValid, parse } from "date-fns"
import { Archive, CalendarDays, Download, Upload, X } from "lucide-react"

import { DATABASE_PAGE_COPY } from "../content/database-content"
import { DashboardToolbarIconButton } from "@/features/dashboard/components/dashboard-toolbar-icon-button"
import {
  DASHBOARD_HEADER_ACTION_BUTTON_CLASSNAME,
  DASHBOARD_HEADER_OUTLINE_BUTTON_CLASSNAME,
} from "@/features/dashboard/content/dashboard-view-mode"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import { Calendar } from "@/shared/ui/calendar"
import { CalendarPickerPanel } from "@/shared/ui/calendar-panel"
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover"

const DATE_STORAGE_FORMAT = "yyyy-MM-dd"
const calendarChrome = "border-0 bg-transparent p-0 shadow-none [--cell-size:2.25rem]"

function parseDateValue(value: string | undefined) {
  if (!value) return undefined
  const parsed = parse(value, DATE_STORAGE_FORMAT, new Date())
  return isValid(parsed) ? parsed : undefined
}

function formatDatabaseDateLabel(value: string | undefined) {
  if (!value) return DATABASE_PAGE_COPY.monthFilterLabel

  const date = parseDateValue(value)
  if (!date) return DATABASE_PAGE_COPY.monthFilterLabel
  if (isToday(date)) return "Today"
  return format(date, "MMM d, yyyy")
}

export const DATABASE_ACTION_BUTTON_CLASSNAME = DASHBOARD_HEADER_ACTION_BUTTON_CLASSNAME

export const DATABASE_OUTLINE_ACTION_BUTTON_CLASSNAME = DASHBOARD_HEADER_OUTLINE_BUTTON_CLASSNAME

export type DatabaseToolbarActionsProps = {
  onExport?: () => void
  onArchive?: () => void
  className?: string
}

export function DatabaseToolbarActions({ onExport, onArchive, className }: DatabaseToolbarActionsProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <DashboardToolbarIconButton
        label={DATABASE_PAGE_COPY.archiveAriaLabel}
        onClick={onArchive}
      >
        <Archive className="size-3.5" />
      </DashboardToolbarIconButton>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className={DATABASE_OUTLINE_ACTION_BUTTON_CLASSNAME}
        onClick={onExport}
      >
        <Download className="size-4" aria-hidden />
        {DATABASE_PAGE_COPY.exportButtonLabel}
      </Button>
    </div>
  )
}

DatabaseToolbarActions.displayName = "DatabaseToolbarActions"

export type DatabaseHeaderActionsProps = {
  onUpload?: () => void
  selectedDate?: string
  onDateChange?: (value: string) => void
  className?: string
}

export function DatabaseHeaderActions({
  onUpload,
  selectedDate,
  onDateChange,
  className,
}: DatabaseHeaderActionsProps) {
  const [open, setOpen] = useState(false)
  const [internalDate, setInternalDate] = useState("")
  const [pendingDate, setPendingDate] = useState<Date | undefined>()
  const [calendarMonth, setCalendarMonth] = useState<Date>(() => new Date())
  const pendingDateRef = useRef<Date | undefined>(pendingDate)
  pendingDateRef.current = pendingDate

  const activeDateValue = selectedDate ?? internalDate
  const hasCustomSelection = Boolean(activeDateValue)
  const dateLabel = formatDatabaseDateLabel(activeDateValue)

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      if (nextOpen) {
        const parsed = parseDateValue(activeDateValue)
        setPendingDate(parsed)
        pendingDateRef.current = parsed
        setCalendarMonth(parsed ?? new Date())
      }
      setOpen(nextOpen)
    },
    [activeDateValue]
  )

  const commitDate = () => {
    const date = pendingDateRef.current
    if (!date) return

    const nextValue = format(date, DATE_STORAGE_FORMAT)
    if (selectedDate == null) {
      setInternalDate(nextValue)
    }
    onDateChange?.(nextValue)
    setOpen(false)
  }

  const clearDate = useCallback(() => {
    setOpen(false)
    if (selectedDate == null) {
      setInternalDate("")
    }
    onDateChange?.("")
  }, [onDateChange, selectedDate])

  return (
    <div className={cn("flex shrink-0 flex-wrap items-center gap-2", className)}>
      <div className="relative inline-flex">
        <Popover open={open} onOpenChange={handleOpenChange} modal={false}>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className={cn(DATABASE_OUTLINE_ACTION_BUTTON_CLASSNAME, hasCustomSelection && "pr-9")}
              aria-label={`Selected date: ${dateLabel}`}
            >
              <CalendarDays className="size-4 text-muted-foreground" aria-hidden />
              {dateLabel}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="z-[200] w-auto border-0 bg-transparent p-0 shadow-none"
            align="end"
            sideOffset={8}
            onOpenAutoFocus={(event) => event.preventDefault()}
          >
            <CalendarPickerPanel
              summary={pendingDate ? format(pendingDate, "MMM d, yyyy") : undefined}
              onCancel={() => setOpen(false)}
              onDone={commitDate}
            >
              <Calendar
                mode="single"
                selected={pendingDate}
                onSelect={(date) => {
                  setPendingDate(date)
                  pendingDateRef.current = date
                }}
                month={calendarMonth}
                onMonthChange={setCalendarMonth}
                captionLayout="dropdown"
                startMonth={new Date(2020, 0)}
                endMonth={new Date(2035, 11)}
                className={calendarChrome}
              />
            </CalendarPickerPanel>
          </PopoverContent>
        </Popover>
        {hasCustomSelection ? (
          <button
            type="button"
            aria-label="Clear date"
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-0.5 text-muted-foreground transition-colors hover:text-neutral-900"
            onMouseDown={(event) => event.preventDefault()}
            onClick={(event) => {
              event.stopPropagation()
              clearDate()
            }}
          >
            <X className="size-4" strokeWidth={2.25} aria-hidden />
          </button>
        ) : null}
      </div>
      <Button type="button" size="sm" className={DATABASE_ACTION_BUTTON_CLASSNAME} onClick={onUpload}>
        <Upload className="size-4" aria-hidden />
        {DATABASE_PAGE_COPY.uploadButtonLabel}
      </Button>
    </div>
  )
}

DatabaseHeaderActions.displayName = "DatabaseHeaderActions"
