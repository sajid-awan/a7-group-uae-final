"use client"

import type { TeamSelectableUser } from "../content/team-drawer-types"
import { getInitials } from "@/shared/lib/get-initials"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Checkbox } from "@/shared/ui/checkbox"
import { Field, FieldContent } from "@/shared/ui/field"

export type TeamUserPickerProps = {
  label: string
  users: TeamSelectableUser[]
  selectedUserIds: string[]
  onSelectedUserIdsChange: (userIds: string[]) => void
  className?: string
}

function toggleUserId(current: string[], userId: string, checked: boolean) {
  if (checked) {
    return current.includes(userId) ? current : [...current, userId]
  }

  return current.filter((id) => id !== userId)
}

export function TeamUserPicker({
  label,
  users,
  selectedUserIds,
  onSelectedUserIdsChange,
  className,
}: TeamUserPickerProps) {
  return (
    <Field orientation="vertical" className={className}>
      <FieldContent>
        <div className="rounded-2xl bg-[#F9F9F9] p-4">
          <p className="mb-4 text-sm font-medium text-foreground">{label}</p>
          <div className="max-h-52 overflow-y-auto overscroll-contain pr-1">
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            {users.map((user) => {
              const checked = selectedUserIds.includes(user.id)
              const checkboxId = `team-user-${user.id}`

              return (
                <label
                  key={user.id}
                  htmlFor={checkboxId}
                  className="flex min-w-0 cursor-pointer items-center gap-2.5"
                >
                  <Checkbox
                    id={checkboxId}
                    size="sm"
                    checked={checked}
                    onCheckedChange={(value) =>
                      onSelectedUserIdsChange(toggleUserId(selectedUserIds, user.id, value === true))
                    }
                    aria-label={`Add ${user.name}`}
                  />
                  <Avatar size="sm" shape="circle" className="size-9 shrink-0">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">{user.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{user.jobTitle}</p>
                  </div>
                </label>
              )
            })}
            </div>
          </div>
        </div>
      </FieldContent>
    </Field>
  )
}

TeamUserPicker.displayName = "TeamUserPicker"
