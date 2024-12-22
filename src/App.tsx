import React, { Suspense, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import { useTheme } from "./hooks/useTheme";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { UserDataProvider } from "./context/UserDataContext";
import Loading from "./components/svgs/LoadingSvg";

const queryClient = new QueryClient();

function App() {
  const { isSideNavOpen, isMobile, isTablet } = useTheme();
  console.log(isSideNavOpen, isMobile, isTablet);
  const computeMarginLeft = () => {
    if (isMobile) return "0px";
    if (isTablet) return "70px";
    return isSideNavOpen ? "250px" : "100px";
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <UserDataProvider>
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
                <Suspense
                  fallback={
                    <div style={{}}>
                      <Loading />
                    </div>
                  }
                >
                  <Routes>
                  <Route path="/" element={<Navigate to="/overview" />} />
                    {routes.map((route, index) => (
                      <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                      />
                    ))}
                  </Routes>
                </Suspense>
              </div>
            </div>
          </div>
        </UserDataProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
