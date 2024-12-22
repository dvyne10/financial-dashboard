import React from "react";
import { SidebarData } from "./SidebarData";
import { NavLink, useLocation } from "react-router-dom";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarToggle,
  MenuItemLabel,
} from "./Sidebar.styles";
import TaskLogoSvg from "../svgs/TaskLogoSvg";
import { useTheme } from "../../hooks/useTheme";

const Sidebar: React.FC = () => {
  const { setIsSideNavOpen, isSideNavOpen, isTablet } = useTheme();
  const location = useLocation();

  const toggleSidebar = () => {
    if (!isTablet) setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <SidebarContainer $isOpen={isSideNavOpen}>
      <SidebarHeader $isOpen={isSideNavOpen}>
        <SidebarToggle onClick={toggleSidebar}>
          <TaskLogoSvg />
        </SidebarToggle>
        <p style={{ display: isSideNavOpen ? "block" : "none" }}>Soar Task</p>
      </SidebarHeader>

      <SidebarMenu>
        {SidebarData.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <SidebarMenuItem $active={location.pathname === item.path}>
              {item.icon && item.icon(location.pathname === item.path)}
              <MenuItemLabel
                $active={location.pathname === item.path}
                $isOpen={isSideNavOpen}
              >
                {item.title}
              </MenuItemLabel>
            </SidebarMenuItem>
          </NavLink>
        ))}
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
