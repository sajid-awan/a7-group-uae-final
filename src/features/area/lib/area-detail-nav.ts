import { getAreaDetailAboutTitleUseCase } from "@/features/area/core/domain/usecase/get-area-detail-about-title.usecase"

export const AREA_DETAIL_NAV_SECTIONS = [
  { slug: "about", label: "The Neighbourhood" },
  { slug: "location", label: "Location" },
  { slug: "properties", label: "Properties" },
  { slug: "lifestyle", label: "Lifestyle" },
  { slug: "amenities", label: "Amenities" },
  { slug: "experts", label: "Ask Local Experts" },
  { slug: "faq", label: "Faq" },
] as const

export type AreaDetailNavSlug = (typeof AREA_DETAIL_NAV_SECTIONS)[number]["slug"]

export function getAreaDetailSectionId(slug: AreaDetailNavSlug) {
  return `area-${slug}`
}

export function getAreaDetailNavItems() {
  return AREA_DETAIL_NAV_SECTIONS.map((section) => ({
    slug: section.slug,
    sectionId: getAreaDetailSectionId(section.slug),
    label: section.label,
  }))
}

export function getAreaDetailSectionIds() {
  return getAreaDetailNavItems().map((item) => item.sectionId)
}

export function getAreaDetailAboutTitle(areaTitle: string) {
  return getAreaDetailAboutTitleUseCase(areaTitle)
}
