import type { IconProps } from "../types";
const GridDotsVerticalCenterIcon = ({
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
      d="M3 3h.01M3 21h.01M3 16.5h.01M3 7.5h.01M7.5 3h.01M7.5 21h.01M16.5 3h.01m-.01 18h.01M12 3h.01M12 21h.01M12 16.5h.01m-.01-9h.01M21 3h.01M21 21h.01M21 16.5h.01m-.01-9h.01M21 12H3"
    />
  </svg>
);
export default GridDotsVerticalCenterIcon;
