import type { Metadata } from "next"

import { PropertySnaggingPage } from "@/features/services/ui/property-snagging"
import {
  getPropertySnaggingPageContent,
  PROPERTY_SNAGGING_HERO_DESCRIPTION,
  PROPERTY_SNAGGING_PAGE_TITLE,
} from "@/features/services/services/content"

export const propertySnaggingPageMetadata: Metadata = {
  title: `${PROPERTY_SNAGGING_PAGE_TITLE} | A Seven Properties`,
  description: PROPERTY_SNAGGING_HERO_DESCRIPTION,
}

export function PropertySnaggingPageRoute() {
  return <PropertySnaggingPage content={getPropertySnaggingPageContent()} />
}
