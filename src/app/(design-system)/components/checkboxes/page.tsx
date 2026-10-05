"use client"

import * as React from "react"

import { Checkbox } from "@/shared/ui/checkbox"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"

const themeVariants = [
  "default",
  "primary",
  "secondary",
  "destructive",
  "success",
  "warning",
  "info",
  "muted",
] as const

export default function CheckboxesDocsPage() {
  const [remember, setRemember] = React.useState(true)
  const [triStateStep, setTriStateStep] = React.useState(0)
  const triStates = ["indeterminate", false, true] as const
  const triChecked = triStates[triStateStep % 3]!

  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight font-heading">Checkboxes</h1>
        <p className="mt-2 text-muted-foreground">
          Built on Radix Checkbox with the same ergonomic pattern as{" "}
          <span className="font-medium text-a7-text-gray">Button</span>: optional{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">label</code>, optional{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">description</code>, and{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">size</code> (<code className="rounded bg-muted px-1 py-0.5 text-xs">sm</code> ·{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">md</code> · <code className="rounded bg-muted px-1 py-0.5 text-xs">lg</code> ·{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">xl</code> 48×48px). Supports{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">indeterminate</code> via Radix <code className="rounded bg-muted px-1 py-0.5 text-xs">checked</code>. Pass{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">accentColor</code> for a filled square (any CSS color, including{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">var(--primary)</code>); use           <code className="rounded bg-muted px-1 py-0.5 text-xs">iconColor</code> for the
          check mark (defaults to white on filled). Use <code className="rounded bg-muted px-1 py-0.5 text-xs">variant</code> for
          theme colors — same options as <span className="font-medium text-a7-text-gray">Radio</span> (<code className="rounded bg-muted px-1 py-0.5 text-xs">default</code> through{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">muted</code>).
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import { Checkbox } from "@/shared/ui/checkbox"`}</CodeBlock>
        </section>

        <DemoBlock
          title="Theme variants"
          description="Same `variant` tokens as Radio: default · primary · secondary · destructive · success · warning · info · muted. Shown unchecked + checked."
          code={`<Checkbox variant="success" defaultChecked label="Success" />
<Checkbox variant="warning" label="Warning" />`}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {themeVariants.map((v) => (
              <div key={v} className="flex flex-col gap-2 rounded-lg border border-border bg-card/30 p-3">
                <p className="text-xs font-medium capitalize text-muted-foreground">{v}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <Checkbox size="md" variant={v} aria-label={`${v} off`} />
                  <Checkbox size="md" variant={v} defaultChecked aria-label={`${v} on`} />
                </div>
              </div>
            ))}
          </div>
        </DemoBlock>

        <DemoBlock
          title="Sizes (standalone)"
          description="Control hit target and stroke scale — sm · md · lg · xl (48×48px)."
          code={`<Checkbox size="sm" aria-label="Small" />
<Checkbox size="md" defaultChecked aria-label="Medium" />
<Checkbox size="lg" aria-label="Large" />
<Checkbox size="xl" aria-label="48px" />`}
        >
          <Checkbox size="sm" aria-label="Small example" />
          <Checkbox size="md" defaultChecked aria-label="Medium example" />
          <Checkbox size="lg" aria-label="Large example" />
          <Checkbox size="xl" defaultChecked aria-label="48 by 48 example" />
        </DemoBlock>

        <DemoBlock
          title="Custom size via className"
          description="Classes on the control are merged last (tailwind-merge), so width, height, and icon size can override the size preset — with or without label."
          code={`<Checkbox
  size="sm"
  className="size-10 rounded-md [&_svg]:size-5"
  defaultChecked
  label="Preset sm, box 40px"
  containerClassName="gap-4"
/>`}
        >
          <div className="flex flex-col gap-4">
            <Checkbox
              size="sm"
              className="size-10 rounded-md [&_svg]:size-5"
              defaultChecked
              label="Preset sm, box 40px via className"
              containerClassName="gap-4"
            />
            <Checkbox
              size="md"
              className="size-14 rounded-xl [&_svg]:size-7"
              aria-label="56px box"
            />
          </div>
        </DemoBlock>

        <DemoBlock
          title="With label"
          description="Clicking the label toggles the box; use for compact forms."
          code={`<Checkbox
  size="md"
  label="Remember me"
  checked={checked}
  onCheckedChange={setRemember}
/>`}
        >
          <div className="flex flex-col gap-4">
            <Checkbox size="sm" label="Remember me" checked={remember} onCheckedChange={(v) => setRemember(v === true)} />
            <Checkbox size="md" label="Remember me" checked={remember} onCheckedChange={(v) => setRemember(v === true)} />
            <Checkbox size="lg" label="Remember me" checked={remember} onCheckedChange={(v) => setRemember(v === true)} />
            <Checkbox size="xl" label="Remember me" checked={remember} onCheckedChange={(v) => setRemember(v === true)} />
          </div>
        </DemoBlock>

        <DemoBlock
          title="Label + description"
          description="Description is linked with aria-describedby for screen readers."
          code={`<Checkbox
  label="Remember me"
  description="Save my login details for next time."
  defaultChecked
/>`}
        >
          <div className="flex flex-col gap-5">
            <Checkbox
              size="sm"
              label="Remember me"
              description="Save my login details for next time."
              defaultChecked
            />
            <Checkbox
              size="md"
              label="Remember me"
              description="Save my login details for next time."
              defaultChecked
            />
            <Checkbox
              size="lg"
              label="Remember me"
              description="Save my login details for next time."
              defaultChecked
            />
            <Checkbox
              size="xl"
              label="Remember me"
              description="Save my login details for next time."
              defaultChecked
            />
          </div>
        </DemoBlock>

        <DemoBlock
          title="Filled accent (custom color)"
          description="Set accentColor to any CSS color. Checked and indeterminate use a solid fill; unchecked keeps an accent outline. iconColor defaults to white — use a dark value on light fills (e.g. gold swatches)."
          code={`<Checkbox
  accentColor="#b68c40"
  iconColor="#111827"
  defaultChecked
  label="Luxury finishing"
/>

<Checkbox accentColor="var(--primary)" defaultChecked label="Theme primary" />

<Checkbox accentColor="#0d4d3c" defaultChecked label="Custom brand green" />`}
        >
          <div className="flex flex-col gap-5">
            <Checkbox
              size="md"
              accentColor="#b68c40"
              iconColor="#111827"
              defaultChecked
              label="Luxury finishing"
            />
            <div className="flex flex-wrap items-end gap-6">
              <Checkbox size="sm" accentColor="#d4a373" iconColor="#111827" defaultChecked aria-label="Small filled" />
              <Checkbox size="md" accentColor="#d4a373" iconColor="#111827" defaultChecked aria-label="Medium filled" />
              <Checkbox size="lg" accentColor="#d4a373" iconColor="#111827" defaultChecked aria-label="Large filled" />
              <Checkbox size="xl" accentColor="#d4a373" iconColor="#111827" defaultChecked aria-label="48px filled" />
            </div>
            <Checkbox accentColor="var(--primary)" iconColor="#ffffff" defaultChecked label="Theme token (var(--primary))" />
            <Checkbox accentColor="#0d4d3c" iconColor="#ffffff" defaultChecked label="Forest accent" />
            <Checkbox
              accentColor="#7c3aed"
              iconColor="#ffffff"
              checked="indeterminate"
              label="Indeterminate + fill"
              description="Minus uses the same icon color."
            />
          </div>
        </DemoBlock>

        <DemoBlock
          title="Indeterminate"
          description="Use checked=&quot;indeterminate&quot; for “select some” parent rows. Each click here advances a controlled three-state demo."
          code={`const states = ["indeterminate", false, true] as const
const [step, setStep] = useState(0)

<Checkbox
  checked={states[step % 3]}
  onCheckedChange={() => setStep((s) => s + 1)}
  label="Accept terms"
/>`}
        >
          <Checkbox
            checked={triChecked}
            onCheckedChange={() => setTriStateStep((s) => s + 1)}
            label="Accept terms"
            description="Click to cycle: indeterminate → unchecked → checked → …"
          />
        </DemoBlock>

        <DemoBlock
          title="Disabled"
          description="Disabled fades the control and label; omit onCheckedChange for static demos."
          code={`<Checkbox disabled label="Unavailable" />
<Checkbox disabled defaultChecked label="Locked on" />`}
        >
          <div className="flex flex-col gap-3">
            <Checkbox size="md" disabled label="Unavailable option" />
            <Checkbox size="md" disabled defaultChecked label="Locked on" />
            <Checkbox
              size="md"
              disabled
              checked="indeterminate"
              label="Locked indeterminate"
              description="Cannot change this selection."
            />
          </div>
        </DemoBlock>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Props (summary)</h2>
          <div className="overflow-x-auto rounded-lg border border-border text-sm">
            <table className="w-full min-w-lg border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-4 py-2.5 font-medium">Prop</th>
                  <th className="px-4 py-2.5 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">label</td>
                  <td className="px-4 py-2.5 text-muted-foreground">Optional; pairs with native id / htmlFor.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">description</td>
                  <td className="px-4 py-2.5 text-muted-foreground">Optional muted line under the label.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">variant</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    default · primary · secondary · destructive · success · warning · info · muted — shared with{" "}
                    <code className="text-a7-text-gray">RadioGroup</code> / <code className="text-a7-text-gray">RadioField</code>. Ignored when{" "}
                    <code className="text-a7-text-gray">accentColor</code> is set.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">size</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    sm · md (default) · lg · xl (48×48px) — same mental model as Button sizes, plus touch-friendly xl.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">checked</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    boolean or <code className="text-a7-text-gray">&quot;indeterminate&quot;</code> (Radix).
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">className</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Applied to the control <span className="font-medium text-a7-text-gray">after</span>{" "}
                    <code className="text-a7-text-gray">size</code> presets — override dimensions (e.g.{" "}
                    <code className="text-a7-text-gray">size-10</code>, <code className="text-a7-text-gray">[&_svg]:size-5</code>).
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">containerClassName</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Optional; only when <code className="text-a7-text-gray">label</code> or <code className="text-a7-text-gray">description</code> is set. Styles the outer flex row (e.g.{" "}
                    <code className="text-a7-text-gray">gap-4</code>, <code className="text-a7-text-gray">w-full</code>).
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">accentColor</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Optional. Filled style: solid fill when checked / indeterminate; border uses the same color when
                    unchecked.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">iconColor</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Optional when <code className="text-a7-text-gray">accentColor</code> is set. Defaults to{" "}
                    <code className="text-a7-text-gray">#ffffff</code> for check / minus.
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
