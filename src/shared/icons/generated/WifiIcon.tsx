import type { IconProps } from "../types";
const WifiIcon = ({
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
      d="M12 19.5h.01M22.806 8.7A15.94 15.94 0 0 0 12 4.5c-4.166 0-7.96 1.592-10.807 4.2m3.539 3.543A10.96 10.96 0 0 1 12 9.5a10.96 10.96 0 0 1 7.268 2.743m-3.57 3.532A5.97 5.97 0 0 0 12 14.5c-1.416 0-2.718.49-3.745 1.312"
    />
  </svg>
);
export default WifiIcon;
