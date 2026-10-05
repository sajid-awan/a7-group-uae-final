import type { Metadata } from "next"

import { ServicesPage } from "@/features/services/ui/services"
import {
  getServicesPageContent,
  SERVICES_PAGE_HERO_SUBTITLE,
  SERVICES_PAGE_TITLE,
} from "@/features/services/services/content"

export const servicesPageMetadata: Metadata = {
  title: `${SERVICES_PAGE_TITLE} | A Seven Properties`,
  description: SERVICES_PAGE_HERO_SUBTITLE,
}

export function ServicesPageRoute() {
  return <ServicesPage content={getServicesPageContent()} />
}
