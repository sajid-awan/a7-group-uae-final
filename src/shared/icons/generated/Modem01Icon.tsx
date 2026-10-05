import type { IconProps } from "../types";
const Modem01Icon = ({
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
      d="M16.243 4.757a6 6 0 0 1 0 8.485m-8.486 0a6 6 0 0 1 0-8.485M4.858 16c-3.834-3.91-3.81-10.19.07-14.071m14.143 0c3.882 3.881 3.905 10.16.07 14.07M12 16V9M5 22h14c.932 0 1.398 0 1.765-.151a2 2 0 0 0 1.083-1.083C22 20.398 22 19.932 22 19s0-1.398-.152-1.766a2 2 0 0 0-1.083-1.082C20.398 16 19.932 16 19 16H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.082C2 17.602 2 18.068 2 19s0 1.398.152 1.765a2 2 0 0 0 1.083 1.082C3.602 22 4.068 22 5 22"
    />
  </svg>
);
export default Modem01Icon;
