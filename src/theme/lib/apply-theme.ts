import type { CSSProperties } from "react"

import type { ProjectTheme } from "@/theme/model/types"

const THEME_CSS_KEYS = [
  "--theme-id",
  "--primary",
  "--primary-foreground",
  "--secondary",
  "--secondary-foreground",
  "--background",
  "--foreground",
  "--muted",
  "--muted-foreground",
  "--card",
  "--card-foreground",
  "--border",
  "--input",
  "--accent",
  "--accent-foreground",
  "--ring",
  "--destructive",
  "--chart-1",
  "--sidebar-primary",
  "--sidebar-ring",
  "--color-primary",
  "--color-primary-foreground",
  "--color-secondary",
  "--color-secondary-foreground",
  "--color-background",
  "--color-foreground",
  "--color-muted",
  "--color-muted-foreground",
  "--color-card",
  "--color-card-foreground",
  "--color-border",
  "--color-input",
  "--color-accent",
  "--color-accent-foreground",
  "--color-ring",
  "--color-destructive",
  "--color-chart-1",
  "--project-primary",
  "--project-primary-hover",
  "--project-primary-soft",
  "--a7-brand-gold",
  "--a7-brand-gold-hover",
  "--a7-brand-gold-soft",
  "--a7-brand-gold-shadow",
  "--radius-sm",
  "--radius-md",
  "--radius-lg",
] as const

/** Maps theme entity → CSS custom properties (Shadcn + Tailwind + A7 aliases). */
export function themeToCssVariables(theme: ProjectTheme): Record<string, string> {
  const { colors, radii } = theme

  return {
    "--theme-id": theme.id,
    "--primary": colors.primary,
    "--primary-foreground": colors.primaryForeground,
    "--secondary": colors.secondary,
    "--secondary-foreground": colors.secondaryForeground,
    "--background": colors.background,
    "--foreground": colors.foreground,
    "--muted": colors.muted,
    "--muted-foreground": colors.mutedForeground,
    "--card": colors.card,
    "--card-foreground": colors.cardForeground,
    "--border": colors.border,
    "--input": colors.input,
    "--accent": colors.accent,
    "--accent-foreground": colors.accentForeground,
    "--ring": colors.ring,
    "--destructive": colors.destructive,
    "--chart-1": colors.primary,
    "--sidebar-primary": colors.primary,
    "--sidebar-ring": colors.ring,
    "--color-primary": colors.primary,
    "--color-primary-foreground": colors.primaryForeground,
    "--color-secondary": colors.secondary,
    "--color-secondary-foreground": colors.secondaryForeground,
    "--color-background": colors.background,
    "--color-foreground": colors.foreground,
    "--color-muted": colors.muted,
    "--color-muted-foreground": colors.mutedForeground,
    "--color-card": colors.card,
    "--color-card-foreground": colors.cardForeground,
    "--color-border": colors.border,
    "--color-input": colors.input,
    "--color-accent": colors.accent,
    "--color-accent-foreground": colors.accentForeground,
    "--color-ring": colors.ring,
    "--color-destructive": colors.destructive,
    "--color-chart-1": colors.primary,
    "--project-primary": colors.primary,
    "--project-primary-hover": colors.primaryHover,
    "--project-primary-soft": colors.primarySoft,
    "--a7-brand-gold": colors.primary,
    "--a7-brand-gold-hover": colors.primaryHover,
    "--a7-brand-gold-soft": colors.primarySoft,
    "--a7-brand-gold-shadow": colors.primaryHover,
    "--radius-sm": radii?.sm ?? "0.375rem",
    "--radius-md": radii?.md ?? "0.625rem",
    "--radius-lg": radii?.lg ?? "1rem",
  }
}

export function themeToStyle(theme: ProjectTheme): CSSProperties {
  return themeToCssVariables(theme) as CSSProperties
}

export function applyTheme(target: HTMLElement, theme: ProjectTheme) {
  const vars = themeToCssVariables(theme)
  for (const key of THEME_CSS_KEYS) {
    const value = vars[key]
    if (value) target.style.setProperty(key, value)
  }
  target.dataset.theme = theme.id
  target.classList.add("theme-transition")
}

export function clearTheme(target: HTMLElement) {
  for (const key of THEME_CSS_KEYS) {
    target.style.removeProperty(key)
  }
  delete target.dataset.theme
  target.classList.remove("theme-transition")
}
