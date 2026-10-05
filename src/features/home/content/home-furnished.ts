import type { FurnishedCardProps } from "@/shared/types/home"
import type { Property } from "@/features/property"

const FURNISHED_LOCATION = "The Sundials, Jumeirah Golf Estates, Dubai"
const FURNISHED_DESCRIPTION = "Studios , Apartments"

/** Marketing copy for furnished tab demos (until CMS-backed). */
export function buildFurnishedCardRows(
  listingImages: string[],
  heroImg: string,
  p1: Property,
  p2: Property
): FurnishedCardProps[] {
  return [
    {
      imageUrl: listingImages[0] ?? heroImg,
      title: "Fully Furnished Studio | Vacant",
      location: FURNISHED_LOCATION,
      price: "725,000 AED",
      description: FURNISHED_DESCRIPTION,
      projectsTag: "Villa",
    },
    {
      imageUrl: listingImages[1] ?? p1.imageUrl,
      title: "Luxury Living | Palm Jumeirah | Beachfront",
      location: FURNISHED_LOCATION,
      price: "750,000 AED",
      description: FURNISHED_DESCRIPTION,
      projectsTag: "New",
    },
    {
      imageUrl: listingImages[2] ?? p2.imageUrl,
      title: "Luxury Living | Palm Jumeirah | Beachfront",
      location: FURNISHED_LOCATION,
      price: "25,000,000 AED",
      description: FURNISHED_DESCRIPTION,
    },
  ]
}

export function buildFurnishedApartmentRows(villas: FurnishedCardProps[]): FurnishedCardProps[] {
  return villas.map((c, i) => ({
    ...c,
    title: i === 0 ? "Apartment | Marina view" : c.title,
    price: i === 0 ? "690,000 AED" : c.price,
    projectsTag: "Apartment",
  }))
}
