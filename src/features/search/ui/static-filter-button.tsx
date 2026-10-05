import { ChevronDown } from "lucide-react"

import { cn } from "@/shared/lib/cn"

export const staticFilterButtonClass =
  "inline-flex h-9 w-fit shrink-0 items-center gap-1 border-0 bg-transparent px-2 text-sm font-medium text-a7-text-gray shadow-none max-sm:h-10 max-sm:w-full max-sm:justify-between max-sm:rounded-lg max-sm:px-3"

/** Display-only filter trigger (search filters are static UI). */
export function StaticFilterButton({ label, className }: { label: string; className?: string }) {
  return (
    <div className="max-sm:w-full shrink-0">
      <button type="button" className={cn(staticFilterButtonClass, className)}>
        <span className="truncate">{label}</span>
        <ChevronDown className="size-3.5 shrink-0 opacity-70" aria-hidden />
      </button>
    </div>
  )
}
