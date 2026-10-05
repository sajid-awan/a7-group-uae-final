import { getMockPropertyDtos } from "@/features/property/core/data/mocks/properties"
import { HOME_REAL_ESTATE_EXPERTS } from "@/features/home/content/home-real-estate-experts"
import type {
  Property,
  PropertyDetail,
  PropertyListing,
  PropertyListingDetail,
  ProjectExpert,
  ProjectFaqItem,
  ProjectLocation,
  ProjectPaymentPlan,
  ProjectFloorPlans,
} from "../../domain/entity/property.entity"
import type {
  PropertyDto,
  PropertyDetailDto,
  PropertyListingDto,
  PropertyListingDetailDto,
} from "../dto/property.dto"

const DEFAULT_PAYMENT_PLANS: ProjectPaymentPlan[] = [
  { icon: "installment", percentage: "20%", label: "First Installment" },
  { icon: "construction", percentage: "55%", label: "Under Construction" },
  { icon: "handover", percentage: "25%", label: "On Handover" },
  { icon: "downPayment", percentage: "10%", label: "Down payment" },
]

const DUBAI_MAP_LAT = 25.1972
const DUBAI_MAP_LNG = 55.2719

function buildMapEmbedUrl(lat: number, lng: number) {
  return `https://www.google.com/maps?q=${lat},${lng}&hl=en&z=14&output=embed`
}

const DEFAULT_LOCATION: ProjectLocation = {
  mapEmbedUrl: buildMapEmbedUrl(DUBAI_MAP_LAT, DUBAI_MAP_LNG),
  latitude: DUBAI_MAP_LAT,
  longitude: DUBAI_MAP_LNG,
  nearby: [
    { label: "11min Burj Khalifa View" },
    { label: "10min Dubai Mall" },
    { label: "8min DIFC" },
    { label: "15min Palm Jumeirah" },
  ],
}

const DEFAULT_AMENITIES = [
  "Luxury Finishing",
  "Gym",
  "Central A/C",
  "CCTV Cameras",
  "Shared Pool",
  "Covered Parking",
  "Landmark View",
  "Play Area",
] as const

const DEFAULT_FAQ: ProjectFaqItem[] = [
  {
    title: "Where is the location of this development?",
    content:
      "The project is located on Sheikh Zayed Road in Dubai, offering excellent connectivity to business districts, retail, and leisure destinations.",
  },
  {
    title: "What is the starting price?",
    content: "Prices start from AED 1.8M with flexible payment plans available for qualified buyers.",
  },
  {
    title: "What property types are offered?",
    content:
      "A curated selection of studio, 1-bedroom, 2-bedroom, and 3-bedroom residences with premium finishes and modern open-plan designs.",
  },
]

const DEFAULT_EXPERTS: ProjectExpert[] = HOME_REAL_ESTATE_EXPERTS.slice(0, 4).map((expert) => ({
  id: expert.id,
  name: expert.name,
  role: expert.role,
  imageUrl: expert.imageUrl,
  whatsAppHref: expert.whatsAppHref,
}))

