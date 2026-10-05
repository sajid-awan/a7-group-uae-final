"use client"

import * as React from "react"
import type { DateRange } from "react-day-picker"
import {
  endOfDay,
  endOfMonth,
  endOfWeek,
  format,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subDays,
} from "date-fns"

import { Calendar } from "@/shared/ui/calendar"
import { CalendarPickerPanel } from "@/shared/ui/calendar-panel"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"
import { cn } from "@/shared/lib/cn"

/** Styling reference: warm gold selection, beige range strip, white card + Cancel / Done. */
const calendarChrome = "border-0 bg-transparent p-0 shadow-none [--cell-size:2.25rem]"

const TIME_SLOTS = (() => {
  const out: string[] = []
  for (let h = 8; h <= 17; h++) {
    for (const m of [0, 30]) {
      if (h === 17 && m > 0) break
      out.push(format(new Date(2000, 0, 1, h, m), "h:mm a"))
    }
  }
  return out
})()

type PresetId = "today" | "yesterday" | "lastWeek" | "last7" | "thisMonth" | "last30" | "custom"

function applyPreset(id: PresetId, anchor: Date): DateRange {
  const singleDay = (d: Date) => ({ from: startOfDay(d), to: endOfDay(d) })
  switch (id) {
    case "today":
      return singleDay(anchor)
    case "yesterday":
      return singleDay(subDays(anchor, 1))
    case "lastWeek": {
      const ref = subDays(anchor, 7)
      return {
        from: startOfDay(startOfWeek(ref, { weekStartsOn: 0 })),
        to: endOfDay(endOfWeek(ref, { weekStartsOn: 0 })),
      }
    }
    case "last7":
      return { from: startOfDay(subDays(anchor, 6)), to: endOfDay(anchor) }
    case "thisMonth":
      return { from: startOfDay(startOfMonth(anchor)), to: endOfDay(endOfMonth(anchor)) }
    case "last30":
      return { from: startOfDay(subDays(anchor, 29)), to: endOfDay(anchor) }
    case "custom":
    default:
      return { from: new Date(2026, 10, 10), to: new Date(2026, 10, 18) }
  }
}

function formatRangeLabel(range: DateRange | undefined) {
  if (!range?.from) return null
  if (!range.to) return format(range.from, "MMM d, yyyy")
  return `${format(range.from, "MMM d, yyyy")} - ${format(range.to, "MMM d, yyyy")}`
}

const presetNav: { id: PresetId; label: string }[] = [
  { id: "today", label: "Today" },
  { id: "yesterday", label: "Yesterday" },
  { id: "lastWeek", label: "Last Week" },
  { id: "last7", label: "Last 7 Days" },
  { id: "thisMonth", label: "This Month" },
  { id: "last30", label: "Last 30 Days" },
  { id: "custom", label: "Custom range" },
]

