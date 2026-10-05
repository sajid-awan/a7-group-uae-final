import { getMockPropertyDtos } from "@/features/property/core/data/mocks/properties"

export type AgentOffPlanProject = {
  id: string
  imageUrls: string[]
  propertyTypes: string
  title: string
  price: string
  location: string
  bedroomSummary: string
  description: string
  paymentPlan: string
  handover: string
  whatsAppOnly?: boolean
}

const GALLERY = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1800&auto=format&fit=crop",
] as const

const OFF_PLAN_OVERRIDES: Partial<AgentOffPlanProject>[] = [
  {
    title: "Golf Vale at Emaar South",
    propertyTypes: "Villa, Apartment",
    price: "AED 25,000,000",
    location: "Emaar South",
    bedroomSummary: "1, 2, 3",
    paymentPlan: "20 / 40 / 70 Payment Plan",
    handover: "Handover 2030",
    whatsAppOnly: true,
  },
  {
    title: "Baystar by Vida",
    propertyTypes: "Apartment",
    price: "AED 18,500,000",
    location: "Dubai Marina",
    bedroomSummary: "1, 2, 3, 4",
  },
  {
    title: "Silva at Dubai Creek",
    propertyTypes: "Apartment, Townhouse",
    price: "AED 12,400,000",
    location: "Dubai Creek Harbour",
    bedroomSummary: "1, 2, 3",
  },
  {
    title: "The Hillgate",
    propertyTypes: "Villa, Apartment",
    price: "AED 9,750,000",
    location: "Mohammed Bin Rashid City",
    bedroomSummary: "2, 3, 4",
  },
  {
    title: "Damac Lagoons — Morocco",
    propertyTypes: "Villa",
    price: "AED 6,800,000",
    location: "Damac Lagoons",
    bedroomSummary: "4, 5, 6",
  },
  {
    title: "Waldorf Astoria Residences",
    propertyTypes: "Apartment, Penthouse",
    price: "AED 32,000,000",
    location: "Palm Jumeirah",
    bedroomSummary: "2, 3, 4",
  },
  {
    title: "Bugatti Residences",
    propertyTypes: "Apartment",
    price: "AED 19,000,000",
    location: "Business Bay",
    bedroomSummary: "3, 4, 5",
  },
  {
    title: "Sobha Hartland II",
    propertyTypes: "Villa, Apartment",
    price: "AED 14,200,000",
    location: "Mohammed Bin Rashid City",
    bedroomSummary: "1, 2, 3",
  },
  {
    title: "Riverside Crescent",
    propertyTypes: "Apartment",
    price: "AED 8,900,000",
    location: "Sobha Hartland",
    bedroomSummary: "1, 2, 3",
  },
  {
    title: "Palm Jebel Ali Villas",
    propertyTypes: "Villa",
    price: "AED 45,000,000",
    location: "Palm Jebel Ali",
    bedroomSummary: "5, 6, 7",
  },
]

const DEFAULT_DESCRIPTION =
  "Premium off-plan residences with flexible payment plans, branded amenities, and strong end-user demand. Register your interest for launch allocations, floor plans, and developer incentives."

function uniqueImageUrls(urls: string[]): string[] {
  return [...new Set(urls.filter(Boolean))]
}

export function getAgentOffPlanProjects(agentId: string): AgentOffPlanProject[] {
  void agentId
  const mocks = getMockPropertyDtos()

  return mocks.map((dto, index) => {
    const override = OFF_PLAN_OVERRIDES[index] ?? {}
    const handover = override.handover ?? dto.handover.replace(/^Handover\s*/i, "Handover ")

    return {
      id: dto.id,
      imageUrls: uniqueImageUrls([dto.imageUrl, ...GALLERY]),
      propertyTypes: override.propertyTypes ?? "Villa, Apartment",
      title: override.title ?? dto.title,
      price: override.price ?? dto.priceFrom.replace(/^From:\s*/i, ""),
      location: override.location ?? dto.location,
      bedroomSummary: override.bedroomSummary ?? "1, 2, 3",
      description: dto.description || DEFAULT_DESCRIPTION,
      paymentPlan: override.paymentPlan ?? dto.paymentPlan,
      handover: handover.includes("Handover") ? handover : `Handover ${handover}`,
      whatsAppOnly: override.whatsAppOnly ?? false,
    }
  })
}
