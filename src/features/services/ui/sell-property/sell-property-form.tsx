"use client"

import Image from "next/image"
import { useState } from "react"

import { PersonalInformationStep } from "@/features/services/ui/sell-property/steps/personal-information-step"
import { PropertySpecificationsStep } from "@/features/services/ui/sell-property/steps/property-specifications-step"
import { VerificationMediaStep } from "@/features/services/ui/sell-property/steps/verification-media-step"
import {
  SELL_PROPERTY_STEP_ORDER,
  SELL_PROPERTY_WIZARD_STEPS,
  type SellPropertyStepKey,
} from "@/features/services/ui/sell-property/types"
import { Button } from "@/shared/ui/button"
import { WizardStepNav } from "@/shared/ui/wizard-step-nav"
import { useMounted } from "@/shared/hooks/use-mounted"

export function SellPropertyForm() {
  const mounted = useMounted()
  const [activeStep, setActiveStep] = useState<SellPropertyStepKey>("details")
  const activeIndex = SELL_PROPERTY_STEP_ORDER.indexOf(activeStep)

  const isDetails = activeStep === "details"
  const isMedia = activeStep === "media"
  const isSubmit = activeStep === "submit"
  const isStepCompletedOrActive = (step: SellPropertyStepKey) => SELL_PROPERTY_STEP_ORDER.indexOf(step) <= activeIndex

  const goNext = () => {
    if (isDetails) setActiveStep("media")
    else if (isMedia) setActiveStep("submit")
  }

  const goBack = () => {
    if (isSubmit) setActiveStep("media")
    else if (isMedia) setActiveStep("details")
  }

  return (
    <div className="mx-auto w-full max-w-[574px] bg-white px-4 py-6 sm:px-6 sm:py-7 lg:px-9 lg:py-9">
      <Image
        src="/assets/brand/logo.svg"
        alt="A Seven Properties"
        width={140}
        height={36}
        className="mx-auto h-7 w-auto sm:h-8"
      />

      <h1 className="mt-4 text-center font-heading text-[clamp(1.875rem,7.5vw,3.75rem)] leading-[0.95] font-semibold tracking-tight text-black">
        List/Sell Your
        <br />
        Property in Dubai
      </h1>

      <WizardStepNav
        className="mt-6"
        steps={SELL_PROPERTY_WIZARD_STEPS}
        activeStep={activeStep}
        onStepChange={setActiveStep}
        isStepCompletedOrActive={isStepCompletedOrActive}
      />

      {!mounted ? (
        <div className="mt-7 space-y-4" aria-hidden>
          <div className="h-8 w-2/3 rounded-md bg-[#F3F4F6]" />
          <div className="h-11 w-full rounded-lg bg-[#F3F4F6]" />
          <div className="h-11 w-full rounded-lg bg-[#F3F4F6]" />
          <div className="h-11 w-full rounded-lg bg-[#F3F4F6]" />
        </div>
      ) : (
        <>
          {isDetails ? <PersonalInformationStep /> : null}
          {isMedia ? <PropertySpecificationsStep /> : null}
          {isSubmit ? <VerificationMediaStep /> : null}
        </>
      )}

      <div className="mt-7 flex flex-col gap-2.5">
        <Button
          type="button"
          variant="default"
          shape="pill"
          size="lg"
          className="w-full font-semibold"
          onClick={goNext}
          disabled={isSubmit}
        >
          {isSubmit ? "Submit" : "Next"}
        </Button>
        <Button
          type="button"
          variant="ghost"
          shape="pill"
          size="lg"
          className="w-full text-black"
          onClick={goBack}
          disabled={isDetails}
        >
          Back
        </Button>
      </div>
    </div>
  )
}

