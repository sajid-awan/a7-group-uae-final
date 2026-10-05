"use client"

import * as React from "react"
import { X } from "lucide-react"

import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/shared/ui/drawer"

type SideDrawerProps = React.ComponentProps<typeof Drawer>

function SideDrawer({
  direction = "right",
  dismissible = true,
  ...props
}: SideDrawerProps) {
  return <Drawer direction={direction} dismissible={dismissible} {...props} />
}

type SideDrawerContentProps = React.ComponentProps<typeof DrawerContent> & {
  size?: "sm" | "md" | "lg" | "permissions" | "xl"
}

const sideDrawerSizeClassName: Record<NonNullable<SideDrawerContentProps["size"]>, string> = {
  sm: "data-[vaul-drawer-direction=right]:sm:!max-w-[24rem] data-[vaul-drawer-direction=left]:sm:!max-w-[24rem]",
  md: "data-[vaul-drawer-direction=right]:sm:!max-w-[28rem] data-[vaul-drawer-direction=left]:sm:!max-w-[28rem]",
  lg: "data-[vaul-drawer-direction=right]:sm:!max-w-[36rem] data-[vaul-drawer-direction=left]:sm:!max-w-[36rem]",
  permissions: "data-[vaul-drawer-direction=right]:sm:!max-w-[750px] data-[vaul-drawer-direction=left]:sm:!max-w-[750px]",
  xl: "data-[vaul-drawer-direction=right]:sm:!max-w-[1160px] data-[vaul-drawer-direction=left]:sm:!max-w-[1160px]",
}

function SideDrawerContent({
  className,
  size = "md",
  ...props
}: SideDrawerContentProps) {
  return (
    <DrawerContent
      className={cn(
        "flex h-full max-h-dvh flex-col bg-white p-0",
        sideDrawerSizeClassName[size],
        className
      )}
      {...props}
    />
  )
}

type SideDrawerCloseButtonProps = {
  onClose: () => void
  label: string
  variant?: "header" | "overlay"
  className?: string
}

function SideDrawerCloseButton({
  onClose,
  label,
  variant = "header",
  className,
}: SideDrawerCloseButtonProps) {
  if (variant === "overlay") {
    return (
      <Button
        type="button"
        variant="ghost"
        size="xs"
        shape="pill"
        className={cn(
          "absolute top-7 right-7 h-8 w-8 bg-white/90 p-0 text-foreground shadow-sm hover:bg-white",
          className
        )}
        aria-label={label}
        onClick={onClose}
      >
        <X className="size-4" aria-hidden />
      </Button>
    )
  }

  return (
    <button
      type="button"
      className={cn(
        "absolute top-1 right-2 shrink-0 p-0 text-muted-foreground",
        className
      )}
      aria-label={label}
      onClick={onClose}
    >
      <X className="size-4" aria-hidden />
    </button>
  )
}

type SideDrawerHeaderProps = {
  title: React.ReactNode
  description?: React.ReactNode
  headerAction?: React.ReactNode
  onClose: () => void
  closeLabel: string
  className?: string
  titleClassName?: string
}

function SideDrawerHeader({
  title,
  description,
  headerAction,
  onClose,
  closeLabel,
  className,
  titleClassName,
}: SideDrawerHeaderProps) {
  return (
    <div className={cn("relative space-y-1 border-b border-neutral-200 px-4 py-4", className)}>
      <div className="flex items-center justify-between gap-3 pr-6">
        <DrawerTitle className={cn("font-inter text-lg font-semibold text-black", titleClassName)}>
          {title}
        </DrawerTitle>
        {headerAction}
      </div>
      {description ? (
        <DrawerDescription className="text-sm text-muted-foreground">{description}</DrawerDescription>
      ) : null}
      <SideDrawerCloseButton onClose={onClose} label={closeLabel} />
    </div>
  )
}

type SideDrawerAccessibilityProps = {
  title: React.ReactNode
  description?: React.ReactNode
}

function SideDrawerAccessibility({ title, description }: SideDrawerAccessibilityProps) {
  return (
    <>
      <DrawerTitle className="sr-only">{title}</DrawerTitle>
      {description ? <DrawerDescription className="sr-only">{description}</DrawerDescription> : null}
    </>
  )
}

function SideDrawerHero({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("relative shrink-0 px-4 pt-4", className)} {...props} />
}

function SideDrawerBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4", className)}
      {...props}
    />
  )
}

function SideDrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("grid grid-cols-2 gap-3 border-t border-neutral-200 px-4 py-4", className)}
      {...props}
    />
  )
}

export {
  SideDrawer,
  SideDrawerAccessibility,
  SideDrawerBody,
  SideDrawerCloseButton,
  SideDrawerContent,
  SideDrawerFooter,
  SideDrawerHeader,
  SideDrawerHero,
}

export type {
  SideDrawerCloseButtonProps,
  SideDrawerContentProps,
  SideDrawerHeaderProps,
  SideDrawerProps,
}
