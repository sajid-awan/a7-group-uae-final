export type HomeTestimonial = {
  id: string
  name: string
  role: string
  quote: string
  avatarUrl: string
}

export const HOME_TESTIMONIALS: readonly HomeTestimonial[] = [
  {
    id: "daniel-kardashian",
    name: "Daniel Kardashian",
    role: "Los Angeles, CA",
    quote:
      "Monolith made the home-buying process so smooth. Their team was professional, attentive, and truly understood what we wanted.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "megan-fox",
    name: "Megan Fox",
    role: "Washington, NY",
    quote:
      "From start to finish, Monolith was there every step of the way, ensuring we found a home that suited our family's needs.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "jessica-mercedes",
    name: "Jessica Mercedes",
    role: "CEO @ Scarscan",
    quote:
      "Thanks to Monolith, we found our dream home in no time. Their expertise and local knowledge are unmatched.",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "ronnie-volkman",
    name: "Ronnie Volkman DVM",
    role: "Dubai Marina, UAE",
    quote:
      "Exceptional guidance on off-plan investments. Transparent advice, fast responses, and a team that genuinely cares.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "laurie-lowe",
    name: "Laurie Lowe",
    role: "Jumeirah Golf Estates, Dubai",
    quote:
      "Our villa purchase closed ahead of schedule. The process felt premium from the first viewing to the final handover.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
] as const
