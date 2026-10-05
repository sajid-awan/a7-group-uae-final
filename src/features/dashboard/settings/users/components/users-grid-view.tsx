"use client"

import { KeyRound, Phone, UserRound } from "lucide-react"

import type { UserRecord } from "../content/users-types"
import { UserActionsMenu } from "./user-actions-menu"
import { cn } from "@/shared/lib/cn"
import { DashboardMemberCard } from "@/shared/ui/dashboard/dashboard-member-card"

export type UsersGridViewProps = {
  users: UserRecord[]
  className?: string
  onEditUser?: (user: UserRecord) => void
  onChangePassword?: (user: UserRecord) => void
  onLockLoginAccess?: (user: UserRecord) => void
  onOtpDisabled?: (user: UserRecord) => void
}

export function UsersGridView({
  users,
  className,
  onEditUser,
  onChangePassword,
  onLockLoginAccess,
  onOtpDisabled,
}: UsersGridViewProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3", className)}>
      {users.map((user) => (
        <DashboardMemberCard
          key={user.id}
          name={user.name}
          email={user.email}
          avatarUrl={user.avatarUrl}
          status={user.status}
          headerAction={
            <UserActionsMenu
              user={user}
              onEditUser={onEditUser}
              onChangePassword={onChangePassword}
              onLockLoginAccess={onLockLoginAccess}
              onOtpDisabled={onOtpDisabled}
            />
          }
          meta={[
            { label: "Mobile", value: user.mobile, icon: Phone },
            { label: "Role", value: user.role, icon: UserRound },
            { label: "Permission", value: user.permission, icon: KeyRound },
            { label: "Team", value: user.teamName, imageUrl: user.teamLogoUrl },
          ]}
        />
      ))}
    </div>
  )
}

UsersGridView.displayName = "UsersGridView"
