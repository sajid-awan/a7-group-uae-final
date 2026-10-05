"use client"

import Image from "next/image"

import { cn } from "@/shared/lib/cn"
import { Switch } from "@/shared/ui/switch"

export type PortalStatusCardLayout = "card" | "inline"

export type PortalStatusCardProps = {
  label: string
  imageSrc?: string
  active: boolean
  onActiveChange: (active: boolean) => void
  className?: string
  layout?: PortalStatusCardLayout
}

export function PortalStatusCard({
  label,
  imageSrc,
  active,
  onActiveChange,
  className,
  layout = "card",
}: PortalStatusCardProps) {
  if (layout === "inline") {
    return (
      <div className={cn("flex items-center justify-between gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-3", className)}>
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="relative flex size-9 shrink-0 overflow-hidden rounded-lg bg-white">
            {imageSrc ? (
              <Image src={imageSrc} alt="" fill className="object-contain p-1" sizes="36px" />
            ) : null}
          </span>
          <div className="min-w-0">
            <p className="truncate font-inter text-sm font-semibold text-black">{label}</p>
            <p className="text-xs text-muted-foreground">{active ? "Active" : "Inactive"}</p>
          </div>
        </div>
        <Switch
          size="sm"
          checked={active}
          onCheckedChange={(checked) => onActiveChange(checked === true)}
          className="shrink-0"
          aria-label={`${label} portal`}
        />
      </div>
    )
  }

  return (
    <div className={cn("rounded-2xl border border-neutral-200 bg-white p-4", className)}>
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs text-muted-foreground">{active ? "Active" : "Inactive"}</p>
        <Switch
          size="sm"
          checked={active}
          onCheckedChange={(checked) => onActiveChange(checked === true)}
          className="shrink-0"
          aria-label={`${label} portal`}
        />
      </div>
      <div className="mt-4 flex items-end justify-between gap-3">
        <p className="font-inter text-base font-semibold text-foreground">{label}</p>
        {imageSrc ? (
          <span className="relative flex size-10 shrink-0 overflow-hidden rounded-lg bg-white" title={label}>
            <Image src={imageSrc} alt={label} fill className="object-contain p-1" sizes="40px" />
          </span>
        ) : null}
      </div>
    </div>
  )
}

PortalStatusCard.displayName = "PortalStatusCard"
