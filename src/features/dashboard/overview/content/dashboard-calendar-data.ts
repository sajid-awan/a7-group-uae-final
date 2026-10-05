import { parse, set, startOfWeek } from "date-fns"

import type { CalendarEvent } from "@/features/dashboard/content/dashboard-content-types"

/** Default week shown when the dashboard scheduler loads. */
export const CALENDAR_INITIAL_WEEK = startOfWeek(parse("2026-06-23", "yyyy-MM-dd", new Date()), {
  weekStartsOn: 1,
})

type CalendarEventSeed = {
  id: string
  title: string
  date: string
  start: [number, number]
  end: [number, number]
  color: string
  taskType?: string
  priority?: string
  status?: string
  assignedTo?: string
  description?: string
}

function createCalendarEvent(seed: CalendarEventSeed): CalendarEvent {
  const base = parse(seed.date, "yyyy-MM-dd", new Date())

  return {
    id: seed.id,
    title: seed.title,
    start: set(base, {
      hours: seed.start[0],
      minutes: seed.start[1],
      seconds: 0,
      milliseconds: 0,
    }).toISOString(),
    end: set(base, {
      hours: seed.end[0],
      minutes: seed.end[1],
      seconds: 0,
      milliseconds: 0,
    }).toISOString(),
    color: seed.color,
    taskType: seed.taskType ?? "meeting",
    priority: seed.priority ?? "medium",
    status: seed.status ?? "in-progress",
    assignedTo: seed.assignedTo ?? "muhammad-talal-khan",
    description: seed.description,
  }
}

