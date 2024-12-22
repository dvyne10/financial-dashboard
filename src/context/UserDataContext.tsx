import React, { createContext, useContext } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

// Types for Data
interface CardDetail {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  transparent: boolean;
}

interface Transaction {
  depositType: string;
  depositDesc: string;
  depostiDate: string;
  depositAmnt: string;
  paymentMethod: string;
}

interface Contact {
  id: number;
  name: string;
  role: string;
  profilePicture: string;
}

interface UserDataContextProps {
  cardDetails: CardDetail[] | undefined;
  transactionData: Transaction[] | undefined;
  frequentContacts: Contact[] | undefined;
  isLoading: boolean;
  isError: boolean;
  activityData: [] | undefined;
  balanceHistory: [] | undefined;
  expenseDistribution: [] | undefined;
}

const UserDataContext = createContext<UserDataContextProps | undefined>(
  undefined
);

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }
  return context;
};

const fetchCardDetails = async () => {
  const { data } = await axios.get("/api/cardDetails");
  return data;
};

const fetchTransactionData = async () => {
  const { data } = await axios.get("/api/transactionData");
  return data;
};

const fetchFrequentContacts = async () => {
  const { data } = await axios.get("/api/frequentContacts");
  return data;
};

const fetchActivityData = async () => {
  const { data } = await axios.get("/api/weeklyActivityData");
  return data;
};

const fetchBalanceHistory = async () => {
  const { data } = await axios.get("/api/balanceHistory");
  return data;
};

const fetchExpenseDistribution = async () => {
  const { data } = await axios.get("/api/expenseDistribution");
  return data;
};

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    data: cardDetails,
    isLoading: cardsLoading,
    isError: cardsError,
  } = useQuery({ queryKey: ["cardDetails"], queryFn: fetchCardDetails });

  const {
    data: transactionData,
    isLoading: transactionsLoading,
    isError: transactionsError,
  } = useQuery({
    queryKey: ["transactionData"],
    queryFn: fetchTransactionData,
  });

  const {
    data: frequentContacts,
    isLoading: contactsLoading,
    isError: contactsError,
  } = useQuery({
    queryKey: ["frequentContacts"],
    queryFn: fetchFrequentContacts,
  });

  const {
    data: activityData,
    isLoading: activityLoading,
    isError: activityError,
  } = useQuery({
    queryKey: ["weeklyActivityData"],
    queryFn: fetchActivityData,
  });

  const {
    data: balanceHistory,
    isLoading: balanceLoading,
    isError: balanceError,
  } = useQuery({
    queryKey: ["balanceHistory"],
    queryFn: fetchBalanceHistory,
  });

  const {
    data: expenseDistribution,
    isLoading: expenseLoading,
    isError: expenseError,
  } = useQuery({
    queryKey: ["expenseDistribution"],
    queryFn: fetchExpenseDistribution,
  });

  console.log(expenseDistribution,'here')

  const isLoading =
    cardsLoading ||
    transactionsLoading ||
    contactsLoading ||
    expenseLoading ||
    balanceLoading ||
    activityLoading;
  const isError =
    cardsError ||
    transactionsError ||
    contactsError ||
    activityError ||
    balanceError ||
    expenseError;

  const value = {
    cardDetails,
    transactionData,
    frequentContacts,
    isLoading,
    isError,
    activityData,
    balanceHistory,
    expenseDistribution,
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
