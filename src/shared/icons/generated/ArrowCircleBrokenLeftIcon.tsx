import type { IconProps } from "../types";
const ArrowCircleBrokenLeftIcon = ({
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
      d="M20.662 17A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a10 10 0 0 1 8.662 5M12 16l-4-4 4-4m-4 4h14"
    />
  </svg>
);
export default ArrowCircleBrokenLeftIcon;
