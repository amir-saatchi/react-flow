import React from "react";

interface FontIconProps {
  className?: string;
}

const FontIcon: React.FC<FontIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3022_17841)">
        <path
          d="M2.73419 20.7208H6.00448M13.6351 20.7208H21.2658M5.89547 15.2703H13.4171M9.49278 5.78652L15.8153 20.7208M3.82429 20.7208L10.3649 3.2793H12.5451L20.1757 20.7208"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3022_17841">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(2 2)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FontIcon;
