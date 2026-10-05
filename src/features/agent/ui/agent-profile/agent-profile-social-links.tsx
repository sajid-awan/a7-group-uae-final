"use client"

import type { PropertyAgentSocialLink } from "@/features/property"
import { cn } from "@/shared/lib/cn"
import { SocialLinkButton } from "@/shared/ui/social-link-button"

type AgentProfileSocialLinksProps = {
  links: PropertyAgentSocialLink[]
  className?: string
}

export function AgentProfileSocialLinks({ links, className }: AgentProfileSocialLinksProps) {
  if (!links.length) return null

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <span className="text-sm text-a7-text-gray">Social links:</span>
      <div className="flex flex-wrap items-center gap-1.5">
        {links.map((link) => (
          <SocialLinkButton key={link.platform} link={link} size="sm" />
        ))}
      </div>
    </div>
  )
}
