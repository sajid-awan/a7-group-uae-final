import type { IconProps } from "../types";
const Fingerprint03Icon = ({
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
      d="M8.1 21.221a12.16 12.16 0 0 1-2.208-7.002A6.11 6.11 0 0 1 12 8.109a6.11 6.11 0 0 1 6.106 6.11m.331 6.093c-.11.006-.218.016-.329.016a6.11 6.11 0 0 1-6.106-6.11M13.269 22a9.16 9.16 0 0 1-4.322-7.781 3.054 3.054 0 1 1 6.107 0 3.054 3.054 0 1 0 6.108 0c0-5.062-4.102-9.164-9.16-9.164-5.059 0-9.16 4.102-9.16 9.164 0 1.128.126 2.226.358 3.286M20.526 5.863A11.33 11.33 0 0 0 12 2a11.33 11.33 0 0 0-8.525 3.863"
    />
  </svg>
);
export default Fingerprint03Icon;
