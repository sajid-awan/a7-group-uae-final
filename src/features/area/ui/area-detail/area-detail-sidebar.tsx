"use client"

import { ChevronRight } from "lucide-react"

import { useScrollSpy } from "@/shared/hooks/use-scroll-spy"
import { getAreaDetailNavItems } from "@/features/area"
import { cn } from "@/shared/lib/cn"

type AreaDetailSidebarProps = {
  sectionIds: readonly string[]
  className?: string
}

export function AreaDetailSidebar({ sectionIds, className }: AreaDetailSidebarProps) {
  const navItems = getAreaDetailNavItems()
  const { activeId, scrollToSection } = useScrollSpy(sectionIds)

  return (
    <nav
      className={cn(
        "flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden",
        className
      )}
      aria-label="Area detail sections"
    >
      {navItems.map((item) => {
        const isActive = activeId === item.sectionId

        return (
          <button
            key={item.slug}
            type="button"
            onClick={() => scrollToSection(item.sectionId)}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "flex shrink-0 items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-medium whitespace-nowrap transition-colors lg:w-full lg:shrink",
              isActive
                ? "bg-a7-black text-white"
                : "bg-a7-panel-surface text-a7-black hover:bg-a7-panel-surface-hover"
            )}
          >
            {item.label}
            <ChevronRight
              className={cn("size-4 shrink-0", isActive ? "text-white/90" : "text-a7-text-gray")}
              aria-hidden
            />
          </button>
        )
      })}
    </nav>
  )
}
