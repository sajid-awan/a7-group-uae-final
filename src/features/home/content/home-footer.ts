import { aboutPath, propertiesListPath } from "@/shared/lib/constants/routes"

export type FooterLinkColumn = {
  title: string
  links: readonly { label: string; href: string }[]
}

export const HOME_FOOTER_PROPERTY_COLUMNS: readonly FooterLinkColumn[] = [
  {
    title: "Villas in Dubai",
    links: [
      { label: "Stunning Villas in Emirates Hills", href: "#" },
      { label: "Luxury Villas in Palm Jumeirah", href: "#" },
      { label: "Family Villas in Arabian Ranches", href: "#" },
      { label: "Waterfront Villas in Dubai Hills", href: "#" },
    ],
  },
  {
    title: "Townhouses in Dubai",
    links: [
      { label: "Modern Residences in Town Square", href: "#" },
      { label: "Townhouses in JVC", href: "#" },
      { label: "Family Homes in Mudon", href: "#" },
      { label: "Townhouses in DAMAC Hills", href: "#" },
    ],
  },
  {
    title: "Commercial properties in Dubai",
    links: [
      { label: "Offices in Business Bay", href: "#" },
      { label: "Retail in Dubai Marina", href: "#" },
      { label: "Warehouses in JAFZA", href: "#" },
      { label: "Commercial in DIFC", href: "#" },
    ],
  },
  {
    title: "Luxury estates in Dubai",
    links: [
      { label: "Estates in Emirates Hills", href: "#" },
      { label: "Signature Villas in Al Barari", href: "#" },
      { label: "Mansions in Palm Jumeirah", href: "#" },
      { label: "Estates in Dubai Hills", href: "#" },
    ],
  },
] as const

export const HOME_FOOTER_MAIN_NAV = [
  { label: "Home", href: "/" },
  { label: "Listing", href: "/properties" },
  { label: "Property", href: propertiesListPath() },
  { label: "About", href: aboutPath() },
] as const

export const HOME_FOOTER_SOCIAL = [
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "TikTok", href: "#" },
] as const

export const HOME_FOOTER_OFFICE =
  "England Cluster Z04 - Office Number 03 Dubai International City - UAE"

export const HOME_FOOTER_EMAIL = "info@a7grouprealestate.com"
