import { notFound } from "next/navigation"

import { getProjectTheme, ThemeScope, ThemeSync } from "@/shared/theme"
import { getProjectDetail } from "@/features/project"

type ProjectDetailLayoutProps = {
  children: React.ReactNode
  params: Promise<{ id: string }>
}

export default async function ProjectDetailLayout({ children, params }: ProjectDetailLayoutProps) {
  const { id } = await params
  const project = getProjectDetail(id)

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
