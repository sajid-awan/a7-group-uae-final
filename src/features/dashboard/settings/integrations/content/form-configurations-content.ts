export type FormConfigurationLeadSource = "sell" | "rent" | "buy" | "off-plan"

export type FormConfigurationRecord = {
  id: string
  formName: string
  token: string
  totalLeads: number
  refNo: string
  leadSource: FormConfigurationLeadSource
  apiKey: string
  createdLabel: string
  active: boolean
}

export const FORM_CONFIGURATIONS_DRAWER_COPY = {
  title: "Form Configurations",
  subtitle: "Import your listings from external sources.",
  addButtonLabel: "Add New Form",
  searchPlaceholder: "Search for agents",
  searchAriaLabel: "Search form configurations",
  columns: {
    formNameToken: "Form Name - Token",
    totalLeadsRefNo: "Total Leads - Ref No",
    leadSourceApiKey: "Lead Source - API Key",
    created: "Created",
    active: "Active",
  },
  actions: {
    edit: "Edit",
    apiDocumentation: "API Documentation",
    viewLeads: "View Leads",
  },
  cancelLabel: "Cancel",
  saveLabel: "Save",
} as const

export const FORM_CONFIGURATION_LEAD_SOURCE_LABELS: Record<FormConfigurationLeadSource, string> = {
  sell: "Sell",
  rent: "Rent",
  buy: "Buy",
  "off-plan": "Off-Plan",
}

export const FORM_CONFIGURATION_LEAD_SOURCE_CLASSNAMES: Record<FormConfigurationLeadSource, string> = {
  sell: "border-[#BBF7D0] bg-[#F0FDF4] text-[#166534]",
  rent: "border-[#DDD6FE] bg-[#F5F3FF] text-[#6D28D9]",
  buy: "border-[#FDE68A] bg-[#FFFBEB] text-[#B45309]",
  "off-plan": "border-[#BFDBFE] bg-[#EFF6FF] text-[#1D4ED8]",
}

export const FORM_CONFIGURATIONS_MOCK_DATA: FormConfigurationRecord[] = [
  {
    id: "sales",
    formName: "Sales",
    token: "55b3e0f1-ab0a-4a1e",
    totalLeads: 55,
    refNo: "PL-200643",
    leadSource: "sell",
    apiKey: "wh_l........f660",
    createdLabel: "44 days ago",
    active: true,
  },
  {
    id: "buy",
    formName: "Buy",
    token: "55b3e0f1-ab0a-4a1e",
    totalLeads: 55,
    refNo: "PL-200643",
    leadSource: "buy",
    apiKey: "wh_l........f660",
    createdLabel: "44 days ago",
    active: true,
  },
  {
    id: "rent",
    formName: "Rent",
    token: "55b3e0f1-ab0a-4a1e",
    totalLeads: 55,
    refNo: "PL-200643",
    leadSource: "rent",
    apiKey: "wh_l........f660",
    createdLabel: "44 days ago",
    active: true,
  },
  {
    id: "off-plan",
    formName: "Off-Plan",
    token: "55b3e0f1-ab0a-4a1e",
    totalLeads: 55,
    refNo: "PL-200643",
    leadSource: "off-plan",
    apiKey: "wh_l........f660",
    createdLabel: "44 days ago",
    active: true,
  },
]

export const FORM_CONFIGURATIONS_PAGE_SIZE = 3

export type FormAddFormValues = {
  name: string
  leadSource: string
  agent: string
  searchByPurpose: string
  searchProperty: string
}

export const FORM_ADD_FORM_DRAWER_COPY = {
  title: "Add New Form",
  description: "Team members will be able to edit this post and republish changes.",
  fields: {
    name: "Name",
    leadSource: "Lead Source",
    agent: "Agent",
    searchByPurpose: "Search by Purpose",
    searchProperty: "Search Property",
  },
  placeholders: {
    name: "Enter",
    select: "Select",
  },
  cancelLabel: "Cancel",
  saveLabel: "Save",
} as const

const selectPlaceholderOption = { value: "none", label: "Select" } as const

export const FORM_ADD_LEAD_SOURCE_OPTIONS = [
  selectPlaceholderOption,
  { value: "sell", label: "Sell" },
  { value: "rent", label: "Rent" },
  { value: "buy", label: "Buy" },
  { value: "off-plan", label: "Off-Plan" },
]

export const FORM_ADD_AGENT_OPTIONS = [
  selectPlaceholderOption,
  { value: "aapl-hold", label: "AAPL HOLD" },
  { value: "elena-rivers", label: "Elena Rivers" },
  { value: "james-chen", label: "James Chen" },
  { value: "samantha-smith", label: "Samantha Smith" },
]

