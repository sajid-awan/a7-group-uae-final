import type { IconProps } from "../types";
const Compass02Icon = ({
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
      d="M22 12h-2m2 0c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m7.071 17.071-1.414-1.414M4 12H2m0 0c0 5.523 4.477 10 10 10M2 12C2 6.477 6.477 2 12 2M6.343 6.343 4.93 4.93M12 4V2m5.657 4.343L19.07 4.93M12 22v-2m-7.071-.929 1.414-1.414M12 8l4 4-4 4-4-4z"
    />
  </svg>
);
export default Compass02Icon;
