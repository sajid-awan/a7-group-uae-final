import type { IconProps } from "../types";
const Expand06Icon = ({
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
      d="m16 8 5-5m0 5V3h-5M8 8 3 3m5 0H3v5m5 8-5 5m0-5v5h5m8-5 5 5m-5 0h5v-5"
    />
  </svg>
);
export default Expand06Icon;
