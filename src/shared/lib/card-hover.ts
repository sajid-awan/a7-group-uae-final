import { cn } from "@/shared/lib/cn"

/** Smooth deceleration — aligned with homepage motion curves. */
export const CARD_HOVER_EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]"

/** Interactive card wrapper — enables coordinated image zoom + lift. */
export const CARD_HOVER_GROUP = "group"

/** Card shell lift + shadow; parent must include `CARD_HOVER_GROUP`. */
export const CARD_HOVER_SURFACE = cn(
  "transition-[transform,box-shadow] duration-500",
  CARD_HOVER_EASE,
  "group-hover:-translate-y-1 group-hover:shadow-lg"
)

/** Primary hero / gallery image inside an `overflow-hidden` frame. */
export const CARD_HOVER_IMAGE = cn(
  "transition-transform duration-700",
  CARD_HOVER_EASE,
  "group-hover:scale-105"
)

/** Avatars, thumbnails, and small portraits. */
export const CARD_HOVER_AVATAR = cn(
  "transition-transform duration-500",
  CARD_HOVER_EASE,
  "group-hover:scale-[1.04]"
)

/** Background-image slides (e.g. listing carousel) inside overflow-hidden frames. */
export const CARD_HOVER_IMAGE_BG = cn(
  "transition-transform duration-700",
  CARD_HOVER_EASE,
  "group-hover:scale-105"
)

/** Carousel prev — nudge chevron only (apply on button; keeps centering transform on shell). */
export const CAROUSEL_NAV_PREV_HOVER = cn(
  "[&_svg]:transition-transform [&_svg]:duration-300",
  CARD_HOVER_EASE,
  "hover:[&_svg]:-translate-x-0.5 disabled:hover:[&_svg]:translate-x-0"
)

/** Carousel next — nudge chevron only. */
export const CAROUSEL_NAV_NEXT_HOVER = cn(
  "[&_svg]:transition-transform [&_svg]:duration-300",
  CARD_HOVER_EASE,
  "hover:[&_svg]:translate-x-0.5 disabled:hover:[&_svg]:translate-x-0"
)

/** Vertical carousel — nudge chevron on the axis that reads as forward/back. */
export const CAROUSEL_NAV_PREV_HOVER_VERTICAL = cn(
  "[&_svg]:transition-transform [&_svg]:duration-300",
  CARD_HOVER_EASE,
  "hover:[&_svg]:-translate-y-0.5 disabled:hover:[&_svg]:translate-y-0"
)

export const CAROUSEL_NAV_NEXT_HOVER_VERTICAL = cn(
  "[&_svg]:transition-transform [&_svg]:duration-300",
  CARD_HOVER_EASE,
  "hover:[&_svg]:translate-y-0.5 disabled:hover:[&_svg]:translate-y-0"
)

/** Overrides default button `active:translate-y-px` press jump. */
export const CAROUSEL_NAV_ACTIVE_CENTER_Y = "active:!-translate-y-1/2 active:!translate-x-0"

export const CAROUSEL_NAV_ACTIVE_CENTER_X = "active:!-translate-x-1/2 active:!translate-y-0"

export const CAROUSEL_NAV_ACTIVE_RESET = "active:!translate-x-0 active:!translate-y-0"

const carouselNavShellBase = cn(
  "transition-[background-color,color,border-color] duration-300",
  CARD_HOVER_EASE,
  "hover:!bg-primary hover:text-primary-foreground",
  "[&_svg]:relative [&_svg]:z-[1] [&_svg]:transition-colors [&_svg]:duration-300"
)

/** Previous — primary background on hover. */
export const CAROUSEL_NAV_SHELL_PREV = cn(carouselNavShellBase, CAROUSEL_NAV_PREV_HOVER)

/** Next — primary background on hover. */
export const CAROUSEL_NAV_SHELL_NEXT = cn(carouselNavShellBase, CAROUSEL_NAV_NEXT_HOVER)

/** Absolutely centered on the Y axis (`top-1/2 -translate-y-1/2`). */
export const CAROUSEL_NAV_SHELL_PREV_CENTERED = cn(
  CAROUSEL_NAV_SHELL_PREV,
  CAROUSEL_NAV_ACTIVE_CENTER_Y
)

export const CAROUSEL_NAV_SHELL_NEXT_CENTERED = cn(
  CAROUSEL_NAV_SHELL_NEXT,
  CAROUSEL_NAV_ACTIVE_CENTER_Y
)

/** Vertical carousel control (`left-1/2 -translate-x-1/2`). */
export const CAROUSEL_NAV_SHELL_PREV_VERTICAL = cn(
  carouselNavShellBase,
  CAROUSEL_NAV_ACTIVE_CENTER_X,
  CAROUSEL_NAV_PREV_HOVER_VERTICAL
)

export const CAROUSEL_NAV_SHELL_NEXT_VERTICAL = cn(
  carouselNavShellBase,
  CAROUSEL_NAV_ACTIVE_CENTER_X,
  CAROUSEL_NAV_NEXT_HOVER_VERTICAL
)

/** Static-position nav (no absolute centering transform). */
export const CAROUSEL_NAV_SHELL_PREV_STATIC = cn(CAROUSEL_NAV_SHELL_PREV, CAROUSEL_NAV_ACTIVE_RESET)

export const CAROUSEL_NAV_SHELL_NEXT_STATIC = cn(CAROUSEL_NAV_SHELL_NEXT, CAROUSEL_NAV_ACTIVE_RESET)

export const PROPERTY_LISTING_CAROUSEL_NAV = cn(
  "z-10 border-border/80 !bg-white text-a7-text-gray shadow-sm",
  "hover:!bg-white hover:!text-a7-text-gray"
)
