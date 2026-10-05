import type { IconProps } from "../types";
const LockUnlocked02Icon = ({
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
      d="M7 11V8a5 5 0 0 1 9.9-1M7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2v-.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 11 17.88 11 16.2 11H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 13.28 3 14.12 3 15.8v.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21"
    />
  </svg>
);
export default LockUnlocked02Icon;
