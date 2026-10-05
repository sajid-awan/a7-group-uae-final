"use client"

import { useCallback, useMemo } from "react"
import {
  Calendar,
  dateFnsLocalizer,
  type EventProps,
  type HeaderProps,
  type NavigateAction,
  type SlotInfo,
} from "react-big-calendar"
import { format, getDay, parse, startOfWeek } from "date-fns"
import { enUS } from "date-fns/locale"
import { cn } from "@/shared/lib/cn"

import "react-big-calendar/lib/css/react-big-calendar.css"
import type { CalendarEvent } from "@/features/dashboard/content/dashboard-content-types"

const locales = { "en-US": enUS }

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: (date: Date) => startOfWeek(date, { weekStartsOn: 1 }),
  getDay,
  locales,
})

type SchedulerEvent = Omit<CalendarEvent, "start" | "end"> & {
  start: Date
  end: Date
}

function hexToRgba(hex: string, alpha: number) {
  const normalized = hex.replace("#", "")
  const r = Number.parseInt(normalized.slice(0, 2), 16)
  const g = Number.parseInt(normalized.slice(2, 4), 16)
  const b = Number.parseInt(normalized.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function formatEventTime(start: Date, end: Date) {
  return `${format(start, "h:mm a")} - ${format(end, "h:mm a")}`
}

function SchedulerEventCard({ event }: EventProps<SchedulerEvent>) {
  return (
    <div
      className="flex h-full cursor-pointer flex-col justify-center overflow-hidden rounded-r-lg border-l-4 px-2 py-1"
      style={{
        borderLeftColor: event.color,
        backgroundColor: hexToRgba(event.color, 0.12),
      }}
    >
      <p className="truncate text-xs font-semibold text-foreground">{event.title}</p>
      <p className="truncate text-[10px] text-muted-foreground">
        {formatEventTime(event.start, event.end)}
      </p>
    </div>
  )
}

function WeekDayHeader({
  date,
  highlightDate,
}: HeaderProps & {
  highlightDate?: string
}) {
  const isHighlighted =
    highlightDate != null && format(date, "yyyy-MM-dd") === highlightDate

  return (
    <div
      className={cn(
        "font-inter flex w-full flex-col items-center justify-center rounded-lg px-2 py-2.5 text-center",
        isHighlighted
          ? "bg-primary text-primary-foreground"
          : "bg-transparent text-foreground"
      )}
    >
      <span
        className={cn(
          "text-[10px] font-medium uppercase tracking-wide",
          isHighlighted ? "text-primary-foreground/90" : "text-muted-foreground"
        )}
      >
        {format(date, "EEE")}
      </span>
      <span className="mt-0.5 text-sm font-semibold">{format(date, "d")}</span>
    </div>
  )
}

export type DashboardWeekSchedulerProps = {
  date: Date
  events: CalendarEvent[]
  /** ISO date (yyyy-MM-dd) — highlights today when viewing the current week */
  highlightDate?: string
  onSelectSlot?: (start: Date, end: Date) => void
  onSelectEvent?: (event: CalendarEvent) => void
  className?: string
}

export function DashboardWeekScheduler({
  date,
  events,
  highlightDate,
  onSelectSlot,
  onSelectEvent,
  className,
}: DashboardWeekSchedulerProps) {
  const eventsById = useMemo(
    () => new Map(events.map((event) => [event.id, event])),
    [events]
  )

  const schedulerEvents = useMemo<SchedulerEvent[]>(
    () =>
      events.map((event) => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      })),
    [events]
  )

  const handleSelectSlot = useCallback(
    (slotInfo: SlotInfo) => {
      onSelectSlot?.(slotInfo.start, slotInfo.end)
    },
    [onSelectSlot]
  )

  const handleSelectEvent = useCallback(
    (event: SchedulerEvent) => {
      const original = eventsById.get(event.id)
      if (original) onSelectEvent?.(original)
    },
    [eventsById, onSelectEvent]
  )

  return (
    <div className={cn("dashboard-scheduler", className)}>
      <Calendar
        localizer={localizer}
        events={schedulerEvents}
        date={date}
        selectable
        getDrilldownView={() => null}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        onNavigate={(_newDate: Date, _view: string, action: NavigateAction) => {
          if (action === "TODAY") return
        }}
        view="week"
        views={["week"]}
        toolbar={false}
        step={60}
        timeslots={1}
        min={new Date(1970, 0, 1, 0, 0, 0)}
        max={new Date(1970, 0, 1, 23, 59, 59)}
        scrollToTime={new Date(1970, 0, 1, 8, 0, 0)}
        dayLayoutAlgorithm="no-overlap"
        components={{
          event: SchedulerEventCard,
          week: {
            header: (props: HeaderProps) => (
              <WeekDayHeader {...props} highlightDate={highlightDate} />
            ),
          },
        }}
        formats={{
          timeGutterFormat: (value: Date, culture?: string, loc?: typeof localizer) =>
            loc ? loc.format(value, "h a", culture) : format(value, "h a"),
        }}
        eventPropGetter={() => ({
          style: {
            backgroundColor: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
          },
        })}
        style={{ height: 520 }}
      />
    </div>
  )
}

DashboardWeekScheduler.displayName = "DashboardWeekScheduler"
