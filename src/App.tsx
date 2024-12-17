import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <main style={{ marginLeft: "250px", padding: "1rem", flexGrow: 1 }}>
          <h1>Welcome to the Dashboard</h1>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
