/** App Router paths for links and redirects. */
export const PAGE_ROUTES = {
  home: "/",
  properties: "/properties",
  agents: "/agents",
  areas: "/areas",
  developers: "/developers",
  sellProperty: "/sell-property",
  services: "/services",
  search: "/search",
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
  dashboardAgents: "/dashboard/agents",
  dashboardLeads: "/dashboard/leads",
  dashboardListings: "/dashboard/listings",
  dashboardListingsNew: "/dashboard/listings/new",
  dashboardTransactions: "/dashboard/transactions",
  dashboardTasks: "/dashboard/tasks",
  dashboardTasksNew: "/dashboard/tasks/new",
  dashboardTaskTypes: "/dashboard/task-types",
  dashboardSettings: "/dashboard/settings",
  dashboardSettingsRoles: "/dashboard/settings/roles",
  dashboardSettingsPermissions: "/dashboard/settings/permissions",
  dashboardSettingsTeam: "/dashboard/settings/team",
  dashboardSettingsUsers: "/dashboard/settings/users",
  dashboardSettingsIntegrations: "/dashboard/settings/integrations",
  dashboardSettingsCompanyProfile: "/dashboard/settings/company-profile",
  dashboardDatabase: "/dashboard/database",
  dashboardOperations: "/dashboard/operations",
  dashboardMarketing: "/dashboard/marketing",
} as const

export function dashboardDatabaseLocationPath(locationSlug: string) {
  return `/dashboard/database/${locationSlug}`
}

export function dashboardOperationsWorkflowEditPath(workflowId: string) {
  return `/dashboard/operations/${workflowId}/edit`
}

export function dashboardListingDetailPath(listingId: string) {
  return `/dashboard/listings/${listingId}`
}

export function dashboardAgentEditPath(agentSlug: string) {
  return `/dashboard/agents/${agentSlug}/edit`
}

export function dashboardAgentDetailPath(agentSlug: string) {
  return `/dashboard/agents/${agentSlug}`
}

export function dashboardAgentListingsPath(agentSlug: string) {
  return `/dashboard/agents/${agentSlug}/listings`
}

export function dashboardAgentListingDetailPath(agentSlug: string, listingId: string) {
  return `/dashboard/agents/${agentSlug}/listings/${listingId}`
}

/** Relative fetch paths (same-origin). */
export const API_ROUTES = {
  properties: "/api/properties",
  auth: "/api/auth",
} as const

export function offPlanProjectPath(id: string) {
  return `/off-plan/${id}`
}

export function marketingProjectPath(id: string) {
  return `/projects/${id}`
}

/** Resale / ready property detail route. */
export function propertyListingPath(id: string) {
  return `/properties/${id}`
}

export function propertiesListPath() {
  return "/properties"
}

export function sellPropertyPath() {
  return "/sell-property"
}

export function listYourPropertyPath() {
  return "/services/list-your-property"
}

export function servicesPath() {
  return "/services"
}

export function aboutPath() {
  return "/about"
}

export function careerPath() {
  return "/career"
}

export function careerDetailPath(id: string) {
  return `/career/${id}`
}

export function eventsPath() {
  return "/events"
}

export function eventDetailPath(id: string) {
  return `/events/${id}`
}

export function propertyManagementPath() {
  return "/services/property-management"
}

export function mortgagesPath() {
  return "/services/mortgages"
}

export function conveyancingPath() {
  return "/services/conveyancing"
}

export function shortTermRentalsPath() {
  return "/services/short-term-rentals"
}

export function propertySnaggingPath() {
  return "/services/property-snagging"
}

export function plotsPath() {
  return "/services/plots"
}

/** Top real estate agents directory. */
export function agentsPath() {
  return "/agents"
}

/** Dubai neighbourhoods and communities directory. */
export function areasPath() {
  return "/areas"
}

export function areaDetailPath(id: string) {
  return `/areas/${id}`
}

/** Top real estate developers directory. */
export function developersPath() {
  return "/developers"
}

export function developerDetailPath(id: string) {
  return `/developers/${id}`
}

export function agentProfilePath(id: string) {
  return `/agents/${id}`
}
