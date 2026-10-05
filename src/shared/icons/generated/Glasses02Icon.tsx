import type { IconProps } from "../types";
const Glasses02Icon = ({
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
      d="M10 14.535a4.01 4.01 0 0 1 4 0M2 15l.701-7.015c.027-.266.04-.399.06-.513A3 3 0 0 1 5.485 5.01C5.599 5 5.733 5 6 5m16 10-.701-7.015c-.027-.266-.04-.399-.06-.513a3 3 0 0 0-2.722-2.463C18.4 5 18.267 5 18 5m-9.172 7.172a4 4 0 1 1-5.656 5.656 4 4 0 0 1 5.656-5.656m12 0a4 4 0 1 1-5.656 5.656 4 4 0 0 1 5.656-5.656"
    />
  </svg>
);
export default Glasses02Icon;
