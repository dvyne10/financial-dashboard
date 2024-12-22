import styled from "styled-components";

export const Container = styled.div<{
  $isOpen: boolean;
  $isMobileScreen: boolean;
}>`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: ${({ $isMobileScreen, $isOpen }) =>
    $isOpen
      ? "calc(100vw - 250px - 2rem)"
      : $isMobileScreen
      ? "calc(100vw - 100px - 2rem)"
      : ""};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    //  width: calc(100vw - 2rem - 105px);
  }
`;

export const CardHolder = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(100vw - 2rem - 5px);
    flex-direction: column;
    margin-right: 0px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-y: scroll;
  flex-wrap: wrap;
  gap: 30px;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-wrap: nowrap;
  }
`;

export const DescriptionTitle = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.descriptionHeaderText};
  margin-bottom: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const RecentTransactionsHoler = styled.div``;

export const RecentTransactionsCard = styled.div`
  width: 350px;
  height: 235px;
  padding: 25px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.whiteBG};
  border-radius: 25px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    background-color: transparent;
    padding: 0px;
    width: calc(100vw - 2rem - 5px);
  }
`;

export const MiddleSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 30px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: calc(100vw - 2rem - 75px);
  }
`;

export const BarChartWrapper = styled.div`
  width: 730px;
  height: 322px;
  top: 45px;
  gap: 0px;
  border-radius: 25px;
  opacity: 0px;
  transition: all 0.3s ease;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  box-sizing: border-box;
  margin-right: 30px;
  @media (max-width: 768px) {
    width: calc(100vw - 2rem - 75px);
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    background-color: transparent;
    height: auto;
  }
`;

export const PieChartWrapper = styled.div`
  width: 350px;
  height: 322px;
  top: 45px;
  gap: 0px;
  border-radius: 25px;
  opacity: 0px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: "0 auto";
  @media (max-width: 480px) {
    width: 325px;
    height: 240px;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const QuickTransferContaier = styled.div`
  width: 445px;
  height: 276px;
  background-color: white;
  border-radius: 25px;
  padding: 35px 25px;
  box-sizing: border-box;
  // margin-right: 30px;
  @media (max-width: 768px) {
    width: 400px;
    height: 276px;
  }
  @media (max-width: 480px) {
    width: 380px;
    height: 195px;
    background: transparent;
    margin-right: 0px;
  }
`;

export const ContactCardWrapper = styled.div`
  display: flex;
  overflow-y: scroll;
  height: auto;
  position: relative;
  margin-bottom: 29px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContactCardInnerWrapper = styled.div`
  width: 80%;
  display: flex;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
  scrollbar-width: none;
`;

export const RightChevronButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 4px 4px 18px -2px #e7e4e8cc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 30%;
  margin-right: 10px;
  background-color: white;
  @media (max-width: 480px) {
    margin-right: 6px;
    width: 40px;
    height: 40px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 265px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.secTextInputColor};
  @media (max-width: 480px) {
    width: 207px;
    height: 40px;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.secTextInputColor};
  padding: 10px 15px;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  border: 0px;
  -moz-appearance: textfield; /* Firefox */
  -webkit-appearance: none; /* Chrome, Safari */
  appearance: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    border: 0px;
  }
  &:hover {
    border: 0px;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.lightCardText};
  }
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const SendButton = styled.button`
  margin-left: 10px;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.text};
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #777777;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 480px) {
    font-size: 13px;
    height: 40px;
    padding: 12px 21px;
  }
`;

export const InputDescriptionLable = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  color: ${({ theme }) => theme.colors.lightCardText};
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const LineChartWrapper = styled.div`
  width: 635px;
  height: 276px;
  border-radius: 25px;
  background: white;
  padding: 35px 25px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: calc(100vw - 2rem - 75px);
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    background-color: transparent;
    padding: 0px;
    display: flex;
    align-items: center;
    flex: 1;
  }
`;

export const LineChartContainer = styled.div`
  @media (max-width: 480px) {
    width: calc(100vw - 2rem - 75px);
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`;
