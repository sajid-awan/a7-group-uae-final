export type DatabaseStatKey = "email" | "owner" | "phone" | "whatsapp" | "calendar"

export type DatabaseLocationStats = Record<DatabaseStatKey, number>

export type DatabaseLocation = {
  id: string
  slug: string
  areaName: string
  communityName: string
  buildingName: string
  imageUrl: string
  apartmentCount: number
  stats: DatabaseLocationStats
  recordCount: number
}

export type DatabaseRecordInteractions = {
  phone: number
  message: number
  whatsapp: number
}

export type DatabaseRecord = {
  id: string
  locationId: string
  community: string
  locationLabel: string
  buildingName: string
  buildingNumber: string
  rooms: string
  sizeSqft: string
  agentName: string
  agentEmail: string
  agentAvatarUrl: string
  contactCountry: string
  contactNumber: string
  contactName: string
  contactSecondary: string
  clientName: string
  nationality: string
  createdDate: string
  createdTime: string
  createdAgo: string
  interactions: DatabaseRecordInteractions
}
