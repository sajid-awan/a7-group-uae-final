"use client"

import { Fragment, type ReactNode } from "react"
import { Copy, Mail } from "lucide-react"
import { Icon } from "@iconify/react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"
import { cn } from "@/shared/lib/cn"

type ShareItem = {
  key: string
  label: string
  icon: ReactNode
  onClick: () => void
}

function buildShareItems(getUrl: () => string, subject = "Property Listing"): ShareItem[] {
  return [
    {
      key: "copy",
      label: "Copy link",
      icon: <Copy className="size-4 text-muted-foreground" />,
      onClick: () => navigator.clipboard.writeText(getUrl()),
    },
    {
      key: "facebook",
      label: "Share on Facebook",
      icon: <Icon icon="logos:facebook" className="size-5" />,
      onClick: () =>
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getUrl())}`, "_blank"),
    },
    {
      key: "twitter",
      label: "Share on Twitter",
      icon: <Icon icon="simple-icons:x" className="size-4" />,
      onClick: () =>
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(getUrl())}`, "_blank"),
    },
    {
      key: "whatsapp",
      label: "Share on WhatsApp",
      icon: <Icon icon="logos:whatsapp-icon" className="size-5" />,
      onClick: () => window.open(`https://wa.me/?text=${encodeURIComponent(getUrl())}`, "_blank"),
    },
    {
      key: "gmail",
      label: "Send via Gmail",
      icon: <Icon icon="logos:google-gmail" className="size-5" />,
      onClick: () =>
        window.open(
          `https://mail.google.com/mail/?view=cm&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(getUrl())}`,
          "_blank"
        ),
    },
    {
      key: "email",
      label: "Send via Email",
      icon: <Mail className="size-4 text-muted-foreground" />,
      onClick: () =>
        (window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(getUrl())}`),
    },
  ]
}

export type ListingShareMenuProps = {
  trigger: ReactNode
  url?: string
  subject?: string
  align?: "start" | "center" | "end"
  contentClassName?: string
}

export function ListingShareMenu({
  trigger,
  url,
  subject = "Property Listing",
  align = "end",
  contentClassName,
}: ListingShareMenuProps) {
  const getShareUrl = () => url ?? window.location.href
  const shareItems = buildShareItems(getShareUrl, subject)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent align={align} className={cn("w-52 rounded-xl p-1.5", contentClassName)}>
        {shareItems.map((item, i) => (
          <Fragment key={item.key}>
            {i === 1 ? <DropdownMenuSeparator /> : null}
            <DropdownMenuItem
              className="cursor-pointer gap-3 rounded-lg px-3 py-2.5 text-sm font-medium"
              onClick={item.onClick}
            >
              <span className="flex size-5 shrink-0 items-center justify-center">{item.icon}</span>
              {item.label}
            </DropdownMenuItem>
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
