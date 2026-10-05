import type { IconProps } from "../types";
const Repeat03Icon = ({
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
      d="m13 16-3 3 3 3m-3-3h5a7 7 0 0 0 3-13.326M6 18.326A7 7 0 0 1 9 5h5m-3 3 3-3-3-3"
    />
  </svg>
);
export default Repeat03Icon;
