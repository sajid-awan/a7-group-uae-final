"use client"

import { useCallback, useRef, useState } from "react"
import { format, parse } from "date-fns"

import { ClockIcon } from "@/shared/icons"
import { cn } from "@/shared/lib/cn"
import { formControlTypographyClassName } from "@/shared/ui/form-control-styles"
import { Button } from "@/shared/ui/button"
import { CalendarPickerPanel } from "@/shared/ui/calendar-panel"
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover"

const TIME_DISPLAY_FORMAT = "h:mm a"
const TIME_STORAGE_FORMAT = "HH:mm"

const TIME_SLOTS = (() => {
  const slots: string[] = []
  for (let hour = 0; hour < 24; hour++) {
    for (const minute of [0, 30]) {
      slots.push(format(new Date(2000, 0, 1, hour, minute), TIME_DISPLAY_FORMAT))
    }
  }
  return slots
})()

function formatTimeLabel(value: string | undefined, placeholder: string) {
  if (!value) return placeholder
  const [hours, minutes] = value.split(":").map(Number)
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return placeholder
  return format(new Date(2000, 0, 1, hours, minutes), TIME_DISPLAY_FORMAT)
}

function timeLabelToValue(label: string) {
  return format(parse(label, TIME_DISPLAY_FORMAT, new Date(2000, 0, 1)), TIME_STORAGE_FORMAT)
}

function resolvePendingTime(value: string) {
  if (!value) return TIME_SLOTS[0] ?? ""
  const label = formatTimeLabel(value, "")
  return label && TIME_SLOTS.includes(label) ? label : TIME_SLOTS[0] ?? ""
}

export type TimePickerProps = {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  contentClassName?: string
  modal?: boolean
  slots?: readonly string[]
}

export function TimePicker({
  value = "",
  onChange,
  placeholder = "Pick a Time",
  className,
  disabled = false,
  contentClassName,
  modal = true,
  slots = TIME_SLOTS,
}: TimePickerProps) {
  const [open, setOpen] = useState(false)
  const [pendingTime, setPendingTime] = useState("")
  const pendingTimeRef = useRef(pendingTime)
  pendingTimeRef.current = pendingTime

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      if (nextOpen) {
        const nextPending = resolvePendingTime(value)
        setPendingTime(nextPending)
        pendingTimeRef.current = nextPending
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
          data-slot="time-picker-trigger"
          data-testid="time-picker-trigger"
          className={cn(
            "h-11 w-full gap-2 rounded-xl border border-neutral-200 bg-white px-3 font-normal shadow-none hover:bg-white",
            formControlTypographyClassName,
            value ? "text-foreground" : "text-muted-foreground",
            className
          )}
        >
          <span className="min-w-0 flex-1 truncate text-left">{formatTimeLabel(value, placeholder)}</span>
          <ClockIcon className="size-4 shrink-0 text-muted-foreground" aria-hidden />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn("z-[200] w-auto border-0 bg-transparent p-0 shadow-none", contentClassName)}
        align="start"
        sideOffset={8}
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <CalendarPickerPanel
          summary={pendingTime || undefined}
          onCancel={() => setOpen(false)}
          onDone={() => {
            const time = pendingTimeRef.current
            if (time) {
              onChange?.(timeLabelToValue(time))
            }
            setOpen(false)
          }}
        >
          <div
            className="flex max-h-64 min-w-[9.5rem] flex-col gap-1.5 overflow-y-auto overscroll-contain pr-1"
            role="listbox"
            aria-label="Pick a time"
          >
            {slots.map((slot) => (
              <button
                key={slot}
                type="button"
                role="option"
                aria-selected={pendingTime === slot ? "true" : "false"}
                className={cn(
                  "rounded-full px-3 py-2 text-left text-sm transition-colors",
                  pendingTime === slot
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-a7-text-gray hover:bg-muted/80"
                )}
                onClick={() => {
                  setPendingTime(slot)
                  pendingTimeRef.current = slot
                }}
              >
                {slot}
              </button>
            ))}
          </div>
        </CalendarPickerPanel>
      </PopoverContent>
    </Popover>
  )
}

TimePicker.displayName = "TimePicker"
