import * as plots from "../content/plots-page-content"
import * as mortgages from "../content/mortgages-page-content"
import * as propertyManagement from "../content/property-management-page-content"
import * as propertySnagging from "../content/property-snagging-page-content"
import * as conveyancing from "../content/conveyancing-page-content"
import * as shortTermRentals from "../content/short-term-rentals-page-content"
import * as services from "../content/services-page-content"
import * as listYourProperty from "@/features/property/content/list-your-property-page-content"

export const PLOTS_PAGE_TITLE = plots.PLOTS_PAGE_TITLE
export const PLOTS_HERO_DESCRIPTION = plots.PLOTS_HERO_DESCRIPTION

export function getPlotsPageContent() {
  return {
    breadcrumbs: plots.PLOTS_BREADCRUMBS,
    heroProps: plots.plotsHeroProps,
    audienceSectionProps: plots.plotsAudienceSectionProps,
    listingsSectionProps: plots.plotsListingsSectionProps,
    howItWorksSectionProps: plots.plotsHowItWorksSectionProps,
    marketInsightsSectionProps: plots.plotsMarketInsightsSectionProps,
    legacySectionProps: plots.plotsLegacySectionProps,
    whyChooseSectionProps: plots.plotsWhyChooseSectionProps,
    testimonialsSectionProps: plots.plotsTestimonialsSectionProps,
    faqSectionProps: plots.plotsFaqSectionProps,
    contactSectionProps: plots.plotsContactSectionProps,
  }
}

export type PlotsPageContent = ReturnType<typeof getPlotsPageContent>

export const MORTGAGES_PAGE_TITLE = mortgages.MORTGAGES_PAGE_TITLE
export const MORTGAGES_HERO_DESCRIPTION = mortgages.MORTGAGES_HERO_DESCRIPTION

export function getMortgagesPageContent() {
  return {
    heroProps: mortgages.mortgagesHeroProps,
    ourServicesSectionProps: mortgages.mortgagesOurServicesSectionProps,
    whyWorkTitle: mortgages.MORTGAGES_WHY_WORK_TITLE,
    whyWorkSubtitle: mortgages.MORTGAGES_WHY_WORK_SUBTITLE,
    whyWorkBenefits: mortgages.MORTGAGES_WHY_WORK_BENEFITS,
    whyA7SectionProps: mortgages.mortgagesWhyA7SectionProps,
    testimonialsSectionProps: mortgages.mortgagesTestimonialsSectionProps,
    faqSectionProps: mortgages.mortgagesFaqSectionProps,
    contactSectionProps: mortgages.mortgagesContactSectionProps,
  }
}

export type MortgagesPageContent = ReturnType<typeof getMortgagesPageContent>

export const PROPERTY_MANAGEMENT_PAGE_TITLE = propertyManagement.PROPERTY_MANAGEMENT_PAGE_TITLE

export function getPropertyManagementPageContent() {
  return {
    heroProps: propertyManagement.propertyManagementHeroProps,
    intro: {
      breadcrumbs: propertyManagement.PROPERTY_MANAGEMENT_BREADCRUMBS,
      title: propertyManagement.PROPERTY_MANAGEMENT_INTRO_TITLE,
      paragraphs: propertyManagement.PROPERTY_MANAGEMENT_INTRO_PARAGRAPHS,
      imageUrl: propertyManagement.PROPERTY_MANAGEMENT_INTRO_IMAGE,
    },
    features: {
      description: propertyManagement.PROPERTY_MANAGEMENT_FEATURE_DESCRIPTION,
      items: propertyManagement.PROPERTY_MANAGEMENT_FEATURES,
    },
    whySectionProps: propertyManagement.propertyManagementWhySectionProps,
    testimonialsSectionProps: propertyManagement.propertyManagementTestimonialsSectionProps,
    faqSectionProps: propertyManagement.propertyManagementFaqSectionProps,
    contactSectionProps: propertyManagement.propertyManagementContactSectionProps,
  }
}

export type PropertyManagementPageContent = ReturnType<typeof getPropertyManagementPageContent>

export const PROPERTY_SNAGGING_PAGE_TITLE = propertySnagging.PROPERTY_SNAGGING_PAGE_TITLE
export const PROPERTY_SNAGGING_HERO_DESCRIPTION = propertySnagging.PROPERTY_SNAGGING_HERO_DESCRIPTION

export function getPropertySnaggingPageContent() {
  return {
    heroProps: propertySnagging.propertySnaggingHeroProps,
    introSectionProps: propertySnagging.propertySnaggingIntroSectionProps,
    glassServicesSectionProps: propertySnagging.propertySnaggingGlassServicesSectionProps,
    stepCardsSectionProps: propertySnagging.propertySnaggingStepCardsSectionProps,
    testimonialsSectionProps: propertySnagging.propertySnaggingTestimonialsSectionProps,
    faqSectionProps: propertySnagging.propertySnaggingFaqSectionProps,
    contactSectionProps: propertySnagging.propertySnaggingContactSectionProps,
  }
}

export type PropertySnaggingPageContent = ReturnType<typeof getPropertySnaggingPageContent>

