import React from "react";

interface FilesearchIconProps {
  className?: string;
}

const FilesearchIcon: React.FC<FilesearchIconProps> = ({ className }) => {
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
        d="M18.1736 10.6222V7.2231C18.1736 5.67959 18.1736 4.90783 17.8853 4.31829C17.6316 3.79971 17.2268 3.37809 16.729 3.11386C16.163 2.81348 15.4221 2.81348 13.9403 2.81348H8.29588C6.81408 2.81348 6.07318 2.81348 5.50721 3.11386C5.00936 3.37809 4.6046 3.79971 4.35094 4.31829C4.06256 4.90783 4.06256 5.67959 4.06256 7.2231V16.7773C4.06256 18.3208 4.06256 19.0926 4.35094 19.6821C4.6046 20.2007 5.00936 20.6223 5.50721 20.8865C6.07318 21.1869 6.81408 21.1869 8.29588 21.1869H10.6771M19.9375 21.1869L18.6146 19.8089M19.4965 17.5122C19.4965 19.288 18.1145 20.7276 16.4097 20.7276C14.705 20.7276 13.3229 19.288 13.3229 17.5122C13.3229 15.7364 14.705 14.2969 16.4097 14.2969C18.1145 14.2969 19.4965 15.7364 19.4965 17.5122Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FilesearchIcon;
