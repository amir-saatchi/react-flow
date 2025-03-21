import React from "react";

interface ComponentIconProps {
  className?: string;
}

const ComponentIcon: React.FC<ComponentIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2249_6402)">
        <path
          d="M11.385 3.53598C11.7247 3.19634 12.2753 3.19634 12.615 3.53598L15.0957 6.01674C15.4354 6.35637 15.4354 6.90703 15.0957 7.24667L12.615 9.72743C12.2753 10.0671 11.7247 10.0671 11.385 9.72743L8.90427 7.24667C8.56464 6.90703 8.56464 6.35637 8.90427 6.01674L11.385 3.53598Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M17.2533 9.40427C17.593 9.06464 18.1436 9.06464 18.4833 9.40427L20.964 11.885C21.3037 12.2247 21.3037 12.7753 20.964 13.115L18.4833 15.5957C18.1436 15.9354 17.593 15.9354 17.2533 15.5957L14.7726 13.115C14.4329 12.7753 14.4329 12.2247 14.7726 11.885L17.2533 9.40427Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M5.51674 9.40427C5.85637 9.06464 6.40703 9.06464 6.74667 9.40427L9.22743 11.885C9.56707 12.2247 9.56707 12.7753 9.22743 13.115L6.74667 15.5957C6.40703 15.9354 5.85637 15.9354 5.51674 15.5957L3.03598 13.115C2.69634 12.7753 2.69634 12.2247 3.03598 11.885L5.51674 9.40427Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M11.385 15.2726C11.7247 14.9329 12.2753 14.9329 12.615 15.2726L15.0957 17.7533C15.4354 18.093 15.4354 18.6436 15.0957 18.9833L12.615 21.464C12.2753 21.8037 11.7247 21.8037 11.385 21.464L8.90427 18.9833C8.56464 18.6436 8.56464 18.093 8.90427 17.7533L11.385 15.2726Z"
          stroke="white"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_2249_6402">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(2 2.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ComponentIcon;
