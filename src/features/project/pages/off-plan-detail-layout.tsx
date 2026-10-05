import { notFound } from "next/navigation"

import { getProjectTheme, ThemeScope, ThemeSync } from "@/shared/theme"
import { getOffPlanProjectDetail } from "@/features/project"

type OffPlanDetailLayoutProps = {
  children: React.ReactNode
  params: Promise<{ id: string }>
}

export default async function OffPlanDetailLayout({ children, params }: OffPlanDetailLayoutProps) {
  const { id } = await params
  const project = getOffPlanProjectDetail(id)

  if (!project) {
    notFound()
  }

  const theme = getProjectTheme(id)

  if (!theme) {
    notFound()
  }

  return (
    <>
      <ThemeSync theme={theme} />
      <ThemeScope theme={theme}>{children}</ThemeScope>
    </>
  )
}
