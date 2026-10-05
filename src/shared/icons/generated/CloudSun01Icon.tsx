import type { IconProps } from "../types";
const CloudSun01Icon = ({
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
      d="M19.368 12.405A5 5 0 1 0 12 8m0 0a5.5 5.5 0 0 0-4.9 3.001L7 11a5 5 0 0 0 0 10h10.5a4.5 4.5 0 1 0-.206-8.995A5.5 5.5 0 0 0 12 8"
    />
  </svg>
);
export default CloudSun01Icon;
