import type { Metadata } from "next"

import { ListYourPropertyPage } from "@/features/services/ui/list-your-property"
import {
  getListYourPropertyPageContent,
  LIST_YOUR_PROPERTY_HERO_DESCRIPTION,
  LIST_YOUR_PROPERTY_PAGE_TITLE,
} from "@/features/services/services/content"

export const listYourPropertyPageMetadata: Metadata = {
  title: `${LIST_YOUR_PROPERTY_PAGE_TITLE} | A Seven Properties`,
  description: LIST_YOUR_PROPERTY_HERO_DESCRIPTION,
}

export function ListYourPropertyPageRoute() {
  return <ListYourPropertyPage content={getListYourPropertyPageContent()} />
}
