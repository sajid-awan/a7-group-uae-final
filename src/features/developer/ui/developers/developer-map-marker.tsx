"use client"

import { Building08Icon } from "@/shared/icons"
import { cn } from "@/shared/lib/cn"

type DeveloperMapMarkerProps = {
  active?: boolean
  className?: string
  "aria-label"?: string
  "aria-pressed"?: boolean
  onClick?: () => void
}

export function DeveloperMapMarker({
  active = false,
  className,
  "aria-label": ariaLabel,
  "aria-pressed": ariaPressed,
  onClick,
}: DeveloperMapMarkerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      className={cn(
        "group/marker flex cursor-pointer flex-col items-center border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      <span
        className={cn(
          "flex size-10 items-center justify-center rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.28)] transition-colors duration-150",
          active ? "bg-[#F3E3A8] text-a7-black" : "bg-a7-black text-white"
        )}
      >
        <Building08Icon className="size-[1.35rem]" strokeWidth={1.75} aria-hidden />
      </span>
      <span
        className={cn(
          "mt-px block size-0 border-x-[7px] border-x-transparent border-t-[9px] transition-colors duration-150",
          active ? "border-t-[#F3E3A8]" : "border-t-a7-black"
        )}
        aria-hidden
      />
    </button>
  )
}
