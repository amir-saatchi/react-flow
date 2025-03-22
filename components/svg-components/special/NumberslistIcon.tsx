import React from "react";

interface NumberslistIconProps {
  className?: string;
}

const NumberslistIcon: React.FC<NumberslistIconProps> = ({ className }) => {
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
        d="M10.6833 6.1468H21.2187M10.6832 12.4878H21.2187M10.878 18.8286H21.2187M2.78125 15.9019C2.78125 15.3845 2.9868 14.8882 3.35269 14.5223C3.71858 14.1564 4.21483 13.9509 4.73227 13.9509C5.24971 13.9509 5.74596 14.1564 6.11185 14.5223C6.47773 14.8882 6.68329 15.3845 6.68329 15.9019C6.68329 16.4784 6.19553 16.8774 5.70778 17.3652L2.78125 19.8039H6.68329M4.73227 10.0489V4.1958L2.78125 6.14682"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NumberslistIcon;
