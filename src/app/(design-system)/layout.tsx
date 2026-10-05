import { AppSidebar } from "@/shared/layout/app-sidebar"
import { componentNavItems } from "@/shared/content/navigation/component-sidebar-nav"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-svh min-h-0 w-full">
      <AppSidebar items={componentNavItems} />
      <main className="min-h-0 min-w-0 flex-1 overflow-y-auto bg-white text-a7-text-gray">{children}</main>
    </div>
  )
}
