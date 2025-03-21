import React from "react";

interface FilecheckIconProps {
  className?: string;
}

const FilecheckIcon: React.FC<FilecheckIconProps> = ({ className }) => {
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
        d="M13.8496 3.00462V6.82426C13.8496 7.34215 13.8496 7.6011 13.9504 7.79891C14.0391 7.97291 14.1805 8.11438 14.3545 8.20304C14.5523 8.30383 14.8113 8.30383 15.3292 8.30383H19.1488M9.22595 15.7016L11.0754 17.5511L15.2367 13.3898M13.8496 2.75537H9.04101C7.48731 2.75537 6.71046 2.75537 6.11703 3.05774C5.59503 3.32371 5.17064 3.74811 4.90466 4.27011C4.60229 4.86354 4.60229 5.64039 4.60229 7.19408V16.8113C4.60229 18.365 4.60229 19.1418 4.90466 19.7353C5.17064 20.2573 5.59503 20.6817 6.11703 20.9476C6.71046 21.25 7.48731 21.25 9.04101 21.25H14.9593C16.513 21.25 17.2898 21.25 17.8833 20.9476C18.4053 20.6817 18.8297 20.2573 19.0956 19.7353C19.398 19.1418 19.398 18.365 19.398 16.8113V8.30376L13.8496 2.75537Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FilecheckIcon;
