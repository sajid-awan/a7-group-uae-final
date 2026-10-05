"use client"

import { cn } from "@/shared/lib/cn"

export type WizardStep<T extends string = string> = {
  key: T
  lines: [string, string]
}

export type WizardStepNavProps<T extends string = string> = {
  steps: WizardStep<T>[]
  activeStep: T
  onStepChange: (step: T) => void
  isStepCompletedOrActive: (step: T) => boolean
  className?: string
  activeBorderClassName?: string
  inactiveBorderClassName?: string
}

export function WizardStepNav<T extends string = string>({
  steps,
  activeStep,
  onStepChange,
  isStepCompletedOrActive,
  className,
  activeBorderClassName = "border-[#B68E45] text-a7-text-gray",
  inactiveBorderClassName = "border-[#DADDE3] text-[#4E5666]",
}: WizardStepNavProps<T>) {
  return (
    <div
      data-slot="wizard-step-nav"
      className={cn("grid w-full grid-cols-3 border-b border-[#DADDE3]", className)}
      role="tablist"
      aria-label="Form steps"
    >
      {steps.map((step) => (
        <button
          key={step.key}
          type="button"
          role="tab"
          aria-selected={activeStep === step.key}
          onClick={() => onStepChange(step.key)}
          className={cn(
            "inline-flex min-w-0 flex-1 flex-col items-center justify-start rounded-none border-b-2 px-0.5 pb-2 text-center text-[10px] leading-tight font-medium transition-colors sm:items-start sm:px-0 sm:pb-2 sm:text-left sm:text-xs",
            isStepCompletedOrActive(step.key) ? activeBorderClassName : inactiveBorderClassName
          )}
        >
          <span className="w-full truncate">{step.lines[0]}</span>
          <span className="w-full truncate">{step.lines[1]}</span>
        </button>
      ))}
    </div>
  )
}

WizardStepNav.displayName = "WizardStepNav"
