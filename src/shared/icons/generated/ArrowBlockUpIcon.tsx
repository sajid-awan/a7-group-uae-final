import type { IconProps } from "../types";
const ArrowBlockUpIcon = ({
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
      d="M9.8 21c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C9 20.62 9 20.48 9 20.2V10H5l7-7 7 7h-4v10.2c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C14.62 21 14.48 21 14.2 21z"
    />
  </svg>
);
export default ArrowBlockUpIcon;
