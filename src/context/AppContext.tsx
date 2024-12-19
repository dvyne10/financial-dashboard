import React, { createContext, useState, ReactNode, useEffect } from "react";

interface AppContextType {
  isSideNavOpen: boolean;
  setIsSideNavOpen: (isSideNavOpen: boolean) => void;
  isMobile: boolean | null;
  setIsMobile: (isMobile: boolean) => void;
}

const defaultValue: AppContextType = {
  isSideNavOpen: true,
  setIsSideNavOpen: () => {},
  isMobile: false,
  setIsMobile: () => {},
};

const AppContext = createContext<AppContextType>(defaultValue);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSideNavOpen(false); // Collapse on smaller screens
        setIsMobile(true);
      } else {
        setIsSideNavOpen(true); // Expand on larger screens
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  },[]);

  return (
    <AppContext.Provider
      value={{ isSideNavOpen, setIsSideNavOpen, isMobile, setIsMobile }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
