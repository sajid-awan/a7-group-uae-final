import type { IconProps } from "../types";
const Snowflake02Icon = ({
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
      d="M12 8v8m0-8V2m0 6L7 3m5 5 5-5m-5 13v6m0-6-5 5m5-5 5 5m-1-9H8m8 0h6m-6 0 5-5m-5 5 5 5M8 12H2m6 0L3 7m5 5-5 5"
    />
  </svg>
);
export default Snowflake02Icon;
