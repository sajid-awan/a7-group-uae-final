"use client"

import { KeyRound, UserRound } from "lucide-react"

import type { TeamMember } from "../content/team-types"
import { DashboardMemberCard } from "@/shared/ui/dashboard/dashboard-member-card"
import { cn } from "@/shared/lib/cn"

export type TeamMemberCardProps = {
  member: TeamMember
  className?: string
}

export function TeamMemberCard({ member, className }: TeamMemberCardProps) {
  return (
    <DashboardMemberCard
      className={cn(className)}
      name={member.name}
      email={member.email}
      avatarUrl={member.avatarUrl}
      status={member.status}
      meta={[
        { label: "Role", value: member.role, icon: UserRound },
        { label: "Permission", value: member.permission, icon: KeyRound },
      ]}
    />
  )
}

TeamMemberCard.displayName = "TeamMemberCard"
