import styled from "styled-components";

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  width: ${({ $isOpen }) => ($isOpen ? "250px" : "100px")};
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.whiteBG};
  color: white;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${({ $isOpen }) => ($isOpen ? "70px" : "70px")};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: fixed;
    width: ${({ $isOpen }) => ($isOpen ? "250px" : "0px")};
    height: 100vh;
    overflow: hidden;
  }
`;

export const SidebarHeader = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem;
  padding-left: 3rem;
  font-size: 1.2rem;
  font-weight: 800;
  gap: 1rem;
  height: 100px;
  > p {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  }
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.whiteBG};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
    padding: 1rem;
  }
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

export const SidebarMenuItem = styled.li<{ $active: boolean }>`
  padding: 1rem;
  padding-left: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    height: 60px;
    width: 6px;
    background-color: ${({ theme, $active }) =>
      $active ? theme.colors.text : "transparent"};
    transition: background-color 0.3s ease-in-out;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem;
  }
`;

export const SidebarToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0;
  &:hover {
    color: ${({ theme }) => theme.colors.whiteBG};
  }
`;

export const MenuItemLabel = styled.span<{
  $isOpen: boolean;
  $active: boolean;
}>`
  display: ${({ $isOpen }) => ($isOpen ? "inline" : "none")};
  transition: opacity 0.3s;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.text : theme.colors.inActiveTextLink};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: inline;
  }
`;
