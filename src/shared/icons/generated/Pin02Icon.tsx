import type { IconProps } from "../types";
const Pin02Icon = ({
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
      d="M8.377 15.616 2.72 21.273m8.974-14.631-1.56 1.56a2 2 0 0 1-.264.242 1 1 0 0 1-.207.11c-.082.033-.17.05-.347.086l-3.665.733c-.952.19-1.428.286-1.65.537a1 1 0 0 0-.243.8c.046.333.39.677 1.076 1.363l7.086 7.086c.686.687 1.03 1.03 1.362 1.076a1 1 0 0 0 .801-.242c.251-.223.346-.7.537-1.651l.733-3.665a2 2 0 0 1 .085-.347 1 1 0 0 1 .11-.207c.051-.073.115-.136.242-.264l1.561-1.56c.082-.082.122-.123.167-.158a1 1 0 0 1 .126-.085 2 2 0 0 1 .208-.097l2.495-1.069c.727-.312 1.091-.468 1.256-.72a1 1 0 0 0 .144-.747c-.06-.295-.34-.575-.9-1.135l-5.142-5.143c-.56-.56-.84-.84-1.135-.9a1 1 0 0 0-.748.144c-.252.166-.407.53-.72 1.257l-1.068 2.495a2 2 0 0 1-.097.208 1 1 0 0 1-.085.126 2 2 0 0 1-.158.167"
    />
  </svg>
);
export default Pin02Icon;
