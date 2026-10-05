import type { IconProps } from "../types";
const Atom01Icon = ({
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
      d="M12 12h.01m3.525 3.535c-4.686 4.686-10.068 6.903-12.02 4.95-1.953-1.953.263-7.335 4.949-12.02 4.686-4.687 10.068-6.903 12.02-4.95 1.953 1.952-.263 7.334-4.949 12.02m0-7.071c4.686 4.686 6.902 10.068 4.95 12.02-1.953 1.953-7.335-.263-12.021-4.949S1.562 5.467 3.514 3.515c1.953-1.953 7.335.263 12.021 4.949M12.499 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
);
export default Atom01Icon;
