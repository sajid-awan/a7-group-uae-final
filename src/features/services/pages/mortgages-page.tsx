import type { Metadata } from "next"

import { MortgagesPage } from "@/features/services/ui/mortgages"
import {
  getMortgagesPageContent,
  MORTGAGES_HERO_DESCRIPTION,
  MORTGAGES_PAGE_TITLE,
} from "@/features/services/services/content"

export const mortgagesPageMetadata: Metadata = {
  title: `${MORTGAGES_PAGE_TITLE} | A Seven Properties`,
  description: MORTGAGES_HERO_DESCRIPTION,
}

export function MortgagesPageRoute() {
  return <MortgagesPage content={getMortgagesPageContent()} />
}
