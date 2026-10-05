import type { IconProps } from "../types";
const MessageXCircleIcon = ({
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
      d="m10 9 5 5m0-5-5 5m2.5 6a8.5 8.5 0 1 0-8.057-5.783c.108.32.162.481.172.604a.9.9 0 0 1-.028.326c-.03.12-.098.245-.232.494l-1.636 3.027c-.233.432-.35.648-.324.815a.5.5 0 0 0 .234.35c.144.087.388.062.876.011l5.121-.529c.155-.016.233-.024.303-.021s.12.009.187.024c.069.016.155.05.329.116A8.5 8.5 0 0 0 12.5 20"
    />
  </svg>
);
export default MessageXCircleIcon;
