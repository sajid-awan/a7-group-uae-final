"use client"

import { useState } from "react"

import type { AuthUser } from "@/features/auth/core/domain/entity"
import { DashboardHeader } from "@/shared/layout/dashboard-header"
import { DashboardSidebar } from "@/shared/layout/dashboard-sidebar"

export type DashboardShellProps = {
  user: AuthUser
  children: React.ReactNode
}

export function DashboardShell({ user, children }: DashboardShellProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <div className="flex h-svh max-h-svh min-h-0 w-full overflow-hidden bg-[#f8f9fb]">
      <DashboardSidebar
        user={user}
        mobileOpen={mobileSidebarOpen}
        onMobileOpenChange={setMobileSidebarOpen}
      />
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <DashboardHeader user={user} onOpenMobileSidebar={() => setMobileSidebarOpen(true)} />
        <main className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain bg-[#f8f9fb]">{children}</main>
      </div>
    </div>
  )
}

DashboardShell.displayName = "DashboardShell"
