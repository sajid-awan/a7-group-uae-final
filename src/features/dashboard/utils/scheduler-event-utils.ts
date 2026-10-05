import { format, isValid, parse, set } from "date-fns"

import type { CalendarEvent } from "@/features/dashboard/content/dashboard-content-types"

export const SCHEDULER_EVENT_COLORS = [
  "#3b82f6",
  "#0ea5e9",
  "#22c55e",
  "#14b8a6",
  "#8b5cf6",
  "#a855f7",
  "#f59e0b",
  "#d97706",
  "#ec4899",
  "#e11d48",
  "#10b981",
  "#6366f1",
] as const

const DEFAULT_TASK_FIELDS = {
  taskType: "meeting",
  priority: "medium",
  status: "in-progress",
  description: "",
  assignedTo: "muhammad-talal-khan",
} as const

export function createSchedulerEventDraft(start: Date, end: Date): CalendarEvent {
  return {
    id: crypto.randomUUID(),
    title: "",
    start: start.toISOString(),
    end: end.toISOString(),
    color: SCHEDULER_EVENT_COLORS[0],
    ...DEFAULT_TASK_FIELDS,
  }
}

export function createSchedulerEventForDay(date: Date): CalendarEvent {
  const start = set(date, { hours: 9, minutes: 0, seconds: 0, milliseconds: 0 })
  const end = set(date, { hours: 10, minutes: 0, seconds: 0, milliseconds: 0 })
  return createSchedulerEventDraft(start, end)
}

export function splitSchedulerEventTimes(startIso: string, endIso: string) {
  const start = new Date(startIso)
  const end = new Date(endIso)
  return {
    dueDate: format(start, "yyyy-MM-dd"),
    startTime: format(start, "HH:mm"),
    endTime: format(end, "HH:mm"),
  }
}

export function combineSchedulerDateTime(dueDate: string, time: string) {
  const [hours, minutes] = time.split(":").map(Number)
  const base = parse(dueDate, "yyyy-MM-dd", new Date())
  return set(base, {
    hours: hours ?? 0,
    minutes: minutes ?? 0,
    seconds: 0,
    milliseconds: 0,
  })
}

export function buildSchedulerEventRange(dueDate: string, startTime: string, endTime: string) {
  return {
    start: combineSchedulerDateTime(dueDate, startTime).toISOString(),
    end: combineSchedulerDateTime(dueDate, endTime).toISOString(),
  }
}

export function isExistingSchedulerEvent(events: CalendarEvent[], eventId: string) {
  return events.some((event) => event.id === eventId)
}

export const SCHEDULER_TIME_SLOTS = (() => {
  const slots: string[] = []
  for (let hour = 0; hour < 24; hour++) {
    for (const minute of [0, 30]) {
      slots.push(format(new Date(2000, 0, 1, hour, minute), "h:mm a"))
    }
  }
  return slots
})()

export function formatSchedulerDueDate(dueDate: string) {
  if (!dueDate) return "Select date"
  const parsed = parse(dueDate, "yyyy-MM-dd", new Date())
  if (!isValid(parsed)) return "Select date"
  return format(parsed, "yyyy-MM-dd")
}

export function formatSchedulerTimeValue(time: string) {
  if (!time) return "Select time"
  const [hours, minutes] = time.split(":").map(Number)
  return format(new Date(2000, 0, 1, hours ?? 0, minutes ?? 0), "h:mm a")
}

export function schedulerTimeLabelToValue(label: string) {
  return format(parse(label, "h:mm a", new Date(2000, 0, 1)), "HH:mm")
}

export function parseSchedulerDueDate(dueDate: string) {
  if (!dueDate) return undefined
  const parsed = parse(dueDate, "yyyy-MM-dd", new Date())
  return isValid(parsed) ? parsed : undefined
}

export function schedulerTimeValueToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number)
  return (hours ?? 0) * 60 + (minutes ?? 0)
}

export function getSchedulerEndTimeSlots(startTime: string) {
  const startMinutes = schedulerTimeValueToMinutes(startTime)
  return SCHEDULER_TIME_SLOTS.filter(
    (slot) => schedulerTimeValueToMinutes(schedulerTimeLabelToValue(slot)) > startMinutes
  )
}

/** @deprecated Use splitSchedulerEventTimes */
export function splitSchedulerDateTime(iso: string) {
  const date = new Date(iso)
  return {
    dueDate: format(date, "yyyy-MM-dd"),
    dueTime: format(date, "HH:mm"),
  }
}

/** @deprecated Use buildSchedulerEventRange */
export function applySchedulerDateTime(
  event: CalendarEvent,
  dueDate: string,
  dueTime: string
): CalendarEvent {
  const range = buildSchedulerEventRange(dueDate, dueTime, format(new Date(event.end), "HH:mm"))
  return { ...event, ...range }
}

/** @deprecated Use formatSchedulerTimeValue */
export function formatSchedulerDueTime(dueTime: string) {
  return formatSchedulerTimeValue(dueTime)
}
