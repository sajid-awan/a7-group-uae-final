"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ChevronDown, Search } from "lucide-react"

import {
  dashboardFooterNavItems,
  dashboardNavItems,
  type DashboardNavItem,
} from "@/shared/content/navigation/dashboard-sidebar-nav"
import type { AuthUser } from "@/features/auth/core/domain/entity"
import { ArrowsLeftIcon, ArrowsRightIcon } from "@/shared/icons"
import { ActionTooltip } from "@/shared/ui/action-tooltip"
import { Avatar, AvatarFallback } from "@/shared/ui/avatar"
import { Badge } from "@/shared/ui/badge"
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle } from "@/shared/ui/drawer"
import { Input } from "@/shared/ui/input"
import { cn } from "@/shared/lib/cn"
import { isDashboardNavGroupActive, isDashboardNavLinkActive } from "./dashboard-sidebar-active"

type NavItemLinkProps = {
  item: DashboardNavItem
  nested?: boolean
  collapsed?: boolean
}

function NavItemLink({ item, nested = false, collapsed = false }: NavItemLinkProps) {
  const pathname = usePathname()
  const active = isDashboardNavLinkActive(pathname, item.href)

  const link = (
    <Link
      href={item.href}
      className={cn(
        "flex items-center text-sm transition-colors",
        collapsed ? "justify-center rounded-lg px-0 py-2.5" : "gap-2.5 rounded-md px-3 py-2",
        nested && !collapsed ? "py-1.5 pl-9 text-xs" : null,
        active
          ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
          : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      )}
    >
      {!nested || collapsed ? (
        <item.icon className={cn("shrink-0 opacity-70", collapsed ? "size-5" : "size-4")} aria-hidden />
      ) : null}
      {!collapsed ? <span className="min-w-0 flex-1 truncate">{item.label}</span> : null}
      {!collapsed && item.badge ? (
        <Badge
          size="sm"
          shape="pill"
          className="border-[#B8E6C0] bg-[#E4F7E8] px-2 py-0.5 text-[10px] font-semibold normal-case text-[#1B5E3B]"
        >
          {item.badge}
        </Badge>
      ) : null}
    </Link>
  )

  if (collapsed && !nested) {
    return (
      <ActionTooltip label={item.label} side="right">
        {link}
      </ActionTooltip>
    )
  }

  return link
}

type NavGroupProps = {
  item: DashboardNavItem
  collapsed?: boolean
  forceOpenHref?: string | null
  onExpandFromGroup?: (href: string) => void
}

function NavGroup({ item, collapsed = false, forceOpenHref, onExpandFromGroup }: NavGroupProps) {
  const pathname = usePathname()
  const children = item.children ?? []
  const hasChildren = children.length > 0
  const { groupActive, open } = isDashboardNavGroupActive(
    pathname,
    item.href,
    children.map((child) => child.href)
  )
  const isForceOpen = forceOpenHref === item.href

  if (collapsed && hasChildren) {
    const active = groupActive

    return (
      <ActionTooltip label={item.label} side="right">
        <button
          type="button"
          onClick={() => onExpandFromGroup?.(item.href)}
          className={cn(
            "flex w-full items-center justify-center rounded-lg px-0 py-2.5 text-sm transition-colors",
            active
              ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
              : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          )}
          aria-label={item.label}
        >
          <item.icon className="size-5 shrink-0 opacity-70" aria-hidden />
        </button>
      </ActionTooltip>
    )
  }

  if (collapsed) {
    return <NavItemLink item={item} collapsed />
  }

  if (!hasChildren) {
    return <NavItemLink item={item} />
  }

  return (
    <details className="group" open={open || isForceOpen}>
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center justify-between gap-2 rounded-md px-3 py-2 text-sm transition-colors [&::-webkit-details-marker]:hidden",
          groupActive
            ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
            : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        )}
      >
        <span className="flex min-w-0 flex-1 items-center gap-2.5">
          <item.icon className="size-4 shrink-0 opacity-70" aria-hidden />
          <span className="truncate">{item.label}</span>
        </span>
        <span className="flex shrink-0 items-center gap-2">
          {item.badge ? (
            <Badge
              size="sm"
              shape="pill"
              className="border-[#B8E6C0] bg-[#E4F7E8] px-2 py-0.5 text-[10px] font-semibold normal-case text-[#1B5E3B]"
            >
              {item.badge}
            </Badge>
          ) : null}
          <ChevronDown className="size-4 shrink-0 opacity-60 transition-transform group-open:rotate-180" />
        </span>
      </summary>
      <div className="mt-0.5 space-y-0.5">
        {children.map((child) => (
          <NavItemLink
            key={child.href}
            item={{ ...item, label: child.label, href: child.href, children: undefined }}
            nested
          />
        ))}
      </div>
    </details>
  )
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

function SidebarCollapseIcon() {
  return (
    <span className="flex flex-col items-center justify-center text-muted-foreground">
      <span className="h-2 w-4 overflow-hidden">
        <ArrowsLeftIcon size={16} className="mx-auto block" />
      </span>
      <span className="h-2 w-4 overflow-hidden">
        <ArrowsRightIcon size={16} className="mx-auto block -translate-y-2" />
      </span>
    </span>
  )
}

