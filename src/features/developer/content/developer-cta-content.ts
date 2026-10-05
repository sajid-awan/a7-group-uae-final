import {
  DEVELOPER_CTA_DETAIL_BANNER,
  HOME_DEVELOPER_CTA_BANNER,
} from "@/shared/content/marketing/marketing-media"

/** Copy and hero image for the home page developer CTA block. */
export const homeDeveloperCtaContent = {
  imageUrl: HOME_DEVELOPER_CTA_BANNER,
  heroEyebrowPercent: "0%",
  heroEyebrowLabel: "OUR COMMISSION",
  heroTitle: "Let Us Help You Find Your Ideal Home In Dubai",
  newsletterTitle: "Sign up for our newsletter to stay up to date on the Dubai property market.",
} as const

/** Copy and hero image for property / project / off-plan detail pages. */
export const detailDeveloperCtaContent = {
  imageUrl: DEVELOPER_CTA_DETAIL_BANNER,
  heroEyebrowPercent: "0%",
  heroEyebrowLabel: "OUR COMMISSION",
  heroTitle: "Buy property at the developer prices",
  newsletterTitle:
    "Get the latest market moves and project launches delivered to your inbox.",
} as const
