import { ArrowLeft, ArrowRight, Bot, ChevronDown, Circle, MoreHorizontal, Plus, Search } from "lucide-react"

import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/shared/ui/button-group"
import { Button } from "@/shared/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/shared/ui/popover"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"

/** Empty circle for segmented “radio” rows (visual only; use real radios for forms). */
function SegmentRadioIcon() {
  return <Circle className="size-4 shrink-0 text-muted-foreground" strokeWidth={2} aria-hidden />
}

export default function ButtonGroupsDocsPage() {
  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight font-heading">Button groups</h1>
        <p className="mt-2 text-muted-foreground">
          Horizontal <span className="font-medium text-a7-text-gray">segmented</span> controls: shared outline, only
          the outer corners rounded, no gap between segments. Use <code className="rounded bg-muted px-1 py-0.5 text-xs">Button</code>{" "}
          with <code className="rounded bg-muted px-1 py-0.5 text-xs">variant=&quot;outline&quot;</code> inside{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">ButtonGroup</code> (attached by default). For icons on
          both sides of the label, use <code className="rounded bg-muted px-1 py-0.5 text-xs">iconLeft</code> and{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">iconRight</code> (or the single <code className="rounded bg-muted px-1 py-0.5 text-xs">icon</code> /{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">iconAlign</code> API).
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@/shared/ui/button-group"
import { Button } from "@/shared/ui/button"`}</CodeBlock>
        </section>

        <DemoBlock
          title="Orientation variants"
          description="Use `orientation` to switch group layout. Horizontal is default; vertical stacks segments."
          code={`<ButtonGroup orientation="horizontal">
  <Button variant="outline" size="sm" label="Left" />
  <Button variant="outline" size="sm" label="Center" />
  <Button variant="outline" size="sm" label="Right" />
</ButtonGroup>

<ButtonGroup orientation="vertical" className="w-52">
  <Button variant="outline" size="sm" label="Top" />
  <Button variant="outline" size="sm" label="Middle" />
  <Button variant="outline" size="sm" label="Bottom" />
</ButtonGroup>`}
        >
          <div className="flex flex-col gap-4">
            <ButtonGroup orientation="horizontal" aria-label="Horizontal orientation">
              <Button variant="outline" size="sm" label="Left" />
              <Button variant="outline" size="sm" label="Center" />
              <Button variant="outline" size="sm" label="Right" />
            </ButtonGroup>
            <ButtonGroup orientation="vertical" aria-label="Vertical orientation" className="w-52">
              <Button variant="outline" size="sm" label="Top" />
              <Button variant="outline" size="sm" label="Middle" />
              <Button variant="outline" size="sm" label="Bottom" />
            </ButtonGroup>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Segmented kit (outline)"
          description="Text-only · leading icon + label · icon-only — same pattern as the design reference."
          code={`import { ArrowLeft, ArrowRight, Circle, Plus } from "lucide-react"

<ButtonGroup aria-label="Text only">
  <Button variant="outline" size="sm" label="Text" />
  <Button variant="outline" size="sm" label="Text" />
  <Button variant="outline" size="sm" label="Text" />
</ButtonGroup>

<ButtonGroup aria-label="With leading icon">
  <Button variant="outline" size="sm" iconLeft={<Circle strokeWidth={2} />} label="Text" />
  …
</ButtonGroup>

<ButtonGroup aria-label="Icon only">
  <Button variant="outline" size="icon-sm" icon={<ArrowLeft />} aria-label="Back" />
  …
</ButtonGroup>`}
        >
          <div className="flex w-full max-w-xl flex-col gap-6">
            <ButtonGroup aria-label="Text only segments">
              <Button variant="outline" size="sm" label="Text" />
              <Button variant="outline" size="sm" label="Text" />
              <Button variant="outline" size="sm" label="Text" />
            </ButtonGroup>

            <ButtonGroup aria-label="Radio style segments">
              <Button variant="outline" size="sm" iconLeft={<SegmentRadioIcon />} label="Text" />
              <Button variant="outline" size="sm" iconLeft={<SegmentRadioIcon />} label="Text" />
              <Button variant="outline" size="sm" iconLeft={<SegmentRadioIcon />} label="Text" />
            </ButtonGroup>

            <ButtonGroup aria-label="Icon only segments">
              <Button variant="outline" size="icon-sm" icon={<ArrowLeft />} aria-label="Previous" />
              <Button variant="outline" size="icon-sm" icon={<Plus />} aria-label="Add" />
              <Button variant="outline" size="icon-sm" icon={<ArrowRight />} aria-label="Next" />
            </ButtonGroup>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Input + action button"
          description="Button Group supports non-button children like inputs for compact search/action compositions."
          code={`<ButtonGroup aria-label="Search input group">
  <input
    placeholder="Search..."
    className="h-11 w-72 border border-input bg-white px-3 text-sm outline-none"
  />
  <Button variant="outline" size="icon-sm" aria-label="Search">
    <ArrowRight />
  </Button>
</ButtonGroup>`}
        >
          <ButtonGroup aria-label="Search input group" className="max-w-md">
            <input
              placeholder="Search..."
              className="h-12 w-72 border border-input bg-white px-3 text-sm outline-none placeholder:text-muted-foreground"
            />
            <Button variant="outline" size="icon-sm" aria-label="Search">
              <ArrowRight className="size-5" />
            </Button>
          </ButtonGroup>
        </DemoBlock>

        <DemoBlock
          title="Input-group style composer"
          description="Nested groups let you compose a plus action, message input, and voice toggle in one row."
          code={`<ButtonGroup className="max-w-2xl">
  <ButtonGroup>
    <Button variant="outline" size="icon-sm" aria-label="Add">
      <Plus />
    </Button>
  </ButtonGroup>
  <ButtonGroup className="flex-1">
    <input className="h-12 w-full border border-input bg-white px-3 text-sm" placeholder="Send a message..." />
    <Button variant="outline" size="icon-sm" aria-label="Voice mode">
      <Bot />
    </Button>
  </ButtonGroup>
</ButtonGroup>`}
        >
          <ButtonGroup className="max-w-2xl">
            <ButtonGroup>
              <Button variant="outline" size="icon-sm" aria-label="Add">
                <Plus className="size-5" />
              </Button>
            </ButtonGroup>
            <ButtonGroup className="flex-1">
              <input
                className="h-12 w-full border border-input bg-white px-3 text-sm outline-none placeholder:text-muted-foreground"
                placeholder="Send a message..."
              />
              <Button variant="outline" size="icon-sm" aria-label="Voice mode">
                <Bot className="size-5" />
              </Button>
            </ButtonGroup>
          </ButtonGroup>
        </DemoBlock>

        <DemoBlock
          title="Split action + dropdown"
          description="Common split-button pattern: primary action plus menu trigger."
          code={`<ButtonGroup aria-label="Follow actions">
  <Button variant="outline" size="sm" label="Follow" />
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" size="icon-sm" aria-label="Open menu">
        <ChevronDown />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-44">
      <DropdownMenuItem>Mute Conversation</DropdownMenuItem>
      <DropdownMenuItem>Mark as Read</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">Delete Conversation</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</ButtonGroup>`}
        >
          <ButtonGroup aria-label="Follow actions" className="w-fit">
            <Button variant="outline" size="sm" label="Follow" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon-sm" aria-label="Open menu">
                  <ChevronDown className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem>Mute Conversation</DropdownMenuItem>
                <DropdownMenuItem>Mark as Read</DropdownMenuItem>
                <DropdownMenuItem>Share Conversation</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">Delete Conversation</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
        </DemoBlock>

        <DemoBlock
          title="Popover trigger pair"
          description="Use a compact trigger pair for assistants and quick actions."
          code={`<ButtonGroup aria-label="Copilot actions">
  <Button variant="outline" size="sm" iconLeft={<Bot />} label="Copilot" />
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline" size="icon-sm" aria-label="More">
        <ChevronDown />
      </Button>
    </PopoverTrigger>
    <PopoverContent align="end">
      <PopoverHeader>
        <PopoverTitle>Start a new task with Copilot</PopoverTitle>
        <PopoverDescription>Describe your task in natural language.</PopoverDescription>
      </PopoverHeader>
    </PopoverContent>
  </Popover>
</ButtonGroup>`}
        >
          <ButtonGroup aria-label="Copilot actions" className="w-fit">
            <Button variant="outline" size="sm" iconLeft={<Bot className="size-4" />} label="Copilot" />
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon-sm" aria-label="More">
                  <ChevronDown className="size-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="rounded-xl text-sm">
                <PopoverHeader>
                  <PopoverTitle>Start a new task with Copilot</PopoverTitle>
                  <PopoverDescription>Describe your task in natural language.</PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          </ButtonGroup>
        </DemoBlock>

        <DemoBlock
          title="Split action + dropdown (static fallback)"
          description="Basic non-menu trigger style, useful when wiring custom menus."
          code={`<ButtonGroup aria-label="Follow actions">
  <Button variant="outline" size="sm" label="Follow" />
  <Button variant="outline" size="icon-sm" aria-label="Open menu">
    <ChevronDown />
  </Button>
</ButtonGroup>`}
        >
          <div className="space-y-2">
            <ButtonGroup aria-label="Follow actions static" className="w-fit">
              <Button variant="outline" size="sm" label="Follow" />
              <Button variant="outline" size="icon-sm" aria-label="Open menu">
                <ChevronDown className="size-4" />
              </Button>
            </ButtonGroup>
            <p className="text-xs text-muted-foreground">Use this variant when menu behavior is supplied elsewhere.</p>
          </div>
        </DemoBlock>

        <DemoBlock
          title="RTL variant"
          description="ButtonGroup respects RTL containers, useful for Arabic/Hebrew action rows."
          code={`<div dir="rtl">
  <ButtonGroup aria-label="RTL actions">
    <Button variant="outline" size="icon-sm" aria-label="Back">
      <ArrowLeft className="rtl:rotate-180" />
    </Button>
    <Button variant="outline" size="sm" label="أرشفة" />
    <Button variant="outline" size="sm" label="تقرير" />
    <Button variant="outline" size="icon-sm" aria-label="More">
      <MoreHorizontal />
    </Button>
  </ButtonGroup>
</div>`}
        >
          <div dir="rtl">
            <ButtonGroup aria-label="RTL actions" className="w-fit">
              <Button variant="outline" size="icon-sm" aria-label="Back">
                <ArrowLeft className="size-4 rtl:rotate-180" />
              </Button>
              <Button variant="outline" size="sm" label="أرشفة" />
              <Button variant="outline" size="sm" label="تقرير" />
              <Button variant="outline" size="icon-sm" aria-label="Search">
                <Search className="size-4" />
              </Button>
              <Button variant="outline" size="icon-sm" aria-label="More">
                <MoreHorizontal className="size-4" />
              </Button>
            </ButtonGroup>
          </div>
        </DemoBlock>

        <DemoBlock
          title="iconLeft + iconRight"
          description="Use both when the label sits between two icons (e.g. chevrons, status glyphs). Do not mix with the single `icon` prop on the same button."
          code={`<ButtonGroup aria-label="Example">
  <Button
    variant="outline"
    size="sm"
    iconLeft={<ChevronDown className="rotate-90" />}
    label="Text"
    iconRight={<ChevronDown className="-rotate-90" />}
  />
  <Button variant="outline" size="sm" label="Text" />
</ButtonGroup>`}
        >
          <ButtonGroup aria-label="Dual icon example" className="max-w-md">
            <Button
              variant="outline"
              size="sm"
              iconLeft={<ChevronDown className="size-4 rotate-90" aria-hidden />}
              label="Text"
              iconRight={<ChevronDown className="size-4 -rotate-90" aria-hidden />}
            />
            <Button variant="outline" size="sm" label="Text" />
            <Button variant="outline" size="sm" label="Text" />
          </ButtonGroup>
        </DemoBlock>

        <DemoBlock
          title="Separator + Text composition"
          description="use separator between action buttons and text segment for contextual labels."
          code={`<ButtonGroup aria-label="Split action">
  <Button variant="outline" size="sm" label="Archive" />
  <ButtonGroupSeparator />
  <Button variant="outline" size="sm" label="Report" />
  <ButtonGroupText>Status</ButtonGroupText>
</ButtonGroup>`}
        >
          <ButtonGroup aria-label="Split action with text" attached={false} className="max-w-md">
            <Button variant="outline" size="sm" label="Archive" />
            <ButtonGroupSeparator />
            <Button variant="outline" size="sm" label="Report" />
            <ButtonGroupText>Status</ButtonGroupText>
          </ButtonGroup>
        </DemoBlock>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Props</h2>
          <div className="overflow-x-auto rounded-lg border border-border text-sm">
            <table className="w-full min-w-lg border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-4 py-2.5 font-medium">Part</th>
                  <th className="px-4 py-2.5 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">ButtonGroup</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    <code className="text-a7-text-gray">attached</code> default true — merged borders;{" "}
                    <code className="text-a7-text-gray">orientation</code> horizontal (default) or vertical;{" "}
                    works with buttons and input-like children; <code className="text-a7-text-gray">aria-label</code> on
                    the group.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">Button</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Segmented rows typically use <code className="text-a7-text-gray">variant=&quot;outline&quot;</code>,{" "}
                    <code className="text-a7-text-gray">size=&quot;sm&quot;</code> or <code className="text-a7-text-gray">icon-sm</code>.{" "}
                    <code className="text-a7-text-gray">iconLeft</code> / <code className="text-a7-text-gray">iconRight</code> for
                    two icons around the label; <code className="text-a7-text-gray">icon</code> +{" "}
                    <code className="text-a7-text-gray">iconAlign</code> for a single icon.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">ButtonGroupSeparator</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Thin divider inside grouped controls. Orientation defaults to vertical (for horizontal groups) and
                    can be set for vertical groups.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">ButtonGroupText</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Non-interactive text segment for labels or context inside a button row.
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
