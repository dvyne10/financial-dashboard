import styled from "styled-components";

export const Container = styled.div<{
  $isOpen: boolean;
  $isMobileScreen: boolean;
  $isTablet: boolean;
}>`
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  transition: opacity 0.3s ease;
  background-color: ${({ theme }) => theme.colors.whiteBG};
  margin: 30px 40px;
  border-radius: 25px;
  /* @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${({ $isMobileScreen, $isOpen, $isTablet }) =>
    $isOpen
      ? "calc(100% - 250px - 2rem)"
      : $isOpen
      ? "calc(100vw - 100px - 2rem)"
      : "calc(100vw - 250px - 2rem)"};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(100vw - 60px - 2rem);
    margin: 25px;
  }*/
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: calc(100vw - 60px - 2rem);
    margin: 20px;
  }
`;

export const TabBar = styled.div`
  display: flex;
  border-bottom: ${({ theme }) => "1px solid " + theme.colors.tabBorder};
  margin: 30px;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 22px 0px;
    justify-content: center;
  }
`;

export const Tab = styled.button<{ active: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  color: ${({ theme, active }) =>
    active ? theme.colors.text : theme.colors.lightCardText};
  background: transparent;
  border: none;
  margin-right: 60px;
  transition: background 0.3s ease, color 0.3s ease;
  font-size: 16px;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -0px;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: ${({ theme, active }) =>
      active ? theme.colors.text : "transparent"};
    transition: background-color 0.3s ease-in-out;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  @media (max-width: 1000px) and (min-width: 769px) {
    margin-right: 30px;
    padding: 5px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 13px;
    padding: 5px;
    margin-right: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    margin-right: 20px;
    padding: 5px;
  }
`;

export const TabContent = styled.div`
  padding: 20px;
  transition: opacity 0.3s ease;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0px;
    display: flex;
    align-items: center;
  }
`;
