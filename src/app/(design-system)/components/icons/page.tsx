"use client"

import type { ComponentType, SVGProps } from "react"
import { Bell, Calendar, Heart, Search, Settings, User } from "lucide-react"
import { Bell as FeatherBell, Calendar as FeatherCalendar, Heart as FeatherHeart, Search as FeatherSearch, Settings as FeatherSettings, User as FeatherUser } from "react-feather"

import { MailCustomIcon, SearchCustomIcon } from "@/shared/ui/custom-icons"
import {
  AngelListBrandIcon,
  AppleBrandIcon,
  ClubhouseBrandIcon,
  DiscordBrandIcon,
  DribbbleBrandIcon,
  FacebookBrandIcon,
  FigmaBrandIcon,
  GitHubBrandIcon,
  GoogleBrandIcon,
  InstagramBrandIcon,
  LayersBrandIcon,
  LinkedInBrandIcon,
  PinterestBrandIcon,
  RedditBrandIcon,
  SignalBrandIcon,
  SnapchatBrandIcon,
  TelegramBrandIcon,
  TikTokBrandIcon,
  TumblrBrandIcon,
  XTwitterBrandIcon,
  YouTubeBrandIcon,
} from "@/shared/ui/brand-icons"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"
import { SvgIcon } from "@/shared/ui/icon"

const lucideIcons = [
  { name: "Search", Icon: Search },
  { name: "User", Icon: User },
  { name: "Bell", Icon: Bell },
  { name: "Heart", Icon: Heart },
  { name: "Settings", Icon: Settings },
  { name: "Calendar", Icon: Calendar },
] as const

const featherIcons = [
  { name: "Search", Icon: FeatherSearch },
  { name: "User", Icon: FeatherUser },
  { name: "Bell", Icon: FeatherBell },
  { name: "Heart", Icon: FeatherHeart },
  { name: "Settings", Icon: FeatherSettings },
  { name: "Calendar", Icon: FeatherCalendar },
] as const

type BrandIconComponent = ComponentType<{
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  className?: string
} & SVGProps<SVGSVGElement>>

const brandIcons: { name: string; Icon: BrandIconComponent }[] = [
  { name: "AngelList", Icon: AngelListBrandIcon },
  { name: "Apple", Icon: AppleBrandIcon },
  { name: "Clubhouse", Icon: ClubhouseBrandIcon },
  { name: "Discord", Icon: DiscordBrandIcon },
  { name: "Dribbble", Icon: DribbbleBrandIcon },
  { name: "Facebook", Icon: FacebookBrandIcon },
  { name: "Figma", Icon: FigmaBrandIcon },
  { name: "GitHub", Icon: GitHubBrandIcon },
  { name: "Google", Icon: GoogleBrandIcon },
  { name: "Instagram", Icon: InstagramBrandIcon },
  { name: "Layers", Icon: LayersBrandIcon },
  { name: "LinkedIn", Icon: LinkedInBrandIcon },
  { name: "Pinterest", Icon: PinterestBrandIcon },
  { name: "Reddit", Icon: RedditBrandIcon },
  { name: "Signal", Icon: SignalBrandIcon },
  { name: "Snapchat", Icon: SnapchatBrandIcon },
  { name: "Telegram", Icon: TelegramBrandIcon },
  { name: "TikTok", Icon: TikTokBrandIcon },
  { name: "Tumblr", Icon: TumblrBrandIcon },
  { name: "X (Twitter)", Icon: XTwitterBrandIcon },
  { name: "YouTube", Icon: YouTubeBrandIcon },
]

function IconGrid({
  items,
}: {
  items: readonly {
    name: string
    Icon: ComponentType<{ size?: number; className?: string }>
  }[]
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map(({ name, Icon }) => (
        <div key={name} className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
          <Icon size={18} className="text-a7-text-gray" />
          <span className="text-sm text-muted-foreground">{name}</span>
        </div>
      ))}
    </div>
  )
}

function BrandIconGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {brandIcons.map(({ name, Icon }) => (
        <div key={name} className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
          <Icon size="md" />
          <span className="text-sm text-muted-foreground">{name}</span>
        </div>
      ))}
    </div>
  )
}

