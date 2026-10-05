import { cn } from "@/shared/lib/cn"

export type DashboardViewMode = "table" | "grid"

export const DASHBOARD_HEADER_ACTION_BUTTON_CLASSNAME =
  "!h-10 !min-h-10 !max-h-10 shrink-0 gap-2 rounded-lg px-4 text-sm shadow-none"

export const DASHBOARD_HEADER_OUTLINE_BUTTON_CLASSNAME = cn(
  DASHBOARD_HEADER_ACTION_BUTTON_CLASSNAME,
  "border-neutral-200 bg-white font-normal text-neutral-900"
)

export const DASHBOARD_TOOLBAR_ICON_BUTTON_CLASSNAME =
  "size-8 border border-border bg-white p-0 text-muted-foreground shadow-none hover:bg-muted/30"

export const DASHBOARD_TOOLBAR_CARD_CLASSNAME =
  "rounded-2xl border border-neutral-200 bg-white p-4"

export const DASHBOARD_TABLE_WRAPPER_CLASSNAME =
  "overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"

export const DASHBOARD_TABLE_ROW_CLASSNAME = "border-neutral-200"
