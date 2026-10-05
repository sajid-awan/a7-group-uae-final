import type { IconProps } from "../types";
const ImageIndentRightIcon = ({
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
      d="M21 4H3m18 16H3M9 9.25H3m6 5.5H3M14.6 16h4.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 15.24 21 14.96 21 14.4V9.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 8 19.96 8 19.4 8h-4.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C13 8.76 13 9.04 13 9.6v4.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C13.76 16 14.04 16 14.6 16"
    />
  </svg>
);
export default ImageIndentRightIcon;
