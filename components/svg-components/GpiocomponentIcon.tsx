import React from "react";

interface GpiocomponentIconProps {
  className?: string;
}

const GpiocomponentIcon: React.FC<GpiocomponentIconProps> = ({ className }) => {
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
        d="M2.78418 4.83789H7.39357C9.05042 4.83789 10.3936 6.18104 10.3936 7.83789V10.8001C10.3936 12.4569 11.7367 13.8001 13.3936 13.8001H21.2158M21.2158 13.8001L16.3284 8.91267M21.2158 13.8001L16.3284 18.6874"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default GpiocomponentIcon;
