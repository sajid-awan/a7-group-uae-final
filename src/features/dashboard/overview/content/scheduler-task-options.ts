export const SCHEDULER_TASK_TYPES = [
  { value: "meeting", label: "Meeting" },
  { value: "call", label: "Call" },
  { value: "viewing", label: "Viewing" },
  { value: "deadline", label: "Deadline" },
  { value: "other", label: "Other" },
] as const

export const SCHEDULER_TASK_PRIORITIES = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
] as const

export const SCHEDULER_TASK_STATUSES = [
  { value: "not-started", label: "Not Started" },
  { value: "in-progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
] as const

export const SCHEDULER_ASSIGNEES = [
  { value: "muhammad-talal-khan", label: "Muhammad Talal Khan" },
  { value: "olivia-rhye", label: "Olivia Rhye" },
  { value: "mahmoud-hassan", label: "Mahmoud Hassan" },
] as const

export type SchedulerTaskAttachment = {
  id: string
  title: string
  ageLabel: string
  fileUrl?: string
  mimeType?: string
  kind?: "image" | "document"
}

export const SCHEDULER_ATTACHMENT_ACCEPT =
  "image/*,.pdf,.doc,.docx,.txt,.xls,.xlsx,.ppt,.pptx"

export type SchedulerTaskComment = {
  id: string
  authorName: string
  authorAvatarUrl: string
  timestamp: string
  body: string
}

export type SchedulerTaskActivityLog = {
  id: string
  title: string
  ageLabel: string
  description: string
}

const SCHEDULER_AVATAR = (img: number) => `https://i.pravatar.cc/128?img=${img}`

export const SCHEDULER_MOCK_ATTACHMENTS: SchedulerTaskAttachment[] = [
  { id: "1", title: "Add Title Here!", ageLabel: "28 days ago" },
  { id: "2", title: "Add Title Here!", ageLabel: "28 days ago" },
  { id: "3", title: "Add Title Here!", ageLabel: "28 days ago" },
]

export const SCHEDULER_MOCK_COMMENTS: SchedulerTaskComment[] = [
  {
    id: "1",
    authorName: "Melba Kshlerin Jr.",
    authorAvatarUrl: SCHEDULER_AVATAR(47),
    timestamp: "Mar 30, 19:06",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "2",
    authorName: "Phoebe Cormier",
    authorAvatarUrl: SCHEDULER_AVATAR(32),
    timestamp: "Mar 30, 19:06",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "3",
    authorName: "Dr. Arch Toy DDS",
    authorAvatarUrl: SCHEDULER_AVATAR(12),
    timestamp: "Mar 30, 19:06",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
]

export const SCHEDULER_MOCK_ACTIVITY: SchedulerTaskActivityLog[] = [
  {
    id: "1",
    title: "System Log",
    ageLabel: "2h ago",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "2",
    title: "System Log",
    ageLabel: "2h ago",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "3",
    title: "System Log",
    ageLabel: "2h ago",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
]

export const SCHEDULER_CURRENT_USER_AVATAR = SCHEDULER_AVATAR(68)
