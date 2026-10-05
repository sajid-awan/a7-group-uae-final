"use client"

import type { ReactNode } from "react"

import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import { ButtonGroup } from "@/shared/ui/button-group"
import { Field, FieldContent, FieldTitle } from "@/shared/ui/field"

const SEGMENT_TONE_CLASSNAMES = {
  blue: {
    selected:
      "relative !z-10 border-[var(--a7-brand-blue-border)] bg-[var(--a7-brand-blue-surface)] text-[var(--a7-brand-blue)] hover:bg-[var(--a7-brand-blue-surface)] hover:text-[var(--a7-brand-blue)]",
    default:
      "border-neutral-200 bg-white text-[var(--a7-brand-text-muted)] hover:bg-white hover:text-[var(--a7-brand-text-muted)]",
  },
  primary: {
    selected:
      "relative !z-10 border-primary bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
    default:
      "border-neutral-200 bg-white text-[var(--a7-brand-text-muted)] hover:bg-white hover:text-[var(--a7-brand-text-muted)]",
  },
  primaryLight: {
    selected:
      "relative !z-10 border-primary bg-primary/10 text-primary hover:bg-primary/10 hover:text-primary",
    default:
      "border-neutral-200 bg-white text-[#333333] hover:bg-white hover:text-[#333333]",
  },
  neutral: {
    selected: "relative !z-10 border-neutral-300 bg-neutral-100 text-foreground",
    default: "border-neutral-200 bg-white text-foreground hover:bg-white",
  },
} as const

export type SegmentedControlOption<T extends string> = {
  value: T
  label: string
  icon?: ReactNode
}

export type SegmentedControlProps<T extends string> = {
  value: T
  onValueChange: (value: T) => void
  options: SegmentedControlOption<T>[]
  columns?: number
  tone?: keyof typeof SEGMENT_TONE_CLASSNAMES
  label?: string
  required?: boolean
  className?: string
  buttonClassName?: string
}

export function SegmentedControl<T extends string>({
  value,
  onValueChange,
  options,
  columns = options.length,
  tone = "blue",
  label,
  required,
  className,
  buttonClassName,
}: SegmentedControlProps<T>) {
  const toneClassNames = SEGMENT_TONE_CLASSNAMES[tone]

  const control = (
    <ButtonGroup attached className={cn("grid w-full", className)} style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
      {options.map((option, index) => {
        const isActive = value === option.value
        const previousIsActive = index > 0 && value === options[index - 1]?.value

        return (
          <Button
            key={option.value}
            type="button"
            variant="outline"
            size="sm"
            iconLeft={option.icon}
            label={option.label}
            className={cn(
              "h-11 min-h-11 rounded-none px-4 text-sm font-medium shadow-none first:rounded-s-xl last:rounded-e-xl",
              isActive ? toneClassNames.selected : toneClassNames.default,
              !isActive && previousIsActive && "border-l-transparent",
              buttonClassName
            )}
            aria-pressed={isActive}
            onClick={() => onValueChange(option.value)}
          />
        )
      })}
    </ButtonGroup>
  )

  if (!label) return control

  return (
    <Field orientation="vertical" className={className}>
      <FieldTitle>
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </FieldTitle>
      <FieldContent>{control}</FieldContent>
    </Field>
  )
}

SegmentedControl.displayName = "SegmentedControl"
