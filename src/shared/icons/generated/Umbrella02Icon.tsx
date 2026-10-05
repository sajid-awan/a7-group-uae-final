import type { IconProps } from "../types";
const Umbrella02Icon = ({
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
      d="M7 19.4C7 20.836 8.12 22 9.5 22s2.5-1.164 2.5-2.6V11m0 0c-1.61 0-4 1-4 1s-1.39-1-3-1-3 1-3 1C2 6.477 6.477 2 12 2s10 4.477 10 10c0 0-1.39-1-3-1s-3 1-3 1-2.39-1-4-1"
    />
  </svg>
);
export default Umbrella02Icon;
