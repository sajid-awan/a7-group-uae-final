import type { IconProps } from "../types";
const Divide02Icon = ({
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
      d="M4 12h16m-6-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default Divide02Icon;
