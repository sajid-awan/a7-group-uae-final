"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"
import { Textarea } from "@/shared/ui/textarea"
import type { PropertyListingDetail } from "@/features/property"
import { cn } from "@/shared/lib/cn"

type PropertyInquirySectionProps = {
  property: PropertyListingDetail
  className?: string
}

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

export function PropertyInquirySection({ property, className }: PropertyInquirySectionProps) {
  return (
    <section
      className={cn("mx-auto container bg-white px-6 py-7.5 md:px-10", className)}
      aria-labelledby="property-inquiry-heading"
    >
      <h2 id="property-inquiry-heading" className="font-heading text-2xl font-bold text-a7-black md:text-3xl">
        Ask {property.agentName} a question
      </h2>

      <div className="mt-6 rounded-xl bg-a7-panel-surface p-5 md:p-6">
        <Textarea
          placeholder="Message"
          className="min-h-[140px] resize-none border-0 bg-white text-base shadow-none focus-visible:ring-ring/30"
          aria-label="Your message"
        />
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Avatar size="sm" shape="circle">
              {property.agentAvatarUrl ? (
                <AvatarImage src={property.agentAvatarUrl} alt={property.agentName} />
              ) : null}
              <AvatarFallback>{getInitials(property.agentName)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-a7-black">{property.agentName}</p>
              <p className="text-xs text-muted-foreground">Contact Agent</p>
            </div>
          </div>
          <Button variant="default" shape="pill" size="sm" className="min-w-[160px] shrink-0">
            Ask a Question
          </Button>
        </div>
      </div>
    </section>
  )
}
