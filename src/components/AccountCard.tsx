import React from "react";
import styled from "styled-components";
import ChipSvg from "./svgs/ChipSvg";
import MasterCardSvg from "./svgs/MasterCardSvg";
import DarkChip from "./svgs/DarkChipSvg";

interface CardProps {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  bgColor?: string;
  tranparent?: boolean;
  bottomBgColor?: string;
}

const bgColorVal =
  "linear-gradient(90deg, rgba(90,91,111,1) 0%, rgba(0,0,0,1) 100%);";
const bottomBgColorVal =
  "linear-gradient(90deg, rgba(255,255,255,0.15) 100%, rgba(255,255,255,0) 100%)";

const AccountCard: React.FC<CardProps> = ({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  bgColor = bgColorVal,
  tranparent = false,
  bottomBgColor = bottomBgColorVal,
}) => {
  const maskCardNumber = (cardNumber: string): string => {
    const cleanedNumber = cardNumber.replace(/\s+/g, "");
    const firstFour = cleanedNumber.slice(0, 4);
    const lastFour = cleanedNumber.slice(-4);

    return `${firstFour} **** **** ${lastFour}`;
  };

  return (
    <Wrapper>
      <CardContainer transparent={tranparent} bgColor={bgColor}>
        <TopSection>
          <div>
            <CardLabel transparent={tranparent}>Balance</CardLabel>
            <CardValue transparent={tranparent}>${balance}</CardValue>
          </div>
          <ChipIcon>{!tranparent ? <ChipSvg /> : <DarkChip />}</ChipIcon>
        </TopSection>

        <MiddleSection>
          <CardDetail>
            <DetailLabel transparent={tranparent}>CARD HOLDER</DetailLabel>
            <DetailValue transparent={tranparent}>{cardHolder}</DetailValue>
          </CardDetail>
          <CardDetail>
            <DetailLabel transparent={tranparent}>VALID THRU</DetailLabel>
            <DetailValue transparent={tranparent}>{validThru}</DetailValue>
          </CardDetail>
        </MiddleSection>
      </CardContainer>
      <BottomSection transparent={tranparent} bottomBgColor={bottomBgColor}>
        <CardNumber transparent={tranparent}>
          {maskCardNumber(cardNumber)}
        </CardNumber>
        <ToggleIcon>
          <MasterCardSvg fill={tranparent ? "#9199AF80" : "#FFFFFF80"} />
        </ToggleIcon>
      </BottomSection>
    </Wrapper>
  );
};

export default AccountCard;

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const CardContainer = styled.div<{ bgColor: string; transparent: boolean }>`
  width: 300px;
  height: 191px;
  border-radius: 25px;
  background: ${({ bgColor, transparent, theme }) =>
    transparent ? theme.colors.whiteBG : bgColor};
  color: white;
  display: flex;
  flex-direction: column;
  padding: 24px 24px 20px 26px;
  border: 1px solid
    ${({ theme, transparent }) => (transparent ? theme.colors.border : "none")};
  margin-right: 30px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 225px;
    height: 137px;
    padding: 17px 20px 20px 17px;
    margin-right: 20px;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 33px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 23px;
  }
`;

const CardLabel = styled.p<{ transparent: boolean }>`
  font-size: 12px;
  margin: 0;
  font-family: "Lato", serif;
  font-weight: 400;
  color: ${({ transparent, theme }) =>
    transparent ? theme.colors.lightCardText : "white"};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 11px;
  }
`;

const CardValue = styled.h1<{ transparent: boolean }>`
  font-size: 24px;
  margin: 0;
  font-family: "Lato", serif;
  line-height: 24px;
  font-weight: 600;
  color: ${({ transparent, theme }) =>
    transparent ? theme.colors.darkCardText : "white"};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;

const ChipIcon = styled.div`
  font-size: 36px;
`;

const MiddleSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  margin-right: 73px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 0px;
  }
`;

const CardDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailLabel = styled.p<{ transparent: boolean }>`
  font-size: 12px;
  margin: 0;
  font-family: "Lato", serif;
  font-weight: 400;
  opacity: 70%;
  color: ${({ transparent, theme }) =>
    transparent ? theme.colors.darkCardText : "white"};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
  }
`;

const DetailValue = styled.p<{ transparent: boolean }>`
  font-size: 15px;
  margin: 0;
  font-family: "Lato", serif;
  font-weight: 600;
  color: ${({ transparent, theme }) =>
    transparent ? theme.colors.darkCardText : "white"};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;

const BottomSection = styled.div<{
  bottomBgColor: string;
  transparent: boolean;
}>`
  display: flex;
  justify-content: space-between;
  margin-top: -70px;
  width: 300px;
  height: 50px;
  border-top: 1px solid
    ${({ theme, transparent }) => (transparent ? theme.colors.border : "none")};
  padding: 20px 24px 0px 26px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  color: white;
  background: ${({ bottomBgColor }) => bottomBgColor};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 225px;
    height: 17px;
    padding: 16px 17px 16px 20px;
    margin-top: -50px;
  }
`;

const CardNumber = styled.p<{ transparent: boolean }>`
  font-size: 22px;
  font-family: "Lato", serif;
  font-weight: 600;
  margin: 0px;
  color: ${({ transparent, theme }) =>
    transparent ? theme.colors.darkCardText : "white"};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 15px;
  }
`;

const ToggleIcon = styled.div`
  display: flex;
  gap: 5px;
`;
