"use client"

import { Bell, Menu, Search } from "lucide-react"

import type { AuthUser } from "@/features/auth/core/domain/entity"
import { signOutAction } from "@/features/auth/services/auth-actions"
import { Avatar, AvatarFallback } from "@/shared/ui/avatar"
import { BreadcrumbFromPath } from "@/shared/ui/breadcrumb"
import { Button } from "@/shared/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"
import { Input } from "@/shared/ui/input"

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export type DashboardHeaderProps = {
  user: AuthUser
  onOpenMobileSidebar?: () => void
}

export function DashboardHeader({ user, onOpenMobileSidebar }: DashboardHeaderProps) {
  return (
    <header
      data-slot="dashboard-header"
      className="sticky top-0 z-20 flex h-14 shrink-0 items-center justify-between gap-2 border-b border-border bg-white px-3 sm:gap-4 sm:px-6"
    >
      <div className="flex min-w-0 flex-1 items-center gap-2">
        {onOpenMobileSidebar ? (
          <div className="lg:hidden">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              shape="square"
              className="size-9 min-h-9 min-w-9 shrink-0"
              aria-label="Open menu"
              onClick={onOpenMobileSidebar}
            >
              <Menu className="size-4" />
            </Button>
          </div>
        ) : null}
        <div className="min-w-0 flex-1 overflow-hidden">
          <BreadcrumbFromPath size="sm" />
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <div className="hidden w-56 md:block">
          <Input
            inputSize="sm"
            radius="lg"
            placeholder="Search"
            icon={<Search className="size-4" />}
            aria-label="Search"
          />
        </div>

        <Button variant="ghost" size="icon" shape="square" className="size-9 min-h-9 min-w-9" aria-label="Notifications">
          <Bell className="size-4" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Open user menu"
            >
              <Avatar size="sm">
                <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuLabel>
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs font-normal text-muted-foreground">{user.email}</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a href="/dashboard/settings">Settings</a>
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => {
                void signOutAction()
              }}
            >
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

DashboardHeader.displayName = "DashboardHeader"
