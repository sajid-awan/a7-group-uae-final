import type { IconProps } from "../types";
const PentagonIcon = ({
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
      d="M11.06 2.932c.338-.245.507-.368.692-.415a1 1 0 0 1 .497 0c.184.047.353.17.691.415l8.119 5.892c.338.245.507.368.61.53a1 1 0 0 1 .153.473c.012.19-.052.389-.182.787l-3.1 9.53c-.13.398-.194.596-.315.743a1 1 0 0 1-.403.293c-.177.07-.386.07-.803.07H6.982c-.418 0-.626 0-.804-.07a1 1 0 0 1-.402-.293c-.122-.147-.186-.345-.316-.742l-3.1-9.531c-.13-.398-.194-.597-.182-.787a1 1 0 0 1 .154-.474c.102-.16.272-.284.61-.53z"
    />
  </svg>
);
export default PentagonIcon;
