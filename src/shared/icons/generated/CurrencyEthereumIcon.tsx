import type { IconProps } from "../types";
const CurrencyEthereumIcon = ({
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
      d="m12 2 8 9-8 2-8-2zm-8 9 8-2m8 2-8-2m0-7v7m-6.5 6 6.5 7 6.5-7-6.5 1.5z"
    />
  </svg>
);
export default CurrencyEthereumIcon;
