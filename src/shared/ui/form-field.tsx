"use client"

import { useState, type ReactNode } from "react"

import { EyeIcon, EyeOffIcon } from "@/shared/icons"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import { DatePicker } from "@/shared/ui/date-picker"
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/shared/ui/field"
import { Input } from "@/shared/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"
import { Textarea } from "@/shared/ui/textarea"
import { formControlTypographyClassName } from "@/shared/ui/form-control-styles"
import { TimePicker } from "@/shared/ui/time-picker"

const formControlClassName = cn(
  "h-11 min-h-11 w-full rounded-xl border-neutral-200 bg-white shadow-none",
  formControlTypographyClassName
)

const formTextareaClassName = cn(
  "min-h-28 rounded-xl border-neutral-200 bg-white shadow-none",
  formControlTypographyClassName
)

export function FormInputField({
  label,
  value,
  onValueChange,
  placeholder,
  type = "text",
  required,
  id,
  className,
  icon,
  iconPosition,
  description,
}: {
  label: string
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  type?: string
  required?: boolean
  id?: string
  className?: string
  icon?: ReactNode
  iconPosition?: "start" | "end"
  description?: string
}) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-")

  return (
    <Field orientation="vertical" className={className}>
      <FieldLabel htmlFor={fieldId}>
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </FieldLabel>
      <FieldContent>
        <Input
          id={fieldId}
          type={type}
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
          placeholder={placeholder}
          inputSize="md"
          radius="lg"
          icon={icon}
          iconPosition={iconPosition}
          className={formControlClassName}
          required={required}
        />
        {description ? <FieldDescription>{description}</FieldDescription> : null}
      </FieldContent>
    </Field>
  )
}

export function FormInputActionField({
  label,
  value,
  onValueChange,
  placeholder,
  actionLabel,
  actionIcon,
  onAction,
  required,
  id,
  className,
}: {
  label: string
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  actionLabel: string
  actionIcon?: ReactNode
  onAction?: () => void
  required?: boolean
  id?: string
  className?: string
}) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-")

  return (
    <Field orientation="vertical" className={cn("w-full min-w-0", className)}>
      <FieldLabel htmlFor={fieldId}>
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </FieldLabel>
      <FieldContent>
        <div className="flex w-full min-w-0 items-stretch">
          <Input
            id={fieldId}
            value={value}
            onChange={(event) => onValueChange(event.target.value)}
            placeholder={placeholder}
            inputSize="md"
            radius="lg"
            required={required}
            className={cn(
              formControlClassName,
              "min-w-0 flex-1 rounded-e-none rounded-s-xl focus-visible:z-10"
            )}
          />
          <Button
            type="button"
            variant="outline"
            iconLeft={actionIcon}
            label={actionLabel}
            className="h-11 min-h-11 shrink-0 self-stretch rounded-s-none rounded-e-xl border-neutral-200 border-l-0 bg-white px-4 py-0 text-sm font-medium text-a7-text-gray shadow-none hover:bg-white hover:text-a7-text-gray"
            onClick={onAction}
          />
        </div>
      </FieldContent>
    </Field>
  )
}

export function FormSelectField({
  label,
  value,
  onValueChange,
  options,
  placeholder = "Select",
  required,
  id,
  className,
}: {
  label: string
  value: string
  onValueChange: (value: string) => void
  options: Array<{ value: string; label: string }>
  placeholder?: string
  required?: boolean
  id?: string
  className?: string
}) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-")

  return (
    <Field orientation="vertical" className={className}>
      <FieldLabel htmlFor={fieldId}>
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </FieldLabel>
      <FieldContent>
        <Select value={value} onValueChange={onValueChange}>
          <SelectTrigger id={fieldId} inputSize="md" radius="lg" className={formControlClassName}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldContent>
    </Field>
  )
}

export function FormTextareaField({
  label,
  value,
  onValueChange,
  placeholder,
  required,
  id,
  className,
}: {
  label: string
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  required?: boolean
  id?: string
  className?: string
}) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-")

  return (
    <Field orientation="vertical" className={className}>
      <FieldLabel htmlFor={fieldId}>
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </FieldLabel>
      <FieldContent>
        <Textarea
          id={fieldId}
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
          placeholder={placeholder}
          className={formTextareaClassName}
          required={required}
        />
      </FieldContent>
    </Field>
  )
}

export function FormPriceField({
  label,
  value,
  onValueChange,
  required,
  id,
  className,
}: {
  label: string
  value: string
  onValueChange: (value: string) => void
  required?: boolean
  id?: string
  className?: string
}) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-")

  return (
    <Field orientation="vertical" className={className}>
      <FieldLabel htmlFor={fieldId}>
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </FieldLabel>
      <FieldContent>
        <div className="flex overflow-hidden rounded-xl border border-neutral-200 bg-white">
          <span className="flex h-11 min-h-11 items-center border-r border-neutral-200 px-3 text-sm text-muted-foreground">
            AED
          </span>
          <Input
            id={fieldId}
            value={value}
            onChange={(event) => onValueChange(event.target.value)}
            inputSize="md"
            className={cn(formControlClassName, "border-0 focus-visible:ring-0")}
            inputMode="numeric"
            required={required}
          />
        </div>
      </FieldContent>
    </Field>
  )
}

export function FormDateField({
  label,
  value,
  onValueChange,
  placeholder = "dd/mm/yyyy",
  required,
  className,
}: {
  label: string
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  required?: boolean
  className?: string
}) {
  return (
    <Field orientation="vertical" className={className}>
      <FieldLabel>
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </FieldLabel>
      <FieldContent>
        <DatePicker
          value={value}
          onChange={onValueChange}
          placeholder={placeholder}
          className="w-full"
        />
      </FieldContent>
    </Field>
  )
}

export function FormTimeField({
  label,
  value,
  onValueChange,
  placeholder = "Pick a Time",
  required,
  className,
}: {
  label: string
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  required?: boolean
  className?: string
}) {
  return (
    <Field orientation="vertical" className={className}>
      <FieldLabel>
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </FieldLabel>
      <FieldContent>
        <TimePicker
          value={value}
          onChange={onValueChange}
          placeholder={placeholder}
          className="w-full"
        />
      </FieldContent>
    </Field>
  )
}

export function FormPasswordField({
  label,
  value,
  onValueChange,
  placeholder = "••••••••",
  required,
  id,
  className,
}: {
  label: string
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  required?: boolean
  id?: string
  className?: string
}) {
  const [visible, setVisible] = useState(false)
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-")

  return (
    <Field orientation="vertical" className={className}>
      <FieldLabel htmlFor={fieldId}>
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </FieldLabel>
      <FieldContent>
        <div className="relative">
          <Input
            id={fieldId}
            type={visible ? "text" : "password"}
            value={value}
            onChange={(event) => onValueChange(event.target.value)}
            placeholder={placeholder}
            inputSize="md"
            radius="lg"
            className={cn(formControlClassName, "pr-10")}
            autoComplete="new-password"
            required={required}
          />
          <button
            type="button"
            className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label={visible ? "Hide password" : "Show password"}
            onClick={() => setVisible((current) => !current)}
          >
            {visible ? <EyeOffIcon className="size-4" /> : <EyeIcon className="size-4" />}
          </button>
        </div>
      </FieldContent>
    </Field>
  )
}

export { formControlClassName, formTextareaClassName }
export { formControlTypographyClassName } from "@/shared/ui/form-control-styles"
