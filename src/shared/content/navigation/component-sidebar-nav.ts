/** All component docs shown in the sidebar (sorted by label). */
export const componentNavItems = [
  { slug: "accordion", label: "Accordion" },
  { slug: "avatars", label: "Avatars" },
  { slug: "badges", label: "Badges" },
  { slug: "breadcrumb", label: "Breadcrumb" },
  { slug: "button", label: "Button" },
  { slug: "button-groups", label: "Button groups" },
  { slug: "calendar", label: "Calendar" },
  { slug: "property-cards", label: "Cards" },
  { slug: "skeletons", label: "Skeletons" },
  { slug: "checkboxes", label: "Checkboxes" },
  { slug: "dropdowns", label: "Dropdowns" },
  { slug: "file-upload", label: "File upload" },
  { slug: "header", label: "Header" },
  { slug: "icons", label: "Icons" },
  { slug: "inputs", label: "Inputs" },
  { slug: "progress-indicators", label: "Progress indicators" },
  { slug: "radio-groups", label: "Radio" },
  { slug: "select", label: "Select" },
  { slug: "sliders", label: "Sliders" },
  { slug: "table", label: "Table" },
  { slug: "tabs", label: "Tabs" },
  { slug: "toggles", label: "Toggles" },
  { slug: "tooltips", label: "Tooltips" },
  { slug: "typography", label: "Typography" },
] as const

export type ComponentNavItem = (typeof componentNavItems)[number]

export type ComponentDocSlug = (typeof componentNavItems)[number]["slug"]

/** Routes with a dedicated `app/(design-system)/components/<slug>/page.tsx` — excluded from `[slug]` static generation. */
export const dedicatedComponentDocSlugs = [
  "accordion",
  "avatars",
  "badges",
  "breadcrumb",
  "button",
  "button-groups",
  "calendar",
  "property-cards",
  "skeletons",
  "checkboxes",
  "dropdowns",
  "file-upload",
  "header",
  "icons",
  "inputs",
  "progress-indicators",
  "radio-groups",
  "select",
  "sliders",
  "table",
  "tabs",
  "toggles",
  "tooltips",
  "typography",
] as const satisfies readonly ComponentDocSlug[]

export type PlaceholderComponentSlug = Exclude<ComponentDocSlug, (typeof dedicatedComponentDocSlugs)[number]>

export const placeholderComponentSlugs: PlaceholderComponentSlug[] = componentNavItems
  .filter((i) => !(dedicatedComponentDocSlugs as readonly string[]).includes(i.slug))
  .map((i) => i.slug as PlaceholderComponentSlug)

export function getPlaceholderNavItem(slug: string) {
  return componentNavItems.find((i) => i.slug === slug)
}
