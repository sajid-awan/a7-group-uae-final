import type { CompanyProfileFormValues } from "./company-profile-types"

export const COMPANY_PROFILE_PAGE_COPY = {
  companyDetailsTitle: "Company Details",
  companyDetailsSubtitle: "Update your photo and personal details here.",
  companyProfileTitle: "Company Profile",
  companyProfileSubtitle: "To change your company detail, edit and save from here",
  cancelLabel: "Cancel",
  saveLabel: "Save changes",
  uploadTitle: "Click to upload",
  uploadDescription: "SVG, PNG, JPG or GIF (max. 800×400px)",
} as const

export const DEFAULT_COMPANY_PROFILE: CompanyProfileFormValues = {
  name: "A7 Group Real Estate",
  mobile: "+97143990990",
  website: "www.a7groupui.com",
  address: "Al Mamsha Street, Al Fattan Marine Towers II, 1st Floor, Office No. 9",
  description:
    "A7 Group Real Estate is a leading property consultancy in Dubai, specializing in residential and commercial sales, leasing, and off-plan investments.",
  email: "info@a7groupproperties.com",
  secondaryContact: "+97143990990",
  orn: "2245",
  reraExpiry: "2023-12-21",
  tradeLicenseNo: "58749512",
  tradeLicenseExpiry: "2023-12-21",
}

export function createCompanyProfileForm(
  values: Partial<CompanyProfileFormValues> = {}
): CompanyProfileFormValues {
  return { ...DEFAULT_COMPANY_PROFILE, ...values }
}
