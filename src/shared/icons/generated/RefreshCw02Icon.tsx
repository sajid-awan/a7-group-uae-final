import type { IconProps } from "../types";
const RefreshCw02Icon = ({
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
      d="M2 14s.121.85 3.636 4.364A9 9 0 0 0 20.776 14M8 14H2v6m20-10s-.121-.85-3.636-4.364A9 9 0 0 0 3.224 10M16 10h6V4"
    />
  </svg>
);
export default RefreshCw02Icon;
