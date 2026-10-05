import type { IconProps } from "../types";
const PencilLineIcon = ({
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
      d="M21 21h-8m-10.5.5 5.55-2.134c.354-.136.532-.205.698-.294q.221-.12.42-.273c.149-.116.283-.25.552-.519L21 7a2.828 2.828 0 1 0-4-4L5.72 14.28c-.269.269-.403.403-.519.552a3 3 0 0 0-.273.42c-.089.167-.157.344-.294.699zm0 0 2.058-5.35c.147-.384.221-.575.347-.663a.5.5 0 0 1 .38-.08c.15.029.295.174.585.464l2.26 2.259c.29.29.435.435.464.586a.5.5 0 0 1-.08.379c-.089.126-.28.2-.663.347z"
    />
  </svg>
);
export default PencilLineIcon;
