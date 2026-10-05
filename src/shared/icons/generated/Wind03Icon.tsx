import type { IconProps } from "../types";
const Wind03Icon = ({
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
      d="M16.764 6.5a3 3 0 1 1 2.236 5h-6M6.764 4A3 3 0 1 1 9 9H2m8.764 11A3 3 0 1 0 13 15H2"
    />
  </svg>
);
export default Wind03Icon;
