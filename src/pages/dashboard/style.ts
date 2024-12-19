import styled from "styled-components";

export const Container = styled.div<{
  $isOpen: boolean;
  $isMobileScreen: boolean;
}>`
  display: flex;
  flex-wrap: wrap;
  width: ${({ $isMobileScreen, $isOpen }) =>
    $isOpen
      ? "calc(100vw - 250px - 2rem)"
      : !$isMobileScreen
      ? "calc(100vw - 100px - 2rem)"
      : ""};
`;

export const CardHolder = styled.div`
  //   height: 300px;
  margin-right: 30px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(100vw - 2rem);
    flex-direction: column;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-y: scroll;
  flex-wrap: wrap;
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
  color: ${({ theme }) => theme.colors.descriptionHeaderText};
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
    display: none;
  }
`;
