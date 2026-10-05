import type { IconProps } from "../types";
const Moon02Icon = ({
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
      d="M21.955 12.956a8 8 0 1 1-10.91-10.911C5.97 2.526 2 6.799 2 12c0 5.523 4.477 10 10 10 5.2 0 9.473-3.97 9.955-9.044"
    />
  </svg>
);
export default Moon02Icon;
