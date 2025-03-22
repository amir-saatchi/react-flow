import React from "react";

interface BoldIconProps {
  className?: string;
}

const BoldIcon: React.FC<BoldIconProps> = ({ className }) => {
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
        d="M5.3125 11.9998H14.5433C17.0923 11.9998 19.1587 9.93343 19.1587 7.38443C19.1587 4.83542 17.0923 2.76904 14.5433 2.76904H5.3125V11.9998ZM5.3125 11.9998H15.6971C18.2461 11.9998 20.3125 14.0662 20.3125 16.6152C20.3125 19.1642 18.2461 21.2306 15.6971 21.2306H5.3125V11.9998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BoldIcon;
