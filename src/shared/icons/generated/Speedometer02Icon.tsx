import type { IconProps } from "../types";
const Speedometer02Icon = ({
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12m20 0c0-5.523-4.477-10-10-10m10 10h-2.5M2 12C2 6.477 6.477 2 12 2M2 12h2.5M12 2v2.5m7.078.5L13.5 10.5m5.578 8.578-.203-.203c-.692-.692-1.038-1.038-1.442-1.286a4 4 0 0 0-1.156-.479c-.46-.11-.95-.11-1.928-.11H9.651c-.978 0-1.468 0-1.928.11a4 4 0 0 0-1.156.48c-.404.247-.75.593-1.442 1.285l-.203.203M4.922 5l1.736 1.736M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default Speedometer02Icon;
