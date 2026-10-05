import { Bell, Check, Map, Sparkles, XCircle } from "lucide-react"

import { LayoutGrid06Icon } from "@/shared/icons"

import { Badge } from "@/shared/ui/badge"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"

export default function BadgesDocsPage() {
  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight font-heading">Badges</h1>
        <p className="mt-2 text-muted-foreground">
          Compact labels for status, counts, and metadata. Use <code className="rounded bg-muted px-1 py-0.5 text-xs">variant</code>{" "}
          for semantics and <code className="rounded bg-muted px-1 py-0.5 text-xs">size</code> /{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">shape</code> for layout density — same{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">shape</code> radii and <code className="rounded bg-muted px-1 py-0.5 text-xs">size</code>{" "}
          naming as <code className="rounded bg-muted px-1 py-0.5 text-xs">Button</code>, plus <code className="rounded bg-muted px-1 py-0.5 text-xs">xl</code>{" "}
          for 30px metadata chips.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import { Badge, badgePaymentPlanFoldVariants, badgeVariants } from "@/shared/ui/badge"`}</CodeBlock>
        </section>

        <DemoBlock
          title="Variants"
          description="default (primary) · secondary · outline · muted · destructive · success · warning · info."
          code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="muted">Muted</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="info">Info</Badge>`}
        >
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="muted">Muted</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
        </DemoBlock>

        <DemoBlock
          title="Sizes"
          description="xs (tight) · sm (dense / tables) · default · lg (emphasis) · xl (fixed 30px height for metadata rows). Mirrors Button size names; xl is badge-specific."
          code={`<Badge size="xs">XS</Badge>
<Badge size="sm">Small</Badge>
<Badge size="default">Default</Badge>
<Badge size="lg">Large</Badge>
<Badge size="xl">XL</Badge>`}
        >
          <Badge size="xs" variant="secondary">
            XS
          </Badge>
          <Badge size="sm" variant="secondary">
            Small
          </Badge>
          <Badge size="default" variant="secondary">
            Default
          </Badge>
          <Badge size="lg" variant="secondary">
            Large
          </Badge>
          <Badge size="xl" variant="secondary">
            XL
          </Badge>
        </DemoBlock>

        <DemoBlock
          title="Chips"
          description="30px pill chips with icon + label (e.g. property cards). Pair size=&quot;xl&quot; with a light surface; shown on a muted strip."
          code={`<Badge size="xl" shape="pill" variant="outline" className="border-0 bg-white text-a7-text-gray">
  <LayoutGrid06Icon className="shrink-0" aria-hidden />
  Handover Q3 2030
</Badge>
<Badge size="xl" shape="pill" variant="outline" className="border-0 bg-white text-a7-text-gray">
  <Map aria-hidden />
  Sheikh Zayed Road Dubai
</Badge>`}
        >
          <div className="flex w-full max-w-xl flex-wrap gap-2 rounded-lg bg-muted p-4">
            <Badge size="xl" shape="pill" variant="outline" className="border-0 bg-white text-a7-text-gray">
              <LayoutGrid06Icon className="shrink-0" aria-hidden />
              Handover Q3 2030
            </Badge>
            <Badge size="xl" shape="pill" variant="outline" className="border-0 bg-white text-a7-text-gray">
              <Map aria-hidden />
              Sheikh Zayed Road Dubai
            </Badge>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Payment plan (ribbon)"
          description="Property-card style: background #A68B4F, white bold label; top-left, top-right, and bottom-right use 4px radius; bottom-left is square for the ribbon. The fold is a real span (data-slot badge-payment-plan-fold) with clip-path. The shape prop is ignored. Use size for density (xs through xl)."
          code={`<Badge variant="paymentPlan" size="xl">20 / 40 / 70 Payment Plan</Badge>
<Badge variant="paymentPlan" size="lg">20 / 40 / 70 Payment Plan</Badge>
<Badge variant="paymentPlan" size="default">20 / 40 / 70 Payment Plan</Badge>
<Badge variant="paymentPlan" size="sm">20 / 40 / 70</Badge>
<Badge variant="paymentPlan" size="xs">20 / 40 / 70</Badge>`}
        >
        <p className="text-xs font-medium text-white/90">Overlay on imagery (example)</p>
            <div className="flex flex-wrap items-end gap-3">
              <Badge variant="paymentPlan" size="xl">
                20 / 40 / 70 Payment Plan
              </Badge>
              <Badge variant="paymentPlan" size="lg">
                20 / 40 / 70 Payment Plan
              </Badge>
              <Badge variant="paymentPlan" size="default">
                20 / 40 / 70 Payment Plan
              </Badge>
              <Badge variant="paymentPlan" size="sm">
                20 / 40 / 70
              </Badge>
              <Badge variant="paymentPlan" size="xs">
                20 / 40 / 70
              </Badge>
            </div>
        </DemoBlock>

        <DemoBlock
          title="Shapes"
          description="default (rounded-lg) · rounded (2xl) · pill (full) · square (no radius). Square matches sharp corners for tags; other radii mirror Button. Default badge shape is pill."
          code={`<Badge shape="default" variant="outline">Default</Badge>
<Badge shape="rounded" variant="outline">Rounded</Badge>
<Badge shape="pill" variant="outline">Pill</Badge>
<Badge shape="square" variant="outline">Square</Badge>`}
        >
          <Badge shape="default" variant="outline">
            Default
          </Badge>
          <Badge shape="rounded" variant="outline">
            Rounded
          </Badge>
          <Badge shape="pill" variant="outline">
            Pill
          </Badge>
          <Badge shape="square" variant="outline">
            Square
          </Badge>
        </DemoBlock>

        <DemoBlock
          title="Shape with icons"
          description="Same shape prop with icon + label; spacing follows size (default size shown)."
          code={`<Badge shape="default" variant="secondary" size="default">
  <Check aria-hidden className="opacity-90" />
  Default
</Badge>
<Badge shape="rounded" variant="secondary" size="default">
  <Check aria-hidden className="opacity-90" />
  Rounded
</Badge>
<Badge shape="pill" variant="secondary" size="default">
  <Check aria-hidden className="opacity-90" />
  Pill
</Badge>
<Badge shape="square" variant="secondary" size="default">
  <Check aria-hidden className="opacity-90" />
  Square
</Badge>`}
        >
          <Badge shape="default" variant="secondary" size="default">
            <Check aria-hidden className="opacity-90" />
            Default
          </Badge>
          <Badge shape="rounded" variant="secondary" size="default">
            <Check aria-hidden className="opacity-90" />
            Rounded
          </Badge>
          <Badge shape="pill" variant="secondary" size="default">
            <Check aria-hidden className="opacity-90" />
            Pill
          </Badge>
          <Badge shape="square" variant="secondary" size="default">
            <Check aria-hidden className="opacity-90" />
            Square
          </Badge>
        </DemoBlock>

        <DemoBlock
          title="With icons"
          description="Place an icon before or after text; spacing follows size."
          code={`<Badge variant="success">
  <Check aria-hidden />
  Verified
</Badge>
<Badge variant="destructive">
  <XCircle aria-hidden />
  Failed
</Badge>`}
        >
          <Badge variant="success">
            <Check aria-hidden className="opacity-90" />
            Verified
          </Badge>
          <Badge variant="destructive">
            <XCircle aria-hidden className="opacity-90" />
            Failed
          </Badge>
          <Badge variant="info">
            <Sparkles aria-hidden className="opacity-90" />
            New
          </Badge>
          <Badge variant="warning">
            <Bell aria-hidden className="opacity-90" />
            3
          </Badge>
        </DemoBlock>

        <DemoBlock
          title="Numeric and counts"
          description="Use for unread counts, step markers, or version tags."
          code={`<Badge variant="destructive">12</Badge>
<Badge variant="outline" shape="square" size="sm">v2</Badge>`}
        >
          <Badge variant="destructive">12</Badge>
          <Badge variant="default">4</Badge>
          <Badge variant="outline" shape="square" size="sm">
            v2
          </Badge>
          <Badge variant="muted" size="sm">
            +99
          </Badge>
        </DemoBlock>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Props (summary)</h2>
          <div className="overflow-x-auto rounded-lg border border-border text-sm">
            <table className="w-full min-w-lg border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-4 py-2.5 font-medium">Prop</th>
                  <th className="px-4 py-2.5 font-medium">Values</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">variant</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    default · secondary · outline · muted · destructive · success · warning · info · paymentPlan
                    (ribbon / #A68B4F)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">size</td>
                  <td className="px-4 py-2.5 text-muted-foreground">xs · sm · default · lg · xl (30px)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">shape</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    default (rounded-lg) · rounded (2xl) · pill (full) · square (rounded-none); default is pill
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">paymentPlanFoldClassName</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Optional. When variant is paymentPlan, merged onto the ribbon span (with{" "}
                    <code className="text-a7-text-gray">data-slot=&quot;badge-payment-plan-fold&quot;</code>
                    ).
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
