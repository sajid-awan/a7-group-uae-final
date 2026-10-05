import type { Metadata } from "next"

import { PropertyManagementPage } from "@/features/services/ui/property-management"
import {
  getPropertyManagementPageContent,
  PROPERTY_MANAGEMENT_PAGE_TITLE,
} from "@/features/services/services/content"

export const propertyManagementPageMetadata: Metadata = {
  title: `${PROPERTY_MANAGEMENT_PAGE_TITLE} | A Seven Properties`,
  description:
    "Professional property management in Dubai — tenant placement, rent collection, maintenance, and compliance.",
}

export function PropertyManagementPageRoute() {
  return <PropertyManagementPage content={getPropertyManagementPageContent()} />
}
