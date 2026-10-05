import {
  AGENTS_PAGE_BREADCRUMBS,
  AGENTS_PAGE_SEO_SECTIONS,
  AGENTS_PAGE_TITLE,
} from "@/features/agent/content/agents-page-content"

export type { RealEstateAgentProfile } from "@/features/agent/core/domain/entity/agent.entity"

export {
  AGENTS_PAGE_BREADCRUMBS,
  AGENTS_PAGE_SEO_SECTIONS,
  AGENTS_PAGE_TITLE,
}

export {
  fetchRealEstateAgents,
  fetchAgentProfile,
  fetchAllAgentProfileIds,
  agentRepository,
} from "@/features/agent/core/data/repository/agent.repository"

export {
  getAgentListings,
  filterAgentListingsByTransaction,
  sortAgentListings,
  type AgentListing,
  type AgentListingTransaction,
} from "@/features/agent/content/agent-listings"

export {
  getAgentTransactions,
  filterAgentTransactionsByDate,
  agentTransactionToListingRow,
  formatAgentTransactionFilterDate,
  AGENT_TRANSACTIONS_DEFAULT_FILTER_DATE,
  type AgentPropertyTransaction,
} from "@/features/agent/content/agent-transactions"

export { getAgentOffPlanProjects, type AgentOffPlanProject } from "@/features/agent/content/agent-off-plan-projects"

export { getAgentAreaExpertise, type AgentExpertiseArea } from "@/features/agent/content/agent-area-expertise"

export function getAgentsPageContent() {
  return {
    breadcrumbs: AGENTS_PAGE_BREADCRUMBS,
    seoSections: AGENTS_PAGE_SEO_SECTIONS,
  }
}
