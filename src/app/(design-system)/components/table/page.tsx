import { DataListingTable, type ListingRow } from "@/shared/ui/listing-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"

const SAMPLE_LISTINGS: ListingRow[] = [
  {
    id: "1",
    propertyName: "DAMAC Hills",
    propertySubtitle: "Belair Damac Hills - By Trump Estates",
    status: "Sold",
    dateLabel: "16 Nov 2025",
    propertyType: "Townhouse",
    bedsLabel: "4 Beds",
    priceLabel: "25,000,000 AED",
    areaLabel: "7,324 sqft",
  },
  {
    id: "2",
    propertyName: "Palm Jumeirah",
    propertySubtitle: "Signature Villas Frond K",
    status: "Rent",
    dateLabel: "02 Dec 2025",
    propertyType: "Villa",
    bedsLabel: "6 Beds",
    priceLabel: "18,500,000 AED",
    areaLabel: "12,400 sqft",
  },
  {
    id: "3",
    propertyName: "Downtown Dubai",
    propertySubtitle: "Burj Vista Tower 1",
    status: "Lease",
    dateLabel: "20 Nov 2025",
    propertyType: "Apartment",
    bedsLabel: "3 Beds",
    priceLabel: "4,200,000 AED",
    areaLabel: "2,156 sqft",
  },
  {
    id: "4",
    propertyName: "Arabian Ranches 3",
    propertySubtitle: "Sun Community — Emaar",
    status: "Mortgage",
    dateLabel: "11 Jan 2026",
    propertyType: "Townhouse",
    bedsLabel: "4 Beds",
    priceLabel: "3,850,000 AED",
    areaLabel: "2,890 sqft",
  },
  {
    id: "5",
    propertyName: "Dubai Marina",
    propertySubtitle: "Marina Gate 2",
    status: "Auction",
    dateLabel: "28 Nov 2025",
    propertyType: "Apartment",
    bedsLabel: "2 Beds",
    priceLabel: "2,100,000 AED",
    areaLabel: "1,245 sqft",
  },
  {
    id: "6",
    propertyName: "Jumeirah Golf Estates",
    propertySubtitle: "Firestone East",
    status: "Sublet",
    dateLabel: "05 Dec 2025",
    propertyType: "Villa",
    bedsLabel: "5 Beds",
    priceLabel: "14,900,000 AED",
    areaLabel: "8,102 sqft",
  },
  {
    id: "7",
    propertyName: "Business Bay",
    propertySubtitle: "Executive Towers Bay Avenue",
    status: "Exchange",
    dateLabel: "14 Oct 2025",
    propertyType: "Loft",
    bedsLabel: "1 Bed",
    priceLabel: "1,650,000 AED",
    areaLabel: "892 sqft",
  },
  {
    id: "8",
    propertyName: "Mudon",
    propertySubtitle: "Rahat Community",
    status: "Investment",
    dateLabel: "30 Nov 2025",
    propertyType: "Townhouse",
    bedsLabel: "3 Beds",
    priceLabel: "2,995,000 AED",
    areaLabel: "2,341 sqft",
  },
  {
    id: "9",
    propertyName: "JVC",
    propertySubtitle: "Binghatti Galaxy",
    status: "Contract",
    dateLabel: "09 Jan 2026",
    propertyType: "Apartment",
    bedsLabel: "2 Beds",
    priceLabel: "1,125,000 AED",
    areaLabel: "1,089 sqft",
  },
  {
    id: "10",
    propertyName: "Dubai Hills Estate",
    propertySubtitle: "Sidra Villas III",
    status: "Gift",
    dateLabel: "22 Dec 2025",
    propertyType: "Villa",
    bedsLabel: "5 Beds",
    priceLabel: "9,750,000 AED",
    areaLabel: "6,200 sqft",
  },
  {
    id: "11",
    propertyName: "City Walk",
    propertySubtitle: "Building 16",
    status: "Foreclosure",
    dateLabel: "17 Nov 2025",
    propertyType: "Penthouse",
    bedsLabel: "4 Beds",
    priceLabel: "22,000,000 AED",
    areaLabel: "5,400 sqft",
  },
  {
    id: "12",
    propertyName: "The Springs",
    propertySubtitle: "Spring 14 — Type 3M",
    status: "Consignment",
    dateLabel: "03 Jan 2026",
    propertyType: "Villa",
    bedsLabel: "3 Beds",
    priceLabel: "3,400,000 AED",
    areaLabel: "2,650 sqft",
  },
]

