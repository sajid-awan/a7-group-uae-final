import type { IconProps } from "../types";
const NavigationPointer01Icon = ({
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
      d="M3.413 10.745c-.595-.232-.893-.348-.98-.515a.5.5 0 0 1 0-.461c.087-.167.385-.283.98-.515L20.3 2.664c.537-.21.806-.315.978-.258a.5.5 0 0 1 .316.316c.057.172-.048.44-.258.977l-6.59 16.888c-.232.595-.348.893-.515.98a.5.5 0 0 1-.462 0c-.167-.088-.282-.385-.514-.98l-2.628-6.759a1 1 0 0 0-.107-.232.5.5 0 0 0-.116-.117 1 1 0 0 0-.232-.106z"
    />
  </svg>
);
export default NavigationPointer01Icon;
