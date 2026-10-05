import type { IconProps } from "../types";
const PenTool01Icon = ({
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
      d="m13 18-6.498-1.3c-.363-.072-.545-.108-.692-.197a1 1 0 0 1-.325-.312c-.094-.144-.138-.324-.225-.684L2 2l13.507 3.26c.36.087.54.13.684.225a1 1 0 0 1 .312.325c.088.147.125.329.197.692L18 13M2 2l7.586 7.586m6.545 11.283 4.738-4.738c.396-.396.594-.594.668-.822a1 1 0 0 0 0-.618c-.074-.228-.272-.426-.668-.822l-.738-.738c-.396-.396-.594-.594-.822-.668a1 1 0 0 0-.618 0c-.228.074-.426.272-.822.668L13.13 17.87c-.396.396-.594.594-.668.822a1 1 0 0 0 0 .618c.074.228.272.426.668.822l.738.738c.396.396.594.594.822.668a1 1 0 0 0 .618 0c.228-.074.426-.272.822-.668M13 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default PenTool01Icon;
