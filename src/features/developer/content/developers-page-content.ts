import type { BreadcrumbItem } from "@/shared/ui/breadcrumb"
import { areasPath, developerDetailPath } from "@/shared/lib/constants/routes"
import type { ProjectFaqItem, ProjectOverviewBlock } from "@/features/property"

export const DEVELOPERS_PAGE_TITLE = "Top Real Estate Developers in Dubai"

export const DEVELOPERS_PAGE_INTRO: readonly [string, string] = [
  "Dubai's skyline is shaped by a select group of master developers who deliver iconic towers, villa communities, and mixed-use destinations. From established names with decades of track records to fast-growing brands launching bold new districts, each builder brings a distinct design language, payment-plan structure, and handover timeline.",
  "Whether you are buying off-plan, investing in resale, or comparing service charges across communities, understanding who develops each project helps you assess quality, liquidity, and long-term value. Browse profiles below to learn when each developer was founded, what they are known for, and where their latest inventory is listed.",
]

export const DEVELOPERS_PAGE_BREADCRUMBS: BreadcrumbItem[] = [
  { kind: "home", href: "/" },
  { kind: "link", href: areasPath(), label: "Dubai" },
  { kind: "current", label: "Developers" },
]

export type DubaiDeveloperProfile = {
  id: string
  name: string
  foundedYear: number
  logoSrc?: string
  description: string
  learnMoreHref: string
}

const developerLearnMore = (id: string) => developerDetailPath(id)

export const DUBAI_DEVELOPERS: DubaiDeveloperProfile[] = [
  {
    id: "emaar",
    name: "Emaar",
    foundedYear: 1997,
    logoSrc: "/assets/developers/emaar.png",
    description:
      "Emaar is one of Dubai's most recognised developers, known for master-planned communities such as Downtown Dubai, Dubai Marina, and Arabian Ranches. The group delivers high-quality apartments, villas, and hospitality assets with strong resale liquidity.",
    learnMoreHref: developerLearnMore("emaar"),
  },
  {
    id: "damac",
    name: "Damac",
    foundedYear: 2002,
    logoSrc: "/assets/developers/damac.png",
    description:
      "DAMAC Properties focuses on design-led towers and branded residences across Dubai and the wider region. Buyers often choose DAMAC for flexible payment plans and bold architecture in corridors such as Business Bay and DAMAC Hills.",
    learnMoreHref: developerLearnMore("damac"),
  },
  {
    id: "dubai-properties",
    name: "Dubai Properties",
    foundedYear: 2004,
    logoSrc: "/assets/developers/dubai-properties.png",
    description:
      "Dubai Properties develops mixed-use neighbourhoods including Jumeirah Beach Residence and parts of Dubailand. The portfolio spans waterfront apartments, townhouses, and community retail with family-oriented amenities.",
    learnMoreHref: developerLearnMore("dubai-properties"),
  },
  {
    id: "azizi",
    name: "Azizi",
    foundedYear: 2007,
    logoSrc: "/assets/developers/azizi.png",
    description:
      "Azizi Developments has expanded rapidly with mid-rise and high-rise projects in Al Furjan, Meydan, and Dubai Healthcare City. The brand is popular with investors seeking competitive entry pricing and metro-connected locations.",
    learnMoreHref: developerLearnMore("azizi"),
  },
  {
    id: "meraas",
    name: "Meraas",
    foundedYear: 2007,
    logoSrc: "/assets/developers/meraas.png",
    description:
      "Meraas creates lifestyle destinations including Bluewaters Island, City Walk, and La Mer. Projects blend retail, dining, and residential product with a strong emphasis on walkable urban design and leisure amenities.",
    learnMoreHref: developerLearnMore("meraas"),
  },
  {
    id: "sobha",
    name: "Sobha",
    foundedYear: 2014,
    description:
      "Sobha Realty brings precision engineering and in-house construction to communities such as Sobha Hartland and MBR City. The developer is known for build quality, landscaped podium levels, and detailed interior specifications.",
    learnMoreHref: developerLearnMore("sobha"),
  },
  {
    id: "binghatti",
    name: "Binghatti",
    foundedYear: 2008,
    logoSrc: "/assets/developers/binghatti.png",
    description:
      "Binghatti Developers is recognised for distinctive façade design and fast-moving off-plan launches in JVC, Business Bay, and Dubai Silicon Oasis. Studios and one-bed apartments are a core part of the offering.",
    learnMoreHref: developerLearnMore("binghatti"),
  },
  {
    id: "nakheel",
    name: "Nakheel",
    foundedYear: 2000,
    description:
      "Nakheel shaped Palm Jumeirah, The World, and large parts of Dubai's coastal inventory. Today the developer continues to deliver villas, apartments, and retail-led communities with landmark scale and waterfront positioning.",
    learnMoreHref: developerLearnMore("nakheel"),
  },
  {
    id: "ellington",
    name: "Ellington",
    foundedYear: 2014,
    description:
      "Ellington Properties targets design-conscious buyers with boutique finishes in Jumeirah Village Circle, Downtown, and Dubai Hills. Interiors and common areas receive particular attention to detail and curated material palettes.",
    learnMoreHref: developerLearnMore("ellington"),
  },
  {
    id: "omniyat",
    name: "Omniyat",
    foundedYear: 2005,
    description:
      "Omniyat develops ultra-luxury residences on the Palm and in Business Bay, often partnering with global hotel and design brands. Limited inventory and high specification levels define the buyer profile.",
    learnMoreHref: developerLearnMore("omniyat"),
  },
]

