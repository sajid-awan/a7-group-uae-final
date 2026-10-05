"use client"

import { useCallback, useMemo, useState } from "react"
import { addWeeks, format, subWeeks } from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { CalendarEvent, DashboardCalendarContent } from "@/features/dashboard/content/dashboard-content-types"
import { CALENDAR_INITIAL_WEEK } from "@/features/dashboard/overview/content/dashboard-calendar-data"
import {
  createSchedulerEventDraft,
  isExistingSchedulerEvent,
} from "@/features/dashboard/utils/scheduler-event-utils"
import { SchedulerEventDrawer } from "./scheduler-event-drawer"
import { DashboardWeekScheduler } from "./dashboard-week-scheduler"
import { ChartCard } from "@/shared/ui/dashboard"

export type DashboardCalendarProps = DashboardCalendarContent & {
  className?: string
}

export function DashboardCalendar({ title, events: initialEvents, className }: DashboardCalendarProps) {
  const [events, setEvents] = useState(initialEvents)
  const [currentDate, setCurrentDate] = useState(() => CALENDAR_INITIAL_WEEK)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [draftEvent, setDraftEvent] = useState<CalendarEvent | null>(null)
  const [drawerMode, setDrawerMode] = useState<"add" | "edit">("add")

  const todayIso = useMemo(() => format(new Date(), "yyyy-MM-dd"), [])
  const displayTitle = format(currentDate, "MMMM yyyy")

  const handleWeekChange = useCallback((direction: "prev" | "next") => {
    setCurrentDate((date) => (direction === "prev" ? subWeeks(date, 1) : addWeeks(date, 1)))
  }, [])

  const openDrawer = useCallback((event: CalendarEvent, mode: "add" | "edit") => {
    setDraftEvent(event)
    setDrawerMode(mode)
    setDrawerOpen(true)
  }, [])

  const handleSelectSlot = useCallback(
    (start: Date, end: Date) => {
      openDrawer(createSchedulerEventDraft(start, end), "add")
    },
    [openDrawer]
  )

  const handleSelectEvent = useCallback(
    (event: CalendarEvent) => {
      openDrawer({ ...event }, "edit")
    },
    [openDrawer]
  )

  const handleSaveEvent = useCallback(
    (event: CalendarEvent) => {
      setEvents((current) => {
        if (isExistingSchedulerEvent(current, event.id)) {
          return current.map((item) => (item.id === event.id ? event : item))
        }
        return [...current, event]
      })
      setDrawerOpen(false)
      setDraftEvent(null)
    },
    []
  )

  const handleDeleteEvent = useCallback((eventId: string) => {
    setEvents((current) => current.filter((item) => item.id !== eventId))
    setDrawerOpen(false)
    setDraftEvent(null)
  }, [])

  return (
    <>
      <ChartCard
        title={displayTitle || title}
        showInfo
        showExport={false}
        showRefresh={false}
        className={className}
        contentClassName="p-0"
        action={
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="rounded-lg border border-border p-1.5 hover:bg-muted"
              aria-label="Previous week"
              onClick={() => handleWeekChange("prev")}
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              className="rounded-lg border border-border p-1.5 hover:bg-muted"
              aria-label="Next week"
              onClick={() => handleWeekChange("next")}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        }
      >
        <DashboardWeekScheduler
          date={currentDate}
          events={events}
          highlightDate={todayIso}
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
        />
      </ChartCard>

      <SchedulerEventDrawer
        key={draftEvent?.id}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        event={draftEvent}
        mode={drawerMode}
        onSave={handleSaveEvent}
        onDelete={drawerMode === "edit" ? handleDeleteEvent : undefined}
      />
    </>
  )
}

DashboardCalendar.displayName = "DashboardCalendar"
