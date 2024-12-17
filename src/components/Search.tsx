import React, { Component } from "react";
import styled from "styled-components";
import SearchSvg from "./svgs/SearchSvg";
import { theme } from "../styles";

const Search = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <Container style={style}>
      <Icon>
        <SearchSvg fill={theme.colors.lightText} />
      </Icon>
      <Input placeholder="Search for something" />
    </Container>
  );
};

export default Search;

const Container = styled.div`
  width: 255px;
  height: 50px;
  border-radius: 40px;
  align-items: center;
  padding: 0 1rem;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 0.5rem;
`;

const Input = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightText};
    opacity: 0.7;
  }
`;
