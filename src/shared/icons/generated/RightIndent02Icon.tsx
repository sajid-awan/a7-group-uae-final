import type { IconProps } from "../types";
const RightIndent02Icon = ({
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
      d="M12 9.25H3M12 4H3m18 10.75H3M21 20H3M19.72 2.96l-3.867 2.9c-.29.217-.434.326-.486.459a.5.5 0 0 0 0 .362c.052.133.197.242.486.459l3.867 2.9c.412.309.618.463.79.46a.5.5 0 0 0 .384-.192C21 10.172 21 9.915 21 9.4V3.6c0-.515 0-.773-.106-.908a.5.5 0 0 0-.384-.192c-.172-.004-.378.151-.79.46"
    />
  </svg>
);
export default RightIndent02Icon;
