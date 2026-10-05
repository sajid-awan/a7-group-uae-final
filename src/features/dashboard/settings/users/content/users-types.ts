export type UserStatus = "active" | "inactive"

export type UserRecord = {
  id: string
  name: string
  email: string
  avatarUrl: string
  mobile: string
  role: string
  permission: string
  teamName: string
  teamLogoUrl: string
  status: UserStatus
}
