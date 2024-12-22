import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { isSideNavOpen, isMobile, isTablet } = useTheme();
  console.log(isSideNavOpen, isMobile, isTablet)
  const computeMarginLeft = () => {
    if (isMobile) return "0px";
    if (isTablet) return "70px";
    return isSideNavOpen ? "250px" : "70px";
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div style={{ display: "flex", minHeight: "100vh", width: "100vw" }}>
        <Sidebar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            marginLeft: computeMarginLeft(),
          }}
        >
          <Navbar />
          <div
            style={{
              display: "flex",
              flexGrow: 1,
            }}
          >
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
