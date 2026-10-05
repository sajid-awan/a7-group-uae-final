"use client"

import { createContext, useContext, type ReactNode } from "react"

import type { AgentProfileDetail } from "@/features/agent/core/domain/entity/agent.entity"

const AgentProfileContext = createContext<AgentProfileDetail | null>(null)

export function AgentProfileProvider({
  agent,
  children,
}: {
  agent: AgentProfileDetail
  children: ReactNode
}) {
  return <AgentProfileContext.Provider value={agent}>{children}</AgentProfileContext.Provider>
}

export function useAgentProfile() {
  const agent = useContext(AgentProfileContext)
  if (!agent) {
    throw new Error("useAgentProfile must be used within AgentProfileProvider")
  }
  return agent
}
