import type { IconProps } from "../types";
const ArrowCircleBrokenUpLeftIcon = ({
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
      d="M14.59 21.66a10 10 0 0 1-9.661-2.589c-3.905-3.905-3.905-10.237 0-14.142s10.237-3.905 14.142 0a10 10 0 0 1 2.59 9.66M15 9H9v6m0-6 10 10"
    />
  </svg>
);
export default ArrowCircleBrokenUpLeftIcon;