export const FORM_ADD_PURPOSE_OPTIONS = [
  selectPlaceholderOption,
  { value: "rent", label: "Rent" },
  { value: "sale", label: "Sale" },
]

export const FORM_ADD_PROPERTY_OPTIONS = [
  selectPlaceholderOption,
  { value: "marina-heights", label: "Marina Heights" },
  { value: "palm-residence", label: "Palm Residence" },
  { value: "downtown-loft", label: "Downtown Loft" },
]

export function createEmptyAddFormValues(): FormAddFormValues {
  return {
    name: "",
    leadSource: "none",
    agent: "none",
    searchByPurpose: "none",
    searchProperty: "none",
  }
}

export type FormLinkedProperty = {
  imageUrl: string
  transaction: "sale" | "rent"
  propertyType: string
  referenceId: string
  title: string
  price: string
  areaSqft: number
  bedrooms: number
  parking: number
  location: string
}

export type FormUpdateFormValues = {
  name: string
  leadSource: string
  agent: string
  searchByPurpose: string
  searchProperty: string
  token: string
  apiEndpointUrl: string
}

export const FORM_UPDATE_FORM_DRAWER_COPY = {
  title: "Update Form",
  description: "Team members will be able to edit this post and republish changes.",
  linkedPropertyLabel: "Linked Property",
  editLinkedPropertyLabel: "Edit linked property",
  formTokenLabel: "Form Token",
  copyTokenLabel: "Copy form token",
  apiEndpointLabel: "API Endpoint URL",
  viewApiDocumentationLabel: "View API Documentation",
  viewApiDocumentationHref: "https://crm.a7group.ae/api/docs",
  copyApiEndpointLabel: "Copy API endpoint URL",
  fields: {
    name: "Name",
    leadSource: "Lead Source",
    agent: "Agent",
    searchByPurpose: "Search by Purpose",
    searchProperty: "Search Property",
  },
  clearSearchPropertyLabel: "Clear search property",
  cancelLabel: "Cancel",
  saveLabel: "Save",
} as const

export const FORM_UPDATE_DEFAULT_LINKED_PROPERTY: FormLinkedProperty = {
  imageUrl:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
  transaction: "rent",
  propertyType: "Villa",
  referenceId: "PL-251580",
  title: "Large 1 Bedroom Apartment for Sale in JBR!",
  price: "AED 25,000,000",
  areaSqft: 7535,
  bedrooms: 2,
  parking: 1,
  location: "The Sundials, Jumeirah Golf Estates, Dubai",
}

export const FORM_UPDATE_DEFAULT_TOKEN = "55b3e0f1-ab0a-4a1e-a47e-19793fe3b902"

export const FORM_UPDATE_DEFAULT_API_ENDPOINT_URL =
  "https://crm.a7group.ae/api/v2/export/XML/403a9f27-5a17.."

export const FORM_UPDATE_NAME_OPTIONS = [
  { value: "sales", label: "Sales" },
  { value: "buy", label: "Buy" },
  { value: "rent", label: "Rent" },
  { value: "off-plan", label: "Off-Plan" },
]

export const FORM_UPDATE_LEAD_SOURCE_OPTIONS = [
  { value: "sell", label: "Sell" },
  { value: "rent", label: "Rent" },
  { value: "buy", label: "Buy" },
  { value: "off-plan", label: "Off-Plan" },
]

export const FORM_UPDATE_AGENT_OPTIONS = [
  { value: "ali-jaffar", label: "Ali Jaffar" },
  { value: "aapl-hold", label: "AAPL HOLD" },
  { value: "elena-rivers", label: "Elena Rivers" },
  { value: "james-chen", label: "James Chen" },
  { value: "samantha-smith", label: "Samantha Smith" },
]

export const FORM_UPDATE_PURPOSE_OPTIONS = [
  { value: "rent", label: "Rent" },
  { value: "sale", label: "Sale" },
]

export function createFormUpdateValuesFromRecord(record: FormConfigurationRecord): FormUpdateFormValues {
  return {
    name: record.id,
    leadSource: record.leadSource === "sell" ? "sell" : record.leadSource,
    agent: "ali-jaffar",
    searchByPurpose: record.leadSource === "rent" ? "rent" : "sale",
    searchProperty: "644917-PL-200643",
    token: FORM_UPDATE_DEFAULT_TOKEN,
    apiEndpointUrl: FORM_UPDATE_DEFAULT_API_ENDPOINT_URL,
  }
}
