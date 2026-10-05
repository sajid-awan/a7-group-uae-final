"use client"

import { KeyRound, Lock, MoreVertical, Pencil, Shield } from "lucide-react"

import type { UserRecord } from "../content/users-types"
import { Button } from "@/shared/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"

export type UserActionsMenuProps = {
  user: UserRecord
  onEditUser?: (user: UserRecord) => void
  onChangePassword?: (user: UserRecord) => void
  onLockLoginAccess?: (user: UserRecord) => void
  onOtpDisabled?: (user: UserRecord) => void
}

export function UserActionsMenu({
  user,
  onEditUser,
  onChangePassword,
  onLockLoginAccess,
  onOtpDisabled,
}: UserActionsMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="xs"
          shape="pill"
          className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
          aria-label={`Open actions for ${user.name}`}
        >
          <MoreVertical className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-48">
        <DropdownMenuItem onClick={() => onEditUser?.(user)}>
          <Pencil className="size-4" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChangePassword?.(user)}>
          <KeyRound className="size-4" />
          Change Password
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onLockLoginAccess?.(user)}>
          <Lock className="size-4" />
          Lock Login Access
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onOtpDisabled?.(user)}>
          <Shield className="size-4" />
          OTP Disabled
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

UserActionsMenu.displayName = "UserActionsMenu"
