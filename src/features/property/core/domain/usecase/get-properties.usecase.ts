import type { IPropertyRepository } from "../i-repository/property.repository.interface"
import type { Property } from "../entity/property.entity"

export async function getPropertiesUseCase(
  repository: IPropertyRepository
): Promise<Property[]> {
  return repository.getProperties()
}
