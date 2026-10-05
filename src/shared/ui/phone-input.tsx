"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import ReactPhoneInput, { type CountryData } from "react-phone-input-2"
import { cva, type VariantProps } from "class-variance-authority"
import { Check } from "lucide-react"

import { cn } from "@/shared/lib/cn"
import { Field, FieldContent, FieldLabel } from "@/shared/ui/field"
import { Select, SelectContent, SelectTrigger } from "@/shared/ui/select"

import "react-phone-input-2/lib/plain.css"

const phoneInputLabels: Record<string, string> = {
  ae: "UAE",
  pk: "Pakistan",
  sa: "Saudi Arabia",
  in: "India",
  gb: "United Kingdom",
  us: "United States",
}

const phoneInputVariants = cva(
  "flex w-full min-w-0 items-stretch overflow-visible border border-input bg-white shadow-xs transition-[color,box-shadow,border-color] focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/30 has-[:disabled]:pointer-events-none has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50",
  {
    variants: {
      inputSize: {
        sm: "h-10",
        md: "h-11",
        lg: "h-12",
      },
      radius: {
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      inputSize: "md",
      radius: "md",
    },
  }
)

const phoneNumberInputVariants = cva(
  "h-full w-full min-w-0 border-0 bg-transparent px-3 text-a7-text-gray outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed",
  {
    variants: {
      inputSize: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-[15px]",
      },
    },
    defaultVariants: {
      inputSize: "md",
    },
  }
)

const callingCodeVariants = cva("flex shrink-0 items-center text-muted-foreground", {
  variants: {
    inputSize: {
      sm: " text-xs",
      md: "text-sm",
      lg: "text-[15px]",
    },
  },
  defaultVariants: {
    inputSize: "md",
  },
})

const countrySelectWidthVariants = cva("h-full shrink-0 rounded-none border-0 bg-transparent px-3 shadow-none focus-visible:ring-0", {
  variants: {
    inputSize: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-[15px]",
    },
  },
  defaultVariants: {
    inputSize: "md",
  },
})

export type Country = string

const defaultDialCodes: Record<string, string> = {
  ae: "971",
  pk: "92",
  sa: "966",
  us: "1",
  gb: "44",
  in: "91",
}

function toLibraryCountry(country?: string) {
  /* istanbul ignore next */
  return (country ?? "AE").toLowerCase()
}

function getDefaultDialCode(country?: string) {
  return defaultDialCodes[toLibraryCountry(country)] ?? "971"
}

function toLibraryValue(value: string) {
  if (!value) return ""
  return value.startsWith("+") ? value.slice(1) : value
}

function toNationalLibraryValue(value: string, dialCode: string) {
  const digits = toLibraryValue(value)

  if (!digits) return ""
  if (digits.startsWith(dialCode)) {
    return digits.slice(dialCode.length)
  }

  return digits
}

function toExternalValue(nationalValue: string, dialCode: string) {
  const digits = nationalValue.replace(/\D/g, "")

  if (!digits) return ""
  return `+${dialCode}${digits}`
}

function getCountryFlag(country: string) {
  return country
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
}

function isCountryData(data: CountryData | Record<string, never>): data is CountryData {
  return "dialCode" in data && typeof data.dialCode === "string"
}

