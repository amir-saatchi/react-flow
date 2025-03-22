import React from "react";

interface AlignrightIconProps {
  className?: string;
}

const AlignrightIcon: React.FC<AlignrightIconProps> = ({ className }) => {
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
        d="M20.9869 9.88541H7.24216M20.9869 5.65625H3.013M20.9869 14.1146H3.013M20.9869 18.3437H7.24216"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AlignrightIcon;
