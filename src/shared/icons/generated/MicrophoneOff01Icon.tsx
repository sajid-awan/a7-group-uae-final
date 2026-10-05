import type { IconProps } from "../types";
const MicrophoneOff01Icon = ({
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
      d="M15 9.4V5a3 3 0 0 0-5.688-1.334M12 19v3m0-3a7 7 0 0 1-7-7v-2m7 9a7 7 0 0 0 7-7v-2M8 22h8M2 2l20 20m-10-7a3 3 0 0 1-3-3V9l5.123 5.12A3 3 0 0 1 12 15"
    />
  </svg>
);
export default MicrophoneOff01Icon;
