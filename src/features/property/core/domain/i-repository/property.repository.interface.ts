import type { Property, PropertyListing } from "../entity/property.entity"

export interface IPropertyRepository {
  getProperties(): Promise<Property[]>
  getPropertyListings(): Promise<PropertyListing[]>
  getTrendingLuxuryVillas(): Promise<PropertyListing[]>
  getDemoSeedProperty(): Property | null
  getDemoSeedListing(): PropertyListing | null
}
