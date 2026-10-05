import type { IconProps } from "../types";
const RefreshCw03Icon = ({
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
      d="M14 22s.85-.121 4.364-3.636A9 9 0 0 0 14 3.224M14 16v6h6M10 2s-.85.122-4.364 3.636A9 9 0 0 0 10 20.776M10 8V2H4"
    />
  </svg>
);
export default RefreshCw03Icon;
