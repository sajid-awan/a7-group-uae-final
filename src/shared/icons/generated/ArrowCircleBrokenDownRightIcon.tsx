import type { IconProps } from "../types";
const ArrowCircleBrokenDownRightIcon = ({
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
      d="M9.41 2.34a10 10 0 0 1 9.661 2.589c3.905 3.905 3.905 10.237 0 14.142s-10.237 3.905-14.142 0a10 10 0 0 1-2.59-9.66M9 15h6V9m0 6L5 5"
    />
  </svg>
);
export default ArrowCircleBrokenDownRightIcon;
