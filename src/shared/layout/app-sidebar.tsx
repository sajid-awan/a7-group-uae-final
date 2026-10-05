"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Shapes } from "lucide-react"

import { SidebarNavSkeleton } from "@/shared/ui/skeletons"
import type { ComponentNavItem } from "@/shared/content/navigation/component-sidebar-nav"
import { useMounted } from "@/shared/hooks/use-mounted"

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Link
      href={href}
      className={
        active
          ? "block rounded-md px-3 py-1.5 text-sm font-medium transition-colors bg-sidebar-accent text-sidebar-accent-foreground"
          : "block rounded-md px-3 py-1.5 text-sm text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      }
    >
      {children}
    </Link>
  )
}

export function AppSidebar({ items }: { items: readonly ComponentNavItem[] }) {
  const mounted = useMounted()

  return (
    <aside className="sticky top-0 flex h-svh max-h-svh min-h-0 w-56 shrink-0 self-start flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
      <div className="shrink-0 border-b border-sidebar-border px-4 py-4">
        <Link href="/welcome" className="text-sm font-semibold tracking-tight text-sidebar-foreground">
          A7 Pakistan
        </Link>
        <p className="mt-0.5 text-xs text-muted-foreground">Component library</p>
      </div>
      <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-hidden p-3">
        <NavLink href="/welcome">Home</NavLink>
        <NavLink href="/icons">
          <span className="inline-flex items-center gap-2">
            <Shapes className="size-4" />
            Icons
          </span>
        </NavLink>

        <details className="group min-h-0 flex-1 overflow-hidden rounded-md" open>
          <summary
            className="flex cursor-pointer list-none items-center justify-between gap-2 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground [&::-webkit-details-marker]:hidden"
          >
            Components
            <ChevronDown className="size-4 shrink-0 opacity-60 transition-transform group-open:rotate-180" />
          </summary>
          <div className="mt-1 max-h-[min(70vh,calc(100svh-9rem))] overflow-y-auto border-l border-sidebar-border pl-3 ml-3 space-y-0.5 pr-1">
            {mounted ? (
              items.map((item) => (
                <NavLink key={item.slug} href={`/components/${item.slug}`}>
                  {item.label}
                </NavLink>
              ))
            ) : (
              <SidebarNavSkeleton count={items.length} />
            )}
          </div>
        </details>
      </nav>
    </aside>
  )
}
