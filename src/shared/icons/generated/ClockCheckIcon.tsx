import type { IconProps } from "../types";
const ClockCheckIcon = ({
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
      d="m14.5 19 2 2 4.5-4.5m.985-3.95Q22 12.276 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.435 4.337 9.858 9.739 9.997M12 6v6l3.738 1.87"
    />
  </svg>
);
export default ClockCheckIcon;
