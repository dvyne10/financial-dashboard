import { useContext } from "react";
import AppContext from "../context/AppContext";

// Hook for consuming the theme
export const useTheme = () => {
  const { isSideNavOpen, setIsSideNavOpen,isMobile } = useContext(AppContext);

  return { isSideNavOpen, setIsSideNavOpen,isMobile };
};