export default function IconsDocsPage() {
  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">Icons</h1>
        <p className="mt-2 text-muted-foreground">
          Icon usage with public SVG assets, <code className="rounded bg-muted px-1 py-0.5 text-xs">lucide-react</code>, and{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">react-feather</code>.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Imports</h2>
          <CodeBlock>{`import { Search, User, Bell } from "lucide-react"
import { Search as FeatherSearch, User as FeatherUser, Bell as FeatherBell } from "react-feather"
import { SearchCustomIcon } from "@/shared/ui/custom-icons"
import { GitHubBrandIcon, XTwitterBrandIcon } from "@/shared/ui/brand-icons"
import { SvgIcon } from "@/shared/ui/icon"`}</CodeBlock>
        </section>

        <DemoBlock
          title="Brand icons"
          description="Brand SVGs from `public/assets` re-exported as React components via `createBrandIcon`. Same import pattern as `SearchCustomIcon` with `size` variants. The site logo is not included here."
          code={`import { GitHubBrandIcon, XTwitterBrandIcon } from "@/shared/ui/brand-icons"

<GitHubBrandIcon size="md" />
<XTwitterBrandIcon size="md" />`}
        >
          <BrandIconGrid />
        </DemoBlock>

        <DemoBlock
          title="Brand icon sizes"
          description="Brand icons share the same size scale as `SearchCustomIcon`: `xs`, `sm`, `md`, `lg`, `xl`."
          code={`<GitHubBrandIcon size="xs" />
<GitHubBrandIcon size="sm" />
<GitHubBrandIcon size="md" />
<GitHubBrandIcon size="lg" />
<GitHubBrandIcon size="xl" />`}
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
              <div key={size} className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
                <GitHubBrandIcon size={size} />
                <span className="text-xs text-muted-foreground">GitHub {size}</span>
              </div>
            ))}
          </div>
        </DemoBlock>

        <DemoBlock
          title="Lucide icons"
          description="Primary icon set for most component examples."
          code={`import { Search, User, Bell } from "lucide-react"

<Search className="size-4" />
<User className="size-4" />
<Bell className="size-4" />`}
        >
          <IconGrid items={lucideIcons} />
        </DemoBlock>

        <DemoBlock
          title="Feather icons"
          description="Alternative icon set with matching API style."
          code={`import { Search as FeatherSearch, User as FeatherUser, Bell as FeatherBell } from "react-feather"

<FeatherSearch size={16} />
<FeatherUser size={16} />
<FeatherBell size={16} />`}
        >
          <IconGrid items={featherIcons} />
        </DemoBlock>

        <DemoBlock
          title="Size and color"
          description="Control icon size and color with props and utility classes."
          code={`<Search className="size-4 text-muted-foreground" />
<Search className="size-5 text-primary" />
<FeatherSearch size={18} className="text-a7-text-gray" />
<FeatherSearch size={22} className="text-primary" />`}
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
              <Search className="size-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Lucide 16</span>
            </div>
            <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
              <Search className="size-5 text-primary" />
              <span className="text-xs text-muted-foreground">Lucide 20</span>
            </div>
            <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
              <FeatherSearch size={18} className="text-a7-text-gray" />
              <span className="text-xs text-muted-foreground">Feather 18</span>
            </div>
            <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
              <FeatherSearch size={22} className="text-primary" />
              <span className="text-xs text-muted-foreground">Feather 22</span>
            </div>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Reusable custom SVG components (recommended)"
          description="Best common pattern: define icons with `createCustomIcon`, then reuse everywhere with `size` and `tone`."
          code={`// components/ui/custom-icons.tsx
import { createCustomIcon } from "@/shared/ui/custom-icons"

export const SearchCustomIcon = createCustomIcon(
  <>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </>
)

<SearchCustomIcon size="sm" tone="muted" />
<SearchCustomIcon size="md" tone="primary" />
<MailCustomIcon size="md" tone="secondary" />`}
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
              <SearchCustomIcon size="sm" tone="muted" />
              <span className="text-xs text-muted-foreground">search sm</span>
            </div>
            <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
              <SearchCustomIcon size="md" tone="primary" />
              <span className="text-xs text-muted-foreground">search md</span>
            </div>
            <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
              <MailCustomIcon size="md" tone="secondary" />
              <span className="text-xs text-muted-foreground">mail md</span>
            </div>
            <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
              <MailCustomIcon size="lg" tone="destructive" />
              <span className="text-xs text-muted-foreground">mail lg</span>
            </div>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Custom SVG variants"
          description="For custom SVG paths, use `SvgIcon` with size and tone variants."
          code={`const searchGlyph = (
  <>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </>
)

<SvgIcon size="xs" tone="muted" glyph={searchGlyph} />
<SvgIcon size="sm" tone="default" glyph={searchGlyph} />
<SvgIcon size="md" tone="primary" glyph={searchGlyph} />
<SvgIcon size="lg" tone="secondary" glyph={searchGlyph} />
<SvgIcon size="xl" tone="destructive" glyph={searchGlyph} />

<SvgIcon
  size="md"
  tone="#16a34a"
  strokeWidth={2.5}
  glyph={<path d="M20 6 9 17l-5-5" />}
/>`}
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
              <SvgIcon
                size="xs"
                tone="muted"
                glyph={
                  <>
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </>
                }
              />
              <span className="text-xs text-muted-foreground">xs muted</span>
            </div>
            <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
              <SvgIcon
                size="sm"
                tone="default"
                glyph={
                  <>
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </>
                }
              />
              <span className="text-xs text-muted-foreground">sm default</span>
            </div>
            <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
              <SvgIcon
                size="md"
                tone="primary"
                glyph={
                  <>
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </>
                }
              />
              <span className="text-xs text-muted-foreground">md primary</span>
            </div>
            <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
              <SvgIcon
                size="lg"
                tone="secondary"
                glyph={
                  <>
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </>
                }
              />
              <span className="text-xs text-muted-foreground">lg secondary</span>
            </div>
            <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
              <SvgIcon
                size="xl"
                tone="destructive"
                glyph={
                  <>
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </>
                }
              />
              <span className="text-xs text-muted-foreground">xl destructive</span>
            </div>
            <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
              <SvgIcon
                size="md"
                tone="success"
                strokeWidth={2.5}
                glyph={
                  <>
                    <path d="M20 6 9 17l-5-5" />
                  </>
                }
              />
              <span className="text-xs text-muted-foreground">md success</span>
            </div>
          </div>
        </DemoBlock>
      </div>
    </div>
  )
}
