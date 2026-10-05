import type { LucideIcon } from "lucide-react"

import { Award, Building2, Handshake, Home } from "lucide-react"
import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"

const ICON_MAP: Record<string, LucideIcon> = {
  Building2,
  Handshake,
  Home,
  Award,
}

export type CommunityStatTileProps = {
  /** Either a lucide icon component name (string) or an icon component. */
  icon?: string | LucideIcon
  value: string
  label: string
  className?: string
  /** Figma homepage facts strip: dark glass tiles on gradient. */
  theme?: "light" | "dark"
}

/** Server-safe when `icon` is a string key from `ICON_MAP`. Passing a Lucide component only works from Server or Client parents, not across RSC → Client boundaries. */
export function CommunityStatTile({ icon, value, label, className, theme = "light" }: CommunityStatTileProps) {
  const Icon: LucideIcon =
    typeof icon === "string" ? ICON_MAP[icon] ?? Building2 : (icon as LucideIcon)
  const dark = theme === "dark"
  return (
    <div
      className={cn(
        "rounded-lg border px-2 py-3 text-center transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        dark
          ? "border-white/10 bg-white/5 hover:border-white/25 hover:shadow-md"
          : "border-transparent bg-card hover:border-primary hover:shadow-md",
        className
      )}
    >
      <div className="mb-1.5 flex justify-center">
        <Icon className={cn("size-3.5", dark ? "text-white" : "text-a7-black")} aria-hidden />
      </div>
      <p className={cn("text-lg font-bold leading-none", dark ? "text-white" : "text-a7-black")}>
        <AedText text={value} />
      </p>
      <p className={cn("mt-0.5 text-sm", dark ? "text-white" : "text-a7-text-gray")}>{label}</p>
    </div>
  )
}

CommunityStatTile.displayName = "CommunityStatTile"
