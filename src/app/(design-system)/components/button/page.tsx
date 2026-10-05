import { ArrowRight, ArrowUpRight, Plus, Search } from "lucide-react"

import {
  ButtonVariantDemo,
  CodeBlock,
  DemoBlock,
} from "@/shared/ui/docs-blocks"
import { Button, ButtonIcon, buttonIconProps } from "@/shared/ui/button"

export default function ButtonDocsPage() {
  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Components
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">Button</h1>
        <p className="mt-2 text-muted-foreground">
          Prefer the declarative API: pass{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">label</code>,
          optional{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">icon</code>,
          and{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            iconAlign
          </code>{" "}
          (
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            &quot;start&quot;
          </code>{" "}
          |{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            &quot;end&quot;
          </code>
          ). For custom layouts (two icons, arbitrary markup), use{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">children</code>{" "}
          instead — do not mix with{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">label</code>/
          <code className="rounded bg-muted px-1 py-0.5 text-xs">icon</code>.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import { Button, ButtonIcon, buttonIconProps } from "@/shared/ui/button"`}</CodeBlock>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Props</h2>
          <div className="overflow-x-auto rounded-lg border border-border text-sm">
            <table className="w-full min-w-lg border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-4 py-2.5 font-medium">Prop</th>
                  <th className="px-4 py-2.5 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">label</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Optional string. When set (or when{" "}
                    <code className="text-a7-text-gray">icon</code> is set), the
                    button renders this declarative layout instead of{" "}
                    <code className="text-a7-text-gray">children</code>.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">icon</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Single React node (e.g.{" "}
                    <code className="text-a7-text-gray">&lt;Plus /&gt;</code>).
                    Wrapped for spacing and{" "}
                    <code className="text-a7-text-gray">data-icon</code>. Use with{" "}
                    <code className="text-a7-text-gray">label</code> or alone with{" "}
                    <code className="text-a7-text-gray">aria-label</code> for
                    icon-only.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">iconAlign</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    <code className="text-a7-text-gray">&quot;start&quot;</code>{" "}
                    (default) or{" "}
                    <code className="text-a7-text-gray">&quot;end&quot;</code> —
                    icon before or after{" "}
                    <code className="text-a7-text-gray">label</code>.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">iconLeft</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Optional. Icon before the label; pair with{" "}
                    <code className="text-a7-text-gray">iconRight</code> for two
                    icons (do not combine with{" "}
                    <code className="text-a7-text-gray">icon</code> on the same
                    button).
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">iconRight</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Optional. Icon after the label.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">variant</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    default · gradient · property · outline · secondary · ghost
                    · destructive · link
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">size</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    xs · sm · default · lg · icon-xs · icon-sm · icon · icon-lg
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">shape</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    default (rounded-lg) · rounded (2xl) · pill (full) · square
                    (md)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <DemoBlock
          title="Declarative: label + icon + align"
          description="One icon slot; iconAlign chooses left or right of the label in LTR."
          code={`<Button
  variant="outline"
  label="Create workspace"
  icon={<Plus />}
  iconAlign="start"
/>

<Button
  variant="outline"
  label="Continue"
  icon={<ArrowRight />}
  iconAlign="end"
/>`}
        >
          <Button
            variant="outline"
            label="Create workspace"
            icon={<Plus />}
            iconAlign="start"
          />
          <Button
            variant="outline"
            label="Continue"
            icon={<ArrowRight />}
            iconAlign="end"
          />
        </DemoBlock>

        <DemoBlock
          title="Shape (corner radius)"
          description="Default is moderately rounded (rounded-lg).  rounded for softer cards, square for compact UI."
          code={`<Button variant="default" label="Default (lg)" />

<Button shape="rounded" variant="default" label="Rounded (2xl)" />

<Button shape="pill" variant="default" label="Pill (full)" />

<Button shape="square" variant="secondary" label="Square (md)" />`}
        >
          <Button variant="default" label="Default (lg)" />
          <Button shape="rounded" variant="default" label="Rounded (2xl)" />
          <Button shape="pill" variant="default" label="Pill (full)" />
          <Button shape="square" variant="secondary" label="Square (md)" />
        </DemoBlock>

        <DemoBlock
          title="Property CTA style"
          description="Reusable variant with 38px height and full rounding."
          code={`<Button variant="property" shape="pill" className="h-[38px] min-h-[38px] rounded-full" iconRight={<ArrowUpRight />}>
                  <span className="font-normal text-primary">From</span>
                  <span className="ml-2 font-semibold text-white">AED 1.8M</span>
                </Button>`}
        >
          <div className="w-full max-w-4xl">
            <Button
              variant="property"
              shape="pill"
              className="h-[38px] min-h-[38px] rounded-full"
              iconRight={<ArrowUpRight />}
            >
              <span className="font-normal text-primary">From</span>
              <span className="ml-2 font-semibold text-white">AED 1.8M</span>
            </Button>
          </div>
        </DemoBlock>

        <div className="space-y-8">
          <h2 className="text-lg font-medium">Variants</h2>

          <ButtonVariantDemo
            variant="default"
            title="Default (primary)"
            description="Gold background, white label — main call to action."
            label="Submit application"
            icon={<Plus />}
            iconAlign="start"
            code={`<Button
            variant="default"
            label="Submit application"
            icon={<Plus />}
            iconAlign="start"
          />`}
          />

          <ButtonVariantDemo
            variant="gradient"
            title="Gradient"
            description="Horizontal linear wash (#A68B4F → #E4C57E) with white label."
            label="Get started"
            icon={<ArrowRight />}
            iconAlign="end"
            code={`<Button
            variant="gradient"
            label="Get started"
            icon={<ArrowRight />}
            iconAlign="end"
          />`}
          />

          <ButtonVariantDemo
            variant="outline"
            title="Outline"
            description="Gold border on a surface-colored fill."
            label="Cancel"
            code={`<Button variant="outline" label="Cancel" />`}
          />

          <ButtonVariantDemo
            variant="secondary"
            title="Secondary"
            description="Navy fill with light text — supporting actions."
            label="View details"
            icon={<ArrowRight />}
            iconAlign="end"
            code={`<Button
            variant="secondary"
            label="View details"
            icon={<ArrowRight />}
            iconAlign="end"
          />`}
          />

          <ButtonVariantDemo
            variant="ghost"
            title="Ghost"
            description="Transparent until hover."
            label="More options"
            code={`<Button variant="ghost" label="More options" />`}
          />

          <ButtonVariantDemo
            variant="destructive"
            title="Destructive"
            description="Dangerous or irreversible actions."
            label="Delete project"
            code={`<Button variant="destructive" label="Delete project" />`}
          />

          <ButtonVariantDemo
            variant="link"
            title="Link"
            description="Text link appearance with button behavior."
            label="Read documentation"
            code={`<Button variant="link" label="Read documentation" />`}
          />
        </div>

        <DemoBlock
          title="Custom SVG as icon"
          description='Use iconAlign="start" (default) or iconAlign="end" to place the icon before or after the label.'
          code={`const searchIcon = (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          )

        <Button variant="secondary" label="Search" icon={searchIcon} iconAlign="start" />

        <Button variant="secondary" label="Search" icon={searchIcon} iconAlign="end" />`}
        >
          <Button
            variant="secondary"
            label="Search"
            iconAlign="start"
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="size-4"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            }
          />
          <Button
            variant="secondary"
            label="Search"
            iconAlign="end"
            icon={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="size-4"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            }
          />
        </DemoBlock>

        <DemoBlock
          title="Icon-only (declarative)"
          description="icon without label — set aria-label. Use an icon size for a square hit target."
          code={`<Button size="icon" variant="default" aria-label="Add item" icon={<Plus />} />

<Button size="icon" variant="gradient" aria-label="Add" icon={<Plus />} />

<Button size="icon-sm" variant="gradient" aria-label="Continue" icon={<ArrowRight />} />

<Button size="icon-sm" variant="ghost" aria-label="Continue" icon={<ArrowRight />} />`}
        >
          <Button
            size="icon"
            variant="default"
            aria-label="Add item"
            icon={<Plus />}
          />
          <Button
            size="icon"
            variant="secondary"
            aria-label="Search"
            icon={<Search />}
          />
          <Button
            size="icon"
            variant="gradient"
            aria-label="Add"
            icon={<Plus />}
          />
          <Button
            size="icon-sm"
            variant="gradient"
            aria-label="Continue"
            icon={<ArrowRight />}
          />
          <Button
            size="icon-sm"
            variant="ghost"
            aria-label="Continue"
            icon={<ArrowRight />}
          />
        </DemoBlock>

        <DemoBlock
          title="Shape with icons"
          description="Same shape prop on label+icon and icon-only buttons. Gradient uses the same shapes."
          code={`<Button shape="default" variant="default" label="Default" icon={<Plus />} />

<Button shape="rounded" variant="outline" label="Rounded" icon={<Plus />} />

<Button shape="pill" variant="default" label="Pill" icon={<Plus />} />

<Button shape="square" variant="outline" label="Square" icon={<Plus />} />

<Button shape="pill" size="icon-lg" variant="default" aria-label="Add" icon={<Plus />} />

<Button shape="default" variant="gradient" label="Default" icon={<Plus />} />

<Button shape="rounded" variant="gradient" label="Rounded" icon={<Plus />} />

<Button shape="pill" variant="gradient" label="Pill" icon={<Plus />} />

<Button shape="square" variant="gradient" label="Square" icon={<Plus />} />

<Button shape="pill" size="icon-lg" variant="gradient" aria-label="Add" icon={<Plus />} />`}
        >
          <Button
            shape="default"
            variant="default"
            label="Default"
            icon={<Plus />}
          />
          <Button
            shape="rounded"
            variant="outline"
            label="Rounded"
            icon={<Plus />}
          />
          <Button shape="pill" variant="default" label="Pill" icon={<Plus />} />
          <Button
            shape="square"
            variant="outline"
            label="Square"
            icon={<Plus />}
          />
          <Button
            shape="pill"
            size="icon-lg"
            variant="default"
            aria-label="Add"
            icon={<Plus />}
          />
          <Button
            shape="default"
            variant="gradient"
            label="Default"
            icon={<Plus />}
          />
          <Button
            shape="rounded"
            variant="gradient"
            label="Rounded"
            icon={<Plus />}
          />
          <Button shape="pill" variant="gradient" label="Pill" icon={<Plus />} />
          <Button
            shape="square"
            variant="gradient"
            label="Square"
            icon={<Plus />}
          />
          <Button
            shape="pill"
            size="icon-lg"
            variant="gradient"
            aria-label="Add"
            icon={<Plus />}
          />
        </DemoBlock>

        <DemoBlock
          title="Text sizes"
          description="Use label for each size, or children with plain text."
          code={`<Button size="xs" label="Extra small" />
<Button size="sm" label="Small" />
<Button size="default" label="Default" />
<Button size="lg" label="Large" />`}
        >
          <Button size="xs" label="Extra small" />
          <Button size="sm" label="Small" />
          <Button size="default" label="Default" />
          <Button size="lg" label="Large" />
        </DemoBlock>

        <DemoBlock
          title="Advanced: children composition"
          description="For two icons or custom markup, use children with ButtonIcon or buttonIconProps — not label/icon."
          code={`<Button variant="outline">
  <Plus {...buttonIconProps("start")} />
  Save draft
  <ArrowRight {...buttonIconProps("end")} />
</Button>

<Button variant="secondary">
  <ButtonIcon side="start">
    <img src="/icon.svg" alt="" width={16} height={16} />
  </ButtonIcon>
  Upload
</Button>`}
        >
          <Button variant="outline">
            <Plus {...buttonIconProps("start")} />
            Save draft
            <ArrowRight {...buttonIconProps("end")} />
          </Button>
          <Button variant="secondary">
            <ButtonIcon side="start">
              <span className="size-4 rounded bg-primary/30" aria-hidden />
            </ButtonIcon>
            Upload
          </Button>
        </DemoBlock>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Composable styles (Link)</h2>
          <p className="text-sm text-muted-foreground">
            Same look on Next.js{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">Link</code>{" "}
            without nesting a button.
          </p>
          <CodeBlock>{`import Link from "next/link"
import { buttonVariants } from "@/shared/ui/button"

<Link href="/dashboard" className={buttonVariants({ variant: "outline", size: "sm" })}>
  Dashboard
</Link>`}</CodeBlock>
        </section>
      </div>
    </div>
  )
}