export const CONVEYANCING_PAGE_TITLE = conveyancing.CONVEYANCING_PAGE_TITLE
export const CONVEYANCING_HERO_DESCRIPTION = conveyancing.CONVEYANCING_HERO_DESCRIPTION

export function getConveyancingPageContent() {
  return {
    heroProps: conveyancing.conveyancingHeroProps,
    aboutSectionProps: conveyancing.conveyancingAboutSectionProps,
    prismTitle: conveyancing.CONVEYANCING_PRISM_TITLE,
    prismSubtitle: conveyancing.CONVEYANCING_PRISM_SUBTITLE,
    prismBenefits: conveyancing.CONVEYANCING_PRISM_BENEFITS,
    solutionsSectionProps: conveyancing.conveyancingSolutionsSectionProps,
    testimonialsSectionProps: conveyancing.conveyancingTestimonialsSectionProps,
    faqSectionProps: conveyancing.conveyancingFaqSectionProps,
    contactSectionProps: conveyancing.conveyancingContactSectionProps,
  }
}

export type ConveyancingPageContent = ReturnType<typeof getConveyancingPageContent>

export const SHORT_TERM_RENTALS_PAGE_TITLE = shortTermRentals.SHORT_TERM_RENTALS_PAGE_TITLE
export const SHORT_TERM_RENTALS_HERO_DESCRIPTION = shortTermRentals.SHORT_TERM_RENTALS_HERO_DESCRIPTION

export function getShortTermRentalsPageContent() {
  return {
    heroProps: shortTermRentals.shortTermRentalsHeroProps,
    guestSectionProps: shortTermRentals.shortTermRentalsGuestSectionProps,
    whyTitle: shortTermRentals.SHORT_TERM_RENTALS_WHY_TITLE,
    whyBenefits: shortTermRentals.SHORT_TERM_RENTALS_WHY_BENEFITS,
    transformSectionProps: shortTermRentals.shortTermRentalsTransformSectionProps,
    journeyBanner: shortTermRentals.SHORT_TERM_RENTALS_JOURNEY_BANNER,
    servicesSectionProps: shortTermRentals.shortTermRentalsServicesSectionProps,
    testimonialsSectionProps: shortTermRentals.shortTermRentalsTestimonialsSectionProps,
    faqSectionProps: shortTermRentals.shortTermRentalsFaqSectionProps,
    contactSectionProps: shortTermRentals.shortTermRentalsContactSectionProps,
  }
}

export type ShortTermRentalsPageContent = ReturnType<typeof getShortTermRentalsPageContent>

export const LIST_YOUR_PROPERTY_PAGE_TITLE = listYourProperty.LIST_YOUR_PROPERTY_PAGE_TITLE
export const LIST_YOUR_PROPERTY_HERO_DESCRIPTION = listYourProperty.LIST_YOUR_PROPERTY_HERO_DESCRIPTION

export function getListYourPropertyPageContent() {
  return {
    heroProps: listYourProperty.listYourPropertyHeroProps,
    whySectionProps: listYourProperty.listYourPropertyWhySectionProps,
    howItWorksTitle: listYourProperty.LIST_YOUR_PROPERTY_HOW_IT_WORKS_TITLE,
    howItWorksSubtitle: listYourProperty.LIST_YOUR_PROPERTY_HOW_IT_WORKS_SUBTITLE,
    howItWorksSteps: listYourProperty.LIST_YOUR_PROPERTY_HOW_IT_WORKS_STEPS,
    testimonialsSectionProps: listYourProperty.listYourPropertyTestimonialsSectionProps,
    faqSectionProps: listYourProperty.listYourPropertyFaqSectionProps,
    contactSectionProps: listYourProperty.listYourPropertyContactSectionProps,
  }
}

export type ListYourPropertyPageContent = ReturnType<typeof getListYourPropertyPageContent>

export const SERVICES_PAGE_TITLE = services.SERVICES_PAGE_TITLE
export const SERVICES_PAGE_HERO_SUBTITLE = services.SERVICES_PAGE_HERO_SUBTITLE

export function getServicesPageContent() {
  return {
    hero: {
      title: services.SERVICES_PAGE_TITLE,
      subtitle: services.SERVICES_PAGE_HERO_SUBTITLE,
      imageUrl: services.SERVICES_HERO_IMAGE,
    },
    intro: {
      breadcrumbs: services.SERVICES_PAGE_BREADCRUMBS,
      title: services.SERVICES_INTRO_TITLE,
      paragraphs: services.SERVICES_INTRO_PARAGRAPHS,
      imagePrimary: services.SERVICES_INTRO_IMAGE_PRIMARY,
      imageSecondary: services.SERVICES_INTRO_IMAGE_SECONDARY,
    },
    offerings: services.SERVICE_OFFERINGS,
    seoSections: services.SERVICES_SEO_SECTIONS,
    testimonialsSectionProps: services.servicesTestimonialsSectionProps,
    faqSectionProps: services.servicesFaqSectionProps,
    contactSectionProps: services.servicesContactSectionProps,
  }
}

export type ServicesPageContent = ReturnType<typeof getServicesPageContent>
