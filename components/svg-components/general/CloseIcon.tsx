import React from "react";

interface CloseIconProps {
  className?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2351_5631)">
        <mask
          id="mask0_2351_5631"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <rect y="0.5" width="24" height="24" fill="currentColorD9D9D9" />
        </mask>
        <g mask="url(#mask0_2351_5631)">
          <path
            opacity="0.8"
            d="M16 8.5L8 16.5M8 8.5L16 16.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2351_5631">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloseIcon;
