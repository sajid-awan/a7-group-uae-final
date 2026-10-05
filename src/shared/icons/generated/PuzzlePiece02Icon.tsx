import type { IconProps } from "../types";
const PuzzlePiece02Icon = ({
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
      d="m12 2 3.6 3.6c2.4-6.3 9.1.4 2.8 2.8L22 12l-3.6 3.6c-2.4-6.3-9.1.4-2.8 2.8L12 22l-3.6-3.6C6 24.7-.7 18 5.6 15.6L2 12l3.6-3.6C8 14.7 14.7 8 8.4 5.6z"
    />
  </svg>
);
export default PuzzlePiece02Icon;
