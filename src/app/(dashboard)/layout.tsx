import { getAuthSession } from "@/features/auth"
import { DashboardShell } from "@/shared/layout/dashboard-shell"

const FALLBACK_USER = {
  id: "demo-user",
  name: "Olivia Rhye",
  email: "olivia@a7group.com",
} as const

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getAuthSession()
  const user = session.user ?? FALLBACK_USER

  return <DashboardShell user={user}>{children}</DashboardShell>
}
