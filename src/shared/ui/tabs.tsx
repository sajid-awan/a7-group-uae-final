"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib/cn"

const tabsListVariants = cva("inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", {
  variants: {
    variant: {
      default: "",
      line: "h-auto w-full justify-start overflow-x-auto rounded-none border-b border-border bg-transparent p-0",
      wizard: "h-auto w-full justify-start overflow-x-auto rounded-none border-0 bg-transparent p-0",
      pill: "h-auto w-full flex-wrap justify-start gap-2 rounded-none bg-transparent p-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

type TabsActiveVariant = "default" | "dark" | "primary" | "custom"
type TabsTriggerSize = "sm" | "md" | "lg"
type TabsTriggerShape = "default" | "rounded" | "pill" | "square"

const tabsTriggerBase =
  "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

const tabsTriggerVariantClasses = {
  default: "text-muted-foreground data-[state=active]:shadow-xs",
  line: "rounded-none border-b-2 border-transparent px-0 text-a7-black data-[state=active]:border-primary data-[state=active]:text-primary",
  wizard:
    "rounded-none border-b-2 border-[#DADDE3] bg-transparent px-0 text-[#4E5666] shadow-none data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-a7-text-gray data-[state=active]:shadow-none",
  pill: "rounded-full border border-border bg-white px-5 py-2 text-sm font-medium text-a7-text-gray shadow-none data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
} as const

const tabsTriggerActiveClasses: Record<TabsActiveVariant, string> = {
  default: "data-[state=active]:bg-white data-[state=active]:text-a7-text-gray",
  dark: "data-[state=active]:bg-black data-[state=active]:text-white",
  primary: "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
  custom: "data-[state=active]:bg-[var(--tabs-active-bg)] data-[state=active]:text-[var(--tabs-active-fg)]",
}

const tabsTriggerSizeClasses: Record<TabsTriggerSize, string> = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
  lg: "px-4 py-2 text-base",
}

const tabsTriggerShapeClasses: Record<TabsTriggerShape, string> = {
  default: "rounded-md",
  rounded: "rounded-xl",
  pill: "rounded-full",
  square: "rounded-sm",
}

type TabsStyleContextValue = {
  activeVariant: TabsActiveVariant
  activeBg?: string
  activeText?: string
}

const TabsStyleContext = React.createContext<TabsStyleContextValue>({
  activeVariant: "default",
})

type TabsListProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants> & {
    activeVariant?: TabsActiveVariant
    activeBg?: string
    activeText?: string
  }

function Tabs({ className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot="tabs" className={cn("flex flex-col gap-3", className)} {...props} />
}

function TabsList({
  className,
  variant,
  activeVariant = "default",
  activeBg,
  activeText,
  style,
  ...props
}: TabsListProps) {
  const contextValue = React.useMemo(
    () => ({ activeVariant, activeBg, activeText }),
    [activeVariant, activeBg, activeText]
  )
  const customStyle =
    activeVariant === "custom" || activeBg || activeText
      ? ({
          ...(style as React.CSSProperties),
          ...(activeBg ? { ["--tabs-active-bg" as string]: activeBg } : {}),
          ...(activeText ? { ["--tabs-active-fg" as string]: activeText } : {}),
        } as React.CSSProperties)
      : style

  return (
    <TabsStyleContext.Provider value={contextValue}>
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(tabsListVariants({ variant }), className)}
        style={customStyle}
        {...props}
      />
    </TabsStyleContext.Provider>
  )
}

type TabsTriggerProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
  VariantProps<typeof tabsListVariants> & {
    activeVariant?: TabsActiveVariant
    size?: TabsTriggerSize
    shape?: TabsTriggerShape
  }

function TabsTrigger({ className, variant, activeVariant, size = "md", shape = "default", ...props }: TabsTriggerProps) {
  const context = React.useContext(TabsStyleContext)
  const mergedActiveVariant = activeVariant ?? context.activeVariant
  const shouldApplyActiveSurface =
    (variant ?? "default") !== "line" && (variant ?? "default") !== "wizard" && (variant ?? "default") !== "pill"

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        tabsTriggerBase,
        tabsTriggerVariantClasses[variant ?? "default"],
        tabsTriggerSizeClasses[size],
        variant === "line" || variant === "wizard"
          ? "rounded-none px-0"
          : variant === "pill"
            ? null
            : tabsTriggerShapeClasses[shape],
        shouldApplyActiveSurface ? tabsTriggerActiveClasses[mergedActiveVariant] : null,
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("mt-1 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}
      {...props}
    />
  )
}

export { Tabs, TabsContent, TabsList, TabsTrigger, tabsListVariants, tabsTriggerVariantClasses }
