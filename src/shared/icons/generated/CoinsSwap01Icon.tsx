import type { IconProps } from "../types";
const CoinsSwap01Icon = ({
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
      d="m6 2 2 2-2 2m2-2H6a4 4 0 0 0-4 4m16 14-2-2 2-2m-2 2h2a4 4 0 0 0 4-4m-8.583-2.583a6 6 0 1 0-2.834-2.834M14 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
    />
  </svg>
);
export default CoinsSwap01Icon;
