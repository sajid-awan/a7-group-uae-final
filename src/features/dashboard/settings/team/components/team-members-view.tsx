"use client"

import { Plus, Users } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

import { TEAM_MEMBERS_PAGE_SIZE, TEAM_PAGE_COPY, TEAM_TABS } from "../content/team-content"
import type { TeamMember, TeamTab } from "../content/team-types"
import { filterTeamMembersByTab, paginateTeamMembers } from "../utils/team-filters"
import { TeamMembersGrid } from "./team-members-grid"
import { PAGE_ROUTES } from "@/shared/lib/constants/routes"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import { DashboardEmptyState } from "@/shared/ui/dashboard/dashboard-empty-state"
import { DashboardPageHeader } from "@/shared/ui/dashboard/dashboard-page-header"
import { ListingPagination } from "@/shared/ui/listing-pagination"
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs"

export type TeamMembersViewProps = {
  members: TeamMember[]
  onCreateTeam?: () => void
  className?: string
}

export function TeamMembersView({ members, onCreateTeam, className }: TeamMembersViewProps) {
  const [activeTab, setActiveTab] = useState<TeamTab>("all")
  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
  }, [activeTab])

  const filteredMembers = useMemo(
    () => filterTeamMembersByTab(members, activeTab),
    [activeTab, members]
  )

  const { items: visibleMembers, pageCount, safePage } = useMemo(
    () => paginateTeamMembers(filteredMembers, page, TEAM_MEMBERS_PAGE_SIZE),
    [filteredMembers, page]
  )

  return (
    <div className={cn("space-y-6", className)}>
      <DashboardPageHeader
        backHref={PAGE_ROUTES.dashboardSettings}
        backLabel="Back to settings"
        title={TEAM_PAGE_COPY.title}
        subtitle={TEAM_PAGE_COPY.subtitle}
        actions={
          <Button type="button" size="sm" className="shrink-0 gap-2 rounded-lg px-4" onClick={onCreateTeam}>
            <Plus className="size-4" aria-hidden />
            {TEAM_PAGE_COPY.addButtonLabel}
          </Button>
        }
      />

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TeamTab)}
        className="gap-6"
      >
        <TabsList
          variant="line"
          className="h-auto w-full justify-start gap-8 border-b border-border bg-transparent p-0"
        >
          {TEAM_TABS.map((tab) => (
            <TabsTrigger
              key={tab.value}
              variant="line"
              value={tab.value}
              className="px-0 pb-3 text-sm font-medium data-[state=active]:text-primary"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {filteredMembers.length === 0 ? (
        <DashboardEmptyState
          icon={Users}
          title={TEAM_PAGE_COPY.emptyTitle}
          description={TEAM_PAGE_COPY.emptyDescription}
        />
      ) : (
        <>
          <TeamMembersGrid members={visibleMembers} />
          {pageCount > 1 ? (
            <ListingPagination page={safePage} pageCount={pageCount} onPageChange={setPage} />
          ) : null}
        </>
      )}
    </div>
  )
}

TeamMembersView.displayName = "TeamMembersView"
