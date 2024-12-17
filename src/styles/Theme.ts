import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    text: "#232323",
    background: "#F5F7FA",
    whiteBG: "#FFFFFF",
    inActiveTextLink: "#B1B1B1",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      background: string;
      whiteBG: string;
      inActiveTextLink: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
