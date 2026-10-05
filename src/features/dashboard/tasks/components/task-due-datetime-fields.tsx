"use client"

import { useCallback, useState } from "react"
import { format } from "date-fns"
import { Clock } from "lucide-react"

import {
  formatSchedulerDueDate,
  formatSchedulerTimeValue,
  parseSchedulerDueDate,
  SCHEDULER_TIME_SLOTS,
  schedulerTimeLabelToValue,
} from "@/features/dashboard/utils/scheduler-event-utils"
import { CalendarDateIcon } from "@/shared/icons"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import { Calendar } from "@/shared/ui/calendar"
import { CalendarPickerPanel } from "@/shared/ui/calendar-panel"
import { Field, FieldContent, FieldLabel } from "@/shared/ui/field"
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover"

const calendarChrome = "border-0 bg-transparent p-0 shadow-none [--cell-size:2.25rem]"

const fieldTriggerClassName =
  "h-11 min-h-11 w-full justify-between rounded-xl border border-neutral-200 bg-white px-3 text-sm font-normal text-foreground shadow-none hover:bg-white"

function RequiredMark() {
  return <span className="text-destructive"> *</span>
}

export type TaskDueDateFieldProps = {
  id?: string
  label?: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  className?: string
}

export function TaskDueDateField({
  id = "task-due-date",
  label = "Due Date",
  value,
  onChange,
  required,
  className,
}: TaskDueDateFieldProps) {
  const [open, setOpen] = useState(false)
  const [pendingDate, setPendingDate] = useState<Date | undefined>()
  const [calendarMonth, setCalendarMonth] = useState<Date>(() => new Date())

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      if (nextOpen) {
        const parsed = parseSchedulerDueDate(value) ?? new Date()
        setPendingDate(parsed)
        setCalendarMonth(parsed)
      }
      setOpen(nextOpen)
    },
    [value]
  )

  return (
    <Field orientation="vertical" className={className}>
      <FieldLabel className="font-inter" htmlFor={id}>
        {label}
        {required ? <RequiredMark /> : null}
      </FieldLabel>
      <FieldContent>
        <Popover open={open} onOpenChange={handleOpenChange} modal={false}>
          <PopoverTrigger asChild>
            <Button
              id={id}
              type="button"
              variant="outline"
              size="sm"
              className={fieldTriggerClassName}
            >
              <span>{formatSchedulerDueDate(value)}</span>
              <CalendarDateIcon className="size-4 shrink-0" aria-hidden />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="z-[120] w-auto p-0" align="start">
            <CalendarPickerPanel
              summary={pendingDate ? format(pendingDate, "yyyy-MM-dd") : undefined}
              onCancel={() => setOpen(false)}
              onDone={() => {
                if (pendingDate) {
                  onChange(format(pendingDate, "yyyy-MM-dd"))
                }
                setOpen(false)
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
  )
}

TaskDueDateField.displayName = "TaskDueDateField"

export type TaskDueTimeFieldProps = {
  id?: string
  label?: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  className?: string
}

export function TaskDueTimeField({
  id = "task-due-time",
  label = "Due Time",
  value,
  onChange,
  required,
  className,
}: TaskDueTimeFieldProps) {
  const [open, setOpen] = useState(false)
  const [pendingTime, setPendingTime] = useState("")

  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      if (nextOpen) {
        const currentLabel = value ? formatSchedulerTimeValue(value) : SCHEDULER_TIME_SLOTS[0]
        setPendingTime(
          SCHEDULER_TIME_SLOTS.includes(currentLabel) ? currentLabel : SCHEDULER_TIME_SLOTS[0]!
        )
      }
      setOpen(nextOpen)
    },
    [value]
  )

  return (
    <Field orientation="vertical" className={className}>
      <FieldLabel className="font-inter" htmlFor={id}>
        {label}
        {required ? <RequiredMark /> : null}
      </FieldLabel>
      <FieldContent>
        <Popover open={open} onOpenChange={handleOpenChange} modal={false}>
          <PopoverTrigger asChild>
            <Button
              id={id}
              type="button"
              variant="outline"
              size="sm"
              className={fieldTriggerClassName}
            >
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
                {SCHEDULER_TIME_SLOTS.map((slot) => (
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

TaskDueTimeField.displayName = "TaskDueTimeField"
