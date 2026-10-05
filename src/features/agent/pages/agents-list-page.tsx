import type { Metadata } from "next"

import { AgentsPage } from "@/features/agent/ui/agent-list/agents-page"
import { homeDeveloperCtaContent } from "@/features/developer/content/developer-cta-content"
import {
  fetchRealEstateAgents,
  getAgentsPageContent,
  AGENTS_PAGE_TITLE,
} from "@/features/agent"

export const agentsListMetadata: Metadata = {
  title: `${AGENTS_PAGE_TITLE} | A Seven Properties`,
  description:
    "Browse top real estate agents in Dubai. Connect via WhatsApp, view profiles, and find advisors who speak your language.",
}

export async function AgentsListPage() {
  const agents = await fetchRealEstateAgents()
  const pageContent = getAgentsPageContent()

  return (
    <main>
      <AgentsPage
        agents={agents}
        breadcrumbs={pageContent.breadcrumbs}
        seoSections={pageContent.seoSections}
        developerCta={homeDeveloperCtaContent}
      />
    </main>
  )
}
