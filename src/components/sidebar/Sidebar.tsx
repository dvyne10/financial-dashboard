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
import RightChevron from "../svgs/RightChevronSvg";
import { theme } from "../../styles";

const Sidebar: React.FC = () => {
  const { setIsSideNavOpen, isSideNavOpen, isTablet, isMobile } = useTheme();
  const location = useLocation();

  const toggleSidebar = () => {
    if (!isTablet) setIsSideNavOpen(!isSideNavOpen);
  };

  const closeSidebar = () => {
    setIsSideNavOpen(false);
  };

  return (
    <SidebarContainer $isOpen={isSideNavOpen}>
      <SidebarHeader $isOpen={isSideNavOpen}>
        <SidebarToggle onClick={toggleSidebar}>
          <TaskLogoSvg />
        </SidebarToggle>
        <div style={{display:"flex",alignItems:'center',justifyContent:'space-between',flex:1}}>
          <p
            style={{
              display: isSideNavOpen ? "block" : "none",
              color: theme.colors.descriptionHeaderText,
            }}
          >
            Soar Task
          </p>
          {isMobile && (
            <RightChevron
              style={{ transform: "rotate(180deg)",marginRight:10 }}
              onClick={closeSidebar}
            />
          )}
        </div>
      </SidebarHeader>

      <SidebarMenu>
        {SidebarData.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={()=>closeSidebar()}
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
