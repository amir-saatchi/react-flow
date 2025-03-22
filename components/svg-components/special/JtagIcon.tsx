import React from "react";

interface JtagIconProps {
  className?: string;
}

const JtagIcon: React.FC<JtagIconProps> = ({ className }) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2249_6301"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="white" />
      </mask>
      <g mask="url(#mask0_2249_6301)">
        <path
          d="M9.2418 2.8125V5.56875M14.7543 2.8125V5.56875M9.2418 18.4312V21.1875M14.7543 18.4312V21.1875M18.4293 9.24375H21.1855M18.4293 13.8375H21.1855M2.81055 9.24375H5.5668M2.81055 13.8375H5.5668M9.9768 18.4312H14.0193C15.5629 18.4312 16.3348 18.4313 16.9244 18.1308C17.443 17.8666 17.8646 17.4449 18.1289 16.9263C18.4293 16.3367 18.4293 15.5649 18.4293 14.0212V9.97875C18.4293 8.43511 18.4293 7.66328 18.1289 7.07369C17.8646 6.55507 17.443 6.13341 16.9244 5.86916C16.3348 5.56875 15.5629 5.56875 14.0193 5.56875H9.9768C8.43315 5.56875 7.66133 5.56875 7.07174 5.86916C6.55311 6.13341 6.13146 6.55507 5.86721 7.07369C5.5668 7.66328 5.5668 8.43511 5.5668 9.97875V14.0212C5.5668 15.5649 5.5668 16.3367 5.86721 16.9263C6.13146 17.4449 6.55311 17.8666 7.07174 18.1308C7.66133 18.4313 8.43315 18.4312 9.9768 18.4312Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default JtagIcon;
