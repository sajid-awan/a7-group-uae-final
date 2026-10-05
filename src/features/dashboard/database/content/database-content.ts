import type { DatabaseLocation, DatabaseRecord } from "./database-types"

export const DATABASE_PAGE_COPY = {
  title: "Database",
  subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  searchPlaceholder: "Search locations, agents",
  monthFilterLabel: "This Month",
  uploadButtonLabel: "Upload Database",
  exportButtonLabel: "Export CSV",
  archiveAriaLabel: "Archive database",
  emptyTitle: "No database locations found",
  emptyDescription: "Try adjusting your search or upload a new database file.",
  roomsFilterLabel: "Rooms",
  dateFilterLabel: "Select Date",
  detailSearchPlaceholder: "Search",
} as const

export const DATABASE_RECORD_DRAWER_COPY = {
  title: "Manage Contact",
  convertToLeadLabel: "Convert into Lead",
  informationTab: "Information",
  activityTab: "Activity",
  agentNameLabel: "Agent Name",
  deleteLabel: "Delete",
  saveLabel: "Save",
  activityEmptyTitle: "No activity yet",
  activityEmptyDescription: "Interactions with this contact will appear here.",
} as const

export const DATABASE_NATIONALITY_OPTIONS = [
  { value: "italian", label: "Italian" },
  { value: "british", label: "British" },
  { value: "emirati", label: "Emirati" },
  { value: "indian", label: "Indian" },
  { value: "pakistani", label: "Pakistani" },
] as const

const LOCATION_IMAGE_URLS = [
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1448630360998-4c1714911c0c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
] as const

const LOCATION_SEEDS = [
  { areaName: "Downtown Dubai", communityName: "Burj Area", buildingName: "Skyline Residences", apartmentCount: 89 },
  { areaName: "Business Bay", communityName: "Bay Square", buildingName: "Executive Tower", apartmentCount: 64 },
  { areaName: "Dubai Marina", communityName: "Marina Walk", buildingName: "Harbour Gate", apartmentCount: 112 },
  { areaName: "Jumeirah Village Circle", communityName: "District 12", buildingName: "Circle Homes", apartmentCount: 47 },
  { areaName: "Dubai Maritime City", communityName: "Maritime District", buildingName: "Ocean Crest", apartmentCount: 125 },
  { areaName: "Palm Jumeirah", communityName: "Frond M", buildingName: "Azure Villas", apartmentCount: 38 },
  { areaName: "Dubai Hills Estate", communityName: "Park Heights", buildingName: "Hills View", apartmentCount: 73 },
  { areaName: "City Walk", communityName: "Central Plaza", buildingName: "Urban Lofts", apartmentCount: 56 },
  { areaName: "Al Barsha", communityName: "South Block", buildingName: "Metro Heights", apartmentCount: 41 },
] as const

const AGENTS = [
  { name: "Muhammad Talal Khan", email: "muhammad.talal@a7group.com", avatarUrl: "https://i.pravatar.cc/96?img=12" },
  { name: "john Wick", email: "john.wick@a7group.com", avatarUrl: "https://i.pravatar.cc/96?img=11" },
  { name: "Rashad", email: "rashad@a7group.com", avatarUrl: "https://i.pravatar.cc/96?img=15" },
  { name: "Blanche", email: "blanche@a7group.com", avatarUrl: "https://i.pravatar.cc/96?img=32" },
  { name: "Mercedes Huels", email: "mercedes@a7group.com", avatarUrl: "https://i.pravatar.cc/96?img=47" },
] as const

const CONTACT_NAMES = [
  "MADHUPARNA GUPTA BIBHUPADA GUPTA",
  "Ahmed Al Mansoori",
  "Sofia Ricci",
  "James O'Connor",
  "Priya Sharma",
] as const

const NATIONALITIES = ["italian", "british", "emirati", "indian", "pakistani"] as const

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

function buildLocationStats(index: number) {
  return {
    email: 12 + (index % 5),
    owner: 8 + (index % 4),
    phone: 15 + (index % 6),
    whatsapp: 10 + (index % 3),
    calendar: 6 + (index % 4),
  }
}

export function getDatabaseLocationsMockData(): DatabaseLocation[] {
  return LOCATION_SEEDS.map((seed, index) => ({
    id: `location-${index + 1}`,
    slug: slugify(seed.areaName),
    areaName: seed.areaName,
    communityName: seed.communityName,
    buildingName: seed.buildingName,
    imageUrl: LOCATION_IMAGE_URLS[index % LOCATION_IMAGE_URLS.length]!,
    apartmentCount: seed.apartmentCount,
    stats: buildLocationStats(index),
    recordCount: seed.apartmentCount,
  }))
}

export function getDatabaseLocationBySlug(slug: string): DatabaseLocation | undefined {
  return getDatabaseLocationsMockData().find((location) => location.slug === slug)
}

export function getDatabaseRecordsMockData(): DatabaseRecord[] {
  const locations = getDatabaseLocationsMockData()
  const records: DatabaseRecord[] = []

  locations.forEach((location, locationIndex) => {
    const rowsForLocation = Math.min(location.recordCount, 12)

    for (let index = 0; index < rowsForLocation; index += 1) {
      const agent = AGENTS[(locationIndex + index) % AGENTS.length]!
      const roomCount = String((index % 4) + 1).padStart(2, "0")

      records.push({
        id: `record-${location.id}-${index + 1}`,
        locationId: location.id,
        community: location.communityName,
        locationLabel: location.areaName,
        buildingName: location.buildingName,
        buildingNumber: `202${(index % 6) + 1}`,
        rooms: roomCount,
        sizeSqft: `${(180 + index * 12 + locationIndex * 3).toFixed(2)} SQFT`,
        agentName: agent.name,
        agentEmail: agent.email,
        agentAvatarUrl: agent.avatarUrl,
        contactCountry: "United Arab Emirates",
        contactNumber: `+971-5${index}${locationIndex}-7162153`,
        contactName: CONTACT_NAMES[(locationIndex + index) % CONTACT_NAMES.length]!,
        contactSecondary: index % 3 === 0 ? `+971-5${index + 1}${locationIndex}-0000000` : "",
        clientName: `client${index + 1}@email.com`,
        nationality: NATIONALITIES[(locationIndex + index) % NATIONALITIES.length]!,
        createdDate: "Wed, Apr 8, 2026",
        createdTime: "01:15 PM",
        createdAgo: `${120 + index + locationIndex} Days ago`,
        interactions: {
          phone: 2 + (index % 4),
          message: 1 + (index % 3),
          whatsapp: 3 + (index % 5),
        },
      })
    }
  })

  return records
}

export function getDatabaseRecordsByLocationId(locationId: string): DatabaseRecord[] {
  return getDatabaseRecordsMockData().filter((record) => record.locationId === locationId)
}

export const DATABASE_ROOMS_FILTER_OPTIONS = [
  { value: "all", label: "Rooms" },
  { value: "01", label: "01" },
  { value: "02", label: "02" },
  { value: "03", label: "03" },
  { value: "04", label: "04" },
] as const
