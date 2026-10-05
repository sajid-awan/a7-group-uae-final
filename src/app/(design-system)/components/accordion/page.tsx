"use client"

import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"
import {
  Accordion,
  AccordionContent,
  AccordionList,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion"

const faqItems = [
  {
    title: "Can I customize the template without coding experience?",
    content:
      "Yes. The template is built to be editable with simple content blocks and configurable sections. You can update layout text, visuals, and sections without deep technical work.",
  },
  {
    title: "Is this template optimized for mobile devices?",
    content:
      "Yes. Layouts are responsive by default across desktop, tablet, and mobile breakpoints, with spacing and typography tuned for smaller screens.",
  },
  {
    title: "Can I connect this template with external tools like email marketing platforms?",
    content:
      "Yes. You can integrate common external tools for email marketing, analytics, forms, and automation through APIs, embeds, or middleware.",
  },
  {
    title: "Does the template include CMS features for property listings?",
    content:
      "It supports structured content patterns that can be wired to a CMS. You can map listing content, categories, and metadata to reusable templates.",
  },
  {
    title: "Can I add eCommerce functionality to this template?",
    content:
      "Yes. Product catalog, checkout, and payment flows can be added by integrating your preferred eCommerce stack.",
  },
] as const

export default function AccordionDocsPage() {
  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight">Accordion</h1>
        <p className="mt-2 text-muted-foreground">
          A vertically stacked set of interactive headings that reveal or hide content.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import { AccordionList } from "@/shared/ui/accordion"`}</CodeBlock>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium">Usage</h2>
          <CodeBlock>{`const items = [
  { title: "Question", content: "Answer text" },
  { title: "Another question", content: "Another answer" },
]

<AccordionList items={items} defaultValue="item-1" />`}</CodeBlock>
        </section>

        <DemoBlock
          title="FAQ style (title + content props)"
          description="Reusable list with image-style rows, plus icon, and large bold question titles."
          code={`const faqItems = [
  { title: "Can I customize the template without coding experience?", content: "..." },
  { title: "Is this template optimized for mobile devices?", content: "..." },
]

<AccordionList items={faqItems} />`}
        >
          <AccordionList items={[...faqItems]} className="max-w-6xl" />
        </DemoBlock>

        <DemoBlock
          title="Low-level composition (optional)"
          description="Use primitive parts directly when you need custom behavior beyond the reusable API."
          code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Custom row title</AccordionTrigger>
    <AccordionContent>Custom row content</AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full max-w-2xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>Custom row title</AccordionTrigger>
              <AccordionContent>Custom row content for fully manual composition.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Another custom row</AccordionTrigger>
              <AccordionContent>Use this mode for advanced composition and custom internals.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </DemoBlock>
      </div>
    </div>
  )
}
