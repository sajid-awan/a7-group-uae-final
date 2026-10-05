"use client"

import { Icon } from "@iconify/react"
import { Mail, Phone } from "lucide-react"

import type { DatabaseRecordInteractions } from "../content/database-types"
import { cn } from "@/shared/lib/cn"
import { ActionTooltip } from "@/shared/ui/action-tooltip"

export type DatabaseInteractionStatsProps = {
  interactions: DatabaseRecordInteractions
  className?: string
  iconClassName?: string
}

function formatCountLabel(count: number, singular: string, plural: string) {
  return `${count} ${count === 1 ? singular : plural}`
}

export function DatabaseInteractionStats({
  interactions,
  className,
  iconClassName = "size-3.5",
}: DatabaseInteractionStatsProps) {
  const items = [
    {
      key: "phone",
      icon: <Phone className={iconClassName} aria-hidden />,
      value: interactions.phone,
      label: formatCountLabel(interactions.phone, "Call", "Calls"),
    },
    {
      key: "email",
      icon: <Mail className={iconClassName} aria-hidden />,
      value: interactions.message,
      label: formatCountLabel(interactions.message, "Email", "Emails"),
    },
    {
      key: "whatsapp",
      icon: <Icon icon="logos:whatsapp-icon" className={iconClassName} aria-hidden />,
      value: interactions.whatsapp,
      label: formatCountLabel(interactions.whatsapp, "WhatsApp message", "WhatsApp messages"),
    },
  ] as const

  return (
    <div className={cn("flex items-center gap-3 text-sm text-muted-foreground", className)}>
      {items.map((item) => (
        <ActionTooltip key={item.key} label={item.label}>
          <span className="inline-flex cursor-default items-center gap-1">
            {item.icon}
            {item.value}
          </span>
        </ActionTooltip>
      ))}
    </div>
  )
}

DatabaseInteractionStats.displayName = "DatabaseInteractionStats"
