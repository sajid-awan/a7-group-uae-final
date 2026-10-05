import {
  agentsPath,
  developersPath,
  marketingProjectPath,
  propertiesListPath,
  sellPropertyPath,
  servicesPath,
} from "@/shared/lib/constants/routes"

/** One tile inside a mega-menu panel (e.g. property types). */
export type SiteHeaderMegaTile = {
  title: string
  subtitle: string
  href: string
}

export type SiteHeaderMenuItem = { label: string; href: string }

export type SiteHeaderNavItem =
  | { type: "link"; label: string; href: string }
  | { type: "mega"; label: string; href: string; tiles: SiteHeaderMegaTile[] }
  | { type: "menu"; label: string; href: string; items: SiteHeaderMenuItem[] }

export const defaultSiteHeaderCta = {
  ctaLabel: "Sell Property",
  ctaHref: sellPropertyPath(),
} as const

const listingsHref = propertiesListPath()

export const defaultSiteHeaderNav: SiteHeaderNavItem[] = [
  { type: "link", label: "Home.", href: "/" },
  { type: "link", label: "Services.", href: servicesPath() },
  { type: "link", label: "Find Agent.", href: agentsPath() },
  {
    type: "mega",
    label: "Buy.",
    href: listingsHref,
    tiles: [
      { title: "Apartments", subtitle: "from 450,890 AED", href: listingsHref },
      { title: "Townhouses", subtitle: "from 890,000 AED", href: listingsHref },
      { title: "Villas", subtitle: "from 1,200,000 AED", href: listingsHref },
      { title: "Duplex", subtitle: "from 2,100,000 AED", href: listingsHref },
      { title: "Hotel Apartment", subtitle: "from 650,000 AED", href: listingsHref },
      { title: "Penthouse", subtitle: "from 3,500,000 AED", href: listingsHref },
      { title: "Plots", subtitle: "from 890,000 AED", href: listingsHref },
      { title: "Rental Shops", subtitle: "from 120,000 AED", href: listingsHref },
    ],
  },
  {
    type: "mega",
    label: "Rent.",
    href: listingsHref,
    tiles: [
      { title: "Long term", subtitle: "Annual & multi-year leases", href: listingsHref },
      { title: "Short term", subtitle: "Weekly & monthly stays", href: listingsHref },
    ],
  },
  {
    type: "mega",
    label: "Sell.",
    href: sellPropertyPath(),
    tiles: [
      { title: "List property", subtitle: "Reach qualified buyers", href: sellPropertyPath() },
      { title: "Valuation", subtitle: "Instant market estimate", href: sellPropertyPath() },
    ],
  },
  {
    type: "mega",
    label: "Offplan Project.",
    href: developersPath(),
    tiles: [
      { title: "New launches", subtitle: "Fresh inventory & offers", href: developersPath() },
      { title: "Developers", subtitle: "Browse by builder", href: developersPath() },
    ],
  },
  {
    type: "mega",
    label: "Holiday Homes.",
    href: "#",
    tiles: [
      { title: "Palm Jumeirah Villas", subtitle: "Beachfront luxury stays", href: marketingProjectPath("palm-jumeirah-villas") },
      { title: "Bvlgari Beachfront", subtitle: "Private beach residences", href: marketingProjectPath("bvlgari-beachfront") },
      { title: "Waldorf Astoria Residences", subtitle: "Ultra-luxury hospitality", href: marketingProjectPath("waldorf-astoria-residences") },
      { title: "Bugatti Residences", subtitle: "Business Bay icon", href: marketingProjectPath("bugatti-residences-business-bay") },
    ],
  },
]

function normalizePathname(pathname: string) {
  if (pathname === "/") return "/"
  return pathname.replace(/\/$/, "") || "/"
}

function hrefPathname(href: string) {
  if (!href || href === "#") return null
  try {
    return normalizePathname(new URL(href, "http://localhost").pathname)
  } catch {
    return normalizePathname(href.split("?")[0] ?? href)
  }
}

/** Whether a top-level header nav item matches the current route. */
export function isSiteHeaderNavItemActive(
  pathname: string,
  item: SiteHeaderNavItem
): boolean {
  const path = normalizePathname(pathname)
  const label = item.label.replace(/\.$/, "").trim().toLowerCase()

  if (item.type === "link") {
    if (item.href === "#") return false
    const itemPath = hrefPathname(item.href)
    if (!itemPath) return false
    if (itemPath === "/") return path === "/"
    if (itemPath === "/services") return path.startsWith("/services")
    if (itemPath === "/agents") return path.startsWith("/agents")
    return path === itemPath || path.startsWith(`${itemPath}/`)
  }

  if (label === "buy") {
    return path.startsWith("/properties")
  }

  if (label === "rent") {
    return false
  }

  if (label === "sell") {
    return path.startsWith("/sell-property")
  }

  if (label.includes("offplan")) {
    return (
      path.startsWith("/off-plan") ||
      path.startsWith("/projects") ||
      path.startsWith("/developers")
    )
  }

  const itemPath = hrefPathname(item.href)
  if (itemPath && itemPath !== "/") {
    return path === itemPath || path.startsWith(`${itemPath}/`)
  }

  return false
}
