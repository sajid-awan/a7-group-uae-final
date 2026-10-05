import type { IconProps } from "../types";
const Expand05Icon = ({
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
      d="m15 9 6-6m0 6V3h-6M9 9 3 3m6 0H3v6m6 6-6 6m0-6v6h6m6-6 6 6m-6 0h6v-6"
    />
  </svg>
);
export default Expand05Icon;
