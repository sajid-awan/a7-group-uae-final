import type { IconProps } from "../types";
const Signal02Icon = ({
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
      d="M16.243 5.757a6 6 0 0 1 0 8.485m-8.486 0a6 6 0 0 1 0-8.485M4.93 17.071c-3.906-3.905-3.906-10.237 0-14.142m14.142 0c3.906 3.905 3.906 10.237 0 14.142M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 0v9"
    />
  </svg>
);
export default Signal02Icon;
