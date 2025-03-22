import React from "react";

interface IndentrightIconProps {
  className?: string;
}

const IndentrightIcon: React.FC<IndentrightIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3020_17689)">
        <path
          d="M11.9886 10.0173H2.75494M11.9886 4.81229L2.75494 4.81229M21.2222 15.4701H2.75494M21.2222 20.6751H2.75494M19.909 3.7812L15.942 6.65634C15.6449 6.8716 15.4964 6.97923 15.4433 7.11117C15.3968 7.22674 15.3968 7.35496 15.4433 7.47054C15.4964 7.60248 15.6449 7.71011 15.942 7.92537L19.909 10.8005C20.3317 11.1068 20.543 11.26 20.7199 11.2565C20.8739 11.2534 21.0182 11.1836 21.1131 11.0665C21.2222 10.9318 21.2222 10.6765 21.2222 10.166V4.41572C21.2222 3.90516 21.2222 3.64988 21.1131 3.51525C21.0182 3.3981 20.8739 3.32835 20.7199 3.32526C20.543 3.3217 20.3317 3.47487 19.909 3.7812Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3020_17689">
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

export default IndentrightIcon;