export default function TableDocsPage() {
  return (
    <div className="mx-auto container p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Documentation</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight font-heading">Table</h1>
        <p className="mt-2 text-muted-foreground">
          Low-level primitives aligned with{" "}
       
          , plus a reusable <code className="rounded bg-muted px-1 py-0.5 text-xs">DataListingTable</code> for
          property-style rows (Feather <code className="rounded bg-muted px-1 py-0.5 text-xs">MapPin</code>),{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">size</code> presets, and{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">pagination=&quot;none&quot; | &quot;footer&quot;</code>.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"
import { DataListingTable } from "@/shared/ui/listing-table"
import { TablePaginationBar } from "@/shared/ui/table-pagination"`}</CodeBlock>
        </section>

        <DemoBlock
          title="Primitives (header + body)"
          description="Compose any grid from Table, TableHeader, TableBody, TableRow, TableCell ."
          code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[120px]">SKU</TableHead>
      <TableHead>Product</TableHead>
      <TableHead className="text-right">Qty</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">A-100</TableCell>
      <TableCell>Wireless mouse</TableCell>
      <TableCell className="text-right">12</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">B-204</TableCell>
      <TableCell>USB-C hub</TableCell>
      <TableCell className="text-right">4</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
        >
          <div className="w-full overflow-hidden rounded-lg border border-border bg-card">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[120px]">SKU</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead className="text-right">Qty</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">A-100</TableCell>
                  <TableCell>Wireless mouse</TableCell>
                  <TableCell className="text-right">12</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">B-204</TableCell>
                  <TableCell>USB-C hub</TableCell>
                  <TableCell className="text-right">4</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </DemoBlock>

        <DemoBlock
          title="Listing — no pagination"
          description="Renders every row. Use for short lists or when the server already returns a single page."
          code={`<DataListingTable rows={rows} pagination="none" />`}
        >
          <DataListingTable rows={SAMPLE_LISTINGS.slice(0, 4)} pagination="none" />
        </DemoBlock>

        <DemoBlock
          title="Listing — optional header & table footer"
          description="Pass `header` (content inside `TableHeader`, usually a `TableRow` of `TableHead` cells) and/or `footer` (inside `TableFooter`, e.g. totals). Omit either prop when you do not need it."
          code={`<DataListingTable
  rows={rows}
  pagination="none"
  header={
    <TableRow className="border-border hover:bg-transparent">
      <TableHead>Property</TableHead>
      <TableHead className="text-center">Status</TableHead>
      <TableHead className="text-center">Date</TableHead>
      <TableHead className="text-center">Type</TableHead>
      <TableHead className="text-center">Beds</TableHead>
      <TableHead className="text-right">Price & area</TableHead>
    </TableRow>
  }
  footer={
    <TableRow className="hover:bg-transparent">
      <TableCell colSpan={5} className="text-muted-foreground">
        Subtotal (example)
      </TableCell>
      <TableCell className="text-right font-medium">—</TableCell>
    </TableRow>
  }
/>`}
        >
          <DataListingTable
            rows={SAMPLE_LISTINGS.slice(0, 3)}
            pagination="none"
            header={
              <TableRow className="border-border hover:bg-transparent">
                <TableHead>Property</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Date</TableHead>
                <TableHead className="text-center">Type</TableHead>
                <TableHead className="text-center">Beds</TableHead>
                <TableHead className="text-right">Price & area</TableHead>
              </TableRow>
            }
            footer={
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={5} className="text-muted-foreground">
                  Subtotal (example)
                </TableCell>
                <TableCell className="text-right font-medium">—</TableCell>
              </TableRow>
            }
          />
        </DemoBlock>

        <DemoBlock
          title="Listing — footer pagination"
          description="Client-side paging over `rows` with `pageSize` (default 5). Optional controlled `page` + `onPageChange` for server-driven pages later."
          code={`<DataListingTable
  rows={rows}
  pagination="footer"
  pageSize={5}
/>`}
        >
          <DataListingTable rows={SAMPLE_LISTINGS} pagination="footer" pageSize={5} />
        </DemoBlock>

        <DemoBlock
          title="Listing sizes"
          description="sm · default · lg — adjusts vertical padding, type scale, and map pin size."
          code={`<DataListingTable rows={rows.slice(0, 2)} pagination="none" size="sm" />
<DataListingTable rows={rows.slice(0, 2)} pagination="none" size="default" />
<DataListingTable rows={rows.slice(0, 2)} pagination="none" size="lg" />`}
        >
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">size=&quot;sm&quot;</p>
              <DataListingTable rows={SAMPLE_LISTINGS.slice(0, 2)} pagination="none" size="sm" />
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">size=&quot;default&quot;</p>
              <DataListingTable rows={SAMPLE_LISTINGS.slice(0, 2)} pagination="none" size="default" />
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">size=&quot;lg&quot;</p>
              <DataListingTable rows={SAMPLE_LISTINGS.slice(0, 2)} pagination="none" size="lg" />
            </div>
          </div>
        </DemoBlock>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Props (summary)</h2>
          <div className="overflow-x-auto rounded-lg border border-border text-sm">
            <table className="w-full min-w-lg border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-4 py-2.5 font-medium">Component</th>
                  <th className="px-4 py-2.5 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">DataListingTable</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    <code className="text-a7-text-gray">rows</code>, <code className="text-a7-text-gray">size</code>,{" "}
                    <code className="text-a7-text-gray">pagination</code>, optional{" "}
                    <code className="text-a7-text-gray">pageSize</code>, optional controlled{" "}
                    <code className="text-a7-text-gray">page</code> / <code className="text-a7-text-gray">onPageChange</code>
                    , optional <code className="text-a7-text-gray">header</code> /{" "}
                    <code className="text-a7-text-gray">footer</code> for <code className="text-a7-text-gray">TableHeader</code> /{" "}
                    <code className="text-a7-text-gray">TableFooter</code>.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-mono text-xs">TablePaginationBar</td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    Used inside the listing table when pagination is enabled; can be reused for custom tables.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
