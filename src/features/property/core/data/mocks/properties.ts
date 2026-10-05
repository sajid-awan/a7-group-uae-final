import type { PropertyDto, PropertyListingDto } from "@/features/property"

/** Centralized mock properties payload (API DTO shape). */
const MOCK_PROPERTY_DTOS: readonly PropertyDto[] = [
  {
    id: "damac-district",
    title: "Damac District",
    description: "Introducing Bugatti Residences, an iconic and unprecedented residential project in Dubai.",
    location: "Sheikh Zayed Road Dubai",
    handover: "Handover in Q3 2030",
    developer: "Azizi",
    paymentPlan: "20 / 40 / 70 Payment Plan",
    priceFrom: "AED 1.8M",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "the-hillgate",
    title: "The Hillgate",
    description: "A modern waterfront lifestyle address with curated amenities and elevated urban living.",
    location: "Sheikh Zayed Road Dubai",
    handover: "Handover in Q3 2030",
    developer: "Azizi",
    paymentPlan: "20 / 40 / 70 Payment Plan",
    priceFrom: "AED 1.8M",
    imageUrl: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "baystar-by-vida",
    title: "Baystar by Vida",
    description: "Contemporary residences combining marina views, hospitality-inspired interiors, and convenience.",
    location: "Sheikh Zayed Road Dubai",
    handover: "Handover in Q3 2030",
    developer: "Azizi",
    paymentPlan: "20 / 40 / 70 Payment Plan",
    priceFrom: "AED 1.8M",
    imageUrl: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "silva-at-dubai-creek",
    title: "Silva at Dubai Creek",
    description: "Premium homes crafted for families seeking space, connectivity, and long-term value.",
    location: "Sheikh Zayed Road Dubai",
    handover: "Handover in Q3 2030",
    developer: "Azizi",
    paymentPlan: "20 / 40 / 70 Payment Plan",
    priceFrom: "AED 1.8M",
    imageUrl: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "waldorf-astoria-residences",
    title: "Waldorf Astoria Residences by Nabni",
    description:
      "Introducing an iconic waterfront address with branded residences, private amenities, and skyline views across Dubai.",
    location: "Sheikh Zayed Road Dubai",
    handover: "Handover Q3 2030",
    developer: "Nabni",
    paymentPlan: "70 / 30 Payment Plan",
    priceFrom: "AED 1.8M",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "palm-jumeirah-villas",
    title: "Palm Jumeirah Signature Villas",
    description:
      "Exclusive beachfront villas with private pools, landscaped gardens, and direct access to the Palm's lifestyle destinations.",
    location: "Palm Jumeirah, Dubai",
    handover: "Handover Q4 2029",
    developer: "Emaar",
    paymentPlan: "70 / 30 Payment Plan",
    priceFrom: "AED 2.4M",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "bvlgari-beachfront",
    title: "Bvlgari Beachfront Residences",
    description:
      "A rare collection of ultra-luxury beachfront villas and residences inspired by Bvlgari's timeless Italian elegance, set on a private island in Dubai.",
    location: "Jumeira Bay Island, Dubai",
    handover: "Handover Q2 2027",
    developer: "Meraas",
    paymentPlan: "50 / 50 Payment Plan",
    priceFrom: "AED 25M",
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "bugatti-residences-business-bay",
    title: "Bugatti Residences by Binghatti",
    description:
      "The world's first Bugatti-branded residence — an iconic landmark in Business Bay featuring bespoke hyper-luxury apartments with automotive-inspired design.",
    location: "Business Bay, Dubai",
    handover: "Handover Q4 2026",
    developer: "Binghatti",
    paymentPlan: "60 / 40 Payment Plan",
    priceFrom: "AED 12M",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop",
  },
]

const furnishedListingImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1800&auto=format&fit=crop",
] as const

