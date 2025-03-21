import React from "react";

interface ColorpickerIconProps {
  className?: string;
}

const ColorpickerIcon: React.FC<ColorpickerIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7373 6.54021L17.4599 12.2627M5.06104 15.124L16.3339 3.85115C17.3874 2.79766 19.0954 2.79766 20.1489 3.85115C21.2024 4.90464 21.2024 6.61268 20.1489 7.66617L8.87605 18.939H5.06104V15.124Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ColorpickerIcon;
