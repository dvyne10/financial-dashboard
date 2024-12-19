import React, { Component } from "react";

const MasterCardSvg = ({
  width = "44",
  height = "30",
  fill = "white",
}: {
  width?: string;
  height?: string;
  fill?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="15" fill={fill} fill-opacity="0.5" />
      <circle cx="29" cy="15" r="15" fill={fill} fill-opacity="0.5" />
    </svg>
  );
};

export default MasterCardSvg;
