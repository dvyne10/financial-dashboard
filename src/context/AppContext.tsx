import React, { createContext, useState, ReactNode, useEffect } from "react";

interface AppContextType {
  isSideNavOpen: boolean;
  setIsSideNavOpen: (isSideNavOpen: boolean) => void;
  isMobile: boolean | null;
  setIsMobile: (isMobile: boolean) => void;
  isTablet: boolean | null;
  setIsTablet: (isTablet: boolean) => void;
}

const defaultValue: AppContextType = {
  isSideNavOpen: true,
  setIsSideNavOpen: () => {},
  isMobile: false,
  setIsMobile: () => {},
  isTablet: false,
  setIsTablet: () => {},
};

const AppContext = createContext<AppContextType>(defaultValue);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const screenWidth = window.screen.width;
  
      console.log("Viewport width (window.innerWidth):", viewportWidth);
      console.log("Screen width (window.screen.width):", screenWidth);
  
      if (viewportWidth <= 480 || screenWidth <= 480) {
        // Mobile
        setIsSideNavOpen(false);
        setIsMobile(true);
        setIsTablet(false);
      } else if ((viewportWidth > 480 && viewportWidth <= 768) || (screenWidth > 480 && screenWidth <= 768)) {
        // Tablet
        setIsSideNavOpen(false);
        setIsMobile(false);
        setIsTablet(true);
      } else {
        // Desktop
        setIsSideNavOpen(true);
        setIsMobile(false);
        setIsTablet(false);
      }
    };
  
    window.addEventListener("resize", handleResize);
    handleResize();
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  return (
    <AppContext.Provider
      value={{
        isSideNavOpen,
        setIsSideNavOpen,
        isMobile,
        setIsMobile,
        isTablet,
        setIsTablet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
