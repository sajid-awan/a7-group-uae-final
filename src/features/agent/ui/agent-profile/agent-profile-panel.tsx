import type { ReactNode } from "react"

import { AgentProfileSocialLinks } from "@/features/agent/ui/agent-profile/agent-profile-social-links"
import type { PropertyAgentSocialLink } from "@/features/property"
import { cn } from "@/shared/lib/cn"

type AgentProfilePanelProps = {
  title: string
  socialLinks?: PropertyAgentSocialLink[]
  children: ReactNode
  className?: string
}

export function AgentProfilePanel({ title, socialLinks, children, className }: AgentProfilePanelProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-border bg-white px-5 py-6 sm:px-7 sm:py-8 md:px-8 md:py-9",
        className
      )}
    >
      <div className="flex flex-col gap-4  pb-5 sm:flex-row sm:items-start sm:justify-between">
        <h2 className="font-heading text-2xl font-bold text-a7-black md:text-3xl">{title}</h2>
        {socialLinks?.length ? <AgentProfileSocialLinks links={socialLinks} className="sm:pt-1" /> : null}
      </div>
      <div className="mt-6 space-y-8">{children}</div>
    </article>
  )
}
