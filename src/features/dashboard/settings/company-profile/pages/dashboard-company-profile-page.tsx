"use client"

import { useCallback } from "react"

import { CompanyProfileView } from "../components/company-profile-view"
import type { CompanyProfileFormValues } from "../content/company-profile-types"
import { cn } from "@/shared/lib/cn"

export type DashboardCompanyProfilePageProps = {
  className?: string
}

export function DashboardCompanyProfilePage({ className }: DashboardCompanyProfilePageProps) {
  const handleSave = useCallback((values: CompanyProfileFormValues) => {
    void values
  }, [])

  return (
    <div className={cn("bg-neutral-50 p-4 font-inter sm:p-6", className)}>
      <CompanyProfileView onSave={handleSave} />
    </div>
  )
}

DashboardCompanyProfilePage.displayName = "DashboardCompanyProfilePage"
