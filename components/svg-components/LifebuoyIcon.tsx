import React from "react";

interface LifebuoyIconProps {
  className?: string;
}

const LifebuoyIcon: React.FC<LifebuoyIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2249_6274)">
        <path
          d="M9.38684 9.38686L5.54765 5.54767M5.54765 18.4524L9.41577 14.5842M14.6107 14.6132L18.4499 18.4524M18.4499 5.54767L14.5812 9.41636M21.125 12C21.125 17.0396 17.0396 21.125 12 21.125C6.9604 21.125 2.875 17.0396 2.875 12C2.875 6.9604 6.9604 2.875 12 2.875C17.0396 2.875 21.125 6.9604 21.125 12ZM15.65 12C15.65 14.0158 14.0158 15.65 12 15.65C9.98416 15.65 8.35 14.0158 8.35 12C8.35 9.98416 9.98416 8.35 12 8.35C14.0158 8.35 15.65 9.98416 15.65 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2249_6274">
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

export default LifebuoyIcon;
