import React from "react";

interface InterfaceIconProps {
  className?: string;
}

const InterfaceIcon: React.FC<InterfaceIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2237_2358)">
        <path
          d="M2.9375 7.77083C2.9375 6.07901 2.9375 5.2331 3.26675 4.5869C3.55637 4.0185 4.0185 3.55637 4.5869 3.26675C5.2331 2.9375 6.07901 2.9375 7.77083 2.9375H16.2292C17.921 2.9375 18.7669 2.9375 19.4131 3.26675C19.9815 3.55637 20.4436 4.0185 20.7332 4.5869C21.0625 5.2331 21.0625 6.07901 21.0625 7.77083V16.2292C21.0625 17.921 21.0625 18.7669 20.7332 19.4131C20.4436 19.9815 19.9815 20.4436 19.4131 20.7332C18.7669 21.0625 17.921 21.0625 16.2292 21.0625H7.77083C6.07901 21.0625 5.2331 21.0625 4.5869 20.7332C4.0185 20.4436 3.55637 19.9815 3.26675 19.4131C2.9375 18.7669 2.9375 17.921 2.9375 16.2292V7.77083Z"
          fill="currentColor"
          stroke="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2237_2358">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(2 2)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default InterfaceIcon;
