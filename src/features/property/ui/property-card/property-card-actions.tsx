"use client"

import { useState, type MouseEvent } from "react"
import { Heart } from "lucide-react"

import { Menu04Icon, Share06Icon } from "@/shared/icons"

import { ListingShareMenu } from "@/shared/ui/shared/listing-share-menu"
import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/lib/cn"

const actionIconButtonClass =
  "size-9 min-h-9 min-w-9 border-transparent bg-muted/60 hover:border-transparent hover:bg-muted"

export function PropertyCardActions({ className }: { className?: string }) {
  const [saved, setSaved] = useState(false)

  const toggleSaved = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setSaved((prev) => !prev)
  }

  return (
    <div className={cn("relative z-10 flex shrink-0 items-center gap-1.5", className)}>
      <Button
        type="button"
        variant="outline"
        size="icon-xs"
        shape="pill"
        aria-label={saved ? "Remove from saved" : "Save"}
        aria-pressed={saved}
        className={actionIconButtonClass}
        onClick={toggleSaved}
      >
        <Heart
          className={cn(
            "pointer-events-none size-4 transition-colors",
            saved
              ? "fill-red-500 stroke-red-500 group-hover/button:fill-red-500 group-hover/button:stroke-red-500"
              : ""
          )}
        />
      </Button>

      <ListingShareMenu
        trigger={
          <Button
            type="button"
            variant="outline"
            size="icon-xs"
            shape="pill"
            aria-label="Share"
            className={actionIconButtonClass}
          >
            <Share06Icon size={16} className="pointer-events-none size-4 transition-colors" aria-hidden />
          </Button>
        }
      />

      <Button
        type="button"
        variant="outline"
        size="icon-xs"
        shape="pill"
        aria-label="More options"
        className={actionIconButtonClass}
      >
        <Menu04Icon size={16} className="pointer-events-none size-4 transition-colors" aria-hidden />
      </Button>
    </div>
  )
}
