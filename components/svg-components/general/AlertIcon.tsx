import React from "react";

interface AlertIconProps {
  className?: string;
}

const AlertIcon: React.FC<AlertIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2378_1538)">
        <path
          d="M12 8.9V12.5M12 16.1H12.009M21 12.5C21 17.4706 16.9706 21.5 12 21.5C7.02944 21.5 3 17.4706 3 12.5C3 7.52944 7.02944 3.5 12 3.5C16.9706 3.5 21 7.52944 21 12.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2378_1538">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(2 2.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AlertIcon;
