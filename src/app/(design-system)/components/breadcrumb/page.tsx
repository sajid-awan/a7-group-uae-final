import {
  BreadcrumbFromPath,
  BreadcrumbList,
  COMPONENTS_DOCS_HREF,
  type BreadcrumbItem,
} from "@/shared/ui/breadcrumb"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"

const servicesTrail: BreadcrumbItem[] = [
  { kind: "home", href: "/" },
  { kind: "link", href: COMPONENTS_DOCS_HREF, label: "Components" },
  { kind: "current", label: "Property Management" },
]

export default function BreadcrumbDocsPage() {
  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight font-heading">Breadcrumb</h1>
        <p className="mt-2 text-muted-foreground">
          Feather <code className="rounded bg-muted px-1 py-0.5 text-xs">Home</code> plus either a Feather{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">ChevronRight</code> (
          <code className="rounded bg-muted px-1 py-0.5 text-xs">separator=&quot;chevron&quot;</code>, default) or a{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">/</code> (
          <code className="rounded bg-muted px-1 py-0.5 text-xs">separator=&quot;slash&quot;</code>). Markup follows WAI-ARIA
          breadcrumb practice: one <code className="rounded bg-muted px-1 py-0.5 text-xs">li</code> per step, decorative
          separators, <code className="rounded bg-muted px-1 py-0.5 text-xs">aria-current=&quot;page&quot;</code> on the
          current page, and focus-visible rings on links. Use{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">BreadcrumbList</code> or{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">BreadcrumbFromPath</code> — see{" "}
          <strong className="text-a7-text-gray">Separators</strong> below for both styles.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import {
  BreadcrumbFromPath,
  BreadcrumbList,
  COMPONENTS_DOCS_HREF,
  getBreadcrumbItems,
  type BreadcrumbItem,
} from "@/shared/ui/breadcrumb"`}</CodeBlock>
        </section>

        <DemoBlock
          title="Static trail"
          description="Ordered segments: home link, navigable links, then the current page (non-link). Middle segments should be links when they have a real URL."
          code={`const items: BreadcrumbItem[] = [
  { kind: "home", href: "/" },
  { kind: "link", href: COMPONENTS_DOCS_HREF, label: "Components" },
  { kind: "current", label: "Property Management" },
]

<BreadcrumbList items={items} />
<BreadcrumbList items={items} separator="slash" />`}
        >
          <div className="rounded-lg border border-border bg-card px-4 py-4">
            <BreadcrumbList items={servicesTrail} />
          </div>
        </DemoBlock>

        <DemoBlock
          title="From current URL"
          description="On this page, BreadcrumbFromPath resolves to Home → Components → Breadcrumb. Rendered in page content (not in the sidebar)."
          code={`<BreadcrumbFromPath />`}
        >
          <div className="rounded-lg border border-border bg-card px-4 py-4">
            <BreadcrumbFromPath />
          </div>
        </DemoBlock>

        <DemoBlock
          title="Separators"
          description="Default chevron (Feather) vs path-style slash. Both are decorative (aria-hidden). BreadcrumbFromPath accepts the same separator prop."
          code={`// Default: separator="chevron" (omit prop)
<BreadcrumbList items={items} />

// Path-style
<BreadcrumbList items={items} separator="slash" />

// Current route + slash
<BreadcrumbFromPath separator="slash" />`}
        >
          <div className="w-full space-y-5 rounded-lg border border-border bg-card px-4 py-4">
            <div className="w-full min-w-0">
              <p className="mb-2 text-xs font-medium text-muted-foreground">separator=&quot;chevron&quot; (default)</p>
              <div className="min-w-0">
                <BreadcrumbList items={servicesTrail} separator="chevron" />
              </div>
            </div>
            <div className="w-full min-w-0 border-t border-border pt-5">
              <p className="mb-2 text-xs font-medium text-muted-foreground">separator=&quot;slash&quot;</p>
              <div className="min-w-0">
                <BreadcrumbList items={servicesTrail} separator="slash" />
              </div>
            </div>
            <div className="w-full min-w-0 border-t border-border pt-5">
              <p className="mb-2 text-xs font-medium text-muted-foreground">
                BreadcrumbFromPath with separator=&quot;slash&quot; (this route)
              </p>
              <div className="min-w-0">
                <BreadcrumbFromPath separator="slash" />
              </div>
            </div>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Custom nav label"
          description="Override the default `aria-label` on the wrapping `nav` when you have multiple landmarks (e.g. region + breadcrumb)."
          code={`<BreadcrumbList items={items} ariaLabel="You are here" />`}
        >
          <div className="rounded-lg border border-border bg-card px-4 py-4">
            <BreadcrumbList items={servicesTrail} ariaLabel="You are here" />
          </div>
        </DemoBlock>

        <DemoBlock
          title="Inverted (dark backgrounds)"
          description="variant=&quot;inverted&quot; switches all text and icons to white — use inside hero sections or dark-background cards."
          code={`<BreadcrumbList items={items} variant="inverted" />
<BreadcrumbList items={items} variant="inverted" separator="slash" />`}
        >
          <div className="space-y-4 rounded-lg bg-neutral-900 px-4 py-4">
            <div>
              <p className="mb-2 text-xs font-medium text-white/50">variant=&quot;inverted&quot; + chevron</p>
              <BreadcrumbList items={servicesTrail} variant="inverted" />
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="mb-2 text-xs font-medium text-white/50">variant=&quot;inverted&quot; + slash</p>
              <BreadcrumbList items={servicesTrail} variant="inverted" separator="slash" />
            </div>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Size"
          description="sm for dense toolbars; default for page headers."
          code={`<BreadcrumbList items={items} size="sm" />`}
        >
          <div className="space-y-4 rounded-lg border border-border bg-card px-4 py-4">
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">size=&quot;sm&quot;</p>
              <BreadcrumbList items={servicesTrail} size="sm" />
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">size=&quot;default&quot;</p>
              <BreadcrumbList items={servicesTrail} size="default" />
            </div>
          </div>
        </DemoBlock>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">API reference</h2>
          <div className="overflow-x-auto rounded-lg border border-border text-sm">
            <table className="w-full min-w-lg border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-4 py-2.5 font-medium">Export</th>
                  <th className="px-4 py-2.5 font-medium">Kind</th>
                  <th className="px-4 py-2.5 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">BreadcrumbList</td>
                  <td className="px-4 py-2.5 text-muted-foreground">Component</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Renders a trail from an explicit <code className="text-a7-text-gray">items</code> array. Props:{" "}
                    <code className="text-a7-text-gray">items</code> (required), optional{" "}
                    <code className="text-a7-text-gray">size</code> (<code className="text-a7-text-gray">sm</code> |{" "}
                    <code className="text-a7-text-gray">default</code>), optional <code className="text-a7-text-gray">className</code>, optional{" "}
                    <code className="text-a7-text-gray">ariaLabel</code> (default <code className="text-a7-text-gray">Breadcrumb</code> on{" "}
                    <code className="text-a7-text-gray">nav</code>), optional <code className="text-a7-text-gray">separator</code> (
                    <code className="text-a7-text-gray">chevron</code> default | <code className="text-a7-text-gray">slash</code>).
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">BreadcrumbFromPath</td>
                  <td className="px-4 py-2.5 text-muted-foreground">Client component</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Uses the active URL and renders <code className="text-a7-text-gray">BreadcrumbList</code> with segments
                    for this app. Props: optional <code className="text-a7-text-gray">size</code>, optional{" "}
                    <code className="text-a7-text-gray">separator</code>, optional <code className="text-a7-text-gray">className</code>, optional{" "}
                    <code className="text-a7-text-gray">ariaLabel</code>.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">getBreadcrumbItems</td>
                  <td className="px-4 py-2.5 text-muted-foreground">Function</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Pure helper: <code className="text-a7-text-gray">(pathname: string) =&gt; BreadcrumbItem[]</code>. Use in
                    server layouts or custom UIs when you build the trail yourself instead of{" "}
                    <code className="text-a7-text-gray">BreadcrumbFromPath</code>.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">COMPONENTS_DOCS_HREF</td>
                  <td className="px-4 py-2.5 text-muted-foreground">Constant</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Parent URL for the “Components” segment in <code className="text-a7-text-gray">getBreadcrumbItems</code>{" "}
                    (default <code className="text-a7-text-gray">/components/button</code>). Change in one place if your
                    docs index route differs.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
