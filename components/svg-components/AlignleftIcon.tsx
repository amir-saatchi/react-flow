import React from "react";

interface AlignleftIconProps {
  className?: string;
}

const AlignleftIcon: React.FC<AlignleftIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.8943 9.82461H2.75525M21.2448 5.47412H2.75525M21.2448 14.1751H2.75525M16.8943 18.5256H2.75525"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AlignleftIcon;
