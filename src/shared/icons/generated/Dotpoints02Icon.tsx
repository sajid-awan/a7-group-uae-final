import type { IconProps } from "../types";
const Dotpoints02Icon = ({
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
      d="M21 5H10m11 14H10m11-7H10M6 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </svg>
);
export default Dotpoints02Icon;
