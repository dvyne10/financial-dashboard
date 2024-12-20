import React, { Component } from "react";
import AccountCard from "../../components/AccountCard";
import { theme } from "../../styles";
import {
  BarChartWrapper,
  CardHolder,
  CardWrapper,
  Container,
  DescriptionTitle,
  MiddleSection,
  PieChartWrapper,
  RecentTransactionsCard,
  RecentTransactionsHoler,
} from "./style";
import { useTheme } from "../../hooks/useTheme";
import { myCards, recentTransactions } from "../../constants/strings";
import TransactionCard from "../../components/TransactionCard";
import { cardDetailsArray } from "../../data/creditCard";
import { transactionData } from "../../data/transactions";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";

const weeklyActivityData = [
  { day: "Mon", deposits: 100, withdrawals: 50 },
  { day: "Tue", deposits: 200, withdrawals: 80 },
  { day: "Wed", deposits: 150, withdrawals: 60 },
  { day: "Thu", deposits: 300, withdrawals: 90 },
  { day: "Fri", deposits: 250, withdrawals: 70 },
  { day: "Sat", deposits: 400, withdrawals: 100 },
  { day: "Sun", deposits: 350, withdrawals: 120 },
];

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
      <MiddleSection>
        <BarChartWrapper>
          <BarChart data={weeklyActivityData} />
        </BarChartWrapper>
        <PieChartWrapper>
          <PieChart/>
        </PieChartWrapper>
      </MiddleSection>
      
    </div>
  );
};

export default Dashboard;
