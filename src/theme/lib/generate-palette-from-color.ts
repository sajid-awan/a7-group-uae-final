import type { ThemeColors } from "@/theme/model/types"

export type GeneratedPalette = Pick<
  ThemeColors,
  | "primary"
  | "primaryHover"
  | "primarySoft"
  | "secondary"
  | "secondaryForeground"
  | "background"
  | "foreground"
  | "muted"
  | "mutedForeground"
  | "card"
  | "cardForeground"
  | "accent"
  | "accentForeground"
  | "ring"
>

export type GeneratePaletteOptions = {
  /** Optional dark companion color (e.g. navy paired with coral). Defaults to a dark shade of the primary hue. */
  secondary?: string
}

function normalizeHex(color: string): string {
  const raw = color.trim().replace(/^#/, "")
  if (raw.length === 3) {
    return raw
      .split("")
      .map((c) => c + c)
      .join("")
      .toUpperCase()
  }
  return raw.slice(0, 6).toUpperCase()
}

function hexToRgb(hex: string) {
  const n = normalizeHex(hex)
  return {
    r: parseInt(n.slice(0, 2), 16),
    g: parseInt(n.slice(2, 4), 16),
    b: parseInt(n.slice(4, 6), 16),
  }
}

function rgbToHex(r: number, g: number, b: number) {
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)))
  return `#${[clamp(r), clamp(g), clamp(b)].map((v) => v.toString(16).padStart(2, "0")).join("")}`.toUpperCase()
}

function rgbToHsl(r: number, g: number, b: number) {
  const rn = r / 255
  const gn = g / 255
  const bn = b / 255
  const max = Math.max(rn, gn, bn)
  const min = Math.min(rn, gn, bn)
  const d = max - min
  let h = 0
  const l = (max + min) / 2
  let s = 0

  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case rn:
        h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6
        break
      case gn:
        h = ((bn - rn) / d + 2) / 6
        break
      default:
        h = ((rn - gn) / d + 4) / 6
        break
    }
  }

  return { h: h * 360, s, l }
}

function hslToRgb(h: number, s: number, l: number) {
  const hue = ((h % 360) + 360) % 360
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1))
  const m = l - c / 2
  let rp = 0
  let gp = 0
  let bp = 0

  if (hue < 60) [rp, gp, bp] = [c, x, 0]
  else if (hue < 120) [rp, gp, bp] = [x, c, 0]
  else if (hue < 180) [rp, gp, bp] = [0, c, x]
  else if (hue < 240) [rp, gp, bp] = [0, x, c]
  else if (hue < 300) [rp, gp, bp] = [x, 0, c]
  else [rp, gp, bp] = [c, 0, x]

  return {
    r: (rp + m) * 255,
    g: (gp + m) * 255,
    b: (bp + m) * 255,
  }
}

function hslToHex(h: number, s: number, l: number) {
  const { r, g, b } = hslToRgb(h, s, l)
  return rgbToHex(r, g, b)
}

function mixHex(base: string, target: string, weight: number) {
  const a = hexToRgb(base)
  const b = hexToRgb(target)
  const w = Math.max(0, Math.min(1, weight))
  return rgbToHex(a.r + (b.r - a.r) * w, a.g + (b.g - a.g) * w, a.b + (b.b - a.b) * w)
}

function deriveDarkFromPrimary(primary: string) {
  const { r, g, b } = hexToRgb(primary)
  const { h, s } = rgbToHsl(r, g, b)
  return hslToHex(h, Math.min(0.75, Math.max(0.35, s * 0.7)), 0.14)
}

/**
 * Builds a full project palette from one brand color.
 * Use in `themes.ts`: `generatePaletteFromColor("#E07A5F")` or pass `{ secondary: "#1A3A4A" }`.
 */
export function generatePaletteFromColor(
  brandColor: string,
  options?: GeneratePaletteOptions
): GeneratedPalette {
  const primary = `#${normalizeHex(brandColor)}`
  const { r, g, b } = hexToRgb(primary)
  const { h, s, l } = rgbToHsl(r, g, b)

  const primaryHover =
    l > 0.35
      ? hslToHex(h, s, Math.max(0.08, l - 0.1))
      : mixHex(primary, "#000000", 0.18)

  const primarySoft = mixHex(primary, "#FFFFFF", 0.9)
  const secondary = options?.secondary ? `#${normalizeHex(options.secondary)}` : deriveDarkFromPrimary(primary)
  const secondaryForeground = mixHex(secondary, "#FFFFFF", 0.92)
  const background = mixHex(primary, "#FFFFFF", 0.94)
  const foreground = secondary
  const muted = mixHex(primarySoft, "#FFFFFF", 0.45)
  const mutedForeground = mixHex(foreground, "#FFFFFF", 0.42)
  const accent = mixHex(primary, "#FFFFFF", 0.62)

  return {
    primary,
    primaryHover,
    primarySoft,
    secondary,
    secondaryForeground,
    background,
    foreground,
    muted,
    mutedForeground,
    card: "#FFFFFF",
    cardForeground: foreground,
    accent,
    accentForeground: foreground,
    ring: primary,
  }
}
