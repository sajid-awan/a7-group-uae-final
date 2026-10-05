import type { IconProps } from "../types";
const Umbrella03Icon = ({
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
      d="m6.25 21.959 5.75-9.96m5-8.66C12.687.85 7.29 1.937 4.246 5.683c-.297.365-.446.548-.489.81-.034.208.017.484.123.667.134.229.371.366.845.64l14.55 8.4c.474.274.711.41.976.412.212 0 .476-.093.64-.227.205-.169.289-.389.457-.829C23.07 11.048 21.313 5.83 17 3.34m0 0C15.087 2.235 11.297 5.217 8.536 10M17 3.34c1.913 1.105 1.226 5.878-1.536 10.66M22 22H2"
    />
  </svg>
);
export default Umbrella03Icon;
