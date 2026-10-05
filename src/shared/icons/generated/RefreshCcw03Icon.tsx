import type { IconProps } from "../types";
const RefreshCcw03Icon = ({
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
      d="M14 2s.85.121 4.364 3.636A9 9 0 0 1 14 20.776M14 8V2h6M10 22s-.85-.122-4.364-3.636A9 9 0 0 1 10 3.224M10 16v6H4"
    />
  </svg>
);
export default RefreshCcw03Icon;
