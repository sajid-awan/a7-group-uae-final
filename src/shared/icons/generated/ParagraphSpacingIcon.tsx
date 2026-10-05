import type { IconProps } from "../types";
const ParagraphSpacingIcon = ({
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
      d="M21 10h-8m8-4h-8m8 8h-8m8 4h-8m-7 2V4m3 13-3 3-3-3M9 7 6 4 3 7"
    />
  </svg>
);
export default ParagraphSpacingIcon;
