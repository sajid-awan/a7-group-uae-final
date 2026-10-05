"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp, Home } from "lucide-react"

import { ArrowNarrowRightIcon } from "@/shared/icons"
import { motion } from "framer-motion"

import { Button } from "@/shared/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import type { FloorPlanSubType, FloorPlanUnit, ProjectFloorPlans } from "@/features/property"
import { AedText } from "@/shared/ui/aed-text"
import { cn } from "@/shared/lib/cn"

type ProjectFloorPlansSectionProps = {
  floorPlans: ProjectFloorPlans
}

function unitTypeToTabValue(type: string) {
  return type.toLowerCase().replace(/\s+/g, "-")
}

function getUnitsForTab(floorPlans: ProjectFloorPlans, tabValue: string) {
  const unitType = floorPlans.unitTypes.find((type) => unitTypeToTabValue(type) === tabValue)
  if (!unitType) return []
  return floorPlans.units.filter((unit) => unit.unitType === unitType)
}

function subTypeToTabValue(label: string) {
  return label.toLowerCase().replace(/\s+/g, "-").replace(/\+/g, "plus")
}

function FloorPlanContentPanel({ unit, subType }: { unit: FloorPlanUnit; subType: FloorPlanSubType }) {
  const description = subType.description ?? unit.description
  const details = subType.details ?? unit.details
  const imageUrl = subType.imageUrl ?? unit.imageUrl

  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
        <Image
          src={imageUrl}
          alt={`${unit.label} — ${subType.label}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>

        <ul className="space-y-2">
          {details.map((detail) => (
            <li key={detail} className="flex items-start gap-2 text-sm text-a7-text-gray">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-a7-black" aria-hidden />
              {detail}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          <Button variant="default" shape="pill" size="sm" className="flex-1">
            Book A Visit
          </Button>
          <Button
            variant="secondary"
            shape="pill"
            size="sm"
            className="flex-1 bg-a7-black text-white hover:bg-a7-black/90"
          >
            Contact Broker
          </Button>
        </div>
      </div>
    </div>
  )
}

function FloorPlanSubTypeTabs({ unit }: { unit: FloorPlanUnit }) {
  const defaultSubType = subTypeToTabValue(unit.subTypes[0]?.label ?? "default")

  if (unit.subTypes.length <= 1) {
    const subType = unit.subTypes[0]
    if (!subType) return null
    return <FloorPlanContentPanel unit={unit} subType={subType} />
  }

  return (
    <Tabs defaultValue={defaultSubType} className="w-full">
      <TabsList variant="pill" className="mb-5">
        {unit.subTypes.map((subType) => (
          <TabsTrigger key={subType.label} variant="pill" value={subTypeToTabValue(subType.label)}>
            {subType.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {unit.subTypes.map((subType) => (
        <TabsContent key={subType.label} value={subTypeToTabValue(subType.label)} className="mt-0">
          <FloorPlanContentPanel unit={unit} subType={subType} />
        </TabsContent>
      ))}
    </Tabs>
  )
}

function FloorPlanRow({
  unit,
  isOpen,
  onToggle,
}: {
  unit: FloorPlanUnit
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-3 sm:px-5 px-3 py-4 text-left transition-colors hover:bg-muted/30"
        aria-expanded={isOpen}
      >
        <Home className="size-6 shrink-0 text-primary" strokeWidth={1.5} />
        <span className="flex-1 font-heading text-xl font-semibold text-a7-black">{unit.label}</span>
        <span className="sm:mr-3 mr-1 font-semibold text-primary">
          <AedText text={unit.price} />
        </span>
        {isOpen ? (
          <ChevronUp className="size-5 shrink-0 text-muted-foreground" />
        ) : (
          <ChevronDown className="size-5 shrink-0 text-muted-foreground" />
        )}
      </button>

      {isOpen ? (
        <div className="px-5 pb-6">
          <FloorPlanSubTypeTabs unit={unit} />
        </div>
      ) : null}
    </div>
  )
}

function FloorPlansAccordion({
  units,
  openUnitId,
  onOpenUnitId,
}: {
  units: FloorPlanUnit[]
  openUnitId: string
  onOpenUnitId: (id: string) => void
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-a7-panel-surface p-6">
    <div className="min-w-0 overflow-hidden bg-white rounded-xl border border-border  ">
    
      {units.map((unit) => (
        <FloorPlanRow
          key={unit.id}
          unit={unit}
          isOpen={openUnitId === unit.id}
          onToggle={() => onOpenUnitId(openUnitId === unit.id ? "" : unit.id)}
        />
      ))}
    </div>
    </div>
  )
}

export function ProjectFloorPlansSection({ floorPlans }: ProjectFloorPlansSectionProps) {
  const defaultTab = unitTypeToTabValue(floorPlans.unitTypes[0] ?? "Apartment")
  const defaultUnits = getUnitsForTab(floorPlans, defaultTab)
  const [activeTab, setActiveTab] = useState(defaultTab)
  const [openUnitId, setOpenUnitId] = useState(defaultUnits[0]?.id ?? "")

  const handleTabChange = (tabValue: string) => {
    setActiveTab(tabValue)
    const units = getUnitsForTab(floorPlans, tabValue)
    setOpenUnitId(units[0]?.id ?? "")
  }

  const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
  const VIEWPORT = { once: true, amount: 0.12 as const }

  return (
    <section className="mx-auto container bg-white px-6 py-7.5 md:px-10" aria-labelledby="floor-plans-heading">
      <motion.h2
        id="floor-plans-heading"
        className="mb-8 font-heading text-2xl font-bold text-a7-black md:text-3xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        Floor plans
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
      >
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-[minmax(200px,220px)_1fr] md:items-start md:gap-2.5">
          <TabsList
            activeVariant="dark"
            className={cn(
              "flex h-auto w-full shrink-0 flex-row justify-start gap-2 overflow-x-auto bg-transparent p-0 pb-1",
              "-mx-6 px-6 md:mx-0 md:px-0",
              "[-ms-overflow-style:none] [scrollbar-width:none] md:flex-col md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
            )}
          >
            {floorPlans.unitTypes.map((type) => (
              <TabsTrigger
                key={type}
                value={unitTypeToTabValue(type)}
                size="lg"
                shape="rounded"
                className={cn(
                  "min-w-[130px] shrink-0 justify-between gap-3 border border-transparent bg-a7-panel-surface px-5 py-4 text-left font-semibold text-a7-black sm:min-w-[150px]",
                  "md:min-w-0 md:w-full"
                )}
              >
                <span className="whitespace-nowrap">{type}</span>
                <ArrowNarrowRightIcon size={24} className="shrink-0 text-current" aria-hidden />
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="min-w-0 flex-1">
            {floorPlans.unitTypes.map((type) => {
              const tabValue = unitTypeToTabValue(type)
              const units = getUnitsForTab(floorPlans, tabValue)

              return (
                <TabsContent key={type} value={tabValue} className="mt-0">
                  <FloorPlansAccordion
                    units={units}
                    openUnitId={openUnitId}
                    onOpenUnitId={setOpenUnitId}
                  />
                </TabsContent>
              )
            })}
          </div>
        </div>
      </Tabs>
      </motion.div>
    </section>
  )
}