const DEFAULT_FLOOR_PLANS: ProjectFloorPlans = {
  unitTypes: ["Apartment", "Townhouses", "Duplex", "Studio"],
  units: [
    {
      id: "apt-1br",
      unitType: "Apartment",
      label: "1 Bedroom",
      price: "AED 950,000",
      subTypes: [
        {
          label: "Type 1",
          description:
            "The living room is the heart of the home — a space designed for comfort, relaxation, and gathering. It typically features seating like sofas or armchairs, a coffee table, and often a TV or entertainment unit.",
          details: [
            "Project completion: Q4 2028",
            "Address: 1/A, Booston Tower, DXB",
            "Architecture: Ronald Dowson",
            "Available: Kitchen, Balcony, Dining, Bedroom, Storage",
            "Size: 738 Sqf.",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Type 2+Maid+Study",
          description:
            "Expanded one-bedroom layout with dedicated maid's quarters and a private study nook — ideal for professionals who need extra workspace at home.",
          details: [
            "Project completion: Q4 2028",
            "Address: 1/B, Booston Tower, DXB",
            "Architecture: Ronald Dowson",
            "Available: Kitchen, Balcony, Dining, Bedroom, Maid's Room, Study",
            "Size: 920 Sqf.",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Type 3+Maid",
          description:
            "Corner one-bedroom residence with wraparound glazing, maid's room, and upgraded kitchen finishes throughout.",
          details: [
            "Project completion: Q4 2028",
            "Address: 1/C, Booston Tower, DXB",
            "Architecture: Ronald Dowson",
            "Available: Kitchen, Balcony, Dining, Bedroom, Maid's Room",
            "Size: 845 Sqf.",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Type 4+Maid+Study",
          description:
            "Premium one-bedroom floor plan with maid's room, study, and extended living area for entertaining.",
          details: [
            "Project completion: Q4 2028",
            "Address: 1/D, Booston Tower, DXB",
            "Architecture: Ronald Dowson",
            "Available: Kitchen, Balcony, Dining, Bedroom, Maid's Room, Study",
            "Size: 1,020 Sqf.",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=900&auto=format&fit=crop",
        },
      ],
      description:
        "The living room is the heart of the home — a space designed for comfort, relaxation, and gathering. It typically features seating like sofas or armchairs, a coffee table, and often a TV or entertainment unit.",
      details: [
        "Project completion: Q4 2028",
        "Address: 1/A, Booston Tower, DXB",
        "Architecture: Ronald Dowson",
        "Available: Kitchen, Balcony, Dining, Bedroom, Storage",
        "Size: 738 Sqf.",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop",
    },
    {
      id: "apt-2br",
      unitType: "Apartment",
      label: "2 Bedroom",
      price: "AED 110,000",
      subTypes: [
        {
          label: "Type 1",
          description:
            "Spacious two-bedroom layouts thoughtfully designed for families seeking comfort and privacy, with generous living areas and premium finishes throughout.",
          details: [
            "Project completion: Q4 2028",
            "Address: 2/A, Booston Tower, DXB",
            "Architecture: Ronald Dowson",
            "Available: Kitchen, Balcony, Dining, 2 Bedrooms, Storage",
            "Size: 1,140 Sqf.",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Type 2+Maid",
          description:
            "Two-bedroom residence with maid's quarters, dual balconies, and open-plan kitchen-living zone.",
          details: [
            "Project completion: Q4 2028",
            "Address: 2/B, Booston Tower, DXB",
            "Architecture: Ronald Dowson",
            "Available: Kitchen, 2 Balconies, Dining, 2 Bedrooms, Maid's Room",
            "Size: 1,320 Sqf.",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Type 3+Study",
          description:
            "Flexible two-bedroom plan with a dedicated study and enlarged master suite.",
          details: [
            "Project completion: Q4 2028",
            "Address: 2/C, Booston Tower, DXB",
            "Architecture: Ronald Dowson",
            "Available: Kitchen, Balcony, Dining, 2 Bedrooms, Study",
            "Size: 1,280 Sqf.",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop",
        },
      ],
      description:
        "Spacious two-bedroom layouts thoughtfully designed for families seeking comfort and privacy, with generous living areas and premium finishes throughout.",
      details: [
        "Project completion: Q4 2028",
        "Address: 2/A, Booston Tower, DXB",
        "Architecture: Ronald Dowson",
        "Available: Kitchen, Balcony, Dining, 2 Bedrooms, Storage",
        "Size: 1,140 Sqf.",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=900&auto=format&fit=crop",
    },
    {
      id: "apt-3br",
      unitType: "Apartment",
      label: "3 Bedroom",
      price: "AED 185,000",
      subTypes: [
        {
          label: "Type 1",
          description:
            "Expansive three-bedroom residences offering panoramic city views, dedicated maid's rooms, and versatile living spaces designed for premium family living.",
          details: [
            "Project completion: Q4 2028",
            "Address: 3/A, Booston Tower, DXB",
            "Architecture: Ronald Dowson",
            "Available: Kitchen, Balcony, Dining, 3 Bedrooms, Maid's Room",
            "Size: 1,760 Sqf.",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Type 2+Maid",
          description:
            "Corner three-bedroom layout with wraparound terrace, maid's room, and upgraded ensuite bathrooms.",
          details: [
            "Project completion: Q4 2028",
            "Address: 3/B, Booston Tower, DXB",
            "Architecture: Ronald Dowson",
            "Available: Kitchen, Terrace, Dining, 3 Bedrooms, Maid's Room",
            "Size: 1,940 Sqf.",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
        },
      ],
      description:
        "Expansive three-bedroom residences offering panoramic city views, dedicated maid's rooms, and versatile living spaces designed for premium family living.",
      details: [
        "Project completion: Q4 2028",
        "Address: 3/A, Booston Tower, DXB",
        "Architecture: Ronald Dowson",
        "Available: Kitchen, Balcony, Dining, 3 Bedrooms, Maid's Room",
        "Size: 1,760 Sqf.",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=900&auto=format&fit=crop",
    },
    {
      id: "th-3br",
      unitType: "Townhouses",
      label: "3 Bedroom Townhouse",
      price: "AED 2,400,000",
      subTypes: [
        {
          label: "Type A",
          description:
            "Spacious townhouse layouts with private gardens and multi-level living, ideal for families seeking space and privacy.",
          details: [
            "Project completion: Q4 2028",
            "Address: Townhouse Block B, DXB",
            "Size: 2,450 Sqf.",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Type B+Maid",
          description:
            "Expanded townhouse with dedicated maid's quarters, rooftop terrace, and landscaped garden access.",
          details: [
            "Project completion: Q4 2028",
            "Address: Townhouse Block B, DXB",
            "Size: 2,850 Sqf.",
            "Maid's room with en-suite",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop",
        },
      ],
      description:
        "Spacious townhouse layouts with private gardens and multi-level living, ideal for families seeking space and privacy.",
      details: [
        "Project completion: Q4 2028",
        "Address: Townhouse Block B, DXB",
        "Size: 2,450 Sqf.",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
    },
    {
      id: "th-4br",
      unitType: "Townhouses",
      label: "4 Bedroom Townhouse",
      price: "AED 3,100,000",
      subTypes: [
        {
          label: "Type 1",
          description:
            "Premium four-bedroom townhouses with landscaped terraces and dedicated parking for growing families.",
          details: [
            "Project completion: Q4 2028",
            "Address: Townhouse Block C, DXB",
            "Size: 3,200 Sqf.",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Type 2+Study",
          description:
            "Four-bedroom townhouse with private study, double-height living room, and rear garden patio.",
          details: [
            "Project completion: Q4 2028",
            "Address: Townhouse Block C, DXB",
            "Size: 3,450 Sqf.",
            "Private study on ground floor",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=900&auto=format&fit=crop",
        },
      ],
      description:
        "Premium four-bedroom townhouses with landscaped terraces and dedicated parking for growing families.",
      details: [
        "Project completion: Q4 2028",
        "Address: Townhouse Block C, DXB",
        "Size: 3,200 Sqf.",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop",
    },
    {
      id: "duplex-2br",
      unitType: "Duplex",
      label: "2 Bedroom Duplex",
      price: "AED 1,650,000",
      subTypes: [{ label: "Lower + Upper" }],
      description:
        "Two-level duplex residences combining open living zones with private sleeping quarters and skyline views.",
      details: [
        "Project completion: Q4 2028",
        "Address: Duplex Tower, DXB",
        "Size: 1,520 Sqf.",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=900&auto=format&fit=crop",
    },
    {
      id: "studio-std",
      unitType: "Studio",
      label: "Studio",
      price: "AED 720,000",
      subTypes: [
        {
          label: "Standard",
          description:
            "Efficient studio layouts designed for urban professionals, with smart storage and floor-to-ceiling glazing.",
          details: [
            "Project completion: Q4 2028",
            "Address: Studio Wing, DXB",
            "Size: 485 Sqf.",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=900&auto=format&fit=crop",
        },
        {
          label: "Premium View",
          description:
            "Corner studio with panoramic city views, upgraded finishes, and integrated workspace zone.",
          details: [
            "Project completion: Q4 2028",
            "Address: Studio Wing, DXB",
            "Size: 520 Sqf.",
            "Corner unit with skyline views",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
        },
      ],
      description:
        "Efficient studio layouts designed for urban professionals, with smart storage and floor-to-ceiling glazing.",
      details: [
        "Project completion: Q4 2028",
        "Address: Studio Wing, DXB",
        "Size: 485 Sqf.",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=900&auto=format&fit=crop",
    },
  ],
}

function defaultPropertiesForSale(currentId: string): Property[] {
  return getMockPropertyDtos()
    .filter((p) => p.id !== currentId)
    .slice(0, 4)
    .map(toProperty)
}

function defaultSimilarProjects(currentId: string): Property[] {
  return getMockPropertyDtos()
    .filter((p) => p.id !== currentId)
    .slice(0, 6)
    .map(toProperty)
}

export function toProperty(dto: PropertyDto): Property {
  return {
    id: dto.id,
    title: dto.title,
    description: dto.description,
    location: dto.location,
    handover: dto.handover,
    developer: dto.developer,
    paymentPlan: dto.paymentPlan,
    priceFrom: dto.priceFrom,
    imageUrl: dto.imageUrl,
    projectLogoUrl: dto.projectLogoUrl,
    primaryColor: dto.primaryColor,
    primaryColorHover: dto.primaryColorHover,
    primaryColorSoft: dto.primaryColorSoft,
  }
}

export function toPropertyDetail(dto: PropertyDetailDto): PropertyDetail {
  const base = toProperty(dto)
  return {
    ...base,
    overviewSections: dto.overviewSections ?? [{ title: `${base.title} Overview`, description: base.description }],
    highlights: dto.highlights ?? [{ label: "Developer", value: base.developer }],
    timeline: dto.timeline ?? [{ date: base.handover, label: "Expected handover", status: "upcoming" }],
    galleryImageUrls: dto.galleryImageUrls?.length ? [...dto.galleryImageUrls] : [base.imageUrl],
    floorPlans: dto.floorPlans ?? DEFAULT_FLOOR_PLANS,
    paymentPlans: dto.paymentPlans ?? DEFAULT_PAYMENT_PLANS,
    experts: dto.experts ?? DEFAULT_EXPERTS,
    locationMap: dto.locationMap ?? DEFAULT_LOCATION,
    amenities: dto.amenities ?? [...DEFAULT_AMENITIES],
    propertiesForSale: dto.propertiesForSale?.map(toProperty) ?? defaultPropertiesForSale(dto.id),
    faq: dto.faq ?? DEFAULT_FAQ,
    storySections: dto.storySections ?? [],
    storyAsideImage: dto.storyAsideImage,
    similarProjects: dto.similarProjects?.map(toProperty) ?? defaultSimilarProjects(dto.id),
  }
}

export function toPropertyListing(dto: PropertyListingDto): PropertyListing {
  return {
    id: dto.id,
    propertyType: dto.propertyType,
    price: dto.price,
    title: dto.title,
    pricePerSqft: dto.pricePerSqft,
    areaSqft: dto.areaSqft,
    bedrooms: dto.bedrooms,
    bathrooms: dto.bathrooms,
    parking: dto.parking,
    location: dto.location,
    description: dto.description,
    imageUrls: [...dto.imageUrls],
    agentName: dto.agentName,
    agentAvatarUrl: dto.agentAvatarUrl,
  }
}

export function toPropertyListingDetail(dto: PropertyListingDetailDto): PropertyListingDetail {
  const base = toPropertyListing(dto)
  return {
    ...base,
    developer: dto.developer,
    status: dto.status,
    aboutDescription: dto.aboutDescription,
    galleryImageUrls: dto.galleryImageUrls.length ? [...dto.galleryImageUrls] : [...base.imageUrls],
    heroBackgroundImageUrl: dto.heroBackgroundImageUrl,
    totalPhotos: dto.totalPhotos ?? dto.galleryImageUrls.length,
    stats: dto.stats,
    aboutHighlights: dto.aboutHighlights ?? dto.stats,
    amenities: [...dto.amenities],
    transactions: dto.transactions,
    transactionsSubtitle: dto.transactionsSubtitle,
    locationMap: dto.locationMap,
    propertyInfo: dto.propertyInfo,
    regulatoryInfo: dto.regulatoryInfo,
    qrImage: dto.qrImage,
    dldPermitNumber: dto.dldPermitNumber,
    agentRole: dto.agentRole,
    dealerCardHeaderImageUrl: dto.dealerCardHeaderImageUrl,
    agentSocialLinks: dto.agentSocialLinks ?? [],
    agentWhatsAppHref: dto.agentWhatsAppHref,
    agentPhoneHref: dto.agentPhoneHref,
    agentEmailHref: dto.agentEmailHref,
    similarListings: dto.similarListings?.map(toPropertyListing) ?? [],
    inquiryAgencyName: dto.inquiryAgencyName ?? "A Seven Properties",
  }
}
