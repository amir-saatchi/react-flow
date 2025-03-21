import React from "react";

interface BluetoothIconProps {
  className?: string;
}

const BluetoothIcon: React.FC<BluetoothIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2237_2322)">
        <path
          d="M6.46877 7.89065L17.5313 17.1094L12 21.7188V3.28125L17.5313 7.89065L6.46877 17.1094"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2237_2322">
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

export default BluetoothIcon;
