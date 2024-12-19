import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    text: "#232323",
    background: "#F5F7FA",
    whiteBG: "#FFFFFF",
    inActiveTextLink: "#B1B1B1",
    iconBG: "#F5F7FA",
    lightText: "#8BA3CB",
    border: "#DFEAF2",
    lightCardText: "#718EBF",
    darkCardText: "#343C6A",
    descriptionHeaderText: " #343C6A",
    cardIcon: "#FFF5D9",
    otherIcon: "#E7EDFF",
    cashIcon: "#DCFAF8",
    crText: "#FF4B4A",
    drText:"#41D4A8"
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
      iconBG: string;
      lightText: string;
      border: string;
      lightCardText: string;
      darkCardText: string;
      descriptionHeaderText: string;
      cardIcon: string;
      otherIcon: string;
      cashIcon: string;
      crText: string;
      drText: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
