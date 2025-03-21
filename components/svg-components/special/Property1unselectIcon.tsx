import React from "react";

interface Property1unselectIconProps {
  className?: string;
}

const Property1unselectIcon: React.FC<Property1unselectIconProps> = ({
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
      <path
        d="M4.97229 7.6859C4.97229 5.95937 4.97229 5.0961 5.3083 4.43666C5.60385 3.85659 6.07546 3.38498 6.65553 3.08942C7.31497 2.75342 8.17824 2.75342 9.90477 2.75342H14.4262C16.1527 2.75342 17.016 2.75342 17.6754 3.08942C18.2555 3.38498 18.7271 3.85659 19.0227 4.43666C19.3587 5.0961 19.3587 5.95937 19.3587 7.6859V21.2502L12.1655 17.1398L4.97229 21.2502V7.6859Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Property1unselectIcon;
