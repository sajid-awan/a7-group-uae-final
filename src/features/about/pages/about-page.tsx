import type { Metadata } from "next"

import { AboutPage } from "@/features/about/ui/about"
import { ABOUT_PAGE_DESCRIPTION, ABOUT_PAGE_TITLE } from "@/features/about/content/about-page-content"

export const aboutPageMetadata: Metadata = {
  title: `${ABOUT_PAGE_TITLE} | A Seven Properties`,
  description: ABOUT_PAGE_DESCRIPTION,
}

export function AboutPageRoute() {
  return <AboutPage />
}
