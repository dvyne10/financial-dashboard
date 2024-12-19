import React, { Component } from "react";

const DCash = ({
  width = "26",
  height = "26",
  fill = "#16DBCC",
}: {
  width?: string;
  height?: string;
  fill?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0001 10.379C13.4962 10.379 13.9013 10.7831 13.9013 11.2792C13.9013 11.7319 14.2693 12.0988 14.7219 12.0988C15.1736 12.0988 15.5415 11.7319 15.5415 11.2792C15.5415 10.1671 14.817 9.22869 13.8197 8.88556V8.42048C13.8197 7.96884 13.4528 7.59987 13.0001 7.59987C12.5464 7.59987 12.1795 7.96884 12.1795 8.42048V8.88556C11.1822 9.22869 10.4597 10.1671 10.4597 11.2792C10.4597 12.6817 11.5987 13.8206 13.0001 13.8206C13.4962 13.8206 13.9013 14.2257 13.9013 14.7218C13.9013 15.2189 13.4962 15.6231 13.0001 15.6231C12.504 15.6231 12.0999 15.2189 12.0999 14.7218C12.0999 14.2691 11.732 13.9012 11.2793 13.9012C10.8256 13.9012 10.4597 14.2691 10.4597 14.7218C10.4597 15.8339 11.1822 16.7713 12.1795 17.1144V17.5795C12.1795 18.0332 12.5464 18.4011 13.0001 18.4011C13.4528 18.4011 13.8197 18.0332 13.8197 17.5795V17.1144C14.817 16.7713 15.5415 15.8339 15.5415 14.7218C15.5415 13.3204 14.4016 12.1804 13.0001 12.1804C12.504 12.1804 12.0999 11.7763 12.0999 11.2792C12.0999 10.7831 12.504 10.379 13.0001 10.379ZM19.872 17.5547C20.274 17.7666 20.769 17.6126 20.9799 17.2136C21.662 15.9248 22.0217 14.4676 22.0217 13C22.0217 8.02671 17.9734 3.97947 13.0001 3.97947C8.0258 3.97947 3.97856 8.02671 3.97856 13C3.97856 17.9743 8.0258 22.0215 13.0001 22.0215C14.446 22.0215 15.8826 21.6722 17.1548 21.0097C17.5569 20.802 17.7129 20.3049 17.5042 19.9039C17.2954 19.5039 16.8004 19.3447 16.3973 19.5545C15.3441 20.1044 14.2 20.3824 13.0001 20.3824C8.93013 20.3824 5.61771 17.071 5.61771 13C5.61771 8.93104 8.93013 5.61862 13.0001 5.61862C17.0701 5.61862 20.3825 8.93104 20.3825 13C20.3825 14.202 20.0869 15.3936 19.5309 16.4457C19.318 16.8467 19.471 17.3428 19.872 17.5547ZM13.0001 0.697021C10.6241 0.697021 8.31725 1.37707 6.3298 2.66173C5.94844 2.90771 5.83992 3.41517 6.08589 3.7955C6.3329 4.17583 6.83829 4.28332 7.22069 4.03941C8.94046 2.92735 10.9414 2.33824 13.0001 2.33824C18.8798 2.33824 23.6619 7.12135 23.6619 13C23.6619 18.8797 18.8798 23.6628 13.0001 23.6628C7.12044 23.6628 2.33733 18.8797 2.33733 13C2.33733 10.9609 2.91507 8.97755 4.00956 7.26708C4.25347 6.88468 4.14185 6.37722 3.75945 6.13331C3.37808 5.8894 2.87063 6.00102 2.62775 6.38239C1.36479 8.35744 0.697144 10.6477 0.697144 13C0.697144 19.785 6.21508 25.303 13.0001 25.303C19.7841 25.303 25.3031 19.785 25.3031 13C25.3031 6.21703 19.7841 0.697021 13.0001 0.697021Z"
        fill={fill}
      />
    </svg>
  );
};

export default DCash;