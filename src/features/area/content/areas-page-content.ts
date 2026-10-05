import { PROPERTY_LISTING_SEARCH_HERO_IMAGE } from "@/features/property/content/property-listing-page-content"
import { areasPath } from "@/shared/lib/constants/routes"
import type { BreadcrumbItem } from "@/shared/ui/breadcrumb"

export const AREAS_PAGE_TITLE = "Best Areas to Live in Dubai"

export const AREAS_PAGE_DESCRIPTION =
  "Explore Dubai's most desirable neighbourhoods — from waterfront towers and family villa communities to investment corridors with strong rental yields. Compare lifestyle, pricing, and property mix before you shortlist your next home."

export const AREAS_SEARCH_HERO_IMAGE = PROPERTY_LISTING_SEARCH_HERO_IMAGE

export const AREAS_PAGE_BREADCRUMBS: BreadcrumbItem[] = [
  { kind: "home", href: "/" },
  { kind: "link", href: areasPath(), label: "Dubai" },
  { kind: "current", label: AREAS_PAGE_TITLE },
]

export type AreaCategorySlug =
  | "popular"
  | "budget-friendly"
  | "business-friendly"
  | "eco-sustainability"
  | "expats"
  | "family-friendly"
  | "beach-areas"
  | "investment"
  | "luxury"

export type AreaCategory = {
  slug: AreaCategorySlug
  label: string
}

export const AREA_CATEGORIES: AreaCategory[] = [
  { slug: "popular", label: "Popular" },
  { slug: "budget-friendly", label: "Budget Friendly" },
  { slug: "business-friendly", label: "Business Friendly" },
  { slug: "eco-sustainability", label: "Eco & Sustainability" },
  { slug: "expats", label: "Expats" },
  { slug: "family-friendly", label: "Family Friendly" },
  { slug: "beach-areas", label: "Beach Areas" },
  { slug: "investment", label: "Investment" },
  { slug: "luxury", label: "Luxury" },
]

const GALLERY = [
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1800&auto=format&fit=crop",
] as const

export type DubaiAreaListing = {
  id: string
  title: string
  description: string
  imageUrls: string[]
  thumbnails: string[]
  pricePerSqft: string
  propertyTypeStats: { value: string; label: string }[]
  rentAmount: string
  saleAmount: string
  categories: AreaCategorySlug[]
  propertiesAreaSlug: string
}

const DEFAULT_DESCRIPTION =
  "It doesn't get better than this if you want to live in one of Dubai's most stylish neighbourhoods — a vibrant district with waterfront views, curated dining, and excellent connectivity to the rest of the city."

