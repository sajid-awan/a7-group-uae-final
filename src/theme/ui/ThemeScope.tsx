import type { ReactNode } from "react"

import { themeToStyle } from "@/theme/lib/apply-theme"
import { cn } from "@/shared/lib/cn"
import type { ProjectTheme } from "@/theme/model/types"

type ThemeScopeProps = {
  theme: ProjectTheme
  children: ReactNode
  className?: string
}

/**
 * Server-rendered theme shell — inline CSS variables prevent flash before client hydration.
 * Pairs with `ThemeSync` using the same `theme` object from the layout.
 */
export function ThemeScope({ theme, children, className }: ThemeScopeProps) {
  return (
    <div
      data-theme={theme.id}
      className={cn("theme-scope min-h-full bg-white text-a7-text-gray", className)}
      style={themeToStyle(theme)}
    >
      {children}
    </div>
  )
}
