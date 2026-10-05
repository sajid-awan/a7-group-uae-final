import type { Metadata } from "next"

import { AreasPage } from "@/features/area/ui/areas/areas-page"
import { AREAS_PAGE_DESCRIPTION, AREAS_PAGE_TITLE } from "@/features/area/content/areas-page-content"

export const areasListMetadata: Metadata = {
  title: `${AREAS_PAGE_TITLE} | A Seven Properties`,
  description: AREAS_PAGE_DESCRIPTION,
}

export function AreasListPage() {
  return (
    <main>
      <AreasPage />
    </main>
  )
}