export type PhoneInputProps = VariantProps<typeof phoneInputVariants> & {
  id?: string
  value?: string
  onChange?: (value: string) => void
  defaultCountry?: Country
  countries?: Country[]
  className?: string
  disabled?: boolean
  placeholder?: string
}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(function PhoneInput(
  {
    id,
    value = "",
    onChange,
    defaultCountry = "AE",
    countries,
    inputSize = "md",
    radius = "md",
    className,
    disabled,
    placeholder,
  },
  ref
) {
  /* istanbul ignore next */
  const resolvedInputSize = inputSize ?? "md"
  const [country, setCountry] = React.useState(() => toLibraryCountry(defaultCountry))
  const [dialCode, setDialCode] = React.useState(() => getDefaultDialCode(defaultCountry))
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

  const availableCountries = React.useMemo(() => {
    const list = countries?.map((countryCode) => countryCode.toLowerCase()) ?? Object.keys(phoneInputLabels)
    return list
  }, [countries])

  const countryLabel = phoneInputLabels[country] ?? country.toUpperCase()
  const countrySelectWidth = Math.min(240, Math.max(92, countryLabel.length * 8 + 48))

  const handleCountryChange = React.useCallback(
    (nextCountry: string) => {
      const libraryCountry = nextCountry.toLowerCase()
      setCountry(libraryCountry)
      setDialCode(getDefaultDialCode(libraryCountry))
      onChange?.("")
    },
    [onChange]
  )

  const handlePhoneChange = React.useCallback(
    (nextValue: string, countryData: CountryData | Record<string, never>) => {
      /* istanbul ignore next */
      const nextDialCode = isCountryData(countryData) ? countryData.dialCode : dialCode

      /* istanbul ignore next */
      if (isCountryData(countryData)) {
        setDialCode(countryData.dialCode)
      }

      onChange?.(toExternalValue(nextValue, nextDialCode))
    },
    [dialCode, onChange]
  )

  React.useEffect(() => {
    const libraryCountry = toLibraryCountry(defaultCountry)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCountry(libraryCountry)
    setDialCode(getDefaultDialCode(libraryCountry))
  }, [defaultCountry])

  return (
    <div
      data-slot="phone-input"
      className={cn(phoneInputVariants({ inputSize: resolvedInputSize, radius }), className)}
    >
      <div className="flex h-full shrink-0 items-center">
        <Select value={country} onValueChange={handleCountryChange} disabled={disabled}>
          <SelectTrigger
            aria-label="Country"
            inputSize={resolvedInputSize}
            style={{ width: countrySelectWidth }}
            className={countrySelectWidthVariants({ inputSize: resolvedInputSize })}
          >
            <span className="flex min-w-0 items-center gap-1 whitespace-nowrap">
              <span className="shrink-0" aria-hidden>
                {getCountryFlag(country)}
              </span>
              <span className="truncate">{countryLabel}</span>
            </span>
          </SelectTrigger>
          <SelectContent className="max-h-72">
            {availableCountries.map((countryCode) => {
              const label = phoneInputLabels[countryCode] ?? countryCode.toUpperCase()

              return (
                <SelectPrimitive.Item
                  key={countryCode}
                  value={countryCode}
                  textValue={label}
                  className="focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50"
                >
                  <span className="absolute right-2 flex size-3.5 items-center justify-center">
                    <SelectPrimitive.ItemIndicator>
                      <Check className="size-4" />
                    </SelectPrimitive.ItemIndicator>
                  </span>
                  <span aria-hidden>{getCountryFlag(countryCode)}</span>
                  <SelectPrimitive.ItemText>{label}</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              )
            })}
          </SelectContent>
        </Select>
      </div>

      <span className={callingCodeVariants({ inputSize: resolvedInputSize })} aria-hidden>
        +{dialCode}
      </span>

      <div className="phone-input-number flex h-full min-w-0 flex-1 items-center">
        <ReactPhoneInput
          key={country}
          country={country}
          onlyCountries={[country]}
          value={toNationalLibraryValue(value, dialCode)}
          onChange={handlePhoneChange}
          disableDropdown
          disableCountryCode
          countryCodeEditable
          autoFormat
          disabled={disabled}
          placeholder={placeholder ?? "Phone number"}
          specialLabel=""
          containerClass="!h-full !w-full"
          buttonClass="!hidden"
          inputClass={cn("!h-full !w-full", phoneNumberInputVariants({ inputSize: resolvedInputSize }))}
          inputProps={{
            id,
            ref: inputRef,
            name: id,
            autoComplete: "tel-national",
            "aria-label": placeholder ?? "Phone number",
          }}
        />
      </div>
    </div>
  )
})
PhoneInput.displayName = "PhoneInput"

export type PhoneFieldProps = PhoneInputProps & {
  label: string
  fieldClassName?: string
}

export function PhoneField({
  id,
  label,
  fieldClassName,
  className,
  ...phoneInputProps
}: PhoneFieldProps) {
  return (
    <Field orientation="vertical" className={fieldClassName}>
      <FieldLabel htmlFor={id} className="font-inter">
        {label}
      </FieldLabel>
      <FieldContent>
        <PhoneInput id={id} className={className} {...phoneInputProps} />
      </FieldContent>
    </Field>
  )
}

PhoneField.displayName = "PhoneField"

export { phoneInputVariants, getCountryFlag }
export type { CountryData }
