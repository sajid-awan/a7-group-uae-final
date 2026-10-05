import type { IconProps } from "../types";
const TypeStrikethrough02Icon = ({
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
      d="M8 20h8m-5.75-9.5V20m3.5-6v6M3 3l18 18M4 7V6c0-.541.215-1.032.564-1.392M9.5 4H17c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C20 5.602 20 6.068 20 7m-9.75-3v1m3.5-1v4"
    />
  </svg>
);
export default TypeStrikethrough02Icon;
