"use client"

import * as React from "react"

import { Field, FieldDescription, FieldLabel } from "@/shared/ui/field"
import { Slider } from "@/shared/ui/slider"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"

export default function SlidersDocsPage() {
  const [controlled, setControlled] = React.useState([30, 70])
  const [d0_25, setD0_25] = React.useState([0, 25])
  const [d0_100, setD0_100] = React.useState([0, 100])
  const [d25_75, setD25_75] = React.useState([25, 75])

  return (
    <div className="mx-auto  p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight font-heading">Slider</h1>
        <p className="mt-2 text-muted-foreground">
          Input where users select one or more values within a range.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import { Slider } from "@/shared/ui/slider"`}</CodeBlock>
        </section>

        <DemoBlock title="Basic" code={`<Slider defaultValue={[33]} max={100} step={1} />`}>
          <div className="w-full max-w-sm">
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
        </DemoBlock>

        <DemoBlock title="Range" code={`<Slider defaultValue={[25, 75]} max={100} step={1} />`}>
          <div className="w-full max-w-sm">
            <Slider defaultValue={[25, 75]} max={100} step={1} />
          </div>
        </DemoBlock>

        <DemoBlock title="Multiple thumbs" code={`<Slider defaultValue={[15, 50, 85]} max={100} step={1} />`}>
          <div className="w-full max-w-sm">
            <Slider defaultValue={[15, 50, 85]} max={100} step={1} />
          </div>
        </DemoBlock>

        <DemoBlock
          title="Controlled"
          code={`const [value, setValue] = React.useState([30, 70])
<Slider value={value} onValueChange={setValue} />`}
        >
          <Field className="w-full max-w-sm" orientation="vertical">
            <FieldLabel>Temperature</FieldLabel>
            <Slider value={controlled} onValueChange={setControlled} max={100} step={1} />
            <FieldDescription>
              {controlled[0]}, {controlled[1]}
            </FieldDescription>
          </Field>
        </DemoBlock>

        <DemoBlock title="Disabled" code={`<Slider defaultValue={[50]} max={100} step={1} disabled />`}>
          <div className="w-full max-w-sm">
            <Slider defaultValue={[50]} max={100} step={1} disabled />
          </div>
        </DemoBlock>

        <DemoBlock
          title="Design grid variants"
          description="Additional variants based on your reference image with percentage ranges and optional value bubbles."
          code={`const [rangeA, setRangeA] = React.useState([0, 25])
const [rangeB, setRangeB] = React.useState([0, 100])

<Slider value={rangeA} onValueChange={setRangeA} />
<Slider value={rangeB} onValueChange={setRangeB} thumbBubbles={rangeB.map(v => \`\${v}%\`)} bubbleShape="none" />`}
        >
          <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
            <div className="space-y-1.5">
              <Slider min={0} max={100} step={1} value={d0_25} onValueChange={setD0_25} />
              <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                <span>{d0_25[0]}%</span>
                <span>{d0_25[1]}%</span>
              </div>
            </div>

            <div className="space-y-1.5 pt-7">
              <Slider
                min={0}
                max={100}
                step={1}
                value={d0_100}
                onValueChange={setD0_100}
                thumbBubbles={d0_100.map((v) => `${v}%`)}
                bubbleShape="none"
              />
            </div>

            <div className="space-y-1.5 pt-7">
              <Slider
                min={0}
                max={100}
                step={1}
                value={d25_75}
                onValueChange={setD25_75}
                thumbBubbles={d25_75.map((v) => `${v}%`)}
              />
            </div>

         
          </div>
        </DemoBlock>
      </div>
    </div>
  )
}
