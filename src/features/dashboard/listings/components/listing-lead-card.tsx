"use client"

import Image from "next/image"
import { Icon } from "@iconify/react"

import type { DashboardListingLead } from "../content/listing-leads-types"
import { cn } from "@/shared/lib/cn"

export type DashboardListingLeadCardProps = {
  lead: DashboardListingLead
  className?: string
}

export function DashboardListingLeadCard({ lead, className }: DashboardListingLeadCardProps) {
  const contactLabel = lead.contactChannel === "whatsapp" ? "WhatsApp lead" : "Gmail lead"

  return (
    <article
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-3",
        className
      )}
    >
      <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full bg-white">
        <Image
          src={lead.portalLogo}
          alt={lead.portalLabel}
          fill
          className="object-contain p-1.5"
          sizes="40px"
        />
      </span>

      <div className="min-w-0 flex-1">
        <p className="truncate font-inter text-sm font-semibold text-foreground">{lead.name}</p>
        <p className="truncate text-xs text-muted-foreground">{lead.phone}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{lead.updatedAgo}</p>
      </div>

      <a
        href={lead.contactHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${contactLabel} ${lead.name}`}
        className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm"
        onClick={(event) => event.stopPropagation()}
      >
        {lead.contactChannel === "whatsapp" ? (
          <Icon icon="logos:whatsapp-icon" className="size-5" aria-hidden />
        ) : (
          <Icon icon="logos:google-gmail" className="size-5" aria-hidden />
        )}
      </a>
    </article>
  )
}

DashboardListingLeadCard.displayName = "DashboardListingLeadCard"
