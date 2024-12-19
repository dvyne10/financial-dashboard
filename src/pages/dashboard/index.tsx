import React, { Component } from "react";
import AccountCard from "../../components/AccountCard";
import { theme } from "../../styles";
import {
  CardHolder,
  CardWrapper,
  Container,
  DescriptionTitle,
  RecentTransactionsCard,
  RecentTransactionsHoler,
} from "./style";
import { useTheme } from "../../hooks/useTheme";
import { myCards, recentTransactions } from "../../constants/strings";
import TransactionCard from "../../components/TransactionCard";
import { cardDetailsArray } from "../../data/creditCard";
import { transactionData } from "../../data/transactions";

const Dashboard = () => {
  const { isSideNavOpen, isMobile } = useTheme();
  return (
    <div style={{ padding: "1rem", flexGrow: 1, height: "100%" }}>
      <Container $isOpen={isSideNavOpen} $isMobileScreen={!!isMobile}>
        <CardHolder>
          <DescriptionTitle>{myCards}</DescriptionTitle>
          <CardWrapper>
            {cardDetailsArray.slice(0, 2).map((card, index) => {
              return (
                <AccountCard
                  key={index}
                  balance={card.balance}
                  cardHolder={card.cardHolder}
                  validThru={card.validThru}
                  cardNumber={card.cardNumber}
                  tranparent={card.transparent}
                />
              );
            })}
          </CardWrapper>
        </CardHolder>
        <RecentTransactionsHoler>
          <DescriptionTitle>{recentTransactions}</DescriptionTitle>
          <RecentTransactionsCard>
            {transactionData.slice(0, 3).map((transaction, index) => {
              return (
                <TransactionCard
                  paymentMethod={transaction.paymentMethod}
                  depositDesc={transaction.depositDesc}
                  depostiDate={transaction.depostiDate}
                  depositAmnt={transaction.depositAmnt}
                  depositType={transaction.depositType}
                />
              );
            })}
          </RecentTransactionsCard>
        </RecentTransactionsHoler>
      </Container>
    </div>
  );
};

export default Dashboard;
