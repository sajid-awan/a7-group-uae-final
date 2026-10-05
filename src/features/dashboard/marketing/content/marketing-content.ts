import { Captions, ImageIcon, LayoutTemplate, Video, Wand2 } from "lucide-react"

import type { MarketingFeatureCard } from "./marketing-types"

export const MARKETING_PAGE_COPY = {
  title: "Reels Shots with Seedance 2",
  subtitle: "Single clips with your reels. Download and use them anywhere.",
  tryItNowLabel: "Try it now",
} as const

const FEATURE_DESCRIPTION =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

export const MARKETING_FEATURE_CARDS: MarketingFeatureCard[] = [
  {
    id: "scene-by-scene",
    title: "Build a video scene by scene",
    description: FEATURE_DESCRIPTION,
    icon: Video,
    iconClassName: "text-[#2563EB]",
    cardClassName: "bg-[#EFF6FF]",
  },
  {
    id: "from-prompt",
    title: "Generate a video from a prompt",
    description: FEATURE_DESCRIPTION,
    icon: Wand2,
    iconClassName: "text-[#7C3AED]",
    cardClassName: "border border-[#DDD6FE] bg-[#F5F3FF]",
    disabled: true,
  },
  {
    id: "from-photo",
    title: "Make a reel video from a photo",
    description: FEATURE_DESCRIPTION,
    icon: ImageIcon,
    iconClassName: "text-[#16A34A]",
    cardClassName: "bg-[#F0FDF4]",
    disabled: true,
  },
  {
    id: "from-template",
    title: "Start with a template",
    description: FEATURE_DESCRIPTION,
    icon: LayoutTemplate,
    iconClassName: "text-[#E11D48]",
    cardClassName: "bg-[#FFF1F2]",
    disabled: true,
  },
  {
    id: "captions",
    title: "Caption",
    description: FEATURE_DESCRIPTION,
    icon: Captions,
    iconClassName: "text-[#7C3AED]",
    cardClassName: "border border-[#DDD6FE] bg-[#F5F3FF]",
  },
]
