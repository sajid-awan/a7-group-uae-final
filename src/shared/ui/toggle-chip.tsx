"use client"

import type { ReactNode } from "react"

import { cn } from "@/shared/lib/cn"
import { Checkbox } from "@/shared/ui/checkbox"

const TOGGLE_CHIP_SELECTED_CLASSNAME =
  "border-primary bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary"
const TOGGLE_CHIP_DEFAULT_CLASSNAME =
  "border-neutral-200 bg-white text-[#333333] hover:bg-white hover:text-[#333333]"

export type ToggleChipProps = {
  label: string
  selected: boolean
  onSelectedChange: (selected: boolean) => void
  icon?: ReactNode
  mode?: "button" | "checkbox"
  className?: string
}

export function ToggleChip({
  label,
  selected,
  onSelectedChange,
  icon,
  mode = "button",
  className,
}: ToggleChipProps) {
  if (mode === "checkbox") {
    return (
      <label
        className={cn(
          "inline-flex h-11 min-h-11 cursor-pointer items-center gap-2 rounded-lg border px-3 text-sm font-medium transition-colors select-none",
          selected ? TOGGLE_CHIP_SELECTED_CLASSNAME : TOGGLE_CHIP_DEFAULT_CLASSNAME,
          className
        )}
      >
        <Checkbox
          checked={selected}
          onCheckedChange={(value) => onSelectedChange(value === true)}
          aria-label={label}
          size="sm"
          accentColor={selected ? "var(--primary)" : undefined}
        />
        {label}
      </label>
    )
  }

  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-11 min-h-11 items-center gap-2 rounded-lg border px-3 text-sm font-medium shadow-none transition-colors",
        selected ? TOGGLE_CHIP_SELECTED_CLASSNAME : TOGGLE_CHIP_DEFAULT_CLASSNAME,
        className
      )}
      aria-pressed={selected}
      onClick={() => onSelectedChange(!selected)}
    >
      {icon}
      {label}
    </button>
  )
}

ToggleChip.displayName = "ToggleChip"
