import React from "react";

interface BulletlistIconProps {
  className?: string;
}

const BulletlistIcon: React.FC<BulletlistIconProps> = ({ className }) => {
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
        d="M21.2411 11.9966L8.9137 11.9966M21.2411 5.83295L8.9137 5.83295M21.2411 18.1603L8.9137 18.1603M4.80457 11.9966C4.80457 12.564 4.34464 13.0239 3.77728 13.0239C3.20993 13.0239 2.75 12.564 2.75 11.9966C2.75 11.4293 3.20993 10.9694 3.77728 10.9694C4.34464 10.9694 4.80457 11.4293 4.80457 11.9966ZM4.80457 5.83295C4.80457 6.4003 4.34464 6.86023 3.77728 6.86023C3.20993 6.86023 2.75 6.4003 2.75 5.83295C2.75 5.26559 3.20993 4.80566 3.77728 4.80566C4.34464 4.80566 4.80457 5.26559 4.80457 5.83295ZM4.80457 18.1603C4.80457 18.7277 4.34464 19.1876 3.77728 19.1876C3.20993 19.1876 2.75 18.7277 2.75 18.1603C2.75 17.593 3.20993 17.1331 3.77728 17.1331C4.34464 17.1331 4.80457 17.593 4.80457 18.1603Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BulletlistIcon;
