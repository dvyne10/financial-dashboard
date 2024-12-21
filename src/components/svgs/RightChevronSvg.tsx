import React, { Component } from "react";

const RightChevron = ({
  width = "9",
  height = "15",
  fill = "#232323",
}: {
  width?: string;
  height?: string;
  fill?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L7.5 7.5L1 14" stroke="#718EBF" stroke-width="2" />
    </svg>
  );
};

export default RightChevron;
