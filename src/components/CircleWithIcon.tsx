import React from "react";
import styled from "styled-components";

interface CircleWithIconProps {
  children: React.ReactNode;
  width?: string | number;
  height?: string | number;
  bgColor?: string;
  style?: React.CSSProperties;
}

const CircleWithIcon: React.FC<CircleWithIconProps> = ({
  children,
  width = 50,
  height = 50,
  bgColor,
  style,
}) => {
  return (
    <Container style={style} width={width} height={height} bgColor={bgColor}>
      {children}
    </Container>
  );
};

export default CircleWithIcon;

const Container = styled.div<{
  width: string | number;
  height: string | number;
  bgColor?: string;
}>`
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height};
  background-color: ${({ theme, bgColor }) => bgColor || theme.colors.iconBG};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
