import React, { Component } from "react";
import styled from "styled-components";

const ProfilePic = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default ProfilePic;

const Container = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.iconBG};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 35px;
    height: 35px;
  }
`;
