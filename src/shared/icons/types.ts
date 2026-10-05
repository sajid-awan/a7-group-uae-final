import type { SVGProps } from "react"

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string
  width?: number | string
  height?: number | string
  color?: string
  strokeWidth?: number | string
}
