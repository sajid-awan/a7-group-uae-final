import { SellPropertyForm } from "@/features/services/ui/sell-property/sell-property-form"
import { QuickPagesLayout } from "@/shared/layout/quick-pages-layout"

/** Default sell-property page: layout + listing wizard form. */
export function SellPropertyPageContent() {
  return (
    <QuickPagesLayout>
      <SellPropertyForm />
    </QuickPagesLayout>
  )
}
