import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.whiteBG};
  margin: 0px;
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  box-sizing: border-box;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    padding-block: 20px;
    height: auto;
    padding-inline: 1rem;
  }
`;

export const NavbarSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
  margin: 0;
  @media (max-width: 1000px) and (min-width: 769px) {
  }
`;

export const NavbarToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0;
`;

export const NavItem = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
  }
  @media (max-width: 1000px) and (min-width: 769px) {
    // width: calc(100% - 250px - 2rem)
  }
`;

export const NavElement = styled.p`
  font-weight: 600;
  font-size: 28px;
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.descriptionHeaderText};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
  }
`;
