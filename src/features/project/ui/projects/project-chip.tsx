import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

import { Badge } from "@/shared/ui/badge"
import { cn } from "@/shared/lib/cn"

export type ProjectChipVariant = "nearby" | "default"
export type ProjectChipIconPosition = "left" | "right"

const variantClasses: Record<ProjectChipVariant, string> = {
  nearby:
    "border-a7-brand-blue bg-a7-brand-blue-surface text-a7-brand-blue shadow-none [&_svg]:text-a7-brand-blue",
  default: "border-border bg-white text-a7-text-gray shadow-none [&_svg]:text-a7-text-gray",
}

type ProjectChipProps = {
  children: ReactNode
  icon?: LucideIcon
  /** Color style — `nearby` matches location pills (light blue surface, dark blue label). */
  variant?: ProjectChipVariant
  /** Icon placement relative to label (default `right` for nearby). */
  iconPosition?: ProjectChipIconPosition
  className?: string
}

/** 30px pill chip — property / location metadata (badges docs “Chips” pattern). */
export function ProjectChip({
  children,
  icon: Icon,
  variant = "nearby",
  iconPosition = "right",
  className,
}: ProjectChipProps) {
  const iconEl = Icon ? <Icon className="size-3.5 shrink-0" aria-hidden /> : null

  return (
    <Badge
      size="xl"
      shape="pill"
      variant="outline"
      className={cn(
        "gap-1.5 font-normal normal-case",
        variantClasses[variant],
        className
      )}
    >
      {iconPosition === "left" ? iconEl : null}
      {children}
      {iconPosition === "right" ? iconEl : null}
    </Badge>
  )
}
