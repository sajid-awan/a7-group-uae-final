import * as React from "react"

import { Button, type ButtonProps } from "@/shared/ui/button"

type CodeBlockProps = {
  children: React.ReactNode
}

export function CodeBlock({ children }: CodeBlockProps) {
  return (
    <pre className="overflow-auto rounded-lg bg-muted/40 p-4 text-sm">
      <code className="whitespace-pre-wrap">{children}</code>
    </pre>
  )
}

type DemoBlockProps = {
  title?: string
  description?: string
  code?: string
  children?: React.ReactNode
}

export function DemoBlock({ title, description, code, children }: DemoBlockProps) {
  return (
    <section className="space-y-4">
      {title ? <h3 className="text-base font-medium">{title}</h3> : null}
      {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}

      <div className="flex flex-col gap-4">
        <div className="flex w-full min-w-0 flex-wrap items-start justify-start gap-3">{children}</div>
        {code ? (
          <div className="w-full">
            <CodeBlock>{code}</CodeBlock>
          </div>
        ) : null}
      </div>
    </section>
  )
}

type ButtonVariantDemoProps = {
  title: string
  description?: string
  code: string
  label: string
  icon?: React.ReactNode
  iconAlign?: ButtonProps["iconAlign"]
  variant: NonNullable<ButtonProps["variant"]>
}

export function ButtonVariantDemo({
  title,
  description,
  code,
  label,
  icon,
  iconAlign = "start",
  variant,
}: ButtonVariantDemoProps) {
  return (
    <DemoBlock title={title} description={description} code={code}>
      <Button variant={variant} label={label} icon={icon} iconAlign={iconAlign} />
    </DemoBlock>
  )
}
