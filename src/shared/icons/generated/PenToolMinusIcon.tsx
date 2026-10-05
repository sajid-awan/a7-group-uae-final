import type { IconProps } from "../types";
const PenToolMinusIcon = ({
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
      d="M2 5h6m11 6-1.762 6.165c-.087.305-.13.458-.212.584a1 1 0 0 1-.277.282c-.124.084-.275.13-.578.224L4 22 7.745 9.83c.093-.304.14-.455.224-.58a1 1 0 0 1 .282-.276c.126-.082.279-.125.583-.213L15 7M4 22l6.586-6.586m11.283-7.546L18.13 4.131c-.396-.396-.594-.594-.822-.668a1 1 0 0 0-.618 0c-.228.074-.426.272-.822.668l-.738.737c-.396.396-.594.595-.668.823a1 1 0 0 0 0 .618c.074.228.272.426.668.822l3.738 3.737c.396.396.594.595.822.669a1 1 0 0 0 .618 0c.228-.075.426-.273.822-.669l.738-.737c.396-.396.594-.594.668-.822a1 1 0 0 0 0-.618c-.074-.229-.272-.427-.668-.823M12 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
    />
  </svg>
);
export default PenToolMinusIcon;
