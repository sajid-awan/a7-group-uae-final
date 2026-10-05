"use client"

import { useCallback, useRef, useState } from "react"
import { addMonths, format, isValid, parse, startOfMonth } from "date-fns"
import { CalendarDays, ChevronDown } from "lucide-react"
import type { DateRange } from "react-day-picker"

import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import { Calendar } from "@/shared/ui/calendar"
import { CalendarPickerPanel } from "@/shared/ui/calendar-panel"
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover"

const calendarChrome = "border-0 bg-transparent p-0 shadow-none [--cell-size:2.25rem]"

const DATE_STORAGE_FORMAT = "yyyy-MM-dd"
const DATE_RANGE_DISPLAY_FORMAT = "dd MMM yyyy"

export type DateRangeValue = {
  from: string
  to: string
}

function parseDateValue(value: string | undefined) {
  if (!value) return undefined
  const parsed = parse(value, DATE_STORAGE_FORMAT, new Date())
  return isValid(parsed) ? parsed : undefined
}

export function formatDateRangeLabel(
  value: DateRangeValue | undefined,
  placeholder = "Select date range"
) {
  const from = parseDateValue(value?.from)
  const to = parseDateValue(value?.to)
  if (!from || !to) return placeholder
  return `${format(from, DATE_RANGE_DISPLAY_FORMAT)} - ${format(to, DATE_RANGE_DISPLAY_FORMAT)}`
}

function toDateRange(value: DateRangeValue | undefined): DateRange | undefined {
  const from = parseDateValue(value?.from)
  const to = parseDateValue(value?.to)
  if (!from && !to) return undefined
  return { from, to }
}

function toStoredRange(range: DateRange | undefined): DateRangeValue | null {
  const from = range?.from
  const to = range?.to ?? range?.from
  if (!from || !to) return null
  return {
    from: format(from, DATE_STORAGE_FORMAT),
    to: format(to, DATE_STORAGE_FORMAT),
  }
}

export type CalendarMonths = {
  startMonth: Date
  endMonth: Date
}

/** Initializes independent left/right calendar months from the current range. */
export function getInitialCalendarMonths(
  range: DateRange | undefined,
  fallback = new Date()
): CalendarMonths {
  const anchor = startOfMonth(fallback)

  if (!range?.from && !range?.to) {
    return { startMonth: anchor, endMonth: addMonths(anchor, 1) }
  }

  const startMonth = startOfMonth(range.from ?? range.to ?? fallback)

  if (range.from && range.to) {
    return {
      startMonth,
      endMonth: startOfMonth(range.to),
    }
  }

  return {
    startMonth,
    endMonth: addMonths(startMonth, 1),
  }
}

export type DateRangePickerProps = {
  value: DateRangeValue
  onChange?: (value: DateRangeValue) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  contentClassName?: string
  modal?: boolean
}

export function DateRangePicker({
  value,
  onChange,
  placeholder = "Select date range",
  className,
  disabled = false,
  contentClassName,
  modal = false,
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false)
  const [pendingRange, setPendingRange] = useState<DateRange | undefined>()
  const [startMonth, setStartMonth] = useState<Date>(() => new Date())
  const [endMonth, setEndMonth] = useState<Date>(() => addMonths(new Date(), 1))
  const pendingRangeRef = useRef<DateRange | undefined>(pendingRange)
  pendingRangeRef.current = pendingRange

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      if (nextOpen) {
        const parsed = toDateRange(value)
        const months = getInitialCalendarMonths(parsed)
        setPendingRange(parsed)
        pendingRangeRef.current = parsed
        setStartMonth(months.startMonth)
        setEndMonth(months.endMonth)
      }
      setOpen(nextOpen)
    },
    [value]
  )

  const handleRangeSelect = useCallback((range: DateRange | undefined) => {
    setPendingRange(range)
    pendingRangeRef.current = range
  }, [])

  const calendarProps = {
    mode: "range" as const,
    selected: pendingRange,
    onSelect: handleRangeSelect,
    captionLayout: "dropdown" as const,
    startMonth: new Date(2020, 0),
    endMonth: new Date(2035, 11),
    numberOfMonths: 1,
    className: calendarChrome,
  }

  const commitPendingRange = useCallback(() => {
    const stored = toStoredRange(pendingRangeRef.current)
    if (stored) {
      onChange?.(stored)
    }
    return stored
  }, [onChange])

  const pendingSummary =
    pendingRange?.from && pendingRange?.to
      ? `${format(pendingRange.from, "MMM d, yyyy")} - ${format(pendingRange.to, "MMM d, yyyy")}`
      : pendingRange?.from
        ? format(pendingRange.from, "MMM d, yyyy")
        : undefined

  return (
    <Popover open={open} onOpenChange={handleOpenChange} modal={modal}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          disabled={disabled}
          data-slot="date-range-picker-trigger"
          data-testid="date-range-picker-trigger"
          aria-label={placeholder}
          className={cn(
            "h-10 min-h-10 max-h-10 w-full justify-between gap-3 rounded-lg border border-neutral-200 bg-white px-3 text-sm font-normal shadow-none hover:bg-white sm:w-auto",
            value.from && value.to ? "text-neutral-900" : "text-muted-foreground",
            className
          )}
        >
          <span className="flex min-w-0 items-center gap-2">
            <CalendarDays className="size-4 shrink-0 text-muted-foreground" aria-hidden />
            <span className="truncate">{formatDateRangeLabel(value, placeholder)}</span>
          </span>
          <ChevronDown className="size-4 shrink-0 text-muted-foreground" aria-hidden />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn("z-[200] w-auto border-0 bg-transparent p-0 shadow-none", contentClassName)}
        align="start"
        sideOffset={8}
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <CalendarPickerPanel
          summary={pendingSummary}
          onCancel={() => {
            const parsed = toDateRange(value)
            setPendingRange(parsed)
            pendingRangeRef.current = parsed
            setOpen(false)
          }}
          onDone={() => {
            commitPendingRange()
            setOpen(false)
          }}
        >
          <div className="flex flex-col gap-4 md:flex-row">
            <Calendar {...calendarProps} month={startMonth} onMonthChange={setStartMonth} />
            <Calendar {...calendarProps} month={endMonth} onMonthChange={setEndMonth} />
          </div>
        </CalendarPickerPanel>
      </PopoverContent>
    </Popover>
  )
}

DateRangePicker.displayName = "DateRangePicker"
