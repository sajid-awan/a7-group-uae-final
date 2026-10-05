import {
  getMockPropertyDtos,
  getMockPropertyListingDtos,
  getMockTrendingLuxuryVillaListingDtos,
} from "../mocks"
import type { IPropertyRepository } from "../../domain/i-repository/property.repository.interface"
import type { Property, PropertyListing } from "../../domain/entity/property.entity"
import { toProperty, toPropertyListing } from "../mapper/property.mapper"

class PropertyRepository implements IPropertyRepository {
  async getProperties(): Promise<Property[]> {
    return getMockPropertyDtos().map(toProperty)
  }

  async getPropertyListings(): Promise<PropertyListing[]> {
    return getMockPropertyListingDtos().map(toPropertyListing)
  }

  async getTrendingLuxuryVillas(): Promise<PropertyListing[]> {
    return getMockTrendingLuxuryVillaListingDtos().map(toPropertyListing)
  }

  getDemoSeedProperty(): Property | null {
    const dtos = getMockPropertyDtos()
    return dtos.length ? toProperty(dtos[0]!) : null
  }

  getDemoSeedListing(): PropertyListing | null {
    const dtos = getMockPropertyListingDtos()
    return dtos.length ? toPropertyListing(dtos[0]!) : null
  }
}

export const propertyRepository: IPropertyRepository = new PropertyRepository()

// Functional helpers for direct consumption by service/usecase layer
export async function fetchProperties(): Promise<Property[]> {
  return propertyRepository.getProperties()
}

export async function fetchPropertyListings(): Promise<PropertyListing[]> {
  return propertyRepository.getPropertyListings()
}

export async function fetchTrendingLuxuryVillas(): Promise<PropertyListing[]> {
  return propertyRepository.getTrendingLuxuryVillas()
}

export function getDemoSeedProperty(): Property | null {
  return propertyRepository.getDemoSeedProperty()
}

export function getDemoSeedListing(): PropertyListing | null {
  return propertyRepository.getDemoSeedListing()
}
