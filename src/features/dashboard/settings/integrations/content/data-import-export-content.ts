export const DATA_IMPORT_EXPORT_DRAWER_COPY = {
  dataImportTitle: "Data Import",
  dataImportSubtitle: "Import your listings from external sources.",
  xmlFeedImportTitle: "XML Feed Import",
  xmlFeedImportDescription:
    "Import property listings from an external XML feed URL. The system will automatically sync your listings periodically.",
  notConfiguredLabel: "Not configured",
  dataExportTitle: "Data Export",
  dataExportSubtitle: "Export your listings to external portals and feeds.",
  genericFeedTitle: "Generic Feed",
  genericFeedDescription: "Universal format for any portal.",
  bayutFeedTitle: "Bayut Feed",
  bayutFeedDescription: "Optimized format for Bayut & Dubizzle.",
  cancelLabel: "Cancel",
  saveLabel: "Save",
} as const

export const DATA_IMPORT_EXPORT_DEFAULT_FEED_URL = "https://a7group.com/properties"

export const DATA_IMPORT_EXPORT_GENERIC_FEED_URL =
  "https://crm.a7group.ae/api/v2/export/XML/55b3e0f1-ab0a-4a1e-9c57-1773c9573df8/generic"

export const DATA_IMPORT_EXPORT_BAYUT_FEED_URL =
  "https://crm.a7group.ae/api/v2/export/XML/55b3e0f1-ab0a-4a1e-9c57-1773c9573df8/bayut"

export const DATA_IMPORT_EXPORT_GENERIC_TABS = [
  { id: "xml", label: "XML" },
  { id: "json", label: "JSON" },
] as const

export const DATA_IMPORT_EXPORT_BAYUT_TABS = [
  { id: "all-xml", label: "All XML" },
  { id: "rentals-xml", label: "Rentals XML" },
  { id: "sales-xml", label: "Sales XML" },
] as const
