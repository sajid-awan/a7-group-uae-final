"use client"

import { useEffect, useState } from "react"

import {
  createEmptyAddFormValues,
  FORM_ADD_AGENT_OPTIONS,
  FORM_ADD_FORM_DRAWER_COPY,
  FORM_ADD_LEAD_SOURCE_OPTIONS,
  FORM_ADD_PROPERTY_OPTIONS,
  FORM_ADD_PURPOSE_OPTIONS,
  type FormAddFormValues,
} from "../content/form-configurations-content"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import {
  SideDrawer,
  SideDrawerBody,
  SideDrawerContent,
  SideDrawerFooter,
  SideDrawerHeader,
} from "@/shared/ui/drawer"
import { FormInputField, FormSelectField } from "@/shared/ui/form-field"

const formConfigControlHeightClassName = "h-11 min-h-11"
const drawerFooterButtonClassName = cn(formConfigControlHeightClassName, "rounded-xl shadow-none")

export type AddFormDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave?: (values: FormAddFormValues) => void
  className?: string
}

export function AddFormDrawer({ open, onOpenChange, onSave, className }: AddFormDrawerProps) {
  const copy = FORM_ADD_FORM_DRAWER_COPY
  const [form, setForm] = useState<FormAddFormValues>(createEmptyAddFormValues)

  useEffect(() => {
    if (open) {
      setForm(createEmptyAddFormValues())
    }
  }, [open])

  const updateForm = (patch: Partial<FormAddFormValues>) => {
    setForm((current) => ({ ...current, ...patch }))
  }

  const handleClose = () => onOpenChange(false)

  const handleSave = () => {
    onSave?.(form)
    onOpenChange(false)
  }

  return (
    <SideDrawer open={open} onOpenChange={onOpenChange} dismissible={false}>
      <SideDrawerContent size="md" className={className}>
        <SideDrawerHeader
          title={copy.title}
          description={copy.description}
          onClose={handleClose}
          closeLabel="Close add form drawer"
        />

        <SideDrawerBody>
          <div className="space-y-4">
            <FormInputField
              label={copy.fields.name}
              value={form.name}
              placeholder={copy.placeholders.name}
              required
              onValueChange={(name) => updateForm({ name })}
            />
            <FormSelectField
              label={copy.fields.leadSource}
              value={form.leadSource}
              options={FORM_ADD_LEAD_SOURCE_OPTIONS}
              placeholder={copy.placeholders.select}
              required
              onValueChange={(leadSource) => updateForm({ leadSource })}
            />
            <FormSelectField
              label={copy.fields.agent}
              value={form.agent}
              options={FORM_ADD_AGENT_OPTIONS}
              placeholder={copy.placeholders.select}
              onValueChange={(agent) => updateForm({ agent })}
            />
            <FormSelectField
              label={copy.fields.searchByPurpose}
              value={form.searchByPurpose}
              options={FORM_ADD_PURPOSE_OPTIONS}
              placeholder={copy.placeholders.select}
              onValueChange={(searchByPurpose) => updateForm({ searchByPurpose })}
            />
            <FormSelectField
              label={copy.fields.searchProperty}
              value={form.searchProperty}
              options={FORM_ADD_PROPERTY_OPTIONS}
              placeholder={copy.placeholders.select}
              onValueChange={(searchProperty) => updateForm({ searchProperty })}
            />
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
          <Button
            type="button"
            size="sm"
            className={cn(drawerFooterButtonClassName, "bg-[#8B6E4E] text-white hover:bg-[#7A6044]")}
            onClick={handleSave}
          >
            {copy.saveLabel}
          </Button>
        </SideDrawerFooter>
      </SideDrawerContent>
    </SideDrawer>
  )
}

AddFormDrawer.displayName = "AddFormDrawer"
