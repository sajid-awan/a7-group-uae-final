"use client"

import { Copy, Download, Eye, MoreVertical, Pencil, Plus, RefreshCw } from "lucide-react"
import { useMemo, useState } from "react"

import { AddFormDrawer } from "./add-form-drawer"
import { UpdateFormDrawer } from "./update-form-drawer"
import {
  FORM_CONFIGURATION_LEAD_SOURCE_CLASSNAMES,
  FORM_CONFIGURATION_LEAD_SOURCE_LABELS,
  FORM_CONFIGURATIONS_DRAWER_COPY,
  FORM_CONFIGURATIONS_MOCK_DATA,
  FORM_CONFIGURATIONS_PAGE_SIZE,
  FORM_UPDATE_NAME_OPTIONS,
  type FormAddFormValues,
  type FormConfigurationLeadSource,
  type FormConfigurationRecord,
  type FormUpdateFormValues,
} from "../content/form-configurations-content"
import { cn } from "@/shared/lib/cn"
import { DashboardToolbarIconButton } from "@/features/dashboard/components/dashboard-toolbar-icon-button"
import { Button } from "@/shared/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"
import {
  SideDrawer,
  SideDrawerBody,
  SideDrawerContent,
  SideDrawerFooter,
  SideDrawerHeader,
} from "@/shared/ui/drawer"
import { Input } from "@/shared/ui/input"
import { ListingPagination } from "@/shared/ui/listing-pagination"
import { Switch } from "@/shared/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"

const formConfigControlHeightClassName = "h-11 min-h-11"
const drawerFooterButtonClassName = cn(formConfigControlHeightClassName, "rounded-xl shadow-none")
const toolbarIconButtonClassName = cn(
  formConfigControlHeightClassName,
  "w-11 min-w-11 rounded-xl border border-neutral-200 bg-white text-neutral-600 shadow-none hover:bg-neutral-50"
)

function CopyValueButton({ value, label }: { value: string; label: string }) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="xs"
      className="!h-6 !min-h-6 !w-6 !min-w-6 shrink-0 rounded-md p-0 text-neutral-400"
      aria-label={label}
      onClick={() => {
        void navigator.clipboard?.writeText(value)
      }}
    >
      <Copy className="size-3" aria-hidden />
    </Button>
  )
}

function FormConfigurationActionsMenu({
  form,
  onEdit,
}: {
  form: FormConfigurationRecord
  onEdit: (form: FormConfigurationRecord) => void
}) {
  const copy = FORM_CONFIGURATIONS_DRAWER_COPY.actions

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon-xs"
          className="size-7 text-neutral-500"
          aria-label={`Actions for ${form.formName}`}
        >
          <MoreVertical className="size-3.5" aria-hidden />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-48">
        <DropdownMenuItem onClick={() => onEdit(form)}>
          <Pencil className="size-4" aria-hidden />
          {copy.edit}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Eye className="size-4" aria-hidden />
          {copy.viewLeads}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export type FormConfigurationsDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  className?: string
}

