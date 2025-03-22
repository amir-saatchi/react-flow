import React from "react";

interface DirectiondownIconProps {
  className?: string;
}

const DirectiondownIcon: React.FC<DirectiondownIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2353_3652"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="24"
      >
        <rect
          width="24"
          height="24"
          transform="translate(0.875)"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_2353_3652)"></g>
      <path
        d="M8.87491 10L12.875 14L16.875 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DirectiondownIcon;
