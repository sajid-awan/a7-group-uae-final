import type { IconProps } from "../types";
const GitPullRequestIcon = ({
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
      d="M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 0V8a2 2 0 0 0-2-2h-3M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0v12"
    />
  </svg>
);
export default GitPullRequestIcon;