export const DEVELOPERS_PAGE_SEO_SECTIONS: ProjectOverviewBlock[] = [
  {
    title: "Discover Top Performing Areas",
    description:
      "Pair developer research with community-level data — rental yields, service charges, and transaction volumes vary significantly between corridors. Our advisors help you align builder reputation with the neighbourhoods that match your budget and hold period.",
  },
  {
    title: "Prime Urban Location",
    description:
      "Established developers anchor flagship districts close to business hubs, metro links, and retail. Compare commute times, school catchments, and future infrastructure before you commit to an off-plan payment plan or a ready resale unit.",
  },
  {
    title: "Contemporary Residences & Design",
    description:
      "From glass towers with sky lobbies to low-rise villa streets with parks, Dubai's developers each favour different product mixes. Review floor plans, ceiling heights, storage, and typical fit-out standards when shortlisting projects.",
  },
  {
    title: "Lifestyle & Community Experience",
    description:
      "Master communities bundle pools, gyms, co-working, and retail promenades. Understanding how a developer maintains common areas after handover protects long-term livability and resale appeal for end-users and landlords alike.",
  },
  {
    title: "Strategic Appeal & Investment Potential",
    description:
      "Investors weigh payment-plan flexibility, anticipated handover dates, and historical price performance. We surface comparable transactions and rental comps so you can stress-test yields alongside developer track record and escrow compliance.",
  },
]

export const DEVELOPERS_PAGE_FAQ_ITEMS: ProjectFaqItem[] = [
  {
    title: "Who are the largest real estate developers in Dubai?",
    content:
      "Emaar, Nakheel, DAMAC, Dubai Properties, and Meraas are among the most active names by volume and landmark projects. Boutique and mid-market builders such as Binghatti, Azizi, and Ellington also account for a large share of recent off-plan launches.",
  },
  {
    title: "What should I check before buying off-plan from a developer?",
    content:
      "Review escrow registration, RERA approvals, payment-plan milestones, and historical handover performance. Compare service-charge estimates, community masterplan, and exit liquidity in the surrounding resale market.",
  },
  {
    title: "Can I resell a property before handover?",
    content:
      "Assignment rules depend on the developer, project stage, and Oqood status. Some sales allow transfers after a minimum payment threshold; others restrict assignments until a set construction milestone. We confirm policy per project.",
  },
  {
    title: "Do developers offer post-handover payment plans?",
    content:
      "Select launches include extended payment schedules after keys are handed over. Terms vary by project and are not universal — always verify the official offer letter and DLD registration requirements.",
  },
  {
    title: "How do I compare developers for investment?",
    content:
      "Look at completed inventory quality, average rental yields in their communities, service-charge levels, and secondary-market liquidity. Our team maps these factors to your budget and target hold period.",
  },
]

export const DEVELOPERS_PAGE_FAQ_TITLE = "Developers in Dubai — FAQ"
