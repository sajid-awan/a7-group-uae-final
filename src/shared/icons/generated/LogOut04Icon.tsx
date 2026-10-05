import type { IconProps } from "../types";
const LogOut04Icon = ({
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
      d="m18 16 4-4-4-4m4 4H9m6-7.796A8.4 8.4 0 0 0 10.667 3C5.88 3 2 7.03 2 12s3.88 9 8.667 9A8.4 8.4 0 0 0 15 19.796"
    />
  </svg>
);
export default LogOut04Icon;
