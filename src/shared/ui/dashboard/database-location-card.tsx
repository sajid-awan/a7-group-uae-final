"use client"

import type { ComponentType } from "react"
import Image from "next/image"
import {
  Building2,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react"

import type { DatabaseLocation, DatabaseStatKey } from "@/features/dashboard/database/content/database-types"
import { cn } from "@/shared/lib/cn"
import { BaselineWhatsappIcon } from "@/shared/ui/iconify-icons"

const statConfig: Record<DatabaseStatKey, { label: string; icon: ComponentType<{ className?: string }> }> = {
  email: { label: "Email", icon: Mail },
  owner: { label: "Owner", icon: UserRound },
  phone: { label: "Phone", icon: Phone },
  whatsapp: { label: "WhatsApp", icon: BaselineWhatsappIcon },
  calendar: { label: "Calendar", icon: CalendarDays },
}

export type DatabaseLocationCardProps = {
  location: DatabaseLocation
  onClick?: () => void
  className?: string
}

export function DatabaseLocationCard({ location, onClick, className }: DatabaseLocationCardProps) {
  const isInteractive = Boolean(onClick)

  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]",
        isInteractive && "cursor-pointer transition-shadow hover:shadow-md",
        className
      )}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault()
                onClick()
              }
            }
          : undefined
      }
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={location.imageUrl}
          alt={location.areaName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="space-y-3 p-3.5">
        <div className="flex items-center gap-2 text-[13px] font-semibold text-foreground">
          <MapPin className="size-4 shrink-0 text-muted-foreground" aria-hidden />
          <span className="truncate">{location.areaName}</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 text-xs">
          <div className="flex min-w-0 items-center gap-2">
            <Building2 className="size-3.5 shrink-0 text-muted-foreground" aria-hidden />
            <span className="truncate font-medium text-foreground">{location.buildingName}</span>
          </div>
          <div className="flex min-w-0 items-center gap-2 text-muted-foreground">
            <Building2 className="size-3.5 shrink-0" aria-hidden />
            <span className="truncate">
              Apartments: <span className="font-medium text-foreground">{location.apartmentCount}</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-1.5">
          {(Object.keys(statConfig) as DatabaseStatKey[]).map((key) => {
            const { label, icon: Icon } = statConfig[key]

            return (
              <div
                key={key}
                className="flex flex-col items-center justify-center gap-0.5 rounded-lg border border-neutral-200 bg-neutral-50 px-1 py-1.5"
              >
                <Icon className="size-3 text-muted-foreground" aria-hidden />
                <span className="text-[11px] font-semibold text-foreground">{location.stats[key]}</span>
                <span className="sr-only">{label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </article>
  )
}

DatabaseLocationCard.displayName = "DatabaseLocationCard"
