export type HomeNewsPost = {
  id: string
  title: string
  excerpt: string
  imageUrl: string
  date: string
  views: number
  href: string
  /** Highlights the card with a blue frame (first / featured post). */
  featured?: boolean
}

export const HOME_NEWS_POSTS: readonly HomeNewsPost[] = [
  {
    id: "rent-dubai-practices",
    title: "10 BEST PRACTICES TO RENT YOUR PROPERTY IN DUBAI, LEGAL AND RISK-CONTR…",
    excerpt:
      "Learn how to protect your investment, stay compliant with Dubai rental regulations, and reduce vacancy risk with proven landlord strategies.",
    imageUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    date: "05/05/2023",
    views: 205,
    href: "#",
    featured: true,
  },
  {
    id: "al-furjan-market",
    title: "IS THE AL FURJAN PROPERTY MARKET BOOMING OR SLOWING? 2025—2026 MARKET …",
    excerpt:
      "We break down transaction volumes, price trends, and buyer sentiment shaping one of Dubai's most watched suburban communities.",
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    date: "05/05/2023",
    views: 541,
    href: "#",
  },
  {
    id: "professional-snagging",
    title: "WHY PROFESSIONAL SNAGGING IS ESSENTIAL FOR ASSET PROTECTION…",
    excerpt:
      "Before handover, a structured snagging report can save owners costly rework and preserve long-term resale value.",
    imageUrl:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    date: "05/05/2023",
    views: 387,
    href: "#",
  },
] as const
