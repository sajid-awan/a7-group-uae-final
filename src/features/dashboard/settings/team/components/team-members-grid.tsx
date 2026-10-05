"use client"

import type { TeamMember } from "../content/team-types"
import { TeamMemberCard } from "./team-member-card"
import { cn } from "@/shared/lib/cn"

export type TeamMembersGridProps = {
  members: TeamMember[]
  className?: string
}

export function TeamMembersGrid({ members, className }: TeamMembersGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3", className)}>
      {members.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  )
}

TeamMembersGrid.displayName = "TeamMembersGrid"
