import type { IconProps } from "../types";
const Star01Icon = ({
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
      d="M11.283 3.453c.23-.467.345-.7.502-.775a.5.5 0 0 1 .43 0c.157.075.272.308.502.775l2.187 4.43c.068.138.102.207.152.26a.5.5 0 0 0 .155.113c.067.031.143.042.295.065l4.891.714c.515.076.773.113.892.24a.5.5 0 0 1 .133.409c-.023.171-.21.353-.582.716l-3.54 3.446c-.11.108-.165.161-.2.225a.5.5 0 0 0-.06.183c-.009.073.004.149.03.3l.835 4.868c.088.513.132.77.05.922a.5.5 0 0 1-.349.253c-.17.032-.4-.09-.862-.332l-4.373-2.3c-.136-.071-.204-.107-.276-.121a.5.5 0 0 0-.192 0c-.072.014-.14.05-.276.122l-4.373 2.3c-.461.242-.692.363-.862.331a.5.5 0 0 1-.348-.253c-.083-.152-.039-.409.05-.922l.834-4.867c.026-.152.039-.228.03-.3a.5.5 0 0 0-.06-.184c-.035-.064-.09-.117-.2-.225L3.16 10.4c-.373-.363-.56-.545-.582-.716a.5.5 0 0 1 .132-.41c.12-.126.377-.163.892-.239l4.891-.714c.152-.023.228-.034.295-.065a.5.5 0 0 0 .155-.113c.05-.053.084-.122.152-.26z"
    />
  </svg>
);
export default Star01Icon;
