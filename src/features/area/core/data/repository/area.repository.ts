import { DUBAI_AREA_LISTINGS } from "@/features/area/content/areas-page-content"
import { getAreaDetail as getAreaDetailContent } from "@/features/area/content/area-detail-content"
import type { IAreaRepository } from "../../domain/i-repository/area.repository.interface"
import type { Area, AreaDetail } from "../../domain/entity/area.entity"
import { toArea, toAreaDetail } from "../mapper/area.mapper"

class AreaRepository implements IAreaRepository {
  async getAreas(): Promise<Area[]> {
    return DUBAI_AREA_LISTINGS.map(toArea)
  }

  async getAreaDetail(id: string): Promise<AreaDetail | null> {
    const dto = getAreaDetailContent(id)
    return dto ? toAreaDetail(dto) : null
  }
}

export const areaRepository: IAreaRepository = new AreaRepository()

export async function fetchAreas(): Promise<Area[]> {
  return areaRepository.getAreas()
}

export async function fetchAreaDetail(id: string): Promise<AreaDetail | null> {
  return areaRepository.getAreaDetail(id)
}
