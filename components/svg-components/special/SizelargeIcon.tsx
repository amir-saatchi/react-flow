import React from "react";

interface SizelargeIconProps {
  className?: string;
}

const SizelargeIcon: React.FC<SizelargeIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.375 20L17.264 16.8889M19.4861 11.5556C19.4861 15.7284 16.1034 19.1111 11.9306 19.1111C7.75774 19.1111 4.375 15.7284 4.375 11.5556C4.375 7.38274 7.75774 4 11.9306 4C16.1034 4 19.4861 7.38274 19.4861 11.5556Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SizelargeIcon;
