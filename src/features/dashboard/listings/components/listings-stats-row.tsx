"use client"

import Image from "next/image"

import type { DashboardListingStat } from "../content/listings-types"
import { cn } from "@/shared/lib/cn"

export type DashboardListingsStatCardProps = {
  stat: DashboardListingStat
  className?: string
}

export function DashboardListingsStatCard({ stat, className }: DashboardListingsStatCardProps) {
  const isCircle = stat.iconShape === "circle"

  return (
    <div
      className={cn(
        "rounded-3xl border border-neutral-200 bg-white p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      <p className="font-inter text-sm font-medium text-neutral-900">{stat.label}</p>
      <div className="mt-2 flex items-end justify-between gap-3">
        <p className="font-inter text-[2rem] font-semibold leading-none text-neutral-900">{stat.value}</p>
        <span
          className={cn(
            "relative flex size-10 shrink-0 overflow-hidden",
            isCircle ? "rounded-full" : "rounded-md"
          )}
          title={stat.portal.label}
        >
          {stat.portal.imageSrc ? (
            <Image
              src={stat.portal.imageSrc}
              alt={stat.portal.label}
              fill
              className={cn("object-cover", !isCircle && "object-contain")}
              sizes="40px"
            />
          ) : (
            <span className="flex size-full items-center justify-center text-[10px] font-semibold text-muted-foreground">
              {stat.portal.label.slice(0, 1)}
            </span>
          )}
        </span>
      </div>
    </div>
  )
}

DashboardListingsStatCard.displayName = "DashboardListingsStatCard"

export type DashboardListingsStatsRowProps = {
  stats: DashboardListingStat[]
  className?: string
}

export function DashboardListingsStatsRow({ stats, className }: DashboardListingsStatsRowProps) {
  return (
    <section
      aria-label="Listing metrics"
      className={cn("grid gap-4 sm:grid-cols-2 xl:grid-cols-4", className)}
    >
      {stats.slice(0, 4).map((stat, index) => (
        <DashboardListingsStatCard key={`${stat.label}-${stat.portal.id}-${index}`} stat={stat} />
      ))}
    </section>
  )
}

DashboardListingsStatsRow.displayName = "DashboardListingsStatsRow"
