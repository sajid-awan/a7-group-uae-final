"use client"

import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion"
import type { FooterLinkColumn } from "@/features/home/content/home-footer"

type FooterLinkColumnsProps = {
  columns: readonly FooterLinkColumn[]
}

function FooterLinkList({ links }: { links: FooterLinkColumn["links"] }) {
  return (
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-sm font-semibold leading-snug text-white transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function FooterLinkColumns({ columns }: FooterLinkColumnsProps) {
  return (
    <>
      <Accordion type="single" collapsible className="w-full sm:hidden">
        {columns.map((column, index) => (
          <AccordionItem
            key={column.title}
            value={`footer-col-${index}`}
            className="border-b border-white/10 last:border-b"
          >
            <AccordionTrigger className="py-4 text-xs font-bold uppercase tracking-[0.12em] text-white/60 hover:text-white [&_svg]:text-white/60">
              {column.title}
            </AccordionTrigger>
            <AccordionContent className="pb-4 pt-0 text-white">
              <FooterLinkList links={column.links} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="hidden gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="font-inter text-xs font-bold uppercase tracking-[0.12em] text-white/60">
              {column.title}
            </h3>
            <div className="mt-4">
              <FooterLinkList links={column.links} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
