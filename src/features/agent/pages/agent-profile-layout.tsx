import type { ReactNode } from "react"
import { Suspense } from "react"
import { notFound } from "next/navigation"

import {
  AgentProfileHero,
  AgentProfileProvider,
  AgentProfileSidebar,
} from "@/features/agent/ui/agent-profile"
import { HomeDeveloperCtaNewsletter } from "@/shared/ui/marketing/home-developer-cta-newsletter"
import { AgentProfileFullPageSkeleton } from "@/shared/ui/skeletons"
import { BreadcrumbList } from "@/shared/ui/breadcrumb"
import { homeDeveloperCtaContent } from "@/features/developer/content/developer-cta-content"
import { fetchAgentProfile } from "@/features/agent"
import { agentProfilePath, agentsPath } from "@/shared/lib/constants/routes"

type AgentProfileLayoutProps = {
  children: ReactNode
  params: Promise<{ id: string }>
}

async function AgentProfileLayoutContent({ children, params }: AgentProfileLayoutProps) {
  const { id } = await params
  const agent = await fetchAgentProfile(id)

  if (!agent) {
    notFound()
  }

  return (
    <AgentProfileProvider agent={agent}>
      <AgentProfileHero agent={agent} />

      <div className="container mx-auto px-4 py-6 sm:px-6 md:py-8">
        <BreadcrumbList
          size="sm"
          items={[
            { kind: "home", href: "/" },
            { kind: "link", href: agentsPath(), label: "Real Estate Agents" },
            { kind: "current", label: agent.name },
          ]}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-2.5 xl:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
          <AgentProfileSidebar
            agentId={agent.id}
            className="-mx-4 px-4 lg:mx-0 lg:px-0 lg:sticky lg:top-24 lg:self-start"
          />
          <div className="min-w-0">{children}</div>
        </div>
      </div>

      <HomeDeveloperCtaNewsletter
        {...homeDeveloperCtaContent}
        contactHref={`${agentProfilePath(agent.id)}/contact`}
      />
    </AgentProfileProvider>
  )
}

export default function AgentProfileLayout({ children, params }: AgentProfileLayoutProps) {
  return (
    <main className="bg-white">
      <Suspense fallback={<AgentProfileFullPageSkeleton />}>
        <AgentProfileLayoutContent params={params}>{children}</AgentProfileLayoutContent>
      </Suspense>
    </main>
  )
}
