import type { IconProps } from "../types";
const Server03Icon = ({
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
      d="m22 17.5-.692-10.03c-.108-1.575-.163-2.362-.504-2.96a3 3 0 0 0-1.298-1.21C18.887 3 18.098 3 16.52 3H7.48c-1.578 0-2.367 0-2.986.3a3 3 0 0 0-1.298 1.21c-.341.598-.396 1.385-.504 2.96L2 17.5m20 0a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5m20 0a3.5 3.5 0 0 0-3.5-3.5h-13A3.5 3.5 0 0 0 2 17.5m4 0h.01m5.99 0h6"
    />
  </svg>
);
export default Server03Icon;
