import React, { Component } from "react";
import styled from "styled-components";
import DCard from "./svgs/DCard";
import DCash from "./svgs/DCash";
import PayPalSvg from "./svgs/PayPalSvg";
import { convertToFormattedDate } from "../constants/utils";

export interface TransactionCardProps {
  depositType?: "CR" | "DR";
  depositDesc?: string;
  depostiDate?: string;
  depositAmnt?: string;
  paymentMethod?: "Card" | "Cash" | "Other";
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  paymentMethod,
  depositAmnt,
  depositDesc,
  depositType,
  depostiDate,
}) => {
  let maxLength = 15;
  const truncatedDesc =
    depositDesc!.length > maxLength
      ? depositDesc!.substring(0, maxLength) + "..."
      : depositDesc;
  return (
    <CardContainer>
      <IconWrapper $paymentMethod={paymentMethod}>
        {paymentMethod === "Card" ? (
          <DCard />
        ) : paymentMethod === "Cash" ? (
          <DCash />
        ) : (
          <PayPalSvg />
        )}
      </IconWrapper>
      <Content>
        <Title>{truncatedDesc}</Title>
        <Date>{convertToFormattedDate(depostiDate!)}</Date>
      </Content>
      <Amount $depositType={depositType}>
        {(depositType === "CR" ? "-" : "" )+ depositAmnt}
      </Amount>
    </CardContainer>
  );
};

export default TransactionCard;

const CardContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 12px;
  }
`;

const IconWrapper = styled.div<{
  $paymentMethod: TransactionCardProps["paymentMethod"];
}>`
  width: 55px;
  height: 55px;
  background-color: ${({ theme, $paymentMethod }) =>
    $paymentMethod === "Card"
      ? theme.colors.cardIcon
      : $paymentMethod === "Cash"
      ? theme.colors.cashIcon
      : theme.colors.otherIcon};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 17px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: 15px;
  }
`;

const Content = styled.div`

 box-sizing: border-box;`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 7px;
`;

const Date = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.lightCardText};
`;

const Amount = styled.p<{ $depositType: TransactionCardProps["depositType"] }>`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  color: ${({ theme, $depositType }) =>
    $depositType === "CR" ? theme.colors.crText : theme.colors.drText};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 11px;
  }
`;
