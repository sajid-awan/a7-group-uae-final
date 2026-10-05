"use client"

import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel } from "@/shared/ui/field"
import { Switch } from "@/shared/ui/switch"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"

export default function TogglesDocsPage() {
  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">Toggle</h1>
        <p className="mt-2 text-muted-foreground">
          A control that allows users to toggle between checked and unchecked states.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import { Switch } from "@/shared/ui/switch"`}</CodeBlock>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Usage</h2>
          <CodeBlock>{`<Switch />`}</CodeBlock>
        </section>

        <DemoBlock
          title="Description"
          description="Switch with label and helper text."
          code={`<Field orientation="horizontal" className="sm:grid-cols-[auto_1fr]">
  <Switch id="focus-mode" />
  <FieldContent>
    <FieldLabel htmlFor="focus-mode">Share across devices</FieldLabel>
    <FieldDescription>
      Focus is shared across devices, and turns off when you leave the app.
    </FieldDescription>
  </FieldContent>
</Field>`}
        >
          <Field orientation="horizontal" className="w-full max-w-md sm:grid-cols-[auto_1fr]">
            <Switch id="focus-mode" />
            <FieldContent>
              <FieldLabel htmlFor="focus-mode">Share across devices</FieldLabel>
              <FieldDescription>
                Focus is shared across devices, and turns off when you leave the app.
              </FieldDescription>
            </FieldContent>
          </Field>
        </DemoBlock>

        <DemoBlock
          title="Disabled"
          description="Disable interactions when the setting is unavailable."
          code={`<Field orientation="horizontal" data-disabled className="sm:grid-cols-[auto_1fr]">
  <Switch id="disabled-switch" disabled />
  <FieldLabel htmlFor="disabled-switch">Disabled</FieldLabel>
</Field>`}
        >
          <Field orientation="horizontal" data-disabled className="w-full max-w-md sm:grid-cols-[auto_1fr]">
            <Switch id="disabled-switch" disabled />
            <FieldLabel htmlFor="disabled-switch">Disabled</FieldLabel>
          </Field>
        </DemoBlock>

        <DemoBlock
          title="Invalid"
          description="Use aria-invalid and field state for validation styling."
          code={`<Field orientation="horizontal" data-invalid className="sm:grid-cols-[auto_1fr]">
  <Switch id="terms-switch" aria-invalid />
  <FieldContent>
    <FieldLabel htmlFor="terms-switch">Accept terms and conditions</FieldLabel>
    <FieldDescription>You must accept the terms and conditions to continue.</FieldDescription>
  </FieldContent>
</Field>`}
        >
          <Field orientation="horizontal" data-invalid className="w-full max-w-md sm:grid-cols-[auto_1fr]">
            <Switch id="terms-switch" aria-invalid />
            <FieldContent>
              <FieldLabel htmlFor="terms-switch">Accept terms and conditions</FieldLabel>
              <FieldDescription>You must accept the terms and conditions to continue.</FieldDescription>
            </FieldContent>
          </Field>
        </DemoBlock>

        <DemoBlock
          title="Size"
          description="Use the size prop to render all available switch sizes."
          code={`<FieldGroup className="w-full max-w-md">
  <Field orientation="horizontal" className="sm:grid-cols-[auto_1fr]">
    <Switch id="small-switch" size="sm" />
    <FieldLabel htmlFor="small-switch">Small</FieldLabel>
  </Field>
  <Field orientation="horizontal" className="sm:grid-cols-[auto_1fr]">
    <Switch id="default-switch" size="md" />
    <FieldLabel htmlFor="default-switch">Default</FieldLabel>
  </Field>
  <Field orientation="horizontal" className="sm:grid-cols-[auto_1fr]">
    <Switch id="large-switch" size="lg" />
    <FieldLabel htmlFor="large-switch">Large</FieldLabel>
  </Field>
  <Field orientation="horizontal" className="sm:grid-cols-[auto_1fr]">
    <Switch id="xl-switch" size="xl" />
    <FieldLabel htmlFor="xl-switch">XL</FieldLabel>
  </Field>
</FieldGroup>`}
        >
          <FieldGroup className="w-full max-w-md">
            <Field orientation="horizontal" className="sm:grid-cols-[auto_1fr]">
              <Switch id="small-switch" size="sm" />
              <FieldLabel htmlFor="small-switch">Small</FieldLabel>
            </Field>
            <Field orientation="horizontal" className="sm:grid-cols-[auto_1fr]">
              <Switch id="default-switch" size="md" />
              <FieldLabel htmlFor="default-switch">Default</FieldLabel>
            </Field>
            <Field orientation="horizontal" className="sm:grid-cols-[auto_1fr]">
              <Switch id="large-switch" size="lg" />
              <FieldLabel htmlFor="large-switch">Large</FieldLabel>
            </Field>
            <Field orientation="horizontal" className="sm:grid-cols-[auto_1fr]">
              <Switch id="xl-switch" size="xl" />
              <FieldLabel htmlFor="xl-switch">XL</FieldLabel>
            </Field>
          </FieldGroup>
        </DemoBlock>

        <DemoBlock
          title=" variants"
          description="Matrix preview matching your  states: bare switch and labeled rows in checked/unchecked combinations."
          code={`<div className="grid gap-8 md:grid-cols-2">
  <FieldGroup className="w-full max-w-md">
    <Field orientation="horizontal" className="sm:grid-cols-[auto_1fr]">
      <Switch id="sm-off" size="sm" />
      <FieldLabel htmlFor="sm-off">Remember me</FieldLabel>
    </Field>
    <Field orientation="horizontal" className="sm:grid-cols-[auto_1fr]">
      <Switch id="sm-on" size="sm" defaultChecked />
      <FieldLabel htmlFor="sm-on">Remember me</FieldLabel>
    </Field>
  </FieldGroup>

  <FieldGroup className="w-full max-w-md">
    <Switch id="bare-off" size="md" aria-label="Bare off" />
    <Switch id="bare-on" size="md" defaultChecked aria-label="Bare on" />
    <Switch id="bare-lg-off" size="lg" aria-label="Bare lg off" />
    <Switch id="bare-lg-on" size="lg" defaultChecked aria-label="Bare lg on" />
  </FieldGroup>
</div>`}
        >
          <div className="grid gap-8 md:grid-cols-2">
            <FieldGroup className="w-full max-w-md">
              <Field orientation="horizontal" className="sm:grid-cols-[auto_1fr]">
                <Switch id="sm-off" size="sm" />
                <FieldLabel htmlFor="sm-off">Remember me</FieldLabel>
              </Field>
              <Field orientation="horizontal" className="sm:grid-cols-[auto_1fr]">
                <Switch id="sm-on" size="sm" defaultChecked />
                <FieldLabel htmlFor="sm-on">Remember me</FieldLabel>
              </Field>
              <Field orientation="horizontal" className="sm:grid-cols-[auto_1fr]">
                <Switch id="md-off" size="md" />
                <FieldContent>
                  <FieldLabel htmlFor="md-off">Remember me</FieldLabel>
                  <FieldDescription>Save my login details for next time.</FieldDescription>
                </FieldContent>
              </Field>
              <Field orientation="horizontal" className="sm:grid-cols-[auto_1fr]">
                <Switch id="md-on" size="md" defaultChecked />
                <FieldContent>
                  <FieldLabel htmlFor="md-on">Remember me</FieldLabel>
                  <FieldDescription>Save my login details for next time.</FieldDescription>
                </FieldContent>
              </Field>
            </FieldGroup>

            <FieldGroup className="w-full max-w-md">
              <div className="grid grid-cols-2 gap-3">
                <Switch id="bare-sm-off" size="sm" aria-label="Bare small off" />
                <Switch id="bare-sm-on" size="sm" defaultChecked aria-label="Bare small on" />
                <Switch id="bare-md-off" size="md" aria-label="Bare default off" />
                <Switch id="bare-md-on" size="md" defaultChecked aria-label="Bare default on" />
                <Switch id="bare-lg-off" size="lg" aria-label="Bare large off" />
                <Switch id="bare-lg-on" size="lg" defaultChecked aria-label="Bare large on" />
                <Switch id="bare-xl-off" size="xl" aria-label="Bare extra large off" />
                <Switch id="bare-xl-on" size="xl" defaultChecked aria-label="Bare extra large on" />
              </div>
            </FieldGroup>
          </div>
        </DemoBlock>
      </div>
    </div>
  )
}
