"use client"

import * as React from "react"

import { RadioField, RadioGroup } from "@/shared/ui/radio-group"
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

export default function RadioGroupsDocsPage() {
  const [plan, setPlan] = React.useState("pro")

  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight font-heading">Radio groups</h1>
        <p className="mt-2 text-muted-foreground">
          Radix <code className="rounded bg-muted px-1 py-0.5 text-xs">RadioGroup</code> with{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">RadioField</code> rows — same optional{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">label</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">description</code>, and{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">size</code> pattern as Button and Checkbox (including{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">xl</code> 48×48px). Set{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">size</code> on the group to apply to all fields, or override per row.{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">variant</code> on <code className="rounded bg-muted px-1 py-0.5 text-xs">RadioGroup</code> or each{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">RadioField</code> matches <span className="font-medium text-a7-text-gray">Checkbox</span> theme tokens (
          default · primary · … · muted).
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import { RadioGroup, RadioField } from "@/shared/ui/radio-group"`}</CodeBlock>
        </section>

        <DemoBlock
          title="Theme variants"
          description="Same `variant` set as Checkbox. Each card is an uncontrolled pair so you can compare selected vs idle."
          code={`<RadioGroup variant="success" defaultValue="b">
  <RadioField value="a" label="A" />
  <RadioField value="b" label="B" />
</RadioGroup>`}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {themeVariants.map((v) => (
              <div key={v} className="flex flex-col gap-2 rounded-lg border border-border bg-card/30 p-3">
                <p className="text-xs font-medium capitalize text-muted-foreground">{v}</p>
                <RadioGroup
                  variant={v}
                  defaultValue={`${v}-b`}
                  className="flex flex-wrap items-center gap-4"
                >
                  <RadioField value={`${v}-a`} size="md" aria-label={`${v} option a`} />
                  <RadioField value={`${v}-b`} size="md" aria-label={`${v} option b`} />
                </RadioGroup>
              </div>
            ))}
          </div>
        </DemoBlock>

        <DemoBlock
          title="Sizes (standalone items)"
          description="Each item is a circle + optional label stack; sizes mirror checkbox sm · md · lg · xl (48×48px)."
          code={`<RadioGroup value="b" onValueChange={…}>
  <RadioField value="a" size="sm" aria-label="Option A" />
  <RadioField value="b" size="md" aria-label="Option B" />
  <RadioField value="c" size="lg" aria-label="Option C" />
  <RadioField value="d" size="xl" aria-label="48px" />
</RadioGroup>`}
        >
          <RadioGroup className="flex flex-wrap items-end gap-6" value={plan} onValueChange={setPlan}>
            <RadioField value="starter" size="sm" aria-label="Starter tier" />
            <RadioField value="pro" size="md" aria-label="Pro tier" />
            <RadioField value="enterprise" size="lg" aria-label="Enterprise tier" />
            <RadioField value="xlarge" size="xl" aria-label="48 by 48 tier" />
          </RadioGroup>
        </DemoBlock>

        <DemoBlock
          title="Custom size via className"
          description="Control classes merge last — override the preset ring (inner dot scales as a percentage of the control)."
          code={`<RadioField
  value="custom"
  size="sm"
  className="size-12"
  aria-label="48px from className"
/>`}
        >
          <RadioGroup className="flex flex-wrap items-end gap-6" value={plan} onValueChange={setPlan}>
            <RadioField value="starter" size="sm" className="size-10" aria-label="40px" />
            <RadioField value="pro" size="md" className="size-14" aria-label="56px" />
            <RadioField value="enterprise" size="lg" aria-label="Preset lg" />
            <RadioField value="xlarge" size="xl" aria-label="Preset xl 48px" />
          </RadioGroup>
        </DemoBlock>

        <DemoBlock
          title="Label + description"
          description="Typical settings panel: one selection with helper copy per option."
          code={`<RadioGroup value={plan} onValueChange={setPlan} size="md">
  <RadioField value="monthly" label="Monthly" description="Pay each month, cancel anytime." />
  <RadioField value="yearly" label="Yearly" description="Save about 20% with annual billing." />
</RadioGroup>`}
        >
          <RadioGroup value={plan} onValueChange={setPlan} size="md" className="max-w-md">
            <RadioField value="starter" label="Starter" description="For individuals and side projects." />
            <RadioField value="pro" label="Pro" description="Shared workspaces and priority support." />
            <RadioField value="enterprise" label="Enterprise" description="SSO, audit logs, and dedicated success." />
          </RadioGroup>
        </DemoBlock>

        <DemoBlock
          title="Group size with per-row override"
          description="RadioGroup size=&quot;sm&quot; sets the default; one row can override (e.g. lg or xl 48px)."
          code={`<RadioGroup size="sm" value={v} onValueChange={setV}>
  <RadioField value="a" label="Compact row" />
  <RadioField value="b" size="xl" label="48px control" />
</RadioGroup>`}
        >
          <RadioGroup size="sm" value={plan} onValueChange={setPlan} className="max-w-md">
            <RadioField value="starter" label="Compact row" description="Inherits sm from the group." />
            <RadioField
              value="pro"
              size="xl"
              label="48×48 control"
              description="This row overrides size to xl."
            />
          </RadioGroup>
        </DemoBlock>

        <DemoBlock
          title="Disabled"
          description="Disable the whole group or a single RadioField."
          code={`<RadioGroup disabled value="a">
  <RadioField value="a" label="Only option" />
</RadioGroup>

<RadioGroup value="on">
  <RadioField value="on" label="On" />
  <RadioField value="off" label="Off" disabled />
</RadioGroup>`}
        >
          <div className="flex flex-col gap-6">
            <RadioGroup disabled value="a" className="max-w-md">
              <RadioField value="a" label="Entire group disabled" description="Cannot change selection." />
            </RadioGroup>
            <RadioGroup value="on" className="max-w-md">
              <RadioField value="on" label="Notifications on" />
              <RadioField value="off" label="Notifications off" disabled description="Requires admin to enable." />
            </RadioGroup>
          </div>
        </DemoBlock>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Props (summary)</h2>
          <div className="overflow-x-auto rounded-lg border border-border text-sm">
            <table className="w-full min-w-lg border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-4 py-2.5 font-medium">Part</th>
                  <th className="px-4 py-2.5 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">RadioGroup</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Same as Radix root: <code className="text-a7-text-gray">value</code>,{" "}
                    <code className="text-a7-text-gray">onValueChange</code>, <code className="text-a7-text-gray">name</code>,{" "}
                    <code className="text-a7-text-gray">disabled</code>, <code className="text-a7-text-gray">orientation</code>, optional{" "}
                    <code className="text-a7-text-gray">size</code> and <code className="text-a7-text-gray">variant</code> (defaults inherited by each{" "}
                    <code className="text-a7-text-gray">RadioField</code>).
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">RadioField</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Requires <code className="text-a7-text-gray">value</code>. Optional <code className="text-a7-text-gray">label</code>,{" "}
                    <code className="text-a7-text-gray">description</code>, <code className="text-a7-text-gray">size</code> /{" "}
                    <code className="text-a7-text-gray">variant</code> override.{" "}
                    <code className="text-a7-text-gray">className</code> merges last on the control (override <code className="text-a7-text-gray">size-*</code>);{" "}
                    <code className="text-a7-text-gray">containerClassName</code> styles the row when labelled.
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
