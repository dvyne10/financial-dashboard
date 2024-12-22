import { useContext } from "react";
import AppContext from "../context/AppContext";

export const useUserContext = () => {
  const { userData, setUserData, saveUserData } = useContext(AppContext);
  // if (!context) throw new Error("UserContext not found");
  return { userData, setUserData, saveUserData };
};
