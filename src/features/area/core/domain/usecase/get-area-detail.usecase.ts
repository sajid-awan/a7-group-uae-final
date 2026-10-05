import type { IAreaRepository } from "../i-repository/area.repository.interface"
import type { AreaDetail } from "../entity/area.entity"

export async function getAreaDetailUseCase(
  repository: IAreaRepository,
  id: string
): Promise<AreaDetail | null> {
  return repository.getAreaDetail(id)
}
