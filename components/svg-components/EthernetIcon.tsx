import React from "react";

interface EthernetIconProps {
  className?: string;
}

const EthernetIcon: React.FC<EthernetIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2978_5431)">
        <path
          d="M8.2471 7.85009V10.9274M11.9911 7.85009V10.9274M15.7351 7.85009V10.9274M18.1456 3.74707C19.8452 3.74707 21.2229 5.12481 21.2229 6.82434V12.9789C21.2229 14.1119 20.3044 15.0304 19.1714 15.0304H18.5047C18.2214 15.0304 17.9918 15.26 17.9918 15.5433V17.0819C17.9918 17.3651 17.7622 17.5948 17.4789 17.5948H15.7351C15.4519 17.5948 15.2222 17.8244 15.2222 18.1076V20.1592C15.2222 20.4424 14.9926 20.672 14.7094 20.672H9.27286C8.9896 20.672 8.75998 20.4424 8.75998 20.1592V18.1076C8.75998 17.8244 8.53036 17.5948 8.2471 17.5948H6.50332C6.22006 17.5948 5.99044 17.3651 5.99044 17.0819V15.5433C5.99044 15.26 5.76082 15.0304 5.47756 15.0304H4.81082C3.6778 15.0304 2.75931 14.1119 2.75931 12.9789V6.82434C2.75931 5.12481 4.13705 3.74707 5.83657 3.74707H18.1456Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2978_5431">
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

export default EthernetIcon;
