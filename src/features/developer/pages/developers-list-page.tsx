import type { Metadata } from "next"

import { DevelopersPage } from "@/features/developer/ui/developers"
import { DEVELOPERS_PAGE_INTRO, DEVELOPERS_PAGE_TITLE } from "@/features/developer/content/developers-page-content"

export const developersListMetadata: Metadata = {
  title: `${DEVELOPERS_PAGE_TITLE} | A Seven Properties`,
  description: DEVELOPERS_PAGE_INTRO[0],
}

export function DevelopersListPage() {
  return (
    <main className="bg-white">
      <DevelopersPage />
    </main>
  )
}
