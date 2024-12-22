import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin:0px;
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
    a {
    text-decoration: none;
    color: inherit;
  }
    p {
    margin:0px;
    }

    * {
    outline: 1px solid red
    }
`;
