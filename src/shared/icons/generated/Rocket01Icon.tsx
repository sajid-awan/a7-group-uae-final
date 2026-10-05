import type { IconProps } from "../types";
const Rocket01Icon = ({
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
      d="m13 11-9.5 9.5M14.018 3.537a22.6 22.6 0 0 1 3.483 2.855 22.6 22.6 0 0 1 2.876 3.514M9.255 7.896 6.38 6.937a1 1 0 0 0-.962.186L2.56 9.54a1 1 0 0 0 .3 1.702l2.708.997m6.113 6.113.997 2.707a1 1 0 0 0 1.702.3l2.417-2.857a1 1 0 0 0 .186-.962l-.959-2.875M19.348 2.27l-4.906.818a2.44 2.44 0 0 0-1.383.74l-6.613 7.07a4.653 4.653 0 0 0 6.576 6.576l7.07-6.613c.391-.367.652-.853.74-1.383l.818-4.906a2 2 0 0 0-2.302-2.302"
    />
  </svg>
);
export default Rocket01Icon;
