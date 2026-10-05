import { CodeBlock } from "@/shared/ui/docs-blocks"

const headlineSpecs = [
  {
    name: "Headline 1",
    font: "Playfair Display Regular",
    spec: "56pt / 64pt line-height · tracking −4%",
    web: "56px / 64px · −0.04em",
    className: "typo-h1",
    sample: "We don't just supply products, but the total solution",
  },
  {
    name: "Headline 2",
    font: "Playfair Display Regular",
    spec: "40pt / 48pt line-height · tracking −4%",
    web: "40px / 48px · −0.04em",
    className: "typo-h2",
    sample: "Building a data centre is a complex process that requires knowledge in various areas",
  },
  {
    name: "Headline 3",
    font: "Playfair Display Medium",
    spec: "36pt / 42pt line-height · tracking −4%",
    web: "36px / 42px · −0.04em · font-medium",
    className: "typo-h3",
    sample: "Need help choosing? Contact us.",
  },
  {
    name: "Headline 4",
    font: "Playfair Display Bold",
    spec: "28pt / 36pt line-height · tracking −2%",
    web: "28px / 36px · −0.02em · font-bold",
    className: "typo-h4",
    sample: "What knowledge and skills you should have:",
  },
  {
    name: "Subheadline",
    font: "Playfair Display Regular",
    spec: "24pt / 32pt line-height · tracking −4%",
    web: "24px / 32px · −0.04em",
    className: "typo-subheadline",
    sample:
      "We stand behind our products, so we have decided to offer our customers more and have extended the warranty to 15 years on selected products.",
  },
] as const

export default function TypographyDocsPage() {
  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Foundations</p>
        <h1 className="typo-h4 mt-1">Typography</h1>
        <p className="typo-subheadline mt-3 text-a7-text-gray">
          Default body is <strong>Inter</strong> (<code className="font-mono text-sm">font-inter</code> on <code className="font-mono text-sm">html</code>, same stack as{" "}
          <code className="font-mono text-sm">font-sans</code>).{" "}
          <strong>Satoshi</strong> stays in the bundle for accurate UI (<code className="font-mono text-sm">font-satoshi</code>). Only{" "}
          <strong>heading</strong> styles use <strong>Playfair Display</strong> — <code className="font-mono text-sm">font-heading</code>,{" "}
          <code className="font-mono text-sm">h1</code>–<code className="font-mono text-sm">h6</code>, and <code className="font-mono text-sm">.typo-*</code>. All registered in{" "}
          <code className="font-mono text-sm">app/layout.tsx</code>.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium font-heading">Fonts</h2>
          <div className="overflow-x-auto rounded-lg border border-border text-sm">
            <table className="w-full min-w-lg border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-4 py-2.5 font-medium">Role</th>
                  <th className="px-4 py-2.5 font-medium">Family</th>
                  <th className="px-4 py-2.5 font-medium">In code</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-muted-foreground">Body &amp; UI</td>
                  <td className="px-4 py-2.5">Inter</td>
                  <td className="px-4 py-2.5 font-mono text-xs">
                    <code className="text-a7-text-gray">font-inter</code> (root) or <code className="text-a7-text-gray">font-sans</code> →{" "}
                    <code className="text-a7-text-gray">var(--font-inter-family)</code> via <code className="text-a7-text-gray">next/font/google</code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted-foreground">Headings</td>
                  <td className="px-4 py-2.5">Playfair Display</td>
                  <td className="px-4 py-2.5 font-mono text-xs">
                    <code className="text-a7-text-gray">font-heading</code>, <code className="text-a7-text-gray">font-playfair</code>,{" "}
                    <code className="text-a7-text-gray">.typo-*</code> → <code className="text-a7-text-gray">var(--font-playfair-family)</code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted-foreground"> UI sans</td>
                  <td className="px-4 py-2.5">Satoshi</td>
                  <td className="px-4 py-2.5 font-mono text-xs">
                    <code className="text-a7-text-gray">font-satoshi</code> → <code className="text-a7-text-gray">var(--font-satoshi-internal)</code>{" "}
                    <code className="text-a7-text-gray">next/font/local</code> (<code className="text-a7-text-gray">public/fonts/*.woff2</code>)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted-foreground">Optional sans</td>
                  <td className="px-4 py-2.5">Jura (legacy alias)</td>
                  <td className="px-4 py-2.5 font-mono text-xs">
                    <code className="text-a7-text-gray">font-jura</code> → <code className="text-a7-text-gray">var(--font-inter-family)</code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted-foreground">Code &amp; data</td>
                  <td className="px-4 py-2.5">—</td>
                  <td className="px-4 py-2.5 font-mono text-xs">
                    <code className="text-a7-text-gray">font-mono</code> — Tailwind 
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium font-heading">Headline scale</h2>
          <p className="text-sm text-muted-foreground">
            Utilities in <code className="font-mono text-xs text-a7-text-gray">globals.css</code> (<code className="font-mono text-xs">@layer components</code>
            ). <code className="font-mono text-xs">h1</code>–<code className="font-mono text-xs">h6</code> use <code className="font-mono text-xs">font-heading</code>{" "}
            (Playfair).
          </p>
          <div className="space-y-10 rounded-xl border border-border bg-card/40 p-6">
            {headlineSpecs.map((row) => (
              <div key={row.name} className="border-b border-border pb-10 last:border-0 last:pb-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{row.name}</p>
                  <code className="font-mono text-xs text-muted-foreground sm:text-right">{row.className}</code>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {row.font} · {row.spec}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">Web target: {row.web}</p>
                <p className={["mt-4 max-w-3xl text-a7-text-gray", row.className].join(" ")}>{row.sample}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium font-heading">Semantic HTML</h2>
          <p className="text-sm text-muted-foreground">Use real heading tags; sizes use <code className="text-a7-text-gray">.typo-*</code> (Playfair).</p>
          <CodeBlock>{`<article>
  <h1 className="typo-h1">We don't just supply products…</h1>
  <p className="typo-subheadline mt-4 text-muted-foreground">
    Supporting subheadline under the hero.
  </p>
  <h2 className="typo-h2 mt-12">Section title</h2>
  <p className="mt-3 text-base leading-relaxed">Body copy uses Inter (<code className="font-mono text-sm">font-inter</code> or <code className="font-mono text-sm">font-sans</code>).</p>
</article>`}</CodeBlock>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium font-heading">Body &amp; UI (Inter)</h2>
          <p className="text-base leading-relaxed">
            Default paragraphs and controls use <code className="font-mono text-sm">font-inter</code> (<strong>Inter</strong>). Use{" "}
            <code className="font-mono text-sm">font-satoshi</code> when a block should match components set in Satoshi.
          </p>
          <p className="mt-3 text-sm font-satoshi text-muted-foreground">
            Example line in Satoshi: marketing labels or dense UI strings from the design file.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium font-heading">Text color roles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">foreground</p>
              <p className="mt-2 text-base text-a7-text-gray">Primary body and headings on the surface.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">muted-foreground</p>
              <p className="mt-2 text-base text-muted-foreground">Supporting copy, captions, de-emphasized lines.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">primary</p>
              <p className="mt-2 text-base font-medium text-primary">Links and brand emphasis in prose.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">destructive</p>
              <p className="mt-2 text-base font-medium text-destructive">Errors and irreversible warnings.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
