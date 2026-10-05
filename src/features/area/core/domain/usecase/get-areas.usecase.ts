import type { IAreaRepository } from "../i-repository/area.repository.interface"
import type { Area } from "../entity/area.entity"

export async function getAreasUseCase(repository: IAreaRepository): Promise<Area[]> {
  return repository.getAreas()
}
