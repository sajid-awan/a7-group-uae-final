import type { ComponentType, SVGProps } from "react"
import { Icon as IconifyIcon } from "@iconify/react"

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>

export function createIconifyIcon(name: string): IconComponent {
  function IconifyWrapper({ className, ...props }: SVGProps<SVGSVGElement>) {
    return (
      <IconifyIcon
        icon={name}
        className={className}
        {...(props as Record<string, unknown>)}
      />
    )
  }
  IconifyWrapper.displayName = `IconifyIcon(${name})`
  return IconifyWrapper
}

export const WhatsAppColorIcon = createIconifyIcon("logos:whatsapp-icon")

export const BaselineWhatsappIcon = createIconifyIcon("ic:baseline-whatsapp")

/** WhatsApp pill on marketing / off-plan listing cards — green label + icon area. */
export const whatsAppActionToneClassName =
  "border-emerald-200/80 bg-emerald-50 text-emerald-600 hover:bg-emerald-100/80 hover:text-emerald-700"
