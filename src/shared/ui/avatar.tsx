/* eslint-disable @next/next/no-img-element */
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib/cn"

const avatarVariants = cva(
  "relative inline-flex shrink-0 select-none overflow-hidden bg-muted align-middle text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      size: {
        xs: "size-6 text-[10px] leading-none",
        sm: "size-8 text-xs leading-none",
        md: "size-10 text-sm leading-none",
        lg: "size-12 text-base leading-none",
        xl: "size-16 text-lg leading-none",
      },
      shape: {
        circle: "rounded-full",
        rounded: "rounded-lg",
        square: "rounded-md",
      },
      variant: {
        default: "border border-transparent",
        ring: "ring-2 ring-background ring-offset-0",
        outline: "border-2 border-border bg-white text-a7-text-gray",
        subtle: "border-0 bg-accent/60 text-accent-foreground",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "circle",
      variant: "default",
    },
  }
)

type AvatarSize = NonNullable<NonNullable<VariantProps<typeof avatarVariants>["size"]>>

type AvatarContextValue = {
  size: AvatarSize
  suppressImage: boolean
  imageLoaded: boolean
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>
  imageError: boolean
  setImageError: React.Dispatch<React.SetStateAction<boolean>>
}

const AvatarContext = React.createContext<AvatarContextValue | null>(null)

function useAvatarContext(component: string) {
  const ctx = React.useContext(AvatarContext)
  if (!ctx) throw new Error(`${component} must be used within <Avatar>`)
  return ctx
}

export type AvatarProps = React.ComponentProps<"span"> &
  VariantProps<typeof avatarVariants> & {
    /** When true, image is not shown and fallback stays visible (e.g. icon-only placeholder). */
    suppressImage?: boolean
  }

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  { className, size = "md", shape = "circle", variant = "default", suppressImage = false, children, ...props },
  ref
) {
  const [imageLoaded, setImageLoaded] = React.useState(false)
  const [imageError, setImageError] = React.useState(false)
  const resolvedSize = (size ?? "md") as AvatarSize

  const value = React.useMemo<AvatarContextValue>(
    () => ({
      size: resolvedSize,
      suppressImage,
      imageLoaded,
      setImageLoaded,
      imageError,
      setImageError,
    }),
    [resolvedSize, suppressImage, imageLoaded, imageError]
  )

  return (
    <AvatarContext.Provider value={value}>
      <span
        ref={ref}
        data-slot="avatar"
        data-size={resolvedSize}
        data-shape={shape}
        data-variant={variant}
        className={cn(avatarVariants({ size: resolvedSize, shape, variant }), className)}
        {...props}
      >
        {children}
      </span>
    </AvatarContext.Provider>
  )
})
Avatar.displayName = "Avatar"

export type AvatarImageProps = React.ComponentPropsWithoutRef<"img">

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(function AvatarImage(
  { className, alt = "", onLoad, onError, src, ...props },
  ref
) {
  const { setImageLoaded, setImageError, imageError } = useAvatarContext("AvatarImage")

  React.useEffect(() => {
    setImageLoaded(false)
    setImageError(false)
  }, [src, setImageLoaded, setImageError])

  if (src == null || src === "") return null

  const hidden = imageError

  return (
    <img
      ref={ref}
      alt={alt}
      src={src}
      data-slot="avatar-image"
      className={cn("absolute inset-0 z-10 size-full object-cover", hidden && "hidden", className)}
      onLoad={(e) => {
        setImageLoaded(true)
        setImageError(false)
        onLoad?.(e)
      }}
      onError={(e) => {
        setImageError(true)
        setImageLoaded(false)
        onError?.(e)
      }}
      {...props}
    />
  )
})
AvatarImage.displayName = "AvatarImage"

export type AvatarFallbackProps = React.ComponentPropsWithoutRef<"span">

const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(function AvatarFallback(
  { className, children, ...props },
  ref
) {
  const ctx = useAvatarContext("AvatarFallback")
  const covered = !ctx.suppressImage && ctx.imageLoaded && !ctx.imageError

  return (
    <span
      ref={ref}
      data-slot="avatar-fallback"
      aria-hidden={covered ? true : undefined}
      className={cn(
        "absolute inset-0 z-0 flex size-full items-center justify-center font-medium uppercase tracking-tight",
        covered && "invisible",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
})
AvatarFallback.displayName = "AvatarFallback"

const statusVariants = cva(
  "pointer-events-none absolute z-20 box-border size-2.5 shrink-0 rounded-full ring-2 ring-background",
  {
    variants: {
      status: {
        online: "bg-emerald-500",
        offline: "bg-muted-foreground/50",
        busy: "bg-destructive",
        away: "bg-amber-500",
      },
      size: {
        xs: "bottom-0 right-0 size-2 ring-[1.5px]",
        sm: "bottom-0 right-0 size-2 ring-[1.5px]",
        md: "bottom-0.5 right-0.5",
        lg: "bottom-0.5 right-0.5 size-3",
        xl: "bottom-1 right-1 size-3.5 ring-[3px]",
      },
    },
    defaultVariants: {
      status: "online",
      size: "md",
    },
  }
)

export type AvatarStatusProps = React.ComponentProps<"span"> &
  VariantProps<typeof statusVariants> & {
    /** Visually hidden label for the status dot. */
    label: string
  }

function AvatarStatus({ className, status = "online", size = "md", label, ...props }: AvatarStatusProps) {
  return (
    <span
      role="status"
      aria-label={label}
      data-slot="avatar-status"
      className={cn(statusVariants({ status, size }), className)}
      {...props}
    />
  )
}
AvatarStatus.displayName = "AvatarStatus"

export type AvatarWithStatusProps = Omit<AvatarProps, "children"> & {
  children: React.ReactNode
  status?: NonNullable<VariantProps<typeof statusVariants>["status"]>
  /** Visually hidden status description for the dot (e.g. "Online"). */
  label: string
}

/**
 * Wraps {@link Avatar} with a positioned {@link AvatarStatus} dot. `label` is required for accessibility.
 */
function AvatarWithStatus({ status = "online", label, children, className, size = "md", ...avatarProps }: AvatarWithStatusProps) {
  return (
    <span className={cn("relative inline-flex shrink-0", className)}>
      <Avatar size={size} {...avatarProps}>
        {children}
      </Avatar>
      <AvatarStatus status={status} size={size} label={label} />
    </span>
  )
}
AvatarWithStatus.displayName = "AvatarWithStatus"

export type AvatarGroupProps = React.ComponentProps<"div"> & {
  /** Max number of avatars before +N overflow chip (default: no limit). */
  max?: number
}

function AvatarGroup({ className, children, max, ...props }: AvatarGroupProps) {
  const childArray = React.Children.toArray(children).filter(React.isValidElement)
  const visible = max != null ? childArray.slice(0, max) : childArray
  const overflow = max != null ? Math.max(0, childArray.length - max) : 0

  return (
    <div data-slot="avatar-group" className={cn("flex items-center", className)} {...props}>
      <div className="flex -space-x-2 *:relative *:ring-2 *:ring-background">{visible}</div>
      {overflow > 0 ? (
        <span
          className="relative z-10 -ml-2 inline-flex size-10 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium text-muted-foreground ring-2 ring-background"
          aria-label={`${overflow} more`}
        >
          +{overflow}
        </span>
      ) : null}
    </div>
  )
}
AvatarGroup.displayName = "AvatarGroup"

export { Avatar, AvatarFallback, AvatarGroup, AvatarImage, AvatarStatus, AvatarWithStatus, avatarVariants }
