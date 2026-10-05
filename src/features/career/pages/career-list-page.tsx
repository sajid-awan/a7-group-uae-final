import type { Metadata } from "next"

import { CareerPage } from "@/features/career/ui/career"
import { CAREER_PAGE_DESCRIPTION, CAREER_PAGE_TITLE } from "@/features/career/content/career-page-content"

export const careerListMetadata: Metadata = {
  title: `${CAREER_PAGE_TITLE} | A Seven Properties`,
  description: CAREER_PAGE_DESCRIPTION,
}

export function CareerListPage() {
  return <CareerPage />
}
