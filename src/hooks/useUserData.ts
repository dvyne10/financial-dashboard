import { useContext } from "react";
import UserDataContext from "../context/UserDataContext";

// Hook for consuming the theme
export const useUserData = () => {
  const value = useContext(UserDataContext);

  const {
    cardDetails,
    transactionData,
    frequentContacts,
    isLoading,
    isError,
    activityData,
    balanceHistory,
    expenseDistribution,
  } = value!;

  return {
    cardDetails,
    transactionData,
    frequentContacts,
    isLoading,
    isError,
    activityData,
    balanceHistory,
    expenseDistribution,
  };
};
