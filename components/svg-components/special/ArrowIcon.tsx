import React from "react";

interface ArrowIconProps {
  className?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ className }) => {
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
        d="M2.83368 12.0002H21.1664M21.1664 12.0002L14.2916 5.12549M21.1664 12.0002L14.2916 18.875"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
