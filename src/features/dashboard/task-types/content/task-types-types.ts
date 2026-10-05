export type TaskTypeRecordStatus = "active" | "pending" | "expired"

export type TaskTypeRecord = {
  id: string
  name: string
  description: string
  descriptionLabel: string
  status: TaskTypeRecordStatus
}