/** Centralized mock detailed listings payload (API DTO shape). */
const MOCK_PROPERTY_LISTING_DTOS: readonly PropertyListingDto[] = [
  {
    id: "bugatti-residences-business-bay",
    propertyType: "Apartment",
    price: "AED 19,000,000",
    title: "Bugatti Residences in Business Bay, Dubai",
    pricePerSqft: "AED 2,111 /sqft",
    areaSqft: 9000,
    bedrooms: 5,
    bathrooms: 6,
    parking: 2,
    location: "Business Bay, Dubai",
    description:
      "Introducing Bugatti Residences by Binghatti — an iconic waterfront address in Business Bay with bespoke interiors and skyline views.",
    imageUrls: [...furnishedListingImages],
    agentName: "Andrey",
    agentAvatarUrl: "https://i.pravatar.cc/120?img=12",
  },
  {
    id: "furnished-studio-jvc",
    propertyType: "Apartment",
    price: "725,000 AED",
    title: "Fully Furnished Studio | Vacant",
    areaSqft: 647,
    bedrooms: 0,
    bathrooms: 1,
    parking: 1,
    location: "Jumeirah Village Circle, Dubai",
    description:
      "Compact studio in JVC with fitted kitchen, built-in wardrobes, and community pool access — ideal for investors or first-time buyers seeking a turnkey rental.",
    imageUrls: [...furnishedListingImages],
    agentName: "Darlene Gerhold",
    agentAvatarUrl: "https://i.pravatar.cc/120?img=32",
  },
  {
    id: "furnished-1br-marina",
    propertyType: "Apartment",
    price: "750,000 AED",
    title: "Luxury Living | Marina View | Furnished",
    pricePerSqft: "AED 2,635 /sqft",
    areaSqft: 285,
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    location: "Dubai Marina, Dubai",
    description:
      "Bright one-bedroom with full marina views, open living area, and premium furnishings. Walking distance to the promenade, metro, and dining.",
    imageUrls: [...furnishedListingImages],
    agentName: "Mamie McDermott",
    agentAvatarUrl: "https://i.pravatar.cc/120?img=47",
  },
  {
    id: "sundials-villa",
    propertyType: "Villa",
    price: "25,000,000 AED",
    title: "Luxury Living | Palm Jumeirah | Beachfront",
    pricePerSqft: "AED 2,635 /sqft",
    areaSqft: 7535,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    location: "The Sundials, Jumeirah Golf Estates, Dubai",
    description:
      "Spacious open-plan living with premium finishes, floor-to-ceiling glazing, and smart climate and lighting throughout. Private terraces overlook landscaped fairways — ideal for relaxed entertaining.",
    imageUrls: [...furnishedListingImages],
    agentName: "Raul Fisher",
    agentAvatarUrl: "https://i.pravatar.cc/120?img=12",
  },
  {
    id: "palm-villa-furnished",
    propertyType: "Villa",
    price: "18,500,000 AED",
    title: "Fully Furnished | Private Beach | Smart Home",
    areaSqft: 7680,
    bedrooms: 4,
    bathrooms: 5,
    parking: 2,
    location: "Palm Jumeirah, Dubai",
    description:
      "Beachfront villa on the Palm with private pool, smart-home automation, and designer interiors throughout. Rare opportunity for a fully furnished family home on the frond.",
    imageUrls: [...furnishedListingImages],
    agentName: "Abduil Qais",
    agentAvatarUrl: "https://i.pravatar.cc/120?img=12",
  },
  {
    id: "downtown-2br-furnished",
    propertyType: "Apartment",
    price: "1,250,000 AED",
    title: "High Floor | Burj Khalifa View | Furnished",
    pricePerSqft: "AED 1,890 /sqft",
    areaSqft: 661,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    location: "Downtown Dubai, Dubai",
    description:
      "High-floor two-bedroom overlooking Burj Khalifa and the fountains, with upgraded finishes and furnished layout ready for immediate move-in.",
    imageUrls: [...furnishedListingImages],
    agentName: "Darlene Gerhold",
    agentAvatarUrl: "https://i.pravatar.cc/120?img=32",
  },
  {
    id: "arabian-ranches-villa",
    propertyType: "Villa",
    price: "6,800,000 AED",
    title: "Family Villa | Garden | Fully Furnished",
    areaSqft: 4120,
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    location: "Arabian Ranches, Dubai",
    description:
      "Spacious family villa with landscaped garden, maid’s room, and close proximity to schools and the Ranches retail centre. Fully furnished and vacant on transfer.",
    imageUrls: [...furnishedListingImages],
    agentName: "Mamie McDermott",
    agentAvatarUrl: "https://i.pravatar.cc/120?img=47",
  },
]

