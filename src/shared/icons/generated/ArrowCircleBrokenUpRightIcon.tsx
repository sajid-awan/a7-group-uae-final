import type { IconProps } from "../types";
const ArrowCircleBrokenUpRightIcon = ({
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
      d="M2.34 14.59a10 10 0 0 1 2.589-9.661c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142a10 10 0 0 1-9.66 2.59M9 9h6v6m0-6L5 19"
    />
  </svg>
);
export default ArrowCircleBrokenUpRightIcon;
