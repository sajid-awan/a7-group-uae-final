import type { AgentProfileDetail, RealEstateAgentProfile } from "../entity/agent.entity"

export interface IAgentRepository {
  getAgents(): Promise<RealEstateAgentProfile[]>
  getAgentProfile(id: string): Promise<AgentProfileDetail | undefined>
  getAllAgentProfileIds(): Promise<string[]>
}
