import { Spinner, ProgressBar } from "@/shared/ui/progress-indicator"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"

export default function ProgressIndicatorsDocsPage() {
  return (
    <div className="mx-auto max-w-4xl p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight font-heading">Progress indicators</h1>
        <p className="mt-2 text-muted-foreground">
          Indeterminate <strong className="text-a7-text-gray">spinners</strong> and determinate or indeterminate{" "}
          <strong className="text-a7-text-gray">progress bars</strong>. Both use a shared{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">variant</code> vocabulary (aligned with badges and
          semantic states) and a compact <code className="rounded bg-muted px-1 py-0.5 text-xs">size</code> scale so
          density stays predictable in forms, tables, and headers.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import { Spinner, ProgressBar } from "@/shared/ui/progress-indicator"`}</CodeBlock>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Spinner</h2>
          <p className="text-sm text-muted-foreground">
            SVG ring with <code className="rounded bg-muted px-1 py-0.5 text-xs">role=&quot;status&quot;</code> and a
            configurable <code className="rounded bg-muted px-1 py-0.5 text-xs">label</code> (defaults to “Loading”).
            Respects <code className="rounded bg-muted px-1 py-0.5 text-xs">prefers-reduced-motion</code>.
          </p>
        </section>

        <DemoBlock
          title="Spinner — variants"
          description="default (primary) · secondary · muted · destructive · success · warning · inverse (on primary surfaces)."
          code={`<Spinner variant="default" />
<Spinner variant="secondary" />
<Spinner variant="muted" />
<Spinner variant="destructive" />
<Spinner variant="success" />
<Spinner variant="warning" />
<Spinner variant="inverse" />`}
        >
          <div className="flex flex-wrap items-center gap-6">
            <Spinner variant="default" />
            <Spinner variant="secondary" />
            <Spinner variant="muted" />
            <Spinner variant="destructive" />
            <Spinner variant="success" />
            <Spinner variant="warning" />
            <div className="flex items-center justify-center rounded-lg bg-primary p-3">
              <Spinner variant="inverse" />
            </div>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Spinner — sizes"
          description="xs (14px) · sm (18px) · md (24px, default) · lg (32px) · xl (40px). Scale the control, not the stroke math — stroke scales with the viewBox."
          code={`<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />`}
        >
          <div className="flex flex-wrap items-end gap-6">
            <Spinner size="xs" />
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="xl" />
          </div>
        </DemoBlock>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Progress bar</h2>
          <p className="text-sm text-muted-foreground">
            Set <code className="rounded bg-muted px-1 py-0.5 text-xs">value</code> between 0 and 100 for determinate
            feedback, or <code className="rounded bg-muted px-1 py-0.5 text-xs">indeterminate</code> for unknown
            duration. Exposes <code className="rounded bg-muted px-1 py-0.5 text-xs">role=&quot;progressbar&quot;</code> with
            appropriate ARIA attributes. Pair <code className="rounded bg-muted px-1 py-0.5 text-xs">variant</code> and{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">size</code> the same way as the spinner.
          </p>
        </section>

        <DemoBlock
          title="Progress bar — variants"
          description="Track is always muted; fill follows the same semantic palette as spinners."
          code={`<ProgressBar value={45} variant="default" />
<ProgressBar value={45} variant="secondary" />
<ProgressBar value={45} variant="muted" />
<ProgressBar value={45} variant="destructive" />
<ProgressBar value={45} variant="success" />
<ProgressBar value={45} variant="warning" />`}
        >
          <div className="flex w-full max-w-xl flex-col gap-4">
            <ProgressBar value={45} variant="default" />
            <ProgressBar value={45} variant="secondary" />
            <ProgressBar value={45} variant="muted" />
            <ProgressBar value={45} variant="destructive" />
            <ProgressBar value={45} variant="success" />
            <ProgressBar value={45} variant="warning" />
          </div>
        </DemoBlock>

        <DemoBlock
          title="Progress bar — sizes"
          description="sm (4px) · md (6px, default) · lg (8px) track height."
          code={`<ProgressBar value={60} size="sm" />
<ProgressBar value={60} size="md" />
<ProgressBar value={60} size="lg" />`}
        >
          <div className="flex w-full max-w-xl flex-col gap-5">
            <ProgressBar value={60} size="sm" />
            <ProgressBar value={60} size="md" />
            <ProgressBar value={60} size="lg" />
          </div>
        </DemoBlock>

        <DemoBlock
          title="Determinate values"
          description="Clamp is applied in the component so callers can pass raw ratios without guarding every branch."
          code={`<ProgressBar value={0} />
<ProgressBar value={33} />
<ProgressBar value={100} />`}
        >
          <div className="flex w-full max-w-xl flex-col gap-4">
            <div className="space-y-1.5">
              <p className="text-xs font-medium text-muted-foreground">0%</p>
              <ProgressBar value={0} />
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-medium text-muted-foreground">33%</p>
              <ProgressBar value={33} />
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-medium text-muted-foreground">100%</p>
              <ProgressBar value={100} />
            </div>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Indeterminate progress"
          description="Use while work is in flight but progress cannot be quantified. Slides a segment across the track; still respects reduced-motion via the animation utility."
          code={`<ProgressBar indeterminate />
<ProgressBar indeterminate variant="secondary" size="lg" />`}
        >
          <div className="flex w-full max-w-xl flex-col gap-5">
            <ProgressBar indeterminate />
            <ProgressBar indeterminate variant="secondary" size="lg" />
          </div>
        </DemoBlock>

        <DemoBlock
          title="Inline with label"
          description="Typical table or form row: fixed-width bar, short label, optional spinner while saving."
          code={`<div className="flex items-center gap-3">
  <span className="text-sm tabular-nums text-muted-foreground">72%</span>
  <ProgressBar className="min-w-32 flex-1" value={72} size="sm" />
  <Spinner size="sm" />
</div>`}
        >
          <div className="flex w-full max-w-md items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
            <span className="w-10 text-sm font-medium tabular-nums text-muted-foreground">72%</span>
            <ProgressBar className="min-w-32 flex-1" value={72} size="sm" />
            <Spinner size="sm" label="Saving" />
          </div>
        </DemoBlock>
      </div>
    </div>
  )
}
