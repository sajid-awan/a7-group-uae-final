import Link from "next/link"
import { Phone } from "lucide-react"

import { Button } from "@/shared/ui/button"
import { WhatsAppColorIcon } from "@/shared/ui/iconify-icons"
import { cn } from "@/shared/lib/cn"

export type PropertyDealerContactProperty = {
  agentWhatsAppHref?: string
  agentPhoneHref?: string
}

type PropertyDealerContactActionsProps = {
  property: PropertyDealerContactProperty
  layout?: "card" | "bar"
  className?: string
}

const whatsAppButtonClass =
  "w-full border-transparent bg-emerald-100 text-emerald-900 hover:bg-emerald-200/80"

const callButtonClass = "w-full border-transparent bg-sky-100 text-sky-800 hover:bg-sky-200/80"

export function PropertyDealerContactActions({
  property,
  layout = "card",
  className,
}: PropertyDealerContactActionsProps) {
  const showWhatsApp = Boolean(property.agentWhatsAppHref)
  const showCall = Boolean(property.agentPhoneHref)

  if (layout === "bar") {
    return (
      <div className={cn("flex items-stretch gap-2", className)}>
        {showWhatsApp ? (
          <Button
            asChild
            variant="outline"
            shape="pill"
            size="sm"
            className={cn("min-w-0 flex-1 px-3", whatsAppButtonClass)}
          >
            <Link href={property.agentWhatsAppHref!}>
              <WhatsAppColorIcon className="size-4 shrink-0" />
              <span className="truncate">Whatsapp</span>
            </Link>
          </Button>
        ) : null}
        {showCall ? (
          <Button
            asChild
            variant="outline"
            shape="pill"
            size="sm"
            className={cn("min-w-0 flex-1 px-3", callButtonClass)}
          >
            <Link href={property.agentPhoneHref!}>
              <Phone className="size-4 shrink-0" aria-hidden />
              <span className="truncate">Call</span>
            </Link>
          </Button>
        ) : null}
        <Button variant="default" shape="pill" size="sm" className="min-w-0 flex-[1.15] px-4">
          Send Message
        </Button>
      </div>
    )
  }

  return (
    <div className={className}>
      <Button variant="default" shape="pill" size="sm" className="mt-5 w-full">
        Send Message
      </Button>

      {showWhatsApp || showCall ? (
        <div className="mt-3 grid grid-cols-2 gap-2">
          {showWhatsApp ? (
            <Button
              asChild
              variant="outline"
              shape="pill"
              size="sm"
              className={whatsAppButtonClass}
            >
              <Link href={property.agentWhatsAppHref!}>
                <WhatsAppColorIcon className="size-4" />
                Whatsapp
              </Link>
            </Button>
          ) : null}
          {showCall ? (
            <Button
              asChild
              variant="outline"
              shape="pill"
              size="sm"
              className={callButtonClass}
            >
              <Link href={property.agentPhoneHref!}>
                <Phone className="size-4" aria-hidden />
                Call
              </Link>
            </Button>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
