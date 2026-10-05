import { AgentProfilePanel } from "./agent-profile-panel"

type AgentProfileSectionPlaceholderProps = {
  title: string
  description: string
}

export function AgentProfileSectionPlaceholder({ title, description }: AgentProfileSectionPlaceholderProps) {
  return (
    <AgentProfilePanel title={title}>
      <p className="text-sm leading-relaxed text-a7-text-gray md:text-base">{description}</p>
    </AgentProfilePanel>
  )
}
