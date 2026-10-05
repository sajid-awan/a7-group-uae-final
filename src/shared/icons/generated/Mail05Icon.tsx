import type { IconProps } from "../types";
const Mail05Icon = ({
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
      d="m13.744 2.633 7.528 4.894c.266.173.399.259.495.374a1 1 0 0 1 .189.348c.044.143.044.302.044.62v7.33c0 1.681 0 2.521-.327 3.163a3 3 0 0 1-1.311 1.31C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 18.72 2 17.88 2 16.2V8.868c0-.317 0-.476.044-.62a1 1 0 0 1 .189-.347c.096-.115.229-.201.495-.374l7.528-4.894m0 0L4.064 6.658c-.688.447-1.032.671-1.151.955a1 1 0 0 0 0 .774c.12.284.463.507 1.15.954l6.193 4.025c.631.41.947.616 1.287.696.3.07.613.07.914 0 .34-.08.656-.285 1.287-.696l6.192-4.025c.688-.447 1.032-.67 1.151-.954a1 1 0 0 0 0-.774c-.12-.284-.463-.508-1.15-.955l-6.193-4.025c-.631-.41-.947-.615-1.287-.695a2 2 0 0 0-.914 0c-.34.08-.656.285-1.287.695M21.5 19l-6.643-6m-5.714 0L2.5 19"
    />
  </svg>
);
export default Mail05Icon;
