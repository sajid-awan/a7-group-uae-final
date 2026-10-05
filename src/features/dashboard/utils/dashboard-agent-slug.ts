export function slugifyDashboardAgentName(name: string, fallbackIndex?: number) {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

  if (slug) return slug
  return typeof fallbackIndex === "number" ? `agent-${fallbackIndex + 1}` : "agent"
}