/** Luxury villa stack for the home “Most Trending” editorial section. */
const MOCK_TRENDING_LUXURY_VILLA_DTOS: readonly PropertyListingDto[] = [
  {
    id: "bvlgari-beachfront",
    propertyType: "Villa",
    price: "137,000,000 AED",
    title: "Bvlgari-Inspired Signature Beachfront | Private Beach",
    pricePerSqft: "AED 1,500 /sqft",
    areaSqft: 7535,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    location: "The Sundials, Jumeirah Golf Estates, Dubai",
    imageUrls: [...furnishedListingImages],
    agentName: "Laurie Lowe",
    agentAvatarUrl: "https://i.pravatar.cc/120?img=25",
  },
  {
    id: "palm-jumeirah-signature",
    propertyType: "Villa",
    price: "98,500,000 AED",
    title: "Signature Villa | Palm Jumeirah Frond | Sea Views",
    pricePerSqft: "AED 1,420 /sqft",
    areaSqft: 9200,
    bedrooms: 5,
    bathrooms: 6,
    parking: 3,
    location: "Palm Jumeirah, Dubai",
    imageUrls: [...furnishedListingImages],
    agentName: "Ronnie Volkman",
    agentAvatarUrl: "https://i.pravatar.cc/120?img=33",
  },
  {
    id: "emirates-hills-mansion",
    propertyType: "Villa",
    price: "72,000,000 AED",
    title: "Contemporary Mansion | Golf Course Plot | Smart Home",
    areaSqft: 11800,
    bedrooms: 6,
    bathrooms: 7,
    parking: 4,
    location: "Emirates Hills, Dubai",
    imageUrls: [...furnishedListingImages],
    agentName: "Megan Fox",
    agentAvatarUrl: "https://i.pravatar.cc/120?img=45",
  },
  {
    id: "dubai-hills-park-villa",
    propertyType: "Villa",
    price: "45,750,000 AED",
    title: "Park-Facing Villa | Dubai Hills Estate | Brand New",
    pricePerSqft: "AED 1,280 /sqft",
    areaSqft: 6800,
    bedrooms: 4,
    bathrooms: 5,
    parking: 2,
    location: "Dubai Hills Estate, Dubai",
    imageUrls: [...furnishedListingImages],
    agentName: "Jessica Mercedes",
    agentAvatarUrl: "https://i.pravatar.cc/120?img=68",
  },
  {
    id: "arabian-ranches-ultra",
    propertyType: "Villa",
    price: "32,900,000 AED",
    title: "Ultra-Luxury Villa | Lagoon Access | Fully Landscaped",
    pricePerSqft: "AED 1,150 /sqft",
    areaSqft: 5400,
    bedrooms: 4,
    bathrooms: 4,
    parking: 2,
    location: "Arabian Ranches III, Dubai",
    imageUrls: [...furnishedListingImages],
    agentName: "Raul Fisher",
    agentAvatarUrl: "https://i.pravatar.cc/120?img=12",
  },
]

/**
 * Returns a cloned array so consumers can sort/mutate without changing
 * the shared source of truth.
 */
export function getMockPropertyDtos(): PropertyDto[] {
  return MOCK_PROPERTY_DTOS.map((dto) => ({ ...dto }))
}

export function getMockPropertyListingDtos(): PropertyListingDto[] {
  return MOCK_PROPERTY_LISTING_DTOS.map((dto) => ({ ...dto }))
}

export function getMockTrendingLuxuryVillaListingDtos(): PropertyListingDto[] {
  return MOCK_TRENDING_LUXURY_VILLA_DTOS.map((dto) => ({ ...dto }))
}

export { MOCK_PROPERTY_DTOS, MOCK_PROPERTY_LISTING_DTOS, MOCK_TRENDING_LUXURY_VILLA_DTOS }
