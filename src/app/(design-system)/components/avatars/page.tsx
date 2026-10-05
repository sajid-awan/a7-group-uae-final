import { User } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  AvatarWithStatus,
} from "@/shared/ui/avatar"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"
import { getInitials } from "@/shared/lib/get-initials"

const demoImg = (n: number) => `https://i.pravatar.cc/128?img=${n}`

export default function AvatarsDocsPage() {
  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight font-heading">Avatars</h1>
        <p className="mt-2 text-muted-foreground">
          Profile images with initials fallback, sizes, shapes, borders, presence status, and stacked groups. Built on
          plain <code className="rounded bg-muted px-1 py-0.5 text-xs">img</code> (no extra image host config).
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarWithStatus,
  AvatarGroup,
  avatarVariants,
} from "@/shared/ui/avatar"
import { getInitials } from "@/shared/lib/get-initials"`}</CodeBlock>
        </section>

        <DemoBlock
          title="Sizes"
          description="xs · sm · md (default) · lg · xl — control hit target and density in tables, headers, and comments."
          code={`<Avatar size="xs"><AvatarImage src={url} alt="" /><AvatarFallback>AB</AvatarFallback></Avatar>
<Avatar size="sm">…</Avatar>
<Avatar size="md">…</Avatar>
<Avatar size="lg">…</Avatar>
<Avatar size="xl">…</Avatar>`}
        >
          {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
            <Avatar key={size} size={size} variant="ring">
              <AvatarImage src={demoImg(12 + (size === "xs" ? 0 : 1))} alt="" />
              <AvatarFallback>{getInitials("A7 User")}</AvatarFallback>
            </Avatar>
          ))}
        </DemoBlock>

        <DemoBlock
          title="Shapes"
          description="circle (default) · rounded · square — match your product chrome and table density."
          code={`<Avatar shape="circle">…</Avatar>
<Avatar shape="rounded">…</Avatar>
<Avatar shape="square">…</Avatar>`}
        >
          <Avatar shape="circle" variant="outline">
            <AvatarImage src={demoImg(33)} alt="" />
            <AvatarFallback>CI</AvatarFallback>
          </Avatar>
          <Avatar shape="rounded" variant="outline">
            <AvatarImage src={demoImg(45)} alt="" />
            <AvatarFallback>RQ</AvatarFallback>
          </Avatar>
          <Avatar shape="square" variant="outline">
            <AvatarImage src={demoImg(52)} alt="" />
            <AvatarFallback>SQ</AvatarFallback>
          </Avatar>
        </DemoBlock>

        <DemoBlock
          title="Surface variants"
          description="default (muted fill) · ring (overlap-friendly) · outline · subtle."
          code={`<Avatar variant="default">…</Avatar>
<Avatar variant="ring">…</Avatar>
<Avatar variant="outline">…</Avatar>
<Avatar variant="subtle">…</Avatar>`}
        >
          <Avatar variant="default">
            <AvatarImage src={demoImg(15)} alt="" />
            <AvatarFallback>DF</AvatarFallback>
          </Avatar>
          <Avatar variant="ring">
            <AvatarImage src={demoImg(16)} alt="" />
            <AvatarFallback>RG</AvatarFallback>
          </Avatar>
          <Avatar variant="outline">
            <AvatarImage src={demoImg(17)} alt="" />
            <AvatarFallback>OL</AvatarFallback>
          </Avatar>
          <Avatar variant="subtle">
            <AvatarImage src={demoImg(18)} alt="" />
            <AvatarFallback>SB</AvatarFallback>
          </Avatar>
        </DemoBlock>

        <DemoBlock
          title="Image + initials fallback"
          description="Fallback stays underneath until the image loads; on error it shows again."
          code={`<Avatar>
  <AvatarImage src={url} alt="Sana Khan" />
  <AvatarFallback>{getInitials("Sana Khan")}</AvatarFallback>
