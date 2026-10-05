import type { ListingFormValues, ListingPortalId } from "./listing-form-types"
import { DASHBOARD_AGENT_PLATFORM_LOGOS } from "@/features/dashboard/utils/dashboard-agent-platform-badges"

export const listingFormCopy = {
  pageTitle: "Add New Listing",
  pageSubtitle: "Lorem Ipsum is simply dummy text industry.",
  submitLabel: "Submit",
  cancelLabel: "Cancel",
  sections: {
    basicInformation: "Basic Information",
    propertyDetails: "Property Details",
    tags: "Basic Information",
    titleDescription: "Title & Description",
    amenities: "Basic Information",
    mediaGallery: "Media Gallery (max 20 images)",
    permitDetails: "Permit Details",
    propertyOwner: "Property Owner",
    listingDocuments: "Listing Documents",
    publish: "Publish",
    visibility: "Visibility",
  },
} as const

export const LISTING_PURPOSE_OPTIONS = [
  { value: "rent" as const, label: "Rent" },
  { value: "sale" as const, label: "Sale" },
]

export const LISTING_CATEGORY_OPTIONS = [
  { value: "residential" as const, label: "Residential" },
  { value: "commercial" as const, label: "Commercial" },
]

export const LISTING_LOCATION_OPTIONS = [
  { value: "oliva", label: "Oliva" },
  { value: "dubai-marina", label: "Dubai Marina" },
  { value: "business-bay", label: "Business Bay" },
  { value: "downtown", label: "Downtown Dubai" },
  { value: "jvc", label: "JVC" },
]

export const LISTING_AGENT_OPTIONS = [
  { value: "agent-1", label: "Elena Rivers (RERA)" },
  { value: "agent-2", label: "James Chen (RERA)" },
  { value: "agent-3", label: "Muhammad Talal Khan (RERA)" },
]

export const LISTING_YEARLY_OPTIONS = [
  { value: "yearly", label: "Yearly" },
  { value: "monthly", label: "Monthly" },
]

export const LISTING_CHEQUE_OPTIONS = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "4", label: "4" },
  { value: "6", label: "6" },
  { value: "12", label: "12" },
]

export const LISTING_FORM_PROPERTY_TYPE_OPTIONS = [
  { value: "office", label: "Office" },
  { value: "apartment", label: "Apartment" },
  { value: "villa", label: "Villa" },
  { value: "townhouse", label: "Townhouse" },
]

export const LISTING_BATHROOM_OPTIONS = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4+" },
]

export const LISTING_FURNITURE_OPTIONS = [
  { value: "unfurnished", label: "Unfurnished" },
  { value: "furnished", label: "Furnished" },
  { value: "partly-furnished", label: "Partly Furnished" },
]

export const LISTING_PROJECT_STATUS_OPTIONS = [
  { value: "completed", label: "Completed" },
  { value: "off-plan", label: "Off Plan" },
  { value: "under-construction", label: "Under Construction" },
]

export const LISTING_TAG_OPTIONS = [
  { id: "vacant", label: "Vacant" },
  { id: "exclusive", label: "Exclesive" },
  { id: "managed", label: "Managed Property" },
  { id: "negotiable", label: "Payments is negotiable" },
  { id: "commission", label: "Commission 50/50" },
  { id: "re-commission", label: "Keep your Commission (No-Commission)" },
  { id: "landlord-covered", label: "I am covered from landlord" },
] as const

export const LISTING_AMENITY_OPTIONS = [
  { id: "gym", label: "Gym or Health Club" },
  { id: "pool", label: "Swimming Pool" },
  { id: "lobby", label: "Lobby is Building" },
  { id: "parking", label: "Covered Parking" },
  { id: "vastu", label: "Vastu Compliant" },
] as const

export const LISTING_OWNER_OPTIONS = [
  { value: "owner-1", label: "Monica Geroge" },
  { value: "owner-2", label: "Bruce Wayne" },
  { value: "owner-3", label: "Ahmed Al Mansoori" },
]

export const LISTING_PORTAL_OPTIONS = [
  {
    id: "propmatch" as const,
    label: "PropMatch",
    imageSrc: DASHBOARD_AGENT_PLATFORM_LOGOS.logo1,
  },
  {
    id: "propertyfinder" as const,
    label: "PropertyFinder",
    imageSrc: DASHBOARD_AGENT_PLATFORM_LOGOS.logo1,
  },
  {
    id: "bayut" as const,
    label: "Bayut",
    imageSrc: DASHBOARD_AGENT_PLATFORM_LOGOS.logo2,
  },
  {
    id: "dubizzle" as const,
    label: "Dubizzle",
    imageSrc: DASHBOARD_AGENT_PLATFORM_LOGOS.logo3,
  },
] satisfies Array<{
  id: ListingPortalId
  label: string
  imageSrc: string
}>

export const LISTING_DOCUMENT_SLOTS = [
  { id: "title-deed", label: "Title deed / Oqood", description: "PDF, JPG, PNG up to 10MB" },
  { id: "noc", label: "NOC Document", description: "PDF, JPG, PNG up to 10MB" },
  { id: "passport", label: "Owner Passport", description: "PDF, JPG, PNG up to 10MB" },
] as const

export const LISTING_VISIBILITY_OPTIONS = [
  { value: "draft" as const, label: "Draft" },
  { value: "private" as const, label: "Private" },
  { value: "public" as const, label: "Public" },
]

export function createEmptyListingFormValues(): ListingFormValues {
  return {
    purpose: "rent",
    category: "residential",
    searchLocation: "",
    price: "",
    unitNumber: "",
    listingAgent: "",
    assignedAgent: "",
    location: "",
    yearlyPrice: "yearly",
    numberOfCheques: "0",
    unitNo: "",
    propertyType: "office",
    sizeSqft: "0",
    bathrooms: "0",
    furnitureStatus: "unfurnished",
    projectStatus: "completed",
    referenceNumber: "",
    availableFrom: "",
    tags: ["vacant"],
    title: "",
    description: "",
    amenities: ["gym"],
    permitNumber: "",
    permitUrl: "",
    ownerId: "",
    visibility: "draft",
    portals: {
      propmatch: { enabled: true },
      propertyfinder: { enabled: true },
      bayut: { enabled: false },
      dubizzle: { enabled: false },
    },
  }
}
