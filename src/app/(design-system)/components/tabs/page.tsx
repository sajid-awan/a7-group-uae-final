"use client"

import { AppWindowIcon, ArrowRight, BarChart3Icon, CodeIcon, FileTextIcon, HomeIcon, SettingsIcon } from "lucide-react"

import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"

export default function TabsDocsPage() {
  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">Tabs</h1>
        <p className="mt-2 text-muted-foreground">
          A set of layered sections of content that are displayed one at a time.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"`}</CodeBlock>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Usage</h2>
          <CodeBlock>{`<Tabs defaultValue="overview">
  <TabsList activeVariant="primary">
    <TabsTrigger size="md" shape="rounded" value="overview">Overview</TabsTrigger>
    <TabsTrigger size="md" shape="rounded" value="analytics">Analytics</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="analytics">Analytics content</TabsContent>
</Tabs>`}</CodeBlock>
        </section>

        <DemoBlock
          title="Default"
          description="Standard segmented tabs."
          code={`<Tabs defaultValue="overview" className="w-full max-w-xl">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="reports">Reports</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="overview" className="w-full max-w-xl">
            <TabsList>
              <TabsTrigger shape="rounded" value="overview">Overview</TabsTrigger>
              <TabsTrigger shape="rounded" value="analytics">Analytics</TabsTrigger>
              <TabsTrigger shape="rounded" value="reports">Reports</TabsTrigger>
              <TabsTrigger shape="rounded" value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="rounded-lg border p-4 text-sm text-muted-foreground">
              View your key metrics and recent project activity. You have 12 active projects and 3 pending tasks.
            </TabsContent>
            <TabsContent value="analytics" className="rounded-lg border p-4 text-sm text-muted-foreground">
              Analytics dashboard content.
            </TabsContent>
            <TabsContent value="reports" className="rounded-lg border p-4 text-sm text-muted-foreground">
              Reports content.
            </TabsContent>
            <TabsContent value="settings" className="rounded-lg border p-4 text-sm text-muted-foreground">
              Settings content.
            </TabsContent>
          </Tabs>
        </DemoBlock>

        <DemoBlock
          title="Active color props"
          description="Control active-tab color using `activeVariant`, or pass custom `activeBg` and `activeText`."
          code={`<Tabs defaultValue="apartment" className="w-full max-w-3xl">
  <div className="grid gap-5 md:grid-cols-[minmax(220px,320px)_1fr]">
    <TabsList activeVariant="dark" className="flex w-full flex-col gap-3 bg-transparent p-0">
      <TabsTrigger value="apartment" size="lg" shape="rounded" className="w-full justify-between border bg-card px-5 py-4 text-left font-semibold">
        Apartment
        <ArrowRight className="size-5" />
      </TabsTrigger>
      <TabsTrigger value="townhouses" size="lg" shape="rounded" className="w-full justify-between border bg-card px-5 py-4 text-left font-semibold">
        Townhouses
        <ArrowRight className="size-5" />
      </TabsTrigger>
    </TabsList>
    <TabsContent value="apartment" className="rounded-xl border p-4 text-sm text-muted-foreground">Apartment content.</TabsContent>
    <TabsContent value="townhouses" className="rounded-xl border p-4 text-sm text-muted-foreground">Townhouses content.</TabsContent>
  </div>
</Tabs>

<Tabs defaultValue="primary" className="w-full max-w-xl">
  <TabsList activeVariant="custom" activeBg="#b68c40" activeText="#ffffff">
    <TabsTrigger shape="pill" value="primary">Custom Gold</TabsTrigger>
    <TabsTrigger shape="pill" value="secondary">Secondary</TabsTrigger>
  </TabsList>
</Tabs>`}
        >
          <div className="space-y-6">
            <Tabs defaultValue="apartment" className="w-full max-w-3xl">
              <div className="grid gap-5 md:grid-cols-[minmax(220px,320px)_1fr]">
                <TabsList activeVariant="dark" className="flex w-full flex-col gap-3 bg-transparent p-0">
                  <TabsTrigger
                    value="apartment"
                    size="lg"
                    shape="rounded"
                    className="w-full justify-between border border-transparent bg-card px-5 py-4 text-left font-semibold text-black"
                  >
                    Apartment
                    <ArrowRight className="size-5" />
                  </TabsTrigger>
                  <TabsTrigger
                    value="townhouses"
                    size="lg"
                    shape="rounded"
                    className="w-full justify-between border border-transparent bg-card px-5 py-4 text-left font-semibold text-black"
                  >
                    Townhouses
                    <ArrowRight className="size-5" />
                  </TabsTrigger>
                  <TabsTrigger
                    value="duplex"
                    size="lg"
                    shape="rounded"
                    className="w-full justify-between border border-transparent bg-card px-5 py-4 text-left font-semibold text-black"
                  >
                    Duplex
                    <ArrowRight className="size-5" />
                  </TabsTrigger>
                  <TabsTrigger
                    value="studio"
                    size="lg"
                    shape="rounded"
                    className="w-full justify-between border border-transparent bg-card px-5 py-4 text-left font-semibold text-black"
                  >
                    Studio
                    <ArrowRight className="size-5" />
                  </TabsTrigger>
                </TabsList>
                <div>
                  <TabsContent value="apartment" className="rounded-xl border bg-card p-4 text-sm text-muted-foreground">
                    Apartment inventory and filters appear on the right side.
                  </TabsContent>
                  <TabsContent value="townhouses" className="rounded-xl border bg-card p-4 text-sm text-muted-foreground">
                    Townhouses content updates on selection.
                  </TabsContent>
                  <TabsContent value="duplex" className="rounded-xl border bg-card p-4 text-sm text-muted-foreground">
                    Duplex content updates on selection.
                  </TabsContent>
                  <TabsContent value="studio" className="rounded-xl border bg-card p-4 text-sm text-muted-foreground">
                    Studio content updates on selection.
                  </TabsContent>
                </div>
              </div>
            </Tabs>

            <Tabs defaultValue="primary" className="w-full max-w-xl">
              <TabsList activeVariant="custom" activeBg="#b68c40" activeText="#ffffff">
                <TabsTrigger shape="pill" value="primary">Custom Gold</TabsTrigger>
                <TabsTrigger shape="pill" value="secondary">Secondary</TabsTrigger>
                <TabsTrigger shape="pill" value="third">Third</TabsTrigger>
              </TabsList>
              <TabsContent value="primary" className="rounded-lg border p-4 text-sm text-muted-foreground">
                Custom active color uses props.
              </TabsContent>
              <TabsContent value="secondary" className="rounded-lg border p-4 text-sm text-muted-foreground">
                Secondary content.
              </TabsContent>
              <TabsContent value="third" className="rounded-lg border p-4 text-sm text-muted-foreground">
                Third content.
              </TabsContent>
            </Tabs>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Line variant"
          description='Use `variant="line"` on list and triggers for underline tabs.'
          code={`<Tabs defaultValue="overview" className="w-full max-w-xl">
  <TabsList variant="line">
    <TabsTrigger variant="line" value="overview">Overview</TabsTrigger>
    <TabsTrigger variant="line" value="analytics">Analytics</TabsTrigger>
    <TabsTrigger variant="line" value="reports">Reports</TabsTrigger>
  </TabsList>
</Tabs>`}
        >
          <Tabs defaultValue="overview" className="w-full max-w-xl">
            <TabsList variant="line" className="gap-6">
              <TabsTrigger variant="line" size="md" value="overview">
                Overview
              </TabsTrigger>
              <TabsTrigger variant="line" size="md" value="analytics">
                Analytics
              </TabsTrigger>
              <TabsTrigger variant="line" size="md" value="reports">
                Reports
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="text-sm text-muted-foreground">
              Overview panel.
            </TabsContent>
            <TabsContent value="analytics" className="text-sm text-muted-foreground">
              Analytics panel.
            </TabsContent>
            <TabsContent value="reports" className="text-sm text-muted-foreground">
              Reports panel.
            </TabsContent>
          </Tabs>
        </DemoBlock>

        <DemoBlock
          title="Pill variant"
          description='Use `variant="pill"` for floor-plan sub-type tabs. Active tab uses primary gold; inactive tabs are white with a border.'
          code={`<Tabs defaultValue="type-a" className="w-full">
  <TabsList variant="pill">
    <TabsTrigger variant="pill" value="type-a">Type A</TabsTrigger>
    <TabsTrigger variant="pill" value="type-b">Type B+Maid</TabsTrigger>
  </TabsList>
  <TabsContent value="type-a">Type A content</TabsContent>
  <TabsContent value="type-b">Type B+Maid content</TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="type-a" className="w-full max-w-2xl">
            <TabsList variant="pill">
              <TabsTrigger variant="pill" value="type-a">
                Type A
              </TabsTrigger>
              <TabsTrigger variant="pill" value="type-b">
                Type B+Maid
              </TabsTrigger>
            </TabsList>
            <TabsContent value="type-a" className="mt-4 rounded-xl border bg-card p-4 text-sm text-muted-foreground">
              Type A floor plan details, image, and specs.
            </TabsContent>
            <TabsContent value="type-b" className="mt-4 rounded-xl border bg-card p-4 text-sm text-muted-foreground">
              Type B+Maid floor plan details, image, and specs.
            </TabsContent>
          </Tabs>
        </DemoBlock>

        <DemoBlock
          title="Disabled + icons"
          description="Mix icon triggers and disabled tab states."
          code={`<Tabs defaultValue="preview" className="w-full max-w-md">
  <TabsList>
    <TabsTrigger value="preview"><AppWindowIcon className="size-4" />Preview</TabsTrigger>
    <TabsTrigger value="code"><CodeIcon className="size-4" />Code</TabsTrigger>
    <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
  </TabsList>
</Tabs>`}
        >
          <Tabs defaultValue="preview" className="w-full max-w-md">
            <TabsList>
              <TabsTrigger value="preview" shape="pill" className="gap-2">
                <AppWindowIcon className="size-4" />
                Preview
              </TabsTrigger>
              <TabsTrigger value="code" shape="pill" className="gap-2">
                <CodeIcon className="size-4" />
                Code
              </TabsTrigger>
              <TabsTrigger value="disabled" shape="pill" disabled>
                Disabled
              </TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="rounded-lg border p-4 text-sm text-muted-foreground">
              Preview tab content.
            </TabsContent>
            <TabsContent value="code" className="rounded-lg border p-4 text-sm text-muted-foreground">
              Code tab content.
            </TabsContent>
          </Tabs>
        </DemoBlock>

        <DemoBlock
          title="Vertical"
          description='Use `orientation="vertical"` with a column list for sidebar-like tabs.'
          code={`<Tabs defaultValue="account" orientation="vertical" className="w-full max-w-xl flex-row gap-6">
  <TabsList className="h-fit flex-col">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="notifications">Notifications</TabsTrigger>
  </TabsList>
</Tabs>`}
        >
          <Tabs defaultValue="account" orientation="vertical" className="w-full max-w-xl flex-row items-start gap-6">
            <TabsList className="h-fit flex-col">
              <TabsTrigger value="account" shape="rounded" className="w-full justify-start gap-2">
                <HomeIcon className="size-4" />
                Account
              </TabsTrigger>
              <TabsTrigger value="password" shape="rounded" className="w-full justify-start gap-2">
                <FileTextIcon className="size-4" />
                Password
              </TabsTrigger>
              <TabsTrigger value="notifications" shape="rounded" className="w-full justify-start gap-2">
                <BarChart3Icon className="size-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="settings" shape="rounded" className="w-full justify-start gap-2">
                <SettingsIcon className="size-4" />
                Settings
              </TabsTrigger>
            </TabsList>
            <div className="flex-1">
              <TabsContent value="account" className="rounded-lg border p-4 text-sm text-muted-foreground">
                Account tab content.
              </TabsContent>
              <TabsContent value="password" className="rounded-lg border p-4 text-sm text-muted-foreground">
                Password tab content.
              </TabsContent>
              <TabsContent value="notifications" className="rounded-lg border p-4 text-sm text-muted-foreground">
                Notifications tab content.
              </TabsContent>
              <TabsContent value="settings" className="rounded-lg border p-4 text-sm text-muted-foreground">
                Settings tab content.
              </TabsContent>
            </div>
          </Tabs>
        </DemoBlock>
      </div>
    </div>
  )
}
