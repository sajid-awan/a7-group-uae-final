"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"

import { AedText } from "@/shared/ui/aed-text"
import { Button } from "@/shared/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"
import { useMounted } from "@/shared/hooks/use-mounted"
import { cn } from "@/shared/lib/cn"
import {
  isSiteHeaderNavItemActive,
  type SiteHeaderMegaTile,
  type SiteHeaderNavItem,
} from "@/shared/content/navigation/site-header-nav"

function navItemClassName(baseClass: string, isActive: boolean) {
  return cn(baseClass, isActive && "font-semibold text-primary")
}

export type SiteHeaderVariant = "transparent" | "solid"

export type SiteHeaderProps = {
  variant?: SiteHeaderVariant
  nav: SiteHeaderNavItem[]
  className?: string
  ctaLabel: string
  ctaHref: string
  logoSrc?: string
  logoAlt?: string
}

function MegaTileCard({ tile }: { tile: SiteHeaderMegaTile }) {
  return (
    <Link
      href={tile.href}
      className="flex gap-3 rounded-xl p-2 text-left"
    >
      <span className="size-12 shrink-0 rounded-md bg-muted" aria-hidden />
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-a7-text-gray">{tile.title}</span>
        <span className="mt-0.5 block text-xs text-muted-foreground">
          <AedText text={tile.subtitle} />
        </span>
      </span>
    </Link>
  )
}

/** Shared desktop dropdown panel (mega + simple menus). */
const desktopDropdownContentClass =
  "relative overflow-visible rounded-2xl border bg-popover p-5 text-popover-foreground shadow-xl"

function DesktopDropdownCaret() {
  return (
    <div
      className="pointer-events-none absolute -top-2 left-1/2 size-0 -translate-x-1/2 border-x-8 border-b-8 border-x-transparent border-b-popover"
      aria-hidden
    />
  )
}

