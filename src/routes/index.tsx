import React from "react";
import Dashboard from "../pages/dashboard";
import Settings from "../pages/settings";

export const routes = [
  { path: "/overview", element: <Dashboard /> },
  { path: "/setting", element: <Settings /> },
];
