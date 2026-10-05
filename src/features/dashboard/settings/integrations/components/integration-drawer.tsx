"use client"

import { Link2, RefreshCw } from "lucide-react"
import { useEffect, useState } from "react"

import {
  createInitialIntegrationSettings,
  getIntegrationStatusLabel,
  INTEGRATIONS_DRAWER_COPY,
  INTEGRATION_TOGGLE_OPTIONS,
} from "../content/integrations-drawer-content"
import type { IntegrationRecord, IntegrationSettingsForm } from "../content/integrations-types"
import { IntegrationLogo } from "./integration-logo"
import { cn } from "@/shared/lib/cn"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import {
  SideDrawer,
  SideDrawerBody,
  SideDrawerContent,
  SideDrawerFooter,
  SideDrawerHeader,
} from "@/shared/ui/drawer"
import { FormPasswordField } from "@/shared/ui/form-field"
import { Switch } from "@/shared/ui/switch"

const drawerFooterButtonClassName = "h-11 rounded-xl shadow-none"

export type IntegrationDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  integration: IntegrationRecord | null
  onSave?: (integration: IntegrationRecord, values: IntegrationSettingsForm) => void
  onTestConnection?: (integration: IntegrationRecord) => void
  onSyncNow?: (integration: IntegrationRecord) => void
  className?: string
}

export function IntegrationDrawer({
  open,
  onOpenChange,
  integration,
  onSave,
  onTestConnection,
  onSyncNow,
  className,
}: IntegrationDrawerProps) {
  const [form, setForm] = useState<IntegrationSettingsForm>(createInitialIntegrationSettings)
  const copy = INTEGRATIONS_DRAWER_COPY

  useEffect(() => {
    if (open) {
      setForm(createInitialIntegrationSettings())
    }
  }, [open, integration])

  if (!integration) return null

  const handleClose = () => onOpenChange(false)

  const handleSave = () => {
    onSave?.(integration, form)
    onOpenChange(false)
  }

  const updateForm = (patch: Partial<IntegrationSettingsForm>) => {
    setForm((current) => ({ ...current, ...patch }))
  }

  const statusLabel = getIntegrationStatusLabel(integration.status)

  return (
    <SideDrawer open={open} onOpenChange={onOpenChange}>
      <SideDrawerContent size="md" className={className}>
        <SideDrawerHeader
          title={
            <div className="flex items-center gap-3">
              <IntegrationLogo
                label={integration.logoLabel}
                className={integration.logoClassName}
                size="sm"
              />
              <span>{integration.name}</span>
            </div>
          }
          headerAction={
            <Badge
              size="sm"
              shape="pill"
              className="border-neutral-200 bg-neutral-100 px-2.5 py-0.5 text-[10px] font-medium normal-case text-muted-foreground"
            >
              {statusLabel}
            </Badge>
          }
          onClose={handleClose}
          closeLabel={`Close ${integration.name} integration drawer`}
        />

        <SideDrawerBody className="space-y-5">
          <div className="space-y-4 rounded-2xl bg-[#F9F9F9] p-4">
            {INTEGRATION_TOGGLE_OPTIONS.map((option) => (
              <div key={option.key} className="flex items-center justify-between gap-4">
                <label htmlFor={`integration-${option.key}`} className="text-sm text-foreground">
                  {option.label}
                </label>
                <Switch
                  id={`integration-${option.key}`}
                  size="sm"
                  checked={form[option.key]}
                  onCheckedChange={(checked) => updateForm({ [option.key]: checked === true })}
                  aria-label={option.label}
                />
              </div>
            ))}
          </div>

          <FormPasswordField
            label={copy.apiConfigurationLabel}
            value={form.apiKey}
            onValueChange={(apiKey) => updateForm({ apiKey })}
          />

          <div className="rounded-2xl bg-[#F4F7F4] p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#E4F7E8] text-[#1B5E3B]">
                  <Link2 className="size-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">{copy.testConnectionTitle}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{copy.testConnectionDescription}</p>
                </div>
              </div>
              <Button
                type="button"
                size="sm"
                className="shrink-0 rounded-lg bg-[#1B5E3B] px-4 text-white hover:bg-[#164D31]"
                onClick={() => onTestConnection?.(integration)}
              >
                {copy.testConnectionAction}
              </Button>
            </div>
          </div>

          <div className="rounded-2xl bg-[#EEF4FF] p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#DBEAFE] text-[#1D4ED8]">
                  <RefreshCw className="size-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">{copy.initialSyncTitle}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{copy.initialSyncDescription}</p>
                </div>
              </div>
              <Button
                type="button"
                size="sm"
                className="shrink-0 rounded-lg bg-[#1D4ED8] px-4 text-white hover:bg-[#1E40AF]"
                onClick={() => onSyncNow?.(integration)}
              >
                {copy.initialSyncAction}
              </Button>
            </div>
          </div>
        </SideDrawerBody>

        <SideDrawerFooter>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className={cn(drawerFooterButtonClassName, "border-neutral-200 bg-white hover:bg-neutral-50")}
            onClick={handleClose}
          >
            {copy.cancelLabel}
          </Button>
          <Button type="button" size="sm" className={drawerFooterButtonClassName} onClick={handleSave}>
            {copy.saveLabel}
          </Button>
        </SideDrawerFooter>
      </SideDrawerContent>
    </SideDrawer>
  )
}

IntegrationDrawer.displayName = "IntegrationDrawer"
