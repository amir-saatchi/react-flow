import React from "react";

interface IndentleftIconProps {
  className?: string;
}

const IndentleftIcon: React.FC<IndentleftIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3022_17824)">
        <path
          d="M21.25 9.94429H12M21.25 4.54846L12 4.54845M21.25 15.5971H2.75M21.25 20.9929H2.75M4.06556 3.47957L8.03963 6.46012C8.33716 6.68327 8.48593 6.79485 8.53913 6.93163C8.58572 7.05144 8.58572 7.18436 8.53913 7.30417C8.48593 7.44095 8.33716 7.55253 8.03963 7.77568L4.06556 10.7562C3.64213 11.0738 3.43042 11.2326 3.25321 11.2289C3.09899 11.2257 2.95437 11.1534 2.85928 11.0319C2.75 10.8924 2.75 10.6277 2.75 10.0985V4.13734C2.75 3.60806 2.75 3.34342 2.85928 3.20386C2.95437 3.08241 3.09899 3.0101 3.25321 3.0069C3.43042 3.00321 3.64213 3.162 4.06556 3.47957Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3022_17824">
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

export default IndentleftIcon;
