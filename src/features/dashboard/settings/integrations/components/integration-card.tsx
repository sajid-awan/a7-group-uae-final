"use client"

import { Check, Plus } from "lucide-react"

import type { IntegrationRecord } from "../content/integrations-types"
import { IntegrationLogo } from "./integration-logo"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"

export type IntegrationCardProps = {
  integration: IntegrationRecord
  className?: string
  onConfigure?: (integration: IntegrationRecord) => void
  onInstall?: (integration: IntegrationRecord) => void
}

function InstalledBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1B5E3B]">
      <Check className="size-3.5" aria-hidden />
      Installed
    </span>
  )
}

export function IntegrationCard({
  integration,
  className,
  onConfigure,
  onInstall,
}: IntegrationCardProps) {
  const isConfigurable = integration.status === "installed" || integration.status === "pending"

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]",
        isConfigurable && "cursor-pointer transition-colors hover:border-neutral-300",
        className
      )}
      onClick={() => {
        if (isConfigurable) onConfigure?.(integration)
      }}
      onKeyDown={(event) => {
        if (!isConfigurable) return
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onConfigure?.(integration)
        }
      }}
      role={isConfigurable ? "button" : undefined}
      tabIndex={isConfigurable ? 0 : undefined}
    >
      <div className="flex items-start justify-between gap-3">
        <IntegrationLogo label={integration.logoLabel} className={integration.logoClassName} />
        <div
          onClick={(event) => event.stopPropagation()}
          onKeyDown={(event) => event.stopPropagation()}
        >
          {integration.status === "available" ? (
            <Button
              type="button"
              variant="outline"
              size="xs"
              className="h-7 rounded-full border-neutral-200 bg-white px-3 text-xs font-medium text-foreground shadow-none hover:bg-neutral-50"
              onClick={() => onInstall?.(integration)}
              aria-label={`Install ${integration.name}`}
            >
              <Plus className="size-3" aria-hidden />
              Install
            </Button>
          ) : integration.status === "installed" ? (
            <InstalledBadge />
          ) : (
            <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-muted-foreground">
              Pending
            </span>
          )}
        </div>
      </div>

      <h3 className="mt-4 font-inter text-base font-semibold text-neutral-900 font-inter">{integration.name}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        {integration.description}
      </p>
    </article>
  )
}

IntegrationCard.displayName = "IntegrationCard"
