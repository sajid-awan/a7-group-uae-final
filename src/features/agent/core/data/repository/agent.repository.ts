import { REAL_ESTATE_AGENTS } from "@/features/agent/content/agents-page-content"
import {
  getAgentProfileDetail,
  getAllAgentProfileIds,
} from "@/features/agent/content/agent-profile-content"
import type { IAgentRepository } from "../../domain/i-repository/agent.repository.interface"
import type { AgentProfileDetail, RealEstateAgentProfile } from "../../domain/entity/agent.entity"

class AgentRepository implements IAgentRepository {
  async getAgents(): Promise<RealEstateAgentProfile[]> {
    return REAL_ESTATE_AGENTS.map((agent) => ({ ...agent }))
  }

  async getAgentProfile(id: string): Promise<AgentProfileDetail | undefined> {
    return getAgentProfileDetail(id)
  }

  async getAllAgentProfileIds(): Promise<string[]> {
    return getAllAgentProfileIds()
  }
}

export const agentRepository: IAgentRepository = new AgentRepository()

export async function fetchRealEstateAgents(): Promise<RealEstateAgentProfile[]> {
  return agentRepository.getAgents()
}

export async function fetchAgentProfile(id: string): Promise<AgentProfileDetail | undefined> {
  return agentRepository.getAgentProfile(id)
}

export async function fetchAllAgentProfileIds(): Promise<string[]> {
  return agentRepository.getAllAgentProfileIds()
}