export function FormConfigurationsDrawer({ open, onOpenChange, className }: FormConfigurationsDrawerProps) {
  const copy = FORM_CONFIGURATIONS_DRAWER_COPY
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [forms, setForms] = useState(FORM_CONFIGURATIONS_MOCK_DATA)
  const [addFormOpen, setAddFormOpen] = useState(false)
  const [updateFormOpen, setUpdateFormOpen] = useState(false)
  const [editingForm, setEditingForm] = useState<FormConfigurationRecord | null>(null)

  const filteredForms = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return forms

    return forms.filter(
      (form) =>
        form.formName.toLowerCase().includes(query) ||
        form.token.toLowerCase().includes(query) ||
        form.refNo.toLowerCase().includes(query)
    )
  }, [forms, search])

  const pageCount = Math.max(1, Math.ceil(filteredForms.length / FORM_CONFIGURATIONS_PAGE_SIZE))
  const safePage = Math.min(page, pageCount)
  const visibleForms = filteredForms.slice(
    (safePage - 1) * FORM_CONFIGURATIONS_PAGE_SIZE,
    safePage * FORM_CONFIGURATIONS_PAGE_SIZE
  )

  const handleClose = () => onOpenChange(false)

  const toggleActive = (formId: string, active: boolean) => {
    setForms((current) =>
      current.map((form) => (form.id === formId ? { ...form, active } : form))
    )
  }

  const handleAddFormSave = (values: FormAddFormValues) => {
    const leadSource = (
      values.leadSource !== "none" ? values.leadSource : "sell"
    ) as FormConfigurationLeadSource

    setForms((current) => [
      {
        id: `form-${Date.now()}`,
        formName: values.name || "Untitled Form",
        token: "55b3e0f1-ab0a-4a1e",
        totalLeads: 0,
        refNo: "PL-200643",
        leadSource,
        apiKey: "wh_l........f660",
        createdLabel: "Just now",
        active: true,
      },
      ...current,
    ])
    setPage(1)
  }

  const handleEditForm = (form: FormConfigurationRecord) => {
    setEditingForm(form)
    setUpdateFormOpen(true)
  }

  const handleUpdateFormOpenChange = (open: boolean) => {
    setUpdateFormOpen(open)
    if (!open) {
      setEditingForm(null)
    }
  }

  const handleUpdateFormSave = (values: FormUpdateFormValues) => {
    if (!editingForm) return

    const leadSource = values.leadSource as FormConfigurationLeadSource
    const formName =
      FORM_UPDATE_NAME_OPTIONS.find((option) => option.value === values.name)?.label ?? editingForm.formName

    setForms((current) =>
      current.map((form) =>
        form.id === editingForm.id
          ? {
              ...form,
              formName,
              leadSource,
              token: values.token.slice(0, 20),
            }
          : form
      )
    )
  }

  return (
    <>
    <SideDrawer open={open} onOpenChange={onOpenChange} dismissible={false}>
      <SideDrawerContent size="xl" className={className}>
        <SideDrawerHeader
          title={copy.title}
          description={copy.subtitle}
          onClose={handleClose}
          closeLabel="Close form configurations drawer"
          headerAction={
            <Button
              type="button"
              size="sm"
              className={cn(
                formConfigControlHeightClassName,
                "gap-2 rounded-xl bg-[#8B6E4E] px-4 text-white hover:bg-[#7A6044]"
              )}
              onClick={() => setAddFormOpen(true)}
            >
              <Plus className="size-4" aria-hidden />
              {copy.addButtonLabel}
            </Button>
          }
        />

        <SideDrawerBody className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="min-w-[220px] flex-1">
              <Input
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value)
                  setPage(1)
                }}
                placeholder={copy.searchPlaceholder}
                aria-label={copy.searchAriaLabel}
                inputSize="md"
                radius="lg"
                className={cn(
                  formConfigControlHeightClassName,
                  "rounded-xl border-neutral-200 bg-white text-sm shadow-none"
                )}
              />
            </div>
            <DashboardToolbarIconButton label="Download" className={toolbarIconButtonClassName}>
              <Download className="size-4" aria-hidden />
            </DashboardToolbarIconButton>
            <DashboardToolbarIconButton label="Refresh" className={toolbarIconButtonClassName}>
              <RefreshCw className="size-4" aria-hidden />
            </DashboardToolbarIconButton>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="min-w-[180px] text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {copy.columns.formNameToken}
                  </TableHead>
                  <TableHead className="min-w-[160px] text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {copy.columns.totalLeadsRefNo}
                  </TableHead>
                  <TableHead className="min-w-[220px] text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {copy.columns.leadSourceApiKey}
                  </TableHead>
                  <TableHead className="min-w-[100px] text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {copy.columns.created}
                  </TableHead>
                  <TableHead className="min-w-[120px] text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {copy.columns.active}
                  </TableHead>
                  <TableHead className="w-[48px]" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {visibleForms.map((form) => (
                  <TableRow key={form.id}>
                    <TableCell>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-neutral-900">{form.formName}</p>
                        <div className="flex items-center gap-1">
                          <p className="truncate text-xs text-muted-foreground">{form.token}</p>
                          <CopyValueButton value={form.token} label={`Copy ${form.formName} token`} />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <p className="text-sm text-neutral-900">{form.totalLeads}</p>
                        <div className="flex items-center gap-1">
                          <p className="truncate text-xs text-muted-foreground">{form.refNo}</p>
                          <CopyValueButton value={form.refNo} label={`Copy ${form.formName} reference number`} />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        <span
                          className={cn(
                            "inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium",
                            FORM_CONFIGURATION_LEAD_SOURCE_CLASSNAMES[form.leadSource]
                          )}
                        >
                          {FORM_CONFIGURATION_LEAD_SOURCE_LABELS[form.leadSource]}
                        </span>
                        <div className="flex items-center gap-1">
                          <p className="truncate text-xs text-muted-foreground">{form.apiKey}</p>
                          <CopyValueButton value={form.apiKey} label={`Copy ${form.formName} API key`} />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{form.createdLabel}</TableCell>
                    <TableCell>
                      <Switch
                        checked={form.active}
                        onCheckedChange={(checked) => toggleActive(form.id, checked === true)}
                        aria-label={`Toggle ${form.formName} active state`}
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      <FormConfigurationActionsMenu form={form} onEdit={handleEditForm} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <ListingPagination page={safePage} pageCount={pageCount} onPageChange={setPage} />
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
            onClick={handleClose}
          >
            {copy.saveLabel}
          </Button>
        </SideDrawerFooter>
      </SideDrawerContent>
    </SideDrawer>

    <AddFormDrawer open={addFormOpen} onOpenChange={setAddFormOpen} onSave={handleAddFormSave} />
    <UpdateFormDrawer
      open={updateFormOpen}
      onOpenChange={handleUpdateFormOpenChange}
      form={editingForm}
      onSave={handleUpdateFormSave}
    />
    </>
  )
}

FormConfigurationsDrawer.displayName = "FormConfigurationsDrawer"
