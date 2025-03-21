import React from "react";

interface FileminusIconProps {
  className?: string;
}

const FileminusIcon: React.FC<FileminusIconProps> = ({ className }) => {
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
        d="M18.891 11.946V7.2225C18.891 5.67886 18.891 4.90703 18.5906 4.31744C18.3264 3.79882 17.9047 3.37716 17.3861 3.11291C16.7965 2.8125 16.0247 2.8125 14.481 2.8125H8.60104C7.05739 2.8125 6.28557 2.8125 5.69598 3.11291C5.17736 3.37716 4.7557 3.79882 4.49145 4.31744C4.19104 4.90703 4.19104 5.67886 4.19104 7.2225V16.7775C4.19104 18.3211 4.19104 19.093 4.49145 19.6826C4.7557 20.2012 5.17736 20.6228 5.69598 20.8871C6.28557 21.1875 7.05739 21.1875 8.60104 21.1875H13.3785M14.2973 16.5937H19.8098"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FileminusIcon;
