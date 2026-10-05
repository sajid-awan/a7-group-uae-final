export const INTEGRATIONS_PAGE_COPY = {
  title: "Integrations",
  subtitle: "Manage all task types for tasks",
  emptyTitle: "No integrations found",
  emptyDescription: "Integrations will appear here when they become available.",
} as const

const INTEGRATION_DESCRIPTION =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

export function getIntegrationsMockData() {
  return [
    {
      id: "property-finder",
      name: "Property Finder",
      description: INTEGRATION_DESCRIPTION,
      logoLabel: "PF",
      logoClassName: "bg-[#E42313] text-white",
      status: "installed" as const,
      drawerVariant: "portal" as const,
    },
    {
      id: "bayut",
      name: "Bayut",
      description: INTEGRATION_DESCRIPTION,
      logoLabel: "B",
      logoClassName: "bg-[#00A651] text-white",
      status: "available" as const,
      drawerVariant: "portal" as const,
    },
    {
      id: "magnific",
      name: "Magnific",
      description: INTEGRATION_DESCRIPTION,
      logoLabel: "M",
      logoClassName: "bg-[#111827] text-white",
      status: "installed" as const,
      drawerVariant: "portal" as const,
    },
    {
      id: "dubizzle",
      name: "Dubizzle",
      description: INTEGRATION_DESCRIPTION,
      logoLabel: "D",
      logoClassName: "bg-[#E00000] text-white",
      status: "installed" as const,
      drawerVariant: "portal" as const,
    },
    {
      id: "all-forms",
      name: "All Forms",
      description: INTEGRATION_DESCRIPTION,
      logoLabel: "AF",
      logoClassName: "bg-[#F3F4F6] text-neutral-700",
      status: "available" as const,
      drawerVariant: "forms" as const,
    },
    {
      id: "data-import-export",
      name: "Data Import & Export",
      description: INTEGRATION_DESCRIPTION,
      logoLabel: "↕",
      logoClassName: "bg-[#F3F4F6] text-neutral-700",
      status: "available" as const,
      drawerVariant: "data-import" as const,
    },
  ]
}
