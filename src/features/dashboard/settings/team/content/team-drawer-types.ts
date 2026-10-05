export type TeamSelectableUser = {
  id: string
  name: string
  jobTitle: string
  avatarUrl: string
}

export type TeamFormValues = {
  teamName: string
  email: string
  teamHeadId: string
  userIds: string[]
  role: string
  permission: string
  status: string
}
