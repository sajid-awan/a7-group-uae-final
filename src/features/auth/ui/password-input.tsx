"use client"

import { useState } from "react"

import { EyeIcon, EyeOffIcon } from "@/shared/icons"
import { Input } from "@/shared/ui/input"
import { Field, FieldContent, FieldLabel } from "@/shared/ui/field"
type PasswordInputProps = {
  id: string
  name?: string
  label: string
  placeholder?: string
  className?: string
  required?: boolean
}

export function PasswordInput({
  id,
  name,
  label,
  placeholder = "••••••••",
  className,
  required,
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false)

  return (
    <Field orientation="vertical" className={className}>
      <FieldContent>
        <FieldLabel htmlFor={id}>{label}</FieldLabel>
        <div className="relative">
          <Input
            id={id}
            name={name ?? id}
            type={visible ? "text" : "password"}
            placeholder={placeholder}
            inputSize="lg"
            radius="md"
            className="pr-10"
            required={required}
            autoComplete={id.includes("confirm") ? "new-password" : "current-password"}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-a7-text-gray/70 transition-colors hover:text-a7-text-gray"
            aria-label={visible ? "Hide password" : "Show password"}
            onClick={() => setVisible((v) => !v)}
          >
            {visible ? <EyeOffIcon className="size-4" /> : <EyeIcon className="size-4" />}
          </button>
        </div>
      </FieldContent>
    </Field>
  )
}