function DesktopNavLinks({
  items,
  triggerClass,
  isItemActive,
}: {
  items: SiteHeaderNavItem[]
  triggerClass: string
  isItemActive: (item: SiteHeaderNavItem) => boolean
}) {
  return (
    <nav className="hidden items-center gap-2 lg:flex">
      {items.map((item) => {
        const isActive = isItemActive(item)
        return (
          <Link
            key={item.label}
            href={item.href}
            className={navItemClassName(triggerClass, isActive)}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

function DesktopNav({
  items,
  triggerClass,
  isItemActive,
}: {
  items: SiteHeaderNavItem[]
  triggerClass: string
  isItemActive: (item: SiteHeaderNavItem) => boolean
}) {
  const mounted = useMounted()

  if (!mounted) {
    return <DesktopNavLinks items={items} triggerClass={triggerClass} isItemActive={isItemActive} />
  }

  return (
    <nav className="hidden items-center xl:gap-4 gap-2 lg:flex">
      {items.map((item) => {
        const isActive = isItemActive(item)

        if (item.type === "link") {
          return (
            <Link
              key={item.label}
              href={item.href}
              className={navItemClassName(triggerClass, isActive)}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          )
        }
        if (item.type === "mega") {
          return (
            <DropdownMenu key={item.label} modal={false}>
              <DropdownMenuTrigger
                className={cn(navItemClassName(triggerClass, isActive), "group inline-flex items-center gap-1")}
                aria-label={`${item.label.replace(/\.$/, "")} menu`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                <ChevronDown
                  className="size-4 opacity-70 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                sideOffset={12}
                className={cn(
                  desktopDropdownContentClass,
                  "w-[min(calc(100vw-2rem),56rem)] max-w-[min(calc(100vw-2rem),56rem)]"
                )}
              >
                <DesktopDropdownCaret />
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                  {item.tiles.map((tile) => (
                    <MegaTileCard key={tile.title} tile={tile} />
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        }
        return (
          <DropdownMenu key={item.label} modal={false}>
            <DropdownMenuTrigger
              className={cn(navItemClassName(triggerClass, isActive), "group inline-flex items-center gap-1")}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
              <ChevronDown
                className="size-4 opacity-70 transition-transform duration-200 group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              sideOffset={12}
              className={cn(desktopDropdownContentClass, "min-w-48")}
            >
              <DesktopDropdownCaret />
              <div className="flex flex-col gap-0.5">
                {item.items.map((sub) => (
                  <DropdownMenuItem
                    key={sub.label}
                    asChild
                    className="rounded-lg px-3 py-2.5 focus:bg-transparent focus:text-a7-text-gray data-[highlighted]:bg-transparent data-[highlighted]:text-a7-text-gray"
                  >
                    <Link href={sub.href}>{sub.label}</Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      })}
    </nav>
  )
}

function MobileNav({
  items,
  open,
  onClose,
  linkClass,
  ctaHref,
  ctaLabel,
  isItemActive,
}: {
  items: SiteHeaderNavItem[]
  open: boolean
  onClose: () => void
  linkClass: string
  ctaHref: string
  ctaLabel: string
  isItemActive: (item: SiteHeaderNavItem) => boolean
}) {
  if (!open) return null

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-[60] bg-black/40 lg:hidden"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div
        id="site-header-mobile-panel"
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-[min(100%,20rem)] flex-col border-l bg-card text-card-foreground shadow-xl lg:hidden",
          "animate-in slide-in-from-right duration-200"
        )}
      >
        <div className="flex items-center justify-between border-b px-4 py-3">
          <span className="text-sm font-semibold">Menu</span>
          <button
            type="button"
            className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-a7-text-gray"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-1">
            {items.map((item) => {
              const isActive = isItemActive(item)

              if (item.type === "link") {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(navItemClassName(linkClass, isActive), "block rounded-md px-3 py-2.5")}
                      onClick={onClose}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              }
              if (item.type === "mega") {
                return (
                  <li key={item.label}>
                    <details className="group rounded-md border border-border">
                      <summary
                        className={cn(
                          "flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2.5 text-xs font-medium xl:text-sm [&::-webkit-details-marker]:hidden",
                          isActive && "font-semibold text-primary"
                        )}
                      >
                        <span className="flex-1">{item.label}</span>
                        <ChevronDown className="size-4 shrink-0 opacity-60 transition-transform group-open:rotate-180" />
                      </summary>
                      <ul className="space-y-1 border-t p-2">
                        {item.tiles.map((tile) => (
                          <li key={tile.title}>
                            <Link
                              href={tile.href}
                              className="block rounded-md px-2 py-2 text-sm"
                              onClick={onClose}
                            >
                              <span className="font-medium">{tile.title}</span>
                              <span className="mt-0.5 block text-xs text-muted-foreground">
          <AedText text={tile.subtitle} />
        </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                )
              }
              return (
                <li key={item.label}>
                  <details className="group rounded-md border border-border">
                    <summary
                      className={cn(
                        "flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2.5 text-sm font-medium [&::-webkit-details-marker]:hidden",
                        isActive && "font-semibold text-primary"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="size-4 opacity-60 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="space-y-1 border-t p-2">
                      {item.items.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block rounded-md px-2 py-2 text-sm"
                            onClick={onClose}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="border-t p-3">
          <Button asChild variant="default" size="sm" shape="pill" className="w-full">
            <Link href={ctaHref} onClick={onClose}>
              {ctaLabel}
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}

type SiteHeaderInnerProps = SiteHeaderProps & {
  isItemActive: (item: SiteHeaderNavItem) => boolean
}

function SiteHeaderInner({
  variant = "solid",
  nav,
  className,
  ctaLabel,
  ctaHref,
  logoSrc = "/assets/brand/logo.svg",
  logoAlt = "A Seven Properties",
  isItemActive,
}: SiteHeaderInnerProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  const isTransparent = variant === "transparent"

  const shell = cn(
    "sticky top-0 z-50 w-full border-b transition-colors",
    isTransparent
      ? "border-white/10 bg-transparent text-white"
      : "border-border bg-white text-a7-text-gray",
    className
  )

  const triggerClass = cn(
    "rounded-md   text-sm font-normal outline-none",
    isTransparent ? "text-white/90" : "text-a7-black"
  )

  const mobileLink = "text-a7-text-gray"

  return (
    <header data-variant={variant} className={shell}>
      <div className="mx-auto flex h-16 items-center justify-between gap-2 px-4  lg:h-[4.25rem] xl:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={183}
            height={48}
            unoptimized
            priority
            className={cn(
              "h-8 w-auto sm:h-8 xl:h-10",
              isTransparent && "brightness-0 invert"
            )}
          />
        </Link>

        <DesktopNav items={nav} triggerClass={triggerClass} isItemActive={isItemActive} />

        <div className="flex shrink-0 items-center gap-2">
          <Button asChild variant="default" size="sm" shape="pill" className="hidden lg:inline-flex">
            <Link className="xl:text-sm text-xs" href={ctaHref}>{ctaLabel}</Link>
          </Button>
          <Button
            asChild
            variant="default"
            size="sm"
            shape="pill"
            className="h-8 min-h-8 gap-0 px-2.5 text-[11px] lg:hidden sm:px-3 sm:text-xs"
          >
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            shape="square"
            className={cn(
              "lg:hidden",
              isTransparent &&
                "text-white hover:bg-white/10 hover:text-white dark:text-white dark:hover:bg-white/10 dark:hover:text-white"
            )}
            aria-expanded={mobileOpen}
            aria-controls="site-header-mobile-panel"
            aria-haspopup="true"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            icon={<Menu />}
          />
        </div>
      </div>

      <MobileNav
        items={nav}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        linkClass={mobileLink}
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
        isItemActive={isItemActive}
      />
    </header>
  )
}

function SiteHeaderWithNavActive(props: SiteHeaderProps) {
  const pathname = usePathname()
  const isItemActive = React.useCallback(
    (item: SiteHeaderNavItem) => isSiteHeaderNavItemActive(pathname, item),
    [pathname]
  )

  return <SiteHeaderInner {...props} isItemActive={isItemActive} />
}

export function SiteHeader(props: SiteHeaderProps) {
  return <SiteHeaderWithNavActive {...props} />
}
