"use client"

import type { ReactNode } from "react"

import { cn } from "@/shared/lib/cn"

export const listingFormControlClassName = "h-11 min-h-11"

export function ListingFormSection({
  title,
  children,
  className,
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn("rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5", className)}>
      <h2 className="mb-4 font-inter text-base font-semibold text-foreground">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

export function ListingFormGrid({
  children,
  columns = 2,
  className,
}: {
  children: ReactNode
  columns?: 1 | 2 | 3
  className?: string
}) {
  return (
    <div
      className={cn(
        "grid gap-4",
        columns === 1 && "grid-cols-1",
        columns === 2 && "grid-cols-1 md:grid-cols-2",
        columns === 3 && "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  )
}
