import React from "react";

interface FwIconProps {
  className?: string;
}

const FwIcon: React.FC<FwIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2237_2340)">
        <path
          d="M8.25386 21.25H6.11965C4.35161 21.25 2.91833 19.697 2.91833 17.7812V6.21875C2.91833 4.30301 4.35161 2.75 6.11965 2.75H13.5894C15.3574 2.75 16.7907 4.30301 16.7907 6.21875V9.10938M13.0558 7.375H6.11965M9.85452 10.8438H6.11965M8.25386 14.3125H6.11965M14.3008 14.0556H11.4552V17.1389M11.4552 17.1389V20.2222M11.4552 17.1389H13.8943M15.9268 14.0556L17.0839 20.2222L18.5848 14.0556L20.0858 20.2222L21.2116 14.0556"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2237_2340">
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

export default FwIcon;
