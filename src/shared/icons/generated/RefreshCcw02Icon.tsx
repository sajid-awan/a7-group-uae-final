import type { IconProps } from "../types";
const RefreshCcw02Icon = ({
  size = 24,
  width,
  height,
  color = "currentColor",
  className,
  strokeWidth = 1.5,
  ...props
}: IconProps) => (
  <svg
    width={width ?? size}
    height={height ?? size}
    className={className}
    aria-hidden="true"
    role="img"
    color={color}
    strokeWidth={strokeWidth}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M2 10s.121-.85 3.636-4.364A9 9 0 0 1 20.776 10M8 10H2V4m20 10s-.121.85-3.636 4.364A9 9 0 0 1 3.224 14M16 14h6v6"
    />
  </svg>
);
export default RefreshCcw02Icon;
