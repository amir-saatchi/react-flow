import React from "react";

interface CheksquareIconProps {
  className?: string;
}

const CheksquareIcon: React.FC<CheksquareIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3020_17705)">
        <path
          d="M8.76713 11.0386L11.6507 13.9222L21.2626 4.31031M15.4954 3.34912H7.6137C5.99876 3.34912 5.19128 3.34912 4.57445 3.66341C4.03188 3.93987 3.59075 4.381 3.31429 4.92357C3 5.5404 3 6.34788 3 7.96282V16.0368C3 17.6518 3 18.4592 3.31429 19.0761C3.59075 19.6186 4.03188 20.0598 4.57445 20.3362C5.19128 20.6505 5.99876 20.6505 7.6137 20.6505H15.6877C17.3026 20.6505 18.1101 20.6505 18.7269 20.3362C19.2695 20.0598 19.7106 19.6186 19.9871 19.0761C20.3014 18.4592 20.3014 17.6518 20.3014 16.0368V11.9998"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3020_17705">
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

export default CheksquareIcon;
