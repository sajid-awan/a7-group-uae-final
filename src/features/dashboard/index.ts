export { DashboardOverview } from "./overview/pages/dashboard-overview"
export type { DashboardOverviewProps } from "./overview/pages/dashboard-overview"

export { DashboardAgentsPage } from "./agents/pages/dashboard-agents-page"
export type { DashboardAgentsPageProps } from "./agents/pages/dashboard-agents-page"

export { DashboardEditAgentPage } from "./agents/pages/dashboard-edit-agent-page"
export type { DashboardEditAgentPageProps } from "./agents/pages/dashboard-edit-agent-page"

export { DashboardAgentDetailPage } from "./agents/pages/dashboard-agent-detail-page"

export { DashboardAgentProfilePage } from "./agents/pages/dashboard-agent-profile-page"
export type { DashboardAgentProfilePageProps } from "./agents/pages/dashboard-agent-profile-page"

export { DashboardAgentListingsPage } from "./agents/pages/dashboard-agent-listings-page"
export type { DashboardAgentListingsPageProps } from "./agents/pages/dashboard-agent-listings-page"

export { DashboardAgentListingDetailPage } from "./agents/pages/dashboard-agent-listing-detail-page"
export type { DashboardAgentListingDetailPageProps } from "./agents/pages/dashboard-agent-listing-detail-page"

export { getDashboardAgentListingDetail } from "./agents/utils/dashboard-agent-listing-detail"

export { DashboardAgentLeadsPage } from "./agents/pages/dashboard-agent-leads-page"
export type { DashboardAgentLeadsPageProps } from "./agents/pages/dashboard-agent-leads-page"

export { DashboardAgentDetailLayout } from "./agents/components/dashboard-agent-detail-layout"
export type { DashboardAgentDetailLayoutProps } from "./agents/components/dashboard-agent-detail-layout"

export { DashboardAnalyticsSections } from "./components/dashboard-analytics-sections"
export type { DashboardAnalyticsSectionsProps } from "./components/dashboard-analytics-sections"

export { DashboardViewModeToolbar } from "./components/dashboard-view-mode-toolbar"
export type { DashboardViewModeToolbarProps } from "./components/dashboard-view-mode-toolbar"

export { DashboardPropertyListingCard } from "./components/dashboard-property-listing-card"
export type {
  DashboardPropertyListingCardProps,
  DashboardPropertyListingCardMenuOption,
  DashboardPropertyListingCardAgent,
  DashboardPropertyListingTransaction,
} from "./components/dashboard-property-listing-card"

export { DashboardLeadGridCard } from "./components/dashboard-lead-grid-card"
export type { DashboardLeadGridCardProps } from "./components/dashboard-lead-grid-card"

export {
  DashboardLeadBudget,
  DashboardLeadChannelBadge,
  DashboardLeadPipelineStageBadge,
  DashboardLeadSource,
  DashboardLeadTypeBadge,
} from "./components/dashboard-lead-ui"

export { DashboardLeadsToolbar } from "./components/dashboard-leads-toolbar"
export type { DashboardLeadsToolbarProps } from "./components/dashboard-leads-toolbar"

export { DashboardLeadsListView } from "./components/dashboard-leads-list-view"
export type { DashboardLeadsListViewProps } from "./components/dashboard-leads-list-view"

export { DashboardLeadsGridView } from "./components/dashboard-leads-grid-view"
export type { DashboardLeadsGridViewProps } from "./components/dashboard-leads-grid-view"

export { DashboardAllListingsPage } from "./listings/pages/all-listings-page"
export type { DashboardAllListingsPageProps } from "./listings/pages/all-listings-page"

export { DashboardTransactionsPage } from "./transactions/pages/dashboard-transactions-page"
export type { DashboardTransactionsPageProps } from "./transactions/pages/dashboard-transactions-page"

export { DashboardTasksPage } from "./tasks/pages/dashboard-tasks-page"
export type { DashboardTasksPageProps } from "./tasks/pages/dashboard-tasks-page"

