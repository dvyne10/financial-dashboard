import React, { createContext, useState, ReactNode, useEffect } from "react";

type UserData = {
  name?: string;
  email?: string;
  dob?: string;
  permanentAddress?: string;
  presentAddress?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  avatar?: string;
};

interface AppContextType {
  isSideNavOpen: boolean;
  setIsSideNavOpen: (isSideNavOpen: boolean) => void;
  isMobile: boolean | null;
  setIsMobile: (isMobile: boolean) => void;
  isTablet: boolean | null;
  setIsTablet: (isTablet: boolean) => void;
  userData: UserData;
  saveUserData: (data: UserData) => void;
  setUserData: (data: UserData) => void;
}

const defaultValue: AppContextType = {
  isSideNavOpen: true,
  setIsSideNavOpen: () => {},
  isMobile: false,
  setIsMobile: () => {},
  isTablet: false,
  setIsTablet: () => {},
  userData: {},
  saveUserData: () => {},
  setUserData: () => {},
};

const AppContext = createContext<AppContextType>(defaultValue);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const [userData, setUserData] = useState<UserData>(() => {
    // localStorage.clear()
    const savedData = localStorage.getItem("userData");
    return savedData ? JSON.parse(savedData) : {};
  });

  const saveUserData = (data: UserData) => {
    setUserData(data);
    localStorage.setItem("userData", JSON.stringify(data));
  };

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
      } else if (
        (viewportWidth > 480 && viewportWidth <= 768) ||
        (screenWidth > 480 && screenWidth <= 768)
      ) {
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

  useEffect(() => {
    let previousView = window.innerWidth <= 768 ? "mobile" : "desktop";

    const handleResize = () => {
      const currentView = window.innerWidth <= 768 ? "mobile" : "desktop";

      // Refresh the page only when toggling between mobile and desktop views
      if (previousView !== currentView) {
        previousView = currentView;
        window.location.reload();
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
        userData,
        setUserData,
        saveUserData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
