import type { HomeTestimonial } from "@/features/home/content/home-testimonials"
import type { ProjectFaqItem } from "@/features/property"

/** Default enquiry contact channels used on services and similar marketing pages. */
export const DEFAULT_MARKETING_CONTACT = {
  whatsApp: "+971 50 392 8461",
  whatsAppHref: "https://wa.me/971503928461",
  phone: "+971 50 392 8461",
  phoneHref: "tel:+971503928461",
  email: "info@a7group.com",
  emailHref: "mailto:info@a7group.com",
} as const

export const DEFAULT_MARKETING_CONTACT_HEADING =
  "Speak to our Dedicated Team of Seasoned Professionals"

export const DEFAULT_MARKETING_CONTACT_INTRO =
  "Share your requirements and a specialist will respond with tailored options — whether you need management, finance, or conveyancing support."

export const DEFAULT_MARKETING_LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "ar", label: "Arabic" },
  { value: "ru", label: "Russian" },
  { value: "hi", label: "Hindi" },
  { value: "fr", label: "French" },
] as const

export const DEFAULT_MARKETING_TESTIMONIALS_TITLE = "Why Our Clients Trust Us"

export const DEFAULT_MARKETING_TESTIMONIALS_SUBTITLE =
  "Discover What Our Customers Are Saying About Their Experiences."

const SERVICES_TESTIMONIAL_QUOTE =
  "The Edit At D3 Is A Lifestyle-Focused Residential And Mixed-Use Development By Meraas, Situated In The Heart Of Dubai Design District (D3) — A Creative And Cultural Hub Dedicated."

export const DEFAULT_MARKETING_TESTIMONIALS: readonly HomeTestimonial[] = [
  {
    id: "mandy-mertz",
    name: "Mandy Mertz II",
    role: "2 years ago",
    quote: SERVICES_TESTIMONIAL_QUOTE,
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "tomas-glover",
    name: "Tomas Glover",
    role: "2 years ago",
    quote: SERVICES_TESTIMONIAL_QUOTE,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "wallace-hettinger",
    name: "Wallace Hettinger",
    role: "2 years ago",
    quote: SERVICES_TESTIMONIAL_QUOTE,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
] as const

export const SERVICES_PAGE_FAQ_TITLE = "FAQs About A7 Property Management Service Dubai"

export const SERVICES_PAGE_FAQ_ITEMS: readonly ProjectFaqItem[] = [
  {
    title: "How do I choose the right property management company in Dubai?",
    content:
      "Look for licensed operators with transparent fee schedules, owner portals, and experience in your community type. A7 Group provides clear reporting, tenant screening, and maintenance SLAs tailored to villas and apartments across Dubai.",
  },
  {
    title: "Do property managers in Dubai handle legal compliance?",
    content:
      "Yes — reputable managers coordinate Ejari registration, service-charge reconciliations, and RERA-related documentation. Our team works with conveyancing partners to keep owners aligned with Dubai Land Department requirements.",
  },
  {
    title: "How much does property management cost in Dubai?",
    content:
      "Fees typically range from 5–8% of annual rent for residential units, with variations for short-term lets and larger portfolios. We provide a written proposal after reviewing your unit, location, and service scope.",
  },
] as const
