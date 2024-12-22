import React, { Component } from "react";

interface RightChevronProps extends React.SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  fill?: string;
  style?: React.CSSProperties;
}

const RightChevron: React.FC<RightChevronProps> = ({
  width = "9",
  height = "15",
  fill = "#232323",
  style,
  ...rest
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 15"
      fill="none"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M1 1L7.5 7.5L1 14" stroke="#718EBF" stroke-width="2" />
    </svg>
  );
};

export default RightChevron;
