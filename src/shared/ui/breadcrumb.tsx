"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "react-feather"

import { componentNavItems } from "@/shared/content/navigation/component-sidebar-nav"
import { cn } from "@/shared/lib/cn"

/** First component doc route used as the parent target for the “Components” crumb. */
export const COMPONENTS_DOCS_HREF = "/components/button" as const

export type BreadcrumbItem =
  | { kind: "home"; href: string }
  | { kind: "link"; href: string; label: string }
  | { kind: "text"; label: string }
  | { kind: "current"; label: string }

function titleCaseSlug(slug: string) {
  return slug
    .split("-")
    .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w))
    .join(" ")
}

/**
 * Pure helper: map a pathname to ordered breadcrumb items for this app
 * (e.g. `/components/button` → home, “Components” link, “Button”).
 */
export function getBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  const normalized = pathname === "" ? "/" : pathname
  const items: BreadcrumbItem[] = [{ kind: "home", href: "/" }]

  if (normalized === "/") {
    return items
  }

  const parts = normalized.split("/").filter(Boolean)

  if (parts[0] === "components" && parts[1]) {
    const slug = parts[1]
    const found = componentNavItems.find((i) => i.slug === slug)
    const pageLabel = found?.label ?? titleCaseSlug(slug)
    items.push({ kind: "link", href: COMPONENTS_DOCS_HREF, label: "Components" })
    items.push({ kind: "current", label: pageLabel })
    return items
  }

  let accum = ""
  for (let i = 0; i < parts.length; i++) {
    accum += `/${parts[i]}`
    const label = titleCaseSlug(parts[i])
    const isLast = i === parts.length - 1
    if (isLast) items.push({ kind: "current", label })
    else items.push({ kind: "link", href: accum, label })
  }
  return items
}

const linkFocus =
  "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

export type BreadcrumbVariant = "default" | "inverted"

export type BreadcrumbListProps = {
  items: readonly BreadcrumbItem[]
  className?: string
  /** List density and type scale. */
  size?: "sm" | "default"
  /** Visual separator between steps (decorative; not read as list items). */
  separator?: "chevron" | "slash"
  /** Overrides the default `aria-label` on the wrapping `nav`. */
  ariaLabel?: string
  /** `default` — dark text on light backgrounds. `inverted` — white text for dark/hero backgrounds. */
  variant?: BreadcrumbVariant
  /** When false, crumbs stay on one line (pair with horizontal scroll on the nav). */
  wrap?: boolean
}

const sizeClasses = {
  sm: "gap-x-0.5 text-xs",
  default: "gap-x-1 text-sm",
} as const

const chevronSize = { sm: 12, default: 14 } as const
const homeSize = { sm: 14, default: 16 } as const

function CrumbBody({
  crumb,
  isLast,
  isOnlyHome,
  size,
  variant,
}: {
  crumb: BreadcrumbItem
  isLast: boolean
  isOnlyHome: boolean
  size: NonNullable<BreadcrumbListProps["size"]>
  variant: BreadcrumbVariant
}) {
  const hm = homeSize[size]
  const inv = variant === "inverted"

  if (crumb.kind === "home") {
    return (
      <Link
        href={crumb.href}
        className={cn(
          "inline-flex items-center transition-colors",
          inv ? "text-white/70 hover:text-white" : "text-a7-text-gray hover:text-primary",
          linkFocus
        )}
        aria-label="Home"
        aria-current={isOnlyHome ? "page" : undefined}
      >
        <Home size={hm} strokeWidth={2} aria-hidden />
      </Link>
    )
  }

  if (crumb.kind === "link") {
    return (
      <Link
        href={crumb.href}
        className={cn(
          "underline-offset-4 transition-colors hover:underline",
          inv ? "text-white/70 hover:text-white" : "text-a7-text-gray hover:text-primary",
          linkFocus
        )}
      >
        {crumb.label}
      </Link>
    )
  }

  const pageCurrent = isLast && (crumb.kind === "current" || crumb.kind === "text")

  return (
    <span
      className={cn(
        crumb.kind === "current" && "font-medium",
        inv ? "text-white" : "text-a7-text-gray"
      )}
      aria-current={pageCurrent ? "page" : undefined}
    >
      {crumb.label}
    </span>
  )
}

function BreadcrumbSeparator({
  mode,
  chevronPx,
  variant,
}: {
  mode: NonNullable<BreadcrumbListProps["separator"]>
  chevronPx: number
  variant: BreadcrumbVariant
}) {
  const cls = cn(
    "inline-flex shrink-0",
    variant === "inverted" ? "text-white/50" : "text-muted-foreground"
  )
  if (mode === "slash") {
    return <span className={cn(cls, "px-0.5")} aria-hidden>/</span>
  }
  return (
    <span className={cls} aria-hidden>
      <ChevronRight size={chevronPx} strokeWidth={2} />
    </span>
  )
}

/**
 * Presentational breadcrumb (Feather Home + separator), aligned with WAI-ARIA breadcrumb guidance:
 * one list item per location, decorative separators, `aria-current="page"` on the current page.
 */
export function BreadcrumbList({
  items,
  className,
  size = "default",
  separator = "chevron",
  ariaLabel = "Breadcrumb",
  variant = "default",
  wrap = true,
}: BreadcrumbListProps) {
  const sc = sizeClasses[size]
  const ch = chevronSize[size]
  const isOnlyHome = items.length === 1 && items[0]?.kind === "home"

  if (items.length === 0) {
    return null
  }

  return (
    <nav
      aria-label={ariaLabel}
      className={cn("min-w-0", !wrap && "overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", className)}
    >
      <ol
        className={cn(
          "flex items-center font-medium text-a7-text-gray",
          wrap ? "flex-wrap" : "w-max flex-nowrap",
          sc
        )}
      >
        {items.map((crumb, index) => {
          const isLast = index === items.length - 1
          const key = `${crumb.kind}-${index}-${"label" in crumb ? crumb.label : "home"}`

          return (
            <li key={key} className="flex min-w-0 max-w-full items-center gap-x-1">
              {index > 0 ? <BreadcrumbSeparator mode={separator} chevronPx={ch} variant={variant} /> : null}
              <span className="min-w-0 truncate">
                <CrumbBody crumb={crumb} isLast={isLast} isOnlyHome={isOnlyHome} size={size} variant={variant} />
              </span>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export type BreadcrumbFromPathProps = {
  className?: string
  size?: BreadcrumbListProps["size"]
  separator?: BreadcrumbListProps["separator"]
  ariaLabel?: string
  variant?: BreadcrumbVariant
}

/** Client breadcrumb that follows the active URL using {@link getBreadcrumbItems}. */
export function BreadcrumbFromPath({ className, size, separator, ariaLabel, variant }: BreadcrumbFromPathProps) {
  const pathname = usePathname()
  const items = React.useMemo(() => getBreadcrumbItems(pathname), [pathname])
  return (
    <BreadcrumbList items={items} className={className} size={size} separator={separator} ariaLabel={ariaLabel} variant={variant} />
  )
}
