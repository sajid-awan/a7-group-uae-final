"use client"

import type { ReactNode } from "react"
import { Mail, Phone, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/shared/ui/button"
import { Field, FieldLabel } from "@/shared/ui/field"
import { Input } from "@/shared/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"
import { Textarea } from "@/shared/ui/textarea"
import { cn } from "@/shared/lib/cn"

export type MarketingContactChannel = {
  label: string
  value: string
  href: string
}

export type MarketingContactSectionProps = {
  sectionId?: string
  heading: string
  intro: string
  whatsApp: MarketingContactChannel
  phone: MarketingContactChannel
  email: MarketingContactChannel
  languageOptions?: readonly { value: string; label: string }[]
  showLanguageField?: boolean
  submitLabel?: string
  formIdPrefix?: string
  className?: string
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode
  label: string
  value: string
  href: string
}) {
  return (
    <a
      href={href}
      className="flex items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4 transition-colors hover:bg-white/95 md:px-6 md:py-5"
    >
      <span className="min-w-0 flex-1">
        <span className="block text-base font-bold leading-snug text-a7-black md:text-lg">{value}</span>
        <span className="mt-1 block text-sm text-a7-text-gray">{label}</span>
      </span>
      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#FFFBEB] text-a7-black">
        {icon}
      </span>
    </a>
  )
}

const contactCardIconClass = "size-5 stroke-[1.75]"

function WhatsAppHandsetIcon() {
  return <Phone className={contactCardIconClass} aria-hidden />
}

function PhoneMobileIcon() {
  return <Smartphone className={contactCardIconClass} aria-hidden />
}

function EmailIcon() {
  return <Mail className={contactCardIconClass} aria-hidden />
}

export function MarketingContactSection({
  sectionId = "contact",
  heading,
  intro,
  whatsApp,
  phone,
  email,
  languageOptions = [],
  showLanguageField = true,
  submitLabel = "Submit Details",
  formIdPrefix = "marketing",
  className,
}: MarketingContactSectionProps) {
  const headingId = `${formIdPrefix}-contact-heading`
  const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
  const VIEWPORT = { once: true, amount: 0.12 as const }

  return (
    <section
      id={sectionId}
      className={cn("scroll-mt-24 bg-a7-surface py-12 md:py-16", className)}
      aria-labelledby={headingId}
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-4">
          <motion.div
            className="rounded-2xl bg-white p-6 shadow-sm md:p-8"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <Field orientation="vertical">
                <FieldLabel htmlFor={`${formIdPrefix}-name`}>Name</FieldLabel>
                <Input
                  id={`${formIdPrefix}-name`}
                  name="name"
                  radius="lg"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </Field>
              <Field orientation="vertical">
                <FieldLabel htmlFor={`${formIdPrefix}-email`}>Email</FieldLabel>
                <Input
                  id={`${formIdPrefix}-email`}
                  name="email"
                  type="email"
                  radius="lg"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </Field>
              <Field orientation="vertical">
                <FieldLabel htmlFor={`${formIdPrefix}-phone`}>Phone</FieldLabel>
                <Input
                  id={`${formIdPrefix}-phone`}
                  name="phone"
                  type="tel"
                  radius="lg"
                  placeholder="+971 50 000 0000"
                  autoComplete="tel"
                />
              </Field>
              {showLanguageField && languageOptions.length > 0 ? (
                <Field orientation="vertical">
                  <FieldLabel htmlFor={`${formIdPrefix}-language`}>Preferred Language</FieldLabel>
                  <Select name="language" defaultValue={languageOptions[0]?.value}>
                    <SelectTrigger id={`${formIdPrefix}-language`} radius="lg" className="w-full">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      {languageOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              ) : null}
              <Field orientation="vertical">
                <FieldLabel htmlFor={`${formIdPrefix}-message`}>Message</FieldLabel>
                <Textarea
                  id={`${formIdPrefix}-message`}
                  name="message"
                  placeholder="Tell us how we can help"
                  className="min-h-32 rounded-lg"
                />
              </Field>
              <Button type="submit" variant="default" shape="pill" className="mt-2 h-12 w-full text-sm font-semibold">
                {submitLabel}
              </Button>
            </form>
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.h2
              id={headingId}
              className="font-heading text-[clamp(1.35rem,3vw,2rem)] font-semibold leading-snug tracking-tight text-a7-black"
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            >
              {heading}
            </motion.h2>
            <motion.p
              className="mt-3 max-w-md text-sm leading-relaxed text-a7-text-gray md:text-base"
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, ease: EASE, delay: 0.22 }}
            >
              {intro}
            </motion.p>
            <div className="mt-8 flex flex-col gap-3 md:gap-4 max-w-lg">
              <motion.div
                initial={{ opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.75, ease: EASE, delay: 0.34 }}
              >
                <ContactCard
                  label={whatsApp.label}
                  value={whatsApp.value}
                  href={whatsApp.href}
                  icon={<WhatsAppHandsetIcon />}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.75, ease: EASE, delay: 0.44 }}
              >
                <ContactCard
                  label={phone.label}
                  value={phone.value}
                  href={phone.href}
                  icon={<PhoneMobileIcon />}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.75, ease: EASE, delay: 0.54 }}
              >
                <ContactCard
                  label={email.label}
                  value={email.value}
                  href={email.href}
                  icon={<EmailIcon />}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
