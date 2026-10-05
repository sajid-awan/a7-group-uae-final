import { MARKETING_PORTRAIT_PLACEHOLDER } from "@/shared/content/marketing/marketing-media"

export type RealEstateExpert = {
  id: string
  name: string
  role: string
  imageUrl: string
  whatsAppHref?: string
}

/** Agent portraits for the home “Real estate experts” carousel. */
export const HOME_REAL_ESTATE_EXPERTS: readonly RealEstateExpert[] = [
  {
    id: "ronnie-volkman",
    name: "Ronnie Volkman DVM",
    role: "Senior property advisor",
    imageUrl: MARKETING_PORTRAIT_PLACEHOLDER,
    whatsAppHref: "https://wa.me/971500000001",
  },
  {
    id: "ronnie-volkman-2",
    name: "Ronnie Volkman DVM",
    role: "Senior property advisor",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    whatsAppHref: "https://wa.me/971500000002",
  },
  {
    id: "ronnie-volkman-3",
    name: "Ronnie Volkman DVM",
    role: "Senior property advisor",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    whatsAppHref: "https://wa.me/971500000003",
  },
  {
    id: "ronnie-volkman-4",
    name: "Ronnie Volkman DVM",
    role: "Senior property advisor",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    whatsAppHref: "https://wa.me/971500000004",
  },
  {
    id: "laurie-lowe",
    name: "Laurie Lowe",
    role: "Luxury villa specialist",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    whatsAppHref: "https://wa.me/971500000005",
  },
  {
    id: "megan-fox",
    name: "Megan Fox",
    role: "Off-plan consultant",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    whatsAppHref: "https://wa.me/971500000006",
  },
  {
    id: "raul-fisher",
    name: "Raul Fisher",
    role: "Investment advisor",
    imageUrl: "https://i.pravatar.cc/400?img=12",
    whatsAppHref: "https://wa.me/971500000007",
  },
  {
    id: "darlene-gerhold",
    name: "Darlene Gerhold",
    role: "Furnished rentals expert",
    imageUrl: "https://i.pravatar.cc/400?img=32",
    whatsAppHref: "https://wa.me/971500000008",
  },
  {
    id: "abduil-qais",
    name: "Abduil Qais",
    role: "Senior property advisor",
    imageUrl: "https://i.pravatar.cc/400?img=12",
    whatsAppHref: "https://wa.me/971500000009",
  },
  {
    id: "jessica-mercedes",
    name: "Jessica Mercedes",
    role: "Commercial leasing",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
    whatsAppHref: "https://wa.me/971500000010",
  },
] as const