export default function CalendarDocsPage() {
  const [anchor] = React.useState(() => new Date(2026, 10, 15))

  const [singleDropdown, setSingleDropdown] = React.useState<Date | undefined>(new Date(2026, 10, 10))
  const [labelRange, setLabelRange] = React.useState<DateRange | undefined>({
    from: new Date(2026, 10, 8),
    to: new Date(2026, 10, 16),
  })
  const [dtDate, setDtDate] = React.useState<Date | undefined>(new Date(2026, 10, 10))
  const [dtTime, setDtTime] = React.useState("10:00 AM")
  const [dualRange, setDualRange] = React.useState<DateRange | undefined>({
    from: new Date(2026, 10, 24),
    to: new Date(2026, 11, 12),
  })
  const [presetRange, setPresetRange] = React.useState<DateRange | undefined>({
    from: new Date(2026, 10, 10),
    to: new Date(2026, 10, 18),
  })
  const [activePreset, setActivePreset] = React.useState<PresetId>("custom")

  function selectPreset(id: PresetId) {
    setActivePreset(id)
    if (id !== "custom") {
      setPresetRange(applyPreset(id, anchor))
    }
  }

  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight font-heading">Calendar</h1>
        <p className="mt-2 text-muted-foreground">
          React DayPicker calendar styled for warm gold selection, a beige range band, and compact day cells. Pair{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">Calendar</code> with{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">CalendarPickerPanel</code> for card chrome, shadow, and{" "}
          <strong className="text-a7-text-gray">Cancel</strong> / <strong className="text-a7-text-gray">Done</strong> actions
          like the product date pickers below.
        </p>
      </header>

      <div className="space-y-12">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import { Calendar } from "@/shared/ui/calendar"
import { CalendarPickerPanel } from "@/shared/ui/calendar-panel"`}</CodeBlock>
        </section>

        <p className="text-sm text-muted-foreground">
          Range strip color uses <code className="rounded bg-muted px-1 py-0.5 text-xs">--calendar-range-mid</code> in{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">globals.css</code>. Selection uses your theme{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">primary</code> token (gold).
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          <DemoBlock
            title="Month & year dropdowns"
            description="Single month with dropdown caption. Footer actions are layout-only in these demos."
            code={`<CalendarPickerPanel>
  <Calendar
    mode="single"
    defaultMonth={new Date(2026, 10)}
    captionLayout="dropdown"
    startMonth={new Date(2020, 0)}
    endMonth={new Date(2030, 11)}
    className={calendarChrome}
    ...
  />
</CalendarPickerPanel>`}
          >
            <CalendarPickerPanel>
              <Calendar
                mode="single"
                selected={singleDropdown}
                onSelect={setSingleDropdown}
                defaultMonth={new Date(2026, 10)}
                captionLayout="dropdown"
                startMonth={new Date(2020, 0)}
                endMonth={new Date(2030, 11)}
                className={calendarChrome}
              />
            </CalendarPickerPanel>
          </DemoBlock>

          <DemoBlock
            title="Single month range"
            description="Label caption with prev/next arrows. Start and end use filled primary; in-between days use the range strip."
            code={`<CalendarPickerPanel>
  <Calendar
    mode="range"
    defaultMonth={new Date(2026, 10)}
    selected={range}
    onSelect={setRange}
    className={calendarChrome}
  />
</CalendarPickerPanel>`}
          >
            <CalendarPickerPanel>
              <Calendar
                mode="range"
                defaultMonth={new Date(2026, 10)}
                selected={labelRange}
                onSelect={setLabelRange}
                className={calendarChrome}
              />
            </CalendarPickerPanel>
          </DemoBlock>

          <div className="flex flex-col gap-10 lg:col-span-2">
            <DemoBlock
              title="Date & time"
              description="Calendar plus a scrollable list of time pills. Wire the list to your scheduling logic."
              code={`<div className="flex gap-4">
  <Calendar ... />
  <div className="max-h-64 overflow-y-auto">...</div>
</div>`}
            >
              <CalendarPickerPanel className="max-w-full">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  <Calendar
                    mode="single"
                    selected={dtDate}
                    onSelect={setDtDate}
                    defaultMonth={new Date(2026, 10)}
                    className={cn(calendarChrome, "min-w-0 shrink-0")}
                  />
                  <div
                    className="flex max-h-64 min-w-[9.5rem] flex-col gap-1.5 overflow-y-auto pr-1"
                    role="listbox"
                    aria-label="Time"
                  >
                    {TIME_SLOTS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        role="option"
                        aria-selected={dtTime === t}
                        className={cn(
                          "rounded-full px-3 py-2 text-left text-sm transition-colors",
                          dtTime === t
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-a7-text-gray hover:bg-muted/80"
                        )}
                        onClick={() => setDtTime(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </CalendarPickerPanel>
            </DemoBlock>

            <DemoBlock
              title="Two-month range"
              description="Cross-month selection with navigation on the outer edges."
              code={`<Calendar
  mode="range"
  numberOfMonths={2}
  defaultMonth={new Date(2026, 10)}
  ...
/>`}
            >
              <div className="overflow-x-auto pb-1">
                <CalendarPickerPanel>
                  <Calendar
                    mode="range"
                    numberOfMonths={2}
                    defaultMonth={new Date(2026, 10)}
                    selected={dualRange}
                    onSelect={setDualRange}
                    className={calendarChrome}
                  />
                </CalendarPickerPanel>
              </div>
            </DemoBlock>
          </div>

          <div className="lg:col-span-2">
            <DemoBlock
              title="Presets + range"
              description="Preset shortcuts with a highlighted active item (blue ring like the reference). Calendar drives “Custom range”."
              code={`const presets = ["Today", "Yesterday", ...]

<button className={active ? "ring-2 ring-[#2563eb] ..." : "..."} />`}
            >
              <CalendarPickerPanel
                className="max-w-full"
                summary={formatRangeLabel(presetRange) ?? undefined}
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <nav className="flex w-full shrink-0 flex-col gap-1 md:w-44" aria-label="Date presets">
                    {presetNav.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        className={cn(
                          "rounded-lg px-3 py-2 text-left text-sm transition-colors",
                          activePreset === p.id
                            ? "bg-card font-medium text-a7-text-gray ring-2 ring-[#2563eb] ring-offset-2 ring-offset-card"
                            : "text-muted-foreground hover:bg-muted hover:text-a7-text-gray"
                        )}
                        onClick={() => selectPreset(p.id)}
                      >
                        {p.label}
                      </button>
                    ))}
                  </nav>
                  <Calendar
                    mode="range"
                    defaultMonth={new Date(2026, 10)}
                    selected={presetRange}
                    onSelect={(r) => {
                      setPresetRange(r)
                      setActivePreset("custom")
                    }}
                    className={cn(calendarChrome, "min-w-0 flex-1")}
                  />
                </div>
              </CalendarPickerPanel>
            </DemoBlock>
          </div>
        </div>

     
      </div>
    </div>
  )
}
