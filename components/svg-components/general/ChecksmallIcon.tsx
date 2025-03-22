import React from "react";

interface ChecksmallIconProps {
  className?: string;
}

const ChecksmallIcon: React.FC<ChecksmallIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 9.5L10.5 15C10.5 15 9.08167 13.3725 8 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChecksmallIcon;
