import type { IconProps } from "../types";
const Sliders04Icon = ({
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
      d="M3 8h12m0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0m-6 8h12M9 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);
export default Sliders04Icon;
