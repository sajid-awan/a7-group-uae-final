import type { IconProps } from "../types";
const AlignRight02Icon = ({
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
      d="M18 10c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 8.398 21 7.932 21 7s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 4 18.932 4 18 4h-8c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C7 5.602 7 6.068 7 7s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C8.602 10 9.068 10 10 10zm0 10c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 18.398 21 17.932 21 17s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 14 18.932 14 18 14H6c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 15.602 3 16.068 3 17s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 20 5.068 20 6 20z"
    />
  </svg>
);
export default AlignRight02Icon;