export const DUBAI_AREA_LISTINGS: DubaiAreaListing[] = [
  {
    id: "palm-jumeirah",
    title: "Palm Jumeirah",
    description: DEFAULT_DESCRIPTION,
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 2,635 /sqft",
    propertyTypeStats: [
      { value: "76%", label: "Apartment" },
      { value: "15%", label: "Villa" },
      { value: "9%", label: "Penthouse" },
    ],
    rentAmount: "180,000 AED/year",
    saleAmount: "2,450,000 AED",
    categories: ["popular", "luxury", "beach-areas"],
    propertiesAreaSlug: "Palm Jumeirah",
  },
  {
    id: "emirates-hills",
    title: "Emirates Hills",
    description:
      "An exclusive gated community of custom villas and mansions set around the Montgomerie golf course, offering privacy, landscaped plots, and some of Dubai's highest freehold values.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 3,120 /sqft",
    propertyTypeStats: [
      { value: "12%", label: "Apartment" },
      { value: "82%", label: "Villa" },
      { value: "6%", label: "Penthouse" },
    ],
    rentAmount: "420,000 AED/year",
    saleAmount: "18,500,000 AED",
    categories: ["luxury", "family-friendly"],
    propertiesAreaSlug: "Emirates Hills",
  },
  {
    id: "downtown-dubai",
    title: "Downtown Dubai",
    description:
      "The city's cultural and commercial heart — home to Burj Khalifa, Dubai Mall, and fountain-front apartments with strong short-stay and long-term rental demand.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 2,890 /sqft",
    propertyTypeStats: [
      { value: "88%", label: "Apartment" },
      { value: "8%", label: "Villa" },
      { value: "4%", label: "Penthouse" },
    ],
    rentAmount: "145,000 AED/year",
    saleAmount: "1,850,000 AED",
    categories: ["popular", "business-friendly", "investment"],
    propertiesAreaSlug: "Downtown Dubai",
  },
  {
    id: "dubai-marina",
    title: "Dubai Marina",
    description:
      "A high-rise waterfront district with marina walks, beach access, and one of Dubai's most active rental markets — popular with young professionals and holiday-home investors.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 2,410 /sqft",
    propertyTypeStats: [
      { value: "91%", label: "Apartment" },
      { value: "6%", label: "Villa" },
      { value: "3%", label: "Penthouse" },
    ],
    rentAmount: "95,000 AED/year",
    saleAmount: "980,000 AED",
    categories: ["popular", "beach-areas", "expats", "investment"],
    propertiesAreaSlug: "Dubai Marina",
  },
  {
    id: "jvc",
    title: "Jumeirah Village Circle",
    description:
      "A circular master community with parks, schools, and mid-rise apartments at accessible price points — a favourite for first-time buyers and yield-focused investors.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 1,180 /sqft",
    propertyTypeStats: [
      { value: "84%", label: "Apartment" },
      { value: "14%", label: "Villa" },
      { value: "2%", label: "Penthouse" },
    ],
    rentAmount: "62,000 AED/year",
    saleAmount: "690,000 AED",
    categories: ["budget-friendly", "family-friendly", "investment"],
    propertiesAreaSlug: "JVC",
  },
  {
    id: "business-bay",
    title: "Business Bay",
    description:
      "A central business district with canal-front towers, flexible layouts, and proximity to Downtown — ideal for professionals and corporate tenants.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 2,150 /sqft",
    propertyTypeStats: [
      { value: "94%", label: "Apartment" },
      { value: "4%", label: "Villa" },
      { value: "2%", label: "Penthouse" },
    ],
    rentAmount: "88,000 AED/year",
    saleAmount: "1,250,000 AED",
    categories: ["business-friendly", "investment", "expats"],
    propertiesAreaSlug: "Business Bay",
  },
  {
    id: "dubai-hills",
    title: "Dubai Hills Estate",
    description:
      "A green master-planned community with Dubai Hills Mall, schools, and a mix of villas and apartments — designed for families seeking parks and community amenities.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 1,920 /sqft",
    propertyTypeStats: [
      { value: "58%", label: "Apartment" },
      { value: "38%", label: "Villa" },
      { value: "4%", label: "Penthouse" },
    ],
    rentAmount: "110,000 AED/year",
    saleAmount: "1,680,000 AED",
    categories: ["family-friendly", "eco-sustainability", "popular"],
    propertiesAreaSlug: "Dubai Hills Estate",
  },
  {
    id: "bluewaters",
    title: "Bluewaters Island",
    description:
      "An island destination with Ain Dubai, curated retail, and boutique residences — a premium address for lifestyle buyers seeking exclusivity near the coast.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 2,780 /sqft",
    propertyTypeStats: [
      { value: "72%", label: "Apartment" },
      { value: "22%", label: "Villa" },
      { value: "6%", label: "Penthouse" },
    ],
    rentAmount: "165,000 AED/year",
    saleAmount: "2,890,000 AED",
    categories: ["luxury", "beach-areas"],
    propertiesAreaSlug: "Bluewaters",
  },
  {
    id: "arabian-ranches",
    title: "Arabian Ranches",
    description:
      "A established villa community with golf, schools, and retail — popular with families relocating for space, gardens, and a suburban feel within Dubai.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 1,650 /sqft",
    propertyTypeStats: [
      { value: "18%", label: "Apartment" },
      { value: "78%", label: "Villa" },
      { value: "4%", label: "Penthouse" },
    ],
    rentAmount: "135,000 AED/year",
    saleAmount: "2,100,000 AED",
    categories: ["family-friendly", "eco-sustainability"],
    propertiesAreaSlug: "Arabian Ranches",
  },
  {
    id: "dubai-south",
    title: "Dubai South",
    description:
      "An emerging corridor anchored by Al Maktoum International Airport and Expo City — attractive entry pricing and long-term growth potential for investors.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 980 /sqft",
    propertyTypeStats: [
      { value: "86%", label: "Apartment" },
      { value: "12%", label: "Villa" },
      { value: "2%", label: "Penthouse" },
    ],
    rentAmount: "48,000 AED/year",
    saleAmount: "520,000 AED",
    categories: ["budget-friendly", "investment", "business-friendly"],
    propertiesAreaSlug: "Dubai South",
  },
  {
    id: "jbr",
    title: "Jumeirah Beach Residence",
    description:
      "A beachfront strip of high-rise towers with The Walk, dining, and direct access to the sand — one of Dubai's most recognisable coastal addresses.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 2,520 /sqft",
    propertyTypeStats: [
      { value: "92%", label: "Apartment" },
      { value: "5%", label: "Villa" },
      { value: "3%", label: "Penthouse" },
    ],
    rentAmount: "120,000 AED/year",
    saleAmount: "1,420,000 AED",
    categories: ["popular", "beach-areas", "expats"],
    propertiesAreaSlug: "JBR",
  },
  {
    id: "jlt",
    title: "Jumeirah Lake Towers",
    description:
      "Cluster towers around lakes and the metro with strong office and residential demand — popular with commuters and corporate tenants.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 1,640 /sqft",
    propertyTypeStats: [
      { value: "89%", label: "Apartment" },
      { value: "9%", label: "Villa" },
      { value: "2%", label: "Penthouse" },
    ],
    rentAmount: "72,000 AED/year",
    saleAmount: "820,000 AED",
    categories: ["business-friendly", "investment", "expats"],
    propertiesAreaSlug: "JLT",
  },
  {
    id: "city-walk",
    title: "City Walk",
    description:
      "An urban lifestyle district blending low-rise residences with retail, dining, and art installations — walkable and design-led.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 2,340 /sqft",
    propertyTypeStats: [
      { value: "81%", label: "Apartment" },
      { value: "14%", label: "Villa" },
      { value: "5%", label: "Penthouse" },
    ],
    rentAmount: "155,000 AED/year",
    saleAmount: "2,200,000 AED",
    categories: ["luxury", "popular", "family-friendly"],
    propertiesAreaSlug: "City Walk",
  },
  {
    id: "meydan",
    title: "Meydan",
    description:
      "Home to the Meydan Racecourse and canal-side villas, offering prestige addresses and newer apartment clusters near Business Bay.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 2,050 /sqft",
    propertyTypeStats: [
      { value: "64%", label: "Apartment" },
      { value: "32%", label: "Villa" },
      { value: "4%", label: "Penthouse" },
    ],
    rentAmount: "98,000 AED/year",
    saleAmount: "1,380,000 AED",
    categories: ["luxury", "investment"],
    propertiesAreaSlug: "Meydan",
  },
  {
    id: "damac-hills",
    title: "Damac Hills",
    description:
      "A golf-community master development with townhouses, villas, and apartments centred on Trump International Golf Club Dubai.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 1,420 /sqft",
    propertyTypeStats: [
      { value: "42%", label: "Apartment" },
      { value: "54%", label: "Villa" },
      { value: "4%", label: "Penthouse" },
    ],
    rentAmount: "105,000 AED/year",
    saleAmount: "1,550,000 AED",
    categories: ["family-friendly", "eco-sustainability", "investment"],
    propertiesAreaSlug: "Damac Hills",
  },
  {
    id: "mirdif",
    title: "Mirdif",
    description:
      "An established eastern suburb with villa streets, City Centre Mirdif, and schools — a practical choice for long-term residents.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 1,090 /sqft",
    propertyTypeStats: [
      { value: "28%", label: "Apartment" },
      { value: "68%", label: "Villa" },
      { value: "4%", label: "Penthouse" },
    ],
    rentAmount: "115,000 AED/year",
    saleAmount: "1,750,000 AED",
    categories: ["family-friendly", "budget-friendly"],
    propertiesAreaSlug: "Mirdif",
  },
  {
    id: "al-barsha",
    title: "Al Barsha",
    description:
      "A central residential belt near Mall of the Emirates with apartments, villas, and strong metro links across new and older stock.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 1,760 /sqft",
    propertyTypeStats: [
      { value: "74%", label: "Apartment" },
      { value: "22%", label: "Villa" },
      { value: "4%", label: "Penthouse" },
    ],
    rentAmount: "78,000 AED/year",
    saleAmount: "950,000 AED",
    categories: ["expats", "investment", "popular"],
    propertiesAreaSlug: "Al Barsha",
  },
  {
    id: "motor-city",
    title: "Motor City",
    description:
      "A themed community with green boulevards, schools, and mid-rise apartments — popular with families seeking value inside Dubai.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 1,020 /sqft",
    propertyTypeStats: [
      { value: "79%", label: "Apartment" },
      { value: "19%", label: "Villa" },
      { value: "2%", label: "Penthouse" },
    ],
    rentAmount: "58,000 AED/year",
    saleAmount: "640,000 AED",
    categories: ["budget-friendly", "family-friendly"],
    propertiesAreaSlug: "Motor City",
  },
  {
    id: "silicon-oasis",
    title: "Dubai Silicon Oasis",
    description:
      "A tech-focused free zone with affordable apartments, offices, and university campuses — strong rental demand from professionals.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 890 /sqft",
    propertyTypeStats: [
      { value: "91%", label: "Apartment" },
      { value: "7%", label: "Villa" },
      { value: "2%", label: "Penthouse" },
    ],
    rentAmount: "52,000 AED/year",
    saleAmount: "580,000 AED",
    categories: ["budget-friendly", "business-friendly", "investment"],
    propertiesAreaSlug: "Dubai Silicon Oasis",
  },
  {
    id: "nad-al-sheba",
    title: "Nad Al Sheba",
    description:
      "An emerging villa and townhouse district near Meydan with larger plots and newer master plans attracting end users and investors.",
    imageUrls: [...GALLERY],
    thumbnails: GALLERY.slice(0, 4),
    pricePerSqft: "AED 1,380 /sqft",
    propertyTypeStats: [
      { value: "34%", label: "Apartment" },
      { value: "62%", label: "Villa" },
      { value: "4%", label: "Penthouse" },
    ],
    rentAmount: "125,000 AED/year",
    saleAmount: "1,920,000 AED",
    categories: ["family-friendly", "investment", "eco-sustainability"],
    propertiesAreaSlug: "Nad Al Sheba",
  },
]

export const AREAS_PAGE_SIZE = 4

export function filterAreasByCategory(
  areas: DubaiAreaListing[],
  category: AreaCategorySlug
): DubaiAreaListing[] {
  if (category === "popular") {
    return [...areas].sort((a, b) => {
      const aPopular = a.categories.includes("popular") ? 0 : 1
      const bPopular = b.categories.includes("popular") ? 0 : 1
      return aPopular - bPopular
    })
  }
  return areas.filter((a) => a.categories.includes(category))
}

export function getAreasForPage(category: AreaCategorySlug = "popular"): DubaiAreaListing[] {
  const filtered = filterAreasByCategory(DUBAI_AREA_LISTINGS, category)
  return filtered.length > 0 ? filtered : DUBAI_AREA_LISTINGS
}
