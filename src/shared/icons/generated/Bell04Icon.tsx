import type { IconProps } from "../types";
const Bell04Icon = ({
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
      d="M14.391 18.015a3 3 0 1 1-5.796 1.553M10.892 5.74a2.5 2.5 0 1 0-3.47.93m8.814 2.774c-.357-1.332-1.31-2.446-2.65-3.097-1.338-.65-2.954-.784-4.492-.373S6.225 7.31 5.391 8.544c-.835 1.233-1.103 2.674-.746 4.006.59 2.204.476 3.963.103 5.299-.425 1.522-.638 2.284-.58 2.437.065.175.113.223.287.29.152.06.792-.112 2.072-.455l11.865-3.18c1.28-.342 1.919-.514 2.021-.64.117-.146.135-.212.104-.396-.027-.161-.591-.714-1.721-1.82-.991-.971-1.97-2.437-2.56-4.64"
    />
  </svg>
);
export default Bell04Icon;
