"use client"

import { ArrowUpRight } from "lucide-react"

import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"

export function ProjectHeroSearch() {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-linear-to-r from-white/40 to-[#999999]/40 p-3 sm:flex-row sm:items-center sm:gap-3">
      <Input
        inputSize="lg"
        placeholder="Full Name"
        className="flex-1 bg-white  "
      />
      <Input
        inputSize="lg"
        placeholder="Phone Number"
        className="flex-1 bg-white  "
      />
      <Input
        inputSize="lg"
        placeholder="Email Address"
        className="flex-1 bg-white  "
      />
      <Button
        variant="default"
        shape="pill"
        size="sm"
        label="Send Inquiry"
        iconRight={<ArrowUpRight className="size-4" />}
        className="h-12 min-h-12 w-full shrink-0 text-[15px] sm:flex-1"
      />
    </div>
  )
}
