import { Search } from "lucide-react"

import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { cn } from "@/shared/lib/cn"

export type AreasSearchBarProps = {
  className?: string
  shellClassName?: string
  placeholder?: string
}

/** Static area search bar (display only — no search behavior). */
export function AreasSearchBar({ className, shellClassName, placeholder = "Dubai" }: AreasSearchBarProps) {
  return (
    <div role="search" aria-label="Area search" className={cn("w-full min-w-0 text-a7-text-gray", className)}>
      <div
        className={cn(
          "flex min-h-[3.25rem] w-full min-w-0 items-center gap-2 rounded-full border border-border/90 bg-white py-1.5 pl-4 pr-1.5 shadow-sm",
          shellClassName
        )}
      >
        <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden />
        <Input
          placeholder={placeholder}
          aria-label={placeholder}
          inputSize="sm"
          className="h-9 min-w-0 flex-1 border-0 bg-transparent px-0 text-sm text-a7-text-gray shadow-none placeholder:text-muted-foreground focus-visible:ring-0"
          autoComplete="off"
        />
        <Button
          type="button"
          variant="property"
          shape="pill"
          size="sm"
          className="h-9 w-auto min-w-0 shrink-0 gap-2 px-5 text-sm font-semibold shadow-sm"
        >
          <Search className="size-4 text-white" aria-hidden />
          Search
        </Button>
      </div>
    </div>
  )
}

AreasSearchBar.displayName = "AreasSearchBar"

/** Same static bar; kept for the area detail hero. */
export const AreasSearchBarSimple = AreasSearchBar