const calendarEventSeeds: CalendarEventSeed[] = [
  // June 2026 — early month
  { id: "jun-01", title: "Q2 Pipeline Review", date: "2026-06-02", start: [9, 0], end: [10, 30], color: "#3b82f6" },
  { id: "jun-02", title: "New Lead Intake", date: "2026-06-03", start: [11, 0], end: [12, 0], color: "#0ea5e9" },
  { id: "jun-03", title: "Marina Tower Viewing", date: "2026-06-04", start: [14, 0], end: [15, 30], color: "#f59e0b", taskType: "viewing" },
  { id: "jun-04", title: "Agent Onboarding", date: "2026-06-05", start: [10, 0], end: [11, 0], color: "#8b5cf6" },
  { id: "jun-05", title: "Weekend Open House Prep", date: "2026-06-06", start: [15, 0], end: [16, 0], color: "#10b981" },

  { id: "jun-06", title: "Client Follow-up — Palm", date: "2026-06-09", start: [9, 30], end: [10, 30], color: "#14b8a6" },
  { id: "jun-07", title: "Mortgage Consultation", date: "2026-06-10", start: [13, 0], end: [14, 0], color: "#6366f1" },
  { id: "jun-08", title: "Listing Photo Shoot", date: "2026-06-11", start: [8, 30], end: [10, 0], color: "#eab308", taskType: "task" },
  { id: "jun-09", title: "Downtown Investor Call", date: "2026-06-12", start: [16, 0], end: [17, 0], color: "#e11d48", priority: "high" },
  { id: "jun-10", title: "Team Training", date: "2026-06-13", start: [11, 0], end: [12, 30], color: "#4f46e5" },

  { id: "jun-11", title: "Villa Inspection — Arabian Ranches", date: "2026-06-16", start: [10, 0], end: [11, 30], color: "#f97316", taskType: "viewing" },
  { id: "jun-12", title: "Contract Review", date: "2026-06-17", start: [14, 0], end: [15, 0], color: "#ec4899" },
  { id: "jun-13", title: "Bayut Listing Sync", date: "2026-06-18", start: [9, 0], end: [9, 45], color: "#22c55e", taskType: "task" },
  { id: "jun-14", title: "Buyer Consultation", date: "2026-06-19", start: [12, 0], end: [13, 0], color: "#a855f7" },
  { id: "jun-15", title: "JLT Apartment Viewing", date: "2026-06-21", start: [15, 0], end: [16, 30], color: "#d97706", taskType: "viewing" },

  // June 2026 — anchor week (Jun 22–28)
  { id: "1", title: "Team Meeting", date: "2026-06-22", start: [9, 0], end: [10, 30], color: "#3b82f6" },
  { id: "2", title: "Morning Standup", date: "2026-06-22", start: [8, 0], end: [8, 30], color: "#0ea5e9" },
  { id: "3", title: "Lunch Break", date: "2026-06-22", start: [12, 0], end: [13, 0], color: "#22c55e" },
  { id: "4", title: "Client Call — Al Noor", date: "2026-06-22", start: [14, 0], end: [15, 0], color: "#14b8a6" },
  { id: "5", title: "Design Review", date: "2026-06-23", start: [10, 0], end: [12, 0], color: "#8b5cf6" },
  { id: "6", title: "Lead Review Session", date: "2026-06-23", start: [14, 0], end: [15, 30], color: "#a855f7" },
  { id: "7", title: "Property Viewing — Marina", date: "2026-06-24", start: [11, 0], end: [12, 30], color: "#f59e0b", taskType: "viewing" },
  { id: "8", title: "Follow-up: Villa Inquiry", date: "2026-06-24", start: [15, 0], end: [16, 0], color: "#eab308" },
  { id: "9", title: "Doctor Appointment", date: "2026-06-25", start: [11, 0], end: [12, 0], color: "#d97706" },
  { id: "10", title: "Site Visit — Downtown", date: "2026-06-25", start: [14, 0], end: [16, 0], color: "#f97316", taskType: "viewing" },
  { id: "11", title: "Project Deadline", date: "2026-06-26", start: [13, 0], end: [15, 0], color: "#ec4899", priority: "high" },
  { id: "12", title: "Contract Signing", date: "2026-06-26", start: [10, 0], end: [11, 30], color: "#e11d48" },
  { id: "13", title: "Open House — JVC", date: "2026-06-27", start: [10, 0], end: [13, 0], color: "#10b981" },
  { id: "14", title: "Broker Sync", date: "2026-06-27", start: [15, 0], end: [16, 0], color: "#059669" },
  { id: "15", title: "Family Dinner", date: "2026-06-28", start: [18, 0], end: [20, 0], color: "#6366f1" },
  { id: "16", title: "Weekly Planning", date: "2026-06-28", start: [9, 0], end: [10, 0], color: "#4f46e5" },

  { id: "jun-16", title: "Month-end Reporting", date: "2026-06-29", start: [9, 0], end: [10, 30], color: "#3b82f6", taskType: "task" },
  { id: "jun-17", title: "Handover Walkthrough", date: "2026-06-30", start: [11, 0], end: [12, 30], color: "#14b8a6", taskType: "viewing" },

  // July 2026
  { id: "jul-01", title: "July Kickoff Meeting", date: "2026-07-01", start: [9, 0], end: [10, 0], color: "#3b82f6" },
  { id: "jul-02", title: "Creek Harbour Viewing", date: "2026-07-02", start: [14, 0], end: [15, 30], color: "#f59e0b", taskType: "viewing" },
  { id: "jul-03", title: "Portal Performance Review", date: "2026-07-03", start: [10, 30], end: [11, 30], color: "#22c55e" },

  { id: "jul-04", title: "Investor Roadshow", date: "2026-07-06", start: [13, 0], end: [14, 30], color: "#8b5cf6" },
  { id: "jul-05", title: "Tenant Screening Call", date: "2026-07-07", start: [9, 30], end: [10, 15], color: "#0ea5e9" },
  { id: "jul-06", title: "Business Bay Listing Launch", date: "2026-07-08", start: [11, 0], end: [12, 0], color: "#10b981", taskType: "task" },
  { id: "jul-07", title: "Off-plan Presentation", date: "2026-07-09", start: [15, 0], end: [16, 30], color: "#a855f7" },
  { id: "jul-08", title: "Saturday Property Tour", date: "2026-07-11", start: [10, 0], end: [12, 0], color: "#f97316", taskType: "viewing" },

  { id: "jul-09", title: "CRM Cleanup Session", date: "2026-07-13", start: [9, 0], end: [10, 0], color: "#6366f1", taskType: "task" },
  { id: "jul-10", title: "Seller Valuation Visit", date: "2026-07-14", start: [12, 0], end: [13, 0], color: "#d97706" },
  { id: "jul-11", title: "Mid-month Sales Review", date: "2026-07-15", start: [16, 0], end: [17, 0], color: "#ec4899" },
  { id: "jul-12", title: "Dubai Hills Viewing", date: "2026-07-17", start: [11, 0], end: [12, 30], color: "#eab308", taskType: "viewing" },
  { id: "jul-13", title: "Marketing Campaign Sync", date: "2026-07-18", start: [14, 0], end: [15, 0], color: "#4f46e5" },

  { id: "jul-14", title: "Lease Renewal Meeting", date: "2026-07-20", start: [10, 0], end: [11, 0], color: "#14b8a6" },
  { id: "jul-15", title: "Community Tour — MBR City", date: "2026-07-22", start: [9, 30], end: [11, 0], color: "#f59e0b", taskType: "viewing" },
  { id: "jul-16", title: "Compliance Workshop", date: "2026-07-23", start: [13, 30], end: [15, 0], color: "#e11d48" },
  { id: "jul-17", title: "Referral Partner Lunch", date: "2026-07-24", start: [12, 30], end: [13, 30], color: "#059669" },
  { id: "jul-18", title: "Luxury Villa Showcase", date: "2026-07-25", start: [15, 0], end: [17, 0], color: "#8b5cf6", taskType: "viewing" },

  { id: "jul-19", title: "Quarterly Forecast Review", date: "2026-07-27", start: [9, 0], end: [10, 30], color: "#3b82f6", priority: "high" },
  { id: "jul-20", title: "Handover Keys — Marina", date: "2026-07-28", start: [11, 0], end: [12, 0], color: "#10b981" },
  { id: "jul-21", title: "Client Appreciation Event", date: "2026-07-29", start: [18, 0], end: [20, 0], color: "#6366f1" },
  { id: "jul-22", title: "July Pipeline Closeout", date: "2026-07-30", start: [14, 0], end: [15, 30], color: "#ec4899", taskType: "task" },
  { id: "jul-23", title: "August Planning Session", date: "2026-07-31", start: [10, 0], end: [11, 30], color: "#4f46e5" },
]

export const calendarEvents: CalendarEvent[] = calendarEventSeeds.map(createCalendarEvent)
