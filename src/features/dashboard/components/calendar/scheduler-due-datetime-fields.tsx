"use client"

import { useCallback, useState } from "react"
import { format } from "date-fns"
import { Clock } from "lucide-react"

import {
  formatSchedulerDueDate,
  formatSchedulerTimeValue,
  getSchedulerEndTimeSlots,
  parseSchedulerDueDate,
  SCHEDULER_TIME_SLOTS,
  schedulerTimeLabelToValue,
  schedulerTimeValueToMinutes,
} from "@/features/dashboard/utils/scheduler-event-utils"
import { CalendarDateIcon } from "@/shared/icons"
import { Button } from "@/shared/ui/button"
import { Calendar } from "@/shared/ui/calendar"
import { CalendarPickerPanel } from "@/shared/ui/calendar-panel"
import { Field, FieldContent, FieldLabel } from "@/shared/ui/field"
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover"
import { cn } from "@/shared/lib/cn"

export type SchedulerDueDateTimeFieldsProps = {
  dueDate: string
  startTime: string
  endTime: string
  onDueDateChange: (value: string) => void
  onStartTimeChange: (value: string) => void
  onEndTimeChange: (value: string) => void
}

function RequiredMark() {
  return <span className="text-destructive">*</span>
}

const calendarChrome = "border-0 bg-transparent p-0 shadow-none [--cell-size:2.25rem]"

const fieldTriggerClassName =
  "h-10 w-full justify-between rounded-lg border border-border bg-white px-3 text-sm font-normal text-a7-text-gray shadow-xs hover:bg-white"

type SchedulerTimePickerProps = {
  label: string
  value: string
  slots: readonly string[]
  onChange: (value: string) => void
}

function SchedulerTimePicker({ label, value, slots, onChange }: SchedulerTimePickerProps) {
  const [open, setOpen] = useState(false)
  const [pendingTime, setPendingTime] = useState("")

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      if (nextOpen) {
        const currentLabel = value ? formatSchedulerTimeValue(value) : slots[0]
        setPendingTime(slots.includes(currentLabel) ? currentLabel : slots[0])
      }
      setOpen(nextOpen)
    },
    [slots, value]
  )

  return (
    <Field orientation="vertical">
      <FieldLabel className="font-inter">
        {label} <RequiredMark />
      </FieldLabel>
      <FieldContent>
        <Popover open={open} onOpenChange={handleOpenChange} modal={false}>
          <PopoverTrigger asChild>
            <Button type="button" variant="outline" size="sm" className={fieldTriggerClassName}>
              <span>{formatSchedulerTimeValue(value)}</span>
              <Clock className="size-4 shrink-0 text-muted-foreground" aria-hidden />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="z-[120] w-auto p-0" align="start">
            <CalendarPickerPanel
              summary={pendingTime || undefined}
              onCancel={() => setOpen(false)}
              onDone={() => {
                if (pendingTime) {
                  onChange(schedulerTimeLabelToValue(pendingTime))
                }
                setOpen(false)
              }}
            >
              <div
                className="flex max-h-64 min-w-[9.5rem] flex-col gap-1.5 overflow-y-auto overscroll-contain pr-1"
                role="listbox"
                aria-label={label}
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
                    onClick={() => setPendingTime(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </CalendarPickerPanel>
          </PopoverContent>
        </Popover>
      </FieldContent>
    </Field>
  )
}

export function SchedulerDueDateTimeFields({
  dueDate,
  startTime,
  endTime,
  onDueDateChange,
  onStartTimeChange,
  onEndTimeChange,
}: SchedulerDueDateTimeFieldsProps) {
  const [dateOpen, setDateOpen] = useState(false)
  const [pendingDate, setPendingDate] = useState<Date | undefined>()
  const [calendarMonth, setCalendarMonth] = useState<Date>(() => new Date())

  const endTimeSlots = startTime ? getSchedulerEndTimeSlots(startTime) : [...SCHEDULER_TIME_SLOTS]

  const handleDateOpenChange = useCallback(
    (open: boolean) => {
      if (open) {
        const parsed = parseSchedulerDueDate(dueDate) ?? new Date()
        setPendingDate(parsed)
        setCalendarMonth(parsed)
      }
      setDateOpen(open)
    },
    [dueDate]
  )

  return (
    <div className="space-y-4">
      <Field orientation="vertical">
        <FieldLabel className="font-inter">
          Due Date <RequiredMark />
        </FieldLabel>
        <FieldContent>
          <Popover open={dateOpen} onOpenChange={handleDateOpenChange} modal={false}>
            <PopoverTrigger asChild>
              <Button type="button" variant="outline" size="sm" className={fieldTriggerClassName}>
                <span>{formatSchedulerDueDate(dueDate)}</span>
                <CalendarDateIcon className="size-4 shrink-0" aria-hidden />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="z-[120] w-auto p-0" align="start">
              <CalendarPickerPanel
                summary={pendingDate ? format(pendingDate, "MMM d, yyyy") : undefined}
                onCancel={() => setDateOpen(false)}
                onDone={() => {
                  if (pendingDate) {
                    onDueDateChange(format(pendingDate, "yyyy-MM-dd"))
                  }
                  setDateOpen(false)
                }}
              >
                <Calendar
                  mode="single"
                  selected={pendingDate}
                  onSelect={setPendingDate}
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
        </FieldContent>
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <SchedulerTimePicker
          label="From Time"
          value={startTime}
          slots={SCHEDULER_TIME_SLOTS}
          onChange={(nextStart) => {
            onStartTimeChange(nextStart)
            if (
              endTime &&
              schedulerTimeValueToMinutes(endTime) <= schedulerTimeValueToMinutes(nextStart)
            ) {
              const nextEndSlots = getSchedulerEndTimeSlots(nextStart)
              if (nextEndSlots[0]) {
                onEndTimeChange(schedulerTimeLabelToValue(nextEndSlots[0]))
              }
            }
          }}
        />
        <SchedulerTimePicker
          label="To Time"
          value={endTime}
          slots={endTimeSlots.length > 0 ? endTimeSlots : SCHEDULER_TIME_SLOTS}
          onChange={onEndTimeChange}
        />
      </div>
    </div>
  )
}

SchedulerDueDateTimeFields.displayName = "SchedulerDueDateTimeFields"
