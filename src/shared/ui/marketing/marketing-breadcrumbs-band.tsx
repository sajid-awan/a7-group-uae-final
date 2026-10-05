import { BreadcrumbList, type BreadcrumbItem } from "@/shared/ui/breadcrumb"
import { cn } from "@/shared/lib/cn"

export type MarketingBreadcrumbsBandProps = {
  items: readonly BreadcrumbItem[]
  className?: string
}

export function MarketingBreadcrumbsBand({ items, className }: MarketingBreadcrumbsBandProps) {
  return (
    <div className={cn("bg-white py-4 md:py-5", className)}>
      <div className="container mx-auto px-4">
        <BreadcrumbList items={[...items]} size="sm" separator="chevron" />
      </div>
    </div>
  )
}