</Avatar>`}
        >
          <Avatar>
            <AvatarImage src={demoImg(32)} alt="Sana Khan" />
            <AvatarFallback>{getInitials("Sana Khan")}</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://example.invalid/broken.jpg" alt="Broken" />
            <AvatarFallback>{getInitials("Broken URL")}</AvatarFallback>
          </Avatar>
        </DemoBlock>

        <DemoBlock
          title="Icon fallback"
          description="Use suppressImage when there is no photo — only the fallback layer is shown."
          code={`<Avatar suppressImage>
  <AvatarFallback aria-label="Guest">
    <User className="size-1/2 opacity-70" />
  </AvatarFallback>
</Avatar>`}
        >
          <Avatar suppressImage size="md">
            <AvatarFallback aria-label="Guest user">
              <User className="size-[45%] opacity-70" />
            </AvatarFallback>
          </Avatar>
          <Avatar suppressImage size="lg" variant="outline">
            <AvatarFallback aria-label="Account">
              <User className="size-[45%] opacity-70" />
            </AvatarFallback>
          </Avatar>
        </DemoBlock>

        <DemoBlock
          title="Status (presence)"
          description="online · offline · busy · away — dot is exposed to assistive tech via label."
          code={`<AvatarWithStatus status="online" label="Online">
  <AvatarImage src={url} alt="" />
  <AvatarFallback>AK</AvatarFallback>
</AvatarWithStatus>`}
        >
          {(
            [
              ["online", "Online"],
              ["offline", "Offline"],
              ["busy", "Busy"],
              ["away", "Away"],
            ] as const
          ).map(([status, label]) => (
            <AvatarWithStatus key={status} status={status} label={label} variant="ring">
              <AvatarImage src={demoImg(20 + label.length)} alt="" />
              <AvatarFallback>{getInitials(label)}</AvatarFallback>
            </AvatarWithStatus>
          ))}
        </DemoBlock>

        <DemoBlock
          title="Status × size"
          description="Status dot scales with avatar size."
          code={`<AvatarWithStatus size="sm" status="online" label="Online">…</AvatarWithStatus>
<AvatarWithStatus size="xl" status="away" label="Away">…</AvatarWithStatus>`}
        >
          <AvatarWithStatus size="sm" status="online" label="Online" variant="ring">
            <AvatarImage src={demoImg(60)} alt="" />
            <AvatarFallback>SM</AvatarFallback>
          </AvatarWithStatus>
          <AvatarWithStatus size="xl" status="away" label="Away" variant="ring">
            <AvatarImage src={demoImg(61)} alt="" />
            <AvatarFallback>XL</AvatarFallback>
          </AvatarWithStatus>
        </DemoBlock>

        <DemoBlock
          title="Avatar group"
          description="Stacked overlap with ring separation; optional max + overflow count."
          code={`<AvatarGroup max={3}>
  <Avatar variant="ring"><AvatarImage … /><AvatarFallback>A</AvatarFallback></Avatar>
  <Avatar variant="ring">…</Avatar>
  …
</AvatarGroup>`}
        >
          <AvatarGroup max={3}>
            {[68, 69, 70, 71, 72].map((id) => (
              <Avatar key={id} variant="ring" size="md">
                <AvatarImage src={demoImg(id)} alt="" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
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
                  <td className="px-4 py-2.5 font-mono text-xs">Avatar</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    <code className="text-a7-text-gray">size</code> · <code className="text-a7-text-gray">shape</code> ·{" "}
                    <code className="text-a7-text-gray">variant</code> · optional{" "}
                    <code className="text-a7-text-gray">suppressImage</code> for icon-only fallbacks.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">AvatarImage</td>
                  <td className="px-4 py-2.5 text-muted-foreground">Standard img props; omit or leave empty src to show fallback only.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">AvatarWithStatus</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Requires <code className="text-a7-text-gray">label</code> for the status dot;{" "}
                    <code className="text-a7-text-gray">status</code> online | offline | busy | away.
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
