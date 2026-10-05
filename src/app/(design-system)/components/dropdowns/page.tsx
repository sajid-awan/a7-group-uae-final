"use client"

import * as React from "react"
import {
  BadgeCheck,
  Bell,
  ChevronDown,
  Circle,
  CreditCard,
  LogOut,
  MoreHorizontal,
  Settings,
  Share,
  Trash,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"
import { Checkbox } from "@/shared/ui/checkbox"
import { RadioField, RadioGroup } from "@/shared/ui/radio-group"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"

export default function DropdownsDocsPage() {
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivityBar, setShowActivityBar] = React.useState(false)
  const [position, setPosition] = React.useState("bottom")

  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight font-heading">Dropdown menu</h1>
        <p className="mt-2 text-muted-foreground">
          Displays a menu of actions from a trigger. Built with Radix primitives.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import { Button } from "@/shared/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"`}</CodeBlock>
        </section>

        <DemoBlock
          title="Basic"
          code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-40" align="start">
    <DropdownMenuGroup>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" label="Open" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="start">
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </DemoBlock>

        <DemoBlock
          title="Submenu"
          code={`<DropdownMenuSub>
  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
  <DropdownMenuPortal>
    <DropdownMenuSubContent>
      <DropdownMenuItem>Email</DropdownMenuItem>
      <DropdownMenuItem>Message</DropdownMenuItem>
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</DropdownMenuSub>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" label="Open submenu" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44" align="start">
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Email</DropdownMenuItem>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>New Team</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DemoBlock>

        <DemoBlock
          title="Radio"
          code={`<RadioGroup value={position} onValueChange={setPosition} size="sm" variant="primary">
  <RadioField value="top" label="Top" />
  <RadioField value="right" label="Right" />
  <RadioField value="bottom" label="Bottom" />
  <RadioField value="left" label="Left" />
</RadioGroup>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" label={`Position: ${position}`} iconRight={<ChevronDown className="size-4" />} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44">
              <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="p-2">
                <RadioGroup value={position} onValueChange={setPosition} size="sm" variant="primary" className="gap-2">
                  <RadioField value="top" label="Top" />
                  <RadioField value="right" label="Right" />
                  <RadioField value="bottom" label="Bottom" />
                  <RadioField value="left" label="Left" />
                </RadioGroup>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </DemoBlock>

        <DemoBlock
          title="Checkbox"
          code={`<Checkbox
  checked={showStatusBar}
  onCheckedChange={(v) => setShowStatusBar(v === true)}
  label="Status Bar"
  size="sm"
  variant="primary"
/>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" label="Toggle panels" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="grid gap-2 p-2">
                <Checkbox
                  checked={showStatusBar}
                  onCheckedChange={(v) => setShowStatusBar(v === true)}
                  label="Status Bar"
                  size="sm"
                  variant="primary"
                />
                <Checkbox
                  checked={showActivityBar}
                  onCheckedChange={(v) => setShowActivityBar(v === true)}
                  label="Activity Bar"
                  size="sm"
                  variant="primary"
                />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </DemoBlock>

        <DemoBlock
          title="Icons"
          code={`<DropdownMenuItem>
  <User className="size-4" />
  Profile
</DropdownMenuItem>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" label="Actions" iconRight={<ChevronDown className="size-4" />} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44" align="start">
              <DropdownMenuItem>
                <User className="size-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="size-4" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="size-4" />
                Settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DemoBlock>

        <DemoBlock
          title="Position examples"
          code={`<DropdownMenuContent side="top|right|bottom|left" align="start|center|end" />`}
        >
          <div className="grid grid-cols-2 gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" label="Top-start" />
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" align="start" className="w-36">
                <DropdownMenuItem>Top Start</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" label="Right-end" />
              </DropdownMenuTrigger>
              <DropdownMenuContent side="right" align="end" className="w-36">
                <DropdownMenuItem>Right End</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" label="Bottom-center" />
              </DropdownMenuTrigger>
              <DropdownMenuContent side="bottom" align="center" className="w-36">
                <DropdownMenuItem>Bottom Center</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" label="Left-start" />
              </DropdownMenuTrigger>
              <DropdownMenuContent side="left" align="start" className="w-36">
                <DropdownMenuItem>Left Start</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Destructive"
          code={`<DropdownMenuItem variant="destructive">
  <Trash className="size-4" />
  Delete Project
</DropdownMenuItem>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" label="Actions" iconRight={<MoreHorizontal className="size-4" />} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44" align="start">
              <DropdownMenuItem>
                <Share className="size-4" />
                Share
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <Trash className="size-4" />
                Delete Project
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DemoBlock>

        <DemoBlock
          title="Avatar"
          code={`<DropdownMenuTrigger asChild>
  <button className="rounded-full">
    <Avatar size="sm"><AvatarFallback>LR</AvatarFallback></Avatar>
  </button>
</DropdownMenuTrigger>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Open account menu"
                className="rounded-full border border-border p-0.5 transition-colors hover:bg-muted"
              >
                <Avatar size="sm" variant="outline">
                  <AvatarImage src="" alt="User" />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">malik</p>
                  <p className="text-muted-foreground text-xs leading-none">malik@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <BadgeCheck className="size-4" />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell className="size-4" />
                Notifications
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="size-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DemoBlock>

        <DemoBlock
          title="Complex"
          code={`<DropdownMenuItem>
  Profile
  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
</DropdownMenuItem>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" label="Open complex menu" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem>
                  <User className="size-4" />
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="size-4" />
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="size-4" />
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Users className="size-4" />
                  Team
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <UserPlus className="size-4" />
                    Invite users
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  <Circle className="size-4" />
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <Trash className="size-4" />
                Delete Workspace
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DemoBlock>
      </div>
    </div>
  )
}
