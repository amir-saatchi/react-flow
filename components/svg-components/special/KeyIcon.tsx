import React from "react";

interface KeyIconProps {
  className?: string;
}

const KeyIcon: React.FC<KeyIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2233_3553)">
        <g clipPath="url(#clip1_2233_3553)">
          <path
            d="M17.0694 8.95827C17.0694 8.43934 16.8715 7.92041 16.4755 7.52448C16.0796 7.12853 15.5606 6.93056 15.0417 6.93056M15.0417 15.0417C18.4014 15.0417 21.125 12.3181 21.125 8.95833C21.125 5.5986 18.4014 2.875 15.0417 2.875C11.6819 2.875 8.95833 5.5986 8.95833 8.95833C8.95833 9.23581 8.97691 9.50895 9.01289 9.77658C9.07207 10.2168 9.10166 10.4368 9.08174 10.5761C9.06099 10.7211 9.03458 10.7993 8.96309 10.9272C8.89446 11.05 8.77351 11.1709 8.53162 11.4128L3.35014 16.5943C3.17478 16.7697 3.08711 16.8573 3.02441 16.9597C2.96882 17.0504 2.92785 17.1493 2.90301 17.2527C2.875 17.3694 2.875 17.4934 2.875 17.7414V19.5028C2.875 20.0706 2.875 20.3545 2.98551 20.5714C3.08271 20.7622 3.23782 20.9173 3.42859 21.0145C3.64548 21.125 3.92939 21.125 4.49722 21.125H6.93056V19.0972H8.95833V17.0694H10.9861L12.5872 15.4684C12.8291 15.2265 12.95 15.1055 13.0728 15.0369C13.2007 14.9654 13.2789 14.939 13.4239 14.9183C13.5632 14.8983 13.7832 14.9279 14.2234 14.9871C14.491 15.0231 14.7642 15.0417 15.0417 15.0417Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2233_3553">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_2233_3553">
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

export default KeyIcon;
