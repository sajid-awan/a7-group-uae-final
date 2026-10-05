import { SiteHeader } from "@/shared/layout/site-header"
import { PropertySearchBar } from "@/features/search/ui/global-search-bar"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"
import { defaultSiteHeaderCta, defaultSiteHeaderNav } from "@/shared/content/navigation/site-header-nav"

const siteHeaderData = {
  nav: defaultSiteHeaderNav,
  ...defaultSiteHeaderCta,
} as const

export default function HeaderDocsPage() {
  return (
    <div className="mx-auto container p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight font-heading">Header</h1>
        <p className="mt-2 text-muted-foreground">
          Reusable marketing header (logo, mega-menu, dropdowns, mobile drawer, CTA). Compose{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">PropertySearchBar</code> in your page layout{" "}
          <em>below</em> the header when you need search — it is not part of <code className="rounded bg-muted px-1 py-0.5 text-xs">SiteHeader</code>. Both
          variants are previewed below — open this page from the sidebar under{" "}
          <strong className="text-a7-text-gray">Components → Header</strong>.{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">nav</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">ctaLabel</code>, and{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">ctaHref</code> are required so each layout can supply CMS
          or route data. This page uses example values from{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">data/site-header-nav.ts</code>. Use{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">variant=&quot;solid&quot;</code> on light surfaces and{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">variant=&quot;transparent&quot;</code> over heroes or photos.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import { SiteHeader } from "@/shared/layout/site-header"
import { PropertySearchBar } from "@/features/search/ui/global-search-bar"
import { defaultSiteHeaderCta, defaultSiteHeaderNav } from "@/shared/content/navigation/site-header-nav"`}</CodeBlock>
        </section>

        <DemoBlock
          title="Property search bar"
          description="Pill-shaped listing search: project name field, Buy / Type / Beds & Baths / Price selects, More Filters, and a black Search CTA. Render it in your layout as a sibling under `SiteHeader`, not inside the header component."
          code={`import { PropertySearchBar } from "@/features/search/ui/global-search-bar"

<PropertySearchBar />

{/* In your layout: */}
<>
  <SiteHeader variant="solid" nav={nav} ctaLabel="…" ctaHref="…" />
  <div className="border-b border-border bg-muted/30 px-4 py-3 sm:px-6 lg:px-8">
    <div className="container mx-auto px-4 text-a7-text-gray">
      <PropertySearchBar />
    </div>
  </div>
</>`}
        >
          <div className="w-full max-w-5xl rounded-xl border border-border bg-muted/30 p-4 md:p-6">
            <PropertySearchBar />
          </div>
        </DemoBlock>

        <DemoBlock
          title="Solid (white bar)"
          description="White background, border, dark text — typical inner pages. Search is composed below the header in the same preview wrapper."
          code={`<>
  <SiteHeader variant="solid" nav={defaultSiteHeaderNav} {...defaultSiteHeaderCta} />
  <div className="border-b border-border bg-muted/30 px-4 py-3 sm:px-6 lg:px-8">
    <div className="container mx-auto px-4 text-a7-text-gray">
      <PropertySearchBar />
    </div>
  </div>
</>`}
        >
          <div className="w-full overflow-hidden rounded-xl border border-border bg-muted/30">
            <SiteHeader variant="solid" {...siteHeaderData} />
            <div className="border-t border-border bg-muted/30 px-4 py-3 sm:px-6 lg:px-8">
              <div className="container mx-auto px-4 text-a7-text-gray">
                <PropertySearchBar />
              </div>
            </div>
            <p className="border-t border-border bg-white px-4 py-6 text-center text-sm text-muted-foreground">
              Page content below the header
            </p>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Transparent (over hero / photo)"
          description="White logo and nav on top of a dark surface. Search sits in its own strip under the header so it does not inherit header text color."
          code={`<div className="relative overflow-hidden rounded-xl bg-[linear-gradient(135deg,#1e293b_0%,#0f172a_100%)]">
  <SiteHeader variant="transparent" className="border-white/10" nav={…} ctaLabel="…" ctaHref="…" />
  <div className="border-t border-white/10 bg-black/20 px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-8">
    <div className="container mx-auto px-4 text-a7-text-gray">
      <PropertySearchBar />
    </div>
  </div>
  <p className="px-6 py-14 text-center text-sm text-white/80">Hero content</p>
</div>`}
        >
          <div className="relative w-full overflow-hidden rounded-xl bg-[linear-gradient(135deg,#1e293b_0%,#0f172a_100%)]">
            <SiteHeader variant="transparent" className="border-white/10" {...siteHeaderData} />
            <div className="border-t border-white/10 bg-black/20 px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-8">
              <div className="container mx-auto px-4 text-a7-text-gray">
                <PropertySearchBar />
              </div>
            </div>
            <p className="px-6 py-14 text-center text-sm text-white/80">Hero content below the header</p>
          </div>
        </DemoBlock>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Props (summary)</h2>
          <div className="overflow-x-auto rounded-lg border border-border text-sm">
            <table className="w-full min-w-lg border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-4 py-2.5 font-medium">Prop</th>
                  <th className="px-4 py-2.5 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">variant</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    <code className="text-a7-text-gray">solid</code> (default) ·{" "}
                    <code className="text-a7-text-gray">transparent</code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">nav</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Required. Links and mega-menu tiles (see <code className="text-a7-text-gray">SiteHeaderNavItem</code> in{" "}
                    <code className="text-a7-text-gray">data/site-header-nav.ts</code>). Use{" "}
                    <code className="text-a7-text-gray">defaultSiteHeaderNav</code> only as demo seed data.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">ctaLabel / ctaHref</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Required. Primary gradient CTA (desktop label, mobile compact &quot;Submit&quot; + full label in drawer).
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">className</td>
                  <td className="px-4 py-2.5 text-muted-foreground">Merged onto the root header element.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">logoSrc / logoAlt</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Optional. Default <code className="text-a7-text-gray">/assets/brand/logo.svg</code>. On{" "}
                    <code className="text-a7-text-gray">transparent</code>, the image uses{" "}
                    <code className="text-a7-text-gray">brightness-0 invert</code> so black artwork reads as white.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Responsive behavior</h2>
          <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
            <li>
              <strong className="text-a7-text-gray">lg and up:</strong> horizontal nav, Radix dropdowns, full-width Buy
              mega grid.
            </li>
            <li>
              <strong className="text-a7-text-gray">Below lg:</strong> hamburger opens a right drawer with accordions; CTA
              stays visible as a compact &quot;Submit&quot; link plus full label in the drawer footer.
            </li>
            <li>
              <strong className="text-a7-text-gray">Property search:</strong> use{" "}
              <code className="text-a7-text-gray">PropertySearchBar</code> in the page shell below{" "}
              <code className="text-a7-text-gray">SiteHeader</code> (see demos). The pill wraps on narrow widths; filter
              triggers scroll horizontally on small screens.
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
