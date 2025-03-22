import React from "react";

interface DangerIconProps {
  className?: string;
}

const DangerIcon: React.FC<DangerIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3437_5414)">
        <path
          d="M12.021 9.09666V12.6935M12.021 16.2904H12.03M10.7759 4.50322L3.37995 17.278C2.96973 17.9866 2.76461 18.3409 2.79493 18.6317C2.82137 18.8853 2.95425 19.1157 3.16049 19.2657C3.39694 19.4376 3.80632 19.4376 4.62508 19.4376H19.4169C20.2357 19.4376 20.6451 19.4376 20.8815 19.2657C21.0878 19.1157 21.2207 18.8853 21.2471 18.6317C21.2774 18.3409 21.0723 17.9866 20.6621 17.278L13.2661 4.50322C12.8574 3.79719 12.653 3.44418 12.3864 3.32561C12.1538 3.22219 11.8882 3.22219 11.6557 3.32561C11.389 3.44418 11.1846 3.79719 10.7759 4.50322Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3437_5414">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(2 2.25)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DangerIcon;
