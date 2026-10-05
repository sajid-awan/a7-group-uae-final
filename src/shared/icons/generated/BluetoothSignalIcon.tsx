import type { IconProps } from "../types";
const BluetoothSignalIcon = ({
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
      d="m2 7 12 10-6 5V2l6 5L2 17M20.145 6.5a9.4 9.4 0 0 1 1.769 5.5 9.4 9.4 0 0 1-1.77 5.5M17 8.857A5.5 5.5 0 0 1 17.986 12 5.5 5.5 0 0 1 17 15.143"
    />
  </svg>
);
export default BluetoothSignalIcon;
