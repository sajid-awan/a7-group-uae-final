import type { IconProps } from "../types";
const RefreshCcw05Icon = ({
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
      d="M8.547 19.768A8.5 8.5 0 0 0 19.362 7.75l-.25-.434M4.638 16.25A8.5 8.5 0 0 1 15.453 4.233m-12.96 12.1 2.732.733.733-2.732m12.085-4.668.732-2.732 2.732.732"
    />
  </svg>
);
export default RefreshCcw05Icon;