function SidebarBrand({ collapsed }: { collapsed: boolean }) {
  if (collapsed) {
    return (
      <Link href="/dashboard" className="inline-flex items-center justify-center" aria-label="A7 Group">
        <span className="relative size-8 shrink-0 overflow-hidden rounded-md bg-black">
          <Image
            src="/assets/logo/a7-group-logo.svg"
            alt=""
            width={32}
            height={32}
            unoptimized
            priority
            className="absolute top-1/2 left-0 h-8 w-auto max-w-none -translate-y-1/2"
          />
        </span>
      </Link>
    )
  }

  return (
    <Link href="/dashboard" className="inline-flex items-center">
      <Image
        src="/assets/logo/a7-group-logo.svg"
        alt="A7 Group"
        width={156}
        height={32}
        unoptimized
        priority
        className="h-8 w-auto"
      />
    </Link>
  )
}

type SidebarBodyProps = {
  user: AuthUser
  collapsed: boolean
  forceOpenHref: string | null
  onExpandFromGroup: (href: string) => void
}

function SidebarBody({ user, collapsed, forceOpenHref, onExpandFromGroup }: SidebarBodyProps) {
  return (
    <>
      <div
        className={cn(
          "shrink-0 border-b border-sidebar-border",
          collapsed ? "flex justify-center px-2 py-4" : "px-4 py-4"
        )}
      >
        <SidebarBrand collapsed={collapsed} />
        {!collapsed ? (
          <div className="mt-3">
            <Input
              inputSize="sm"
              radius="lg"
              placeholder="Search"
              icon={<Search className="size-4" />}
              aria-label="Search dashboard"
            />
          </div>
        ) : null}
      </div>

      <nav className={cn("flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto", collapsed ? "p-2" : "p-3")}>
        {dashboardNavItems.map((item) => (
          <NavGroup
            key={item.href}
            item={item}
            collapsed={collapsed}
            forceOpenHref={forceOpenHref}
            onExpandFromGroup={onExpandFromGroup}
          />
        ))}
      </nav>

      <div className={cn("shrink-0 space-y-0.5 border-t border-sidebar-border", collapsed ? "p-2" : "p-3")}>
        {dashboardFooterNavItems.map((item) => (
          <NavGroup
            key={item.href}
            item={item}
            collapsed={collapsed}
            forceOpenHref={forceOpenHref}
            onExpandFromGroup={onExpandFromGroup}
          />
        ))}
        <div
          className={cn(
            "mt-2 flex items-center",
            collapsed ? "justify-center px-0 py-2" : "gap-2.5 rounded-md px-2 py-2"
          )}
        >
          <Avatar size="sm">
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
          {!collapsed ? (
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-sidebar-foreground">{user.name}</p>
              <p className="truncate text-xs text-muted-foreground">{user.email}</p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}

export type DashboardSidebarProps = {
  user: AuthUser
  mobileOpen?: boolean
  onMobileOpenChange?: (open: boolean) => void
}

export function DashboardSidebar({ user, mobileOpen = false, onMobileOpenChange }: DashboardSidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [forceOpenHref, setForceOpenHref] = useState<string | null>(null)
  const pathname = usePathname()

  const handleExpandFromGroup = (href: string) => {
    setCollapsed(false)
    setForceOpenHref(href)
  }

  useEffect(() => {
    if (mobileOpen) {
      onMobileOpenChange?.(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <>
      <aside
        data-slot="dashboard-sidebar"
        data-collapsed={collapsed ? "true" : "false"}
        className={cn(
          "relative hidden h-full min-h-0 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[width] duration-200 ease-in-out z-[999] lg:flex",
          collapsed ? "w-[72px]" : "w-60"
        )}
      >
        <button
          type="button"
          onClick={() => {
            setCollapsed((current) => {
              const next = !current
              if (next) {
                setForceOpenHref(null)
              }
              return next
            })
          }}
          className="absolute top-4 -right-3 z-20 flex size-8 items-center justify-center rounded-md border border-neutral-200 bg-white shadow-sm transition-colors hover:bg-neutral-50"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <SidebarCollapseIcon />
        </button>

        <SidebarBody
          user={user}
          collapsed={collapsed}
          forceOpenHref={forceOpenHref}
          onExpandFromGroup={handleExpandFromGroup}
        />
      </aside>

      <Drawer
        direction="left"
        open={mobileOpen}
        onOpenChange={(open) => onMobileOpenChange?.(open)}
      >
        <DrawerContent
          className="w-[85%] max-w-[280px] border-r border-sidebar-border bg-sidebar p-0 text-sidebar-foreground sm:max-w-[280px] lg:hidden"
          aria-describedby={undefined}
        >
          <DrawerTitle className="sr-only">Dashboard navigation</DrawerTitle>
          <DrawerDescription className="sr-only">Primary navigation menu</DrawerDescription>
          <div className="flex h-full min-h-0 flex-col">
            <SidebarBody
              user={user}
              collapsed={false}
              forceOpenHref={forceOpenHref}
              onExpandFromGroup={handleExpandFromGroup}
            />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}

DashboardSidebar.displayName = "DashboardSidebar"
