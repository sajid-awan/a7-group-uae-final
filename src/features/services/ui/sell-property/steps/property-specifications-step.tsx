"use client"

import { useState } from "react"
import { BedDouble, Hash, Home, MapPin, Ruler, Tag } from "lucide-react"

import { Button } from "@/shared/ui/button"
import { Field, FieldLabel } from "@/shared/ui/field"
import { Input } from "@/shared/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"

export function PropertySpecificationsStep() {
  const [propertyFor, setPropertyFor] = useState<"sale" | "rent" | "management">("rent")

  return (
    <div className="mt-7 space-y-4">
      <h2 className="text-xl font-inter leading-tight font-semibold text-a7-black">Tell us about your property</h2>

      <div className="space-y-2 pt-1">
        <p className="text-sm font-semibold text-a7-text-gray">Property For:</p>
        <div className="grid w-full grid-cols-1 gap-2 min-[400px]:grid-cols-3">
          <Button
            type="button"
            variant={propertyFor === "sale" ? "default" : "outline"}
            size="sm"
            shape="pill"
            className="h-11 w-full text-sm"
            onClick={() => setPropertyFor("sale")}
          >
            Sale
          </Button>
          <Button
            type="button"
            variant={propertyFor === "rent" ? "default" : "outline"}
            size="sm"
            shape="pill"
            className="h-11 w-full text-sm"
            onClick={() => setPropertyFor("rent")}
          >
            Rent
          </Button>
          <Button
            type="button"
            variant={propertyFor === "management" ? "default" : "outline"}
            size="sm"
            shape="pill"
            className="h-11 w-full text-sm"
            onClick={() => setPropertyFor("management")}
          >
            Management
          </Button>
        </div>
      </div>

      <Field orientation="vertical">
        <FieldLabel htmlFor="sp-location-select">Location</FieldLabel>
        <Select>
          <SelectTrigger id="sp-location-select" radius="lg" icon={<MapPin className="size-4" />} iconPosition="start">
            <SelectValue placeholder="Dubai" />
          </SelectTrigger>
          <SelectContent position="popper" className="max-sm:w-(--radix-select-trigger-width) max-sm:min-w-(--radix-select-trigger-width)">
            <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
            <SelectItem value="downtown">Downtown Dubai</SelectItem>
            <SelectItem value="business-bay">Business Bay</SelectItem>
          </SelectContent>
        </Select>
      </Field>

      <Field orientation="vertical">
        <FieldLabel htmlFor="sp-property-type">Property Type</FieldLabel>
        <Select>
          <SelectTrigger id="sp-property-type" radius="lg" icon={<Home className="size-4" />} iconPosition="start">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper" className="max-sm:w-(--radix-select-trigger-width) max-sm:min-w-(--radix-select-trigger-width)">
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="townhouse">Townhouse</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
            <SelectItem value="penthouse">Penthouse</SelectItem>
          </SelectContent>
        </Select>
      </Field>

      <Field orientation="vertical">
        <FieldLabel htmlFor="sp-bed">Bed</FieldLabel>
        <Select>
          <SelectTrigger id="sp-bed" radius="lg" icon={<BedDouble className="size-4" />} iconPosition="start">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper" className="max-sm:w-(--radix-select-trigger-width) max-sm:min-w-(--radix-select-trigger-width)">
            <SelectItem value="studio">Studio</SelectItem>
            <SelectItem value="1">1 Bed</SelectItem>
            <SelectItem value="2">2 Bed</SelectItem>
            <SelectItem value="3">3 Bed</SelectItem>
            <SelectItem value="4+">4+ Bed</SelectItem>
          </SelectContent>
        </Select>
      </Field>

      <Field orientation="vertical">
        <FieldLabel htmlFor="sp-size">Size Sqft</FieldLabel>
        <Input id="sp-size" radius="lg" placeholder="Enter" icon={<Ruler className="size-4" />} iconPosition="start" />
      </Field>

      <Field orientation="vertical">
        <FieldLabel htmlFor="sp-unit">Unit No.</FieldLabel>
        <Input id="sp-unit" radius="lg" placeholder="Enter" icon={<Hash className="size-4" />} iconPosition="start" />
      </Field>

      <Field orientation="vertical">
        <FieldLabel htmlFor="sp-price">Price</FieldLabel>
        <Input id="sp-price" radius="lg" placeholder="Enter" icon={<Tag className="size-4" />} iconPosition="start" />
      </Field>
    </div>
  )
}
