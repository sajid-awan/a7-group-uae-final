import type { IconProps } from "../types";
const Droplets01Icon = ({
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
      d="M22 16a6 6 0 0 1-12 0c0-4.314 6-14 6-14s6 9.686 6 14M8 9a3 3 0 1 1-6 0c0-2.157 3-7 3-7s3 4.843 3 7"
    />
  </svg>
);
export default Droplets01Icon;
