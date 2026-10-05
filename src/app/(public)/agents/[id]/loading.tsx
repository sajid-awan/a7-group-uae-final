import { AgentProfilePanelSkeleton } from "@/shared/ui/skeletons"

/** Shown while agent profile sub-pages load; layout already renders hero, breadcrumb, and sidebar. */
export default function AgentProfileLoading() {
  return <AgentProfilePanelSkeleton />
}
