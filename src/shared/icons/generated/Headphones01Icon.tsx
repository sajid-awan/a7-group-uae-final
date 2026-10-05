import type { IconProps } from "../types";
const Headphones01Icon = ({
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
      d="M21 18v-6a9 9 0 1 0-18 0v6m2.5 3A2.5 2.5 0 0 1 3 18.5v-2a2.5 2.5 0 0 1 5 0v2A2.5 2.5 0 0 1 5.5 21m13 0a2.5 2.5 0 0 1-2.5-2.5v-2a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1-2.5 2.5"
    />
  </svg>
);
export default Headphones01Icon;
