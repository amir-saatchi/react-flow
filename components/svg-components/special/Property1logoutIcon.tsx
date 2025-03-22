import React from "react";

interface Property1logoutIconProps {
  className?: string;
}

const Property1logoutIcon: React.FC<Property1logoutIconProps> = ({
  className,
}) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2945_19743)">
        <path
          d="M15.8151 4.25011L17.0411 4.25011C18.7578 4.25011 19.6161 4.25011 20.2717 4.52423C20.8485 4.76535 21.3174 5.15008 21.6112 5.6233C21.9453 6.16128 21.9453 6.86553 21.9453 8.27404L21.9453 15.3159C21.9453 16.7244 21.9453 17.4287 21.6112 17.9667C21.3174 18.4399 20.8485 18.8246 20.2717 19.0657C19.6161 19.3398 18.7578 19.3398 17.0411 19.3398L15.8151 19.3398M8.6632 7.60339L4.74999 11.795M4.74999 11.795L8.6632 15.9866M4.74999 11.795L15.8151 11.795"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2945_19743">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(2.75 22) rotate(-90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Property1logoutIcon;
