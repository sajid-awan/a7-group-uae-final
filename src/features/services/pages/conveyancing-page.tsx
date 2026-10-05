import type { Metadata } from "next"

import { ConveyancingPage } from "@/features/services/ui/conveyancing"
import {
  getConveyancingPageContent,
  CONVEYANCING_HERO_DESCRIPTION,
  CONVEYANCING_PAGE_TITLE,
} from "@/features/services/services/content"

export const conveyancingPageMetadata: Metadata = {
  title: `${CONVEYANCING_PAGE_TITLE} | A Seven Properties`,
  description: CONVEYANCING_HERO_DESCRIPTION,
}

export function ConveyancingPageRoute() {
  return <ConveyancingPage content={getConveyancingPageContent()} />
}
