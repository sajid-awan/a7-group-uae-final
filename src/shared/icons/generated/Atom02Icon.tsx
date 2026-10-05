import type { IconProps } from "../types";
const Atom02Icon = ({
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
      d="M17.115 15.358q-.405.459-.851.906c-4.296 4.295-9.678 5.878-12.021 3.535-1.607-1.606-1.368-4.641.325-7.775M6.89 8.725q.422-.48.888-.947C12.074 3.482 17.456 1.9 19.8 4.243c1.608 1.607 1.367 4.645-.33 7.781m-3.206-4.246c4.296 4.296 5.88 9.678 3.536 12.021s-7.725.76-12.02-3.535C3.483 11.968 1.9 6.586 4.244 4.243s7.725-.76 12.02 3.535M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default Atom02Icon;
