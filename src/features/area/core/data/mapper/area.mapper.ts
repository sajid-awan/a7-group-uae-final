import type { Area, AreaDetail } from "../../domain/entity/area.entity"
import type { AreaDto, AreaDetailDto } from "../dto/area.dto"

export function toArea(dto: AreaDto): Area {
  return {
    id: dto.id,
    title: dto.title,
    slug: dto.propertiesAreaSlug,
    location: "Dubai",
    imageUrl: dto.imageUrls[0] ?? "",
    category: dto.categories[0] ?? "popular",
  }
}

export function toAreaDetail(dto: AreaDetailDto): AreaDetail {
  return {
    id: dto.id,
    title: dto.title,
    searchPlaceholder: dto.searchPlaceholder,
    heroBackgroundUrl: dto.heroBackgroundUrl,
    galleryImages: [...dto.galleryImages],
    aboutParagraphs: [...dto.aboutParagraphs],
    highlights: [...dto.highlights],
    location: {
      mapEmbedUrl: dto.location.mapEmbedUrl,
      latitude: dto.location.latitude,
      longitude: dto.location.longitude,
      description: dto.location.description,
      nearbyAreas: dto.location.nearbyAreas.map((p) => ({ name: p.name, minutes: p.minutes })),
      nearbyAttractions: dto.location.nearbyAttractions.map((p) => ({ name: p.name, minutes: p.minutes })),
    },
    amenitiesSection: {
      featureTags: [...dto.amenitiesSection.featureTags],
      accordionItems: dto.amenitiesSection.accordionItems.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
      })),
    },
    communities: dto.communities.map((c) => ({
      id: c.id,
      title: c.title,
      description: c.description,
      imageUrl: c.imageUrl,
      propertyCount: c.propertyCount,
    })),
    specialists: dto.specialists.map((s) => ({
      id: s.id,
      name: s.name,
      role: s.role,
      imageUrl: s.imageUrl,
      whatsAppHref: s.whatsAppHref,
    })),
    propertyTrends: dto.propertyTrends.map((t) => ({
      label: t.label,
      rentValue: t.rentValue,
      saleValue: t.saleValue,
    })),
    serviceCharges: dto.serviceCharges.map((c) => ({ type: c.type, charge: c.charge })),
    propertiesSection: {
      propertyTypesDescription: dto.propertiesSection.propertyTypesDescription,
      propertyTypeTags: [...dto.propertiesSection.propertyTypeTags],
      subcommunitiesDescription: dto.propertiesSection.subcommunitiesDescription,
      rentSaleDescription: dto.propertiesSection.rentSaleDescription,
      experts: dto.propertiesSection.experts.map((e) => ({
        id: e.id,
        name: e.name,
        role: e.role,
        imageUrl: e.imageUrl,
        whatsAppHref: e.whatsAppHref,
      })),
      popularVillaLocations: dto.propertiesSection.popularVillaLocations.map((v) => ({
        id: v.id,
        label: v.label,
        imageUrl: v.imageUrl,
      })),
      averagePrices: dto.propertiesSection.averagePrices.map((p) => ({
        bedrooms: p.bedrooms,
        salePrice: p.salePrice,
        rentPrice: p.rentPrice,
      })),
      transactions: dto.propertiesSection.transactions.map((t) => ({
        id: t.id,
        location: t.location,
        locationSubtitle: t.locationSubtitle,
        soldFor: t.soldFor,
        pricePerSqft: t.pricePerSqft,
        type: t.type,
        status: t.status,
        bedrooms: t.bedrooms,
        soldDate: t.soldDate,
        areaSqft: t.areaSqft,
      })),
      listings: [...dto.propertiesSection.listings],
    },
    faq: dto.faq.map((f) => ({ title: f.title, content: f.content })),
    schools: dto.schools.map((s) => ({
      id: s.id,
      name: s.name,
      rating: s.rating,
      distance: s.distance,
    })),
    lifestyleSection: {
      items: dto.lifestyleSection.items.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        tags: item.tags ? [...item.tags] : undefined,
      })),
      footerNote: dto.lifestyleSection.footerNote,
    },
    galleryPhotoCount: dto.galleryPhotoCount,
  }
}
