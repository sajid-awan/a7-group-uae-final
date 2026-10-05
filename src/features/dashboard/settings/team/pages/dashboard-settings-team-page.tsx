"use client"

import { useCallback, useMemo, useState } from "react"

import { TeamDrawer } from "../components/team-drawer"
import type { TeamFormValues } from "../content/team-drawer-types"
import { TeamMembersView } from "../components/team-members-view"
import { getTeamMembersMockData } from "../content/team-content"
import { cn } from "@/shared/lib/cn"

export type DashboardSettingsTeamPageProps = {
  className?: string
}

export function DashboardSettingsTeamPage({ className }: DashboardSettingsTeamPageProps) {
  const members = useMemo(() => getTeamMembersMockData(), [])
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleCreateTeam = useCallback(() => {
    setDrawerOpen(true)
  }, [])

  const handleSaveTeam = useCallback((values: TeamFormValues) => {
    void values
  }, [])

  return (
    <div className={cn("p-4 sm:p-6 font-inter", className)}>
      <TeamMembersView members={members} onCreateTeam={handleCreateTeam} />
      <TeamDrawer open={drawerOpen} onOpenChange={setDrawerOpen} onSave={handleSaveTeam} />
    </div>
  )
}

DashboardSettingsTeamPage.displayName = "DashboardSettingsTeamPage"
