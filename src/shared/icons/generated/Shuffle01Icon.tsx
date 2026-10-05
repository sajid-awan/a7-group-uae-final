import type { IconProps } from "../types";
const Shuffle01Icon = ({
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
      d="m18 21 3-3-3-3m3 3h-2.431c-.94 0-1.409 0-1.835-.13a3 3 0 0 1-1.033-.552c-.344-.283-.605-.674-1.126-1.455l-.242-.363M18 9l3-3-3-3m3 3h-2.431c-.94 0-1.409 0-1.835.13a3 3 0 0 0-1.033.552c-.344.283-.605.674-1.126 1.455l-5.15 7.726c-.521.781-.782 1.172-1.126 1.455-.304.25-.655.438-1.033.552-.426.13-.896.13-1.835.13H3M3 6h2.431c.94 0 1.409 0 1.835.13a3 3 0 0 1 1.033.552c.344.283.605.674 1.126 1.455l.242.363"
    />
  </svg>
);
export default Shuffle01Icon;
