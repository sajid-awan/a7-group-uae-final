"use client"

import { useCallback, useRef, useState } from "react"
import { format, isValid, parse } from "date-fns"

import { CalendarDateIcon } from "@/shared/icons"
import { cn } from "@/shared/lib/cn"
import { formControlTypographyClassName } from "@/shared/ui/form-control-styles"
import { Button } from "@/shared/ui/button"
import { Calendar } from "@/shared/ui/calendar"
import { CalendarPickerPanel } from "@/shared/ui/calendar-panel"
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover"

const calendarChrome = "border-0 bg-transparent p-0 shadow-none [--cell-size:2.25rem]"

const DATE_STORAGE_FORMAT = "yyyy-MM-dd"
const DATE_DISPLAY_FORMAT = "dd/MM/yyyy"

function parseDateValue(value: string | undefined) {
  if (!value) return undefined
  const parsed = parse(value, DATE_STORAGE_FORMAT, new Date())
  return isValid(parsed) ? parsed : undefined
}

function formatDateLabel(value: string | undefined, placeholder: string) {
  const parsed = parseDateValue(value)
  if (!parsed) return placeholder
  return format(parsed, DATE_DISPLAY_FORMAT)
}

export type DatePickerProps = {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  contentClassName?: string
  modal?: boolean
}

export function DatePicker({
  value = "",
  onChange,
  placeholder = "dd/mm/yyyy",
  className,
  disabled = false,
  contentClassName,
  modal = true,
}: DatePickerProps) {
  const [open, setOpen] = useState(false)
  const [pendingDate, setPendingDate] = useState<Date | undefined>()
  const [calendarMonth, setCalendarMonth] = useState<Date>(() => new Date())
  const pendingDateRef = useRef<Date | undefined>(pendingDate)
  pendingDateRef.current = pendingDate

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      if (nextOpen) {
        const parsed = parseDateValue(value)
        setPendingDate(parsed)
        pendingDateRef.current = parsed
        setCalendarMonth(parsed ?? new Date())
      }
      setOpen(nextOpen)
    },
    [value]
  )

  return (
    <Popover open={open} onOpenChange={handleOpenChange} modal={modal}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          disabled={disabled}
          data-slot="date-picker-trigger"
          data-testid="date-picker-trigger"
          className={cn(
            "h-11 w-full gap-2 rounded-xl border border-neutral-200 bg-white px-3 font-normal shadow-none hover:bg-white",
            formControlTypographyClassName,
            "has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
            value ? "text-foreground" : "text-muted-foreground",
            className
          )}
        >
          <span className="min-w-0 flex-1 truncate text-left">{formatDateLabel(value, placeholder)}</span>
          <CalendarDateIcon className="size-4 shrink-0 text-muted-foreground" aria-hidden />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn("z-[200] w-auto border-0 bg-transparent p-0 shadow-none", contentClassName)}
        align="start"
        sideOffset={8}
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <CalendarPickerPanel
          summary={pendingDate ? format(pendingDate, "MMM d, yyyy") : undefined}
          onCancel={() => setOpen(false)}
          onDone={() => {
            const date = pendingDateRef.current
            if (date) {
              onChange?.(format(date, DATE_STORAGE_FORMAT))
            }
            setOpen(false)
          }}
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
  )
}

DatePicker.displayName = "DatePicker"
