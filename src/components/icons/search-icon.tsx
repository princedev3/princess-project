import React from "react";

type IconProps = {
  size?: number;
  color?: string;
} & React.SVGProps<SVGSVGElement>;

export const SeearchIcon = ({
  size = 24,
  color = "#000",
  ...props
}: IconProps) => {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.9331 20L17.1554 16.2156M19.2489 11.1579C19.2489 13.0563 18.4948 14.8769 17.1524 16.2193C15.81 17.5617 13.9894 18.3158 12.091 18.3158C10.1926 18.3158 8.37197 17.5617 7.0296 16.2193C5.68724 14.8769 4.93311 13.0563 4.93311 11.1579C4.93311 9.2595 5.68724 7.43886 7.0296 6.0965C8.37197 4.75413 10.1926 4 12.091 4C13.9894 4 15.81 4.75413 17.1524 6.0965C18.4948 7.43886 19.2489 9.2595 19.2489 11.1579V11.1579Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SeearchIcon;
