import React from "react";

interface WifiIconProps {
  className?: string;
}

const WifiIcon: React.FC<WifiIconProps> = ({ className }) => {
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
        d="M12 18.375H12.0085M21.1854 9.19565C18.7656 6.97819 15.5408 5.625 11.9999 5.625C8.459 5.625 5.23417 6.97819 2.81433 9.19565M5.82212 12.2065C7.46952 10.7553 9.63194 9.875 12 9.875C14.368 9.875 16.5304 10.7553 18.1778 12.2065M15.1436 15.2088C14.2773 14.5298 13.1859 14.125 11.9999 14.125C10.7959 14.125 9.68944 14.5422 8.81704 15.2398"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WifiIcon;
