import type { IconProps } from "../types";
const MoonStarIcon = ({
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
      d="m18 2 .618 1.236c.265.53.398.796.575 1.026q.237.307.545.545c.23.177.495.31 1.026.575L22 6l-1.236.618c-.53.265-.796.398-1.026.575q-.307.237-.545.545c-.177.23-.31.495-.575 1.026L18 10l-.618-1.236c-.265-.53-.398-.796-.575-1.026a3 3 0 0 0-.545-.545c-.23-.177-.495-.31-1.026-.575L14 6l1.236-.618c.53-.265.796-.398 1.026-.575q.307-.237.545-.545c.177-.23.31-.495.575-1.026zm3 11.39A7.617 7.617 0 1 1 10.612 3C5.78 3.458 2 7.527 2 12.479A9.52 9.52 0 0 0 11.522 22c4.95 0 9.02-3.78 9.478-8.61"
    />
  </svg>
);
export default MoonStarIcon;
