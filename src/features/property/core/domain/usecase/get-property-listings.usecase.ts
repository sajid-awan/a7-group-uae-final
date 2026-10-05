import type { IPropertyRepository } from "../i-repository/property.repository.interface"
import type { PropertyListing } from "../entity/property.entity"

export async function getPropertyListingsUseCase(
  repository: IPropertyRepository
): Promise<PropertyListing[]> {
  return repository.getPropertyListings()
}

export async function getTrendingLuxuryVillasUseCase(
  repository: IPropertyRepository
): Promise<PropertyListing[]> {
  return repository.getTrendingLuxuryVillas()
}
