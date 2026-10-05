import type { Metadata } from "next"

import { ShortTermRentalsPage } from "@/features/services/ui/short-term-rentals"
import {
  getShortTermRentalsPageContent,
  SHORT_TERM_RENTALS_HERO_DESCRIPTION,
  SHORT_TERM_RENTALS_PAGE_TITLE,
} from "@/features/services/services/content"

export const shortTermRentalsPageMetadata: Metadata = {
  title: `${SHORT_TERM_RENTALS_PAGE_TITLE} | A Seven Properties`,
  description: SHORT_TERM_RENTALS_HERO_DESCRIPTION,
}

export function ShortTermRentalsPageRoute() {
  return <ShortTermRentalsPage content={getShortTermRentalsPageContent()} />
}
