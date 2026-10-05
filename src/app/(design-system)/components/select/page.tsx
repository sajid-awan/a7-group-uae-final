"use client"

import * as React from "react"
import { Home, MapPin, Search, User } from "lucide-react"

import { Avatar, AvatarFallback } from "@/shared/ui/avatar"
import { Field, FieldDescription, FieldError, FieldLabel } from "@/shared/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"

const timezones = [
  "UTC-08:00 Pacific Time",
  "UTC-07:00 Mountain Time",
  "UTC-06:00 Central Time",
  "UTC-05:00 Eastern Time",
  "UTC+00:00 London",
  "UTC+01:00 Berlin",
  "UTC+03:00 Riyadh",
  "UTC+05:00 Karachi",
  "UTC+05:30 India",
  "UTC+08:00 Singapore",
  "UTC+09:00 Tokyo",
  "UTC+10:00 Sydney",
]

const members = [
  "Phoenix Baker",
  "Olivia Rhye",
  "Lana Steiner",
  "Demi Wilkinson",
  "Candice Wu",
  "Natali Craig",
  "Drew Cano",
] as const

export default function SelectDocsPage() {
  const [positionMode, setPositionMode] = React.useState<"item-aligned" | "popper">("item-aligned")
  const [memberA, setMemberA] = React.useState<string>("")
  const [memberB, setMemberB] = React.useState<string>("")
  const [memberC, setMemberC] = React.useState<string>("")
  const [memberD, setMemberD] = React.useState<string>("")
  const [memberE, setMemberE] = React.useState<string>("")

  const renderMemberChip = (value: string) => {
    if (!value) return <span className="text-muted-foreground">Select team member</span>
    return (
      <span className="flex min-w-0 items-center gap-2">
        <span className="truncate">{value}</span>
        <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">@olivia</span>
      </span>
    )
  }

  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight font-heading">Select</h1>
        <p className="mt-2 text-muted-foreground">
          Displays a list of options for users to pick from, triggered by a button.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"`}</CodeBlock>
        </section>

        <DemoBlock
          title="Basic"
          code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
        >
          <Select>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </DemoBlock>

        <DemoBlock
          title="Select with icon (start / end)"
          description="Pass `icon` and `iconPosition` on `SelectTrigger`. Chevron stays on the far right."
          code={`<Select>
  <SelectTrigger icon={<MapPin className="size-4" />} iconPosition="start" radius="lg">
    <SelectValue placeholder="Dubai" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
  </SelectContent>
</Select>`}
        >
          <div className="grid w-full max-w-md gap-3">
            <Select>
              <SelectTrigger id="docs-icon-location-start" radius="lg" icon={<MapPin className="size-4" />} iconPosition="start">
                <SelectValue placeholder="Dubai" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
                <SelectItem value="downtown">Downtown Dubai</SelectItem>
                <SelectItem value="business-bay">Business Bay</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger id="docs-icon-property-end" radius="lg" icon={<Home className="size-4" />} iconPosition="end">
                <SelectValue placeholder="Property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Size + radius variants"
          description="`SelectTrigger` supports the same sizing and corner API as Input: `inputSize` + `radius`."
          code={`<Select>
  <SelectTrigger inputSize="sm" radius="md" className="w-52">
    <SelectValue placeholder="Small / rounded-md" />
  </SelectTrigger>
</Select>

<Select>
  <SelectTrigger inputSize="md" radius="lg" className="w-52">
    <SelectValue placeholder="Default / rounded-lg" />
  </SelectTrigger>
</Select>

<Select>
  <SelectTrigger inputSize="lg" radius="full" className="w-52">
    <SelectValue placeholder="Large / rounded-full" />
  </SelectTrigger>
</Select>`}
        >
          <div className="grid w-full max-w-xl gap-3">
            <Select>
              <SelectTrigger inputSize="sm" radius="md" className="w-full">
                <SelectValue placeholder="Small / rounded-md" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="alpha">Alpha</SelectItem>
                  <SelectItem value="beta">Beta</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger inputSize="md" radius="lg" className="w-full">
                <SelectValue placeholder="Default / rounded-lg" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="alpha">Alpha</SelectItem>
                  <SelectItem value="beta">Beta</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger inputSize="lg" radius="full" className="w-full">
                <SelectValue placeholder="Large / rounded-full" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="alpha">Alpha</SelectItem>
                  <SelectItem value="beta">Beta</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Member option styles"
          description="Matches your screenshots: plain text, user icon, avatar, and status-dot option lists."
          code={`<Select>
  <SelectTrigger className="w-56">
    <SelectValue placeholder="Select team member" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="olivia">
      <span className="flex items-center gap-2"><User className="size-4" />Olivia Rhye</span>
    </SelectItem>
  </SelectContent>
</Select>`}
        >
          <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-3">
            <Select value={memberA} onValueChange={setMemberA}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select team member" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {members.map((m) => (
                    <SelectItem key={`plain-${m}`} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select value={memberB} onValueChange={setMemberB}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select team member" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {members.map((m) => (
                    <SelectItem key={`icon-${m}`} value={m}>
                      <span className="flex items-center gap-2">
                        <User className="size-3.5 text-muted-foreground" />
                        {m}
                      </span>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select value={memberC} onValueChange={setMemberC}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select team member" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {members.map((m) => (
                    <SelectItem key={`avatar-${m}`} value={m}>
                      <span className="flex items-center gap-2">
                        <Avatar size="xs">
                          <AvatarFallback>{m.split(" ").map((w) => w[0]).join("").slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        {m}
                      </span>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select value={memberD} onValueChange={setMemberD}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select team member" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {members.map((m) => (
                    <SelectItem key={`status-${m}`} value={m}>
                      <span className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                        {m}
                      </span>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Trigger variants"
          description="Placeholder and selected-state triggers with icon/avatar/status/search and optional tag."
          code={`<Select value={member}>
  <SelectTrigger className="w-60">
    <span className="flex items-center gap-2">
      <Search className="size-4 text-muted-foreground" />
      <span className="text-muted-foreground">Search</span>
    </span>
  </SelectTrigger>
</Select>`}
        >
          <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3">
            <Select value={memberE} onValueChange={setMemberE}>
              <SelectTrigger className="w-full">
                <span className="flex min-w-0 items-center gap-2">
                  <User className="size-4 text-muted-foreground" />
                  {memberE ? <span className="truncate">{memberE}</span> : <span className="text-muted-foreground">Select team member</span>}
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {members.map((m) => (
                    <SelectItem key={`trigger-icon-${m}`} value={m}>
                      <span className="flex items-center gap-2">
                        <User className="size-3.5 text-muted-foreground" />
                        {m}
                      </span>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select value={memberC} onValueChange={setMemberC}>
              <SelectTrigger className="w-full">
                <span className="flex min-w-0 items-center gap-2">
                  <Avatar size="xs">
                    <AvatarFallback>OR</AvatarFallback>
                  </Avatar>
                  {memberC ? <span className="truncate">{memberC}</span> : <span className="text-muted-foreground">Select team member</span>}
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {members.map((m) => (
                    <SelectItem key={`trigger-avatar-${m}`} value={m}>
                      <span className="flex items-center gap-2">
                        <Avatar size="xs">
                          <AvatarFallback>{m.split(" ").map((w) => w[0]).join("").slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        {m}
                      </span>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select value={memberD} onValueChange={setMemberD}>
              <SelectTrigger className="w-full">
                <span className="flex min-w-0 items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  {memberD ? <span className="truncate">{memberD}</span> : <span className="text-muted-foreground">Select team member</span>}
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {members.map((m) => (
                    <SelectItem key={`trigger-status-${m}`} value={m}>
                      <span className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                        {m}
                      </span>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select value={memberB} onValueChange={setMemberB}>
              <SelectTrigger className="w-full">
                {renderMemberChip(memberB)}
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {members.map((m) => (
                    <SelectItem key={`trigger-chip-${m}`} value={m}>
                      <span className="flex items-center gap-2">
                        <User className="size-3.5 text-muted-foreground" />
                        {m}
                      </span>
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full">
                <span className="flex min-w-0 items-center gap-2">
                  <Search className="size-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Search</span>
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {members.map((m) => (
                    <SelectItem key={`trigger-search-${m}`} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Align Item With Trigger"
          description='`item-aligned` aligns selected item with trigger; `popper` aligns content to trigger edge.'
          code={`<Select>
  <SelectTrigger className="w-52">
    <SelectValue placeholder="Align item" />
  </SelectTrigger>
  <SelectContent position="item-aligned | popper">
    ...
  </SelectContent>
</Select>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setPositionMode((p) => (p === "item-aligned" ? "popper" : "item-aligned"))}
              className="rounded-md border border-input px-3 py-1.5 text-xs font-medium"
            >
              Toggle mode: {positionMode}
            </button>
            <Select>
              <SelectTrigger className="w-52">
                <SelectValue placeholder="Align item" />
              </SelectTrigger>
              <SelectContent position={positionMode}>
                <SelectGroup>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Groups"
          code={`<SelectContent>
  <SelectGroup>
    <SelectLabel>Fruits</SelectLabel>
    <SelectItem value="apple">Apple</SelectItem>
  </SelectGroup>
  <SelectSeparator />
  <SelectGroup>
    <SelectLabel>Vegetables</SelectLabel>
    <SelectItem value="carrot">Carrot</SelectItem>
  </SelectGroup>
</SelectContent>`}
        >
          <Select>
            <SelectTrigger className="w-52">
              <SelectValue placeholder="Grouped options" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Vegetables</SelectLabel>
                <SelectItem value="carrot">Carrot</SelectItem>
                <SelectItem value="broccoli">Broccoli</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </DemoBlock>

        <DemoBlock
          title="Scrollable"
          code={`<Select>
  <SelectTrigger className="w-60">
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    {timezones.map(...)}
  </SelectContent>
</Select>`}
        >
          <Select>
            <SelectTrigger className="w-60">
              <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {timezones.map((tz) => (
                  <SelectItem key={tz} value={tz}>
                    {tz}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </DemoBlock>

        <DemoBlock
          title="Disabled"
          code={`<Select disabled>
  <SelectTrigger className="w-44">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
</Select>`}
        >
          <Select disabled>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </DemoBlock>

        <DemoBlock
          title="Invalid"
          code={`<Field data-invalid>
  <FieldLabel>Fruit</FieldLabel>
  <Select>
    <SelectTrigger aria-invalid>
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
  </Select>
  <FieldError>Please select a fruit.</FieldError>
</Field>`}
        >
          <Field data-invalid className="w-full max-w-xs" orientation="vertical">
            <FieldLabel>Fruit</FieldLabel>
            <Select>
              <SelectTrigger aria-invalid>
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FieldError>Please select a fruit.</FieldError>
          </Field>
        </DemoBlock>

        <DemoBlock
          title="RTL"
          code={`<div dir="rtl">
  <Select>
    <SelectTrigger className="w-44">
      <SelectValue placeholder="اختر فاكهة" />
    </SelectTrigger>
  </Select>
</div>`}
        >
          <div dir="rtl" className="w-fit">
            <Field className="w-52" orientation="vertical">
              <FieldLabel>الفاكهة</FieldLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="اختر فاكهة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">تفاح</SelectItem>
                    <SelectItem value="banana">موز</SelectItem>
                    <SelectItem value="orange">برتقال</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FieldDescription>مثال على الاتجاه من اليمين إلى اليسار.</FieldDescription>
            </Field>
          </div>
        </DemoBlock>
      </div>
    </div>
  )
}
