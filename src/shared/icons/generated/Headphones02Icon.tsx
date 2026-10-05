import type { IconProps } from "../types";
const Headphones02Icon = ({
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
      d="M22 17v-4c0-5.523-4.477-10-10-10S2 7.477 2 13v4m5.5 4A2.5 2.5 0 0 1 5 18.5v-3a2.5 2.5 0 0 1 5 0v3A2.5 2.5 0 0 1 7.5 21m9 0a2.5 2.5 0 0 1-2.5-2.5v-3a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-2.5 2.5"
    />
  </svg>
);
export default Headphones02Icon;
