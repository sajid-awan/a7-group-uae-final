import type { IconProps } from "../types";
const MessageCircle02Icon = ({
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
      d="M21 12a9 9 0 0 1-12.385 8.342c-.2-.081-.3-.122-.38-.14a1 1 0 0 0-.219-.024 2.3 2.3 0 0 0-.353.045l-3.558.593c-.373.062-.56.093-.694.035a.5.5 0 0 1-.262-.262c-.058-.135-.027-.321.035-.694l.593-3.558c.03-.18.045-.27.045-.353a1 1 0 0 0-.024-.219c-.018-.08-.059-.18-.14-.38A9 9 0 1 1 21 12"
    />
  </svg>
);
export default MessageCircle02Icon;
