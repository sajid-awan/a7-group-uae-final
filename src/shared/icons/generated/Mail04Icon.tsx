import type { IconProps } from "../types";
const Mail04Icon = ({
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
      d="M10.256 2.633 3.032 7.33c-.344.224-.516.335-.576.477a.5.5 0 0 0 0 .388c.06.141.232.253.576.477l7.224 4.695c.631.41.947.616 1.287.696.3.07.613.07.914 0 .34-.08.656-.285 1.287-.696l7.224-4.695c.344-.224.516-.336.576-.477a.5.5 0 0 0 0-.388c-.06-.142-.232-.253-.576-.477l-7.224-4.696c-.631-.41-.947-.615-1.287-.695a2 2 0 0 0-.914 0c-.34.08-.656.285-1.287.695L2.728 7.527c-.266.173-.399.259-.495.374a1 1 0 0 0-.189.348C2 8.392 2 8.55 2 8.869v7.33c0 1.681 0 2.521.327 3.163a3 3 0 0 0 1.311 1.31C4.28 21 5.12 21 6.8 21h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 18.72 22 17.88 22 16.2V8.868c0-.317 0-.476-.044-.62a1 1 0 0 0-.189-.347c-.096-.115-.229-.201-.495-.374l-7.528-4.894"
    />
  </svg>
);
export default Mail04Icon;
