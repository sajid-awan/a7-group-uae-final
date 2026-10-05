import { LayoutFooter } from "@/shared/layout/layout-footer"
import { LayoutHeader } from "@/shared/layout/layout-header"
import { ThemeProvider } from "@/shared/theme"

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-svh flex-col bg-white font-inter text-a7-text-gray">
      <ThemeProvider>
        <LayoutHeader />
        <div className="flex-1">{children}</div>
        <LayoutFooter />
      </ThemeProvider>
    </div>
  )
}