export { DashboardAddTaskPage } from "./tasks/pages/dashboard-add-task-page"
export type { DashboardAddTaskPageProps } from "./tasks/pages/dashboard-add-task-page"

export { DashboardTaskTypesPage } from "./task-types/pages/dashboard-task-types-page"
export type { DashboardTaskTypesPageProps } from "./task-types/pages/dashboard-task-types-page"

export { DashboardPermissionsPage } from "./settings/permissions/pages/dashboard-permissions-page"
export type { DashboardPermissionsPageProps } from "./settings/permissions/pages/dashboard-permissions-page"

export { DashboardRolesPage } from "./settings/roles/pages/dashboard-roles-page"
export type { DashboardRolesPageProps } from "./settings/roles/pages/dashboard-roles-page"

export { DashboardSettingsTeamPage } from "./settings/team/pages/dashboard-settings-team-page"
export type { DashboardSettingsTeamPageProps } from "./settings/team/pages/dashboard-settings-team-page"

export { DashboardSettingsUsersPage } from "./settings/users/pages/dashboard-settings-users-page"
export type { DashboardSettingsUsersPageProps } from "./settings/users/pages/dashboard-settings-users-page"

export { DashboardIntegrationsPage } from "./settings/integrations/pages/dashboard-integrations-page"
export type { DashboardIntegrationsPageProps } from "./settings/integrations/pages/dashboard-integrations-page"

export { DashboardCompanyProfilePage } from "./settings/company-profile/pages/dashboard-company-profile-page"
export type { DashboardCompanyProfilePageProps } from "./settings/company-profile/pages/dashboard-company-profile-page"

export { DashboardMarketingPage } from "./marketing/pages/dashboard-marketing-page"
export type { DashboardMarketingPageProps } from "./marketing/pages/dashboard-marketing-page"

export { DashboardDatabasePage } from "./database/pages/dashboard-database-page"
export type { DashboardDatabasePageProps } from "./database/pages/dashboard-database-page"

export { DashboardDatabaseLocationPage } from "./database/pages/dashboard-database-location-page"
export type { DashboardDatabaseLocationPageProps } from "./database/pages/dashboard-database-location-page"

export { DashboardOperationsPage } from "./operations/pages/dashboard-operations-page"
export type { DashboardOperationsPageProps } from "./operations/pages/dashboard-operations-page"

export { DashboardWorkflowEditPage } from "./operations/pages/dashboard-workflow-edit-page"
export type { DashboardWorkflowEditPageProps } from "./operations/pages/dashboard-workflow-edit-page"

export { DashboardTransactionsView } from "./transactions/components/transactions-view"
export type { DashboardTransactionsViewProps } from "./transactions/components/transactions-view"

export {
  getDashboardTransactionsMockData,
  dashboardTransactionsPageCopy,
} from "./transactions/content/transactions-mock-data"
export {
  getDashboardTransactionsStats,
  paginateDashboardTransactions,
  filterDashboardTransactionsByDateRange,
} from "./transactions/utils/transactions-filters"
export type {
  DashboardTransaction,
  DashboardTransactionStat,
} from "./transactions/content/transactions-types"
export { TransactionCard } from "@/shared/ui/dashboard"
export type { TransactionCardData, TransactionCardProps } from "@/shared/ui/dashboard"

export { DashboardCreateListingPage } from "./listings/pages/create-listing-page"
export type { DashboardCreateListingPageProps } from "./listings/pages/create-listing-page"

export { DashboardListingDetailPage } from "./listings/pages/listing-detail-page"
export type { DashboardListingDetailPageProps } from "./listings/pages/listing-detail-page"

export { DashboardListingsView } from "./listings/components/listings-view"
export type { DashboardListingsViewProps } from "./listings/components/listings-view"

export { DashboardListingDetailView } from "./listings/components/listing-detail-view"
export type { DashboardListingDetailViewProps } from "./listings/components/listing-detail-view"

