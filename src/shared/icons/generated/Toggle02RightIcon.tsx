import type { IconProps } from "../types";
const Toggle02RightIcon = ({
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
      d="M14 16H6a4 4 0 0 1 0-8h8m8 4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
    />
  </svg>
);
export default Toggle02RightIcon;
