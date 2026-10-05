"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/shared/lib/cn"

function Accordion({ ...props }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({ className, ...props }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item data-slot="accordion-item" className={cn("border-b", className)} {...props} />
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-center justify-between gap-3 py-6 text-left text-base font-semibold transition-colors hover:text-a7-text-gray/80 disabled:cursor-not-allowed disabled:opacity-50 [&[data-state=open]>svg]:rotate-45",
          className
        )}
        {...props}
      >
        {children}
        <Plus className="size-5 shrink-0 text-a7-text-gray transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0 text-muted-foreground", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

type AccordionEntry = {
  title: React.ReactNode
  content: React.ReactNode
  value?: string
  disabled?: boolean
}

type AccordionListProps = {
  items: AccordionEntry[]
  className?: string
  defaultValue?: string
}

function AccordionList({ items, className, defaultValue }: AccordionListProps) {
  return (
    <Accordion type="single" collapsible defaultValue={defaultValue} className={cn("w-full", className)}>
      {items.map((item, index) => {
        const value = item.value ?? `item-${index + 1}`
        return (
          <motion.div
            key={value}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
          >
            <AccordionItem
              value={value}
              disabled={item.disabled}
              className="border-b border-border/70 last:border-b"
            >
              <AccordionTrigger className="py-6 text-lg font-inter font-bold tracking-tight text-a7-black md:text-2xl">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-1 text-base leading-relaxed text-black font-light md:text-lg">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        )
      })}
    </Accordion>
  )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, AccordionList }
