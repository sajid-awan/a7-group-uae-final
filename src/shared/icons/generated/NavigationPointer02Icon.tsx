import type { IconProps } from "../types";
const NavigationPointer02Icon = ({
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
      d="M5.037 21.325c-.585.257-.877.386-1.057.33a.5.5 0 0 1-.326-.327c-.057-.18.071-.472.328-1.057L11.263 3.67c.232-.528.348-.792.51-.873a.5.5 0 0 1 .446 0c.162.08.278.345.51.873l7.281 16.6c.257.585.385.878.328 1.057a.5.5 0 0 1-.326.326c-.18.057-.472-.072-1.057-.33l-6.637-2.92a1 1 0 0 0-.24-.088.5.5 0 0 0-.164 0c-.062.01-.121.036-.24.088z"
    />
  </svg>
);
export default NavigationPointer02Icon;
