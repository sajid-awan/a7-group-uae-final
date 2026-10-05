"use client"

import { useEffect, useState } from "react"
import type { ComponentType } from "react"
import { Mail, Phone } from "lucide-react"

import type { DatabaseRecord } from "../content/database-types"
import {
  DATABASE_NATIONALITY_OPTIONS,
  DATABASE_RECORD_DRAWER_COPY,
} from "../content/database-content"
import { DatabaseInteractionStats } from "./database-interaction-stats"
import { cn } from "@/shared/lib/cn"
import { getInitials } from "@/shared/lib/get-initials"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"
import {
  SideDrawer,
  SideDrawerBody,
  SideDrawerContent,
  SideDrawerFooter,
  SideDrawerHeader,
} from "@/shared/ui/drawer"
import { FormInputField, FormSelectField } from "@/shared/ui/form-field"
import { WhatsAppColorIcon } from "@/shared/ui/iconify-icons"
import { PhoneField } from "@/shared/ui/phone-input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"

export type DatabaseRecordDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  record: DatabaseRecord | null
  className?: string
}

const drawerFooterButtonClassName = "h-11 rounded-xl shadow-none"

function mapRecordToForm(record: DatabaseRecord | null) {
  return {
    name: record?.contactName ?? "",
    contact: record?.contactNumber ?? "",
    contactSecondary: record?.contactSecondary ?? "",
    clientName: record?.clientName ?? "",
    nationality: record?.nationality ?? "",
  }
}

function DatabaseRecordAgentCard({ record }: { record: DatabaseRecord }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
      <div className="mt-3 flex items-start gap-3">
        <Avatar size="md" shape="circle" className="size-11 shrink-0">
          <AvatarImage src={record.agentAvatarUrl} alt={record.agentName} />
          <AvatarFallback>{getInitials(record.agentName)}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="font-inter text-sm font-semibold text-foreground">{record.agentName}</p>
          <DatabaseInteractionStats
            interactions={record.interactions}
            className="mt-2 gap-4"
            iconClassName="size-4"
          />
        </div>
      </div>
    </div>
  )
}

type DatabaseActivityType = "phone" | "whatsapp" | "email"

const DATABASE_ACTIVITY_META: Record<
  DatabaseActivityType,
  {
    icon: ComponentType<{ className?: string }>
    iconClassName?: string
    iconWrapperClassName: string
    iconColorClassName: string
  }
> = {
  phone: {
    icon: Phone,
    iconWrapperClassName: "bg-sky-50",
    iconColorClassName: "text-sky-700",
  },
  email: {
    icon: Mail,
    iconWrapperClassName: "bg-indigo-50",
    iconColorClassName: "text-indigo-700",
  },
  whatsapp: {
    icon: WhatsAppColorIcon,
    iconClassName: "size-4",
    iconWrapperClassName: "bg-emerald-50",
    iconColorClassName: "text-emerald-700",
  },
}

function DatabaseRecordActivityTab() {
  const activities = [
    { id: "1", type: "phone" as const, label: "Phone call logged", time: "2h ago" },
    { id: "2", type: "whatsapp" as const, label: "WhatsApp message sent", time: "5h ago" },
    { id: "3", type: "email" as const, label: "Email follow-up", time: "1d ago" },
  ]

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      {activities.map((activity, index) => {
        const meta = DATABASE_ACTIVITY_META[activity.type]
        const ActivityIcon = meta.icon

        return (
          <div key={activity.id}>
            <div className="flex gap-3 px-4 py-3.5 items-center">
              <span
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-xl",
                  meta.iconWrapperClassName,
                  meta.iconColorClassName
                )}
              >
                <ActivityIcon className={cn("size-4", meta.iconClassName)} aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-foreground">{activity.label}</p>
                  <p className="shrink-0 text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            </div>
            {index < activities.length - 1 ? (
              <div className="border-t border-neutral-200" aria-hidden />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export function DatabaseRecordDrawer({
  open,
  onOpenChange,
  record,
  className,
}: DatabaseRecordDrawerProps) {
  const [form, setForm] = useState(() => mapRecordToForm(record))
  const copy = DATABASE_RECORD_DRAWER_COPY

  useEffect(() => {
    if (open && record) {
      setForm(mapRecordToForm(record))
    }
  }, [open, record])

  const handleClose = () => onOpenChange(false)

  const updateForm = (patch: Partial<typeof form>) => {
    setForm((current) => ({ ...current, ...patch }))
  }

  if (!record) return null

  const convertToLeadBadge = (
    <span className="inline-flex h-6 shrink-0 items-center gap-1.5 rounded-full bg-[#FFF4E8] px-2 text-[10px] font-medium leading-none text-primary">
      <span className="size-1 rounded-full bg-primary" aria-hidden />
      {copy.convertToLeadLabel}
    </span>
  )

  return (
    <SideDrawer open={open} onOpenChange={onOpenChange}>
      <SideDrawerContent size="md" className={className}>
        <SideDrawerHeader
          title={copy.title}
          headerAction={convertToLeadBadge}
          onClose={handleClose}
          closeLabel="Close manage contact drawer"
        />

        <SideDrawerBody className="space-y-5 px-4 py-4">
          <Tabs defaultValue="information" className="gap-5">
            <TabsList variant="line" className="w-full gap-6 px-0">
              <TabsTrigger variant="line" value="information" className="flex-1 pb-3 text-sm">
                {copy.informationTab}
              </TabsTrigger>
              <TabsTrigger variant="line" value="activity" className="flex-1 pb-3 text-sm">
                {copy.activityTab}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="information" className="space-y-5">
              <DatabaseRecordAgentCard record={record} />

              <div className="space-y-4">
                <FormInputField
                  label="Name"
                  value={form.name}
                  onValueChange={(name) => updateForm({ name })}
                  required
                />
                <PhoneField
                  label="Contact"
                  value={form.contact}
                  onChange={(contact) => updateForm({ contact })}
                  defaultCountry="ae"
                  inputSize="sm"
                  radius="lg"
                  fieldClassName="gap-2"
                />
                <PhoneField
                  label="Contact 2"
                  value={form.contactSecondary}
                  onChange={(contactSecondary) => updateForm({ contactSecondary })}
                  defaultCountry="ae"
                  inputSize="sm"
                  radius="lg"
                  fieldClassName="gap-2"
                />
                <FormInputField
                  label="Client Name"
                  value={form.clientName}
                  onValueChange={(clientName) => updateForm({ clientName })}
                />
                <FormSelectField
                  label="Nationality"
                  value={form.nationality}
                  onValueChange={(nationality) => updateForm({ nationality })}
                  options={[...DATABASE_NATIONALITY_OPTIONS]}
                />
              </div>
            </TabsContent>

            <TabsContent value="activity">
              <DatabaseRecordActivityTab />
            </TabsContent>
          </Tabs>
        </SideDrawerBody>

        <SideDrawerFooter>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className={cn(
              drawerFooterButtonClassName,
              "border-destructive bg-white text-destructive hover:bg-destructive/10 hover:text-destructive"
            )}
            onClick={handleClose}
          >
            {copy.deleteLabel}
          </Button>
          <Button type="button" size="sm" className={drawerFooterButtonClassName} onClick={handleClose}>
            {copy.saveLabel}
          </Button>
        </SideDrawerFooter>
      </SideDrawerContent>
    </SideDrawer>
  )
}

DatabaseRecordDrawer.displayName = "DatabaseRecordDrawer"
