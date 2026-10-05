"use client"

import Image from "next/image"
import Link from "next/link"
import { BedDouble, MapPin } from "lucide-react"

import { Button } from "@/shared/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel"
import { WhatsAppColorIcon, whatsAppActionToneClassName } from "@/shared/ui/iconify-icons"
import type { DeveloperOffPlanProject } from "@/features/developer/services/content"
import { offPlanProjectPath } from "@/shared/lib/constants/routes"
import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"

type DeveloperDetailMapPropertyCardProps = {
  project: DeveloperOffPlanProject
  className?: string
}

function hasText(value?: string) {
  return Boolean(value?.trim())
}

export function DeveloperDetailMapPropertyCard({
  project,
  className,
}: DeveloperDetailMapPropertyCardProps) {
  const slides = project.imageUrls.filter(Boolean)

  return (
    <article
      className={cn(
        "pointer-events-auto relative z-[60] w-[min(calc(100vw-2rem),15.5rem)] overflow-hidden rounded-md border border-border/80 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.18)]",
        className
      )}
    >
      <div className="relative">
        {slides.length > 0 ? (
          <Carousel className="w-full" opts={{ loop: slides.length > 1 }}>
            <CarouselContent className="-ml-0">
              {slides.map((src, index) => (
                <CarouselItem key={`${src}-${index}`} className="basis-full pl-0">
                  <div className="relative aspect-[16/10] w-full bg-muted">
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="248px"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {slides.length > 1 ? (
              <>
                <CarouselPrevious className="left-1.5 size-6 border-0 bg-white/90 text-a7-black shadow-sm hover:bg-white [&_svg]:size-3.5" />
                <CarouselNext className="right-1.5 size-6 border-0 bg-white/90 text-a7-black shadow-sm hover:bg-white [&_svg]:size-3.5" />
              </>
            ) : null}
          </Carousel>
        ) : (
          <div className="aspect-[16/10] w-full bg-muted" aria-hidden />
        )}

        {hasText(project.paymentPlan) ? (
          <span className="pointer-events-none absolute left-2 top-2 z-10 inline-flex max-w-[min(100%,9.5rem)] rounded bg-black/55 px-1.5 py-0.5 text-[9px] font-medium leading-snug text-white backdrop-blur-[2px]">
            {project.paymentPlan}
          </span>
        ) : null}

        {hasText(project.handover) ? (
          <span className="pointer-events-none absolute bottom-2 right-2 z-10 inline-flex rounded-full bg-[#F3E3A8] px-2 py-0.5 text-[10px] font-semibold text-a7-black shadow-sm">
            {project.handover}
          </span>
        ) : null}
      </div>

      <div className="space-y-1 p-2.5">
        {hasText(project.propertyTypes) ? (
          <p className="text-[10px] font-medium leading-tight text-muted-foreground">
            {project.propertyTypes}
          </p>
        ) : null}
        <h3 className="text-xs font-bold leading-snug text-a7-black">
          <Link href={offPlanProjectPath(project.id)} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        <p className="text-sm font-bold leading-tight text-a7-black">
          <span className="text-xs font-normal">From: </span>
          <AedText text={project.price} />
        </p>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] text-a7-text-gray">
          <span className="inline-flex items-center gap-0.5">
            <MapPin className="size-3 shrink-0" aria-hidden />
            {project.location}
          </span>
          <span className="inline-flex items-center gap-0.5">
            <BedDouble className="size-3 shrink-0" aria-hidden />
            {project.bedroomSummary}
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "mt-1 h-8 w-full gap-1.5 border px-2 text-[11px] font-semibold shadow-sm",
            whatsAppActionToneClassName
          )}
          asChild
        >
          <Link href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer">
            <WhatsAppColorIcon className="size-3.5 shrink-0" aria-hidden />
            Whatsapp
          </Link>
        </Button>
      </div>
    </article>
  )
}
