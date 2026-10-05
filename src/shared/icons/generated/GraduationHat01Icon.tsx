import type { IconProps } from "../types";
const GraduationHat01Icon = ({
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
      d="M5 10v6.01c0 .36 0 .54.055.698a1 1 0 0 0 .23.373c.118.12.278.2.6.36l5.4 2.7c.262.132.393.198.53.223a1 1 0 0 0 .37 0c.137-.025.268-.091.53-.222l5.4-2.7c.322-.16.482-.241.6-.36a1 1 0 0 0 .23-.374c.055-.159.055-.338.055-.697V10M2 8.5l9.642-4.822c.131-.065.197-.098.266-.11a.5.5 0 0 1 .184 0c.069.012.135.045.266.11L22 8.5l-9.642 4.82a1 1 0 0 1-.266.112.5.5 0 0 1-.184 0c-.069-.013-.135-.046-.266-.111z"
    />
  </svg>
);
export default GraduationHat01Icon;
