"use client"

import type { ReactNode } from "react"
import { Mail } from "lucide-react"

import { Button } from "@/shared/ui/button"
import { Checkbox } from "@/shared/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/shared/ui/field"
import { Input } from "@/shared/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { Switch } from "@/shared/ui/switch"
import { Textarea } from "@/shared/ui/textarea"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"
import { InfoTooltip } from "@/shared/ui/info-tooltip"

function LeadingTrailingInput({
  leading,
  trailing,
  placeholder,
  size = "md",
  rounded = "md",
}: {
  leading?: ReactNode
  trailing?: ReactNode
  placeholder: string
  size?: "sm" | "md" | "lg"
  rounded?: "md" | "lg" | "full"
}) {
  const sizeClass = size === "sm" ? "h-9 text-xs" : size === "lg" ? "h-12 text-[15px]" : "h-11 text-sm"
  const roundedClass = rounded === "full" ? "rounded-full" : rounded === "lg" ? "rounded-lg" : "rounded-md"

  return (
    <div className={`flex items-center border border-input bg-white px-2.5 shadow-xs focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/30 ${sizeClass} ${roundedClass}`}>
      {leading ? <span className="mr-2 inline-flex shrink-0 items-center text-muted-foreground">{leading}</span> : null}
      <input
        placeholder={placeholder}
        className="h-full w-full min-w-0 border-0 bg-transparent text-sm text-a7-text-gray outline-none placeholder:text-muted-foreground"
      />
      {trailing ? <span className="ml-2 inline-flex shrink-0 items-center text-muted-foreground">{trailing}</span> : null}
    </div>
  )
}

