"use client"

import { Mail, Phone, User } from "lucide-react"

import { Field, FieldLabel } from "@/shared/ui/field"
import { Input } from "@/shared/ui/input"

export function PersonalInformationStep() {
  return (
    <div className="mt-7 space-y-4">
      <h2 className="text-xl font-semibold leading-tight text-a7-text-gray sm:text-[26px]">
        Tell us about yourself
      </h2>
      <Field orientation="vertical">
        <FieldLabel htmlFor="sp-full-name">Full Name</FieldLabel>
        <Input id="sp-full-name" radius="lg" placeholder="John Doe" icon={<User className="size-4" />} iconPosition="start" />
      </Field>
      <Field orientation="vertical">
        <FieldLabel htmlFor="sp-email">Email</FieldLabel>
        <Input id="sp-email" radius="lg" placeholder="john@website.com" icon={<Mail className="size-4" />} iconPosition="start" />
      </Field>
      <Field orientation="vertical">
        <FieldLabel htmlFor="sp-mobile">Mobile</FieldLabel>
        <Input id="sp-mobile" radius="lg" placeholder="+971 12345 546" icon={<Phone className="size-4" />} iconPosition="start" />
      </Field>
    </div>
  )
}
