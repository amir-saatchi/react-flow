import React from "react";

interface DividerIconProps {
  className?: string;
}

const DividerIcon: React.FC<DividerIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3020_17702)">
        <path
          d="M2.995 12H3.005M7.495 12H7.505M16.495 12H16.505M11.995 12H12.005M20.995 12H21.005M20.995 21V20.2C20.995 19.0799 20.995 18.5198 20.777 18.092C20.5853 17.7157 20.2793 17.4097 19.903 17.218C19.4752 17 18.9151 17 17.795 17H6.195C5.07489 17 4.51484 17 4.08701 17.218C3.71069 17.4097 3.40473 17.7157 3.21298 18.092C2.995 18.5198 2.995 19.0799 2.995 20.2V21M20.995 3V3.8C20.995 4.9201 20.995 5.48016 20.777 5.90798C20.5853 6.28431 20.2793 6.59027 19.903 6.78201C19.4752 7 18.9151 7 17.795 7H6.195C5.07489 7 4.51484 7 4.08701 6.78201C3.71069 6.59027 3.40473 6.28431 3.21298 5.90798C2.995 5.48016 2.995 4.92011 2.995 3.8V3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3020_17702">
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

export default DividerIcon;
