import React, { Component, useRef, useState } from "react";
import AccountCard from "../../components/AccountCard";
import {
  BarChartWrapper,
  BottomSection,
  CardHolder,
  CardWrapper,
  ContactCardInnerWrapper,
  ContactCardWrapper,
  Container,
  DescriptionTitle,
  InputDescriptionLable,
  InputWrapper,
  LineChartContainer,
  LineChartWrapper,
  MiddleSection,
  PieChartWrapper,
  QuickTransferContaier,
  RecentTransactionsCard,
  RecentTransactionsHoler,
  RightChevronButton,
  SendButton,
  TextInput,
} from "./style";
import { useTheme } from "../../hooks/useTheme";
import { myCards, recentTransactions } from "../../constants/strings";
import TransactionCard from "../../components/TransactionCard";
import { cardDetailsArray } from "../../data/creditCard";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import ContactCard from "../../components/ContactCard";
import RightChevron from "../../components/svgs/RightChevronSvg";
import SendSvg from "../../components/svgs/SendSvg";
import LineChart from "../../components/LineChart";
import { theme } from "../../styles";
import { useUserData } from "../../hooks/useUserData";

const Dashboard = () => {
  const { isSideNavOpen, isMobile, isTablet } = useTheme();
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const {
    isLoading,
    isError,
    cardDetails,
    frequentContacts,
    transactionData,
    activityData,
  } = useUserData();

  const handleScrollRight = () => {
    console.log("here");
    const wrapper = scrollWrapperRef.current;
    if (wrapper) {
      const cardWidth = wrapper.children[0].getBoundingClientRect().width + 28;
      wrapper.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const handleSelectContact = (index: number) => {
    setSelectedIndex(index);
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim()) {
      setInputValue("");
    }
  };
  return (
    <div
      style={{
        padding: "1rem",
        flexGrow: 1,
        height: "100%",
        backgroundColor: isMobile ? theme.colors.whiteBG : "none",
      }}
    >
      {/* Top section */}
      <Container $isOpen={isSideNavOpen} $isMobileScreen={!isMobile}>
        <CardHolder>
          <DescriptionTitle>{myCards}</DescriptionTitle>
          <CardWrapper>
            {cardDetails && cardDetails?.slice(0, 2)?.map((card, index) => {
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
            {transactionData && transactionData?.slice(0, 3)?.map((transaction, index) => {
              return (
                <TransactionCard
                  paymentMethod={
                    transaction.paymentMethod as "Card" | "Cash" | "Other"
                  }
                  depositDesc={transaction.depositDesc}
                  depostiDate={transaction.depostiDate}
                  depositAmnt={transaction.depositAmnt}
                  depositType={transaction.depositType as "CR" | "DR"}
                />
              );
            })}
          </RecentTransactionsCard>
        </RecentTransactionsHoler>
      </Container>

      {/* Middle section */}
      <MiddleSection style={{ marginTop: 20 }}>
        <div>
          <DescriptionTitle>Weekly Activity</DescriptionTitle>
          <BarChartWrapper>
            <BarChart data={activityData!} />
          </BarChartWrapper>
        </div>
        <div>
          <DescriptionTitle>Expense Statistics</DescriptionTitle>
          <PieChartWrapper>
            <PieChart />
          </PieChartWrapper>
        </div>
      </MiddleSection>

      {/* Quick Transfer */}
      <BottomSection>
        <div>
          <DescriptionTitle>Quick Transfer</DescriptionTitle>
          <QuickTransferContaier>
            <ContactCardWrapper>
              <ContactCardInnerWrapper ref={scrollWrapperRef}>
                {frequentContacts?.map((contact, index) => {
                  return (
                    <ContactCard
                      key={index}
                      name={contact.name}
                      profilePic={contact.profilePicture}
                      role={contact.role}
                      selected={selectedIndex === index}
                      onClick={() => handleSelectContact(index)}
                    />
                  );
                })}
              </ContactCardInnerWrapper>
              <RightChevronButton onClick={handleScrollRight}>
                <RightChevron />
              </RightChevronButton>
            </ContactCardWrapper>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <InputDescriptionLable>Write Amount</InputDescriptionLable>
              <InputWrapper>
                <TextInput
                  type="number"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="amount"
                />
                <SendButton onClick={handleSendClick}>
                  Send <SendSvg style={{ marginLeft: 11 }} />
                </SendButton>
              </InputWrapper>
            </div>
          </QuickTransferContaier>
        </div>

        <LineChartContainer>
          <DescriptionTitle>Balance History</DescriptionTitle>
          <LineChartWrapper>
            <LineChart />
          </LineChartWrapper>
        </LineChartContainer>
      </BottomSection>
    </div>
  );
};

export default Dashboard;
