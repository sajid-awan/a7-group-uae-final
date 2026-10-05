import { ChevronDown, Search } from "lucide-react"

import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/cn"
import type { HeroPropertySearchProps } from "@/shared/types/home"

/** Static hero search bar (display only — no search behavior). */
export function HeroPropertySearch({
  placeholder = "Search for properties",
  typeLabel = "All types",
  className,
}: HeroPropertySearchProps) {
  return (
    <div className={cn("relative z-10 w-full mx-auto max-w-[min(100%,660px)]", className)}>
      <div
        className={cn(
          "rounded-2xl bg-linear-to-r from-white/5 to-[#999999]/5 p-px",
          "sm:rounded-full"
        )}
      >
        <div
          className={cn(
            "flex w-full min-w-0 flex-col gap-3 rounded-2xl bg-white/16 px-3 py-3 backdrop-blur-[20px]",
            "sm:h-18 sm:flex-row sm:items-stretch sm:gap-0 sm:rounded-full sm:p-1.5"
          )}
        >
          <label className="flex min-h-11 min-w-0 flex-1 basis-0 items-center gap-2.5 border-b border-white/15 pb-3 text-white sm:border-0 sm:pl-4 sm:pb-0">
            <Search className="size-5 shrink-0 text-white/90" aria-hidden />
            <input
              type="text"
              placeholder={placeholder}
              aria-label={placeholder}
              className="min-w-0 flex-1 bg-transparent text-base text-white placeholder:text-white/60 focus:outline-none sm:text-sm md:text-[15px]"
              autoComplete="off"
            />
          </label>

          <div className="grid w-full min-w-0 grid-cols-1 gap-2 sm:contents">
            <div className="min-w-[128px] sm:flex sm:items-center">
              <button
                type="button"
                className="flex h-11 w-full min-w-0 items-center justify-between gap-2 rounded-md border border-white/20 bg-white/5 px-3 text-base font-medium text-white sm:h-10 sm:border-none sm:bg-transparent sm:text-sm md:text-[15px]"
              >
                <span className="truncate">{typeLabel}</span>
                <ChevronDown className="size-4 shrink-0 text-white/80" aria-hidden />
              </button>
            </div>

            <Button
              type="button"
              shape="pill"
              size="sm"
              label="Search"
              icon={<Search aria-hidden />}
              className={cn(
                "!h-full w-full !min-w-[175px] gap-2 border-transparent bg-a7-brand-gold font-semibold text-white !shadow-none",
                "hover:bg-a7-brand-gold-hover hover:shadow-md sm:h-10 sm:w-auto sm:min-w-0"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
