import type { ComponentType, ReactNode, SVGProps } from "react"
import { Check, CreditCard, type LucideIcon } from "lucide-react"

import { Button } from "@/shared/ui/button"
import { Card, CardContent } from "@/shared/ui/card"
import { CARD_HOVER_GROUP, CARD_HOVER_SURFACE } from "@/shared/lib/card-hover"
import { cn } from "@/shared/lib/cn"

type IconType = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>

export type FeatureCardVariant = "center" | "left" | "header" | "checklist"

export type FeatureCardProps = {
  variant: FeatureCardVariant
  stepLabel?: string
  /** When false, hides the step line (e.g. plots audience cards). Defaults to true. */
  showStepLabel?: boolean
  title: string
  /** Body copy (center, left, header). Ignored when `variant` is `checklist` if `lead` is set. */
  description?: string
  /** Checklist variant: line above the bullet list. */
  lead?: string
  /** Checklist variant only — each string renders with a check icon. */
  checklistItems?: string[]
  icon?: LucideIcon | IconType
  /** Primary CTA; defaults to a pill primary button. Pass `null` to hide. */
  action?: ReactNode | null
  className?: string
}

const defaultAction = (
  <Button type="button" variant="default" shape="pill" size="sm">
    Button text
  </Button>
)

export function FeatureCard({
  variant,
  stepLabel = "Step 1",
  showStepLabel = true,
  title,
  description,
  lead,
  checklistItems = [],
  icon: IconProp = CreditCard,
  action,
  className,
}: FeatureCardProps) {
  const actionSlot = action === undefined ? defaultAction : action
  const Icon = IconProp as LucideIcon

  const stepLine =
    showStepLabel ? (
      <p className={cn("text-xs font-medium text-muted-foreground", variant === "header" && "text-white")}>
        {stepLabel}
      </p>
    ) : null

  const titleHeading = (align: "center" | "left") => (
    <h3
      className={cn(
        "font-inter text-xl font-bold leading-tight tracking-tight text-a7-black md:text-2xl",
        align === "center" && "text-center",
        variant === "header" && "text-xl text-white md:text-2xl"
      )}
    >
      {title}
    </h3>
  )

  if (variant === "header") {
    return (
      <Card
        className={cn(
          CARD_HOVER_GROUP,
          CARD_HOVER_SURFACE,
          "border border-white/10 bg-linear-to-br from-zinc-700/95 to-zinc-800/95 text-white shadow-md backdrop-blur-sm",
          className
        )}
      >
        <CardContent className="flex flex-col gap-4 p-6 md:p-7">
          <div className="flex min-w-0 flex-wrap items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-emerald-500 shadow-sm">
              <Icon className="size-5 text-white" aria-hidden />
            </span>
            {titleHeading("left")}
          </div>
          {stepLine}
          {description ? (
            <p className="text-sm leading-relaxed text-white/90">{description}</p>
          ) : null}
          {actionSlot != null ? <div className="pt-1">{actionSlot}</div> : null}
        </CardContent>
      </Card>
    )
  }

  if (variant === "checklist") {
    const items = checklistItems.length
      ? checklistItems
      : [
          "Services for Developers",
          "Developer Services",
          "Tailored for Developers",
          "Custom Developer Solutions",
        ]
    return (
      <Card className={cn(CARD_HOVER_GROUP, CARD_HOVER_SURFACE, "border border-border bg-white shadow-sm", className)}>
        <CardContent className="flex flex-col items-start gap-3 p-6 md:p-7">
          <Icon size={40} className="shrink-0 text-a7-black" aria-hidden />
          {titleHeading("left")}
          {lead || description ? (
            <p className="text-sm leading-relaxed text-a7-text-gray">{lead ?? description}</p>
          ) : null}
          <ul className="mt-1 flex w-full flex-col gap-2" role="list">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-a7-black">
                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-a7-black text-white">
                  <Check className="size-2.5 stroke-[3]" aria-hidden />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {actionSlot != null ? <div className="pt-1">{actionSlot}</div> : null}
        </CardContent>
      </Card>
    )
  }

  const isCenter = variant === "center"
  return (
    <Card className={cn(CARD_HOVER_GROUP, CARD_HOVER_SURFACE, "border border-border bg-card shadow-sm", className)}>
      <CardContent
        className={cn(
          "flex flex-col gap-1 p-6 md:p-7",
          isCenter ? "items-center text-center" : "items-start text-left"
        )}
      >
        <Icon className={cn("size-10 shrink-0 text-a7-black", isCenter && "mx-auto")} aria-hidden />
        {stepLine}
        {titleHeading(isCenter ? "center" : "left")}
        {description ? (
          <p
            className={cn(
              "max-w-prose text-sm leading-relaxed text-muted-foreground",
              isCenter && "mx-auto text-pretty"
            )}
          >
            {description}
          </p>
        ) : null}
        {actionSlot != null ? (
          <div className={cn("pt-1", isCenter && "flex justify-center")}>{actionSlot}</div>
        ) : null}
      </CardContent>
    </Card>
  )
}

FeatureCard.displayName = "FeatureCard"
