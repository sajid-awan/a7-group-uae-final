export {
  fetchProperties,
  fetchPropertyListings,
  fetchTrendingLuxuryVillas,
  getDemoSeedProperty,
  getDemoSeedListing,
  propertyRepository,
} from "@/features/property/core/data/repository/property.repository"

export {
  toProperty,
  toPropertyDetail,
  toPropertyListing,
  toPropertyListingDetail,
} from "@/features/property/core/data/mapper/property.mapper"

export {
  getPropertiesUseCase,
} from "@/features/property/core/domain/usecase/get-properties.usecase"

export {
  getPropertyListingsUseCase,
  getTrendingLuxuryVillasUseCase,
} from "@/features/property/core/domain/usecase/get-property-listings.usecase"

import { API_ROUTES } from "@/shared/lib/constants/routes"
import { apiClient } from "@/shared/lib/api-client"
import type { PropertyDto } from "@/features/property/core/data/dto/property.dto"
import { propertyRepository } from "@/features/property/core/data/repository/property.repository"
import { getPropertiesUseCase } from "@/features/property/core/domain/usecase/get-properties.usecase"
import { getPropertyListingsUseCase } from "@/features/property/core/domain/usecase/get-property-listings.usecase"

export async function getPropertyDtos(): Promise<PropertyDto[]> {
  return apiClient<PropertyDto[]>(API_ROUTES.properties)
}

export async function getProperties() {
  return getPropertiesUseCase(propertyRepository)
}

export async function getPropertyListings() {
  return getPropertyListingsUseCase(propertyRepository)
}
