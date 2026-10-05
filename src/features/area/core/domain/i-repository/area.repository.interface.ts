import type { Area, AreaDetail } from "../entity/area.entity"

export interface IAreaRepository {
  getAreas(): Promise<Area[]>
  getAreaDetail(id: string): Promise<AreaDetail | null>
}
