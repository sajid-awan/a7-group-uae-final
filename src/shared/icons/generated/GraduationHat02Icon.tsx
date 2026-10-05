import type { IconProps } from "../types";
const GraduationHat02Icon = ({
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
      d="M17 14.5v-3.006c0-.18 0-.27-.027-.348a.5.5 0 0 0-.116-.187c-.058-.06-.139-.1-.3-.18L12 8.499m-8 1v6.807c0 .372 0 .558.058.72a1 1 0 0 0 .244.382c.124.12.293.198.631.353l6.4 2.933c.246.112.368.169.496.19q.171.03.342 0c.128-.021.25-.078.496-.19l6.4-2.933c.338-.155.507-.233.63-.353a1 1 0 0 0 .245-.381c.058-.163.058-.349.058-.72V9.5m-18-1 9.642-4.822c.131-.065.197-.098.266-.11a.5.5 0 0 1 .184 0c.069.012.135.045.266.11L22 8.5l-9.642 4.82a1 1 0 0 1-.266.112.5.5 0 0 1-.184 0c-.069-.013-.135-.046-.266-.111z"
    />
  </svg>
);
export default GraduationHat02Icon;
