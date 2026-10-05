"use client"

import type { UserRecord } from "../content/users-types"
import { UserActionsMenu } from "./user-actions-menu"
import {
  DASHBOARD_TABLE_ROW_CLASSNAME,
  DASHBOARD_TABLE_WRAPPER_CLASSNAME,
} from "@/features/dashboard/content/dashboard-view-mode"
import { getInitials } from "@/shared/lib/get-initials"
import { cn } from "@/shared/lib/cn"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { DashboardMemberStatusBadge } from "@/shared/ui/dashboard/dashboard-member-card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"

export type UsersListViewProps = {
  users: UserRecord[]
  className?: string
  onEditUser?: (user: UserRecord) => void
  onChangePassword?: (user: UserRecord) => void
  onLockLoginAccess?: (user: UserRecord) => void
  onOtpDisabled?: (user: UserRecord) => void
}

export function UsersListView({
  users,
  className,
  onEditUser,
  onChangePassword,
  onLockLoginAccess,
  onOtpDisabled,
}: UsersListViewProps) {
  return (
    <div className={cn(DASHBOARD_TABLE_WRAPPER_CLASSNAME, "overflow-x-auto", className)}>
      <Table>
        <TableHeader>
          <TableRow className={cn(DASHBOARD_TABLE_ROW_CLASSNAME, "hover:bg-transparent")}>
            <TableHead className="min-w-[240px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Full Name
            </TableHead>
            <TableHead className="min-w-[150px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Mobile
            </TableHead>
            <TableHead className="min-w-[120px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Role
            </TableHead>
            <TableHead className="min-w-[120px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Permission
            </TableHead>
            <TableHead className="min-w-[150px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Team
            </TableHead>
            <TableHead className="min-w-[100px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Status
            </TableHead>
            <TableHead className="w-[56px] text-right">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length === 0 ? (
            <TableRow className={DASHBOARD_TABLE_ROW_CLASSNAME}>
              <TableCell colSpan={7} className="py-10 text-center text-sm text-muted-foreground">
                No users found.
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <TableRow key={user.id} className={DASHBOARD_TABLE_ROW_CLASSNAME}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar size="md" shape="circle" className="size-10 shrink-0">
                      <AvatarImage src={user.avatarUrl} alt={user.name} />
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="truncate font-inter text-sm font-semibold uppercase text-foreground">
                        {user.name}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap text-sm text-foreground">{user.mobile}</TableCell>
                <TableCell className="text-sm text-foreground">{user.role}</TableCell>
                <TableCell className="text-sm text-foreground">{user.permission}</TableCell>
                <TableCell>
                  <div className="flex min-w-0 items-center gap-2">
                    <Avatar size="xs" shape="circle" className="size-6 shrink-0">
                      <AvatarImage src={user.teamLogoUrl} alt={user.teamName} />
                      <AvatarFallback>{getInitials(user.teamName, 1)}</AvatarFallback>
                    </Avatar>
                    <span className="truncate text-sm text-foreground">{user.teamName}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <DashboardMemberStatusBadge status={user.status} />
                </TableCell>
                <TableCell>
                  <div className="flex justify-end">
                    <UserActionsMenu
                      user={user}
                      onEditUser={onEditUser}
                      onChangePassword={onChangePassword}
                      onLockLoginAccess={onLockLoginAccess}
                      onOtpDisabled={onOtpDisabled}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

UsersListView.displayName = "UsersListView"
