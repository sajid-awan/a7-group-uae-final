import type { IconProps } from "../types";
const LifeBuoy02Icon = ({
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
      d="M8.464 8.464 4.93 4.93m0 14.142 3.535-3.536m7.072 0 3.535 3.536m0-14.142-3.536 3.535M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
    />
  </svg>
);
export default LifeBuoy02Icon;
