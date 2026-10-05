import type { IconProps } from "../types";
const Server06Icon = ({
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
      d="M20 12a8 8 0 0 1-8 8m8-8a8 8 0 0 0-8-8m8 8H4m8 8a8 8 0 0 1-8-8m8 8a12.24 12.24 0 0 0 3.2-8A12.24 12.24 0 0 0 12 4m0 16a12.24 12.24 0 0 1-3.2-8A12.24 12.24 0 0 1 12 4m-8 8a8 8 0 0 1 8-8M6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0m16 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0m16 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default Server06Icon;
