import { Search } from "lucide-react"

import { StaticFilterButton } from "@/features/search/ui/static-filter-button"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { cn } from "@/shared/lib/cn"

/** Agents hero only — single pill with embedded search CTA (does not affect property/global search). */
const AGENTS_SEARCH_SHELL_CLASS =
  "flex w-full min-w-0 flex-col gap-3 rounded-2xl border border-border/90 bg-white p-3 text-a7-text-gray shadow-sm sm:min-h-[3.25rem] sm:flex-row sm:flex-nowrap sm:items-center sm:gap-0 sm:overflow-visible sm:rounded-full sm:p-0 sm:py-1.5 sm:pl-4 sm:pr-1.5"

export type AgentsSearchBarProps = {
  className?: string
  shellClassName?: string
  placeholder?: string
}

/** Static agent search bar (display only — no search behavior). */
export function AgentsSearchBar({ className, shellClassName, placeholder = "Enter agent name or location name" }: AgentsSearchBarProps) {
  return (
    <div
      role="search"
      aria-label="Agent search"
      className={cn("relative z-30 w-full min-w-0 overflow-visible text-a7-text-gray", className)}
    >
      <div className={cn(AGENTS_SEARCH_SHELL_CLASS, shellClassName)}>
        <div className="relative flex min-h-11 min-w-0 flex-1 items-center gap-2 border-b border-border/70 pb-3 sm:min-h-0 sm:border-0 sm:border-r sm:border-border/70 sm:pb-0 sm:pr-3">
          <Search className="size-4 shrink-0 text-a7-text-gray" aria-hidden />
          <Input
            type="text"
            placeholder={placeholder}
            aria-label={placeholder}
            inputSize="sm"
            className="h-10 min-w-0 flex-1 border-0 bg-transparent px-0 text-base text-a7-text-gray shadow-none placeholder:text-muted-foreground focus-visible:ring-0 sm:h-9 sm:text-sm md:min-w-[10rem] lg:min-w-[14rem]"
            autoComplete="off"
          />
        </div>

        <div className="flex w-full min-w-0 flex-col gap-2 sm:ml-auto sm:w-auto sm:flex-none sm:flex-row sm:items-center sm:justify-end sm:gap-0.5 sm:px-1 md:gap-1">
          <StaticFilterButton label="Type" />
          <StaticFilterButton label="Language" />
          <StaticFilterButton label="Nationality" />
        </div>

        <Button
          type="button"
          shape="pill"
          size="sm"
          className="h-10 w-full shrink-0 gap-2 border-0 bg-black px-6 text-sm font-semibold text-white shadow-none hover:bg-black/90 hover:shadow-none active:translate-y-0 sm:mx-0 sm:h-9 sm:w-auto sm:min-w-[7.25rem]"
        >
          <Search className="size-4 text-white" aria-hidden />
          Search
        </Button>
      </div>
    </div>
  )
}

AgentsSearchBar.displayName = "AgentsSearchBar"
