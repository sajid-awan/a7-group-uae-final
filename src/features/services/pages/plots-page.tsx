import type { Metadata } from "next"

import { PlotsPage } from "@/features/services/ui/plots"
import {
  getPlotsPageContent,
  PLOTS_HERO_DESCRIPTION,
  PLOTS_PAGE_TITLE,
} from "@/features/services/services/content"

export const plotsPageMetadata: Metadata = {
  title: `${PLOTS_PAGE_TITLE} | A Seven Properties`,
  description: PLOTS_HERO_DESCRIPTION,
}

export function PlotsPageRoute() {
  return <PlotsPage content={getPlotsPageContent()} />
}
