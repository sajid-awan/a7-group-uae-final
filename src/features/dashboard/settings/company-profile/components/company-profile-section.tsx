"use client"

import type { ReactNode } from "react"

import { cn } from "@/shared/lib/cn"

export type CompanyProfileSectionProps = {
  title: string
  subtitle: string
  children: ReactNode
  footer?: ReactNode
  className?: string
}

export function CompanyProfileSection({
  title,
  subtitle,
  children,
  footer,
  className,
}: CompanyProfileSectionProps) {
  return (
    <section
      className={cn("overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm", className)}
    >
      <div className="space-y-1 border-b border-neutral-200 px-6 py-6">
        <h2 className="font-inter text-base font-semibold text-black">{title}</h2>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>

      <div className="px-6 py-6">{children}</div>

      {footer ? (
        <div className="flex flex-wrap justify-end gap-3 border-t border-neutral-200 px-6 py-6">
          {footer}
        </div>
      ) : null}
    </section>
  )
}

CompanyProfileSection.displayName = "CompanyProfileSection"