export default function InputsDocsPage() {
  return (
    <div className="mx-auto  p-6 md:p-8">
      <header className="mb-10 max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight font-heading">Inputs</h1>
        <p className="mt-2 text-muted-foreground">
          Input and form  <code className="rounded bg-muted px-1 py-0.5 text-xs">Field</code> composition. Includes your
          full field demos (payment, profile, input, textarea, select, switch).
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import { Input } from "@/shared/ui/input"
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel } from "@/shared/ui/field"`}</CodeBlock>
        </section>

        <DemoBlock
          title="Input size + rounded variants"
          description="Use `size` (`sm`, `md`, `lg`) and `rounded` (`md`, `lg`, `full`) for shape control."
          code={`<Input inputSize="sm" radius="md" placeholder="Small / rounded-md" />
<Input inputSize="md" radius="lg" placeholder="Default / rounded-lg" />
<Input inputSize="lg" radius="full" placeholder="Large / rounded-full" />`}
        >
          <div className="grid w-full max-w-xl gap-3">
            <Input inputSize="sm" radius="md" placeholder="Small / rounded-md" />
            <Input inputSize="md" radius="lg" placeholder="Default / rounded-lg" />
            <Input inputSize="lg" radius="full" placeholder="Large / rounded-full" />
          </div>
        </DemoBlock>

        <DemoBlock
          title="Input with icon (start / end)"
          description="Pass `icon` and `iconPosition` (`start` = left, `end` = right in LTR). Same `Input` API as size/radius variants."
          code={`<Input
  inputSize="md"
  radius="lg"
  placeholder="john@website.com"
  icon={<Mail className="size-4" />}
  iconPosition="start"
/>

<Input
  placeholder="Search"
  icon={<Search className="size-4" />}
  iconPosition="end"
/>`}
        >
          <div className="grid w-full max-w-md gap-3">
            <Field orientation="vertical">
              <FieldLabel htmlFor="docs-icon-email-start">Icon start (left)</FieldLabel>
              <Input
                id="docs-icon-email-start"
                radius="lg"
                placeholder="john@website.com"
                icon={<Mail className="size-4" />}
                iconPosition="start"
              />
            </Field>
            <Field orientation="vertical">
              <FieldLabel htmlFor="docs-icon-email-end">Icon end (right)</FieldLabel>
              <Input
                id="docs-icon-email-end"
                radius="lg"
                placeholder="Search"
                icon={<Mail className="size-4" />}
                iconPosition="end"
              />
            </Field>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Extended row (url + card number)"
          description="Second screenshot style with protocol/domain split and card prefix marker."
          code={`<FieldGroup className="grid w-full grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3">
  <LeadingTrailingInput leading={<span>https://</span>} placeholder="www.a7groupui.com" trailing={<InfoTooltip trigger="compact" icon="help" className="opacity-50" ariaLabel="Website help" />} />
  <LeadingTrailingInput leading={<span className="inline-flex gap-1"><span className="size-2 rounded-full bg-red-500" /><span className="size-2 rounded-full bg-yellow-400" /></span>} placeholder="card number" trailing={<InfoTooltip trigger="compact" icon="help" className="opacity-50" ariaLabel="Card number help" />} />
</FieldGroup>`}
        >
          <FieldGroup className="grid w-full grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3">
            <Field orientation="vertical">
              <LeadingTrailingInput
                leading={<span className="text-xs text-muted-foreground">https://</span>}
                placeholder="www.a7groupui.com"
                trailing={<InfoTooltip trigger="compact" icon="help" className="opacity-50" ariaLabel="Website help" />}
              />
            </Field>
            <Field orientation="vertical">
              <LeadingTrailingInput
                leading={
                  <span className="inline-flex items-center gap-1">
                    <span className="size-2 rounded-full bg-[#EA4335]" />
                    <span className="size-2 rounded-full bg-[#FBBC05]" />
                  </span>
                }
                placeholder="card number"
                trailing={<InfoTooltip trigger="compact" icon="help" className="opacity-50" ariaLabel="Card number help" />}
              />
            </Field>
          </FieldGroup>
        </DemoBlock>

        <DemoBlock
          title="Payment Method (Field demo)"
          description="Complete payment and billing form using FieldSet, FieldLegend, Select, Checkbox, Textarea, and actions."
          code={`<FieldSet>
  <FieldLegend>Payment Method</FieldLegend>
  <FieldDescription>All transactions are secure and encrypted</FieldDescription>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="card-name">Name on Card</FieldLabel>
      <Input id="card-name" placeholder="Evil Rabbit" />
    </Field>
    <Field>
      <FieldLabel htmlFor="card-number">Card Number</FieldLabel>
      <Input id="card-number" placeholder="1234 5678 9012 3456" />
      <FieldDescription>Enter your 16-digit card number</FieldDescription>
    </Field>
  </FieldGroup>
</FieldSet>`}
        >
          <div className="w-full max-w-md">
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Payment Method</FieldLegend>
                <FieldDescription>All transactions are secure and encrypted</FieldDescription>
                <FieldGroup>
                  <Field orientation="vertical">
                    <FieldLabel htmlFor="checkout-card-name">Name on Card</FieldLabel>
                    <Input id="checkout-card-name" placeholder="Evil Rabbit" required />
                  </Field>
                  <Field orientation="vertical">
                    <FieldLabel htmlFor="checkout-card-number">Card Number</FieldLabel>
                    <Input id="checkout-card-number" placeholder="1234 5678 9012 3456" required />
                    <FieldDescription>Enter your 16-digit card number</FieldDescription>
                  </Field>
                  <div className="grid grid-cols-3 gap-4">
                    <Field orientation="vertical">
                      <FieldLabel htmlFor="checkout-exp-month">Month</FieldLabel>
                      <Select>
                        <SelectTrigger id="checkout-exp-month">
                          <SelectValue placeholder="MM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="01">01</SelectItem>
                            <SelectItem value="02">02</SelectItem>
                            <SelectItem value="03">03</SelectItem>
                            <SelectItem value="04">04</SelectItem>
                            <SelectItem value="05">05</SelectItem>
                            <SelectItem value="06">06</SelectItem>
                            <SelectItem value="07">07</SelectItem>
                            <SelectItem value="08">08</SelectItem>
                            <SelectItem value="09">09</SelectItem>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="11">11</SelectItem>
                            <SelectItem value="12">12</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field orientation="vertical">
                      <FieldLabel htmlFor="checkout-exp-year">Year</FieldLabel>
                      <Select>
                        <SelectTrigger id="checkout-exp-year">
                          <SelectValue placeholder="YYYY" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="2026">2026</SelectItem>
                            <SelectItem value="2027">2027</SelectItem>
                            <SelectItem value="2028">2028</SelectItem>
                            <SelectItem value="2029">2029</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field orientation="vertical">
                      <FieldLabel htmlFor="checkout-cvv">CVV</FieldLabel>
                      <Input id="checkout-cvv" placeholder="123" required />
                    </Field>
                  </div>
                </FieldGroup>
              </FieldSet>
              <FieldSeparator />
              <FieldSet>
                <FieldLegend>Billing Address</FieldLegend>
                <FieldDescription>The billing address associated with your payment method</FieldDescription>
                <FieldGroup>
                  <Field orientation="horizontal" className="sm:grid-cols-[auto_1fr]">
                    <Checkbox id="same-as-shipping" defaultChecked size="sm" />
                    <FieldLabel htmlFor="same-as-shipping" className="pt-0.5 font-normal">
                      Same as shipping address
                    </FieldLabel>
                  </Field>
                </FieldGroup>
              </FieldSet>
              <FieldSet>
                <FieldGroup>
                  <Field orientation="vertical">
                    <FieldLabel htmlFor="comments">Comments</FieldLabel>
                    <Textarea id="comments" placeholder="Add any additional comments" className="resize-none" />
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Field orientation="horizontal" className="sm:grid-cols-[auto_auto]">
                <Button type="button" size="sm" label="Submit" />
                <Button type="button" variant="outline" size="sm" label="Cancel" />
              </Field>
            </FieldGroup>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Profile (with FieldError + Switch)"
          code={`<FieldSet>
  <FieldLegend>Profile</FieldLegend>
  <FieldDescription>This appears on invoices and emails.</FieldDescription>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" aria-invalid />
      <FieldError>Choose another username.</FieldError>
    </Field>
    <Field orientation="horizontal">
      <Switch id="newsletter" />
      <FieldLabel htmlFor="newsletter">Subscribe to the newsletter</FieldLabel>
    </Field>
  </FieldGroup>
</FieldSet>`}
        >
          <FieldSet className="w-full max-w-md">
            <FieldLegend>Profile</FieldLegend>
            <FieldDescription>This appears on invoices and emails.</FieldDescription>
            <FieldGroup>
              <Field orientation="vertical">
                <FieldLabel htmlFor="profile-name">Full name</FieldLabel>
                <Input id="profile-name" autoComplete="off" placeholder="Evil Rabbit" />
                <FieldDescription>This appears on invoices and emails.</FieldDescription>
              </Field>
              <Field orientation="vertical">
                <FieldLabel htmlFor="profile-username">Username</FieldLabel>
                <Input id="profile-username" autoComplete="off" aria-invalid placeholder="evil_rabbit" />
                <FieldError>Choose another username.</FieldError>
              </Field>
              <Field orientation="horizontal" className="sm:grid-cols-[auto_1fr]">
                <Switch id="newsletter" />
                <FieldContent>
                  <FieldLabel htmlFor="newsletter">Subscribe to the newsletter</FieldLabel>
                </FieldContent>
              </Field>
            </FieldGroup>
          </FieldSet>
        </DemoBlock>

        <DemoBlock
          title="Field Input"
          code={`<FieldSet className="w-full max-w-xs">
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" type="text" placeholder="Max Leiter" />
      <FieldDescription>Choose a unique username for your account.</FieldDescription>
    </Field>
  </FieldGroup>
</FieldSet>`}
        >
          <FieldSet className="w-full max-w-xs">
            <FieldGroup>
              <Field orientation="vertical">
                <FieldLabel htmlFor="username-input">Username</FieldLabel>
                <Input id="username-input" type="text" placeholder="Max Leiter" />
                <FieldDescription>Choose a unique username for your account.</FieldDescription>
              </Field>
              <Field orientation="vertical">
                <FieldLabel htmlFor="password-input">Password</FieldLabel>
                <FieldDescription>Must be at least 8 characters long.</FieldDescription>
                <Input id="password-input" type="password" placeholder="••••••••" />
              </Field>
            </FieldGroup>
          </FieldSet>
        </DemoBlock>

        <DemoBlock
          title="Field Textarea"
          code={`<FieldSet className="w-full max-w-xs">
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
      <Textarea id="feedback" rows={4} />
      <FieldDescription>Share your thoughts about our service.</FieldDescription>
    </Field>
  </FieldGroup>
</FieldSet>`}
        >
          <FieldSet className="w-full max-w-xs">
            <FieldGroup>
              <Field orientation="vertical">
                <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
                <Textarea id="feedback" placeholder="Your feedback helps us improve..." rows={4} />
                <FieldDescription>Share your thoughts about our service.</FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>
        </DemoBlock>

        <DemoBlock
          title="Field Select"
          code={`<Field className="w-full max-w-xs" orientation="vertical">
  <FieldLabel>Department</FieldLabel>
  <Select>
    <SelectTrigger><SelectValue placeholder="Choose department" /></SelectTrigger>
  </Select>
  <FieldDescription>Select your department or area of work.</FieldDescription>
</Field>`}
        >
          <Field className="w-full max-w-xs" orientation="vertical">
            <FieldLabel>Department</FieldLabel>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose department" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="support">Customer Support</SelectItem>
                  <SelectItem value="hr">Human Resources</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FieldDescription>Select your department or area of work.</FieldDescription>
          </Field>
        </DemoBlock>
      </div>
    </div>
  )
}
