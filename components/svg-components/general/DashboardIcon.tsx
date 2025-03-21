import React from "react";

interface DashboardIconProps {
  className?: string;
}

const DashboardIcon: React.FC<DashboardIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.76385 6.03472C2.76385 5.54481 2.95847 5.07496 3.30489 4.72854C3.65131 4.38212 4.12116 4.1875 4.61107 4.1875H10.1527V20.8125H4.61107C4.12116 20.8125 3.65131 20.6179 3.30489 20.2714C2.95847 19.925 2.76385 19.4552 2.76385 18.9653V6.03472ZM13.8472 4.1875H19.3888C19.8787 4.1875 20.3486 4.38212 20.695 4.72854C21.0414 5.07496 21.236 5.54481 21.236 6.03472V10.6528H13.8472V4.1875ZM13.8472 14.3472H21.236V18.9653C21.236 19.4552 21.0414 19.925 20.695 20.2714C20.3486 20.6179 19.8787 20.8125 19.3888 20.8125H13.8472V14.3472Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DashboardIcon;
