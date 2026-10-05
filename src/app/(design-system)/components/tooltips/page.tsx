"use client"

import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"
import { InfoTooltip } from "@/shared/ui/info-tooltip"

export default function TooltipsDocsPage() {
  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">Tooltip</h1>
        <p className="mt-2 text-muted-foreground">
          A popup that displays information related to an element on hover or focus.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import { InfoTooltip } from "@/shared/ui/info-tooltip"`}</CodeBlock>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Usage</h2>
          <CodeBlock>{`<InfoTooltip
  content="Tooltips are used to describe or identify an element."
  trigger="inline"
  icon="help"
/>`}</CodeBlock>
        </section>

        <DemoBlock
          title="Default"
          description="Compact dark tooltip style with an inline help trigger."
          code={`<InfoTooltip trigger="inline" icon="help" ariaLabel="Default tooltip" />`}
        >
          <InfoTooltip trigger="inline" icon="help" ariaLabel="Default tooltip" />
        </DemoBlock>

        <DemoBlock
          title="Side"
          description="All side placements from the same trigger style."
          code={`<InfoTooltip trigger="inline" icon="help" side="top" />
<InfoTooltip trigger="inline" icon="help" side="right" />
<InfoTooltip trigger="inline" icon="help" side="bottom" />
<InfoTooltip trigger="inline" icon="help" side="left" />`}
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="flex items-center gap-2">
              <InfoTooltip trigger="inline" icon="help" side="top" ariaLabel="Tooltip top" />
              <span className="text-xs text-muted-foreground">Top</span>
            </div>
            <div className="flex items-center gap-2">
              <InfoTooltip trigger="inline" icon="help" side="right" ariaLabel="Tooltip right" />
              <span className="text-xs text-muted-foreground">Right</span>
            </div>
            <div className="flex items-center gap-2">
              <InfoTooltip trigger="inline" icon="help" side="bottom" ariaLabel="Tooltip bottom" />
              <span className="text-xs text-muted-foreground">Bottom</span>
            </div>
            <div className="flex items-center gap-2">
              <InfoTooltip trigger="inline" icon="help" side="left" ariaLabel="Tooltip left" />
              <span className="text-xs text-muted-foreground">Left</span>
            </div>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Long content"
          description="Card-like tooltip body to mirror the larger text style from your image."
          code={`<InfoTooltip
  trigger="inline"
  icon="help"
  size="detailed"
  content="Tooltips are used to describe or identify an element."
/>`}
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <InfoTooltip
                trigger="inline"
                icon="help"
                size="detailed"
                side="top"
                content="Tooltips are used to describe or identify an element."
                ariaLabel="Long tooltip top"
              />
              <span className="text-xs text-muted-foreground">Top content</span>
            </div>
            <div className="flex items-center gap-2">
              <InfoTooltip
                trigger="inline"
                icon="help"
                size="detailed"
                side="right"
                content="Tooltips are used to describe or identify an element."
                ariaLabel="Long tooltip right"
              />
              <span className="text-xs text-muted-foreground">Right content</span>
            </div>
            <div className="flex items-center gap-2">
              <InfoTooltip
                trigger="inline"
                icon="help"
                size="detailed"
                side="bottom"
                content="Tooltips are used to describe or identify an element."
                ariaLabel="Long tooltip bottom"
              />
              <span className="text-xs text-muted-foreground">Bottom content</span>
            </div>
            <div className="flex items-center gap-2">
              <InfoTooltip
                trigger="inline"
                icon="help"
                size="detailed"
                side="left"
                content="Tooltips are used to describe or identify an element."
                ariaLabel="Long tooltip left"
              />
              <span className="text-xs text-muted-foreground">Left content</span>
            </div>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Light variant"
          description="White tooltip card variant with soft shadow and pointer"
          code={`<InfoTooltip
  trigger="inline"
  icon="help"
  variant="soft"
  size="detailed"
  content="Tooltips are used to describe or identify an element."
/>`}
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <InfoTooltip
                trigger="inline"
                icon="help"
                variant="soft"
                size="detailed"
                side="top"
                content="Tooltips are used to describe or identify an element."
                ariaLabel="Light tooltip top"
              />
              <span className="text-xs text-muted-foreground">Top light</span>
            </div>
            <div className="flex items-center gap-2">
              <InfoTooltip
                trigger="inline"
                icon="help"
                variant="soft"
                size="detailed"
                side="right"
                content="Tooltips are used to describe or identify an element."
                ariaLabel="Light tooltip right"
              />
              <span className="text-xs text-muted-foreground">Right light</span>
            </div>
            <div className="flex items-center gap-2">
              <InfoTooltip
                trigger="inline"
                icon="help"
                variant="soft"
                size="detailed"
                side="bottom"
                content="Tooltips are used to describe or identify an element."
                ariaLabel="Light tooltip bottom"
              />
              <span className="text-xs text-muted-foreground">Bottom light</span>
            </div>
            <div className="flex items-center gap-2">
              <InfoTooltip
                trigger="inline"
                icon="help"
                variant="soft"
                size="detailed"
                side="left"
                content="Tooltips are used to describe or identify an element."
                ariaLabel="Light tooltip left"
              />
              <span className="text-xs text-muted-foreground">Left light</span>
            </div>
          </div>
        </DemoBlock>
      </div>
    </div>
  )
}
