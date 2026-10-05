import type { IconProps } from "../types";
const LogIn03Icon = ({
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
      d="M6 17c0 .351 0 .527.016.68a3 3 0 0 0 2.286 2.611c.15.036.324.06.672.106l6.592.879c1.876.25 2.814.375 3.542.085a3 3 0 0 0 1.509-1.32c.383-.684.383-1.63.383-3.523V7.483c0-1.893 0-2.84-.383-3.524a3 3 0 0 0-1.509-1.32c-.728-.29-1.666-.165-3.542.086l-6.592.879a7 7 0 0 0-.672.105A3 3 0 0 0 6.016 6.32C6 6.473 6 6.65 6 7m6 9 4-4-4-4m4 4H3"
    />
  </svg>
);
export default LogIn03Icon;