export {
  getDashboardAllListingsMockData,
  getDashboardListingsStats,
} from "./listings/content/listings-mock-data"
export {
  getDashboardListingDetail,
  getDashboardListingDetailTitle,
} from "./listings/content/listing-detail-content"
export type {
  DashboardListing,
  DashboardListingFilters,
  DashboardListingStat,
  DashboardListingTab,
} from "./listings/content/listings-types"
export type { DashboardListingDetail } from "./listings/content/listing-detail-types"

export { DashboardLeadsView } from "./components/dashboard-leads-view"
export type { DashboardLeadsViewProps } from "./components/dashboard-leads-view"

export type { DashboardViewMode } from "./content/dashboard-view-mode"
export {
  DASHBOARD_TABLE_ROW_CLASSNAME,
  DASHBOARD_TABLE_WRAPPER_CLASSNAME,
  DASHBOARD_TOOLBAR_ICON_BUTTON_CLASSNAME,
} from "./content/dashboard-view-mode"

export { DashboardAgentForm } from "./components/dashboard-agent-form"
export type { DashboardAgentFormMode, DashboardAgentFormLayout, DashboardAgentFormProps } from "./components/dashboard-agent-form"

export { DashboardAgentGridCard } from "./components/dashboard-agent-grid-card"
export type {
  DashboardAgentGridCardProps,
  DashboardAgentGridCardMenuOption,
  DashboardAgentGridCardStats,
  DashboardAgentPlatformBadge,
} from "./components/dashboard-agent-grid-card"

export { DashboardAgentGridCardShowcase } from "./components/dashboard-agent-grid-card-showcase"

export { DashboardAgentsGridView } from "./components/dashboard-agents-grid-view"
export type { DashboardAgentsGridViewProps } from "./components/dashboard-agents-grid-view"

export { DashboardWelcomeSection } from "./components/dashboard-welcome-section"
export type { DashboardWelcomeSectionProps } from "./components/dashboard-welcome-section"

export { DashboardStatsSection } from "./components/dashboard-stats-section"
export type { DashboardStatsSectionProps } from "./components/dashboard-stats-section"

export { DashboardCommunicationSection } from "./components/dashboard-communication-section"
export type { DashboardCommunicationSectionProps } from "./components/dashboard-communication-section"

export { DashboardLeadSourceSection } from "./components/dashboard-lead-source-section"
export type { DashboardLeadSourceSectionProps } from "./components/dashboard-lead-source-section"

export { DashboardLeadsByTypeSection } from "./components/dashboard-leads-by-type-section"
export type { DashboardLeadsByTypeSectionProps } from "./components/dashboard-leads-by-type-section"

export { DashboardStageDistributionSection } from "./components/dashboard-stage-distribution-section"
export type { DashboardStageDistributionSectionProps } from "./components/dashboard-stage-distribution-section"

export { DashboardConversionRatesSection } from "./components/dashboard-conversion-rates-section"
export type { DashboardConversionRatesSectionProps } from "./components/dashboard-conversion-rates-section"

export { DashboardRevenueSection } from "./components/dashboard-revenue-section"
export type { DashboardRevenueSectionProps } from "./components/dashboard-revenue-section"

export { DashboardCalendar } from "./components/calendar/dashboard-calendar"
export type { DashboardCalendarProps } from "./components/calendar/dashboard-calendar"

export { dashboardOverviewContent } from "./overview/content/dashboard-overview-content"
export { dashboardAgentsContent, getDashboardAgentById, getDashboardAgentBySlug } from "./agents/content/dashboard-agents-content"
export type {
  DashboardAgentFormValues,
  DashboardAgentRow,
  DashboardAgentsContent,
  DashboardAgentStatus,
} from "./agents/content/dashboard-agents-types"
export type {
  CalendarEvent,
  CommunicationDataPoint,
  DashboardCalendarContent,
  DashboardOverviewContent,
  DashboardStat,
  DashboardStatIconKey,
  DashboardStatIconTone,
  EfficiencyMetric,
  LeadSourceChartPoint,
  LeadSourceRow,
  RevenueByTypePoint,
  StageDistributionPoint,
  StageTooltipDetail,
} from "./content/dashboard-content-types"
